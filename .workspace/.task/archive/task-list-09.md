# task-list-09

- **完了日**: 2026-09-16
- **概要**: カニバリクラスタA〜D（計7記事）をアクセスほぼゼロにより削除・301リダイレクト統合

## 実施内容

- ユーザーが「アクセスがほぼない記事は削除してもいい」と方針決定。`archive/site-topic-clusters.md`（2026-07-10更新）で優先度1・2とされ2ヶ月以上未対応だったクラスタを、最新GSC実データ（W36・過去3ヶ月）で再確認した上で削除を実行
- 削除した7記事（いずれも過去3ヶ月クリック0、表示回数も一桁〜10件台）:
  - `business/owner-soundproof-renovation-investment-strategy-2026`
  - `business/soundproof-renovation-cost-outlook-2026`
  - `soundproof-rental/owner-soundproof-renovation-strategy`
  - `money/rental-vs-purchase-soundproof-room`
  - `soundproof-rental/rental-permission-proposal-template`
  - `soundproof-rental/soundproof-room-installation-conditions`
  - `soundproof-room/bouon-size-choice`
- 生存記事（統合先）: `money/owner-renovation-roi-simulation-tool`（クラスタA）・`money/soundproof-room-rental-cost`（クラスタB）・`soundproof-rental/rental-unit-soundproof-room`（クラスタC）・`soundproof-room/soundproof-room-size`（クラスタD）
- `astro.config.mjs`に7件の新規301リダイレクト追加＋既存の旧URLリダイレクト十数件の転送先を生存記事へ付け替え（二重リダイレクト・404化を防止）
- サイト内の内部リンク26ファイルを生存記事のURL・実タイトルに合わせて修正（自己参照リンク・重複リンク・タイトル不一致を解消）
- `pnpm build`で208ページ生成・エラー0を確認

## 参照

- 統合候補の詳細分析: `.workspace/.task/consolidation-candidates-20260916.md`
- 元となったカニバリ調査: `archive/site-topic-clusters.md`
