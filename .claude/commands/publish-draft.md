---
description: _draft/ の下書きを 2000〜7000 字の本番記事に仕上げ、カバー画像を生成してコンテンツコレクションへ投稿する
---

# /publish-draft — ドラフト記事の本番公開ワークフロー

**引数**: ファイル名（省略時は全ドラフトを対象）  
例: `/publish-draft 防音賃貸の入居待ち期間にやるべき代替策.md`  
例: `/publish-draft` （`_draft/` 内の全ドラフトを処理）

---

## Step 0. 事前確認

まず以下を必ず読む。

1. `CLAUDE.md` のライティング必須ルール（`**` 禁止・`<strong>`・敬体・末尾スラッシュ等）
2. `.agents/bouon-writer.md`（ライティング統括ルール）
3. `.agents/persona/01_Consumer-Personas.md`（ターゲットペルソナ確認）

---

## Step 1. ドラフトスキャン

`_draft/` ディレクトリをスキャンし、処理対象を判定する。

**処理対象とする条件（すべてを満たすもの）**:

- Markdownファイル（`.md`）であること
- `title:` または記事タイトルが読み取れること
- 本文の骨格（見出し・箇条書き・段落のいずれか）が存在すること
- `$ARGUMENTS` が指定されている場合はそのファイルのみ処理する

**スキップするもの**:

- `.py`、`.txt` など非Markdownファイル
- 戦略・企画ドキュメント（`strategy-`、`cluster-ideas`、`owner-renovation-cluster`で始まるもの）
- 単なるメモ・アイデアのみ（本文が箇条書きの構想のみで記事本文がないもの）
- すでに `src/content/` に同一 slug が存在するもの（重複チェック: Globで確認）

処理対象ファイルをリストアップしてユーザーに提示し、続行を確認する。

---

## Step 2. 各ドラフトの処理（以下を1ファイルずつ実行）

### 2-A. ドラフト読み込みとメタ情報抽出

ドラフトを読み込み、**本文に `> [!forAI]` で始まるブロックがある場合は、他のメモより先に全文を読み、清書の最優先指示として扱う**。そこに書かれたカテゴリ・読者像・主張・構成・マーケ方針を、**frontmatter・H2/H3・本文の論旨に必ず反映**する。`> [!forAI]` ブロックは本番MDXには**出力しない**（削除する）。

以下を判断する。

| 判断項目     | 確認方法                                                                                                                |
| ------------ | ----------------------------------------------------------------------------------------------------------------------- |
| **category** | frontmatter の `category` フィールド。なければ `/category-rule` の判定フローで推定（soundproof-room / soundproof-rental / diy / money / creator / knowledge / local / business） |
| **slug**     | frontmatter の `slug`。なければファイル名からローマ字変換して生成（日本語はローマ字化）                                 |
| **lang**     | frontmatter の `lang`。なければ `ja`                                                                                    |
| **tags**     | frontmatter の `tags`。なければ本文から最大5個抽出                                                                      |
| **volume**   | ドラフトの分量から判断（Small/Medium/Large）                                                                            |

### 2-B. 重複チェック

```
src/content/{category}/{lang}/{slug}/
```

上記パスをGlobで確認。存在する場合はスキップしてユーザーに通知。

### 2-C. 本文の完成

以下のルールで 2000〜7000 字の本番記事に仕上げる。

**執筆方針**:

- **`> [!forAI]` がある場合**: 2-A の優先指示どおり、構成・主張・カテゴリをそこから最優先で落とし込む（ブロック自体は本番に出力しない）
- ドラフトの見出し構成・主張・内部リンク候補を**そのまま活かす**（[!forAI] と矛盾する場合は [!forAI] を優先）
- ドラフトで「骨子」「メモ」「TODO」と書かれているセクションを肉付けする
- 執筆用注記（「執筆時の注意」「本番公開前に〜」等）は**削除**する
- 文体は**敬体（です・ます調）**、1文60文字以内
- 強調は `<strong>text</strong>` のみ。`**text**` は絶対禁止
- リストラベル形式: `- <strong>ラベル</strong> : 説明文`（コロン前後スペース）
- H2/H3 に番号付け禁止（「1.」「2.」等）
- 内部リンクは末尾スラッシュ必須: `[テキスト](/ja/collection/slug/)`
- MDXコンポーネント（`<RegionBanner />`等）はimport文なしで使える
- 記事冒頭（frontmatterの直後）に必ず `<RegionBanner />` を置く

**ボリューム別の目安**:

- Small（〜1,200字）: 1〜2 H2、簡潔なPREP構成
- Medium（1,500〜2,500字）: 3〜4 H2+H3、比較表1つ
- Large（3,000〜5,000字+）: 深掘り、QUEST/PASONAロジック、FAQ

**テーブルの書き方**:

- ヘッダー行のセルには `<strong>` を使わず、本文セルに使う
- `**bold**` は禁止

**数値・スペック**:

- 具体的な数値はドラフトに記載があれば使用する
- 推定値が必要な場合は「目安」「概算」と明記する
- 税務・法務・医療に関わる内容は「税理士・専門家に確認を」の免責を必ず入れる

### 2-D. frontmatter 生成

以下のテンプレートで frontmatter を生成する（余分なフィールドは含めない）。

```yaml
---
title: "主要KWを左側に | 35-42文字"
description: "SEO用サマリー | 80-120文字"
slug: "unique-slug"
date: "YYYY-MM-DD"
lastmod: "YYYY-MM-DD"
draft: false
lang: "ja"
category: "{collection名と一致}"
tags: ["タグ1", "タグ2"]
image: ./cover.png
---
```

- `date` はドラフトの `publishDate` または `date` を使用。なければ本日の日付
- `lastmod` は本日の日付
- `draft: false`（本番公開）
- `volume`・`voice`・`subcategory` 等の非標準フィールドは**含めない**
- `image: ./cover.png` は画像生成後に追加（Step 2-E 後）

### 2-E. カバー画像の生成

画像生成スクリプトを使って cover.png を生成する。

```bash
node .workspace/scripts/generate-image.js --preset cover "英語プロンプト（記事テーマに合わせて生成）" "/path/to/dest/cover.png"
```

**プロンプト生成ルール**:

- 必ず**英語**で書く（生成精度向上のため）
- 記事のメインテーマを具体的に描写する
- 人物の顔・テキストオーバーレイ・著作権物は避ける
- 例: `"Soundproof booth setup in a modern home studio, acoustic panels on walls, soft lighting, no people"`

出力先: `src/content/{category}/{lang}/{slug}/cover.png`

スクリプトが失敗した場合（API キーなし等）: `image: ./cover.png` を frontmatter から除外し、ユーザーに通知して続行する。

### 2-F. ページバンドルの作成と書き込み

```
src/content/{category}/{lang}/{slug}/index.mdx
```

上記パスにファイルを作成する。  
内容は「frontmatter + `<RegionBanner />` + 完成本文」の順。

### 2-G. ドラフトファイルの削除

`_draft/{元ファイル名}` を削除する（Bash の `rm` コマンドを使用）。

---

## Step 3. 完了レポート

全ファイルの処理が終わったら以下を出力する。

```
## /publish-draft 完了レポート

### 公開済み
- [タイトル] → src/content/{category}/ja/{slug}/index.mdx
  - カバー画像: 生成済み / 未生成（理由）

### スキップ
- [ファイル名]: 理由

### 次のステップ
- `pnpm build` でビルドエラーがないか確認
- カバー画像が未生成の場合は手動で生成: `node .workspace/scripts/generate-image.js --preset cover "..." "./src/content/.../cover.png"`
```

---

## 補足：カテゴリの判定基準

カテゴリ判定は `/category-rule` スキルを参照する。

| category | 記事の中心 | 優先度 |
|----------|-----------|--------|
| `soundproof-room` | 防音室製品・設置・性能・選び方 | ★★★ |
| `soundproof-rental` | 賃貸物件・契約・管理会社・大家 | ★★★ |
| `diy` | 自作・素材・DIY手順 | ★★ |
| `money` | 費用・ローン・補助金・節税・ROI | ★★ |
| `creator` | 配信者・VTuber・宅録の活動環境 | ★★ |
| `knowledge` | 仕組み・法令・科学的解説 | ★ |
| `local` | 特定都市・地域の防音事情 | ★ |
| `business` | 企業・法人・オフィス・市場分析 | ☆ |

> `subcategory` フィールドは新規記事では**不要**。旧構造（diy/knowledge/solution/others）は廃止済み。

---

## 重要な制約

- 画像生成は**明示的な指示（このコマンドの実行）があるとき**のみ行う
- ドラフトの slug・URLは変更しない（既存SEO評価保護）
- `pnpm build` は実行しない（ユーザーが手動で確認）
- `git commit` は実行しない（ユーザーが手動でコミット）
