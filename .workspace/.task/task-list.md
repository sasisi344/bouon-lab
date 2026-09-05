# 現在抱えているタスク

作成日：2026-06-10
最終整理：2026-07-10（完了分を `archieve/task-list-01〜06.md` へ移行、未完了のみ残存）

> **アーカイブ**: 完了タスクは `archieve/task-list-index.md` を参照。本ファイルには未完了のみ記載する。

---

## 未完了タスク

### (direct)流入の実態把握（GA4追加データ待ち）

- [ ] 現行のGA4週次エクスポートはランディングページ×セグメント（全体/オーガニック/モバイル）のみで、参照元/メディアの内訳がない。セッションのソース/メディアレポート（GA4で「セッションのデフォルトチャネルグループ」または「参照元/メディア」ディメンションを追加したエクスポート）を取得し、(direct)流入がSNS・ブックマーク・UTM未計測のどれに由来するか分析する

> これに関して「SNS流入の有無」は、防音LabのSNS運用はほぼしていないので、SNS共有されている記事があるかどうかが鍵になる。なければ現状の記事にそこまでの魅力とおすすめしたい熱量がないわけで、新しい改善をするべき段階を見極めることができる。

### サイト強化施策（サジェスト分析 2026-07-15）

詳細・成果物は `.workspace/.task/sitecheck-and-postcheck/suggest-task.md`（KWマッピング・需要ミスマッチ分析・記事施策リスト・作業目標G1〜G4）。リライト案は廃止し新規メイン。

- [x] G1: 旧URLリダイレクト監査 → 2026-07-15実施: W26-28出現の旧URL19件を監査、未設定8件（`/ja/solutions/`4・`/ja/knowledge/`1・`/en/knowledge/`3）を検出し `astro.config.mjs` に308リダイレクト追加（377→385件）。ビルドで転送先生成を確認。効果はW30以降のGSCで観測
- [x] G2: ja新規 高優先3本 → 2026-07-15公開: `used-soundproof-room-buying-guide`（money）・`assembly-type-comparison`（soundproof-room）・`piano-room-guide`（soundproof-room）。カバー画像生成済み・相互リンク設置済み（buyback-guide/bouon-osusume-hikaku/budget-soundproof-booth-comparison/apartment-weight-limit-500kgから3記事へリンク追加）。ビルド検証済み（226ページ）。効果はW32以降のGSCで観測
- [x] G3: en FAQ 1本目 → 2026-07-15公開: `why-noise-complaints-in-japan`（japan-noise-and-society）。FAQ型・文化文脈（欧米厚壁 vs 日本木造の遮音格差）。既存en 2記事と双方向リンク設置。ビルド検証済み（227ページ）。効果はW32以降のGSCで観測
- [x] G4: local 15本の統合設計 → 2026-07-20完了。振り分け表を確定（`sitecheck-and-postcheck/suggest-task.md`参照）: 主要4都市+差別化ありの7都市+首都圏4都市=13本は「残す」、テンプレ型のkanazawa・okayama・kumamoto・niigataの4本は「統合候補（要観察）」。ハブ記事`bouon-rental-market-guide`と、未接続だった12都市ガイドの間に双方向内部リンクを追加（ビルド検証済み、`astro check`エラー0件）。sendaiは別トラックで既にnoindex済み
- [ ] G4後続: kanazawa・okayama・kumamoto・niigataの4本、W32〜W33のGSCエクスポートで表示ゼロが継続するか確認し、継続する場合はnoindex化を検討
  - 実施タイミングは急がなくてよい。現状のアクセス解析（GA4/GSC）から該当パラメータを取得・調査したうえで判断する

### 本音と建前リライト（2026-09-05、Tier1〜3完了・Tier4は精度チェック完了）

詳細・candidate一覧・実施記録は `.workspace/.task/honne-tatemae-rewrite-survey.md`。既存211記事のうち83記事（約39%）が本音への言及ゼロと判明、Tier1〜4に分類。

- [x] Tier1（23記事）: リライト・noindex解除・ビルド確認・コミット/push済み（`843c212`）
- [x] Tier2（30記事、creator20・diy10）: リライト・ビルド確認・コミット/push済み（`f2af3dc`）
- [x] Tier3（地域ガイド15記事）: 11記事は本音リライト、`kanazawa`・`okayama`・`kumamoto`・`niigata`の4本は「東京・大阪より安く静かに拠点を構えられる場所」という新ポジショニングで再構築（都市ごとの交通事情はWebSearchで正確性確認済み）。ビルド確認・コミット/push済み（`f2af3dc`）。4本はnoindex未適用のままW32〜W33のGSC観測を継続
- [x] Tier4（15記事）: 「知識面が強く本音と建前は使いづらい」というユーザーの判断どおり本音の織り込みは行わず、記事構成とナレッジの正確性をWebSearchで裏取りしながらチェック。8件の事実誤り（D値計算の矛盾、出典不明の統計、実在企業の誤記、市場規模の過小/過大など）を発見・修正。詳細は`honne-tatemae-rewrite-survey.md`の「Tier4のナレッジ精度チェック」参照
- [ ] Tier4修正分の`pnpm build`確認 → コミット → push を行うか判断する
- [ ] `shared-streaming-studio-growth-pricing-utilization`に残る出典不明の個別統計（都市別スタジオ数等）を追加精査するか判断する
- [ ] 次回GSCエクスポートでTier1〜3（計68記事）の表示・CTR・順位変化を確認する（`construction-types-cost-comparison`はCTR0%からの改善が最も見えやすい）

### 既存記事の構造強化タスク（2026-09-05、本音と建前フェーズの次）

ハブは `.workspace/.task/content-structure-strengthening-survey.md`。本音と建前とは別軸（内部リンク構造・コンテンツの厚み・情報鮮度）で211記事全体を機械的に調査し、記事単位の進捗管理はTierごとに派生ファイルへ分離した。

- [x] Tier A（`content-structure-tier-a-internal-links.md`）: 内部リンクが孤立（0本）44記事・希薄（1本のみ）39記事、計83記事への内部リンク追加 → 2026-09-05完了（83/83）。`pnpm build`検証済み（223ページ、エラー0件）
- [x] Tier B（`archive/content-structure-tier-b-thin-content.md`）: 3,000字未満84記事のうち、GSC需要データ（W36週次＋2026/03/06-06/30の4ヶ月集計）と突き合わせて選別 → 2026-09-05完了。拡充候補34・統合検討36・現状維持6・未判断8に分類（判定のみ、個別記事の拡充作業は次のタスク）
- [x] Tier B拡充候補34記事の本文拡充 → 2026-09-06完了（`archive/content-structure-tier-b-action-plan.md`参照）。GSC優先度順（`wifi-connection-guide`・`d-value-vs-rw-value-confusion`・`osaka-soundproof-rental-guide`・`streamer-noise-quick-fix`等から着手）に全34記事へ加筆・データ追加・タイトル改善を実施。コミット`2b24ed9`
- [x] Tier B統合検討36記事の扱いを判断 → 2026-09-06完了（`archive/content-structure-tier-b-action-plan.md`参照）。うち5件（`soundproof-room-fatigue-ventilation`・`diy-soundproof-ventilation-heat-exhaust`・`soundproof-window-merit-demerit`・`report-japan-soundproof-unit-resale-value-simulation`・`streaming-room-reverb-absorption`）は内容を移植のうえ統合記事へリダイレクト。方向性メモと現状記事が食い違う複数件はユーザー確認の上「維持」で確定。残りは軽微な拡充で対応。ビルド検証済み（215ページ、エラー0件）、コミット`2b24ed9`でpush済み
- [ ] Tier B効果測定・8記事の再判定 → `weekly-task.md`の「Tier B拡充・統合の効果測定フォローアップ（2026-09-06）」に登録済み。次回GSCエクスポート後に実施
- [x] Tier C（`content-structure-tier-c-stale-content.md`）: `lastmod`が2026-05以前の29記事の情報鮮度確認 → 2026-09-05完了（29/29）。9記事で事実誤り・陳腐化を修正（`noise-regulation-update-2025`の実在しない「2025年法改正」記述、`asmr-vtuber-booth-guide`の架空製品名、`shimamura-music-soundproof-room-guide`の価格・性能値誤り、`shared-streaming-studio-growth-pricing-utilization`の出典不明統計等）。詳細は同ファイル参照
- [x] Tier D（`content-structure-tier-d-dedup-check.md`）: 上記とカニバリ調査・ランキング崩壊調査等の既存タスクとの重複がないか確認 → 2026-09-05完了、重複なしを確認
- [ ] 壊れた画像記法（`![alt](url)`ではなく`!alt`のみになっているMarkdown）がTier A/C対象記事の調査中に計14記事で見つかった（`wooden-apartment-soundproof-guide`・`noise-canceling-headphones-sleep`・`rental-caution-cello`等）。既に修正した数記事以外は未対応。横断的なGrep洗い出しと一括修正を検討
- [ ] `asmr-vtuber-booth-guide`に手動番号見出し（`### 1-1. 購入`・`### 1-2. レンタル・サブスク`）が残存（見出し数字欠落バグとは別種、既存の「H2/H3に手動番号禁止」ルール違反）。修正するか判断する

### 見出し数字欠落バグの横断チェック（2026-09-05発見）

`soundproof-room-size`のリライト中に、H3見出しで小数点前の整数が欠落するバグを発見・修正した（例: `### 8畳〜1.0畳` → 正しくは `### 0.8畳〜1.0畳`、`### 0畳以上` → 正しくは `### 3.0畳以上`）。**再現パターン**: 見出しテキストが `数字.数字`（例: `0.8畳`）で始まる場合、先頭の `数字.`（例: `0.`）が丸ごと欠落する。「H2/H3の見出しに手動番号（1. 2. 等）を使わない」ルールを過去に一括適用した際、見出し冒頭の `\d+\.` パターンを（畳数などの小数点も含めて）誤って除去したことが原因と推測される（Tier1・Tier2の計53記事では他に該当なし）。

- [ ] `src/content/ja/**/index.mdx` 全211記事のH2/H3見出しを対象に、見出し冒頭が「バラの1桁数字＋単位（畳・万円・kg・cm・m・dB等）」で始まっているもの（例: `### 8畳〜`）を横断的にGrepで洗い出す（`0.8畳`のような小数のはずが`8畳`になっている可能性がある箇所の一次候補）
- [ ] 洗い出した候補それぞれについて、本文中の表・前後の文脈（同じ記事内の他の見出しとの整合、サイズ表記の一般的な刻み幅など）から正しい数値を推定し復元する
- [ ] 可能であれば、過去に「手動番号禁止」ルールを一括適用したコミットを`git log`で特定し、その差分を確認して影響範囲を絞り込む
- [ ] 畳数以外の単位（万円・kg・cm等）でも同様の欠落がないか確認する

### AffiliateCardのslug表記チェック（2026-09-05発見）

Tier2作業中、`creator/podcast-collab-recording-acoustics`と`creator/singer-instrumentalist-stream-soundproof`で使われている`<AffiliateCard slug="...">`のslugが、`src/data/affiliates.ts`内で確認したところ実際に以下のように登録されていることを確認した（機能上は動作するが命名規則が他と異なる）。

- `acoustic-panel-felmenon`（英語表記だが登録されているブランド名としては要確認）
- `防振-mat-piano`（日本語混じり。`affiliates.ts`に登録された19件中、日本語を含むのはこの1件のみで明確な外れ値）

- [ ] `src/data/affiliates.ts`に登録された全slug（19件、2026-09-05時点）を洗い出し、命名規則（英語kebab-case）から外れているものがないか確認する
- [ ] `防振-mat-piano`を英語kebab-case（例: `piano-vibration-mat`）にリネームするか判断する。リネームする場合は`affiliates.ts`のキーと、本文中の`<AffiliateCard slug="防振-mat-piano">`参照箇所（Grepで洗い出し）を同時に更新する
- [ ] `acoustic-panel-felmenon`が実在の製品・ブランド名として正しいか確認する

### 一戸建て騒音源別記事（保留・優先度低）

- [ ] 一戸建て騒音源別記事（ピアノ／室外機／ペット）、`japan-soundproof-housing` カテゴリの賃貸文化記事は実需データ待ちのため保留

### ランキング崩壊調査：GSC UI確認・効果測定（ユーザー対応待ち）

調査・リダイレクト修正の完了分は `archieve/task-list-03.md`。

- [ ] `ranking-collapse-root-cause-20260702.md` 記載のGSC UI確認（インデックス登録レポート・サイトマップ・手動対策）をユーザーに依頼
- [ ] QFO拡張施策（`archieve/strategies/qfo-20260702.md`）・B群新規記事の効果測定は、サイト全体の回復確認まで保留
