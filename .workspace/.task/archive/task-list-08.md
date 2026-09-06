# task-list-08：本音と建前リライトTier1〜4・構造強化Tier A〜D・見出しバグ横断チェック・AffiliateCard整備（2026-09-06）

## サイト強化施策（サジェスト分析 2026-07-15）G1〜G4

詳細・成果物は `.workspace/.task/sitecheck-and-postcheck/suggest-task.md`。

- [x] G1: 旧URLリダイレクト監査 → 2026-07-15実施: W26-28出現の旧URL19件を監査、未設定8件（`/ja/solutions/`4・`/ja/knowledge/`1・`/en/knowledge/`3）を検出し `astro.config.mjs` に308リダイレクト追加（377→385件）。ビルドで転送先生成を確認
- [x] G2: ja新規 高優先3本 → 2026-07-15公開: `used-soundproof-room-buying-guide`（money）・`assembly-type-comparison`（soundproof-room）・`piano-room-guide`（soundproof-room）。カバー画像生成済み・相互リンク設置済み。ビルド検証済み（226ページ）
- [x] G3: en FAQ 1本目 → 2026-07-15公開: `why-noise-complaints-in-japan`（japan-noise-and-society）。既存en 2記事と双方向リンク設置。ビルド検証済み（227ページ）
- [x] G4: local 15本の統合設計 → 2026-07-20完了。主要4都市+差別化ありの7都市+首都圏4都市=13本は「残す」、テンプレ型のkanazawa・okayama・kumamoto・niigataの4本は「統合候補（要観察）」に振り分け。ハブ記事`bouon-rental-market-guide`と12都市ガイド間に双方向内部リンクを追加

## 本音と建前リライト（2026-09-05〜09-06）

詳細・candidate一覧は `.workspace/.task/honne-tatemae-rewrite-survey.md`。既存211記事のうち83記事（約39%）が本音への言及ゼロと判明、Tier1〜4に分類して対応。

- [x] Tier1（23記事）: リライト・noindex解除・ビルド確認・コミット/push済み（`843c212`）
- [x] Tier2（30記事、creator20・diy10）: リライト・ビルド確認・コミット/push済み（`f2af3dc`）
- [x] Tier3（地域ガイド15記事）: 11記事は本音リライト、`kanazawa`・`okayama`・`kumamoto`・`niigata`の4本は「東京・大阪より安く静かに拠点を構えられる場所」という新ポジショニングで再構築。コミット/push済み（`f2af3dc`）
- [x] Tier4（15記事）: 本音の織り込みは行わず、記事構成とナレッジの正確性をWebSearchで裏取り。8件の事実誤り（D値計算の矛盾、出典不明の統計、実在企業の誤記、市場規模の過小/過大など）を発見・修正
- [x] Tier4修正分の`pnpm build`確認 → コミット → push → `87b1d4f`（Tier4ファクトチェック修正の確定とTier A/C/D構造強化タスクを完了）で完了済みと確認
- [x] `shared-streaming-studio-growth-pricing-utilization`の出典不明統計判断 → 2026-09-06判断: 記事冒頭に既に「当サイト独自の推定」の断り書きがあり、都市別スタジオ数・市場規模の記述もすべて「〜とされる」「〜とみられる」でヘッジ済みのため追加精査不要と判断

未完了分（Tier1〜3の効果測定・Tier B効果測定）は `task-list.md` に継続記載。

## 既存記事の構造強化タスク（2026-09-05〜09-06）

ハブは `.workspace/.task/content-structure-strengthening-survey.md`。内部リンク構造・コンテンツの厚み・情報鮮度の3軸で211記事全体を機械的に調査。

- [x] Tier A（`content-structure-tier-a-internal-links.md`）: 内部リンクが孤立（0本）44記事・希薄（1本のみ）39記事、計83記事への内部リンク追加。`pnpm build`検証済み（223ページ、エラー0件）
- [x] Tier B判定（`archive/content-structure-tier-b-thin-content.md`）: 3,000字未満84記事をGSC需要データと突き合わせて選別。拡充候補34・統合検討36・現状維持6・未判断8に分類
- [x] Tier B拡充候補34記事の本文拡充（`archive/content-structure-tier-b-action-plan.md`）: GSC優先度順に全34記事へ加筆・データ追加・タイトル改善。コミット`2b24ed9`
- [x] Tier B統合検討36記事の扱い判断（`archive/content-structure-tier-b-action-plan.md`）: うち5件は内容を移植のうえ統合記事へリダイレクト、方向性メモと食い違う複数件はユーザー確認の上「維持」で確定。ビルド検証済み（215ページ、エラー0件）、コミット`2b24ed9`
- [x] Tier C（`content-structure-tier-c-stale-content.md`）: `lastmod`が2026-05以前の29記事の情報鮮度確認。9記事で事実誤り・陳腐化を修正
- [x] Tier D（`content-structure-tier-d-dedup-check.md`）: 既存タスクとのカニバリ重複なしを確認
- [x] 壊れた画像記法（`![alt](url)`ではなく`!alt`のみになっているMarkdown）の一括修正 → `src/content/ja`全体をGrepで横断調査し11記事16箇所を検出・復元。`pnpm build`検証済み（215ページ、エラー0件）
- [x] `asmr-vtuber-booth-guide`の手動番号見出し修正 → `### 1-1. 購入`/`### 1-2. レンタル・サブスク`を`### 1. 購入`/`### 2. レンタル・サブスク`に変更（H3の連番はフラット`1.``2.`のみ許容、階層的な`1-1.`形式は不可というユーザー判断）

未完了分（Tier B効果測定・8記事の再判定）は `weekly-task.md` に登録済み。

## 見出し数字欠落バグの横断チェック（2026-09-05発見・09-06完了）

`soundproof-room-size`のリライト中に、H3見出しで小数点前の整数が欠落するバグを発見・修正（例: `### 8畳〜1.0畳` → 正しくは `### 0.8畳〜1.0畳`）。

- [x] 横断チェック → `src/content/ja`全体（474件のH2/H3見出しに数字を含む行）をGrepで洗い出し、畳・万円・kg・cm・m・dB等すべての単位を目視確認。**結論: 他の該当記事なし**（`soundproof-room-size`の4箇所のみで、既に`843c212`で修正済み）
- [x] 原因調査 → `soundproof-room-size`のgit履歴を追跡した結果、**初回コミット（01c0444）の時点で既にバグが存在**しており、「手動番号禁止」一括置換コミットが原因という仮説は誤りと判明。記事執筆・生成時点の個別バグであり、他記事への横展開はなし

## AffiliateCardのslug表記チェック（2026-09-05発見・09-06完了）

- [x] `src/data/affiliates.ts`の全slug洗い出し → 19件中18件は英語kebab-case、`防振-mat-piano`のみ外れ値と確認
- [x] `防振-mat-piano`のリネーム → `piano-vibration-mat`に変更し、`affiliates.ts`のキー・`slug`フィールドと参照している本文5記事（`singer-instrumentalist-stream-soundproof`・`owner-renovation-musician-24h-practice-strategy`・`bouon-dchiseinou-meyasu`・`night-practice-soundproof-guide`・`sound-reduction-simulation`）の`<AffiliateCard slug="...">`を同時更新。`pnpm build`検証済み（215ページ、エラー0件）
- [x] `acoustic-panel-felmenon`の実在確認 → WebSearchでASIN B07XG5CX8X（フェルメノン FMS-8060C-WH）が実在の日本製防音フェルトボード製品と確認、slugは適正
