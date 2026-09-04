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

- [x] W29・W30データ入手後、`weekly-task.md` のAct該当項目を実行する → 2026-07-21実施、結果は`weekly-task.md`のAct該当項目（ニッチ化6記事・新規creator6記事）に記録済み。ニッチ化6記事中5記事・creator6記事中5記事が正規URLで表示0のまま（約7週連続）。次アクション（統合・noindex・再設計）はユーザー判断待ち

### 東京都補助金クエリ（W29内部リンク施策）の効果測定

詳細は `archive/`（`weekly-PPDCA-task-07W29.md`）参照。「東京 防音 工事 補助金」向けに`soundproof-subsidy-tokyo-osaka`へ関連記事4本から内部リンクを追加済み（2026-07-14）。

- [x] W30以降のGSCエクスポートで`/ja/money/soundproof-subsidy-tokyo-osaka/`の表示回数・掲載順位（施策前42.38位）が改善したか確認 → 2026-07-21確認: W29時点で表示9・順位38、W30（過去3か月集計）で表示18・順位39.33。施策前（42.38位）からわずかに改善したが大きな回復ではない。旧URL（`/en/posts/...`表示80・`/posts/...`表示40）はW30で表示0となりリダイレクトの評価移行は進行中。継続観察が必要

### (direct)流入の実態把握（GA4追加データ待ち）

- [ ] 現行のGA4週次エクスポートはランディングページ×セグメント（全体/オーガニック/モバイル）のみで、参照元/メディアの内訳がない。セッションのソース/メディアレポート（GA4で「セッションのデフォルトチャネルグループ」または「参照元/メディア」ディメンションを追加したエクスポート）を取得し、(direct)流入がSNS・ブックマーク・UTM未計測のどれに由来するか分析する

### サイト強化施策（サジェスト分析 2026-07-15）

詳細・成果物は `.workspace/.task/sitecheck-and-postcheck/suggest-task.md`（KWマッピング・需要ミスマッチ分析・記事施策リスト・作業目標G1〜G4）。リライト案は廃止し新規メイン。

- [x] G1: 旧URLリダイレクト監査 → 2026-07-15実施: W26-28出現の旧URL19件を監査、未設定8件（`/ja/solutions/`4・`/ja/knowledge/`1・`/en/knowledge/`3）を検出し `astro.config.mjs` に308リダイレクト追加（377→385件）。ビルドで転送先生成を確認。効果はW30以降のGSCで観測
- [x] G2: ja新規 高優先3本 → 2026-07-15公開: `used-soundproof-room-buying-guide`（money）・`assembly-type-comparison`（soundproof-room）・`piano-room-guide`（soundproof-room）。カバー画像生成済み・相互リンク設置済み（buyback-guide/bouon-osusume-hikaku/budget-soundproof-booth-comparison/apartment-weight-limit-500kgから3記事へリンク追加）。ビルド検証済み（226ページ）。効果はW32以降のGSCで観測
- [x] G3: en FAQ 1本目 → 2026-07-15公開: `why-noise-complaints-in-japan`（japan-noise-and-society）。FAQ型・文化文脈（欧米厚壁 vs 日本木造の遮音格差）。既存en 2記事と双方向リンク設置。ビルド検証済み（227ページ）。効果はW32以降のGSCで観測
- [x] G4: local 15本の統合設計 → 2026-07-20完了。振り分け表を確定（`sitecheck-and-postcheck/suggest-task.md`参照）: 主要4都市+差別化ありの7都市+首都圏4都市=13本は「残す」、テンプレ型のkanazawa・okayama・kumamoto・niigataの4本は「統合候補（要観察）」。ハブ記事`bouon-rental-market-guide`と、未接続だった12都市ガイドの間に双方向内部リンクを追加（ビルド検証済み、`astro check`エラー0件）。sendaiは別トラックで既にnoindex済み
- [ ] G4後続: kanazawa・okayama・kumamoto・niigataの4本、W32〜W33のGSCエクスポートで表示ゼロが継続するか確認し、継続する場合はnoindex化を検討

### 本音と建前リライト（2026-09-05、Tier1全23記事完了）

詳細・candidate一覧・実施記録は `.workspace/.task/honne-tatemae-rewrite-survey.md`。既存211記事のうち83記事（約39%）が本音への言及ゼロと判明、Tier1〜4に分類。Tier1（高額な個人の意思決定記事）全23記事に本音の織り込み・ROI再構築・スマホ優先の段落分割を実施済み。

- [ ] 次回GSCエクスポートでTier1全23記事の表示・CTR・順位変化を確認する（`construction-types-cost-comparison`はCTR0%からの改善が最も見えやすい）
- [ ] `soundproof-room/budget-soundproof-booth-comparison`のnoindex設定（既存）を維持するか判断する
- [ ] `soundproof-room-size`で発見した見出し数字欠落バグ（過去の手動番号禁止ルール一括適用の副作用の疑い）が他記事にも残っていないか横断チェックするか判断する
- [ ] 改善が確認できたらTier2（30記事）・Tier3（地域ガイド15記事）への展開を判断する

### 一戸建て騒音源別記事（保留・優先度低）

- [ ] 一戸建て騒音源別記事（ピアノ／室外機／ペット）、`japan-soundproof-housing` カテゴリの賃貸文化記事は実需データ待ちのため保留

### ランキング崩壊調査：GSC UI確認・効果測定（ユーザー対応待ち）

調査・リダイレクト修正の完了分は `archieve/task-list-03.md`。

- [ ] `ranking-collapse-root-cause-20260702.md` 記載のGSC UI確認（インデックス登録レポート・サイトマップ・手動対策）をユーザーに依頼
- [ ] QFO拡張施策（`archieve/strategies/qfo-20260702.md`）・B群新規記事の効果測定は、サイト全体の回復確認まで保留
