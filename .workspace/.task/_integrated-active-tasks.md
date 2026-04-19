# 統合タスク（実行用）

更新日: 2026-04-14

このファイルは `.workspace/.task` の未完了タスクのみを統合した実行リストです。

---

## ハブ記事戦略・コレクション整理

### A. 防音室（一般）ハブ：タイトル更新

- [x] `solutions/unit-rooms/ja/soundproof-room-complete-guide-2025/index.mdx`
  - title を「2025」→「2026」に変更、description を更新（2026-04-20）
  - `soundproof-room-types` 未作成のため役割重複整理はスキップ
  - 主要サテライトへの内部リンクは本文内に既存（追加不要）

### B. Phase 2-A：22記事を `knowledge/ja/` → `solutions/unit-rooms/ja/` に移動 ✅ 完了 (2026-04-20)

移動済み（22記事）・category: "solutions" に更新・astro check エラーなし確認済み:

- 運用(8): bouon-kanki-taisaku, proof-doorchoice-setting, proofroom-aircondition-select, proofroom-humidity-airconditionlist, proofroom-lowsound-ventilation, proofroom-lowsound-windsoundnone, proofroom-soudmore-manual, smart-air-con-installation-small-rooms
- スペック(6): apartment-weight-limit-500kg, rt60-reverberation-measurement-guide, soundproof-app-review-2026, soundproof-room-trial-checkpoints, soundproof-room-gap-caulking, temperature-humidity-management, soundproof-room-pollen-protection
- 資産/価格(4): corporate-soundproof-tax-depreciation, soundproof-asset-sharing, rental-vs-purchase-soundproof-room, telework-soundproof-loan-strategy
- ブランド(1): otodasu-voice-chat-test
- 用途別(2): wagakki-soundproof-room-guide, japanese-instrument-soundproof

### C. Phase 2-B：23記事を `knowledge/ja/` → `solutions/custom/ja/` に移動 ✅ 完了 (2026-04-20)

事前条件: egg-carton重複・subsidy-systemタイポはすでにdraft: true済みで解消確認。
移動済み（18記事）・category: "solutions" に更新・astro check エラーなし確認済み:

- DIY系(8): danbocchi-floor-protection, danbotchi-diy-blueprints, diy-led-acoustic-panels, diy-limitation-low-frequency-noise, diy-refrigeration-noise-reduction, diy-vocal-soundproof-mask, hsp-soundproof-curtain-guide, nitori-soundproof-curtain-tension-rod-danger
- 資材系(9): absorption-vs-insulation, absorption-vs-soundproofing-materials, acoustic-panel-placement, bass-trap-installation-guide, sound-insulation-vs-absorption, soundproof-sheet-size-used-market-guide, why-your-80-percent-rug-rule-fails, 100yen-gap-tape-soundproof-verification, acoustic-material-new-trend-2025
- 規制/補助金(1): building-code-reform-2025-soundproof
- 補助金11記事は以前すでにcustom/jaへ移動済みであったため今回対象外

### D. Phase 2-C：22記事を `knowledge/ja/` → `use-case/` サブカテゴリに移動 ✅ 完了 (2026-04-20)

移動済み（19記事）・category: "use-case" + subcategory 設定・astro check 0 errors 確認済み:

- streamer-tech(6): asmr-vtuber-booth-guide, cable-noise-ground-loop-prevention, gamesteram-proofroom-soudflash, shared-streaming-studio-growth-pricing-utilization, soundproof-solution-tier-map-streamer, steram-soudncondition-check
- musician-pro(5): podcast-acoustic-design, asmr-soundproof-sanctuary, self-built-booth-ventilation, wagakki-soundproof-room-guide*, japanese-instrument-soundproof* (\*Phase 2-A で誤って unit-rooms に入れたため修正移動)
- living-health(8): footstep-noise-white-noise-machine-solution, footstep-vibration-soundproof-mat-guide, noise-complaint-legal-precedent-manual, noise-complaint-police-prevention-guide, preventive-neighborhood-greeting-noise-test, rental-permission-proposal-template, treadmill-apartment-soundproofing-layering, wooden-apartment-soundproof-guide

### E. Phase 3：カニバリゼーション整理

- [x] `soundproof-room-price-market` → 「サイズ別価格相場2026｜0.5畳〜4.5畳の実勢価格と隠れコスト完全比較」に更新 (2026-04-20)
- [x] `bouon-price-souba` → 「資産価値とROI2026｜実質月額コスト・リセール益・損益分岐点を全解剖」に更新 (2026-04-20)
- [x] `soundproof-subsidy-*` 記事群の重複整理 (2026-04-20)
  - `soundproof-subsidy-three-cases` → draft: true（soundproof-subsidy-check-guide と内容重複）
  - `soundproof-subsidy-system-list` → 「制度一覧・種類・助成額の横断比較」に特化しタイトル更新
  - `bouon-construction-subsidy` → 「目的別申請ガイド・業者選び」に特化しタイトル更新
  - `soundproof-subsiproof-subsidy-system-list` → 既存 draft: true で解消済み

---

## P0: 内部リンク最適化 ✅ 完了 (2026-04-20)

### 1) ホワイトペーパー → オーナー戦略への導線追加

- [x] `report-japan-soundproof-unit-resale-value-simulation` にオーナー戦略・ROIシミュレーターへの文脈リンク追加
- [x] `report-japan-b2b-soundproof-unit-innovation-roi` にオーナー戦略・申請テンプレ・ROIシミュレーターへの文脈リンク3本追加

### 2) 公開前の内部リンク品質チェックを標準運用化

- [x] `.agents/bouon-writer.md` セクション4に「Internal Link Quality Checklist」を追加（6項目ゲート + 3導線構成表）

### 3) 回遊改善

- [x] ハブ記事（soundproof-room-complete-guide-2025）末尾を3導線構成に全面リライト
  - 在宅ワーク導線: 入口3 + 比較2 + 実践2 + CTA1（絶対パスリンク）
  - 楽器練習導線: 入口3 + 比較2 + 実践2 + CTA1（絶対パスリンク）
  - 配信導線: 入口3 + 比較2 + 実践2 + CTA1（絶対パスリンク）
  - 旧「主要カテゴリへのリンク」（相対パス・重複）を削除
- [x] `en` 版での同一導線構造の整備 ✅ 完了 (2026-04-20)

---

## P1: 収益・検索戦略コンテンツ

### 1) 金融導線（防音室ローン戦略）

- [ ] 高額商品系4記事に「月額シミュレーション + ローン導線」セクションを追加する
  - `solutions/unit-rooms/ja/million-yen-soundproof-room-professional/index.mdx`
  - `solutions/unit-rooms/ja/yamaha-avitecs-cefine-ns-guide/index.mdx`
  - `solutions/unit-rooms/ja/kawai-nasal-soundproof-room-guide/index.mdx`
  - `knowledge/ja/bouon-price-souba/index.mdx`
- [ ] 新規記事 `soundproof-room-loan-resale-value` を作成する
- [ ] ASP比較表（リフォームローン/フリーローン/楽器ローン）を整備する
- [ ] 実質月額モデル（残価差引）を図表化する
- [ ] 税務・控除の適用可否を一次情報ベースで追記する

### 2) ブランドクエリ・ファンアウト

- [ ] 5つの核KWから15-20記事のファンアウトマップを確定する
- [ ] レポート導線（Reports層）を深化レイヤーとして設計する
- [ ] 優先3記事（加湿器/換気/資産価値）を下書き作成する
- [ ] 一般記事から深化コンテンツへの誘導パーツをテンプレート実装する

### 3) データ公開戦略

- [ ] 各リサーチデータを公開テンプレートに沿ってMarkdown化する
- [ ] 10記事の公開スケジュール（週1 x 10週）を作成する
- [ ] 記事末尾のCSV/PDFダウンロード導線（リード獲得）を設計する

### 4) 多言語展開

- [ ] 都市別データ（東京/名古屋/大阪/福岡/仙台）を更新する
- [ ] 繁体字中国語・韓国語のローカライズ検証を実施する
- [ ] 翻訳比率の上限（10-20%）を運用ルールとして固定する

---

## 運用メモ

- 実行中タスクはこのファイルだけを更新する
- 新規アイデアは `_integrated-backlog.md` に追記する
