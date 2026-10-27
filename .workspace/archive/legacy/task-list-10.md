# task-list-10

- **完了日**: 2026-09-16
- **概要**: `cable-noise-ground-loop-prevention`と`ground-loop-noise-basics`のカニバリを統合（前者を削除・301リダイレクト）

## 実施内容

- 「ノイズ アース」「グランドループ 対策」等の表記ゆれクエリ（合計300表示超）を`/ja/knowledge/ground-loop-noise-basics/`が順位50〜74位で受けて未クリックの一方、同テーマの`/ja/creator/cable-noise-ground-loop-prevention/`は新旧URLとも表示ほぼゼロだった件を統合
- 過去のカニバリクラスタA〜D統合（`archive/task-list-09.md`）と同じ「アクセスがほぼない記事は削除してよい」という既存方針に基づき、配信者向けの見分け方・対策手順・`AffiliateCard`（`ground-cable-mogami`）・関連記事リンクを`ground-loop-noise-basics`の「配信・宅録環境での見分け方と対策」節に統合し、`cable-noise-ground-loop-prevention`ディレクトリ（`index.mdx`・`cover.png`）を削除
- `astro.config.mjs`に新規301リダイレクト`/ja/creator/cable-noise-ground-loop-prevention/ → /ja/knowledge/ground-loop-noise-basics/`を追加し、誤った転送先だった旧`/posts/cable-noise-ground-loop-prevention/`（`/ja/diy/`行き）も正しい統合先に修正
- 内部リンク2件（`streaming-pc-fan-noise-mic`本文、`ground-loop-noise-basics`自身の相互参照）を更新
- `ground-loop-noise-basics`の`lastmod`を2026-09-16に更新、`tags`に「配信・実況」を追加
- `pnpm build`で207ページ生成・エラー0を確認

## 参照

- 統合元の課題提起: `weekly-task.md`「既存記事の構造強化タスク（Tier A〜D）効果測定フォローアップ」2026-09-06発見メモ（`archive/weekly-task-archive-20260916.md`に移管済み）
- 効果測定タスクは`task-list.md`「グランドループ記事統合の効果測定」へ記録
