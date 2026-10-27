# task-list-03

- **完了日**: 2026-07-05
- **概要**: ランキング崩壊調査・138件リダイレクト修正・GSCクエリ対応（A/B群）

## 実施内容

- 旧 Hugo `/posts/` URL 138件（67%）のリダイレクト未登録を特定、`astro.config.mjs` に全件追記・build確認
- W28 GSC取り込み、個別マッチング27件・サイト全体指標を zenki 比較 → W28時点では回復兆候なし（表示/日 zenki の約1割）
- gsc-query-task A群/A'群: 記事訂正・CtaBox追加・セクション新設（5件）
- gsc-query-task B群: `en` 記事3本新規、補助金記事加筆、QFO拡張リスト作成（`strategies/qfo-20260702.md`）
- `livestream soundproof` ミスマッチ対応: `en/how-japanese-streamers-soundproof/` 新規作成
- missing-redirects AUTO_MATCH 15件追記、NEEDS_MANUAL_REVIEW 17件は138件監査で対応済み確認

## 参照

- `archieve/gsc-query-task.md`
- `.workspace/.data-set/seo-check/gsc-analysis-20260702/redirect-gap-full-audit-20260702.md`
- `archieve/strategies/qfo-20260702.md`
