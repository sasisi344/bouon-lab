#!/usr/bin/env python3
"""BouonLab 週報の集計・比較スクリプト。

.workspace/access-data/{年}/w{NN}/ のGSC/GA4 CSVを読み、Markdownで要約を出す。
比較は「両週とも7日」のときだけ行う（期間は gsc-periods.json と CSVヘッダで判定）。

使い方:
  python weekly_report.py inventory
  python weekly_report.py report w41            # 前週(w40)があれば比較を試みる
  python weekly_report.py report w42 --vs w41   # 比較相手を明示
  python weekly_report.py report w41 --no-compare
  python weekly_report.py trend bass-trap onetouch   # URL一部一致で週次推移
"""
import argparse
import csv
import json
import re
import sys
from collections import defaultdict
from datetime import datetime
from pathlib import Path

try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass

REPO = Path(__file__).resolve().parents[4]
ACCESS = REPO / ".workspace" / "access-data"
GA_COLS = {
    "sessions": "セッション",
    "users": "アクティブ ユーザー",
    "eng_rate": "エンゲージメント率",
    "eng_time": "セッションあたりの平均エンゲージメント時間",
    "key": "キーイベント",
}
AI_WORDS = ("chatgpt", "openai", "copilot", "perplexity", "gemini", "claude")


# ---------- 共通 ----------

def read_rows(path):
    with open(path, encoding="utf-8-sig", newline="") as f:
        return list(csv.reader(f))


def num(x, default=0.0):
    try:
        return float(str(x).replace(",", "").replace("%", ""))
    except ValueError:
        return default


def comment_period(rows):
    for r in rows[:12]:
        if r and r[0].startswith("#"):
            m = re.search(r"(\d{8})-(\d{8})", r[0])
            if m:
                return (datetime.strptime(m.group(1), "%Y%m%d").date(),
                        datetime.strptime(m.group(2), "%Y%m%d").date())
    return None


def fmt_period(p):
    return f"{p[0]:%m/%d}〜{p[1]:%m/%d}" if p else "不明"


def norm_path(s):
    s = re.sub(r"^https?://[^/]+", "", s.strip())
    s = s.split("?")[0]
    if len(s) > 1:
        s = s.rstrip("/")
    return s or "/"


def pct(x):
    return f"{x * 100:.1f}%"


def d_int(a, b):
    return f"{a - b:+,.0f}"


def d_pt(a, b):
    return f"{(a - b) * 100:+.1f}pt"


def d_pct(a, b):
    return "-" if not b else f"{(a / b - 1) * 100:+.0f}%"


def table(header, rows):
    out = ["| " + " | ".join(header) + " |", "|" + "|".join("---" for _ in header) + "|"]
    out += ["| " + " | ".join(str(c) for c in r) + " |" for r in rows]
    return "\n".join(out)


# ---------- 読み込み ----------

def load_registry():
    p = ACCESS / "gsc-periods.json"
    if p.exists():
        return json.loads(p.read_text(encoding="utf-8"))
    return {}


def week_folders(year):
    base = ACCESS / year
    found = {}
    if base.exists():
        for d in sorted(base.iterdir()):
            m = re.fullmatch(r"[wW](\d{2})", d.name)
            if m and d.is_dir():
                found["w" + m.group(1)] = d
    return found


def find_files(folder):
    csvs = [p for p in folder.rglob("*.csv") if "baseline" not in p.name]
    low = lambda p: p.name.lower()
    ga4 = [p for p in csvs if "ga4" in low(p)]
    pages = [p for p in csvs if p.name == "ページ.csv"]
    pages += [p for p in csvs if "gsc" in low(p) and "ga4" not in low(p) and p.name != "ページ.csv"]
    queries = [p for p in csvs if p.name == "クエリ.csv"]
    return ga4, pages, queries


def parse_ga4(path):
    rows = read_rows(path)
    period = comment_period(rows)
    hidx = next((i for i, r in enumerate(rows)
                 if "セッション" in r and "セッションの参照元" in r), None)
    if hidx is None:
        return {"supported": False, "period": period, "path": path,
                "reason": "旧形式（セッション/参照元列なし）。集計対象外"}
    header = rows[hidx]
    ix = {k: header.index(v) for k, v in GA_COLS.items() if v in header}
    data, total = [], None
    for r in rows[hidx + 1:]:
        if not r or len(r) <= ix["sessions"]:
            continue
        rec = {
            "title": r[0], "lp": norm_path(r[1]) if r[1] else "", "src": r[2],
            "sessions": num(r[ix["sessions"]]), "users": num(r[ix["users"]]),
            "eng_rate": num(r[ix["eng_rate"]]), "eng_time": num(r[ix["eng_time"]]),
            "key": num(r[ix["key"]]) if "key" in ix else 0,
        }
        if not r[0] and not r[1] and not r[2]:
            total = rec
        else:
            data.append(rec)
    return {"supported": True, "period": period, "path": path, "total": total, "rows": data}


def parse_gsc(path):
    rows = read_rows(path)
    period = comment_period(rows)
    hidx = next((i for i, r in enumerate(rows) if r and not r[0].startswith("#") and len(r) >= 3), 0)
    header = rows[hidx]
    head = ",".join(header)
    if "か月" in head and "過去" in head:
        kind = "cumulative"
    elif re.search(r"\d{4}/\d{2}/\d{2} - \d{4}/\d{2}/\d{2}", head):
        kind = "compare"
    elif "オーガニック検索" in head:
        kind = "legacy7d"
    elif len(header) == 5:
        kind = "weekly"
    else:
        kind = "unknown"
    items = []
    for r in rows[hidx + 1:]:
        if len(r) < 5 or not r[0]:
            continue
        c, i = num(r[1]), num(r[2])
        items.append({"key": r[0], "path": norm_path(r[0]) if r[0].startswith(("http", "/")) else r[0],
                      "clicks": c, "impr": i, "pos": num(r[4])})
    return {"kind": kind, "period": period, "rows": items, "path": path}


def gsc_totals(g):
    if not g:
        return None
    c = sum(x["clicks"] for x in g["rows"])
    i = sum(x["impr"] for x in g["rows"])
    pos = sum(x["pos"] * x["impr"] for x in g["rows"]) / i if i else 0
    return {"clicks": c, "impr": i, "ctr": c / i if i else 0, "pos": pos, "n": len(g["rows"])}


def load_week(name, folders, registry):
    ga4_f, page_f, query_f = find_files(folders[name])
    wk = {"name": name, "warn": []}
    wk["ga4"] = parse_ga4(ga4_f[0]) if ga4_f else None
    wk["pages"] = parse_gsc(page_f[0]) if page_f else None
    wk["queries"] = parse_gsc(query_f[0]) if query_f else None

    ga_p = wk["ga4"]["period"] if wk["ga4"] else None
    wk["ga4_days"] = (ga_p[1] - ga_p[0]).days if ga_p else None

    reg = registry.get(name)
    g = wk["pages"]
    if reg:
        span, note = reg.get("span", "unknown"), reg.get("note", "")
        gp = None
        if reg.get("start") and reg.get("end"):
            gp = (datetime.strptime(reg["start"], "%Y-%m-%d").date(),
                  datetime.strptime(reg["end"], "%Y-%m-%d").date())
    elif g:
        note, gp = "", g["period"] or ga_p
        span = {"cumulative": "3m", "compare": "compare", "legacy7d": "7d",
                "weekly": "7d?", "unknown": "unknown"}[g["kind"]]
        if span == "7d?":
            wk["warn"].append("GSC期間が `gsc-periods.json` に未登録のため7日分と仮定している（要登録）")
    else:
        span, note, gp = "none", "", None
    wk["gsc_span"], wk["gsc_note"], wk["gsc_period"] = span, note, gp
    return wk


def gsc_ok(wk):
    return wk["pages"] is not None and wk["gsc_span"] in ("7d", "7d?")


def ga4_ok(wk):
    return bool(wk["ga4"] and wk["ga4"]["supported"] and wk["ga4_days"] == 7)


# ---------- 集計 ----------

def src_group(s):
    t = s.lower()
    if t == "(direct)":
        return "direct"
    if t == "(not set)":
        return "not set"
    if "bing" in t:
        return "bing"
    if t.startswith("google") or t == "search.google.com":
        return "google"
    if any(w in t for w in AI_WORDS):
        return "AI系"
    if "yahoo" in t:
        return "yahoo"
    if "duckduckgo" in t:
        return "duckduckgo"
    if "ecosia" in t:
        return "ecosia"
    return "その他"


def src_shares(ga4):
    agg = defaultdict(float)
    for r in ga4["rows"]:
        agg[src_group(r["src"])] += r["sessions"]
    tot = sum(agg.values()) or 1
    return {k: v / tot for k, v in agg.items()}, agg


def lp_agg(ga4):
    agg = defaultdict(lambda: {"sessions": 0.0, "w_eng": 0.0, "w_time": 0.0, "bing": 0.0})
    for r in ga4["rows"]:
        a = agg[r["lp"]]
        a["sessions"] += r["sessions"]
        a["w_eng"] += r["sessions"] * r["eng_rate"]
        a["w_time"] += r["sessions"] * r["eng_time"]
        if src_group(r["src"]) == "bing":
            a["bing"] += r["sessions"]
    for a in agg.values():
        s = a["sessions"] or 1
        a["eng_rate"], a["eng_time"] = a["w_eng"] / s, a["w_time"] / s
    return agg


def gsc_by_path(g):
    return {x["path"]: x for x in g["rows"]} if g else {}


# ---------- レポート ----------

def can_compare(a, b):
    r = {}
    r["ga4"] = ga4_ok(a) and ga4_ok(b)
    r["gsc"] = gsc_ok(a) and gsc_ok(b)
    return r


def report(name, vs, top, folders, registry):
    cur = load_week(name, folders, registry)
    prev = load_week(vs, folders, registry) if vs else None
    cmp_ = can_compare(cur, prev) if prev else {"ga4": False, "gsc": False}
    L = [f"# {name.upper()} 週報サマリー（自動集計）", ""]

    ga_p = cur["ga4"]["period"] if cur["ga4"] else None
    L.append(f"- GA4期間: {fmt_period(ga_p)}（{cur['ga4_days']}日）" if ga_p else "- GA4: データなし")
    L.append(f"- GSC: 期間 {fmt_period(cur['gsc_period'])} / 種別 `{cur['gsc_span']}`"
             + (f" / {cur['gsc_note']}" if cur["gsc_note"] else ""))
    if prev:
        L.append(f"- 比較相手: {vs}（GA4比較={'可' if cmp_['ga4'] else '不可'} / GSC比較={'可' if cmp_['gsc'] else '不可'}）")
        for k, label in (("ga4", "GA4"), ("gsc", "GSC")):
            if not cmp_[k]:
                L.append(f"  - {label}は比較不可: " + why(cur, prev, k))
    else:
        L.append("- 比較相手なし（単週の集計のみ）")
    for w in cur["warn"]:
        L.append(f"- ⚠ {w}")
    L.append("")

    # --- GA4 ---
    ga = cur["ga4"]
    if ga and ga["supported"]:
        L += ["## GA4", ""]
        t, pt = ga["total"], (prev["ga4"]["total"] if cmp_["ga4"] else None)
        hdr = ["指標", name] + ([vs, "変化"] if pt else [])
        rows = []
        for label, k, f, d in (("セッション", "sessions", lambda x: f"{x:,.0f}", d_pct),
                               ("アクティブユーザー", "users", lambda x: f"{x:,.0f}", d_pct),
                               ("エンゲージメント率", "eng_rate", pct, d_pt),
                               ("平均エンゲージメント時間(秒)", "eng_time", lambda x: f"{x:.1f}", d_pct),
                               ("キーイベント", "key", lambda x: f"{x:,.0f}", d_int)):
            row = [label, f(t[k])]
            if pt:
                row += [f(pt[k]), d(t[k], pt[k])]
            rows.append(row)
        L += [table(hdr, rows), ""]

        sh, raw = src_shares(ga)
        psh = src_shares(prev["ga4"])[0] if cmp_["ga4"] else None
        rowsum = sum(raw.values())
        L.append(f"参照元の構成比（行合計{rowsum:,.0f}は総計{t['sessions']:,.0f}と一致しないため比率で見る）:")
        L.append("")
        rows = []
        for k, v in sorted(sh.items(), key=lambda kv: -kv[1]):
            row = [k, f"{raw[k]:,.0f}", pct(v)]
            if psh is not None:
                row += [pct(psh.get(k, 0)), d_pt(v, psh.get(k, 0))]
            rows.append(row)
        L += [table(["参照元", "行合計", "構成比"] + ([vs, "変化"] if psh is not None else []), rows), ""]

        lp, plp = lp_agg(ga), (lp_agg(prev["ga4"]) if cmp_["ga4"] else None)
        gmap = gsc_by_path(cur["pages"]) if gsc_ok(cur) else {}
        L.append(f"ランディング上位{top}（GA4セッション順。GSCは同URLの当週値）:")
        L.append("")
        rows = []
        for p, a in sorted(lp.items(), key=lambda kv: -kv[1]["sessions"])[:top]:
            g = gmap.get(p)
            row = [f"`{p}`", f"{a['sessions']:.0f}"]
            if plp is not None:
                row.append(d_int(a["sessions"], plp.get(p, {"sessions": 0})["sessions"]))
            row += [f"{a['bing']:.0f}", pct(a["eng_rate"]),
                    f"{g['impr']:.0f}" if g else "-", f"{g['clicks']:.0f}" if g else "-",
                    f"{g['pos']:.1f}" if g else "-"]
            rows.append(row)
        L += [table(["LP", "セッション"] + (["前週差"] if plp is not None else [])
                    + ["うちBing", "エンゲージ率", "GSC表示", "GSCクリック", "GSC順位"], rows), ""]
        if plp is not None:
            moves = sorted(((p, a["sessions"] - plp.get(p, {"sessions": 0})["sessions"]) for p, a in lp.items()),
                           key=lambda kv: kv[1])
            ups = [m for m in moves[::-1] if m[1] >= 5][:5]
            downs = [m for m in moves if m[1] <= -5][:5]
            L.append("セッション増減が大きいLP（±5以上）: "
                     + ("、".join(f"`{p}` {d:+.0f}" for p, d in ups + downs) or "なし"))
            L.append("")

    # --- GSC ---
    if cur["pages"]:
        gt = gsc_totals(cur["pages"])
        L += ["## GSC", ""]
        if not gsc_ok(cur):
            L += [f"> この週のGSCは `{cur['gsc_span']}`（累計/比較列つき等）。以下の数値は**週次の値ではない**。参考表示のみ。", ""]
        ptt = gsc_totals(prev["pages"]) if cmp_["gsc"] else None
        rows = []
        for label, k, f, d in (("クリック", "clicks", lambda x: f"{x:,.0f}", d_pct),
                               ("表示回数", "impr", lambda x: f"{x:,.0f}", d_pct),
                               ("CTR", "ctr", lambda x: f"{x * 100:.2f}%", d_pt),
                               ("掲載順位(表示加重)", "pos", lambda x: f"{x:.1f}", lambda a, b: f"{a - b:+.1f}")):
            row = [label, f(gt[k])]
            if ptt:
                row += [f(ptt[k]), d(gt[k], ptt[k])]
            rows.append(row)
        L += [table(["指標", name] + ([vs, "変化"] if ptt else []), rows),
              "", f"ページ表{gt['n']}行"
              + (f" / クエリ表{len(cur['queries']['rows'])}行（匿名クエリ分は含まれないため合計はページ表と一致しない）" if cur["queries"] else ""), ""]

        pg = sorted(cur["pages"]["rows"], key=lambda x: (-x["clicks"], -x["impr"]))
        clicked = [x for x in pg if x["clicks"] > 0]
        L.append("クリックのあったページ:")
        L.append("")
        L += [table(["ページ", "クリック", "表示", "CTR", "順位"],
                    [[f"`{x['path']}`", f"{x['clicks']:.0f}", f"{x['impr']:.0f}",
                      f"{x['clicks'] / x['impr'] * 100:.1f}%" if x["impr"] else "-", f"{x['pos']:.1f}"]
                     for x in clicked[:top]] or [["なし", "", "", "", ""]]), ""]
        zero = sorted((x for x in cur["pages"]["rows"] if x["clicks"] == 0), key=lambda x: -x["impr"])[:top]
        L.append("表示が多くクリック0のページ:")
        L.append("")
        L += [table(["ページ", "表示", "順位"],
                    [[f"`{x['path']}`", f"{x['impr']:.0f}", f"{x['pos']:.1f}"] for x in zero]), ""]

        if ptt:
            pm, cm = gsc_by_path(prev["pages"]), gsc_by_path(cur["pages"])
            diffs = sorted(((p, cm.get(p, {"impr": 0, "clicks": 0, "pos": 0}), pm.get(p, {"impr": 0, "clicks": 0, "pos": 0}))
                            for p in set(cm) | set(pm)),
                           key=lambda t: -abs(t[1]["impr"] - t[2]["impr"]))[:top]
            L.append(f"{vs}比で表示の増減が大きいページ:")
            L.append("")
            L += [table(["ページ", "表示(当→前)", "クリック(当→前)", "順位(当→前)"],
                        [[f"`{p}`", f"{c['impr']:.0f}→{q['impr']:.0f}", f"{c['clicks']:.0f}→{q['clicks']:.0f}",
                          f"{c['pos']:.1f}→{q['pos']:.1f}"] for p, c, q in diffs]), ""]
            new = [p for p in cm if p not in pm]
            lost = [p for p in pm if p not in cm]
            L.append(f"新規出現ページ({len(new)}): " + ("、".join(f"`{p}`" for p in new[:8]) or "なし"))
            L.append(f"消えたページ({len(lost)}): " + ("、".join(f"`{p}`" for p in lost[:8]) or "なし"))
            L.append("")

        if cur["queries"]:
            q = sorted(cur["queries"]["rows"], key=lambda x: (-x["clicks"], -x["impr"]))[:top]
            L.append("上位クエリ（クリック→表示順）:")
            L.append("")
            L += [table(["クエリ", "クリック", "表示", "順位"],
                        [[x["key"], f"{x['clicks']:.0f}", f"{x['impr']:.0f}", f"{x['pos']:.1f}"] for x in q]), ""]
            if cmp_["gsc"] and prev["queries"]:
                pq = {x["key"] for x in prev["queries"]["rows"]}
                newq = [x for x in cur["queries"]["rows"] if x["key"] not in pq]
                newq.sort(key=lambda x: -x["impr"])
                L.append(f"新規出現クエリ({len(newq)}): " + ("、".join(f"{x['key']}({x['impr']:.0f})" for x in newq[:10]) or "なし"))
                L.append("")

    L.append("> 注意: GSCはGoogleのみ。Bing等はGA4の参照元で見る。直近2〜3日のGSCは未確定。")
    return "\n".join(L)


def why(a, b, k):
    reasons = []
    for w in (a, b):
        if k == "ga4":
            if not w["ga4"]:
                reasons.append(f"{w['name']}: GA4なし")
            elif not w["ga4"]["supported"]:
                reasons.append(f"{w['name']}: {w['ga4']['reason']}")
            elif w["ga4_days"] != 7:
                reasons.append(f"{w['name']}: 期間{w['ga4_days']}日")
        else:
            if not gsc_ok(w):
                reasons.append(f"{w['name']}: GSC種別 `{w['gsc_span']}`" + (f"（{w['gsc_note']}）" if w["gsc_note"] else ""))
    return " / ".join(reasons) or "不明"


def inventory(folders, registry):
    rows = []
    for n in folders:
        w = load_week(n, folders, registry)
        ga = w["ga4"]
        rows.append([n,
                     fmt_period(ga["period"]) + f"（{w['ga4_days']}日）" if ga and ga["period"] else ("なし" if not ga else "期間不明"),
                     "可" if ga4_ok(w) else ("旧形式" if ga and not ga["supported"] else "不可"),
                     f"{w['gsc_span']}" + ("" if not w["pages"] else f"（{w['pages']['kind']}）"),
                     "可" if gsc_ok(w) else "不可",
                     "; ".join(w["warn"]) or w["gsc_note"]])
    return table(["週", "GA4期間", "GA4比較", "GSC種別", "GSC比較", "備考"], rows)


def trend(patterns, folders, registry):
    L = []
    for pat in patterns:
        rows = []
        for n in folders:
            w = load_week(n, folders, registry)
            ga_s = ga_e = ""
            if ga4_ok(w):
                lp = {p: a for p, a in lp_agg(w["ga4"]).items() if pat in p}
                s = sum(a["sessions"] for a in lp.values())
                ga_s = f"{s:.0f}"
                ga_e = pct(sum(a["w_eng"] for a in lp.values()) / s) if s else "-"
            g = ["", "", "", ""]
            if gsc_ok(w):
                m = [x for x in w["pages"]["rows"] if pat in x["path"]]
                i = sum(x["impr"] for x in m)
                c = sum(x["clicks"] for x in m)
                g = [f"{c:.0f}", f"{i:.0f}", f"{c / i * 100:.1f}%" if i else "-",
                     f"{sum(x['pos'] * x['impr'] for x in m) / i:.1f}" if i else "-"]
            if ga_s or g[0]:
                rows.append([n, fmt_period(w["ga4"]["period"]) if w["ga4"] else "", ga_s or "-", ga_e or "-"] + [x or "-" for x in g])
        L += [f"## `{pat}` の週次推移（7日データのみ）", "",
              table(["週", "期間", "GA4セッション", "エンゲージ率", "GSCクリック", "GSC表示", "CTR", "順位"], rows), ""]
    return "\n".join(L)


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--year", default="2026")
    sub = ap.add_subparsers(dest="cmd", required=True)
    sub.add_parser("inventory")
    r = sub.add_parser("report")
    r.add_argument("week")
    r.add_argument("--vs")
    r.add_argument("--no-compare", action="store_true")
    r.add_argument("--top", type=int, default=10)
    t = sub.add_parser("trend")
    t.add_argument("patterns", nargs="+")
    a = ap.parse_args()

    folders, registry = week_folders(a.year), load_registry()
    if not folders:
        sys.exit(f"週フォルダがありません: {ACCESS / a.year}")
    if a.cmd == "inventory":
        print(inventory(folders, registry))
    elif a.cmd == "trend":
        print(trend(a.patterns, folders, registry))
    else:
        w = a.week.lower()
        if w not in folders:
            sys.exit(f"{w} が見つかりません: {', '.join(folders)}")
        vs = None
        if not a.no_compare:
            vs = (a.vs or f"w{int(w[1:]) - 1:02d}").lower()
            if vs not in folders:
                print(f"（比較相手 {vs} のフォルダがないため単週で集計）", file=sys.stderr)
                vs = None
        print(report(w, vs, a.top, folders, registry))


if __name__ == "__main__":
    main()
