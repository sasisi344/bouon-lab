# Astro移行・再構築タスクリスト (Professional Structure Edition)

Astroへの移行と多言語対応を段階的に進めるための最終実行計画です。

## 1. フェーズ1：準備・設計（完了）
- [x] 既存Hugo記事のステータス最終確認
- [x] Astro Content Collections スキーマの確定（i18n対応版）
- [x] プロフェッショナル・ストラクチャ（言語トップ階層）の仕様策定 (@astro-move)

## 2. フェーズ2：Astro基盤構築 & デザイン刷新
- [x] ワークスペース直下に `astro-site/` プロジェクトを作成
- [x] **知的ダークモカ・デザイン**のLayout/Index実装
- [x] 地域検知バナー (`<RegionBanner />`) の実装
- [x] i18n対応版 `<SmartLink />`, `<CTA />` の実装
- [x] Astro 6 Content Layer API への完全移行

## 3. フェーズ3：プロフェッショナル・マイグレーション（次ステップ）
- [x] 記事変換スクリプト（`migrate-hugo-articles.js`）の開発
    - [x] 移行スクリプトの作成 (`scripts/migrate-hugo-articles.js`)
- [x] フロントマターの変換ロジック実装（slug, lastmod, draft対応）
- [x] ショートコード（SmartLink/CTA）のMDXコンポーネント変換対応
- [x] 画像アセットの解決と自動拡張子補正
- [x] テスト変換の実施と表示確認
- [x] 全記事（約200ファイル）の一括移行実行
（`../../content/posts` -> `src/content/posts/[lang]/`）

## 4. フェーズ4：アセット＆多言語SEO最適化
- [ ] 画像のPage Bundle化とWebP最適化（Astro Image）
- [ ] 言語別の `hreflang` / `Sitemap.xml` 設定
- [ ] 記事内インライン画像の多言語Altテキスト設定

## 5. フェーズ5：SEO・リダイレクト設定
- [ ] 旧パス (`/posts/[slug]`) から新パス (`/[lang]/[category]/[slug]`) への301リダイレクト設定

## 6. フェーズ6：最終検証・デプロイ
- [ ] 全ページビルドテスト & リンク切れチェック
- [ ] 知識のナレッジベースとしての整合性（索引・タグ）の確認

---
最終更新: 2026-03-13
策定: Antigravity (Gemini)
