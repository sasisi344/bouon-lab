# S-01 W42のGSC/GA4取り込み（2026-10-10前後）

- 担当: ユーザー（エクスポート）+ Claude（解析・記録）
- 状態: 未着手
- 関連: `weekly-task.md` W-06〜W-20、`task-list.md` T-06（GSCはカスタム7日固定）

## 目的

W41の7日GSCが最初の週次データで、W40以前は期間が揃わず比較できない。**W42が最初の前週比較**になるため、確実に7日で取得する。

## 手順

1. ユーザー: GSC・GA4をGA4と同じ日付の**カスタム7日**でエクスポートし、`access-data/2026/w42/`に置く（取得期間を`access-data/CLAUDE.md`の作業ログに1行記録する）
2. Claude: `bouon-weekly-report` skillでW41との前週比較を作る
3. Claude: `weekly-task.md`の「週次生データ」にW42を追記する（直近3週分を超えた古い週は`archive/weekly-task-archive-YYYYMMDD.md`へ移す）
4. Claude: 次の項目の結果を各W-NNに追記する
   - W-12（`mansion-instrument-practice-time-rules`のCTR・順位）、旧W-14（新規3記事のインデックス。`archive/weekly-task-archive-20261006.md`のW-14参照。URL検査で最終クロールの有無を見て、結果を同アーカイブのW-14に追記する）、W-18（`music-student-property-search-guide`の順位）、W-20（「防音ラボ」）
   - W-06（Tier B選別＋本音と建前リライト68記事）の基準値: 68記事の表示・CTR・順位をW42の7日ページ表から拾い、W-06(A)へ記録する。(B)の選別着手はW42〜W43のデータが揃ってから
   - S-07（統合先2記事`regional-city-soundproof-rental-guide`・`soundproof-subsidy-check-guide`）の基準値: 2URLのW42表示・順位（表に出なければ表示0）を`schedule/2026-10-17-w43-merge-articles-check.md`の「結果」に記録する
   - 旧W-07（カニバリクラスタA〜D統合4記事）の基準値: 4記事のW42表示・順位を`schedule/2026-10-17-w07-cluster-merge-check.md`（S-06）の「結果」に記録する
5. Claude: 新規フォローアップを`task-list.md`のT-NNまたは`weekly-task.md`のW-NNに起票する

## 完了条件

- W41との前週比較が出ている
- 上記W-NNに2026-10-10前後の結果が追記されている

## 結果

（実施後に追記）
