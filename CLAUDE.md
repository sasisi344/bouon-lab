# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**BouonLab（防音Lab）** は防音・遮音分野のE-E-A-T権威を目指すAstro 6製ブログ。`https://bouon-lab.com/` で公開。**記事の主軸は常に日本語（`ja`）**。コンテンツ戦略は `GEMINI.md` を参照。

## Commands

```bash
pnpm dev        # 開発サーバー (localhost:4321)
pnpm build      # 本番ビルド → ./dist/
pnpm preview    # ビルド確認
npx astro check # 型チェック
```

## Architecture

### ルーティング

全コンテンツは `src/pages/[lang]/[category]/[...slug].astro` 1ファイルで処理。

- **公開URL（パーマリンク）例**: `https://bouon-lab.com/ja/soundproof-room/solution/post-slug/`（末尾スラッシュ）
- **ファイル配置例**: `src/content/ja/soundproof-room/solution/post-slug/index.mdx`
- URLの `lang`・カテゴリ階層は **ディレクトリ構造と frontmatter（`lang` / `category` / `subcategory`）を一致**させる
- 階層の全体像は **`src/content/README-content.md`** を正とする

### コンテンツ配置と多言語

- **主言語**: すべての企画・更新の起点は **`ja` 記事**。英語版は後追いでもよいが、**原稿は日本語を先に固定**する。
- **英語記事（`en`）**: **`ja` と同じトップカテゴリ階層は使わない**。`japan-noise-and-society` / `japan-soundproof-housing` / `japan-quiet-spaces` の **Japan lens** で、日本の社会・住宅・市場・文化として防音を説明する（翻訳量産より文脈の再構成）。詳細は `src/content/README-content.md` と `.cursor/rules/bouon-writing-master.mdc`。

### スラッグ・フォルダ名のルール

- **カテゴリ語の重複禁止**: パスに `soundproof-room` などトピックが既に含まれる場合、**同じ意味を `slug` に繰り返し入れない**（例: `soundproof-room` 配下で `soundproof-...` といった冗長スラッグは避ける）。
- **省略しない**: フォルダ名・スラッグは**略語にしない**。意味が変わるため、意図が伝わる語を使う。
- **スラッグの長さ**: SEO用のキーワード詰め込みより、**トピックが一意に伝わる程度**でよい。

### Content Collections

`src/content.config.ts` のローダー・スキーマ定義を参照。エントリは共通の `baseSchema`（`lang` / `category` / `subcategory` 等）に従う。

**物理パスは言語ファースト**: `src/content/{lang}/{カテゴリ系}/{サブ区分}/{記事スラッグ}/index.mdx`（詳細ツリーは `src/content/README-content.md`）。

### Frontmatter テンプレート

```yaml
---
title: "主要KWを左側に | 35-42文字"
description: "SEO用サマリー | 80-120文字"
slug: "unique-slug"
date: "YYYY-MM-DD"
lastmod: "YYYY-MM-DD"
draft: false # true=非公開, false=公開
lang: "ja" # ja | en | zh | ko（主軸は ja）
category: "soundproof-room" # ディレクトリのカテゴリ段と一致
subcategory: "solution" # サブ区分フォルダと一致（パンくずにも使用）
tags: ["タグ1", "タグ2"] # 1-7個
image: ./cover.png # クォートなし・エスケープなし
---
```

- `category` と `subcategory` は原則セットで運用し、URL階層・パンくず・内部導線の一貫性を保つ。
- カテゴリの表示ラベルは言語別に出し分ける（`en` トップカテゴリのラベルは `src/data/contentCategories.ts` の `TOP_CATEGORY_LABELS`）。

### MDX コンポーネント

`[...slug].astro` でグローバル登録済み。**MDXファイル内でimport文は絶対に書かない**。タグをそのまま使う:

```mdx
<RegionBanner />
<AffiliateCard />
<CtaBox slug="yamaha-avitex" />
<SmartLink href="/ja/soundproof-room/solution/post-slug/" />
<AssetValueTable />
<ArchiveCarousel />
<MultiplexAd />
```

**`<CtaBox>` の使用ルール（当面）**:
- `slug` は必須。省略すると記事内にエラーが表示される
- 使用できる slug は `yamaha-avitex`（アビテックス）と `kawai-nasal`（ナサール）の2つのみ
- **記事本文でその商品名に言及している場合のみ**配置する
- 商品名が登場しない記事には置かない

### 画像アセット

- 新規カバー画像は必ず `.png`（`cover.png`）
- frontmatterはクォートなし相対パス: `image: ./cover.png`
- frontmatter記述前にディレクトリのファイル名を必ず確認（Globで確認）
- 外部ドメイン許可済み: `m.media-amazon.com`, `ir-jp.amazon-adsystem.com`

---

## Cursorルール体系

タスクに応じて適切なエージェントルールを参照すること。

### ルール一覧と用途

| ルールファイル                                  | 役割                         | いつ使うか                                      |
| ----------------------------------------------- | ---------------------------- | ----------------------------------------------- |
| `.cursor/rules/bouon-content-categories.mdc`    | カテゴリ・階層・パーマリンク（`en` は Japan lens 階層） | 記事の配置、slug設計、frontmatter整合を確認するとき |
| `.cursor/rules/bouon-writing-master.mdc`        | **ライティング統括（必読）** | 新規記事・既存記事編集、日英の文体・記法統一        |
| `.cursor/rules/bouon-rewrite-strategy.mdc`      | リライト戦略・実行基準       | 既存記事の改善、CTR改善、レガシー更新              |
| `.cursor/rules/bouon-growth-ops.mdc`            | 収益導線・ビジュアル・SNS    | 高単価導線設計、図解設計、Instagram運用            |

### ペルソナ体系

記事のターゲットや語り口を設計するときに参照:

- ペルソナ運用は `.cursor/rules/bouon-writing-master.mdc` の基準に統合し、誇大表現排除・物理法則遵守・二次リスク提示を常時適用する。

---

## コンテンツ作業フロー

### \_draft/ を使った記事制作フロー（標準）

1. `_draft/` にメモ・素案を置く
2. `/draft-plan` でブレスト → 方向性を確定
3. `/publish-draft {ファイル名}` で本番記事を生成
4. **生成完了後、使用した `_draft/` ファイルを削除する**（管理コストを増やさない）

**ドラフト内の `> [!forAI]` ブロック**: 清書・本番投稿時は、本文にそのブロックがある場合 **最優先で参照**する。カテゴリ・想定読者・主張・見出し構成・トーンをそこに合わせて反映する。**本番記事には `> [!forAI]` ブロックそのものは載せない**（執筆用注記として削除する）。

### 新規記事を作成するとき

1. `GEMINI.md` でカテゴリ戦略を確認
2. `.cursor/rules/bouon-writing-master.mdc` を確認（ライティングルールの基本）
3. 英語記事の場合は Answer-First ルールを同ファイルで適用
4. ターゲットペルソナを `01_Consumer-Personas.md` で確認
5. `src/content/{lang}/{カテゴリ}/{サブ区分}/{slug}/` ディレクトリを作成（詳細は `src/content/README-content.md`）
6. 画像が必要なら画像生成スクリプトを実行してから frontmatter を書く

### 既存記事をリライトするとき

1. `.cursor/rules/bouon-rewrite-strategy.mdc` で戦略・優先度を確認
2. 同ルールの実行手順に沿って改稿する
3. ターゲット記事を読み、ペルソナΩフィルターを適用
4. **URLスラッグは変更しない**（既存SEO評価を保護）

### アフィリエイト・高単価記事のとき

`.cursor/rules/bouon-growth-ops.mdc` を参照し、ROI/PASONA/QUESTロジックを適用:

- 防音賃貸: PASONA（痛みの解決）を最大適用
- 防音室（ユニット）: QUEST（冒険型）を最大適用
- 市場・ニュース系: アフィリエイトロジックは無効

---

## ライティング必須ルール（`src/content/` 内全ファイル）

- **強調**: `<strong>text</strong>` を使う — `**text**` は絶対禁止
- **リストラベル**: `- <strong>ラベル</strong> : 説明文`（コロン前後にスペース）
- **内部リンク（日本語）**: `[テキスト](/ja/{カテゴリ}/{サブ区分}/{slug}/)` — 末尾スラッシュ必須（例: `/ja/soundproof-room/solution/post-slug/`）
- **内部リンク（英語）**: `/en/` プレフィックスを使う
- **文体**: 敬体（です・ます調）、1文60文字以内
- **H2/H3の番号付け禁止**: 「1.」「2.」等の手動番号を見出しに使わない

---

## 画像生成スクリプト

```bash
# 基本実行
node .workspace/scripts/generate-image.js "YOUR_PROMPT_HERE" "./cover.png"

# プリセット使用（推奨）
node .workspace/scripts/generate-image.js --preset cover "防音室のある静かなリビング" "./cover.png"
node .workspace/scripts/generate-image.js --preset content "吸音パネルの断面図" "./infographic.png"

# プリセット一覧確認
node .workspace/scripts/generate-image.js --list-presets
```

| プリセット    | 用途               | アスペクト比 |
| ------------- | ------------------ | ------------ |
| `cover`       | 記事カバー画像     | 6:4          |
| `content`     | 記事内挿入画像     | 16:9         |
| `portrait`    | 縦長（サイドバー） | 4:6          |
| `infographic` | 図解・ダイアグラム | —            |
| `sns`         | Instagram用        | 1:1          |

- プロンプトは**英語**で書く（生成精度向上のため）
- 画像内テキストが必要な場合は**日本語**で指定
- API Key: `GEMINI_API_KEY` を `.workspace/scripts/.env` に設定

---

## Instagram投稿フロー

`.cursor/rules/bouon-growth-ops.mdc` を参照。作成後は必ず追跡ファイルを更新:

- Feed投稿: `.agents/instagram-posts/feed-post/{slug}-feed.md`
- Stories: `.agents/instagram-posts/stories-post/{slug}-stories.md`
- 投稿済みリスト: `.agents/instagram-posts/insta-postlist.md` に追記

---

## 主要ファイル参照先

- `src/data/contentCategories.ts` — `ja` / `en` のトップカテゴリ一覧とナビ・一覧用ラベル（`en` は Japan lens の3カテゴリ）
- `.workspace/.data-set/interlink-postlist.md` — 内部リンク整理用の記事一覧（`title` / URL用`slug` / `tags` / `category` 等）。更新は `node .workspace/scripts/build-interlink-postlist.mjs`
- `src/data/affiliates.ts` — アフィリエイトリンクデータ
- `.workspace/strategies/` — コンテンツ計画・リライトスケジュール
- `.workspace/.data-set/` — 防音スペック・市場データ・企業DB（アーカイブ）
