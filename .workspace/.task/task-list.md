# 現在抱えているタスク

---

## 実行待ちタスク

- [ ] 既存記事のボリューム・専門性を継続追求（随時）
- [x] pnpm build でリダイレクトの動作確認
- [x] GSC で URL 変更ツールを実行（一括申請方法を調査）

> ToDoリストで管理する。実行したら実行済にチェックを入れる。

---

## 実行済タスク

### タグ整理（2026-06-01 完了）

- [x] タグルールを厳格化し、不用意に作成されたものを整理
  - 優先度A（スペース問題・表記揺れ・年号タグ）: 441 → 410件
  - 優先度B（DIY/配信/騒音/リノベ/賃貸系の統合）: 410 → 373件
  - 優先度C（汎用的タグの文脈別置換・廃止）: 373 → 358件
  - 優先度D（製品固有・素材・演奏者・費用タグの統合）: 358 → 300件
  - **合計: 441件 → 300件（−141件）**

### サイト構成のウィークポイント改善（2026-06-01 完了）

- [x] Footer.astro TypeScript エラー修正（starlightRoute 非依存化）
- [x] content.config.ts deprecation 警告修正（z を zod から直接 import）
- [x] 自己参照リダイレクト除去
- [x] sitemap フィルター強化（/ja/ 以外を除外）
- [x] llms.txt 全面リライト（旧カテゴリ構造→新8カテゴリ）
- [x] robots.txt に `Disallow: /en/` 追加
- [x] 記事内の壊れた内部リンク修正（10件）
- [x] image フィールド欠損3記事に追加

### draft:true 記事の公開（2026-06-01 完了）

全14件を公開済み（`draft: false`）。記事リライト・拡充も実施済み。

| 状態 | slug |
|------|------|
| [x] | `business/bouonrental-areasec-newbusiness` |
| [x] | `business/report-japan-asmr-vtuber-streaming-studio-standard` |
| [x] | `diy/outdoor-soundproof-curtain-market-guide` |
| [x] | `knowledge/future-ssi-silent-speech-interface-revolution` |
| [x] | `knowledge/mental-health-benefits-of-silence` |
| [x] | `knowledge/neighborhood-noise-seasonal-pattern-statistics` |
| [x] | `knowledge/noise-complaint-legal-precedent-manual` |
| [x] | `knowledge/proofroom-maker-2025productcheck` |
| [x] | `money/report-japan-soundproof-unit-resale-value-simulation` |
| [x] | `soundproof-rental/housing-builder-soundproof-comparison` |
| [x] | `soundproof-rental/report-japan-soundproof-rental-market-needs` |
| [x] | `soundproof-room/bouon-humidifier-comparison` |
| [x] | `soundproof-room/sleep-quality-soundproof-room` |
| [x] | `soundproof-room/yamaha-tabisuru-bouon-room` |

### カバー画像生成（2026-06-01 完了）

- [x] 45件のカバー画像を生成（Batch 1〜5 完了）

### カテゴリ再構築（2026-06-01 完了）

- [x] 旧サブカテゴリ（knowledge/solution/diy/others/column）を廃止
- [x] 新8カテゴリ体制に移行（soundproof-room/soundproof-rental/diy/money/creator/knowledge/local/business）
- [x] Phase 0〜3 の全 139ファイル移行 + リダイレクト設定
- [x] 薄い記事の統合（5本→2本）

### Starlight テーマ移行（2026-06-01 完了）

- [x] @astrojs/starlight 0.39.2 インストール・設定
- [x] Layout.astro 削除・全ページ StarlightPage 化
- [x] ダーク固定（ThemeProvider/ThemeSelect オーバーライド）
- [x] カスタム CSS（ゴールドアクセント・ダーク配色）
- [x] noindex（about/privacy）・sitemap フィルター設定

### SEO 改善（2026-06-01 完了）

- [x] タイトルリライト: rental-proofroom-contractcheck
- [x] 新規記事作成: diy-vocal-soundproof-mask / hsp-soundproof-room-guide
- [x] 壊れたリダイレクト全修正（/posts/→旧/ja/solutions/→現行カテゴリ）
- [x] 既存記事の拡充: bass-trap-installation-guide / soundproof-room-loan-guide / soundproof-culture-japan-vs-america
- [x] 賃貸記事の改善: SmartLink修正・H1除去・フェイクリンク除去・内容拡充

### 英語ページ対応（2026-05-31 方針変更）

- [x] 英語ページを非公開化（getStaticPaths から en を除外）
- [x] hreflang="en" タグを削除
- [x] /en/ リダイレクトを /ja/ へ変更
