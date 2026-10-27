# task-list-11

- **完了日**: 2026-09-16
- **概要**: ギター（アコースティック・エレキ）の新規記事`guitar-apartment-practice-guide`を作成・公開

## 実施内容

- `/category-rule`でカテゴリ判定（`soundproof-rental`、`saxophone-apartment-practice-guide`と同型）
- `_draft/`にメモを作成し`/draft-plan`でブレスト。当初案「生音/アンプ音の切り分け」から、ユーザーフィードバックにより「ヘッドホンアンプ＝無音という誤解と、配慮不足によるトラブル」を軸にした角度へ全面差し替え（PASONA構成）
- `/publish-draft`で本文執筆・frontmatter生成・カバー画像生成（Gemini、電子ギター+ヘッドホンアンプのある部屋）・`_draft/`ファイル削除まで実施
- 本文3,081字（Medium目標2,500〜3,500字の範囲内）
- `knowledge/mansion-instrument-practice-time-rules`のギター節を本記事の内容（ヘッドホンアンプでも生音は消えない）と整合するよう修正し、本記事への内部リンクを追加（従来の記述は本記事の趣旨と矛盾していたため修正）
- `pnpm build`で208ページ・エラー0を確認、`interlink-postlist.md`（196件）・`interlink-tag-clusters.md`を再生成

## 参照

- 経緯: `.workspace/.task/task-list.md`（旧項目）、ブレスト内容は会話ログのみ（`_draft/`ファイルは削除済み）
- 公開先: `src/content/ja/soundproof-rental/guitar-apartment-practice-guide/index.mdx`
