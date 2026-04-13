# SEO監査レポート — BouonLab 2026年4月

> 作成日: 2026-04-13  
> データ: GSC エクスポート（直近28日: 〜2026-04-07）+ コンテンツ全数調査  
> ステータス: Hugo→Astro移行後・URLマッピング済み・サイトマップ送信不要

---

## エグゼクティブサマリー

ロングテールが効いていない根本原因は **「knowledge コレクションへの記事集中」と「コレクション間のURL変更で生じる内部リンク崩壊リスク」** の2点。  
`knowledge/ja` の145記事から約70件を適切なコレクションへ移動させることが最優先作業。ただし移動=URL変更を伴うため、内部リンクの同時修正が必須。

---

## 現状のコレクション実態（正確な数）

| コレクション            | ja 記事数 | en 記事数 | 備考                                            |
| ----------------------- | --------- | --------- | ----------------------------------------------- |
| `knowledge`             | **145**   | 104       | 過剰。情報提供・原理説明が混在                  |
| `solutions/unit-rooms`  | 37        | 19        | ユニット防音室関連。妥当                        |
| `solutions/rentals`     | 30        | 10        | 防音賃貸関連。妥当                              |
| `solutions/custom`      | 12        | 8         | DIY・補助金。**knowledge に同種記事が大量重複** |
| `solutions/ja`（直下）  | 7         | 1         | オーナー向け投資系                              |
| `solutions/environment` | 1         | 0         | 環境工学系                                      |
| `solutions/investment`  | 1         | 0         | 投資分析                                        |
| `company`               | 14        | 10        | メーカー分析                                    |
| `column`                | 15        | 6         | コラム                                          |
| `use-case`              | 3         | 0         | **致命的に少ない**                              |

**問題の本質**: `solutions` の合計89記事（ja）は十分だが、`knowledge` の145記事のうち約70件が実態として solutions・use-case に属する内容で、誤った場所にある。

---

## 問題1（最優先）：knowledge/ja の過半数が誤コレクション

### solutions/unit-rooms に移動すべき記事（26件）

これらは「防音室を買う・運用する」という購買意思決定支援コンテンツ。現在 `/ja/knowledge/` にあるが、`/ja/solutions/unit-rooms/` が正しい。

| スラッグ                                   | 内部リンク数 | 備考                            |
| ------------------------------------------ | ------------ | ------------------------------- |
| `soundproof-room-loan`                     | **3**        | GSC 表示41件・CTR 0% の重要記事 |
| `soundproof-room-purchase-price`           | **3**        | 買取相場                        |
| `soundproof-room-resale-strategy`          | **3**        | リセール戦略                    |
| `soundproof-room-buyback-guide`            | **2**        |                                 |
| `soundproof-room-resale-value-comparison`  | 0            |                                 |
| `soundproof-room-sell-personal`            | 0            |                                 |
| `soundproof-room-moving`                   | 0            | 搬入・移設                      |
| `soundproof-room-relocation-cost`          | 0            |                                 |
| `soundproof-room-demolition-guide`         | 0            |                                 |
| `soundproof-room-rental-lease`             | 0            |                                 |
| `soundproof-room-rental-cost`              | 0            |                                 |
| `soundproof-room-mechanism`                | 0            |                                 |
| `soundproof-room-maintenance-health`       | 0            |                                 |
| `soundproof-room-fixed-asset-tax`          | 0            |                                 |
| `soundproof-room-tax-guide`                | 0            |                                 |
| `proofroom-price2025-research`             | 0            |                                 |
| `bouon-dchiseinou-meyasu`                  | 0            | D値ガイド                       |
| `d-value-truth-and-myths`                  | 0            |                                 |
| `soundproof-performance-dr-standard`       | 0            |                                 |
| `soundproof-performance-measurement`       | 0            |                                 |
| `soundproof-performance-measurement-truth` | 0            |                                 |
| `sound-reduction-simulation`               | 0            |                                 |
| `bouon-asset-value-analysis`               | 0            |                                 |
| `musician-lab-roi`                         | 0            |                                 |
| `musician-soundproof-loan-strategy`        | 0            |                                 |
| `high-end-brand-comparison-1.5tatami`      | 0            |                                 |

### solutions/custom に移動すべき記事（24件）

補助金・DIY実践系。`solutions/custom/ja/` に既存記事があり、そちらと統合されるべき内容。

| スラッグ                                    | 内部リンク数                                            |
| ------------------------------------------- | ------------------------------------------------------- |
| `diy-soundproof-room-limit`                 | **2**                                                   |
| `mass-law-diy-complete-guide`               | 0                                                       |
| `diy-soundproof-truth`                      | 0                                                       |
| `diy-soundproof-room-cost-breakdown`        | 0                                                       |
| `diy-soundproof-room-failures-solutions`    | 0                                                       |
| `diy-soundproof-room-weight-dispersion`     | 0                                                       |
| `diy-soundproof-ventilation-heat-exhaust`   | 0                                                       |
| `diy-soundproof-egg-carton-myth`            | 0                                                       |
| `egg-carton-soundproofing-myth`             | 0 (**カニバリ**: diy-soundproof-egg-carton-myth と重複) |
| `styrofoam-soundproof-merit`                | 0                                                       |
| `free-cardboard-soundproof-tech`            | 0                                                       |
| `soundproof-sheet-heavy-diy-tips`           | 0                                                       |
| `soundproof-wall-construction-guide`        | 0                                                       |
| `soundproof-subsidy-news-2025`              | 0                                                       |
| `soundproof-subsidy-check-guide`            | 0                                                       |
| `soundproof-subsidy-system-list`            | 0                                                       |
| `soundproof-subsiproof-subsidy-system-list` | 0 (**スラッグミス**: 「subsiproof」)                    |
| `soundproof-subsidy-three-cases`            | 0                                                       |
| `soundproof-subsidy-tokyo-osaka`            | 0                                                       |
| `soundproof-subsidy-zero-cost`              | 0                                                       |
| `subsidy-soundproof-window-combo`           | 0                                                       |
| `bouon-construction-subsidy`                | 0                                                       |
| `airport-soundproof-subsidy`                | 0                                                       |
| `small-business-soundproof-subsidy-guide`   | 0                                                       |

### use-case に移動すべき記事（22件）

ペルソナ別の体験・シナリオ型記事。現在 knowledge に入っているが use-case が正しい。

| スラッグ                                   | 内部リンク数 | ペルソナ       |
| ------------------------------------------ | ------------ | -------------- |
| `streamer-soundproof-loan-resale`          | **6**        | 配信者         |
| `streamer-proofroom-setting`               | **1**        | 配信者         |
| `streamer-proofroom-choicetech`            | 0            | 配信者         |
| `streamer-income-vs-lease`                 | 0            | 配信者         |
| `streamer-noise-defense`                   | 0            | 配信者         |
| `streamer-keyboard-silence`                | 0            | 配信者         |
| `streamer-tax-strategy`                    | 0            | 配信者         |
| `streamer-trouble-rule`                    | 0            | 配信者         |
| `streamer-soundproof-loan-strategy`        | 0            | 配信者         |
| `remote-work-family-harmony-soundproof`    | 0            | テレワーク     |
| `rental-telework-soundproof-floor`         | 0            | テレワーク     |
| `rental-game-soundproof-booth-3man`        | 0            | ゲーマー       |
| `desk-under-secret-base-soundproof-danger` | 0            | DIY失敗談      |
| `karaoke-booth-soundproof`                 | 0            | カラオケ用途   |
| `futon-cardboard-karaoke-booth`            | 0            | カラオケ用途   |
| `podcast-conversation-room`                | 0            | ポッドキャスト |
| `vocal-recording-booth-guide`              | 0            | ボーカル       |
| `utau-te-mita-vocal-booth-design`          | 0            | ボーカル       |
| `kominka-renovation-streaming-room`        | 0            | 古民家改造     |
| `child-rearing-soundproof-pillar`          | 0            | 子育て         |
| `renter-parent-house-soundproofing`        | 0            | 実家同居       |
| `parents-soundproof-happiness`             | 0            | 実家           |

---

## 問題2：移動時のURL変更による内部リンク崩壊

### 変更されるURL構造

```
移動前（現在）: /ja/knowledge/{slug}/
移動後（目標）: /ja/solutions/unit-rooms/{slug}/
               /ja/solutions/custom/{slug}/
               /ja/use-case/{slug}/
```

### 内部リンクが壊れる件数（確認済み）

| スラッグ                          | 現行 `/ja/knowledge/` へのリンク数 | 修正必要ファイル |
| --------------------------------- | ---------------------------------- | ---------------- |
| `streamer-soundproof-loan-resale` | **6件**                            | column/ja 他     |
| `soundproof-room-loan`            | **3件**                            | knowledge/ja 内  |
| `soundproof-room-purchase-price`  | **3件**                            | knowledge/ja 内  |
| `soundproof-room-resale-strategy` | **3件**                            | knowledge/ja 内  |
| `soundproof-room-buyback-guide`   | **2件**                            | knowledge/ja 内  |
| `diy-soundproof-room-limit`       | **2件**                            | knowledge/ja 内  |
| `soundproof-room-purchase-price`  | **2件**                            |                  |

合計: 移動対象72件のうち、リンクがあるのは7スラッグ・約20件のリンク（管理可能な範囲）。

### 修正方針

移動作業は**スラッグごとのバッチ処理**が安全。1スラッグにつき：

1. ファイルを `knowledge/ja/{slug}/` から `solutions/xxx/ja/{slug}/` へ移動（`mv`）
2. `frontmatter.category` を `knowledge` → `solutions` に変更
3. `grep -r "/{slug}/"` で既存リンクを全件洗い出し
4. `/ja/knowledge/{slug}/` → `/ja/solutions/xxx/{slug}/` に一括置換

---

## 問題3：スラッグミス（即修正）

`knowledge/ja/soundproof-subsiproof-subsidy-system-list/` — **「subsiproof」がタイポ**。  
`soundproof-subsidy-system-list` と内容が重複している可能性が高い（要確認）。

---

## 問題4：カニバリゼーション（コレクション整理後に対処）

移動完了後に残るカニバリ候補：

| 競合クエリ            | 重複記事                                                                                                                                             | 推奨アクション                                 |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| 防音室 値段/価格/相場 | `soundproof-room-price`, `soundproof-room-price-market`, `soundproof-room-price-complete-guide`, `proofroom-price2025-research`, `bouon-price-souba` | `soundproof-room-price` を代表に統合           |
| 防音工事 補助金       | 補助金記事6件                                                                                                                                        | `soundproof-subsidy-system-list` を代表記事に  |
| 卵パック 防音         | `diy-soundproof-egg-carton-myth` + `egg-carton-soundproofing-myth`                                                                                   | 後者を削除して前者に301 or 301なしでdraft:true |

---

## 実行ロードマップ

### Phase 1：内部リンクが多いものから移動（即着手可能）

```
優先順位: 内部リンク数の多い順
1. streamer-soundproof-loan-resale  (6links) → use-case
2. soundproof-room-loan             (3links) → solutions/unit-rooms
3. soundproof-room-purchase-price   (3links) → solutions/unit-rooms
4. soundproof-room-resale-strategy  (3links) → solutions/unit-rooms
5. diy-soundproof-room-limit        (2links) → solutions/custom
6. soundproof-room-buyback-guide    (2links) → solutions/unit-rooms
```

### Phase 2：リンクなし・バッチ移動（まとめて実行）

内部リンクが0件の残り66記事は、コレクション別に一括 `mv` して `category` frontmatter を一括置換。

### Phase 3：カニバリ解消（Phase 2完了後）

統合・削除・canonical設定。

---

## 移動しない（knowledge に残す）記事の基準

以下の性質の記事は `knowledge` に残す：

- **物理・科学的な原理説明**: `absorption-vs-insulation`, `acoustic-panel-placement`, `window-soundproofing-physics`
- **市場・トレンドレポート**: `acoustic-material-new-trend-2025`, `japan-bouonproof-marketnextasia`, `global-soundproof-market-trends`
- **ニュース系**: `weekly-soundproof-news-20251202`, `building-code-reform-2025-soundproof`
- **Myth Buster**: `diy-soundproof-egg-carton-myth`（→ ただしcustomへ移動後に削除候補）

---

_次のアクション: Phase 1 の6記事から着手。各移動は「ファイル移動→frontmatter修正→内部リンク一括置換」の3ステップ。_
