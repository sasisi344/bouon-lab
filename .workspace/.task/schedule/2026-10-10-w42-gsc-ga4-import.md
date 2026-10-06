# S-01 W42のGSC/GA4取り込み（2026-10-10前後）

- 担当: ユーザー（エクスポート）+ Claude（解析・記録）
- 状態: 未着手
- 関連: `weekly-task.md` W-03〜W-20、`task-list.md` T-06（GSCはカスタム7日固定）

## 目的

W41の7日GSCが最初の週次データで、W40以前は期間が揃わず比較できない。**W42が最初の前週比較**になるため、確実に7日で取得する。

## 手順

1. ユーザー: GSC・GA4をGA4と同じ日付の**カスタム7日**でエクスポートし、`access-data/2026/w42/`に置く（取得期間を`access-data/CLAUDE.md`の作業ログに1行記録する）
2. Claude: `bouon-weekly-report` skillでW41との前週比較を作る
3. Claude: `weekly-task.md`の「週次生データ」にW42を追記する（直近3週分を超えた古い週は`archive/weekly-task-archive-YYYYMMDD.md`へ移す）
4. Claude: 次の項目の結果を各W-NNに追記する
   - W-03（インデックス登録・404）、W-12（`mansion-instrument-practice-time-rules`のCTR・順位）、W-13（地域4本のnoindex判断）、W-14（新規3記事のインデックス）、W-18（`music-student-property-search-guide`の順位）、W-20（「防音ラボ」）
5. Claude: 新規フォローアップを`task-list.md`のT-NNまたは`weekly-task.md`のW-NNに起票する

## 完了条件

- W41との前週比較が出ている
- 上記W-NNに2026-10-10前後の結果が追記されている

## 結果

（実施後に追記）
