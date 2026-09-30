---
name: bouon-draft-publish-pipeline
description: _draft/ の下書きを本番記事として src/content/ に投稿する共通パイプライン。/publish-draft と /write-article の両方から呼ばれる、frontmatter生成・カバー画像生成・MDXバンドル作成・下書き削除・完了報告の実処理を定義する。
---

# BouonLab ドラフト公開パイプライン（共通処理）

`/publish-draft`・`/write-article` の両コマンドが共有する実処理。各コマンドは対象ファイルの選定とボリューム/フレームワークの決定のみ行い、以降はこのパイプラインに従う。

## Step 0. 事前ロード

1. `bouon-persona-thinking` skill（本音と建前シンキングルール）
2. `.agents/persona/01_Consumer-Personas.md`（ターゲットペルソナ）
3. `.agents/persona/00_Persona-Omega.md`（編集長フィルター）
4. `bouon-writing` skill（記法・frontmatter・MDXコンポーネントルール）
5. `bouon-category` skill（カテゴリ判定）

## Step 1. ドラフトスキャン・スキップ規則

`_draft/` をスキャンする際、以下は処理対象から除外する:

- 非Markdownファイル（`.py`、`.txt`等）
- 戦略・企画ドキュメント（`strategy-`、`cluster-ideas`、`owner-renovation-cluster`で始まるもの）
- 単なるメモ・アイデアのみ（本文の骨格がないもの）
- すでに `src/content/ja/{category}/{slug}/` に同一slugが存在するもの（Globで重複チェック）

## Step 2. メタ情報抽出

`> [!forAI]` ブロックがある場合、**他のメモより先に全文を読み、清書の最優先指示として扱う**。カテゴリ・読者像・主張・構成・マーケ方針を frontmatter・見出し・本文の論旨に必ず反映する。このブロック自体は本番MDXには出力しない（削除する）。

| 判断項目 | 確認方法 |
|---|---|
| **category** | frontmatterの`category`。なければ`bouon-category` skillの判定フローで推定 |
| **slug** | frontmatterの`slug`。なければファイル名からローマ字変換して生成 |
| **lang** | frontmatterの`lang`。なければ`ja` |
| **tags** | frontmatterの`tags`。なければ本文から最大5個抽出 |

## Step 3. 本文の完成

`bouon-writing` skillの記法ルール（`<strong>`・リストラベル・内部リンク末尾スラッシュ・H2/H3番号禁止・段落構成）を厳守する。

- ドラフトの見出し構成・主張・内部リンク候補をそのまま活かす（`[!forAI]`と矛盾する場合は`[!forAI]`を優先）
- 「骨子」「メモ」「TODO」セクションを肉付けする
- 執筆用注記（「執筆時の注意」等）は削除する
- 記事冒頭（frontmatterの直後）に必ず `<RegionBanner />` を置く
- 数値・スペックはドラフト記載を優先。推定値は「目安」「概算」と明記。税務・法務・医療内容は専門家確認の免責を入れる
- 実在企業名・補助金額・統計等の事実主張は `bouon-research` skillの裏取り方針に従う

## Step 4. frontmatter生成

```yaml
---
title: "主要KWを左側に | 35-42文字"
description: "SEO用サマリー | 80-120文字"
slug: "unique-slug"
date: "YYYY-MM-DD"
lastmod: "YYYY-MM-DD"
draft: false
lang: "ja"
category: "{bouon-categoryで判定したカテゴリ}"
tags: ["タグ1", "タグ2"]
image: ./cover.png
---
```

- `date`はドラフトの`date`を使用、なければ本日の日付。`lastmod`は本日の日付
- `volume`・`voice`・`subcategory`等の非標準フィールドは含めない
- `image: ./cover.png`は画像生成後に追加

## Step 5. カバー画像の生成

```bash
node .workspace/scripts/generate-image.js --preset cover "英語プロンプト（記事テーマに合わせて生成）" "src/content/ja/{category}/{slug}/cover.png"
```

**重要**: パスは**言語ファースト**（`src/content/ja/{category}/{slug}/`）。`{category}/ja/{slug}/`ではない。

プロンプトルールは `bouon-writing` skillの`references/cover-image-fallback.md`を参照。スクリプト失敗時（APIキーなし等）は`image`をfrontmatterから除外し、ユーザーに通知して続行する。

## Step 6. ページバンドルの作成

```
src/content/ja/{category}/{slug}/index.mdx
```

内容は「frontmatter + `<RegionBanner />` + 完成本文」の順。

## Step 7. ドラフトファイルの削除

`_draft/{元ファイル名}` を削除する（Bashの`rm`コマンドを使用）。

## Step 8. 完了レポートの形（呼び出し元コマンドが出力）

```
### 公開済み
- [{title}] → src/content/ja/{category}/{slug}/index.mdx
  - カバー画像: 生成済み / 未生成（理由）

### スキップ
- [{ファイル名}]: 理由

### 次のステップ
- `pnpm build` でビルドエラーがないか確認
```

## 共通の制約事項

- 画像生成はこのパイプライン実行時のみ行う
- ドラフトのslug・URLは変更しない（既存SEO評価を保護）
- `pnpm build` は実行しない（ユーザーが手動で確認）
- `git commit` は実行しない（ユーザーが手動でコミット）
