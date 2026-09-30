# 現在抱えているタスク

作成日：2026-06-10
最終整理：2026-09-30（効果測定・次回データ確認待ちのタスクは`effect-monitoring.md`へ分離。本ファイルは「今すぐ着手できるタスク」のみを保持する）

> **アーカイブ**: 完了タスクは `archive/task-list-index.md` を参照。
> **効果測定・次回データ確認待ちのタスク**は `effect-monitoring.md` を参照（次回GSCエクスポートは10/4予定）。週次の生データスナップショットは `weekly-task.md` を参照。
> 本ファイルには「今すぐ着手できる」タスクのみを記載する。データが揃うのを待つ必要があるタスクはここに置かない。

---

## 最優先：ユーザー対応が必要

### ランキング崩壊調査：GSC UI確認（ユーザー対応待ち）

調査・リダイレクト修正の完了分は `archive/task-list-03.md`。継続判断（10/9まで）の前提となるサイト全体の回復状況を左右するため優先度が高い。

- [ ] `ranking-collapse-root-cause-20260702.md` 記載のGSC UI確認（インデックス登録レポート・サイトマップ・手動対策）をユーザーに依頼する
  - 完了後、QFO拡張施策（`archive/strategies/qfo-20260702.md`）・B群新規記事の効果測定に着手できる（結果は`effect-monitoring.md`へ追記）

### GA4キーイベント登録の実施確認

- [ ] 2026-09-26にGA4計測拡充を実施済み（コミット`c5e95b1`）。当時はGA4集計の反映待ちで`affiliate_click`をキーイベント登録できなかった。本日2026-09-30時点では反映されている可能性が高いため、管理画面（管理 → イベント → 最近のイベントで`affiliate_click`を検索 → 星マークでキーイベント化）で確認し、反映済みならすぐに登録する

---

## 着手可能：コンテンツ・戦略タスク

### Threads初回投稿（2026-09-30、SNS運用方針決定・専用ルール制定済み）

SNS運用はThreads（@bouonlab、Instagramと連携済み）で開始することが決定。運用ルールは`bouon-threads-ops` skill（投稿タイプ①小ネタ型／②クエリ疑問オープナー型）に制定済み。作業フォルダは`.agents/threads-ops/`。記事フッター・Aboutページのフォロー導線もThreads前提に更新済み。詳細は`_draft/brand-awareness-roadmap.md`参照。

- [ ] 初回投稿下書き（`.agents/threads-ops/drafts/query-hook/mansion-instrument-practice-time-rules-query-hook.md`、クエリ疑問オープナー型）をユーザーが実際にThreadsへ投稿する
- [ ] 投稿後、`.agents/threads-ops/postlist.md`に投稿日・投稿URLを追記する
- [ ] 小ネタ型の初回下書きも作成する（既存記事から数値・比較・意外性のある事実を1つ選定）
- [ ] 2本目以降のクエリ疑問オープナー型の候補クエリを選定する（`effect-monitoring.md`・`weekly-task.md`の実データから、架空のクエリは使わない）

---

## 保留（実需データ待ち・優先度低）

### 一戸建て騒音源別記事

- [ ] 一戸建て騒音源別記事（ピアノ／室外機／ペット）、`japan-soundproof-housing` カテゴリの賃貸文化記事は実需データ待ちのため保留
