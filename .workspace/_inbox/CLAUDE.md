# .workspace/_inbox/ 運用ルール

「これから作業するファイル」「記事にする予定のメモ」の受け皿。ここに何があるかは記録しない（ファイル一覧・件数・取り込み履歴は持たない）。**ここから先の分岐作業（どこへ渡すか）だけ**を定める。

## 1. 置くもの

- `.md` — メモ・記事のアウトライン
- `.csv` — `.data-set/` との連携や、週報（サイト分析）に使うデータ

## 2. 分岐作業

### mdファイル（メモ・アウトライン）

1. 記事にする → `_draft/` へ移動して通常の執筆フローへ（`bouon-draft-publish-pipeline` skill）。本番記事の生成後は元メモを削除する
   - **アウトラインを作る・移す前に「クエリ設計」を書く。** メインKWを1つに絞り、タイトル（確定案）とH2（対応KW付き）まで決める。手順と書式は `.claude/skills/bouon-writing/references/query-intent-match.md` Step 0
   - サジェストの語を並べただけの「狙うクエリ」の一覧は、クエリ設計の代わりにならない
2. ナレッジとして残す → `.data-set/` の該当フォルダへ移し、同じ編集で `.data-set/CLAUDE.md` の索引に追記する（`bouon-dataset-lookup` skill）
3. 作業タスクになる → `.task/task-list.md` の `T-NN` に登録する（`bouon-task-ops` skill）

### csvファイル（データ）

1. サイト分析（週報） → GSC/GA4のエクスポートは `access-data/` へ。取り込みと取得期間の記録は `access-data/CLAUDE.md` のルールに従う（`weekly-ppdca` skill）
2. キーワード分析 → 分析結果は `.task/query-check/`、知見として残すものは `.data-set/` へ
3. ナレッジ化 → `.data-set/` へ移し、索引に追記する

## 3. ルール

- 行き先に渡したら、`_inbox/` からは移動または削除する。ファイル削除は移動先または用途の完了を確認してから行う
- CSVの生データは `.gitignore` の方針に従いコミットしない（`access-data/`・`.task/query-check/data/` 配下）
- ここの内容は未整理の素材であり、事実の最終根拠にしない。価格・制度・実在企業名・統計は `bouon-research` skill の手順で一次情報を確認する
