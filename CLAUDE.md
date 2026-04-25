# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**BouonLab（防音Lab）** は防音・遮音分野のE-E-A-T権威を目指すAstro 6製日本語ブログ。`https://bouon-lab.com/` で公開。コンテンツ戦略は `GEMINI.md` を参照。

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

- URL構造: `/{lang}/{collection}/{slug}/`
- `lang` はファイルパスではなく **frontmatterの `lang` フィールド** から取得
- `slug` はファイルパスから `/{lang}/` と `/index` を除去したもの

### Content Collections

`src/content.config.ts` で定義。全コレクションが共通の `baseSchema` を使用。

| Collection  | ディレクトリ             | ターゲット読者                      |
| ----------- | ------------------------ | ----------------------------------- |
| `knowledge` | `src/content/knowledge/` | 一般ユーザー（Myth Busterスタイル） |
| `solutions` | `src/content/solutions/` | 投資家・オーナー・プロユーザー      |
| `use-case`  | `src/content/use-case/`  | シナリオ別ガイド                    |
| `company`   | `src/content/company/`   | メーカー・ブランド分析              |
| `column`    | `src/content/column/`    | コラム全般                          |

コンテンツファイルの配置: `src/content/{collection}/{lang}/{slug}/index.mdx`

### Frontmatter テンプレート

```yaml
---
title: "主要KWを左側に | 35-42文字"
description: "SEO用サマリー | 80-120文字"
slug: "unique-slug"
date: "YYYY-MM-DD"
lastmod: "YYYY-MM-DD"
draft: false # true=非公開, false=公開
lang: "ja" # ja | en | zh | ko
category: "knowledge" # コレクション名と一致させる
tags: ["タグ1", "タグ2"] # 1-10個
image: ./cover.png # クォートなし・エスケープなし
---
```

### MDX コンポーネント

`[...slug].astro` でグローバル登録済み。**MDXファイル内でimport文は絶対に書かない**。タグをそのまま使う:

```mdx
<RegionBanner />
<AffiliateCard />
<CtaBox />
<SmartLink href="/ja/solutions/slug/" />
<AssetValueTable />
<ArchiveCarousel />
<MultiplexAd />
```

### 画像アセット

- 新規カバー画像は必ず `.png`（`cover.png`）
- frontmatterはクォートなし相対パス: `image: ./cover.png`
- frontmatter記述前にディレクトリのファイル名を必ず確認（Globで確認）
- 外部ドメイン許可済み: `m.media-amazon.com`, `ir-jp.amazon-adsystem.com`

---

## エージェント体系

タスクに応じて適切なエージェントルールを参照すること。

### エージェント一覧と用途

| エージェントファイル                 | 役割                         | いつ使うか                                        |
| ------------------------------------ | ---------------------------- | ------------------------------------------------- |
| `.agents/bouon-writer.md`            | **ライティング統括（必読）** | 新規記事・既存記事の編集、全コンテンツ作業の基本  |
| `.agents/bouon-writer-en.md`         | 英語記事ライティング         | `lang: "en"` の記事作成時                         |
| `.agents/content-strategist.md`      | コンテンツ戦略・リライト計画 | サイト改善提案、GSCデータ分析、月次サイクル管理   |
| `.agents/re-writting-rules.md`       | リライト実行ルール           | 既存記事の品質改善、CTR向上、レガシー記事の近代化 |
| `.agents/affiliates-writter.md`      | アフィリエイト・クロージング | 防音室・防音賃貸の高単価コンテンツ、CTA設計       |
| `.agents/image-generation.md`        | 画像生成ワークフロー         | カバー画像・記事内画像の生成                      |
| `.agents/instagram-marketer.md`      | Instagram投稿コンテンツ作成  | 記事のInstagramプロモーション                     |
| `.agents/visual-content-designer.md` | ビジュアルコンテンツ設計     | インフォグラフィック、図解の設計                  |

### ペルソナ体系

記事のターゲットや語り口を設計するときに参照:

- `.agents/persona/00_Persona-Omega.md` — **編集長視点**。全記事の最終チェッカー（誇大広告排除・物理法則遵守・二次リスク提示）
- `.agents/persona/01_Consumer-Personas.md` — 消費者ペルソナA〜G（楽器演奏者・配信者・テレワーク等）
- `.agents/persona/02_Supplier-Personas.md` — サプライヤーペルソナH〜L

---

## コンテンツ作業フロー

### \_draft/ を使った記事制作フロー（標準）

1. `_draft/` にメモ・素案を置く
2. `/draft-plan` でブレスト → 方向性を確定
3. `/publish-draft {ファイル名}` で本番記事を生成
4. **生成完了後、使用した `_draft/` ファイルを削除する**（管理コストを増やさない）

### 新規記事を作成するとき

1. `GEMINI.md` でカテゴリ戦略を確認
2. `.agents/bouon-writer.md` を読む（ライティングルールの基本）
3. 英語記事の場合は `.agents/bouon-writer-en.md` も読む
4. ターゲットペルソナを `01_Consumer-Personas.md` で確認
5. `src/content/{collection}/{lang}/{slug}/` ディレクトリを作成
6. 画像が必要なら画像生成スクリプトを実行してから frontmatter を書く

### 既存記事をリライトするとき

1. `.agents/content-strategist.md` でリライト戦略・優先度を確認
2. `.agents/re-writting-rules.md` で実行手順を確認
3. ターゲット記事を読み、ペルソナΩフィルターを適用
4. **URLスラッグは変更しない**（既存SEO評価を保護）

### アフィリエイト・高単価記事のとき

`.agents/affiliates-writter.md` を読んでROI/PASONA/QUESTロジックを適用:

- 防音賃貸: PASONA（痛みの解決）を最大適用
- 防音室（ユニット）: QUEST（冒険型）を最大適用
- 市場・ニュース系: アフィリエイトロジックは無効

---

## ライティング必須ルール（`src/content/` 内全ファイル）

- **強調**: `<strong>text</strong>` を使う — `**text**` は絶対禁止
- **リストラベル**: `- <strong>ラベル</strong> : 説明文`（コロン前後にスペース）
- **内部リンク（日本語）**: `[テキスト](/ja/collection/slug/)` — 末尾スラッシュ必須
- **内部リンク（英語）**: `/en/` プレフィックスを使う
- **文体**: 敬体（です・ます調）、1文60文字以内
- **H2/H3の番号付け禁止**: 「1.」「2.」等の手動番号を見出しに使わない

---

## 画像生成スクリプト

```bash
# 基本実行
node .agents/scripts/generate-image.js "YOUR_PROMPT_HERE" "./cover.png"

# プリセット使用（推奨）
node .agents/scripts/generate-image.js --preset cover "防音室のある静かなリビング" "./cover.png"
node .agents/scripts/generate-image.js --preset content "吸音パネルの断面図" "./infographic.png"

# プリセット一覧確認
node .agents/scripts/generate-image.js --list-presets
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
- API Key: `GEMINI_API_KEY` を `.agents/scripts/.env` に設定

---

## Instagram投稿フロー

`.agents/instagram-marketer.md` を参照。作成後は必ず追跡ファイルを更新:

- Feed投稿: `.agents/instagram-posts/feed-post/{slug}-feed.md`
- Stories: `.agents/instagram-posts/stories-post/{slug}-stories.md`
- 投稿済みリスト: `.agents/instagram-posts/insta-postlist.md` に追記

---

## 主要ファイル参照先

- `src/data/affiliates.ts` — アフィリエイトリンクデータ
- `.workspace/strategies/` — コンテンツ計画・リライトスケジュール
- `.workspace/.data-set/` — 防音スペック・市場データ・企業DB（アーカイブ）
