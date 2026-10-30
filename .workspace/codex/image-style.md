# 防音Lab — 画像のトーンとキャラクター性

作成: 2026-10-30（CC。既存のスキルの方針をまとめた案。ユーザー確認待ちの項目は §6）。画像の流れは `C:\Users\sasis\344dev\hq\org\README.md` §4。

## 1. 絵の人格（キャラクター性）

**静かな空間を求めて調べ尽くした人が、整理して手渡すメモ。**

- 落ち着き・静けさ・整理。誇張や煽り（「騒音地獄」のような不安の演出）をしない
- 専門家・施工業者のふりをしない（筆者に資格・施工経験はない）。施工現場の職人風の絵にしない
- 装飾より「理解を短縮する図」を優先する（`bouon-growth-ops` のビジュアル設計）

## 2. トーン

| 項目 | 指定 |
|---|---|
| スタイル | Modern, Calm, Professional。防音・静寂・スタジオ系の空間。人物の顔なし |
| 色 | サイトのダーク配色に合わせる。背景 `#17120e`、カード `#241c15`、アクセントはゴールド（正本は `.claude/skills/bouon-memo-image/templates/memo-common.css` の `:root`） |
| 避ける | 高彩度・ネオン、人物の顔、著作権物、文字のオーバーレイ（カバー） |

## 3. 種類ごとの仕様

| 種類 | 仕様の正本 | 要点 |
|---|---|---|
| サムネイル（cover） | `.claude/skills/bouon-writing/references/cover-image-fallback.md` | `--preset cover`（6:4）、`cover.png`。省略時はカテゴリ共通カバーが使われる |
| メモ画像（比較・判断フロー・チェックリスト） | `.claude/skills/bouon-memo-image/SKILL.md` | HTML テンプレートから描画（AI 生成ではない）。幅1080px、1記事1〜2枚、本文の確認済みの事実だけ |
| そのほかの説明画像（断面図・仕組み） | このファイル | `--preset content`（16:9）。メモ画像と合わせて1記事3枚まで |

## 4. プロンプトの型（英語）

- サムネイル: `<記事の主題を具体的に>, modern quiet interior, acoustic treatment, soft warm lighting, calm and professional mood, dark warm tones with subtle gold accents, no people, no text`
- 説明画像: `Clear explanatory diagram: <何を>. Calm, modern, professional style on a dark warm background (#17120e) with gold accents. Labels in Japanese only where listed: <文言>. No faces, no clutter.`
- メモ画像はプロンプトではなく、マーカーに「型（compare/flow/checklist/fill-in/lookup）と載せる項目」を書く

## 5. 生成（サムネイルの段階だけ）

`node .workspace/scripts/generate-image.js --preset <cover|content> "<prompt>" "<保存先>"`。メモ画像は `bouon-memo-image` の手順。

## 6. 未決（ユーザー確認）

- マスコット・案内役のキャラクターを置くか（現在なし）
