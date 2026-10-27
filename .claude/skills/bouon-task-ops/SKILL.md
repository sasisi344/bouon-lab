---
name: bouon-task-ops
description: /monthly-ppdca（月次解析）の結果を .task-management/ の task.md・records/ に反映するとき、月次解析の手順ファイル（.workspace/projects/monthly-analysis/）に効果測定の節を足すときに使う。タスク運用のルール本体は .task-management/CLAUDE.md（全サイト共通）で、本skillは防音Lab固有の月次解析との連携だけを定義する。
---

# BouonLab 月次解析とタスクの連携

**運用ルールの正本は `.task-management/CLAUDE.md`**（共通部分は344devのhqが配布。防音Lab固有の部分は末尾の「サイト固有」節）。本skillは、月次解析（`/monthly-ppdca`）とタスクのつなぎ方だけを書く。2026-10-27に `.workspace/.task/` から移行した。

## 置き場

| もの | 置き場 |
|---|---|
| 月次解析の行・効果測定の行 | `.task-management/task.md`（状態 `データ待ち`、予定日は翌月2日。個別の効果測定は「MM/DD（T-NN内）」） |
| 月次解析の手順・確認項目 | `.workspace/projects/monthly-analysis/YYYY-MM-02-m{MM}-monthly-analysis.md` |
| 個別の効果測定の手順（長いもの） | `.workspace/projects/monthly-analysis/YYYY-MM-DD-<slug>.md` |
| 観測した数値 | `.workspace/access-data/2026/m{MM}/README.md`（タスクには写さない） |
| 判定済みの効果測定 | `.task-management/records/` ＋ `records/index.md` に1行 |

## 施策を実施したとき

1. 次の月次解析の手順ファイルに節を足す（`### 対象（実施日）`。実施日・対象URLまたはクエリ・基準値・見る指標・判定基準）
2. 手順が長い・単独で判定したいものは `task.md` にデータ待ちの行を足し、本文から手順ファイルの節にリンクする。短いものは手順ファイルの節だけでよい（「m{MM}の月次解析」の行がまとめて拾う）
3. 月の後半に入ってからの施策は、その月は途中経過、判定は翌月

## 月次解析の日（`/monthly-ppdca`）

1. 手順ファイルの各節に「結果」を書く
2. 判定まで済んだ節・行は `records/` に1ファイル＋`records/index.md` に1行（種別 `効果測定`）。`task.md` の行を消す
3. 続ける節は翌月の手順ファイルへ送り、`task.md` に翌月の「m{MM}の月次解析」の行を起票する
4. 着手できる施策は `task.md` に着手可で起票する。起票前に `records/index.md` をテーマ・slugで Grep する

## 旧IDの読み替え

手順ファイルの本文は旧ID（S-NN・W-NN）のまま残っている。対応表は `.task-management/CLAUDE.md` のサイト固有節。新しい効果測定に S-NN・W-NN は振らない。
