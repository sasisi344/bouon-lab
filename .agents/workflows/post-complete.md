---
description: 執筆したドラフトを本番用コンテンツに変換・移動するワークフロー。bold記法の変換やメタデータの更新を行います。
---

# 執筆完了ワークフロー (Draft to Production) - 防音Lab版

## 概要
このワークフローは、`.workspace/draft/` にあるドラフト記事を、SEO最適化（strongタグ変換）を施した上で本番ディレクトリ `src/content/` へ移動させます。

## 手順

1.  **対象の特定**
    - 変換・移動したいドラフトファイル（例: `knowledge-material-science.md`）の絶対パスを確認する。

// turbo
2.  **内容の変換処理**
    - **強調表記**: すべての `**強調内容**` 記法を `<strong>強調内容</strong>` に全置換する。本番公開用には Markdown の bold は使用禁止。
    - **画像パスの正規化**: フロントマターの `image` パスを `./cover.png` もしくは `./cover.jpg` の形式に正規化する（Astroの相対パス解決用）。
    - フロントマターの `draft` を `false` に設定する。
    - `lastmod` に今日の日付（YYYY-MM-DD）をセットする。

// turbo
3.  **本番配置**
    - フロントマターの `category` とファイル名から `slug` を取得する。
    - 移動先 `src/content/{category}/{slug}/index.md` (または `.mdx`) を作成。
    - 元のドラフトを削除し、本番環境へ配置を完了する。

4.  **タスク管理の更新**
    - プロジェクト内のタスク管理ファイルの該当項目を[x]済みにする。
