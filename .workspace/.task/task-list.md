# 現在抱えているタスク

作成日：2026-06-10
最終整理：2026-07-10（完了分を `archieve/task-list-01〜06.md` へ移行、未完了のみ残存）

> **アーカイブ**: 完了タスクは `archieve/task-list-index.md` を参照。本ファイルには未完了のみ記載する。

---

## 未完了タスク

### QFO再調査（2026-07-09）の効果測定

実装完了分は `archieve/task-list-05.md`。以下はGSCでの答え合わせ待ち。

- [ ] 2026-08-06以降のGSCエクスポートで、A-1〜A-8の核クエリ（`ワンタッチ防音壁 効果`・`アース ノイズ 対策`・`ピアノ 住宅ローン`等）に表示・クリックが付いたか確認（A-1・A-2は公開4週間で観測可能）
- [ ] B-1（`nitori-soundproof-acoustic-guide`）・B-2（`housing-builder-soundproof-comparison`）のtitle/description改善後のCTR変化を確認

### ニッチ化リライト6記事・新規creator6記事の効果測定

リライト・新規公開・W27/W28試行結果は `archieve/task-list-02.md`・`task-list-06.md`。W29・W30が両方出揃ってから実行（2026-07-08方針）。

- [ ] W29・W30データ入手後、`weekly-task.md` のAct該当項目を実行する

### 東京都補助金クエリ（W29内部リンク施策）の効果測定

詳細は `archive/`（`weekly-PPDCA-task-07W29.md`）参照。「東京 防音 工事 補助金」向けに`soundproof-subsidy-tokyo-osaka`へ関連記事4本から内部リンクを追加済み（2026-07-14）。

- [ ] W30以降のGSCエクスポートで`/ja/money/soundproof-subsidy-tokyo-osaka/`の表示回数・掲載順位（施策前42.38位）が改善したか確認

### (direct)流入の実態把握（GA4追加データ待ち）

- [ ] 現行のGA4週次エクスポートはランディングページ×セグメント（全体/オーガニック/モバイル）のみで、参照元/メディアの内訳がない。セッションのソース/メディアレポート（GA4で「セッションのデフォルトチャネルグループ」または「参照元/メディア」ディメンションを追加したエクスポート）を取得し、(direct)流入がSNS・ブックマーク・UTM未計測のどれに由来するか分析する

### サイト強化施策（サジェスト分析 2026-07-15）

詳細・成果物は `.workspace/.task/sitecheck-and-postcheck/suggest-task.md`（KWマッピング・需要ミスマッチ分析・記事施策リスト・作業目標G1〜G4）。リライト案は廃止し新規メイン。

- [x] G1: 旧URLリダイレクト監査 → 2026-07-15実施: W26-28出現の旧URL19件を監査、未設定8件（`/ja/solutions/`4・`/ja/knowledge/`1・`/en/knowledge/`3）を検出し `astro.config.mjs` に308リダイレクト追加（377→385件）。ビルドで転送先生成を確認。効果はW30以降のGSCで観測
- [x] G2: ja新規 高優先3本 → 2026-07-15公開: `used-soundproof-room-buying-guide`（money）・`assembly-type-comparison`（soundproof-room）・`piano-room-guide`（soundproof-room）。カバー画像生成済み・相互リンク設置済み（buyback-guide/bouon-osusume-hikaku/budget-soundproof-booth-comparison/apartment-weight-limit-500kgから3記事へリンク追加）。ビルド検証済み（226ページ）。効果はW32以降のGSCで観測
- [x] G3: en FAQ 1本目 → 2026-07-15公開: `why-noise-complaints-in-japan`（japan-noise-and-society）。FAQ型・文化文脈（欧米厚壁 vs 日本木造の遮音格差）。既存en 2記事と双方向リンク設置。ビルド検証済み（227ページ）。効果はW32以降のGSCで観測
- [ ] G4: local 15本の統合設計（<strong>2026-07-20実行予定</strong>。W30データ入手後、既存PDCAの6週判定と同期）

### 一戸建て騒音源別記事（保留・優先度低）

- [ ] 一戸建て騒音源別記事（ピアノ／室外機／ペット）、`japan-soundproof-housing` カテゴリの賃貸文化記事は実需データ待ちのため保留

### ランキング崩壊調査：GSC UI確認・効果測定（ユーザー対応待ち）

調査・リダイレクト修正の完了分は `archieve/task-list-03.md`。

- [ ] `ranking-collapse-root-cause-20260702.md` 記載のGSC UI確認（インデックス登録レポート・サイトマップ・手動対策）をユーザーに依頼
- [ ] QFO拡張施策（`archieve/strategies/qfo-20260702.md`）・B群新規記事の効果測定は、サイト全体の回復確認まで保留
