# task-list-21

- **完了日**: 2026-10-06
- **概要**: T-17 統合先2記事のGSC URL検査・インデックス登録リクエスト

## 実施内容

- ユーザーがGSCのURL検査で次の2URLのインデックス登録をリクエストした
  - `https://bouon-lab.com/ja/local/regional-city-soundproof-rental-guide/`（旧W-13、地方4都市の統合先）
  - `https://bouon-lab.com/ja/money/soundproof-subsidy-check-guide/`（W-24、旧`soundproof-subsidy-tokyo-osaka`の統合先）
- デプロイ後に、旧URL5本（`kanazawa`・`okayama`・`kumamoto`・`niigata`・`soundproof-subsidy-tokyo-osaka`）が本番で301になり、統合先が200で表示されることをcurlで確認済み

## 参照

- 旧W-13: `archive/weekly-task-archive-20261006.md`
- 効果測定: `schedule-task.md` S-07（`schedule/2026-10-17-w43-merge-articles-check.md`）、W-24
