# task-list-28

- **完了日**: 2026-10-08
- **概要**: T-02 GA4キーイベント登録（`affiliate_click`）。2026-09-26のGA4計測拡充（コミット`c5e95b1`）で追加したイベントを、キーイベントとして登録した

## 実施内容

- [x] 本番に`affiliate_click`の実装が反映されていることを確認（`/ja/creator/farmland-prefab-streaming-room-legal/`のCTAに`data-track-event="affiliate_click"`・`data-track-slug`・`data-track-variant`・`data-track-program`が出力。全ページに`data-track-event`のクリック委譲リスナーあり）
- [x] GA4のイベント一覧に`affiliate_click`が出ていなかった（`purchase`のみ）ため、リアルタイムレポートで検出を確認（計測は正常。一覧に出ないのは、イベントが届いてから管理画面に載るまでの遅延、または9/26以降のクリックがなかったため）
- [x] 2026-10-08 ユーザーがGA4でキーイベント登録を完了（登録日以降の分から集計される）

## 派生

- `purchase`イベントはサイトのコードから送っていないため出どころ不明 → T-04（direct流入のbot疑い）に確認事項として追記
- `affiliate_click`のslug別クリックは、T-10・T-23のCTA配置後の効果確認に使う（登録は完了、効果確認は各タスク側でW-NN起票）

## 参照

- 実装: `src/components/starlight/Head.astro`（リスナー）、`src/components/CtaBox.astro`・`src/components/AffiliateCard.astro`（`affiliate_click`の属性）
- 関連: `weekly-task.md` W-15（GA4週次推移）
