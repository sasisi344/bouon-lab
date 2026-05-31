# カテゴリ移行タスクリスト

作成: 2026-05-16 / 更新: 2026-06-01
関連: [`bouonroom-reno.md`](./bouonroom-reno.md) / [`/category-rule` スキル]

---

## 移行サマリー

| Phase | 対象 | ファイル数 | リスク | ステータス |
|-------|------|----------|--------|-----------|
| 0 | コード設定（カテゴリ定義追加） | - | 低 | [x] 完了（2026-06-01） |
| 0+ | 薄い記事の統合（column/others 先行）| 5→2本 | 低 | [x] 完了（2026-06-01） |
| 1 | `others` + `column` 廃止（残り43本） | 43 | 低 | [x] 完了（2026-06-01） |
| 2 | 新カテゴリへの移行 | 52 | 中 | [x] 完了（2026-06-01） |
| 3 | Tier 1 フラット化 | 39 | 高 | [x] 完了（2026-06-01） |
| **合計** | | **134** | | |

### Phase 0 完了内容（2026-06-01）
- [x] `contentCategories.ts` に8カテゴリ（diy/money/creator/knowledge/local/business を追加）
- [x] `TOP_CATEGORY_LABELS` に各カテゴリの ja/en ラベルを追加

### 統合済み記事（2026-06-01）

**統合A：ビジネス活用系 3本 → 1本**
| 削除したファイル | 統合先 |
|----------------|--------|
| `soundproof-room/others/soundproof-asset-sharing` | `/ja/business/soundproof-space-business-guide/` |
| `column/others/empty-tenant-soundproof-renovation-possibility` | 同上 |
| `column/others/soundproof-booth-rental-business-feasibility` | 同上 |

**統合B：オーナーリノベ系 2本 → 1本**
| 削除したファイル | 統合先 |
|----------------|--------|
| `soundproof-rental/others/owner-soundproof-renovation-strategy` | `/ja/soundproof-rental/owner-soundproof-renovation-strategy/` |
| `column/company/renovation-roi-strategy` | 同上 |

### 統合しなかった薄い記事（単体で展開・移行のみ）

| ファイル | 判断理由 | Phase 1で移行先 |
|---------|---------|---------------|
| `bouon-setti-checkpoint` | 設置チェックリストとして独自性あり | soundproof-room |
| `streamer-tax-strategy` | 税務は専門的で独立した価値あり | money |
| `web-meeting-voice-soundleak-prevention` | Web会議角度は unique | business |
| `asmr-vtuber-booth-guide` | 機種比較が独自。streaming-layout とは別テーマ | creator |
| `streaming-room-layout-guide` | 部屋設計テーマとして独立 | creator |
| `global-soundproof-market-trends` | グローバル市場視点として独立 | business |
| 都市ガイド（osaka/tokyo/hiroshima/sapporo等） | 各都市に固有の市場情報あり。統合より拡充 | local |
| draft:true の全ファイル | 公開前なので移行時に判断 | — |

### 各アクションの意味
- **ファイル移動**: `src/content/ja/{old-cat}/{subcategory}/{slug}/` → `src/content/ja/{new-cat}/{slug}/`
- **frontmatter更新**: `category:` を新しい値に変更。`subcategory:` は削除（任意）
- **リダイレクト追加**: `astro.config.mjs` の `redirects` に旧URL → 新URLを追加

---

## Phase 0 — コード設定（移行前に必ず実施）

- [ ] `src/data/contentCategories.ts` の `JA_TOP_CATEGORIES` に新カテゴリを追加

```ts
export const JA_TOP_CATEGORIES = [
  'soundproof-room',
  'soundproof-rental',
  'diy',
  'money',
  'creator',
  'knowledge',
  'local',
  'business',
  'column',   // ← Phase 1完了まで残す
] as const;
```

- [ ] `TOP_CATEGORY_LABELS` に新カテゴリのラベルを追加

```ts
diy:              { ja: 'DIY防音',      en: 'DIY Soundproofing' },
money:            { ja: 'お金・補助金', en: 'Cost & Subsidies' },
creator:          { ja: '配信・クリエイター', en: 'Creators & Streamers' },
knowledge:        { ja: '防音の基礎知識', en: 'Acoustics Knowledge' },
local:            { ja: '地域ガイド',   en: 'Local Guide' },
business:         { ja: '企業・法人向け', en: 'Business & Enterprise' },
```

- [ ] `npx astro check` でエラーがないことを確認

---

## Phase 1 — `others` + `column` 廃止（48ファイル・低リスク）

> SEO評価が低い記事・新カテゴリ群が対象。Tier 1（soundproof-room/rental）は触らない。

### 1-A. soundproof-room/others → 14ファイル

各ファイルの作業: ① ディレクトリ移動 ② frontmatter `category:` 更新 ③ リダイレクト追加

**→ `soundproof-room`（5本）: サブカテゴリ層を除去するだけ**

| 完了 | slug | 旧URL | 新URL |
|------|------|-------|-------|
| [ ] | bouon-osusume-hikaku | `/ja/soundproof-room/others/bouon-osusume-hikaku/` | `/ja/soundproof-room/bouon-osusume-hikaku/` |
| [ ] | bouon-setti-checkpoint | `/ja/soundproof-room/others/bouon-setti-checkpoint/` | `/ja/soundproof-room/bouon-setti-checkpoint/` |
| [ ] | kawai-nasal-soundproof-room-guide | `/ja/soundproof-room/others/kawai-nasal-soundproof-room-guide/` | `/ja/soundproof-room/kawai-nasal-soundproof-room-guide/` |
| [ ] | shimamura-music-soundproof-room-guide | `/ja/soundproof-room/others/shimamura-music-soundproof-room-guide/` | `/ja/soundproof-room/shimamura-music-soundproof-room-guide/` |
| [ ] | soundproof-room-size | `/ja/soundproof-room/others/soundproof-room-size/` | `/ja/soundproof-room/soundproof-room-size/` |

**→ `money`（6本）**

| 完了 | slug | 旧URL | 新URL |
|------|------|-------|-------|
| [ ] | rental-vs-purchase-soundproof-room | `/ja/soundproof-room/others/rental-vs-purchase-soundproof-room/` | `/ja/money/rental-vs-purchase-soundproof-room/` |
| [ ] | soundproof-room-buyback-guide | `/ja/soundproof-room/others/soundproof-room-buyback-guide/` | `/ja/money/soundproof-room-buyback-guide/` |
| [ ] | soundproof-room-loan-guide | `/ja/soundproof-room/others/soundproof-room-loan-guide/` | `/ja/money/soundproof-room-loan-guide/` |
| [ ] | soundproof-room-price-market | `/ja/soundproof-room/others/soundproof-room-price-market/` | `/ja/money/soundproof-room-price-market/` |
| [ ] | soundproof-room-rental-cost | `/ja/soundproof-room/others/soundproof-room-rental-cost/` | `/ja/money/soundproof-room-rental-cost/` |
| [ ] | report-japan-soundproof-unit-resale-value-simulation | `/ja/soundproof-room/others/report-japan-soundproof-unit-resale-value-simulation/` | `/ja/money/report-japan-soundproof-unit-resale-value-simulation/` |

**→ `knowledge`（2本）**

| 完了 | slug | 旧URL | 新URL |
|------|------|-------|-------|
| [ ] | noise-regulation-update-2025 | `/ja/soundproof-room/others/noise-regulation-update-2025/` | `/ja/knowledge/noise-regulation-update-2025/` |
| [ ] | why-your-80-percent-rug-rule-fails | `/ja/soundproof-room/others/why-your-80-percent-rug-rule-fails/` | `/ja/knowledge/why-your-80-percent-rug-rule-fails/` |

**→ `business`（1本）**

| 完了 | slug | 旧URL | 新URL |
|------|------|-------|-------|
| [ ] | soundproof-asset-sharing | `/ja/soundproof-room/others/soundproof-asset-sharing/` | `/ja/business/soundproof-asset-sharing/` |

---

### 1-B. soundproof-rental/others → 13ファイル

**→ `local`（10本：都市ガイド）**

| 完了 | slug | 旧URL | 新URL |
|------|------|-------|-------|
| [ ] | chiba-soundproof-rental-guide | `/ja/soundproof-rental/others/chiba-soundproof-rental-guide/` | `/ja/local/chiba-soundproof-rental-guide/` |
| [ ] | hiroshima-soundproof-rental-guide | `/ja/soundproof-rental/others/hiroshima-soundproof-rental-guide/` | `/ja/local/hiroshima-soundproof-rental-guide/` |
| [ ] | kanagawa-soundproof-rental-guide | `/ja/soundproof-rental/others/kanagawa-soundproof-rental-guide/` | `/ja/local/kanagawa-soundproof-rental-guide/` |
| [ ] | kobe-soundproof-rental-guide | `/ja/soundproof-rental/others/kobe-soundproof-rental-guide/` | `/ja/local/kobe-soundproof-rental-guide/` |
| [ ] | kyoto-soundproof-rental-guide | `/ja/soundproof-rental/others/kyoto-soundproof-rental-guide/` | `/ja/local/kyoto-soundproof-rental-guide/` |
| [ ] | osaka-soundproof-rental-guide | `/ja/soundproof-rental/others/osaka-soundproof-rental-guide/` | `/ja/local/osaka-soundproof-rental-guide/` |
| [ ] | saitama-soundproof-rental-guide | `/ja/soundproof-rental/others/saitama-soundproof-rental-guide/` | `/ja/local/saitama-soundproof-rental-guide/` |
| [ ] | sapporo-soundproof-rental-guide | `/ja/soundproof-rental/others/sapporo-soundproof-rental-guide/` | `/ja/local/sapporo-soundproof-rental-guide/` |
| [ ] | sendai-soundproof-rental-guide | `/ja/soundproof-rental/others/sendai-soundproof-rental-guide/` | `/ja/local/sendai-soundproof-rental-guide/` |
| [ ] | tokyo-soundproof-rental-summary | `/ja/soundproof-rental/others/tokyo-soundproof-rental-summary/` | `/ja/local/tokyo-soundproof-rental-summary/` |

**→ `money`（1本）**

| 完了 | slug | 旧URL | 新URL |
|------|------|-------|-------|
| [ ] | owner-renovation-roi-simulation-tool | `/ja/soundproof-rental/others/owner-renovation-roi-simulation-tool/` | `/ja/money/owner-renovation-roi-simulation-tool/` |

**→ `soundproof-rental`（2本：オーナー向け、サブカテゴリ層を除去）**

| 完了 | slug | 旧URL | 新URL |
|------|------|-------|-------|
| [ ] | owner-renovation-shibuya-shinjuku-vtuber-strategy | `/ja/soundproof-rental/others/owner-renovation-shibuya-shinjuku-vtuber-strategy/` | `/ja/soundproof-rental/owner-renovation-shibuya-shinjuku-vtuber-strategy/` |
| [ ] | owner-soundproof-renovation-strategy | `/ja/soundproof-rental/others/owner-soundproof-renovation-strategy/` | `/ja/soundproof-rental/owner-soundproof-renovation-strategy/` |

---

### 1-C. column/company → `business`（7ファイル）

| 完了 | slug | 旧URL | 新URL |
|------|------|-------|-------|
| [ ] | bouonrental-areasec-newbusiness | `/ja/column/company/bouonrental-areasec-newbusiness/` | `/ja/business/bouonrental-areasec-newbusiness/` |
| [ ] | datacenter-soundproof-technology-facts | `/ja/column/company/datacenter-soundproof-technology-facts/` | `/ja/business/datacenter-soundproof-technology-facts/` |
| [ ] | japan-bouonproof-marketnextasia | `/ja/column/company/japan-bouonproof-marketnextasia/` | `/ja/business/japan-bouonproof-marketnextasia/` |
| [ ] | renovation-roi-strategy | `/ja/column/company/renovation-roi-strategy/` | `/ja/business/renovation-roi-strategy/` |
| [ ] | report-japan-asmr-vtuber-streaming-studio-standard | `/ja/column/company/report-japan-asmr-vtuber-streaming-studio-standard/` | `/ja/business/report-japan-asmr-vtuber-streaming-studio-standard/` |
| [ ] | soundproof-market-esg-trend | `/ja/column/company/soundproof-market-esg-trend/` | `/ja/business/soundproof-market-esg-trend/` |
| [ ] | soundproof-renovation-cost-outlook-2026 | `/ja/column/company/soundproof-renovation-cost-outlook-2026/` | `/ja/business/soundproof-renovation-cost-outlook-2026/` |

---

### 1-D. column/news → 5ファイル

**→ `knowledge`（2本）**

| 完了 | slug | 旧URL | 新URL |
|------|------|-------|-------|
| [ ] | future-ssi-silent-speech-interface-revolution | `/ja/column/news/future-ssi-silent-speech-interface-revolution/` | `/ja/knowledge/future-ssi-silent-speech-interface-revolution/` |
| [ ] | proofroom-maker-2025productcheck | `/ja/column/news/proofroom-maker-2025productcheck/` | `/ja/knowledge/proofroom-maker-2025productcheck/` |

**→ `business`（2本）**

| 完了 | slug | 旧URL | 新URL |
|------|------|-------|-------|
| [ ] | global-soundproof-market-trends | `/ja/column/news/global-soundproof-market-trends/` | `/ja/business/global-soundproof-market-trends/` |
| [ ] | shared-streaming-studio-growth-pricing-utilization | `/ja/column/news/shared-streaming-studio-growth-pricing-utilization/` | `/ja/business/shared-streaming-studio-growth-pricing-utilization/` |

**→ `soundproof-room`（1本）**

| 完了 | slug | 旧URL | 新URL |
|------|------|-------|-------|
| [ ] | yamaha-tabisuru-bouon-room | `/ja/column/news/yamaha-tabisuru-bouon-room/` | `/ja/soundproof-room/yamaha-tabisuru-bouon-room/` |

---

### 1-E. column/others → 9ファイル

**→ `creator`（3本）**

| 完了 | slug | 旧URL | 新URL |
|------|------|-------|-------|
| [ ] | asmr-vtuber-booth-guide | `/ja/column/others/asmr-vtuber-booth-guide/` | `/ja/creator/asmr-vtuber-booth-guide/` |
| [ ] | kominka-renovation-streaming-room | `/ja/column/others/kominka-renovation-streaming-room/` | `/ja/creator/kominka-renovation-streaming-room/` |
| [ ] | streaming-room-layout-guide | `/ja/column/others/streaming-room-layout-guide/` | `/ja/creator/streaming-room-layout-guide/` |

**→ `knowledge`（2本）**

| 完了 | slug | 旧URL | 新URL |
|------|------|-------|-------|
| [ ] | soundproof-culture-japan-vs-america | `/ja/column/others/soundproof-culture-japan-vs-america/` | `/ja/knowledge/soundproof-culture-japan-vs-america/` |
| [ ] | vibration-isolation-technology-trend | `/ja/column/others/vibration-isolation-technology-trend/` | `/ja/knowledge/vibration-isolation-technology-trend/` |

**→ `business`（3本）**

| 完了 | slug | 旧URL | 新URL |
|------|------|-------|-------|
| [ ] | empty-tenant-soundproof-renovation-possibility | `/ja/column/others/empty-tenant-soundproof-renovation-possibility/` | `/ja/business/empty-tenant-soundproof-renovation-possibility/` |
| [ ] | soundproof-booth-rental-business-feasibility | `/ja/column/others/soundproof-booth-rental-business-feasibility/` | `/ja/business/soundproof-booth-rental-business-feasibility/` |
| [ ] | web-meeting-voice-soundleak-prevention | `/ja/column/others/web-meeting-voice-soundleak-prevention/` | `/ja/business/web-meeting-voice-soundleak-prevention/` |

**→ `money`（1本）**

| 完了 | slug | 旧URL | 新URL |
|------|------|-------|-------|
| [ ] | streamer-tax-strategy | `/ja/column/others/streamer-tax-strategy/` | `/ja/money/streamer-tax-strategy/` |

### 1 完了後の後処理
- [ ] `column` カテゴリが空になったら `JA_TOP_CATEGORIES` から削除
- [ ] `npx astro check` でエラーがないことを確認
- [ ] `pnpm build` でビルドが通ることを確認

---

## Phase 2 — 新カテゴリへの分配（52ファイル・中リスク）

> `diy`/`money`/`creator`/`business`/`knowledge` に散らばった記事を集約する。
> SEO評価のある記事（CTR高・表示数多）を含むため、リダイレクトを慎重に設定すること。

### 2-A. soundproof-room/diy → 16ファイル

**→ `diy`（14本）**

| 完了 | slug | 旧URL | 新URL |
|------|------|-------|-------|
| [ ] | bass-trap-installation-guide | `/ja/soundproof-room/diy/bass-trap-installation-guide/` | `/ja/diy/bass-trap-installation-guide/` |
| [ ] | bedroom-telework-layout-soundproof | `/ja/soundproof-room/diy/bedroom-telework-layout-soundproof/` | `/ja/diy/bedroom-telework-layout-soundproof/` |
| [ ] | closet-diy-soundproof-room | `/ja/soundproof-room/diy/closet-diy-soundproof-room/` | `/ja/diy/closet-diy-soundproof-room/` |
| [ ] | danbotchi-diy-blueprints | `/ja/soundproof-room/diy/danbotchi-diy-blueprints/` | `/ja/diy/danbotchi-diy-blueprints/` |
| [ ] | diy-led-acoustic-panels | `/ja/soundproof-room/diy/diy-led-acoustic-panels/` | `/ja/diy/diy-led-acoustic-panels/` |
| [ ] | diy-soundproof-room-cost-breakdown | `/ja/soundproof-room/diy/diy-soundproof-room-cost-breakdown/` | `/ja/diy/diy-soundproof-room-cost-breakdown/` |
| [ ] | diy-soundproof-room-failures-solutions | `/ja/soundproof-room/diy/diy-soundproof-room-failures-solutions/` | `/ja/diy/diy-soundproof-room-failures-solutions/` |
| [ ] | diy-soundproofing-tips | `/ja/soundproof-room/diy/diy-soundproofing-tips/` | `/ja/diy/diy-soundproofing-tips/` |
| [ ] | free-cardboard-soundproof-tech | `/ja/soundproof-room/diy/free-cardboard-soundproof-tech/` | `/ja/diy/free-cardboard-soundproof-tech/` |
| [ ] | futon-cardboard-karaoke-booth | `/ja/soundproof-room/diy/futon-cardboard-karaoke-booth/` | `/ja/diy/futon-cardboard-karaoke-booth/` |
| [ ] | gamer-acoustic-placement | `/ja/soundproof-room/diy/gamer-acoustic-placement/` | `/ja/diy/gamer-acoustic-placement/` |
| [ ] | outdoor-soundproof-curtain-market-guide | `/ja/soundproof-room/diy/outdoor-soundproof-curtain-market-guide/` | `/ja/diy/outdoor-soundproof-curtain-market-guide/` |
| [ ] | soundproof-room-diy-cost | `/ja/soundproof-room/diy/soundproof-room-diy-cost/` | `/ja/diy/soundproof-room-diy-cost/` |
| [ ] | soundproof-sheet-heavy-diy-tips | `/ja/soundproof-room/diy/soundproof-sheet-heavy-diy-tips/` | `/ja/diy/soundproof-sheet-heavy-diy-tips/` |

**→ `soundproof-room`（2本：製品・選択系のため）**

| 完了 | slug | 旧URL | 新URL |
|------|------|-------|-------|
| [ ] | proofroom-aircondition-select | `/ja/soundproof-room/diy/proofroom-aircondition-select/` | `/ja/soundproof-room/proofroom-aircondition-select/` |
| [ ] | shanon-vs-bouon-window | `/ja/soundproof-room/diy/shanon-vs-bouon-window/` | `/ja/soundproof-room/shanon-vs-bouon-window/` |

---

### 2-B. soundproof-rental/diy → 4ファイル

**→ `diy`（3本）**

| 完了 | slug | 旧URL | 新URL |
|------|------|-------|-------|
| [ ] | renter-parent-house-soundproofing | `/ja/soundproof-rental/diy/renter-parent-house-soundproofing/` | `/ja/diy/renter-parent-house-soundproofing/` |
| [ ] | soundproof-window-merit-demerit | `/ja/soundproof-rental/diy/soundproof-window-merit-demerit/` | `/ja/diy/soundproof-window-merit-demerit/` |
| [ ] | wooden-apartment-soundproof-guide | `/ja/soundproof-rental/diy/wooden-apartment-soundproof-guide/` | `/ja/diy/wooden-apartment-soundproof-guide/` |

**→ `creator`（1本）**

| 完了 | slug | 旧URL | 新URL |
|------|------|-------|-------|
| [ ] | one-room-streaming-soundproof | `/ja/soundproof-rental/diy/one-room-streaming-soundproof/` | `/ja/creator/one-room-streaming-soundproof/` |

---

### 2-C. soundproof-room/knowledge → 17ファイル（Phase 2分）

**→ `money`（8本）**

| 完了 | slug | 旧URL | 新URL |
|------|------|-------|-------|
| [ ] | bouon-asset-value-analysis | `/ja/soundproof-room/knowledge/bouon-asset-value-analysis/` | `/ja/money/bouon-asset-value-analysis/` |
| [ ] | small-business-soundproof-subsidy-guide | `/ja/soundproof-room/knowledge/small-business-soundproof-subsidy-guide/` | `/ja/money/small-business-soundproof-subsidy-guide/` |
| [ ] | soundproof-room-moving | `/ja/soundproof-room/knowledge/soundproof-room-moving/` | `/ja/money/soundproof-room-moving/` |
| [ ] | soundproof-room-rental-lease | `/ja/soundproof-room/knowledge/soundproof-room-rental-lease/` | `/ja/money/soundproof-room-rental-lease/` |
| [ ] | soundproof-subsidy-check-guide | `/ja/soundproof-room/knowledge/soundproof-subsidy-check-guide/` | `/ja/money/soundproof-subsidy-check-guide/` |
| [ ] | soundproof-subsidy-news-2025 | `/ja/soundproof-room/knowledge/soundproof-subsidy-news-2025/` | `/ja/money/soundproof-subsidy-news-2025/` |
| [ ] | soundproof-subsidy-tokyo-osaka | `/ja/soundproof-room/knowledge/soundproof-subsidy-tokyo-osaka/` | `/ja/money/soundproof-subsidy-tokyo-osaka/` |
| [ ] | soundproof-window-subsidy-2025-guide | `/ja/soundproof-room/knowledge/soundproof-window-subsidy-2025-guide/` | `/ja/money/soundproof-window-subsidy-2025-guide/` |

**→ `creator`（1本）**

| 完了 | slug | 旧URL | 新URL |
|------|------|-------|-------|
| [ ] | vtuber-soundproof-environment-complete-guide | `/ja/soundproof-room/knowledge/vtuber-soundproof-environment-complete-guide/` | `/ja/creator/vtuber-soundproof-environment-complete-guide/` |

**→ `business`（1本）**

| 完了 | slug | 旧URL | 新URL |
|------|------|-------|-------|
| [ ] | privacy-pod-market-growth | `/ja/soundproof-room/knowledge/privacy-pod-market-growth/` | `/ja/business/privacy-pod-market-growth/` |

**→ `diy`（2本）**

| 完了 | slug | 旧URL | 新URL |
|------|------|-------|-------|
| [ ] | danbocchi-floor-protection | `/ja/soundproof-room/knowledge/danbocchi-floor-protection/` | `/ja/diy/danbocchi-floor-protection/` |
| [ ] | diy-wall-soundproofing-room-guide | `/ja/soundproof-room/knowledge/diy-wall-soundproofing-room-guide/` | `/ja/diy/diy-wall-soundproofing-room-guide/` |

**→ `knowledge`（5本）**

| 完了 | slug | 旧URL | 新URL |
|------|------|-------|-------|
| [ ] | biophilic-acoustics | `/ja/soundproof-room/knowledge/biophilic-acoustics/` | `/ja/knowledge/biophilic-acoustics/` |
| [ ] | d-value-truth-and-myths | `/ja/soundproof-room/knowledge/d-value-truth-and-myths/` | `/ja/knowledge/d-value-truth-and-myths/` |
| [ ] | diy-soundproof-truth | `/ja/soundproof-room/knowledge/diy-soundproof-truth/` | `/ja/knowledge/diy-soundproof-truth/` |
| [ ] | neighborhood-noise-seasonal-pattern-statistics | `/ja/soundproof-room/knowledge/neighborhood-noise-seasonal-pattern-statistics/` | `/ja/knowledge/neighborhood-noise-seasonal-pattern-statistics/` |
| [ ] | noise-complaint-legal-precedent-manual | `/ja/soundproof-room/knowledge/noise-complaint-legal-precedent-manual/` | `/ja/knowledge/noise-complaint-legal-precedent-manual/` |

---

### 2-D. soundproof-room/solution → 8ファイル（Phase 2分）

**→ `diy`（3本）**

| 完了 | slug | 旧URL | 新URL |
|------|------|-------|-------|
| [ ] | diy-internal-window-road-noise-reduction | `/ja/soundproof-room/solution/diy-internal-window-road-noise-reduction/` | `/ja/diy/diy-internal-window-road-noise-reduction/` |
| [ ] | diy-refrigeration-noise-reduction | `/ja/soundproof-room/solution/diy-refrigeration-noise-reduction/` | `/ja/diy/diy-refrigeration-noise-reduction/` |
| [ ] | diy-soundproof-ventilation-heat-exhaust | `/ja/soundproof-room/solution/diy-soundproof-ventilation-heat-exhaust/` | `/ja/diy/diy-soundproof-ventilation-heat-exhaust/` |

**→ `knowledge`（2本）**

| 完了 | slug | 旧URL | 新URL |
|------|------|-------|-------|
| [ ] | absorption-vs-soundproofing-materials | `/ja/soundproof-room/solution/absorption-vs-soundproofing-materials/` | `/ja/knowledge/absorption-vs-soundproofing-materials/` |
| [ ] | mental-health-benefits-of-silence | `/ja/soundproof-room/solution/mental-health-benefits-of-silence/` | `/ja/knowledge/mental-health-benefits-of-silence/` |

**→ `money`（2本）**

| 完了 | slug | 旧URL | 新URL |
|------|------|-------|-------|
| [ ] | musician-soundproof-loan-strategy | `/ja/soundproof-room/solution/musician-soundproof-loan-strategy/` | `/ja/money/musician-soundproof-loan-strategy/` |
| [ ] | telework-soundproof-loan-strategy | `/ja/soundproof-room/solution/telework-soundproof-loan-strategy/` | `/ja/money/telework-soundproof-loan-strategy/` |

**→ `business`（1本）**

| 完了 | slug | 旧URL | 新URL |
|------|------|-------|-------|
| [ ] | workbooth-office-soundproof-trend | `/ja/soundproof-room/solution/workbooth-office-soundproof-trend/` | `/ja/business/workbooth-office-soundproof-trend/` |

---

### 2-E. soundproof-rental/knowledge → 2ファイル（Phase 2分）

**→ `creator`（2本）**

| 完了 | slug | 旧URL | 新URL |
|------|------|-------|-------|
| [ ] | bourentakl-streamer-settingsetubi | `/ja/soundproof-rental/knowledge/bourentakl-streamer-settingsetubi/` | `/ja/creator/bourentakl-streamer-settingsetubi/` |
| [ ] | streamer-rental-selection-guide | `/ja/soundproof-rental/knowledge/streamer-rental-selection-guide/` | `/ja/creator/streamer-rental-selection-guide/` |

---

### 2-F. soundproof-rental/solution → 5ファイル（Phase 2分）

**→ `knowledge`（1本）**

| 完了 | slug | 旧URL | 新URL |
|------|------|-------|-------|
| [ ] | vibration-reduction-science | `/ja/soundproof-rental/solution/vibration-reduction-science/` | `/ja/knowledge/vibration-reduction-science/` |

**→ `creator`（2本）**

| 完了 | slug | 旧URL | 新URL |
|------|------|-------|-------|
| [ ] | soundproof-rental-life-streamer | `/ja/soundproof-rental/solution/soundproof-rental-life-streamer/` | `/ja/creator/soundproof-rental-life-streamer/` |
| [ ] | streamer-soundproof-room-comprehensive-guide | `/ja/soundproof-rental/solution/streamer-soundproof-room-comprehensive-guide/` | `/ja/creator/streamer-soundproof-room-comprehensive-guide/` |

**→ `diy`（1本）**

| 完了 | slug | 旧URL | 新URL |
|------|------|-------|-------|
| [ ] | treadmill-apartment-soundproofing-layering | `/ja/soundproof-rental/solution/treadmill-apartment-soundproofing-layering/` | `/ja/diy/treadmill-apartment-soundproofing-layering/` |

**→ `business`（1本）**

| 完了 | slug | 旧URL | 新URL |
|------|------|-------|-------|
| [ ] | owner-soundproof-renovation-investment-strategy-2026 | `/ja/soundproof-rental/solution/owner-soundproof-renovation-investment-strategy-2026/` | `/ja/business/owner-soundproof-renovation-investment-strategy-2026/` |

### 2 完了後の後処理
- [ ] 空になったディレクトリを削除（`soundproof-room/diy/`・`soundproof-rental/diy/`）
- [ ] `npx astro check` でエラーがないことを確認
- [ ] `pnpm build` でビルドが通ることを確認

---

## Phase 3 — Tier 1 フラット化（39ファイル・高リスク）

> `soundproof-room` と `soundproof-rental` のサブカテゴリ層を廃止する。
> **既存SEO評価が高い記事を含む。必ずリダイレクトを追加してから移動すること。**

### 3-A. soundproof-room/knowledge → soundproof-room（8ファイル）

| 完了 | slug | 旧URL | 新URL |
|------|------|-------|-------|
| [ ] | bouon-dchiseinou-meyasu | `/ja/soundproof-room/knowledge/bouon-dchiseinou-meyasu/` | `/ja/soundproof-room/bouon-dchiseinou-meyasu/` |
| [ ] | bouon-size-choice | `/ja/soundproof-room/knowledge/bouon-size-choice/` | `/ja/soundproof-room/bouon-size-choice/` |
| [ ] | daiwa-house-jiyuku-soundproof-review | `/ja/soundproof-room/knowledge/daiwa-house-jiyuku-soundproof-review/` | `/ja/soundproof-room/daiwa-house-jiyuku-soundproof-review/` |
| [ ] | hsp-soundproof-curtain-guide | `/ja/soundproof-room/knowledge/hsp-soundproof-curtain-guide/` | `/ja/soundproof-room/hsp-soundproof-curtain-guide/` |
| [ ] | million-yen-soundproof-room-professional | `/ja/soundproof-room/knowledge/million-yen-soundproof-room-professional/` | `/ja/soundproof-room/million-yen-soundproof-room-professional/` |
| [ ] | nitori-soundproof-acoustic-guide | `/ja/soundproof-room/knowledge/nitori-soundproof-acoustic-guide/` | `/ja/soundproof-room/nitori-soundproof-acoustic-guide/` |
| [ ] | otodasu-voice-chat-test | `/ja/soundproof-room/knowledge/otodasu-voice-chat-test/` | `/ja/soundproof-room/otodasu-voice-chat-test/` |
| [ ] | soundproof-room-budget-selection-guide | `/ja/soundproof-room/knowledge/soundproof-room-budget-selection-guide/` | `/ja/soundproof-room/soundproof-room-budget-selection-guide/` |

---

### 3-B. soundproof-room/solution → soundproof-room（11ファイル）

| 完了 | slug | 旧URL | 新URL |
|------|------|-------|-------|
| [ ] | bouon-humidifier-comparison | `/ja/soundproof-room/solution/bouon-humidifier-comparison/` | `/ja/soundproof-room/bouon-humidifier-comparison/` |
| [ ] | budget-soundproof-booth-comparison | `/ja/soundproof-room/solution/budget-soundproof-booth-comparison/` | `/ja/soundproof-room/budget-soundproof-booth-comparison/` |
| [ ] | night-practice-soundproof-guide | `/ja/soundproof-room/solution/night-practice-soundproof-guide/` | `/ja/soundproof-room/night-practice-soundproof-guide/` |
| [ ] | proofroom-humidity-airconditionlist | `/ja/soundproof-room/solution/proofroom-humidity-airconditionlist/` | `/ja/soundproof-room/proofroom-humidity-airconditionlist/` |
| [ ] | proofroom-soudmore-manual | `/ja/soundproof-room/solution/proofroom-soudmore-manual/` | `/ja/soundproof-room/proofroom-soudmore-manual/` |
| [ ] | sleep-quality-soundproof-room | `/ja/soundproof-room/solution/sleep-quality-soundproof-room/` | `/ja/soundproof-room/sleep-quality-soundproof-room/` |
| [ ] | sound-reduction-simulation | `/ja/soundproof-room/solution/sound-reduction-simulation/` | `/ja/soundproof-room/sound-reduction-simulation/` |
| [ ] | soundproof-performance-drum | `/ja/soundproof-room/solution/soundproof-performance-drum/` | `/ja/soundproof-room/soundproof-performance-drum/` |
| [ ] | soundproof-room-demolition-guide | `/ja/soundproof-room/solution/soundproof-room-demolition-guide/` | `/ja/soundproof-room/soundproof-room-demolition-guide/` |
| [ ] | soundproof-room-large-size | `/ja/soundproof-room/solution/soundproof-room-large-size/` | `/ja/soundproof-room/soundproof-room-large-size/` |
| [ ] | soundproof-room-pollen-protection | `/ja/soundproof-room/solution/soundproof-room-pollen-protection/` | `/ja/soundproof-room/soundproof-room-pollen-protection/` |

---

### 3-C. soundproof-rental/knowledge → soundproof-rental（9ファイル）

| 完了 | slug | 旧URL | 新URL |
|------|------|-------|-------|
| [ ] | bouon-rental-market-guide | `/ja/soundproof-rental/knowledge/bouon-rental-market-guide/` | `/ja/soundproof-rental/bouon-rental-market-guide/` |
| [ ] | bouonrental-market-research2025 | `/ja/soundproof-rental/knowledge/bouonrental-market-research2025/` | `/ja/soundproof-rental/bouonrental-market-research2025/` |
| [ ] | bourental-syaouseid-choiceindi | `/ja/soundproof-rental/knowledge/bourental-syaouseid-choiceindi/` | `/ja/soundproof-rental/bourental-syaouseid-choiceindi/` |
| [ ] | housing-builder-soundproof-comparison | `/ja/soundproof-rental/knowledge/housing-builder-soundproof-comparison/` | `/ja/soundproof-rental/housing-builder-soundproof-comparison/` |
| [ ] | musision-comprehensive-guide | `/ja/soundproof-rental/knowledge/musision-comprehensive-guide/` | `/ja/soundproof-rental/musision-comprehensive-guide/` |
| [ ] | owner-renovation-musician-24h-practice-strategy | `/ja/soundproof-rental/knowledge/owner-renovation-musician-24h-practice-strategy/` | `/ja/soundproof-rental/owner-renovation-musician-24h-practice-strategy/` |
| [ ] | pet-noise-soundproof-measures | `/ja/soundproof-rental/knowledge/pet-noise-soundproof-measures/` | `/ja/soundproof-rental/pet-noise-soundproof-measures/` |
| [ ] | rental-caution-cello | `/ja/soundproof-rental/knowledge/rental-caution-cello/` | `/ja/soundproof-rental/rental-caution-cello/` |
| [ ] | rental-price-index-13cities-soundproof | `/ja/soundproof-rental/knowledge/rental-price-index-13cities-soundproof/` | `/ja/soundproof-rental/rental-price-index-13cities-soundproof/` |

---

### 3-D. soundproof-rental/solution → soundproof-rental（11ファイル）

| 完了 | slug | 旧URL | 新URL |
|------|------|-------|-------|
| [ ] | apartment-weight-limit-500kg | `/ja/soundproof-rental/solution/apartment-weight-limit-500kg/` | `/ja/soundproof-rental/apartment-weight-limit-500kg/` |
| [ ] | child-rearing-soundproof-pillar | `/ja/soundproof-rental/solution/child-rearing-soundproof-pillar/` | `/ja/soundproof-rental/child-rearing-soundproof-pillar/` |
| [ ] | home-theater-karaoke-soundproof-design | `/ja/soundproof-rental/solution/home-theater-karaoke-soundproof-design/` | `/ja/soundproof-rental/home-theater-karaoke-soundproof-design/` |
| [ ] | noise-canceling-headphones-sleep | `/ja/soundproof-rental/solution/noise-canceling-headphones-sleep/` | `/ja/soundproof-rental/noise-canceling-headphones-sleep/` |
| [ ] | noise-complaint-landlord-negotiation-guide | `/ja/soundproof-rental/solution/noise-complaint-landlord-negotiation-guide/` | `/ja/soundproof-rental/noise-complaint-landlord-negotiation-guide/` |
| [ ] | remote-work-family-harmony-soundproof | `/ja/soundproof-rental/solution/remote-work-family-harmony-soundproof/` | `/ja/soundproof-rental/remote-work-family-harmony-soundproof/` |
| [ ] | rental-permission-proposal-template | `/ja/soundproof-rental/solution/rental-permission-proposal-template/` | `/ja/soundproof-rental/rental-permission-proposal-template/` |
| [ ] | rental-proofroom-contractcheck | `/ja/soundproof-rental/solution/rental-proofroom-contractcheck/` | `/ja/soundproof-rental/rental-proofroom-contractcheck/` |
| [ ] | rental-unit-soundproof-room | `/ja/soundproof-rental/solution/rental-unit-soundproof-room/` | `/ja/soundproof-rental/rental-unit-soundproof-room/` |
| [ ] | report-japan-soundproof-rental-market-needs | `/ja/soundproof-rental/solution/report-japan-soundproof-rental-market-needs/` | `/ja/soundproof-rental/report-japan-soundproof-rental-market-needs/` |
| [ ] | soundproof-room-installation-conditions | `/ja/soundproof-rental/solution/soundproof-room-installation-conditions/` | `/ja/soundproof-rental/soundproof-room-installation-conditions/` |

### 3 完了後の後処理
- [ ] 空になったサブカテゴリディレクトリをすべて削除（`knowledge/`・`solution/`・`diy/`・`others/`）
- [ ] `contentCategories.ts` の `column` を削除（空になった場合）
- [ ] `npx astro check` でエラーがないことを確認
- [ ] `pnpm build` & 全リダイレクトの動作確認（代表URLで301確認）
- [ ] Google Search Console でURL変更ツールを使用

---

## 各ファイル移動時の標準手順

```
1. src/content/ja/{new-category}/{slug}/ ディレクトリを作成
2. src/content/ja/{old-category}/{subcategory}/{slug}/index.mdx を移動
3. frontmatter の category: を新しい値に更新
4. frontmatter の subcategory: フィールドを削除（任意）
5. astro.config.mjs の redirects に追加:
   '/{old-URL}/': '/{new-URL}/',
6. pnpm build でビルドエラーがないことを確認
```

---

*更新: 2026-06-01 / 総移行ファイル数: 139*
