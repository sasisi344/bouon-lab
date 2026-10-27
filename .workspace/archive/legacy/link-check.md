# link-check：AffiliateCard活用・内部リンクゼロ記事 整理タスク

作成日：2026-06-21
出典：`.workspace/.task/task-list.md` 未整理セクション2項目を実行するための調査・実行計画。

---

## A. AffiliateCard活用が薄い

`src/data/affiliates.ts` 登録17商品のうち、`<AffiliateCard>`で実際に使われているのは7商品のみ。
`<CtaBox>`専用の2商品（`yamaha-avitex`・`kawai-nasal`）を除くと、**8商品が本文未設置のまま**。

### A-1. 設置済み（7商品・対応不要）

| slug | 使用記事数 |
| :--- | :--- |
| `acoustic-panel-felmenon` | 3 |
| `ground-cable-mogami` | 2 |
| `gap-tape-meicyan` | 2 |
| `desktop-absorber` | 1 |
| `pc-fan-vibration-insulator` | 1 |
| `silent-gel-pad-clamworks` | 1 |
| `soundproof-cage-cover-k4` | 1 |

### A-2. CtaBox専用（2商品・対応不要）
`yamaha-avitex` / `kawai-nasal` — CLAUDE.mdのCtaBoxルールにより`<CtaBox>`側で運用済み（[[feedback_ctabox_rule]]）。

### A-3. 未設置8商品 → 本文言及済みの候補記事（要本文確認のうえ設置）

| slug | 商品名 | 言及キーワードで発見した候補記事 |
| :--- | :--- | :--- |
| `danbocchi-wide` / `danbocchi-standard` | だんぼっち ワイド/スタンダード | `business/privacy-pod-market-growth`, `creator/streamer-rental-selection-guide`, `creator/streamer-soundproof-room-comprehensive-guide`, `creator/vtuber-soundproof-environment-complete-guide`, `diy/danbocchi-floor-protection`, `diy/danbotchi-diy-blueprints`, `diy/diy-soundproof-ventilation-heat-exhaust`, `local/sapporo-soundproof-rental-guide`, `money/soundproof-room-price-market`, `soundproof-rental/rental-permission-proposal-template`, `soundproof-rental/rental-unit-soundproof-room`, `soundproof-room/bouon-dchiseinou-meyasu`, `soundproof-room/budget-soundproof-booth-comparison`, `soundproof-room/soundproof-room-budget-selection-guide`（14件・ワイド/スタンダードの型番特定が必要） |
| `otodasu-dx-pro` | OTODASU DX Pro | `business/report-japan-asmr-vtuber-streaming-studio-standard`, `creator/asmr-vtuber-booth-guide`, `creator/streamer-soundproof-room-comprehensive-guide`, `creator/vtuber-soundproof-environment-complete-guide`, `diy/danbocchi-floor-protection`, `diy/diy-soundproof-ventilation-heat-exhaust`, `soundproof-rental/rental-permission-proposal-template`, `soundproof-rental/rental-proofroom-contractcheck`, `soundproof-rental/rental-unit-soundproof-room`, `soundproof-room/bouon-dchiseinou-meyasu`, `soundproof-room/bouon-osusume-hikaku`, `soundproof-room/budget-soundproof-booth-comparison`, `soundproof-room/otodasu-voice-chat-test`, `soundproof-room/shimamura-music-soundproof-room-guide`（14件） |
| `reflection-filter` | 吸音リフレクションフィルター | `creator/asmr-external-noise-elimination`, `creator/bourentakl-streamer-settingsetubi`, `creator/parenting-streamer-soundproof`, `creator/streamer-budget-temp-soundproof`, `creator/streaming-room-layout-guide`, `creator/utaite-vs-streamer-soundproof`（6件） |
| `humidifier-vaporizer-daikin` | ダイキン気化式加湿器 | `soundproof-room/bouon-humidifier-comparison`（1件・本記事のテーマそのもの） |
| `sound-level-meter-pro` | デジタル騒音計 | `creator/streamer-rental-selection-guide`, `knowledge/noise-regulation-update-2025`, `local/sendai-soundproof-rental-guide`, `soundproof-rental/noise-complaint-landlord-negotiation-guide`, `soundproof-room/sound-reduction-simulation`（5件） |
| `防振-mat-piano` | 防振インシュレーター（ピアノ・重量機材） | `creator/game-streamer-sound-types`, `creator/streamer-budget-temp-soundproof`, `creator/streamer-noise-quick-fix`, `creator/streaming-pc-fan-noise-mic`（4件・PC用途は`pc-fan-vibration-insulator`と競合しないか要確認） |
| `booth-workspace` | 個室ワークスペース（簡易個室ブース） | `business/privacy-pod-market-growth`, `knowledge/proofroom-maker-2025productcheck`, `money/telework-soundproof-loan-strategy`（3件） |

**設置基準**（CtaBoxルールに準拠）:
- 商品名・型番に**実質的に言及している箇所**のみに設置（並列比較の一覧表での名前だけの言及は除外）
- 1記事内で同一商品の重複設置はしない
- 既に他商品のAffiliateCard/CtaBoxがある記事は、文脈上自然な別の段落に設置

### A-4. 実施結果（2026-06-21）

**設置（19件）**

| slug | 設置記事 |
| :--- | :--- |
| `danbocchi-standard` | `diy/danbocchi-floor-protection`, `diy/danbotchi-diy-blueprints`, `soundproof-room/budget-soundproof-booth-comparison`, `soundproof-room/soundproof-room-budget-selection-guide` |
| `reflection-filter` | `creator/asmr-external-noise-elimination`, `creator/bourentakl-streamer-settingsetubi`, `creator/parenting-streamer-soundproof`, `creator/streamer-budget-temp-soundproof`, `creator/streaming-room-layout-guide`, `creator/utaite-vs-streamer-soundproof` |
| `humidifier-vaporizer-daikin` | `soundproof-room/bouon-humidifier-comparison` |
| `sound-level-meter-pro` | `knowledge/noise-regulation-update-2025`（JIS C 1509クラス2以上の騒音計を推奨、という本文と完全一致） |
| `booth-workspace` | `business/privacy-pod-market-growth` |
| `防振-mat-piano` | `creator/singer-instrumentalist-stream-soundproof`, `soundproof-rental/owner-renovation-musician-24h-practice-strategy`, `soundproof-room/bouon-dchiseinou-meyasu`, `soundproof-room/night-practice-soundproof-guide`, `soundproof-room/sound-reduction-simulation`（いずれもグランドピアノ・重量機材の床振動対策として言及） |

**見送り**

- `otodasu-dx-pro`（全14候補記事）: 候補記事はすべて「OTODASU II」（〜15万円・-20〜25dB・軽量入門モデル）に言及しているのみで、`affiliates.ts`登録の`otodasu-dx-pro`（吸遮音材36枚付属のプロ仕様・¥149,000〜）に該当する本文記述が存在しない。価格・性能の食い違いが大きく、誤情報になるため設置を見送った。**対応案**: 実際に登場する「OTODASU II」相当のSKUを別途`affiliates.ts`に登録するか、`otodasu-dx-pro`の価格・説明を実態に合わせて見直す必要がある。
- `diy/diy-soundproof-ventilation-heat-exhaust`（だんぼっち候補）: frontmatterのdescription/tagsのみに言及があり、本文（記事の地の文）には「だんぼっち」「OTODASU」が一度も出てこないため見送り。
- `防振-mat-piano`を検討した`creator/game-streamer-sound-types`・`creator/streamer-budget-temp-soundproof`・`creator/streamer-noise-quick-fix`・`creator/streaming-pc-fan-noise-mic`: 本文の「防振インシュレーター」はPC・スピーカーの軽量振動対策で、登録商品（ピアノ等400kg超向け）と用途が異なるため見送り（PC用途は既存の`pc-fan-vibration-insulator`が適合）。
- `knowledge/proofroom-maker-2025productcheck`・`money/telework-soundproof-loan-strategy`（booth-workspace候補）: 前者はプロ向け高額モデルの比較表で文脈不一致、後者は「ワークスペース拡張」がリフォーム文脈で商品紹介ではないため見送り。
- `creator/streamer-rental-selection-guide`・`local/sendai-soundproof-rental-guide`・`soundproof-rental/noise-complaint-landlord-negotiation-guide`・`soundproof-room/sound-reduction-simulation`（sound-level-meter-pro候補の一部）: 「携帯騒音計」「スマホの騒音計アプリ」など、本文が指しているのはアプリ/簡易計測であり、登録商品（JIS C 1509クラス2の検定合格品）とは別物のため見送り。
- だんぼっち・OTODASU双方で候補に挙がっていたが並列比較表での名前列挙のみだった記事（`creator/streamer-rental-selection-guide`、`creator/streamer-soundproof-room-comprehensive-guide`、`creator/vtuber-soundproof-environment-complete-guide`、`local/sapporo-soundproof-rental-guide`、`money/soundproof-room-price-market`、`soundproof-rental/rental-permission-proposal-template`、`soundproof-rental/rental-unit-soundproof-room`、`soundproof-room/bouon-dchiseinou-meyasu`、`business/report-japan-asmr-vtuber-streaming-studio-standard`、`creator/asmr-vtuber-booth-guide`、`soundproof-rental/rental-proofroom-contractcheck`、`soundproof-room/bouon-osusume-hikaku`、`soundproof-room/otodasu-voice-chat-test`、`soundproof-room/shimamura-music-soundproof-room-guide`）: 設置基準により対象外。

---

## B. 内部リンクゼロ記事（76/169・45%）

`](/ja/` を本文に含まない記事を機械抽出（2026-06-21時点）。カテゴリ別件数:

| カテゴリ | 件数 |
| :--- | :--- |
| soundproof-room | 18 |
| diy | 17 |
| soundproof-rental | 10 |
| business | 9 |
| money | 8 |
| knowledge | 7 |
| creator | 7 |
| **合計** | **76** |

`local`カテゴリは0件（既に相互リンク済み）。

### 対応方針
- 各記事に**最低1本**、文脈に沿った内部リンクを本文中に追加する。
- リンク先は`.workspace/.data-set/interlink-postlist.md`の実在URLから選定し、**既存ハブ記事（comprehensive-guide系・各カテゴリの集約記事）を優先**して誘導する。
- アンカーテキストは抽象語（「こちら」等）禁止、リンク先の主KWを含める（`internal-link-ops`スキル規約）。
- 全件リストは `/tmp/zero_links.txt`（本セッションのみ・再現は次コマンド）:
  ```
  comm -23 <(find src/content/ja -name index.mdx | sort) <(grep -rl '](/ja/' src/content/ja --include=index.mdx | sort)
  ```

### 実行バッチ分割（fork実行）
1. **Batch 1**: `soundproof-room`(18) + `soundproof-rental`(10) = 28件
2. **Batch 2**: `diy`(17) + `knowledge`(7) = 24件
3. **Batch 3**: `business`(9) + `money`(8) + `creator`(7) = 24件
4. **Affiliateバッチ**: 上記A-3の8商品×候補記事の本文確認・設置

---

## 進捗

- [x] A. AffiliateCard設置（8商品中6商品・19件設置／`otodasu-dx-pro`は仕様不一致で見送り、要`affiliates.ts`側の対応検討）
- [x] B-1. soundproof-room + soundproof-rental 内部リンク追加（28記事すべてに本文内リンクを追加。既存の未リンク参照テキスト（「→ 防音室の価格相場を詳しく見る」等）を実リンク化したものを含む。`soundproof-room`/`soundproof-rental`配下で再計測し0件を確認）
- [x] B-2. diy + knowledge 内部リンク追加（24記事に内部リンク追加。うち5記事は既存の未リンク参照テキスト「詳細は〜で解説しています」「→ 関連記事：〜」を実リンク化、2記事は`/ja/`プレフィックス欠落・存在しないslugを指す壊れたリンクを修正。diy/knowledge配下で再計測し0件を確認）
- [x] B-3. business + money + creator 内部リンク追加（24記事に内部リンク追加。うち`creator/streamer-soundproof-room-comprehensive-guide`は既に`<SmartLink>`で11本のリンクを持つ既存ハブ記事で、markdown形式`](/ja/`の検出漏れによる誤判定だったため1本のみ追加）
