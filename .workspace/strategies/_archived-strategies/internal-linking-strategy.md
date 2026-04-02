# 内部リンク最適化戦略

## 目標

- 各記事に最低3〜5個の関連内部リンクを設置
- カテゴリ間のクロスリンク強化
- ユーザー滞在時間30%向上
- トピッククラスターモデルの構築

## トピッククラスター構造

### クラスター1: 防音室

**ピラーページ（作成予定）**: 「防音室完全ガイド2025」

**クラスターコンテンツ**:

- 価格関連: bouon-price-souba.md, bouproof-roomchoice-price.md, soundproof-room-price-complete-guide-2025
- DIY関連: closet-diy-soundproof-room.md, diy-soundproofing-tips.md, soundproof-room-diy-complete-manual
- 選び方: bouon-osusume-hikaku.md, bouon-size-choice.md, proofroom-choiuce-checklist.md
- メンテナンス: bouon-mainta-tenken.md, bouoproof-maintnace.md
- 設備: bouon-kanki-taisaku.md, proofroom-aircondition-select.md

### クラスター2: 防音賃貸

**ピラーページ（作成予定）**: 「防音賃貸完全ガイド2025」

**クラスターコンテンツ**:

- 地域別: tokyo-soundproof-rental-summary.md, osaka-soundproof-rental-guide.md, 他地域
- 契約関連: rental-proofroom-contractcheck.md, bourenatal-sinsa-imagipoint.md
- 内見: bourenatal-naikencheck.md
- 比較: bourental-ippanrantal.md, bourental-merit-demerit.md

### クラスター3: 配信・クリエイター向け

**ピラーページ（作成予定）**: 「配信者向け防音環境完全ガイド2025」

**クラスターコンテンツ**:

- VTuber: vtuber-soundproof-environment-complete-guide, vtuber-proofroom-knowledge.md
- ゲーマー: gaming-streaming-floor-noise-control.md, gamer-bouon-room-select.md
- 配信環境: one-room-streaming-soundproof.md, streamer-proofroom-setting.md
- 機材: keyboard-sound-streaming-soundproof-guide.md, streaming-noise-appliance-soundproof-guide.md

### クラスター4: 防音の実用ガイド

**ピラーページ（既存）**: 各種実用ガイド記事

**クラスターコンテンツ**:

- 騒音対策: noise-complaint-solution.md, neighborhood-noise-seasonal-pattern-statistics.md
- 在宅ワーク: remote-work-noisy-solution-soundproof.md, telework-concentration-noise-soundproof.md
- 補助金: soundproof-subsidy-check-guide, soundproof-subsidy-news-2025.md

### クラスター5: 市場・ニュース

**ピラーページ**: 市場分析記事

**クラスターコンテンツ**:

- 市場分析: grobal-soundproof-marketcheck.md, bouonrental-market-research2025.md
- トレンド: bouontech-trendnews2025.md, acoustic-material-new-trend-2025.md

## 内部リンク設置ルール

### 1. 関連記事セクション

各記事の末尾（まとめの後）に「関連リンク」または「関連記事」セクションを設置

**フォーマット**:

```markdown
## 関連リンク

- → **関連記事**：「[記事タイトル]({{< relref "slug" >}})」
- → **比較記事**：「[記事タイトル]({{< relref "slug" >}})」
- → **実用記事**：「[記事タイトル]({{< relref "slug" >}})」
- → **基礎知識**：「[記事タイトル]({{< relref "slug" >}})」
- → **選び方**：「[記事タイトル]({{< relref "slug" >}})」
```

### 2. 本文中の文脈リンク

本文中で関連トピックに言及する際、自然にリンクを挿入

**例**:

- 「詳しくは[防音室の選び方チェックリスト]({{< relref "proofroom-choiuce-checklist" >}})をご覧ください」
- 「[防音材料の選び方]({{< relref "soundproof-materials-selection-guide" >}})も参考になります」

### 3. カテゴリ間クロスリンク

異なるカテゴリの記事へのリンクを意識的に追加

**例**:

- 防音室記事 → 防音賃貸記事: 「賃貸でも[防音室の設置は可能]({{< relref "rental-proofroom-contractcheck" >}})です」
- 配信者向け記事 → DIY記事: 「予算を抑えたいなら[クローゼットDIY]({{< relref "closet-diy-soundproof-room" >}})も検討できます」

## 優先実装記事リスト

### Phase 1: 高トラフィック記事（優先度: 最高）

- [x] 1. bouon-price-souba.md - 価格相場記事
- [x] 2. soundproof-room-price-complete-guide-2025 - 価格完全ガイド
- [x] 3. closet-diy-soundproof-room.md - クローゼットDIY
- [x] 4. gaming-streaming-floor-noise-control.md - ゲーム配信床静音化
- [x] 5. one-room-streaming-soundproof.md - ワンルーム配信

### Phase 2: 配信・クリエイター向け（優先度: 高）

6. vtuber-soundproof-environment-complete-guide - VTuber完全ガイド
7. keyboard-sound-streaming-soundproof-guide.md - キーボード静音
8. gamer-bouon-room-select.md - ゲーマー向け防音室
9. small-soundproof-room-streaming-guide.md - 小型防音室
10. footstep-vibration-soundproof-mat-guide.md - 足音振動対策

### Phase 3: 防音賃貸記事（優先度: 中）

11. tokyo-soundproof-rental-summary.md - 東京防音賃貸
12. osaka-soundproof-rental-guide.md - 大阪防音賃貸
13. rental-proofroom-contractcheck.md - 契約チェック
14. bourental-ippanrantal.md - 一般賃貸との違い

### Phase 4: DIY・実用ガイド（優先度: 中）

15. diy-soundproofing-tips.md - DIY防音テクニック
16. soundproof-room-diy-complete-manual - DIY完全マニュアル
17. noise-complaint-solution.md - 騒音トラブル防止
18. remote-work-noisy-solution-soundproof.md - 在宅勤務騒音解決

## 内部リンク関係マッピング

### 価格関連記事の内部リンク

**bouon-price-souba.md** → リンク先:

- bouproof-roomchoice-price.md (予算別選び方)
- soundproof-room-budget-selection-guide (予算別ガイド)
- bouon-osusume-hikaku.md (おすすめ比較)
- rental-vs-purchase-soundproof-room (レンタルvs購入)

### DIY関連記事の内部リンク

**closet-diy-soundproof-room.md** → リンク先:

- diy-soundproofing-tips.md (DIYテクニック)
- danbotchi-vs-diy-soundproof-room.md (だんぼっちvs自作)
- soundproof-materials-selection-guide (材料選び)
- diy-soundproof-room-failures-solutions (失敗と対策)

### 配信者向け記事の内部リンク

**gaming-streaming-floor-noise-control.md** → リンク先:

- footstep-vibration-soundproof-mat-guide.md (防音マット)
- one-room-streaming-soundproof.md (ワンルーム配信)
- keyboard-sound-streaming-soundproof-guide.md (キーボード静音)
- streamer-proofroom-setting.md (配信環境設定)

## 実装チェックリスト

### 記事ごとのチェック項目

- [ ] 関連リンクセクションが存在する
- [ ] 最低3個の内部リンクがある
- [ ] カテゴリ内リンクが2個以上ある
- [ ] カテゴリ間クロスリンクが1個以上ある
- [ ] リンクテキストが適切（キーワード含む）
- [ ] Hugo shortcode形式で記載されている: `{{< relref "slug" >}}`

### トピッククラスター構造のチェック

- [ ] ピラーページが存在する
- [ ] クラスターコンテンツからピラーページへのリンクがある
- [ ] ピラーページから各クラスターコンテンツへのリンクがある
- [ ] クラスター内のコンテンツ同士もリンクされている

## 実装スケジュール

### Week 1-2: Phase 1実装

- 高トラフィック記事5記事に内部リンク追加
- 各記事に3〜5個のリンク設置

### Week 3-4: Phase 2実装

- 配信・クリエイター向け記事10記事に内部リンク追加
- カテゴリ間クロスリンク強化

### Week 5-6: Phase 3-4実装

- 残りの記事に内部リンク追加
- トピッククラスター構造の完成

### Week 7-8: 検証・改善

- Google Analytics でユーザー回遊率確認
- 滞在時間の変化を測定
- 改善が必要な箇所の特定と修正

## 成功指標

### KPI

- 平均ページ滞在時間: 2分 → 3分（+50%）
- ページ/セッション: 1.5 → 2.0（+33%）
- 直帰率: 70% → 60%（-10%）
- 内部検索利用率: 向上

### モニタリング

- Google Analytics: 「行動」→「サイトコンテンツ」→「すべてのページ」
- Search Console: 内部リンク数の確認
- ヒートマップツール: リンククリック率の確認
