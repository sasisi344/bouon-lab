---
name: bouon-task-ops
description: .workspace/.task/ 配下（task-list.md・effect-monitoring.md・weekly-task.md）の参照・更新・アーカイブが必要なとき、または週次PDCA解析の前後に必ず使う。3ファイルの役割分担とarchive/への完了タスク移動手順を定義する。
---

# BouonLab タスク運用

`.workspace/.task/` は防音Labの作業タスクを格納するフォルダ。作業の起点は常にここを確認する。

## マスターファイル（3ファイル体制、削除厳禁）

| ファイル | 役割 |
|---|---|
| `task-list.md` | **今すぐ着手できるタスクのみ**。データ待ちのタスクは置かない |
| `effect-monitoring.md` | 効果測定・次回GSC/GA4データで確認するタスク（「次回エクスポートで確認する」系はすべてここ） |
| `weekly-task.md` | 週次の生データスナップショットのみ（フォローアップ項目は`effect-monitoring.md`へ委譲） |

**3ファイルとも、ファイル自体の削除は厳禁。** 中身の更新と、完了済み項目の削除（アーカイブへの移動）は可。

## archive/ フォルダ

- パス: `.workspace/.task/archive/`（**archieve ではなく archive**、綴りに注意）
- 完了済みタスク・完了済みセクション・用途終了した派生タスクファイルを格納する
- 新規タスクを追加する前に `archive/` を確認し、同一・類似タスクとの重複や競合がないか差分チェックする
- アーカイブ済み内容の再着手が必要な場合は、理由を明記したうえで該当マスターファイルに戻す

### task-list 完了アーカイブ（`task-list-NN.md`）

`task-list.md` から完了タスクを削除するときは、必ず以下の手順で `archive/` に残す。`task-list.md` 内に「完了タスク」セクションを新規追記しない。

1. `archive/task-list-index.md` を開き、次の番号（`task-list-01` から連番）を確認する
2. `archive/task-list-NN.md` を新規作成する（NN は2桁ゼロ埋め）
3. `archive/task-list-index.md` に1行追記し、「次の番号」を更新する
4. `task-list.md` から該当ブロックを削除する

1回のアーカイブ操作 = 1ファイル。複数セクションを同時に片付ける場合は1ファイルにまとめてよい。書き方のテンプレートは `references/task-archive-procedure.md` を参照。

## 補助ファイル

- 個別タスクの詳細は派生ファイル（`qfo-recheck-task-*.md` 等）に分離してよい
- 派生ファイルは完了後 `archive/` へ移動する（安易な削除は避ける）
- `creator-topic-clusters.md` 等の参照・調査用ファイルはマスターではないが、削除前に `task-list.md` からの参照有無を確認する

## 運用フロー

1. 作業開始前に `task-list.md`（今すぐやること）と `effect-monitoring.md`（データ待ちの棚卸し）を読む
2. 新規タスク追加時は `archive/` を検索し、過去の完了内容と競合しないか確認する
3. **`task-list.md` のタスク完了時**: 上記「task-list 完了アーカイブ」手順に従う
4. **次回GSC/GA4データが揃ったら**: `effect-monitoring.md` の該当項目を確認し、結果を追記。着手可能なフォローアップが生まれたら `task-list.md` へ移す
5. **`weekly-task.md` の週次更新**: 生データのみ追記し、フォローアップ項目は `effect-monitoring.md` へ書く（`weekly-task.md` に長期タスクを溜めない）
6. 3ファイルの役割分担を維持する（同一チェックリストの重複記載を避け、詳細は一方に集約して他方からリンクする）
