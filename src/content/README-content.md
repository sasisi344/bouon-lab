# contentの説明書

本番記事格納フォルダ `src/content` のフォルダ構造を指定。

**2026-06-01のカテゴリフラット化以降、`ja` はサブ区分フォルダを使わない**（旧 `diy/knowledge/others/solution` 階層は廃止済み）。本ファイルは現状構造を正とする。

## フォルダ階層指示

### 日本語（`ja`）— 実務ナレッジ軸（フラット構造）

```
src/content/ja/
├── soundproof-room/      # 防音室（ユニット・製品）
│   └── {slug}/index.mdx
├── soundproof-rental/    # 防音賃貸
│   └── {slug}/index.mdx
├── diy/                  # DIY防音
│   └── {slug}/index.mdx
├── money/                # お金・補助金・ローン
│   └── {slug}/index.mdx
├── creator/              # 配信・クリエイター
│   └── {slug}/index.mdx
├── knowledge/            # 防音の基礎知識
│   └── {slug}/index.mdx
├── local/                # 地域ガイド
│   └── {slug}/index.mdx
└── business/             # 企業・法人向け
    └── {slug}/index.mdx
```

- 第1階層: 言語コード（`ja` 単独。`en` は2026-09-05に廃止済み — 下記参照）
- 第2階層: トップカテゴリ（上記8種。`column` 等の旧カテゴリは廃止済み）
- 第3階層: 記事スラッグのフォルダ（`index.mdx` + `cover.png` を格納）。**サブ区分フォルダは挟まない**
- frontmatterの `subcategory` はスキーマ上 optional だが、現行記事では未使用（ディレクトリ階層には現れない）

トップカテゴリの正本はコード上 `src/data/contentCategories.ts` の `JA_TOP_CATEGORIES`。

### 英語（`en`）— 廃止済み（2026-09-05）

`src/content/en/`（Japan lens 4記事＋旧フラット化前の空フォルダ）は全削除し、`ja` 単独構成に統一した。`public/robots.txt` で全UAに `Disallow: /en/` を設定済み、削除時点で実在した4記事のURLは `astro.config.mjs` の `redirects` で `/ja/` へ301転送済み。**新規`en`記事は作成しない**。

## _draft から本番記事へ移す際のカテゴリ厳密ルール

- 下書きは必ず `_draft` に作成し、公開時に `src/content/ja/{category}/{slug}/` 配下へ移す（**企画の起点は基本 `ja`**）。
- 主要キーワードが防音室なら `soundproof-room`、防音賃貸なら `soundproof-rental`、DIYなら `diy`、費用・補助金・ローンなら `money`、配信者・クリエイター向けなら `creator`、基礎知識・法規制・物理なら `knowledge`、地域別ガイドなら `local`、法人・市場動向なら `business`。
- 第3階層は必ずスラッグのフォルダで切る（サブ区分フォルダを挟まない）。

## frontmatter ルール（categories / slug）

- `lang` / `category` は **ディレクトリ構造と一致**させる。
- `category` で使った英数字列は、`slug` では可能な限り重複使用しない。
- パーマリンク全体で記事意図が伝わるよう、`slug` は固有テーマを簡潔に表現する。
