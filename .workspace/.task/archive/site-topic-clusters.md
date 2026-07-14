# サイト全体トピッククラスタ・カニバリ調査（2026-06-24作成、2026-07-10更新）

`creator-topic-clusters.md`はcreatorカテゴリ（45記事）のみを対象にした調査。本ファイルはサイト全体（`src/content/ja/`の残り7カテゴリ：business15・diy25・knowledge22・local17・money22・soundproof-rental26・soundproof-room31、合計158記事）をクラスタ化し、カテゴリ内およびカテゴリ横断のカニバリリスクを洗い出す。

2026-07-10更新：初版（2026-06-24、132記事）以降に追加された26記事（07-05カテゴリ偏り是正＋ペルソナH、07-08深掘り3本、07-09〜10 QFO再調査8本ほか）を各クラスタ表に反映し、新規のカニバリ要注意ペアと提言を追記した。追加記事には ★ を付す。

`task-list.md`で既に「対応済み」と記録済みの既知ペアは重複報告しない：
- `bouon-rental-market-guide` / `bouonrental-market-research2025`（相互リンク済み）
- `diy-soundproof-room-cost-breakdown`（重複と判定し削除済み、現存しない）

---

## カテゴリ内クラスタ

### business（15記事）

| クラスタ | 記事数 | スラッグ |
|---|---|---|
| ① 市場動向レポート（グローバル・アジア・国内規模・業界ニュース・ESG） | 5 | `global-soundproof-market-trends`・`japan-bouonproof-marketnextasia`・★`japan-soundproof-market-size`・`soundproof-industry-news-2026-06`・`soundproof-market-esg-trend` |
| ② 配信スタジオ・クリエイター経済ビジネス | 3 | `bouonrental-areasec-newbusiness`・`report-japan-asmr-vtuber-streaming-studio-standard`・`shared-streaming-studio-growth-pricing-utilization` |
| ③ オーナーの防音リノベ投資戦略 | 2 | `owner-soundproof-renovation-investment-strategy-2026`・`soundproof-renovation-cost-outlook-2026` |
| ④ BtoB提案・オフィスWeb会議 | 3 | `datacenter-soundproof-technology-facts`・`web-meeting-voice-soundleak-prevention`・`workbooth-office-soundproof-trend` |
| ⑤ 個室ブース・スペース活用ビジネス | 2 | `privacy-pod-market-growth`・`soundproof-space-business-guide` |

**最重要カニバリ**：④の`web-meeting-voice-soundleak-prevention`と`workbooth-office-soundproof-trend`はどちらも「Web会議の声漏れ→パーティション・壁での対策」がテーマでタイトル文体（煽り型見出し）も酷似。差別化軸（心理的リミッター訴求 vs 3層構造の具体施工法）はあるが、検索意図のカニバリリスクは高い。相互リンクの有無を要確認。

**中程度**：③の2記事は単独でも近接（投資判断ROI vs コスト動向）だが、最大の論点は**soundproof-rental・moneyとのカテゴリ横断重複**（後述「クロスカテゴリ調査」参照）。

**中程度（2026-07-10追加）**：①に加わった★`japan-soundproof-market-size`（日本市場規模の統計・セグメント別）は`japan-bouonproof-marketnextasia`（日本市場のアジア展開）・`global-soundproof-market-trends`（世界市場）と「防音市場」の検索意図で近接。descriptionで「アジア展開・世界市場の記事しか出てこない方へ」と差別化を宣言済みだが、W28で順位急落（7.5→22.7位）が観測されており、クエリ分散の兆候か要観測（title/H2修正は2026-07-08実施済み、W29で確認予定）。

**低リスク**：②⑤は市場レポートの切り口（地域・業態・規模）が明確で重複なし。

---

### diy（25記事）

| クラスタ | 記事数 | スラッグ |
|---|---|---|
| ① 防音室自作（クローゼット・だんぼっち・段ボール） | 6 | `closet-diy-soundproof-room`・`danbotchi-diy-blueprints`・`danbocchi-floor-protection`・`free-cardboard-soundproof-tech`・`futon-cardboard-karaoke-booth`・`soundproof-room-diy-cost` |
| ② DIY失敗・原理解説 | 3 | `diy-soundproofing-tips`・`diy-soundproof-room-failures-solutions`・`soundproof-sheet-heavy-diy-tips` |
| ③ 内窓・窓防音 | 2 | `diy-internal-window-road-noise-reduction`・`soundproof-window-merit-demerit` |
| ④ 賃貸DIY・原状回復・壁防音 | 4 | `renter-parent-house-soundproofing`・`wooden-apartment-soundproof-guide`・`diy-wall-soundproofing-room-guide`・★`parenting-generation-quiet-corner-diy` |
| ⑤ 配信者向けDIY（吸音配置・家電ノイズ・LED） | 4 | `bass-trap-installation-guide`・`gamer-acoustic-placement`・`diy-refrigeration-noise-reduction`・`diy-led-acoustic-panels` |
| ⑥ 換気・排熱DIY | 1 | `diy-soundproof-ventilation-heat-exhaust` |
| ⑦ 個別悩み系（振動・生活音） | 4 | `bedroom-telework-layout-soundproof`・`diy-vocal-soundproof-mask`・`treadmill-apartment-soundproofing-layering`・★`electronic-drum-vibration-fuwafuwa-system` |
| ⑧ BtoB・屋外資材 | 1 | `outdoor-soundproof-curtain-market-guide` |

**2026-07-10追加分の判定**：★`parenting-generation-quiet-corner-diy`（子育て世代の「一人になれる場所」DIY、ペルソナH）は④の`renter-parent-house-soundproofing`（実家暮らし配信者の防音）と部屋DIYの軸が近接するが、読者層（40〜60代の親側 vs 若い配信者側）で差別化済み・相互確認済み（task-list 2026-07-08記録）。★`electronic-drum-vibration-fuwafuwa-system`は⑦の`treadmill-apartment-soundproofing-layering`と「固体伝搬音の層構成」の原理が共通するため、機器種別（電子ドラム vs ランニングマシン）でクエリは分かれるものの、相互リンクによる役割明示を維持すること（`vibration-reduction-science`・`gaming-floor-impact-noise-fix`との相互リンクは設置済み）。

**中程度**：③の2記事は同カテゴリ内でも近接（DIYポリカ窓の実測比較 vs 賃貸でできる内窓ハックの紹介）。さらに**soundproof-roomの`shanon-vs-bouon-window`とのクロスカテゴリ重複**が本命（後述）。

**低リスク**：①は素材・工法が違う（クローゼット改造／だんぼっち自作／段ボール多重貼り／カラオケボックス）ため重複は限定的。②⑤は`task-list.md`で既にA評価格上げ済み・相互リンク確認済みのため低リスク。

---

### knowledge（22記事）

| クラスタ | 記事数 | スラッグ |
|---|---|---|
| ① 騒音トラブル・法的対応・ルール・統計 | 4 | `noise-complaint-legal-precedent-manual`・`noise-regulation-update-2025`・`neighborhood-noise-seasonal-pattern-statistics`・★`mansion-instrument-practice-time-rules` |
| ② 遮音・吸音の基礎理論・データ | 6 | `absorption-vs-soundproofing-materials`・`diy-soundproof-truth`・`d-value-truth-and-myths`・`soundproof-material-spec-chart`・★`d-value-vs-rw-value-confusion`・★`coincidence-effect-soundproofing` |
| ③ 振動・床衝撃音 | 4 | `vibration-isolation-technology-trend`・`vibration-reduction-science`・`why-your-80-percent-rug-rule-fails`・★`dry-floating-floor-natural-frequency` |
| ④ メンタル・音過敏・未来テック | 4 | `mental-health-benefits-of-silence`・`biophilic-acoustics`・`future-ssi-silent-speech-interface-revolution`・★`sound-sensitivity-misophonia-environment-guide` |
| ⑤ 文化比較・メーカー動向 | 2 | `soundproof-culture-japan-vs-america`・`proofroom-maker-2025productcheck` |
| ⑥ 電気ノイズ・グランドループ | 1 | ★`ground-loop-noise-basics` |
| ⑦ 測定・アプリ | 1 | ★`soundproof-app-review-2026` |

**中程度**：③の`vibration-isolation-technology-trend`（低周波・防振床の基礎）と`vibration-reduction-science`（重量床衝撃音・L等級）は隣接テーマ。相互リンクで役割分担（基礎理論 vs 床衝撃音の実践メカニズム）を明示推奨。★`dry-floating-floor-natural-frequency`（乾式浮き床の固有振動数）が③に加わり振動系が4本になったが、「防振ゴム追加で悪化する失敗」という一点特化で差別化されている。

**中程度（2026-07-10追加）**：②のD値解説が2本（`d-value-truth-and-myths`＝D値の神話、★`d-value-vs-rw-value-confusion`＝D値とRw値の換算不可）に増えた。カテゴリ内では軸（国内等級の誤解 vs 海外規格との混同）が分かれているが、<strong>サイト全体ではD値テーマが4本</strong>（後述クロスカテゴリD参照）となり、ハブ整理の必要性が上がった。

**低リスク**：①は★`mansion-instrument-practice-time-rules`（管理規約・条例・受忍限度、QFO A-5）が加わったが、`noise-complaint-legal-precedent-manual`（判例・法的対応）とは「事前のルール確認 vs 事後の法的対応」で意図が分かれる（相互リンク推奨）。④の★`sound-sensitivity-misophonia-environment-guide`はHSP記事2本（soundproof-room）と相互リンク設置済み・YMYL配慮済み。⑥の★`ground-loop-noise-basics`はcreator`cable-noise-ground-loop-prevention`との役割分担（原理・一般対処 vs 配信環境特化）を本文宣言＋相互リンク済みで、<strong>クロスカテゴリ分業の良例</strong>。⑤⑦は重複なし。

---

### local（17記事）

17都市（千葉・福岡・浜松★・広島・神奈川・金沢★・神戸・熊本★・京都・名古屋・新潟★・岡山★・大阪・埼玉・札幌・仙台・東京）の「防音賃貸ガイド」で構成。2026-07-05に政令指定都市5市（★）を追加し、各都市固有の切り口（浜松＝楽器の街、金沢＝邦楽文化、岡山＝交通結節点、熊本＝震災後の建て替え、新潟＝音楽イベント）で定型文化を回避済み。**内部カニバリなし**（都市が完全に重複しない1:1対応）。神戸・京都の定型文重複も解消済み。

留意点：①local全17記事の上位ハブ（soundproof-rentalの市場系記事）との階層関係は後述クロスカテゴリFの通り分業成立。②仙台記事は2026-07-05に「宮城教育大学生・予算7万円以下」へニッチ化済みで、★`music-student-property-search-guide`（soundproof-rental、音大生×シェアハウス）とは「特定都市の学生 vs 全国横断の音大生」で相互リンク済み。他都市記事を学生軸でニッチ化する場合は同記事との重複を先に確認すること。

---

### money（22記事）

| クラスタ | 記事数 | スラッグ |
|---|---|---|
| ① ローン・税務戦略（ペルソナ別＋総合） | 5 | `musician-soundproof-loan-strategy`・`streamer-tax-strategy`・`telework-soundproof-loan-strategy`・`soundproof-room-loan-guide`・★`piano-soundproof-mortgage-tax-guide` |
| ② 防音室レンタル/リース vs 購入 | 3 | `rental-vs-purchase-soundproof-room`・`soundproof-room-rental-cost`・`soundproof-room-rental-lease` |
| ③ 資産価値・売却・移設 | 4 | `bouon-asset-value-analysis`・`report-japan-soundproof-unit-resale-value-simulation`・`soundproof-room-buyback-guide`・`soundproof-room-moving` |
| ④ 補助金 | 4 | `soundproof-subsidy-check-guide`・`soundproof-subsidy-tokyo-osaka`・`soundproof-subsidy-news-2025`・`soundproof-window-subsidy-2025-guide` |
| ⑤ 価格相場・事業者向け補助 | 2 | `soundproof-room-price-market`・`small-business-soundproof-subsidy-guide` |
| ⑥ オーナーリノベROI | 1 | `owner-renovation-roi-simulation-tool` |
| ⑦ ペルソナH「一人になれる空間」（hub-spoke） | 3 | ★`quiet-space-budget-decision-guide`（ハブ）・★`quiet-space-relocation-decision-guide`（引っ越し編）・★`soundproof-contractor-selection-guide`（業者依頼編） |

**2026-07-10追加分の判定**：
- ①の★`piano-soundproof-mortgage-tax-guide`（新築住宅ローンへの組み込み・固定資産税、QFO A-3）は`soundproof-room-loan-guide`（防音室単体のローン・分割）と「防音室×ローン」で近接するが、「新築時に組み込む vs 後から単体で借りる」の意図分離を本文宣言＋相互リンク済み。次回リライト時にタイトル側の食い合いがないかGSCクエリで確認。
- ⑦はペルソナH向けに設計されたhub-spoke構造（ハブ1＋スポーク2、diyの★`parenting-generation-quiet-corner-diy`が3本目のスポーク）。設計時に近接記事（`soundproof-room-moving`・`owner-renovation-roi-simulation-tool`等）との差別化を確認済み（task-list 2026-07-08記録）。効果測定は次回GSCエクスポート待ち。

**最重要カニバリ**：②の3記事はいずれも「防音室はレンタルすべきか購入すべきか、損益分岐点はどこか」が主題でほぼ同一。
- `rental-vs-purchase-soundproof-room`：ヤマハ「MCプラン」軸、損益分岐5年
- `soundproof-room-rental-cost`：初期費用・月額相場＋購入との損益分岐点
- `soundproof-room-rental-lease`：個人レンタルと法人リースの違い・経費処理

3本ともタグ・本文の損益分岐点訴求が重なり、検索意図のカニバリリスクが高い。役割分担（個人向け料金詳細／法人リース／総合比較）を本文・内部リンクで明示できているか要確認。

**中程度**：③の`bouon-asset-value-analysis`と`report-japan-soundproof-unit-resale-value-simulation`はどちらも「防音室は資産（動産）として残存価値がある」が主題（前者は不動産投資視点のROI分析、後者は5年後売却シミュレーション＋出口戦略）。視点はやや異なるが統合検討の余地あり。

**中程度**：④の`soundproof-subsidy-news-2025`と`soundproof-window-subsidy-2025-guide`は「先進的窓リノベ2025-2026」の補助金活用がともに主題（前者は防音室＋窓リノベの組み合わせ技、後者は窓リフォーム補助金の整理）。`soundproof-subsidy-check-guide`と`soundproof-subsidy-tokyo-osaka`は一般手法とTokyo/Osaka特化のhub-spoke関係で許容範囲だが、相互リンクがなければ重複に見える。

**低リスク**：①はペルソナ別（音楽家／配信者／テレワーカー／総合ガイド）に分かれており差別化は機能している（creatorクラスタと同様のパターン）。

**クロスカテゴリ要注意**：⑥`owner-renovation-roi-simulation-tool`は単独記事だが、business・soundproof-rentalの同系記事と完全に重複（後述）。

---

### soundproof-rental（26記事）

| クラスタ | 記事数 | スラッグ |
|---|---|---|
| ① 市場ガイド・相場（総合ハブ） | 5 | `bouon-rental-market-guide`・`bouonrental-market-research2025`・`rental-price-index-13cities-soundproof`・`report-japan-soundproof-rental-market-needs`・★`soundproof-rental-cost-performance-guide` |
| ② D値・物件選びの基準・探し方 | 2 | `bourental-syaouseid-choiceindi`・★`instrument-allowed-rental-research-method` |
| ③ 防音室導入・許可・原状回復・耐荷重 | 5 | `rental-permission-proposal-template`・`rental-unit-soundproof-room`・`rental-proofroom-contractcheck`・`soundproof-room-installation-conditions`・`apartment-weight-limit-500kg` |
| ④ オーナー向けリノベ戦略 | 3 | `owner-soundproof-renovation-strategy`・`owner-renovation-musician-24h-practice-strategy`・`owner-renovation-shibuya-shinjuku-vtuber-strategy` |
| ⑤ 騒音トラブル対応・近隣・同居 | 4 | `noise-complaint-landlord-negotiation-guide`・`pet-noise-soundproof-measures`・`rental-caution-cello`・`child-rearing-soundproof-pillar` |
| ⑥ ライフスタイル・在宅活用 | 3 | `remote-work-family-harmony-soundproof`・`noise-canceling-headphones-sleep`・`home-theater-karaoke-soundproof-design` |
| ⑦ ブランド・ハウスメーカー比較 | 2 | `musision-comprehensive-guide`・`housing-builder-soundproof-comparison` |
| ⑧ 楽器別・属性別の物件探し | 2 | ★`saxophone-apartment-practice-guide`・★`music-student-property-search-guide` |

**2026-07-10追加分の判定（確認済み・対応済み）**：
- ①の★`soundproof-rental-cost-performance-guide`と`rental-price-index-13cities-soundproof`は「防音賃貸 家賃相場」で近接するが、本文確認の結果カニバリではなく分業（実用ガイド vs 統計リテラシー）と判定。欠けていた片方向リンクを追加済み（詳細: `archieve/topic-clusters-resolved-20260710.md`）。
- ②の★`instrument-allowed-rental-research-method`（楽器可賃貸のリサーチ手順）は`bourental-syaouseid-choiceindi`（D値の性能基準）と「物件選び」で隣接するが、手順 vs 性能基準で軸が分かれる。QFO A-4・A-6の新記事から被リンクを受けており導線は良好。
- ⑧は楽器・属性特化の新クラスタ。`rental-caution-cello`（⑤所属だが実質は楽器別）と合わせ、楽器別シリーズ（チェロ・サックス・音大生）として相互リンクで束ねると「楽器×賃貸」のトピッククラスタが明確になる。サックス記事はチェロ記事と構成が似るため、音量域・練習形態の違いを本文で明示し続けること。

**最重要カニバリ**：③の5記事中、特に以下3本が「賃貸に防音室を導入する際の大家交渉・許可・原状回復」というほぼ同一主題：
- `rental-permission-proposal-template`：A4一枚の提案書テンプレート＋交渉フレーズ
- `rental-unit-soundproof-room`：大家交渉〜耐荷重確認〜原状回復までの完全ロードマップ
- `rental-unit-soundproof-room`と`rental-proofroom-contractcheck`：いずれも「原状回復トラブル防止」「設置許可」が主タグ

加えて`apartment-weight-limit-500kg`（築20年マンション・500kg超ユニットの床荷重計算）と`soundproof-room-installation-conditions`（マンション・戸建の耐荷重を含む3チェックポイント）も「耐荷重」軸で重複。5記事全体が「導入前に確認すること」という同一検索意図に収斂しており、本カテゴリ最大のカニバリクラスタ。

**中程度**：④`owner-soundproof-renovation-strategy`はカテゴリ内では`owner-renovation-musician-24h-practice-strategy`（音楽家ペルソナ）・`owner-renovation-shibuya-shinjuku-vtuber-strategy`（渋谷新宿VTuberペルソナ）のhubとして機能し内部では許容範囲。だが**business・moneyの同系記事との重複が本命**（後述）。

**低リスク**：①は既知対応済み（`bouon-rental-market-guide`/`bouonrental-market-research2025`の相互リンク）。`rental-price-index-13cities-soundproof`（統計の読み方）と`report-japan-soundproof-rental-market-needs`（首都圏・関西圏の定量分析）は統計リテラシー解説 vs 個別レポートで軸が異なる。⑤⑥⑦は対象（ペット・チェロ・子育て／在宅ライフスタイル／メーカー）が具体的で重複なし。

---

### soundproof-room（31記事）

| クラスタ | 記事数 | スラッグ |
|---|---|---|
| ① サイズ選び | 3 | `bouon-size-choice`・`soundproof-room-size`・`soundproof-room-large-size` |
| ② 予算・価格・おすすめ比較 | 4 | `bouon-osusume-hikaku`・`soundproof-room-budget-selection-guide`・`budget-soundproof-booth-comparison`・`million-yen-soundproof-room-professional` |
| ③ 設置条件・最終チェックリスト | 1 | `bouon-setti-checkpoint` |
| ④ D値・遮音性能 | 2 | `bouon-dchiseinou-meyasu`・`sound-reduction-simulation` |
| ⑤ 空調・換気・湿度・花粉・通信環境 | 5 | `proofroom-aircondition-select`・`proofroom-humidity-airconditionlist`・`soundproof-room-pollen-protection`・`bouon-humidifier-comparison`・★`wifi-connection-guide` |
| ⑥ メーカー・ブランド・製品レビュー | 6 | `kawai-nasal-soundproof-room-guide`・`daiwa-house-jiyuku-soundproof-review`・`shimamura-music-soundproof-room-guide`・`yamaha-tabisuru-bouon-room`・`nitori-soundproof-acoustic-guide`・★`onetouch-soundproof-wall-review` |
| ⑦ 用途・ペルソナ別防音 | 6 | `hsp-soundproof-room-guide`・`hsp-soundproof-curtain-guide`・`night-practice-soundproof-guide`・`soundproof-performance-drum`・`sleep-quality-soundproof-room`・`otodasu-voice-chat-test` |
| ⑧ 内窓・窓リフォーム | 1 | `shanon-vs-bouon-window` |
| ⑨ メンテ・処分 | 2 | `soundproof-room-demolition-guide`・`proofroom-soudmore-manual` |
| ⑩ 防音工事（施工型） | 1 | ★`construction-types-cost-comparison` |

**2026-07-10追加分の判定**：
- ⑤の★`wifi-connection-guide`（防音室のWi-Fi・有線LAN）は環境・設備系で既存4本と軸が異なり重複なし。W28で表示10・順位7.3・CTR0%のためdescription結論先出し化を実施済み（効果はW29確認）。
- ⑥の★`onetouch-soundproof-wall-review`（ピアリビング製品レビュー、QFO A-1）は既存⑥がメーカー・ブランド単位なのに対し初の単一製品レビュー。`nitori-soundproof-acoustic-guide`（市販品の効果検証）と「安価な防音製品は効くのか」の意図で隣接するため、相互リンク設置済みの役割分担（ニトリ＝吸音・音響、ワンタッチ＝壁パネル遮音）を維持。
- ⑩の★`construction-types-cost-comparison`（壁・床・開口部の施工型防音工事）はユニット型中心の②と軸が異なる（施工 vs 製品）。ただしdescriptionに「業者の選び方」を含み、moneyの★`soundproof-contractor-selection-guide`と業者選び軸で重複（後述クロスカテゴリI）。W28時点で順位44.1位と深く、`bouon-osusume-hikaku`からの内部リンク強化が未実施（`weekly-task.md` Act残タスク）。坪単価セクションはQFO B-7で加筆済み。

**最重要カニバリ**：①の`bouon-size-choice`（サイズ選びの決定版・0.8〜3畳）と`soundproof-room-size`（ユニット防音室のサイズと選び方・内寸確認法・0.8畳〜3畳以上）はタイトル・対象範囲がほぼ同一。`soundproof-room-large-size`（2畳以上特化）は差別化されている。

**中程度**：②の4記事は価格帯のファネル（`budget-soundproof-booth-comparison`＝20万円以下→`soundproof-room-budget-selection-guide`＝50/100/200万円→`million-yen-soundproof-room-professional`＝100万円クラス）として一定の連続性があるが、`bouon-osusume-hikaku`（おすすめ比較＋ROI／売却価格分析）がこれらと並走する総合比較記事になっており、4本の役割分担・相互リンクの明示が必要。

**中程度**：⑤の4記事は「防音室の環境管理」で軸はおおむね分かれる（空調設備選定／温湿度運用／花粉フィルター／加湿器の結露リスク）が、`bouon-humidifier-comparison`（加湿器の結露シミュレーション）と`proofroom-humidity-airconditionlist`（温湿度管理・結露・カビ）は「結露」を共通の中心論点として重複度が高い。

**低リスク**：⑥⑦⑨は対象（メーカー名／ペルソナ・楽器種別／処分）が具体的で重複なし。

**クロスカテゴリ要注意**：③`bouon-setti-checkpoint`（床荷重・搬入経路チェック）はsoundproof-rentalの③クラスタ（耐荷重・導入チェック5記事）と、④`bouon-dchiseinou-meyasu`はsoundproof-rentalの`bourental-syaouseid-choiceindi`と、⑧`shanon-vs-bouon-window`はdiyの内窓クラスタと重複（後述）。

---

## カテゴリ横断のカニバリ調査（最重要）

サイト全体で同一テーマが複数カテゴリに分散しているケースを実データ（title/description/tags）に基づいて特定した。

### A. オーナー向け防音リノベ投資・ROI（3カテゴリ4記事）— サイト最大のクロスカテゴリカニバリ
| カテゴリ | スラッグ | 主題 |
|---|---|---|
| business | `owner-soundproof-renovation-investment-strategy-2026` | 利回り・出口戦略（2026年基準） |
| business | `soundproof-renovation-cost-outlook-2026` | 建設コスト高騰・回収ライン・補助金（2026年） |
| soundproof-rental | `owner-soundproof-renovation-strategy` | 空室解消の経営戦略・ROIシミュレーション |
| money | `owner-renovation-roi-simulation-tool` | A4一枚のROI収益シミュレーション（5年回収） |

4記事とも「マンションオーナーが防音リノベに投資する際のROI・回収戦略」が主題で、対象読者（賃貸オーナー）もほぼ同一。カテゴリが3つに分散しているため内部リンクで気づきにくく、検索エンジン側からもテーマの薄い重複と判定されるリスクが最も高い。**統合（1本のハブ＋差別化された3本のスポーク）か、明確な役割分担の本文宣言を最優先で推奨**。

### B. 防音室の資産価値・リセールバリュー（money2記事＋soundproof-room2記事が部分重複）
| カテゴリ | スラッグ | 主題 |
|---|---|---|
| money | `bouon-asset-value-analysis` | 資産価値・ROI（不動産投資視点） |
| money | `report-japan-soundproof-unit-resale-value-simulation` | 5年後売却価格シミュレーション・出口戦略 |
| soundproof-room | `bouon-osusume-hikaku` | おすすめ比較＋5年後売却価格分析（ROI） |
| soundproof-room | `million-yen-soundproof-room-professional` | 100万円クラスの投資対効果・リセールバリュー |

moneyの2記事が中核的に重複（A同様の統合候補）。soundproof-roomの2記事は資産価値が主題ではなく副次的要素のため、moneyの記事への内部リンクで導線を作れば許容範囲。

### C. 内窓・防音窓リフォーム（diy2記事＋soundproof-room1記事）
| カテゴリ | スラッグ | 主題 |
|---|---|---|
| diy | `diy-internal-window-road-noise-reduction` | DIYポリカ窓〜本格インプラスの実測比較 |
| diy | `soundproof-window-merit-demerit` | 賃貸でもできる内窓ハック・メリデメ |
| soundproof-room | `shanon-vs-bouon-window` | 「遮音窓」と「防音窓」の違い・製品比較 |

3記事とも「内窓・防音窓の選び方」が主題。`money/soundproof-window-subsidy-2025-guide`は補助金特化のため軸が異なり対象外。3記事間の役割分担（実測データ／賃貸DIY／製品名での比較）はあるが、カテゴリが分散しているため統合検討かカテゴリ再配置（窓系はすべて`diy`か`soundproof-room`に寄せる）を推奨。

### D. D値（遮音等級）の解説（3カテゴリ4記事、2026-07-10ハブ化対応済み）
D値テーマは`bouon-dchiseinou-meyasu`（soundproof-room）・`bourental-syaouseid-choiceindi`（soundproof-rental）・`d-value-truth-and-myths`・`d-value-vs-rw-value-confusion`（knowledge）の4記事。2026-07-10に`bouon-dchiseinou-meyasu`をハブとして相互リンク・誘導文を整備し対応済み（詳細: `archieve/topic-clusters-resolved-20260710.md`）。残課題：`sound-reduction-simulation`も同ハブ配下に位置づけてリンクを追加すること（次回更新時）。

### E. 賃貸への防音室導入チェック（soundproof-room・soundproof-rentalで重複）
| カテゴリ | スラッグ | 主題 |
|---|---|---|
| soundproof-room | `bouon-setti-checkpoint` | 設置の最終チェックリスト（床荷重・搬入経路・管理組合） |
| soundproof-rental | `apartment-weight-limit-500kg`・`soundproof-room-installation-conditions`・`rental-unit-soundproof-room` | 耐荷重・搬入・大家交渉 |

「防音室を賃貸に置く前に確認すること」という検索意図が、soundproof-room側のハブ記事1本とsoundproof-rental側の前述クラスタ③（5記事）に分散している。本来は「設置条件」というテーマでカテゴリをどちらかに統一すべき領域。

### F. 防音賃貸の地域ガイド（local12記事 vs soundproof-rentalの市場系記事）
local12記事（都市別）とsoundproof-rentalの①市場ガイドクラスタ（`bouon-rental-market-guide`等の全国版）は、現状「全国総合ハブ（soundproof-rental）→都市別スポーク（local）」という階層関係が成立しており、**重複ではなく適切な分業**と判定した。soundproof-rental内に都市名を主題にした記事が無いため、カニバリリスクは低い。

### G. 配信スタジオ・クリエイター経済（business vs creator）
businessの②クラスタ（`report-japan-asmr-vtuber-streaming-studio-standard`・`shared-streaming-studio-growth-pricing-utilization`・`bouonrental-areasec-newbusiness`）は市場・事業者目線、creatorの記事群はクリエイター本人の実務目線で書かれており、対象読者（事業者 vs 配信者個人）が明確に分かれている。**重複なし**と判定。

### H. DIY防音 vs creator配信者向けDIY
diyの⑤クラスタ（吸音配置・家電ノイズ・LED）とcreator内のDIY系記事（`streaming-room-reverb-absorption`・`one-room-streaming-soundproof`等）は、diy側が物理原理・施工法、creator側が配信ワークフロー文脈という軸の違いで概ね分業できている。`diy/gamer-acoustic-placement`と`creator/streaming-room-reverb-absorption`（どちらも吸音パネルの配置・反響対策）はやや近接するため、相互リンクの有無のみ確認推奨（**重複というよりリンク導線の課題**）。

### I. 防音工事・業者選び（soundproof-room・money、2026-07-10対応済み）
`construction-types-cost-comparison`（soundproof-room・工法比較）と`soundproof-contractor-selection-guide`（money・相見積もり詳細）が「業者選び」の検索意図で近接していたため、相互リンク＋守備範囲宣言を設置して分業を固定済み（詳細: `archieve/topic-clusters-resolved-20260710.md`）。

### J. グランドループ・電気ノイズ（knowledge・creatorの分業＝良例・2026-07-10追加）
★`knowledge/ground-loop-noise-basics`（原理・一般対処）と`creator/cable-noise-ground-loop-prevention`（配信環境特化）は、新規作成時点で役割分担を本文宣言し相互リンクを設置済み。クロスカテゴリ分業の設計としては本表の理想形であり、今後同テーマを複数カテゴリに置く際のテンプレートとする。

### K. ペルソナH「一人になれる空間」hub-spoke（money・diy横断・設計済み）
`money/quiet-space-budget-decision-guide`（ハブ）＋スポーク3本（`quiet-space-relocation-decision-guide`・`soundproof-contractor-selection-guide`・`diy/parenting-generation-quiet-corner-diy`）は意図的なカテゴリ横断クラスタ。設計時に近接記事との差別化確認済みのため現状カニバリなしだが、今後ペルソナH記事を追加する際は必ずこのハブ配下に位置づけ、ハブからのリンクを更新すること。

---

## 提言（優先度順・2026-07-10更新）

1. **最優先（クロスカテゴリA・初版から未対応のまま）**：`owner-soundproof-renovation-investment-strategy-2026`（business）・`soundproof-renovation-cost-outlook-2026`（business）・`owner-soundproof-renovation-strategy`（soundproof-rental）・`owner-renovation-roi-simulation-tool`（money）の4記事を読み比べ、1本をオーナー向けROIの総合ハブに据えて残り3本を明確な差別化軸（市場動向／コスト動向／個別シミュレーションツール）にピボットするか、薄い記事を統合する。初版（2026-06-24）から2回の更新を経ても未着手で、サイト最大のクロスカテゴリカニバリのまま残っている。
2. **優先（カテゴリ内最重要×3・いずれも未対応）**：
   - money「レンタル vs 購入」3本（`rental-vs-purchase-soundproof-room`・`soundproof-room-rental-cost`・`soundproof-room-rental-lease`）
   - soundproof-rental「導入・許可・原状回復・耐荷重」5本 — ただし`rental-proofroom-contractcheck`は2026-07-05のニッチ化リライトで「アビテックス/ナサールの退去費用・中古売却相場」の金額特化に転換済みのため、残る読み比べ対象は`rental-permission-proposal-template`と`rental-unit-soundproof-room`の2本＋耐荷重2本（`apartment-weight-limit-500kg`・`soundproof-room-installation-conditions`）
   - soundproof-room「サイズ選び」2本（`bouon-size-choice`・`soundproof-room-size`）
   をそれぞれ次回リライト時に読み比べ、統合または差別化を実施。
3. **2026-07-10対応分（3件・全件完了、詳細は`archieve/topic-clusters-resolved-20260710.md`）**：D値ハブ化（クロスカテゴリD）／業者選びの分業固定（クロスカテゴリI）／家賃相場クラスタの確認（soundproof-rental①）。6記事のlastmod更新、`npx astro check`/`build`（218ページ・0エラー）で確認済み。
4. **中優先（クロスカテゴリC・D・E＝窓・D値・設置条件）**：内窓／D値／設置耐荷重の3テーマはカテゴリ設計時点で「soundproof-room（製品性能起点）」と「soundproof-rental・diy（住まい・DIY起点）」に分散しやすい構造的な弱点。新規記事を作る際はこの3テーマについて「すでにどのカテゴリに何本あるか」を本表で確認してから着手するルールを推奨。
5. **運用ルール**：新規記事追加時は該当カテゴリのクラスタ表に当てはめてから着手し、同クラスタ3本以上・かつクロスカテゴリで同テーマが既にある場合は差別化ポイントを一行で書き出す（2026-07-10更新分は全件この形式で記録済み）。クロスカテゴリ分業の設計はJ（グランドループ）の「役割分担の本文宣言＋相互リンク」をテンプレートとする。
6. **次回更新**：本表は新規記事追加のたびに更新が必要。次回の大きな更新契機はQFO再調査の効果測定（2026-08-06以降）で、新規8記事のクエリ取り分が確定した時点でカニバリ有無を再判定する。
