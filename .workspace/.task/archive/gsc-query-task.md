# GSCデータからクエリ分析、SEOに落とし込む

**ステータス（2026-07-02更新）**: 下記1〜3・参考2項目のうち「リダイレクト修正」まで全て対応完了。「根本原因調査」のみユーザーのGSC UI確認待ちで未着手。詳細は各セクション末尾の✅を参照。実施内容の一覧は`.workspace/.task/task-list.md`の「2026-07-02：`gsc-query-task.md`のA群・B群対応」セクションに集約。

- データ格納: `C:\Users\sasis\344dev\bouon-lab\.workspace\access-data\2026\gsc-query-data-0702-1year`（`zenki`＝2025/10/12-2026/03/05 / `kouki`＝2026/03/06-2026/06/30）
- 分析成果物: `.workspace/.data-set/seo-check/gsc-analysis-20260702/`
  - `summary.md` — 前期/後期比較の全体分析
  - `query-article-match-20260702.md` / `.csv` — 重要クエリ×既存記事の突合せ（**本タスクの主軸**）
  - `lost-queries-20260702.csv` / `lost-pages-20260702.csv` / `striking-distance-kouki-20260702.csv` / `missing-redirects-20260702.csv` — 補助データ

## 目的（確定）

**過去の重要クエリと既存記事を照合し、既存コンテンツを最適化する**（リライト・加筆・新規要否判断）。QFO（クエリファンアウト）はその先の拡張施策として位置づける。リダイレクト修正やランキング崩壊の根本原因調査は本タスクの主目的ではなく、参考情報として扱う。

## わかっていること（分析済み・再調査不要）

- 前期→後期でサイト全体のインプレッションが-74%、インプレッション加重平均掲載順位が21.1→42.8位に悪化。ページの完全消失はほぼ無く（`/en/`の意図的整理2件を除く）、記事は現存するが順位が全面的に崩れている状態（`summary.md`参照）
- `/en/`（旧翻訳記事、約100本）はAstro移行時に意図的に排除・非公開化済み。将来はJapan lens戦略で作り直す方針（対応不要、[[project_en_content_strategy]]参照）
- 旧Hugo `/posts/xxx/` の一部（32件）はリダイレクト未登録で404中。`AUTO_MATCH`15件は`astro.config.mjs`に追記すれば即修正可能だが、優先度は低い（着手は任意、都合の良いタイミングで良い）
- ランキング崩壊の根本原因（GSCインデックス登録レポート・手動対策の有無）は未調査。着手するにはユーザーがGSC UIで確認した情報が必要（このツールからは取得不可）。**現時点では本タスクの前提条件にしない**——記事最適化の判断・準備は根本原因が未解明でも進められる

## 現在のタスク（優先順）

### 1. A群（既存記事あり・リライト優先）の実行 — ✅ 完了（2026-07-02）
`query-article-match-20260702.md` のA・A'群から着手する。

- [x] **最優先**: 「防音室 値段」→`soundproof-room-price-market/`（確認のみ・既に最適化済みと判断）、「防音室 自作」→~~`bass-trap-installation-guide/`~~（★要検証、クローゼットDIY記事の方が適合の可能性あり、`interlink-postlist.md`で再確認してから着手）→ **`closet-diy-soundproof-room/`に訂正・title/description/tags加筆**
- [x] **表記ゆれ統合**: `rental-permission-proposal-template/` に「賃貸 防音室 許可」「防音室 賃貸 許可」「防音室 許可」が集中 → 新規記事化ではなく見出し・description・本文中のキーワード網羅性を見直す → **description・導入文を修正**
- [x] **加筆候補（A'群）**: アビテックス言及+`<CtaBox slug="yamaha-avitex">`検討、vtuber向けセクション追加、ハウスメーカー比較の章追加など。`.cursor/rules/bouon-rewrite-strategy.mdc` の基準に従ってリライトを実施 → **3件とも実施**（`rental-permission-proposal-template`にCtaBox追加、`report-japan-asmr-vtuber-streaming-studio-standard`に個人勢向けセクション新設、`bouon-osusume-hikaku`から既存の専用記事`housing-builder-soundproof-comparison`へ内部リンク追加）。加えて`streamer-noise-complaint-response`に一戸建て向けセクションも新設

### 2. B群（新規記事候補）の骨子作成 — ✅ 完了（2026-07-02）
- [x] **最優先候補**: 「japan building code news」英語クラスター（10クエリ・合計表示回数約2,142・クリック0）。`CLAUDE.md`記載のJapan lens戦略（`japan-noise-and-society`）に合致する新規記事として企画する → **`en/japan-noise-and-society/building-code-reform-2025-noise-insulation/`を新規作成**（ユーザー承認済み。`en`記事は`task-list.md`既存方針の例外対応）
- [x] その他: 「伊丹 空港 騒音 補助金」（地域特化）→ **既存記事`soundproof-subsidy-tokyo-osaka`に「いくら」への回答セクションを追加**、英語版「防音費用」記事（レンタル限定ではなく購入も含む網羅記事）→ **`en/japan-quiet-spaces/cost-to-soundproof-a-room-in-japan/`を新規作成**

### 3. QFO（クエリファンアウト）拡張 — ✅ 完了（2026-07-02）
- [x] 1・2で扱いきれなかったロングテールを対象に、メインKWからサジェスト展開した階層リストを作成する
- [x] 手順は既存の設計を踏襲: メインKW選定 → サジェスト/関連クエリ収集 → 階層リスト化（`.workspace/strategies/qfo-{日付}.md`）→ 優先順位付け → **`.workspace/strategies/qfo-20260702.md`に作成**（Google Suggest等の外部データにはアクセス不可のため、ドメイン知識＋実測GSCシグナルで構成した旨を明記）
- [ ] 施策実行後は4〜8週間後にGSC再エクスポートで効果測定する（未着手・時期待ち、目安2026-07-30〜08-27）

### （参考・優先度低）リダイレクト修正 — ✅ AUTO_MATCH分は完了（2026-07-02）
- [x] `missing-redirects-20260702.csv` の `AUTO_MATCH` 15件を `astro.config.mjs` の `redirects` に追記（リダイレクト先の実在確認・`astro build`での動作確認済み）
- [ ] `NEEDS_MANUAL_REVIEW` 17件は統合先ページの特定が必要（着手は任意・未着手）

### （参考・優先度低）ランキング崩壊の根本原因調査 — ✅ 主因を確定（2026-07-02、ユーザー指摘を受けて再監査）
- [x] 当初`site`ドメイン誤記を主因と推定したが、ユーザーから「URL構造変更＋記事整理による404化が主因」との指摘を受け、zenki全データ（クエリ920件・ページ521件、前回の32件から対象拡大）を再監査。**旧Hugo `/posts/`URL 207件中138件（67%）がリダイレクト未登録で404化**（zenki表示回数の約26%相当）していたことを確定し、全件を`astro.config.mjs`に追記・ビルド確認済み。`site`ドメイン誤記（`bouon-lab.online`、2026-04-13〜04-25実在）は副次要因に位置づけを更新
- [x] 詳細レポート2本: `.workspace/.data-set/seo-check/gsc-analysis-20260702/ranking-collapse-root-cause-20260702.md`（更新済み）・`redirect-gap-full-audit-20260702.md`（新規）
- [ ] GSCで「ページのインデックス登録」レポート・「サイトマップ」レポート・「手動対策」の有無を確認し、上記の仮説を裏付ける（ユーザーがGSC UIで確認した情報が必要なため、このツールからは着手不可。レポート内に確認依頼項目を明記済み）
