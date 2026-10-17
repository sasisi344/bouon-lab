---
name: bouon-weekly-report
description: .workspace/access-data/ のGSC/GA4の月次CSV（m{MM}）から、月次KPIの集計・前月比較（日平均）・特定ページの月次推移を出すときに使う。/monthly-ppdca の集計、施策の効果をデータで確認するとき、CSVを開かずに数値を知りたいときに必ず使う。過去の週次CSV（w24〜w42）の集計にも使う。
---

# BouonLab 月次レポート（旧・週報）の集計・比較

## 月次（2026-10-16〜、標準）

取得仕様の正本は `.workspace/access-data/export-spec.md`。月フォルダ `2026/m{MM}/` のCSVを `monthly_report.py` で集計する。

```bash
M=.claude/skills/bouon-weekly-report/scripts/monthly_report.py

python $M inventory                        # 全月の期間・取得済みファイル（G1〜G3・A1〜A3）
python $M report m11                       # 前月(m10)と比較。件数は日平均、比率はそのまま
python $M report m11 --vs m09 --top 15     # 比較相手・表の行数を指定
python $M trend bass-trap onetouch         # URL一部一致で月次推移（GSC・GA4のgoogle）
```

出力の中身: KPI表（インデックス登録済みの記事・表示が出た記事・Googleクリック/表示の日平均・10位以内CTR・Google自然検索のセッションとエンゲージメント率・`affiliate_click`・スマホ比率）、順位帯別、カテゴリ別の検索への乗り方、11〜20位のページとクエリ、意図のずれ候補（G2のクエリつき）、新しく表示が出た/消えたページ、LP上位、クリックイベント、デバイス×チャネル。

- 期間は `access-data/gsc-periods.json` の `m{MM}`（`span`: `month`／`30d`、`start`・`end`）を正とする。未登録ならGA4の期間で代用し、警告を出す
- 米国などからの`(direct)`はボット疑いとして除外して集計する（比率は参考として表示）
- 欠けているファイルは「未取得」に出る。その部分の表だけ省かれる
- GA4の探索の列名を変えたら、スクリプトの `A1_COLS`・`A2_COLS`・`A3_COLS` を合わせる

### 解釈の注意（月次）

- **Googleを優先する。** BingはGA4の参照元の構成比で参考に見るだけ
- 月で日数が違うので、件数の比較は必ず日平均で行う（スクリプトはそうしている）
- 記事単位のCTRは月でも母数が足りないことが多い。記事は「表示が出たか」「順位帯が上がったか」で見る
- 公開・リライト直後の月は基準値。効果は施策後に丸1か月を含む月で判定する
- インデックス登録のレポートは2週間ほど遅れる。`m{MM}/README.md` の最終更新日を添えて書く

## 週次（〜2026-10、過去データ）

以下は週次時代（w24〜w42）のスクリプトと手順。新しいデータには使わない。

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

出力はMarkdown。表はそのまま `access-data/2026/m{MM}/README.md` へ貼れる形にしてある。

## 週報作成の流れ

1. `_inbox/` のCSVを `access-data/2026/w{NN}/` に仕分けた後、**`gsc-periods.json` にその週のGSC期間を登録する**（`span`: `7d`／`3w`／`3m`／`compare`、7日なら `start`・`end`）。未登録の5列GSCは7日と仮定され、警告が出る
2. `python $S inventory` で比較可否を確認する
3. `python $S report w{NN}` を実行する
4. 出力のうち、施策に関わるページ・クエリだけ `trend` で過去と並べる（月次解析のS-NN（`schedule-task.md`）に並ぶ施策の対象URLを使う）
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
