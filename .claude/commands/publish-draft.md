---
description: _draft/ の下書きを 2000〜7000 字の本番記事に仕上げ、カバー画像を生成してコンテンツコレクションへ投稿する
---

# /publish-draft — ドラフト記事の本番公開ワークフロー

**引数**: ファイル名（省略時は全ドラフトを対象）
例: `/publish-draft 防音賃貸の入居待ち期間にやるべき代替策.md`
例: `/publish-draft` （`_draft/` 内の全ドラフトを処理）

固定ボリューム（2000〜7000字、目安: 骨格の分量に応じてPREP〜QUEST/PASONA相当まで自然に調整）で `bouon-draft-publish-pipeline` skillを実行する。ボリュームを明示的に指定したい場合は `/write-article` を使う。

## 実行内容

1. `bouon-draft-publish-pipeline` skillのStep 0〜7をこの順で実行する
2. Step 1のドラフトスキャンは `$ARGUMENTS` が指定されていればそのファイルのみ、省略時は `_draft/` 内の全対象ファイルを処理する
3. Step 3の本文執筆では、2000〜7000字の範囲で骨格の充実度に応じた自然な分量に仕上げる（`/write-article`のような厳密なボリューム区分・フレームワーク選択は行わない）

## 完了レポート

`bouon-draft-publish-pipeline` skillのStep 8フォーマットに従い、全ファイル処理後にまとめて出力する。

## 重要な制約

- 画像生成は明示的な指示（このコマンドの実行）があるときのみ行う
- ドラフトのslug・URLは変更しない
- `pnpm build` / `git commit` は実行しない（ユーザーが手動で確認・実行する）
