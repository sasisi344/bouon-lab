---
name: bouon-weekly-report
description: .workspace/access-data/ のGSC/GA4の週次CSVから、週報の集計・前週比較・特定ページの週次推移を出すときに使う。週報（weekly-task.mdの週次生データ）を作る前、施策の効果をデータで確認するとき、CSVを開かずに数値を知りたいときに必ず使う。比較できる週・できない週の判定ルールを定義する。
---

# BouonLab 週報の集計・比較

`.workspace/access-data/` の週次CSVは形式も期間もバラバラ（7日／3週間／3か月累計、旧形式GA4など）。**CSVを直接読まず、同梱スクリプトで集計し、比較可能な週同士だけ比較する。** フォルダ索引と取り込みルールの正本は `.workspace/access-data/CLAUDE.md`。

## コマンド

リポジトリルートで実行する（`PYTHONIOENCODING` 指定は不要）。

```bash
S=.claude/skills/bouon-weekly-report/scripts/weekly_report.py

python $S inventory                        # 全週の期間・種別・比較可否の一覧
python $S report w42                       # 直前週(w41)と比較。比較不可なら理由つきで単週のみ
python $S report w42 --vs w41 --top 15     # 比較相手・表の行数を指定
python $S report w42 --no-compare          # 単週のみ
python $S trend bass-trap onetouch         # URL一部一致で週次推移（7日データのみ）
```

出力はMarkdown。表はそのまま `weekly-task.md` の「週次生データ」へ貼れる形にしてある。

## 週報作成の流れ

1. `_inbox/` のCSVを `access-data/2026/w{NN}/` に仕分けた後、**`gsc-periods.json` にその週のGSC期間を登録する**（`span`: `7d`／`3w`／`3m`／`compare`、7日なら `start`・`end`）。未登録の5列GSCは7日と仮定され、警告が出る
2. `python $S inventory` で比較可否を確認する
3. `python $S report w{NN}` を実行する
4. 出力のうち、施策に関わるページ・クエリだけ `trend` で過去と並べる（`weekly-task.md` の索引W-NNの対象URLを使う）
5. 結果を `.task/weekly-task.md` の「週次生データ」先頭に要約して追記し、該当W-NNに結果を書く（手順は `bouon-task-ops` skill、`/weekly-ppdca`）
6. `access-data/CLAUDE.md` の索引（§3）と作業ログ（§6）を更新する

## 比較ルール（スクリプトが自動判定）

| 対象 | 比較できる条件 |
|---|---|
| GA4 | 新形式（セッション・参照元列あり）で、期間がちょうど7日の週同士。W24〜W28は旧形式、W36は21日のため不可 |
| GSC | `gsc-periods.json` の `span` が `7d` の週同士。累計（3m）・3週間（3w）・期間比較列つき（compare）は不可 |

- 現時点で意味のあるGSCの前週比較は **W41→W42 から**。W29〜W40は比較不可で、W28以前（旧形式の7日）とW41は技術的には比較できるが約3か月離れているため、前週比としては使わず `trend` で推移として見る
- 比較不可のときは、スクリプトが理由を出す。**その週の数値を無理に前週比として書かない**

## 解釈の注意

- **サンプルが小さい。** サイト全体で週のGSCクリックは一桁、表示は200前後。ページ単位の±数件は誤差の範囲。方向を言うのは、表示が20以上あり、変化が±30%を超えるときに限る
- **GSCはGoogleのみ。** 流入の過半はBing（GA4参照元）。GSCの増減だけでアクセスの良し悪しを判断しない
- **GA4の行合計は総計と一致しない。** スクリプトは総計行で全体値、行合計で構成比を出している。件数ではなく比率で読む
- **クエリ表は匿名クエリ分が欠ける。** ページ表の合計と一致しないのが正常
- 直近2〜3日のGSCは未確定。GA4に着地があるのにGSCに出ないページは遅延の可能性がある
- 「施策の効果」を書くときは、施策実施日より後の7日を含む週だけを使う（実施直後の週は再クロール前のことが多い）

## 保守

- スクリプトは標準ライブラリのみ。列構成が変わってGA4が `旧形式` と判定される場合は、`parse_ga4` の列名（`GA_COLS`）を更新する
- 新しい種別のCSV（デバイス・国など）を集計する必要が出たら、`access-data/CLAUDE.md` に種別を追記してからスクリプトに足す
