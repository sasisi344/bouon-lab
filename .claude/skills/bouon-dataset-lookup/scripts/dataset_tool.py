#!/usr/bin/env python3
"""BouonLab .workspace/.data-set/ の検索・目次・索引チェック。

記事作成時に「どのファイルのどの節を読めばよいか」を、全文Readせずに絞り込むためのツール。

使い方:
  python dataset_tool.py find 補助金 窓 --archive      # キーワード検索（AND）。ファイル別に件数と該当行、直近の見出しを表示
  python dataset_tool.py find 質量則 DIY --any          # いずれか1語を含むファイル
  python dataset_tool.py outline 02_防音賃貸/research-rent-price-urban-suburban-gap-2026-06.md
  python dataset_tool.py index [--archive]              # 全ファイルの一覧（パス・サイズ・更新日・H1）
  python dataset_tool.py check                          # CLAUDE.mdの索引と実ファイルのずれを検出

読む対象が決まったら、outlineの行番号を使って Read の offset/limit で節だけ読む。
"""
import argparse
import fnmatch
import re
import sys
from datetime import date
from pathlib import Path

try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass

REPO = Path(__file__).resolve().parents[4]
DATA = REPO / ".workspace" / ".data-set"
ARCHIVE = DATA / ".archieve"
INDEX_FILE = DATA / "CLAUDE.md"

# 既定の検索から除外する巨大/古い生成物（--all で含める）
SKIP_DEFAULT = {
    "content_post_list.md", "post-list.md", "content_cleanup_list.md", "tag-list.md",
    "interlink-tag-clusters.md", "search-console-20260315.csv", "404-urls-1000.csv",
}
TEXT_EXT = {".md", ".txt"}
# 索引ファイル内で他所のファイルを指す定型トークン（実在チェックの対象外）
IGNORE_TOKENS = {"CLAUDE.md", "SKILL.md"}


def files(include_archive, include_csv=False):
    exts = TEXT_EXT | ({".csv"} if include_csv else set())
    out = []
    for p in sorted(DATA.rglob("*")):
        if not p.is_file() or p.suffix.lower() not in exts and not (include_csv and p.suffix == ".csv"):
            continue
        in_arch = ARCHIVE in p.parents
        if in_arch and not include_archive:
            continue
        out.append(p)
    return out


def rel(p):
    return p.relative_to(DATA).as_posix()


def read(p):
    return p.read_text(encoding="utf-8", errors="ignore").split("\n")


def h1(lines):
    for l in lines[:40]:
        if l.startswith("# "):
            return l[2:].strip()
        m = re.match(r'title:\s*"?(.+?)"?\s*$', l)
        if m:
            return m.group(1)
    return ""


def kb(p):
    return f"{p.stat().st_size / 1024:.0f}KB"


def mdate(p):
    return date.fromtimestamp(p.stat().st_mtime).isoformat()


# ---------- find ----------

def cmd_find(a):
    kws = [k.lower() for k in a.keywords]
    results = []
    for p in files(a.archive, a.csv):
        if p == INDEX_FILE or p.name == "INDEX.md":
            continue  # 索引自身は検索対象外（早見表を直接読む）
        if not a.all and p.name in SKIP_DEFAULT:
            continue
        lines = read(p)
        low = [l.lower() for l in lines]
        text = "\n".join(low)
        present = [k for k in kws if k in text]
        if (a.any and not present) or (not a.any and len(present) != len(kws)):
            continue
        hits = [i for i, l in enumerate(low) if any(k in l for k in kws)]
        results.append((len(hits), p, lines, hits))
    results.sort(key=lambda r: -r[0])
    if not results:
        print("該当なし（`--archive` で旧データも検索、`--any` でOR検索、`--all` で巨大な生成リストも含める）")
        return
    for n, p, lines, hits in results[: a.files]:
        flag = "（旧データ）" if ARCHIVE in p.parents else ""
        print(f"## {rel(p)}{flag} — {n}行該当 / {kb(p)} / {mdate(p)}")
        for i in hits[: a.per_file]:
            head = ""
            for j in range(i, -1, -1):
                if lines[j].startswith("#"):
                    head = lines[j].lstrip("#").strip()[:40]
                    break
            print(f"- L{i + 1} [{head}] {lines[i].strip()[:110]}")
        if n > a.per_file:
            print(f"- …ほか{n - a.per_file}行（`outline` で節を確認）")
        print()
    if len(results) > a.files:
        print(f"（ほか{len(results) - a.files}ファイル。キーワードを足して絞り込む）")


# ---------- outline ----------

def resolve(name):
    p = DATA / name
    if p.exists():
        return p
    cands = [q for q in DATA.rglob("*") if q.is_file() and (q.name == name or name in rel(q))]
    if len(cands) == 1:
        return cands[0]
    if not cands:
        sys.exit(f"見つかりません: {name}")
    sys.exit("複数ヒット。パスを指定してください:\n" + "\n".join(rel(c) for c in cands[:10]))


def cmd_outline(a):
    p = resolve(a.file)
    lines = read(p)
    heads = [(i, len(m.group(1)), m.group(2).strip()) for i, l in enumerate(lines)
             if (m := re.match(r"^(#{1,3})\s+(.*)", l))]
    print(f"# {rel(p)}（{len(lines)}行 / {kb(p)} / {mdate(p)}）")
    if not heads:
        print("見出しなし。先頭を確認:")
        for l in lines[:8]:
            print(l[:100])
        return
    for k, (i, lv, t) in enumerate(heads):
        end = heads[k + 1][0] if k + 1 < len(heads) else len(lines)
        print(f"{'  ' * (lv - 1)}L{i + 1}-{end}（{end - i}行） {t[:70]}")
    print("\n→ Read の offset=開始行-1, limit=行数 で該当節だけ読む")


# ---------- index ----------

def cmd_index(a):
    rows = []
    for p in files(a.archive, a.csv):
        lines = read(p) if p.suffix in TEXT_EXT else []
        rows.append(f"| `{rel(p)}` | {kb(p)} | {mdate(p)} | {h1(lines)[:60]} |")
    print("| パス | サイズ | 更新日 | タイトル |\n|---|---|---|---|")
    print("\n".join(rows))


# ---------- check ----------

def indexed_set():
    if not INDEX_FILE.exists() or INDEX_FILE.stat().st_size == 0:
        sys.exit("CLAUDE.md が空、または存在しません")
    text = INDEX_FILE.read_text(encoding="utf-8")
    tokens = set(re.findall(r"`([^`\n]+)`", text))
    return tokens


def cmd_check(a):
    tokens = indexed_set()
    allfiles = [p for p in DATA.rglob("*") if p.is_file() and p != INDEX_FILE]
    names = {p.name for p in allfiles}
    relpaths = {rel(p) for p in allfiles}
    indexed, missing = set(), []
    for t in tokens:
        t = t.strip()
        if t in IGNORE_TOKENS or "{" in t:
            continue
        if t.endswith("/"):
            indexed |= {r for r in relpaths if r.startswith(t) or ("/" + t) in ("/" + r)}
            continue
        if "*" in t:
            hit = [r for r in relpaths if fnmatch.fnmatch(r, t) or fnmatch.fnmatch(Path(r).name, t) or fnmatch.fnmatch(r, "*/" + t)]
            indexed |= set(hit)
            continue
        if t in relpaths:
            indexed.add(t)
        elif t in names:
            indexed |= {r for r in relpaths if Path(r).name == t}
        elif re.search(r"\.(md|csv|txt)$", t) and "/" not in t.replace("\\", "/").split(".")[0][:0]:
            # ファイル名らしいのに存在しない（他フォルダの参照は除外）
            if not t.startswith(("src/", ".workspace/", ".claude/", ".agents/", "../")):
                missing.append(t)
    unindexed = sorted(r for r in relpaths if r not in indexed and not r.endswith(".gitkeep"))
    print(f"実ファイル {len(relpaths)} 件 / 索引済み {len(indexed)} 件")
    print(f"\n## 索引にないファイル（{len(unindexed)}）→ CLAUDE.mdに追記する")
    for r in unindexed:
        print(f"- `{r}`")
    print(f"\n## 索引にあるが実在しないファイル名（{len(missing)}）→ 修正または削除する")
    for t in sorted(missing):
        print(f"- `{t}`")
    sys.exit(1 if unindexed or missing else 0)


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = ap.add_subparsers(dest="cmd", required=True)
    f = sub.add_parser("find")
    f.add_argument("keywords", nargs="+")
    f.add_argument("--any", action="store_true", help="OR検索")
    f.add_argument("--archive", action="store_true", help=".archieve（2025〜26年初頭の旧データ）も検索")
    f.add_argument("--csv", action="store_true")
    f.add_argument("--all", action="store_true", help="巨大/古い生成リストも含める")
    f.add_argument("--files", type=int, default=8)
    f.add_argument("--per-file", type=int, default=4)
    o = sub.add_parser("outline")
    o.add_argument("file")
    i = sub.add_parser("index")
    i.add_argument("--archive", action="store_true")
    i.add_argument("--csv", action="store_true")
    sub.add_parser("check")
    a = ap.parse_args()
    {"find": cmd_find, "outline": cmd_outline, "index": cmd_index, "check": cmd_check}[a.cmd](a)


if __name__ == "__main__":
    main()
