# .workspace/_inbox/ 運用ルール

届いたファイルの**一時置き場**。ここに置いたままにしない。**振り分けたら空にする**（このファイルだけが残っている状態が正常）。ファイル一覧・件数・取り込み履歴は持たない。

改定: 2026-11-14（アウトライン群と KW の CSV が1か月残っていたため、行き先を固定し「空にする」を原則にした）

## 1. 行き先（迷ったらこの表だけ見る）

| 届いたもの | 行き先 | 同時にやること |
|---|---|---|
| 記事ネタのメモ・アウトライン | `.workspace/projects/article-ideas/outlines/` | `article-ideas/README.md` の優先リストに1行（優先1〜3）。アウトラインを作る前に「クエリ設計」（`bouon-writing/references/query-intent-match.md` Step 0）。重複があればリライト（加筆）の行にする |
| すぐ記事にするメモ | `_draft/` | 通常の執筆フロー（`bouon-draft-publish-pipeline`）。本番記事の生成後に元メモを削除 |
| 作業タスクになるもの | `.task-management/task.md`（または気づきなら `inbox.md`） | ルールは `.task-management/CLAUDE.md`。タスクの置き場はここだけ |
| ナレッジとして残すもの | `.workspace/.data-set/` の該当フォルダ | 同じ編集で `.data-set/CLAUDE.md` の索引に追記（`bouon-dataset-lookup`） |
| GSC・GA4 のエクスポート | `.workspace/access-data/_inbox/` | 取り込みは `/monthly-ppdca`（`access-data/CLAUDE.md`） |
| ラッコ・Bing などのサジェスト CSV | `.workspace/projects/daily-post-2026-11/suggest/`（記事化の判定に使う）か `projects/query-check/data/`（分析の生データ。コミットしない） | 判定の手順は `daily-post-2026-11/README.md` |

## 2. ルール

- 振り分けはファイルが届いたその作業のうちに行う。残すなら理由を `.task-management/inbox.md` に1行書く
- 移した先で用途が済んだ（記事になった・見送った）ら、移した先のファイルも消す。経緯は records と git に残る
- ここの内容は未整理の素材で、事実の最終根拠にしない。価格・制度・実在企業名・統計は `bouon-research` の手順で一次情報を確かめる
