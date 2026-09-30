---
description: 既存記事(src/content/)に「本音と建前」シンキングルールを適用し、検索意図の裏にある読者心理を言語化して記事をパワーアップする。新規記事作成は対象外（/draft-plan・/write-article・/publish-draft を使う）
---

# /power-up-article — 本音と建前分析による既存記事パワーアップ

**引数**: `{slug または記事パス}`

```
/power-up-article bouon-shitsu-chintai-hikaku
/power-up-article src/content/ja/soundproof-room/post-slug/
```

## 既存スキル・ルールとの差分

| 対象 | 目的 | 使うもの |
| --- | --- | --- |
| `_draft/` の下書き | 新規記事の方向性ブレスト | `/draft-plan` |
| `_draft/` の下書き | 新規記事の本番投稿 | `/write-article`、`/publish-draft` |
| 既存記事（構造・データ） | 見出し再設計・データ最新化・内部リンク補強 | `bouon-rewrite-strategy` skill |
| **既存記事（読者心理）** | **表面の検索意図（建前）の裏にある本音を掘り下げ、「わかってくれている」と思わせる改稿案を作る** | **本コマンド + `bouon-persona-thinking` skill** |

構造リライト（見出し再設計・データ更新・内部リンク）は本コマンドの範囲外なので、必要なら `bouon-rewrite-strategy` skillと併用する。

## Step 0. 事前ロード（毎回必ず実行）

1. `bouon-persona-thinking` skill — 本音と建前シンキングルール（本コマンドの核）
2. `.agents/persona/00_Persona-Omega.md` — 執筆後の検閲フィルター
3. `.agents/persona/01_Consumer-Personas.md` — 対象記事の想定ペルソナ確認
4. `bouon-rewrite-strategy` skill — 既存slug不変・内部リンク確認先などの既存リライト制約

## Step 1. 対象記事の特定

`$ARGUMENTS` から対象を判定する。slugのみ指定→`src/content/ja/**/{slug}/index.mdx`をGlobで検索。パス指定→そのまま読み込む。省略時→`.workspace/.data-set/interlink-postlist.md`の一覧を表示し選択を促す。見つからない・複数ヒットの場合はユーザーに確認する。

## Step 2. 現状分析

対象記事を読み込み、frontmatter（`title`/`description`/`tags`/`category`）・見出し構成・本文がカバーしている検索意図（建前）の範囲・本音に触れていそうな記述の有無を抽出する。

## Step 3. 本音・建前分析（`bouon-persona-thinking` skillの手順に従う）

1. メインKW・関連KW・サジェストを洗い出す
2. 「建前」と「本音」を3〜8ペア、表形式で書き出す
3. 特に強い本音1〜2個を選び裏読みする
4. 具体的な解決策・妥協案を洗い出す
5. **価格帯・グレードが複数ある場合、本音は一律にしない**（セクションごとに選び直す）
6. **ROI訴求記事は「悩みの解消」軸にする**（資産価値分析そのものがテーマの記事は例外）
7. **指名検索・個別クエリ該当判定**: 該当する場合、導入部で具体的対象への明示的言及があるかを厳格にチェックする（`bouon-persona-thinking` skill参照）

## Step 4. ギャップ分析

Step 2とStep 3を突き合わせ、本音への言及が薄い箇所・解決策提示が不足している箇所・（指名検索記事の場合）導入の具体的対象言及の有無を特定する。

## Step 5. 改稿案の提示（この時点ではまだ本文を編集しない）

**テンプレ化を避ける**（`bouon-persona-thinking` skillの「テンプレ化を避ける」を参照。挿入位置・言い回し・本音の中身を毎回変える）。

以下の形式でユーザーに提示し、承認を求める。

```
## 本音・建前分析結果
| # | 建前 | 本音 |

## 裏読み（特に強い本音1〜2個）

## ギャップ分析
- 導入 / 中盤 / 後半

## 改稿案
| 該当箇所 | 現状の問題 | 本音を踏まえた改善案 |
```

ユーザーが承認した範囲のみStep 6に進む。

## Step 6. 反映

承認された改稿案のみを本文に反映する。`bouon-writing` skillの記法ルール（`<strong>`・リストラベル・内部リンク`/ja/{category}/{slug}/`形式・段落構成）を厳守し、内部リンクを新規追加する場合は`.workspace/.data-set/interlink-postlist.md`で確認する。既存`slug`は変更しない。frontmatterの`lastmod`を本日の日付に更新する。反映後、`.agents/persona/00_Persona-Omega.md`の4フィルターを通して整合性を確認する。

## Step 7. 完了レポート

```
## /power-up-article 完了レポート
対象記事: {title} (src/content/ja/.../{slug}/)

### 本音・建前分析サマリ
### 反映した改稿（導入/中盤/後半）
### 見送った改稿案（理由）
### 次のステップ
- `pnpm build` でビルドエラーがないか確認（ユーザー手動）
- 変更内容のコミットはユーザー手動
```

## 重要な制約

- Step 5の改稿案提示までは本文を編集しない。ユーザー承認後にのみStep 6で反映する
- 既存slug・URLは変更しない
- 「文字数だけを増やす」加筆はしない
- `pnpm build` / `git commit` は実行しない
