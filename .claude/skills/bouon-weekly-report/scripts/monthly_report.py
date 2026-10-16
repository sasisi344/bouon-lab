#!/usr/bin/env python3
"""BouonLab 月次レポートの集計・比較スクリプト。

.workspace/access-data/{年}/m{MM}/ のGSC/GA4 CSV（仕様は access-data/export-spec.md）を読み、
Markdownで月次KPIを出す。前月との比較は、件数を日平均にそろえて行う。

使い方:
  python monthly_report.py inventory
  python monthly_report.py report m10              # 前月(m09)があれば比較
  python monthly_report.py report m11 --vs m10 --top 15
  python monthly_report.py trend bass-trap onetouch  # URL一部一致で月次推移
"""
import argparse
import json
import re
import sys
from collections import defaultdict
from datetime import datetime
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from weekly_report import (  # noqa: E402
    comment_period, d_int, d_pct, d_pt, norm_path, num, parse_gsc, pct, read_rows, src_group, table,
)

REPO = Path(__file__).resolve().parents[4]
ACCESS = REPO / ".workspace" / "access-data"
CONTENT = REPO / "src" / "content" / "ja"

# GA4探索の列名（export-spec.md §3 A1〜A3）
A1_COLS = {"lp": "ランディング ページ", "src": "セッションの参照元", "country": "国",
           "sessions": "セッション", "users": "アクティブ ユーザー", "eng_rate": "エンゲージメント率",
           "eng_time": "セッションあたりの平均エンゲージメント時間", "key": "キーイベント"}
A2_COLS = {"event": "イベント名", "page": "ページパスとスクリーン クラス", "src": "セッションの参照元",
           "count": "イベント数", "users": "総ユーザー数"}
A3_COLS = {"device": "デバイス カテゴリ", "channel": "セッションのデフォルト チャネル グループ",
           "sessions": "セッション", "eng_rate": "エンゲージメント率",
           "eng_time": "セッションあたりの平均エンゲージメント時間", "key": "キーイベント"}
METRIC_NAMES = {"セッション", "イベント数", "アクティブ ユーザー", "総ユーザー数"}
BANDS = ((3, "1〜3位"), (10, "4〜10位"), (20, "11〜20位"), (50, "21〜50位"), (float("inf"), "51位〜"))


# ---------- 読み込み ----------

def parse_ga4_table(path, cols):
    """GA4探索のCSVを列名で読む。総計行（ディメンションが全部空の行）は別に返す。"""
    rows = read_rows(path)
    hidx = next((i for i, r in enumerate(rows)
                 if r and not r[0].startswith("#") and METRIC_NAMES & set(r)), None)
    if hidx is None:
        return None
    header = rows[hidx]
    ix = {k: header.index(v) for k, v in cols.items() if v in header}
    first_metric = min(i for i, h in enumerate(header) if h in METRIC_NAMES)
    data, total = [], None
    for r in rows[hidx + 1:]:
        if len(r) <= first_metric or (r[0].startswith("#")):
            continue
        rec = {}
        for k, i in ix.items():
            rec[k] = num(r[i]) if i >= first_metric else r[i]
        if "lp" in rec:
            rec["lp"] = norm_path(rec["lp"]) if rec["lp"] else ""
        if "page" in rec:
            rec["page"] = norm_path(rec["page"]) if rec["page"] else ""
        if all(not r[i] for i in range(first_metric)):
            total = rec
        else:
            data.append(rec)
    return {"period": comment_period(rows), "rows": data, "total": total, "missing": [v for k, v in cols.items() if k not in ix]}


def parse_page_query(path):
    """Looker Studio「URLのインプレッション」の表（ページ, クエリ, クリック, 表示, CTR, 順位）。"""
    rows = read_rows(path)
    out = []
    for r in rows[1:]:
        if len(r) < 4 or not r[0]:
            continue
        out.append({"path": norm_path(r[0]), "query": r[1], "clicks": num(r[2]),
                    "impr": num(r[3]), "pos": num(r[-1])})
    return out


def parse_indexed(path):
    rows = read_rows(path)
    return {norm_path(r[0]) for r in rows[1:] if r and r[0].startswith(("http", "/"))}


def articles():
    out = {}
    for p in CONTENT.glob("*/*/index.md*"):
        cat, slug = p.parent.parent.name, p.parent.name
        out[f"/ja/{cat}/{slug}"] = cat
    return out


def load_registry():
    p = ACCESS / "gsc-periods.json"
    return json.loads(p.read_text(encoding="utf-8")) if p.exists() else {}


def month_folders(year):
    base = ACCESS / year
    found = {}
    if base.exists():
        for d in sorted(base.iterdir()):
            if d.is_dir() and re.fullmatch(r"m\d{2}", d.name):
                found[d.name] = d
    return found


def load_month(name, folders, registry):
    d = folders[name]
    f = lambda n: d / n if (d / n).exists() else None
    m = {"name": name, "warn": []}
    m["pages"] = parse_gsc(f("ページ.csv")) if f("ページ.csv") else None
    m["queries"] = parse_gsc(f("クエリ.csv")) if f("クエリ.csv") else None
    m["device"] = parse_gsc(f("デバイス.csv")) if f("デバイス.csv") else None
    m["pq"] = parse_page_query(f("gsc-page-query.csv")) if f("gsc-page-query.csv") else None
    m["indexed"] = parse_indexed(f("gsc-index-indexed.csv")) if f("gsc-index-indexed.csv") else None
    m["lp"] = parse_ga4_table(f("ga4-lp.csv"), A1_COLS) if f("ga4-lp.csv") else None
    m["events"] = parse_ga4_table(f("ga4-events.csv"), A2_COLS) if f("ga4-events.csv") else None
    m["dev4"] = parse_ga4_table(f("ga4-device.csv"), A3_COLS) if f("ga4-device.csv") else None
    for key, label in (("lp", "ga4-lp.csv"), ("events", "ga4-events.csv"), ("dev4", "ga4-device.csv")):
        if m[key] and m[key]["missing"]:
            m["warn"].append(f"{label} に列がない: {', '.join(m[key]['missing'])}（export-spec.md §3と探索の設定を確認）")

    reg = registry.get(name, {})
    period = None
    if reg.get("start") and reg.get("end"):
        period = (datetime.strptime(reg["start"], "%Y-%m-%d").date(),
                  datetime.strptime(reg["end"], "%Y-%m-%d").date())
    else:
        m["warn"].append("`gsc-periods.json` に期間が未登録。GA4の期間で代用している")
        period = m["lp"]["period"] if m["lp"] else None
    ga_p = m["lp"]["period"] if m["lp"] else None
    if period and ga_p and ga_p != period:
        m["warn"].append(f"GA4の期間 {ga_p[0]}〜{ga_p[1]} がGSCの登録期間と違う")
    m["period"] = period
    m["days"] = (period[1] - period[0]).days + 1 if period else None
    m["span"] = reg.get("span", "unknown")
    return m


# ---------- 集計 ----------

def is_bot(r):
    """米国などからの(direct)でボットと思われる流入（W42で全体の約9%）。"""
    return r.get("src") == "(direct)" and r.get("country") not in ("Japan", "日本", "")


def kpis(m, arts):
    k = {}
    k["articles"] = len(arts)
    if m["indexed"] is not None:
        k["indexed"] = len(m["indexed"] & set(arts))
    if m["pages"]:
        rows = m["pages"]["rows"]
        c = sum(x["clicks"] for x in rows)
        i = sum(x["impr"] for x in rows)
        k["clicks_d"] = c / m["days"]
        k["impr_d"] = i / m["days"]
        k["ctr"] = c / i if i else 0
        k["pos"] = sum(x["pos"] * x["impr"] for x in rows) / i if i else 0
        top10 = [x for x in rows if x["pos"] <= 10]
        ti = sum(x["impr"] for x in top10)
        k["ctr10"] = sum(x["clicks"] for x in top10) / ti if ti else 0
        k["shown"] = len({x["path"] for x in rows if x["impr"] > 0} & set(arts))
    if m["lp"]:
        rows = [r for r in m["lp"]["rows"] if not is_bot(r)]
        s = sum(r["sessions"] for r in rows)
        k["sessions_d"] = s / m["days"]
        k["eng_rate"] = sum(r["sessions"] * r["eng_rate"] for r in rows) / s if s else 0
        g = [r for r in rows if src_group(r["src"]) == "google"]
        gs = sum(r["sessions"] for r in g)
        k["google_d"] = gs / m["days"]
        k["google_eng"] = sum(r["sessions"] * r["eng_rate"] for r in g) / gs if gs else 0
        k["bot_share"] = 1 - s / (sum(r["sessions"] for r in m["lp"]["rows"]) or 1)
    if m["events"]:
        aff = [r for r in m["events"]["rows"] if r.get("event") == "affiliate_click"]
        k["aff"] = sum(r["count"] for r in aff)
        k["aff_google"] = sum(r["count"] for r in aff if src_group(r.get("src", "")) == "google")
    if m["device"]:
        i = sum(x["impr"] for x in m["device"]["rows"]) or 1
        k["mobile"] = sum(x["impr"] for x in m["device"]["rows"] if x["key"] in ("モバイル", "Mobile", "MOBILE")) / i
    return k


def band_of(pos):
    return next(label for hi, label in BANDS if pos <= hi)


def bands(m):
    agg = defaultdict(lambda: {"pages": 0, "impr": 0.0, "clicks": 0.0})
    for x in m["pages"]["rows"]:
        a = agg[band_of(x["pos"])]
        a["pages"] += 1
        a["impr"] += x["impr"]
        a["clicks"] += x["clicks"]
    return agg


# ---------- レポート ----------

KPI_ROWS = (
    ("公開記事数", "articles", lambda x: f"{x:.0f}", d_int),
    ("インデックス登録済みの記事", "indexed", lambda x: f"{x:.0f}", d_int),
    ("Googleで表示が出た記事", "shown", lambda x: f"{x:.0f}", d_int),
    ("Googleクリック（日平均）", "clicks_d", lambda x: f"{x:.2f}", d_pct),
    ("Google表示回数（日平均）", "impr_d", lambda x: f"{x:.1f}", d_pct),
    ("CTR（全体）", "ctr", lambda x: f"{x * 100:.2f}%", d_pt),
    ("CTR（10位以内のページ、目標5%）", "ctr10", lambda x: f"{x * 100:.2f}%", d_pt),
    ("掲載順位（表示加重）", "pos", lambda x: f"{x:.1f}", lambda a, b: f"{a - b:+.1f}"),
    ("GA4セッション（日平均、ボット疑い除外）", "sessions_d", lambda x: f"{x:.1f}", d_pct),
    ("Google自然検索セッション（日平均）", "google_d", lambda x: f"{x:.2f}", d_pct),
    ("Google自然検索のエンゲージメント率", "google_eng", pct, d_pt),
    ("全体のエンゲージメント率", "eng_rate", pct, d_pt),
    ("affiliate_click（月計）", "aff", lambda x: f"{x:.0f}", d_int),
    ("affiliate_click（Google自然検索から）", "aff_google", lambda x: f"{x:.0f}", d_int),
    ("Google表示のうちスマホ", "mobile", pct, d_pt),
    ("ボット疑いの流入比率（参考）", "bot_share", pct, d_pt),
)


def report(name, vs, top, folders, registry):
    arts = articles()
    cur = load_month(name, folders, registry)
    prev = load_month(vs, folders, registry) if vs else None
    if not cur["days"]:
        sys.exit(f"{name}: 期間が分からない。gsc-periods.json に登録するか ga4-lp.csv を置く")
    k = kpis(cur, arts)
    pk = kpis(prev, arts) if prev and prev["days"] else None
    if pk is not None:
        pk.pop("articles", None)  # 公開記事数は現時点の値しか取れない

    L = [f"# {name.upper()} 月次サマリー（自動集計）", "",
         f"- 期間: {cur['period'][0]}〜{cur['period'][1]}（{cur['days']}日、`{cur['span']}`）"]
    L.append(f"- 比較相手: {vs}（{prev['days']}日）。件数は日平均で比べる" if pk is not None else "- 比較相手なし（単月の集計のみ）")
    for w in cur["warn"]:
        L.append(f"- ⚠ {w}")
    missing = [n for n, key in (("G1 ページ.csv", "pages"), ("G2 gsc-page-query.csv", "pq"), ("G3 gsc-index-indexed.csv", "indexed"),
                                ("A1 ga4-lp.csv", "lp"), ("A2 ga4-events.csv", "events"), ("A3 ga4-device.csv", "dev4"))
               if cur[key] is None]
    if missing:
        L.append("- 未取得: " + "、".join(missing))
    L += ["", "## KPI", ""]
    rows = []
    for label, key, f, d in KPI_ROWS:
        if key not in k:
            continue
        row = [label, f(k[key])]
        if pk is not None:
            row += [f(pk[key]) if key in pk else "-", d(k[key], pk[key]) if key in pk else "-"]
        rows.append(row)
    L += [table(["指標", name] + ([vs, "変化"] if pk is not None else []), rows), ""]

    if cur["pages"]:
        b, pb = bands(cur), (bands(prev) if prev and prev["pages"] else None)
        L += ["## 順位帯別（GSCページ表）", ""]
        rows = []
        for _, label in BANDS:
            a = b.get(label, {"pages": 0, "impr": 0, "clicks": 0})
            row = [label, a["pages"], f"{a['impr'] / cur['days']:.1f}", f"{a['clicks']:.0f}"]
            if pb is not None:
                p = pb.get(label, {"impr": 0})
                row.append(d_pct(a["impr"] / cur["days"], p["impr"] / prev["days"]))
            rows.append(row)
        L += [table(["順位帯", "ページ数", "表示（日平均）", "クリック（月計）"] + (["表示の前月比"] if pb is not None else []), rows), ""]

        L += ["## カテゴリ別の検索への乗り方", ""]
        shown = {x["path"] for x in cur["pages"]["rows"] if x["impr"] > 0}
        cat = defaultdict(lambda: [0, 0, 0])
        for p, c in arts.items():
            cat[c][0] += 1
            cat[c][1] += p in (cur["indexed"] or set())
            cat[c][2] += p in shown
        L += [table(["カテゴリ", "記事数", "登録済み" if cur["indexed"] is not None else "登録済み（G3未取得）", "表示あり"],
                    [[c, v[0], v[1] if cur["indexed"] is not None else "-", v[2]] for c, v in sorted(cat.items(), key=lambda kv: -kv[1][0])]), ""]

        near = sorted((x for x in cur["pages"]["rows"] if 10 < x["pos"] <= 20), key=lambda x: -x["impr"])[:top]
        L += ["## 11〜20位のページ（リライト候補）", ""]
        L += [table(["ページ", "表示", "クリック", "順位"],
                    [[f"`{x['path']}`", f"{x['impr']:.0f}", f"{x['clicks']:.0f}", f"{x['pos']:.1f}"] for x in near]
                    or [["なし", "", "", ""]]), ""]

        miss = sorted((x for x in cur["pages"]["rows"] if x["pos"] <= 10 and x["impr"] >= 10 and x["clicks"] / x["impr"] < 0.03),
                      key=lambda x: -x["impr"])[:top]
        L += ["## 意図のずれ候補（10位以内・表示10以上・CTR 3%未満）", ""]
        pq = defaultdict(list)
        for r in cur["pq"] or []:
            pq[r["path"]].append(r)
        rows = []
        for x in miss:
            qs = sorted(pq.get(x["path"], []), key=lambda r: -r["impr"])[:3]
            rows.append([f"`{x['path']}`", f"{x['impr']:.0f}", f"{x['clicks']:.0f}", f"{x['pos']:.1f}",
                         "、".join(f"{r['query']}({r['impr']:.0f})" for r in qs) or ("G2未取得" if cur["pq"] is None else "-")])
        L += [table(["ページ", "表示", "クリック", "順位", "主なクエリ（G2）"], rows or [["なし", "", "", "", ""]]), ""]

        if prev and prev["pages"]:
            pm = {x["path"] for x in prev["pages"]["rows"] if x["impr"] > 0}
            new = sorted(shown - pm)
            lost = sorted(pm - shown)
            L.append(f"新しく表示が出たページ({len(new)}): " + ("、".join(f"`{p}`" for p in new[:15]) or "なし"))
            L.append(f"表示が消えたページ({len(lost)}): " + ("、".join(f"`{p}`" for p in lost[:15]) or "なし"))
            L.append("")

    if cur["queries"]:
        q = cur["queries"]["rows"]
        L += ["## クエリ", "", "上位（クリック→表示順）:", ""]
        L += [table(["クエリ", "クリック", "表示", "順位"],
                    [[x["key"], f"{x['clicks']:.0f}", f"{x['impr']:.0f}", f"{x['pos']:.1f}"]
                     for x in sorted(q, key=lambda x: (-x["clicks"], -x["impr"]))[:top]]), ""]
        near = sorted((x for x in q if 10 < x["pos"] <= 20), key=lambda x: -x["impr"])[:top]
        L += ["11〜20位のクエリ:", ""]
        L += [table(["クエリ", "表示", "順位"], [[x["key"], f"{x['impr']:.0f}", f"{x['pos']:.1f}"] for x in near]
                    or [["なし", "", ""]]), ""]

    if cur["lp"]:
        rows = [r for r in cur["lp"]["rows"] if not is_bot(r)]
        agg = defaultdict(float)
        for r in rows:
            agg[src_group(r["src"])] += r["sessions"]
        tot = sum(agg.values()) or 1
        L += ["## GA4 参照元（ボット疑い除外、参考）", ""]
        L += [table(["参照元", "セッション", "構成比"],
                    [[s, f"{v:.0f}", pct(v / tot)] for s, v in sorted(agg.items(), key=lambda kv: -kv[1])]), ""]
        lp = defaultdict(lambda: {"s": 0.0, "g": 0.0, "eng": 0.0, "key": 0.0})
        for r in rows:
            a = lp[r["lp"]]
            a["s"] += r["sessions"]
            a["eng"] += r["sessions"] * r["eng_rate"]
            a["key"] += r.get("key", 0)
            if src_group(r["src"]) == "google":
                a["g"] += r["sessions"]
        gmap = {x["path"]: x for x in cur["pages"]["rows"]} if cur["pages"] else {}
        L += [f"ランディング上位{top}:", ""]
        out = []
        for p, a in sorted(lp.items(), key=lambda kv: -kv[1]["s"])[:top]:
            g = gmap.get(p)
            out.append([f"`{p}`", f"{a['s']:.0f}", f"{a['g']:.0f}", pct(a["eng"] / a["s"]) if a["s"] else "-",
                        f"{a['key']:.0f}", f"{g['impr']:.0f}" if g else "-", f"{g['pos']:.1f}" if g else "-"])
        L += [table(["LP", "セッション", "うちGoogle", "エンゲージ率", "キーイベント", "GSC表示", "GSC順位"], out), ""]

    if cur["events"]:
        ev = defaultdict(float)
        for r in cur["events"]["rows"]:
            ev[r.get("event", "")] += r["count"]
        L += ["## クリックイベント", ""]
        L += [table(["イベント", "件数"], [[e, f"{v:.0f}"] for e, v in sorted(ev.items(), key=lambda kv: -kv[1])]), ""]
        aff = defaultdict(lambda: [0.0, 0.0])
        for r in cur["events"]["rows"]:
            if r.get("event") == "affiliate_click":
                aff[r.get("page", "")][0] += r["count"]
                if src_group(r.get("src", "")) == "google":
                    aff[r.get("page", "")][1] += r["count"]
        L += ["`affiliate_click` のページ別:", ""]
        L += [table(["ページ", "件数", "うちGoogle自然検索"],
                    [[f"`{p}`", f"{v[0]:.0f}", f"{v[1]:.0f}"] for p, v in sorted(aff.items(), key=lambda kv: -kv[1][0])[:top]]
                    or [["なし", "", ""]]), ""]

    if cur["dev4"]:
        L += ["## デバイス×チャネル（GA4）", ""]
        L += [table(["デバイス", "チャネル", "セッション", "エンゲージ率", "キーイベント"],
                    [[r.get("device", ""), r.get("channel", ""), f"{r['sessions']:.0f}", pct(r.get("eng_rate", 0)), f"{r.get('key', 0):.0f}"]
                     for r in sorted(cur["dev4"]["rows"], key=lambda r: -r["sessions"])[:top]]), ""]

    L.append("> 注意: 判断はGoogle（GSC・GA4のgoogle）を主に行う。記事単位のCTRは母数が少ないため、表示の有無と順位帯で見る。")
    return "\n".join(L)


def inventory(folders, registry):
    rows = []
    for n in folders:
        m = load_month(n, folders, registry)
        files = [label for label, key in (("G1", "pages"), ("G2", "pq"), ("G3", "indexed"), ("A1", "lp"), ("A2", "events"), ("A3", "dev4"))
                 if m[key] is not None]
        rows.append([n, f"{m['period'][0]}〜{m['period'][1]}（{m['days']}日）" if m["period"] else "不明",
                     m["span"], " ".join(files), "; ".join(m["warn"])])
    return table(["月", "期間", "種類", "取得済み", "注意"], rows)


def trend(patterns, folders, registry):
    L = []
    for pat in patterns:
        rows = []
        for n in folders:
            m = load_month(n, folders, registry)
            if not m["days"]:
                continue
            g = [x for x in (m["pages"]["rows"] if m["pages"] else []) if pat in x["path"]]
            i = sum(x["impr"] for x in g)
            c = sum(x["clicks"] for x in g)
            lp = [r for r in (m["lp"]["rows"] if m["lp"] else []) if pat in r["lp"] and not is_bot(r)]
            s = sum(r["sessions"] for r in lp)
            gs = sum(r["sessions"] for r in lp if src_group(r["src"]) == "google")
            rows.append([n, f"{c:.0f}", f"{i:.0f}", f"{sum(x['pos'] * x['impr'] for x in g) / i:.1f}" if i else "-",
                         f"{s:.0f}", f"{gs:.0f}"])
        L += [f"## `{pat}` の月次推移", "",
              table(["月", "GSCクリック", "GSC表示", "順位", "GA4セッション", "うちGoogle"], rows), ""]
    return "\n".join(L)


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--year", default="2026")
    sub = ap.add_subparsers(dest="cmd", required=True)
    sub.add_parser("inventory")
    r = sub.add_parser("report")
    r.add_argument("month")
    r.add_argument("--vs")
    r.add_argument("--no-compare", action="store_true")
    r.add_argument("--top", type=int, default=10)
    t = sub.add_parser("trend")
    t.add_argument("patterns", nargs="+")
    a = ap.parse_args()

    folders, registry = month_folders(a.year), load_registry()
    if not folders:
        sys.exit(f"月フォルダ（m{{MM}}）がありません: {ACCESS / a.year}")
    if a.cmd == "inventory":
        print(inventory(folders, registry))
    elif a.cmd == "trend":
        print(trend(a.patterns, folders, registry))
    else:
        m = a.month.lower()
        if m not in folders:
            sys.exit(f"{m} が見つかりません: {', '.join(folders)}")
        vs = None
        if not a.no_compare:
            vs = (a.vs or f"m{int(m[1:]) - 1:02d}").lower()
            if vs not in folders:
                print(f"（比較相手 {vs} のフォルダがないため単月で集計）", file=sys.stderr)
                vs = None
        print(report(m, vs, a.top, folders, registry))


if __name__ == "__main__":
    main()
