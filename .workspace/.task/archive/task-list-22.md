# task-list-22

- **完了日**: 2026-10-07
- **概要**: T-19 サイトマップに記事の`lastmod`を追加（流入の約51%を占めるBingのクロール判断材料）

## 実施内容

- `astro.config.mjs`に`collectArticleLastmods()`を追加し、`sitemap.serialize`で記事のfrontmatter `lastmod`（なければ`date`）を`/ja/{category}/{slug}/`をキーに付与
- トップ・カテゴリ一覧9ページは更新日が確定しないため`lastmod`を付けない（不正確な日付は検索エンジンに無視される原因になるため）
- 本番確認（2026-10-07、デプロイ後）: `sitemap-0.xml`・`sitemap-index.xml`は200。202URL中193件（記事すべて）に`lastmod`あり、日付は2025-10-12〜2026-10-06の32種類でISO形式。`lastmod`なしは意図どおりトップ・一覧9件のみ。202URLすべてが200

## 運用ルール

- 記事の`lastmod`は**実質的な更新（事実確認・本文の書き換え）のときだけ**更新する。内部リンクの追加・誤字修正では変えない
- 効果は即効ではなく、W42以降の7日表では判定しない

## 参照

- `task-list.md` T-18（www・http統一。同日に発見）
