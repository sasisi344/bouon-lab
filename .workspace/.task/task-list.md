# 現在抱えているタスク

---

## 実行待ちタスク

- [ ] 既存記事のボリューム・専門性を継続追求（随時）

---

## UI・サイト改善タスク（2026-06-05 起票）

優先度の考え方：**P1**＝SEO・UXバグ（即効）／**P2**＝トップ・一覧の文言・レイアウト（小改修）／**P3**＝設計・コピー要検討／**P4**＝コンテンツ継続施策

### P1 — 即対応（SEO・視認性バグ）

- [x] **SITE-01** 検索タイトルの二重化を解消し、サイト説明文言を見直す
  - 現状：`防音Lab | 科学的防音ナレッジベース | 防音Lab`（`index.astro` の `title` + `astro.config.mjs` の `site.title` が重複）
  - 対象：`src/pages/[lang]/index.astro`（`title` / `description`）、必要ならヒーロー文言も連動
  - 方針：`title` からサイト名を除く（出力イメージ：`あなたの環境に合わせた防音ガイド | 防音Lab`）
  - 「科学的」は外す（あなたの環境に寄り添うトーンに統一）
  - ヒーロー文言も変更する（ただし最終コピーは実装時に候補を提示して確定）

- [x] **SITE-02** ナレッジ・ディレクトリのホバー視認性を修正
  - 現状：`.pill:hover` がゴールド背景＋黒文字でコントラストが弱い／読みにくい
  - 対象：`src/pages/[lang]/index.astro` の `.pill` スタイル
  - 方針：背景のみグレー系に変化、文字色は白またはゴールドを維持

### P2 — トップ・カテゴリ一覧（文言・レイアウト）

- [x] **SITE-03** トップ「最新の研究成果」セクションの文言を実態に合わせる
  - 変更案：見出し `最新記事`、説明 `日々更新される防音の実践ナレッジ` など
  - 対象：`src/pages/[lang]/index.astro` L129 付近

- [x] **SITE-04** トップPC表示を3カラム→2カラムに変更
  - 対象：`.posts-grid--latest`（最新記事）、`.hub-grid`（課題別ハブ）
  - 現状：PC `repeat(3, 1fr)` → `repeat(2, 1fr)` に変更
  - タブレット・モバイルのブレークポイントは現行を維持

- [x] **SITE-05** カテゴリ一覧の「注目の記事」を最大3件に絞る
  - 現状：`starterSetPosts = categoryPosts.slice(0, 6)`（6件）
  - 対象：`src/pages/[lang]/[category]/index.astro` L72
  - 選定ロジック：当面は「最新3件」
  - 表示：3件を「1カラム」で目立つ形にする（現状の2カラム指定を変更）

### P3 — 設計・コピー（要すり合わせ）

- [x] **SITE-06** 課題別ハブを3項目→6項目に拡張（2カラム×6ブロック）
  - 現状：`src/data/hubClusters.ts` に3クラスタ（在宅／楽器／配信）、各1記事のみ表示
  - 作業：`HUB_CLUSTERS` に3クラスタ追加、グリッドを2カラム6行に
  - 追加3クラスタ案（ペルソナ確定）：`補助金・費用` / `騒音トラブル` / `地域別`
  - 記事表示：ハブあたり **3件** をビルド時に選出（キーワードマッチ＋カテゴリフォールバック、日付降順）
  - 静的サイトの「ランダム」：`Math.random()` はビルドごとに変わるだけなので、**デプロイ単位のローテーション**として扱う（訪問ごとの真ランダムは不可）。代替案：週次でビルドする／手動キュレーションリストを `hubClusters.ts` に持つ

- [x] **SITE-07** Aboutページの文言をユーザーフレンドリーにリライト
  - 現状：「資産としての静寂」「科学的アプローチ」中心（`src/pages/[lang]/about.astro`）
  - 方向性：ナレッジ提供＋**日本の防音技術は高水準なのに一般住宅に届いていない**ギャップへの共感
  - 作業：見出し・ミッション・3つの特徴ブロックを全面改稿（`noindex` は維持）

### P4 — コンテンツ継続

- [ ] **CONTENT-01** 配信者（`creator`）カテゴリの記事を増やす
  - 現状：公開9本（`src/content/ja/creator/`）
  - 他カテゴリ比で薄い。企画・リライト・新規執筆は `.workspace/strategies/` と連動
  - サイト改善とは別レーンの継続タスク
  - 作成記事候補は`.workspace\.task\streamer-post.md`

---

### 未決事項（着手前に確認したいこと）

| ID | 質問 | 影響タスク |
|----|------|-----------|
| Q1 | ヒーロー見出し・リードの最終コピーをこちらで初案提示して確定してよいですか？ | SITE-01 |
| Q2 | 追加3クラスタ（補助金・費用 / 騒音トラブル / 地域別）の「キーワードセット」初案は私の方で作ってよいですか？ | SITE-06 |

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
