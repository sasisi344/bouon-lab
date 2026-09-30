---
description: 記事テーマからBouonLabの正しいカテゴリを判定し、ファイルパス・frontmatter・タグを出力する
---

# /category-rule — カテゴリ判定コマンド

**使い方**:
```
/category-rule                          ← 対話形式でテーマを入力
/category-rule 防音室のローンの組み方    ← テーマ直接指定
/category-rule _draft/記事タイトル.md   ← ドラフトファイルから判定
```

判定ロジック・8カテゴリ定義・判定フローチャート・曖昧ケースの基準は `bouon-category` skillを参照する。このコマンドはそれを呼び出し、以下の形式で結果を出力する。

## 出力フォーマット

```
## カテゴリ判定結果

- **カテゴリ**: {category}
- **理由**: {判定根拠を1〜2文で}
- **配置パス**: src/content/ja/{category}/{slug}/index.mdx
- **公開URL**: /ja/{category}/{slug}/
- **推奨タグ**: ["タグ1", "タグ2", ...]

### frontmatter 草案
\`\`\`yaml
---
title: ""
description: ""
slug: "{slug}"
date: "YYYY-MM-DD"
lastmod: "YYYY-MM-DD"
draft: false
lang: "ja"
category: "{category}"
tags: [...]
image: ./cover.png
---
\`\`\`
```
