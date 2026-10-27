# SEO改善・リライト チェックリスト（2026-06-10 棚卸し版）

## 重要な前提（2026-06-10更新）

- 元データは `ctr-check-list.md` / `pagerank-list.md`（**Search Console 2026-04-25時点**）と `DeepResearch_prompt_hometheater_karaoke.md` を作成日2026-05-31に統合したもの。
- その後 **2026-06-01 にカテゴリ構造の大規模フラット化（Phase 1〜3）** を実施し、`astro.config.mjs` の `redirects` に旧URL→新URLのマッピングを追加済み。URL形式は `/{lang}/{category}/{subcategory}/{slug}/` → `/{lang}/{category}/{slug}/` に変更。
- さらに **2026-05-02 の「revuild」コミット**で、重複・アーカイブ済みだった記事（`_archived-posts/` や旧 `solutions/` 配下）が大量に削除されている。**`ctr-check-list.md`/`pagerank-list.md` の数値はこれら削除済み記事のものを含んでいる**ため、そのままでは実行不可能なタスクが多数残っていた。
- 直近データは `.workspace/access-data/2026/W24/`（2026-05-30〜06-06）にあるが、**復旧直後の1週間で絶対数が極小（クリック数 0〜1件が大半）のため、本格的な再評価には不十分**。次回更新は **W26〜W28（リダイレクト反映から3〜4週間後）** を目安に新URLでのGSCデータが溜まってから行う。
- 本ファイルは「①記事が現存しURL更新のみで実行可能」「②記事はリネーム・統合済みで指標の再計測が必要」「③記事自体が消滅し対応不可」の3区分で棚卸しした。

---

## ✅ ZONE A — タイトルリライト（記事は現存・実行価値あり）

### rental-proofroom-contractcheck
- 現URL: `/ja/soundproof-rental/rental-proofroom-contractcheck/`（旧 `/ja/soundproof-rental/solution/...` からリダイレクト済み）
- データ(2026-04-25): 順位7.2位 / CTR 1.65% / 16クリック / **972表示**（サイト最多表示）
- W24時点でも旧URL `/ja/soundproof-rental/solution/rental-proofroom-contractcheck/` で13表示・平均順位9.7と検索結果に残存（リダイレクト浸透待ち）
- 問題: 「契約確認」は行動の目的が見えない。ユーザーは「騙されたくない」「損したくない」という感情で検索している
- [x] タイトルを「退去時に損する人」「契約前に確認すべき5項目」など危機感ワードに変更（2026-06-10）
- [x] メタディスクリプションも損失回避のトーンに変更（2026-06-10）
- [x] H2に「賃貸防音室で『損する人』を防ぐ5項目チェックリスト」を新設しスニペット狙い（2026-06-10）

### soundproof-culture-japan-vs-america
- 現URL: `/ja/knowledge/soundproof-culture-japan-vs-america/`
- データ(2026-04-25): 順位**2.8位** / CTR 0.52% / 2クリック / 387表示
- 問題: 2.8位という最高順位でほぼ押されない = 検索意図と完全にズレている、またはメタディスクリプションで答えが完結し本文を読む必要がない
- [x] タイトルを「なぜ日本はユニット型防音室が主流なのか」という問いかけ型に変更（2026-06-10）
- [x] メタディスクリプションを「D-50≒STC50-55」のような結論先出しから、視点提供型に変更（クリックしないと結論が分からない構成に、2026-06-10）

---

## ✅ ZONE B — 内部リンク強化（記事は現存・実行価値あり）

### diy-vocal-soundproof-mask ⭐ 最優先
- 現URL: `/ja/diy/diy-vocal-soundproof-mask/`
- データ(2026-04-25): 順位10.3位 / CTR **14.43%** / 14クリック / 97表示
- 期待値: 5位達成で月35〜50クリックへ（現在の2.5〜3.5倍）
- [x] 関連記事（`/ja/diy/closet-diy-soundproof-room/`）から本記事へのリンクを追加（2026-06-10）
- [x] 本記事内にFAQ形式のセクションを追加（スニペット狙い、2026-06-10）

### hsp-soundproof-room-guide ⭐ 最優先
- 現URL: `/ja/soundproof-room/hsp-soundproof-room-guide/`
- データ(2026-04-25): 順位9.3位 / CTR **21.88%** / 7クリック / 32表示
- 期待値: 5位達成で月20〜30クリックへ（現在の3〜4倍）
- [x] `/ja/soundproof-room/soundproof-room-pollen-protection/`、`/ja/soundproof-rental/noise-canceling-headphones-sleep/`、`/ja/soundproof-room/hsp-soundproof-curtain-guide/` から内部リンクを追加（2026-06-10）
- [x] 「聴覚過敏」「ミソフォニア」などの関連キーワードをH2・H3・リード文に組み込み（2026-06-10）

### budget-soundproof-booth-comparison
- 現URL: `/ja/soundproof-room/budget-soundproof-booth-comparison/`
- データ(2026-04-25): 順位7.3〜7.6位 / CTR 3.6% / 3クリック / 83表示（8位ボーダーで低CTR）
- [x] だんぼっち・OTODASU II・ISOVOX 2・自作の価格帯比較表を追加（2026-06-10）
- [x] `/ja/money/soundproof-room-rental-cost/`、`/ja/soundproof-room/soundproof-room-budget-selection-guide/`、`/ja/soundproof-room/otodasu-voice-chat-test/` 等と相互リンク（2026-06-10）
- [x] 「20万円以下」「価格帯」を見出し・本文に明示してCTR改善（2026-06-10）

---

## ⚠️ ZONE C — リネーム・統合済み記事（新URL/新タイトルでの再計測が必要）

> 旧スラッグの指標は「revuild（2026-05-02）」以前の記事のもの。後継記事として現存するが、
> リライト判断は**新URL・新タイトルでのGSCデータが溜まってから**行う（目安: W27以降）。

### soundproof-room-loan → soundproof-room-loan-guide
- 現URL: `/ja/money/soundproof-room-loan-guide/`
- 旧データ(2026-04-25, soundproof-room-loan): 順位24.0位 / CTR 7.35% / 5クリック / 68表示

### soundproof-room-humidifier-guide → bouon-humidifier-comparison ⭐要追跡
- 現URL: `/ja/soundproof-room/bouon-humidifier-comparison/`
- 旧データ(2026-04-25): 順位7.0位 / CTR **14.20%** / **24クリック（サイト最多）** / 169表示
- 旧記事は2026-05-02に削除済み・`/posts/soundproof-room-humidifier-guide/` → 新URLへのリダイレクトは設定済み

### sendai-soundproof-rental-guide
- 現URL: `/ja/local/sendai-soundproof-rental-guide/`（旧 `/ja/soundproof-rental/others/...` からリダイレクト済み）
- データ(2026-04-25): 順位13.8位 / CTR 11.54% / 6クリック / 52表示
- [x] 仙台市内のエリア別情報（青葉区・太白区・泉区）、不動産会社情報は既に充実済みと確認
- [x] 「仙台」をH2見出し2箇所に追加してローカルSEOを強化（2026-06-10）

### bass-trap-installation-guide
- 現URL: `/ja/diy/bass-trap-installation-guide/`（旧 `soundproof-room/diy/...` からリダイレクト済み）
- 旧データ(2026-04-25): 順位14.0位 / CTR 8.24% / 15クリック / 182表示
- W24時点: 表示6・クリック0・平均順位20.7 → **順位悪化の兆候**（要観察。カテゴリ移転直後のため断定は保留）
- [x] 設置位置の図解・周波数帯別データ・製品比較テーブルは既に本文に含まれていることを確認（2026-06-10時点で対応済み）
- [x] 末尾の「RT60残響測定ガイド」リンクが削除済み記事（`rt60-reverberation-measurement-guide`）への誤リンクだったため削除（2026-06-10）

---

## ❌ ZONE D — 対象記事が現存しない（対応不要・記録として保持）

> 2026-05-02 revuild または2026-06-01リライト時に削除・統合された記事。
> `interlink-postlist.md` に該当slugなし。新規に同テーマで書き直す場合のみ「新規記事候補」として扱う。

- `bouon-rental-yatinsouba`（防音賃貸家賃相場） → 同テーマは `/ja/soundproof-rental/bouonrental-market-research2025/` 等で代替カバー済み
- `soundproof-room-wifi-guide` / `soundproof-room-internet-lan-guide` → カニバリ懸念ごと記事自体が削除済み。再発不要
- `asmr-proofroom-guide` → `/ja/creator/asmr-vtuber-booth-guide/`、`/ja/creator/asmr-external-noise-elimination/` 等で類似テーマをカバー済み
- `soundproof-room-cheapest` → `/ja/soundproof-room/budget-soundproof-booth-comparison/`（ZONE B参照）で代替
- `soundproof-room-standard-size` → `/ja/soundproof-room/soundproof-room-size/`、`/ja/soundproof-room/soundproof-room-budget-selection-guide/` で類似テーマをカバー済み
- `soundproof-room-tax-guide` → `/ja/money/streamer-tax-strategy/` で代替
- `vtuber-heat-noise-management` / `gaming-streaming-floor-noise-control` / `spot-cooler-gaming-streamer` → `/ja/creator/soundproof-room-fatigue-ventilation/`、`/ja/creator/vtuber-soundproof-environment-complete-guide/` 等の配信者向け記事群でカバー済み
- `rt60-reverberation-measurement-guide` → 削除済み・後継記事なし。需要があれば新規企画として再検討
- `thunder-bouon-stopnoise-knowlkefge` / `thunder-noise-reflect` → 「雷シリーズ」両記事とも削除済み。連携施策は対象外
- `co2-concentration-lossnay-productivity` → 削除済み。CO2×換気テーマは `/ja/soundproof-room/proofroom-aircondition-select/`、`/ja/soundproof-room/proofroom-humidity-airconditionlist/` で部分的にカバー

---

## ✅ ZONE E — 新規記事（完了）

### 自宅映画×自宅カラオケ 両立防音設計ガイド
- [x] `/ja/soundproof-rental/home-theater-karaoke-soundproof-design/` として公開済み
- 公開後のGSCデータ蓄積後、CTR・順位を `pagerank-list.md` 形式で再評価する

---

## 🆕 次の調査アクション

GSC効果測定・W27以降の追跡タスクは`.workspace/.task/task-list.md`（2026-06-19棚卸し セクションD）に集約済み。

---

## 進捗サマリー

| ZONE | 対象記事数 | 完了数 | アクション種別 |
|------|---------|--------|--------------|
| A タイトルリライト（現存） | 2記事 | 2（効果測定待ち） | タイトル・メタ変更 |
| B 内部リンク強化（現存） | 3記事 | 3（効果測定待ち） | リンク追加・比較表追加 |
| C リネーム/統合（再計測必要） | 4記事 | 2（内容確認・微修正済み、指標確認待ち） | 指標確認 → リライト判断 |
| D 対応不要（記事消滅） | 11記事 | - | 記録のみ |
| E 新規記事 | 1記事 | 1 | 完了 |

---

*更新日: 2026-06-10 / 参照: ctr-check-list.md（2026-04-25データ）/ pagerank-list.md / interlink-postlist.md / interlink-tag-clusters.md / astro.config.mjs（リダイレクト）/ .workspace/access-data/2026/W24/*
