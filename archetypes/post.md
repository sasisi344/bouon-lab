+++
title = "{{ replace .Name "-" " " | title }}"
date = {{ .Date }}
draft = false
description = "記事の説明文をここに記述してください（SEO対策として重要です）"
categories = ["カテゴリー名"]
tags = ["タグ1", "タグ2", "タグ3"]
author = "著者名"
image = "images/記事画像.jpg"

# オプション設定
toc = true
toc_float = true
reading_time = true
share = true
comments = false

# SEO設定
keywords = ["キーワード1", "キーワード2", "キーワード3"]
+++

## はじめに

記事の導入部分をここに記述してください。

## メインコンテンツ

### 見出し1

内容をここに記述してください。

### 見出し2

内容をここに記述してください。

## まとめ

記事のまとめをここに記述してください。

---

**関連記事：**
- [関連記事1のタイトル](/posts/関連記事1/)
- [関連記事2のタイトル](/posts/関連記事2/)

**タグ：** {{ range .Params.tags }}[{{ . }}](/tags/{{ . }}/) {{ end }}
**カテゴリー：** {{ range .Params.categories }}[{{ . }}](/categories/{{ . }}/) {{ end }}
