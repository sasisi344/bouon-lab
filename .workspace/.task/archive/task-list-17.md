# 完了済みサブタスクの整理（2026-10-06）

`task-list.md` のT-07・T-08のうち、チェック済みの項目を移した。T-07・T-08自体は未完了項目が残るため本文は`task-list.md`に残している。あわせて、役目を終えた派生ファイル2本を`archive/`へ移動した（本文は変更なし）。

## T-07 Threads初回投稿より（完了）

- [x] 初回の週間ポスト`w42-threads-post.md`を`.workspace/_sns-post/`に作成する（週2ポスト×約3スレッド。1本目は既存下書き`.agents/threads-ops/drafts/query-hook/mansion-instrument-practice-time-rules-query-hook.md`を3スレッドに再編、2本目は小ネタ型を既存記事から選定）

## T-08 運営方針確定より（完了）

- [x] `/upload/`配下を410にする1行を`public/.htaccess`末尾に追加（2026-10-06）
- [x] 追加分をビルド→デプロイし、`curl -I https://bouon-lab.com/upload/5833372137.m3u8`が410を返すことを確認（2026-10-06、コミット`c1fed76`、Actions run `37409320448`成功。既存の410・301も正常）

## 移動した派生ファイル

- `consolidation-candidates-20260916.md`: 統合候補の分析。統合は2026-09-16に実施済み（`task-list-09.md`・`task-list-10.md`）。効果確認はW-07・W-08
- `honne-tatemae-rewrite-survey.md`: 本音と建前リライトの調査。リライトは2026-09-05に実施済み（`task-list-08.md`）。効果確認はW-09
- 参照パスは`archive/content-structure-strengthening-survey.md`・`archive/task-list-08.md`・`archive/task-list-09.md`と、メモリ`project_honne_tatemae_pilot.md`で更新済み
