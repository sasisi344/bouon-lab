# 誤リンク修正タスク（内部リンク）

**目的**: 本文中の旧URL（例: `/ja/solutions/...`）を、正しいパーマリンクに差し替える。  
**正本URL**: 各記事の `internal_url`（`.workspace/.data-set/interlink-postlist.md` と同一。ともに `src/content` 走査に基づく）。

## メタ情報

- **一覧ソース**: [`interlink-postlist.md`](../.data-set/interlink-postlist.md)（本タスクは同データを **ファイル走査で再現**）
- **記事一覧の再生成**: `node .workspace/scripts/build-interlink-postlist.mjs`
- **本タスク表の再生成**: `node .workspace/scripts/generate-linkcheck-task.mjs`
- **自動検証（本文リンクのパス整合）**: `node .workspace/scripts/check-internal-links.mjs`（`category/subcategory/slug` の存在チェック、および `/ja/company/...` のような **階層欠落2セグメント** を検出）
- **内部リンク形式**: `/{lang}/{category}/{subcategory}/{slug}/`（末尾スラッシュ必須）
- **生成日**: 2026-05-02
- **件数**: ja 131 件（チェックリスト）

## 進め方（カテゴリ単位）

1. 下記「カテゴリ」セクションを上から順に開く。
2. 各記事で `src/content/ja/{category}/{subcategory}/{slug}/index.mdx` を開き、`[テキスト](/ja/...` と `<SmartLink href="/ja/...` を検索。
3. **誤ったリンク**を上記 `internal_url` に合わせて修正（またはリンク削除）。
4. 記事単位のチェックボックスを、完了なら `[complete]` に更新する（未完了は `[ ]`）。

---

## コラム（column）

**記事数**: 18 件

### subcategory: company

- [complete] **防音賃貸市場の地域格差が示す新たなビジネス機会：都市部集中から地方分散への転換点を分析** （draft）
  - `internal_url`: /ja/column/company/bouonrental-areasec-newbusiness/
  - `path`: `src/content/ja/column/company/bouonrental-areasec-newbusiness/index.mdx`
- [complete] **【2026】日本の防音市場は次にアジアのどこを攻めるべきか｜中国・韓国・ベトナムの最新動向**
  - `internal_url`: /ja/column/company/japan-bouonproof-marketnextasia/
  - `path`: `src/content/ja/column/company/japan-bouonproof-marketnextasia/index.mdx`
- [complete] **【投資】築古木造を「防音マンション」へ：賃料30%増・利回り20%超えのリノベ戦略**
  - `internal_url`: /ja/column/company/renovation-roi-strategy/
  - `path`: `src/content/ja/column/company/renovation-roi-strategy/index.mdx`
- [complete] **【技術解説】ASMR・VTuberに求められる「配信専用スタジオ」の防音・熱対策基準 (2026)** （draft）
  - `internal_url`: /ja/column/company/report-japan-asmr-vtuber-streaming-studio-standard/
  - `path`: `src/content/ja/column/company/report-japan-asmr-vtuber-streaming-studio-standard/index.mdx`
- [complete] **防音市場にESGの波｜省エネ構造・循環素材がもたらす新トレンド**
  - `internal_url`: /ja/column/company/soundproof-market-esg-trend/
  - `path`: `src/content/ja/column/company/soundproof-market-esg-trend/index.mdx`
- [complete] **防音リノベ費用高騰の最新動向とオーナー投資判断【2026年版】**
  - `internal_url`: /ja/column/company/soundproof-renovation-cost-outlook-2026/
  - `path`: `src/content/ja/column/company/soundproof-renovation-cost-outlook-2026/index.mdx`

### subcategory: news

- [complete] **2030年の防音Lab：無声音声インターフェース(SSI)が「遮音」の常識を破壊する** （draft）
  - `internal_url`: /ja/column/news/future-ssi-silent-speech-interface-revolution/
  - `path`: `src/content/ja/column/news/future-ssi-silent-speech-interface-revolution/index.mdx`
- [complete] **世界の防音市場予測2026｜北米・欧州・アジアの潮流と「住まいの静寂」の価値**
  - `internal_url`: /ja/column/news/global-soundproof-market-trends/
  - `path`: `src/content/ja/column/news/global-soundproof-market-trends/index.mdx`
- [complete] **防音室メーカー最新ニュース｜新製品・モデルチェンジ** （draft）
  - `internal_url`: /ja/column/news/proofroom-maker-2025productcheck/
  - `path`: `src/content/ja/column/news/proofroom-maker-2025productcheck/index.mdx`
- [complete] **シェア型配信スタジオが急成長｜利用料金の相場と稼働率の最新データ**
  - `internal_url`: /ja/column/news/shared-streaming-studio-growth-pricing-utilization/
  - `path`: `src/content/ja/column/news/shared-streaming-studio-growth-pricing-utilization/index.mdx`
- [complete] **ヤマハ「旅する防音室」とは｜移動体験プログラムの設計思想と活用の視点** （draft）
  - `internal_url`: /ja/column/news/yamaha-tabisuru-bouon-room/
  - `path`: `src/content/ja/column/news/yamaha-tabisuru-bouon-room/index.mdx`

### subcategory: others

- [complete] **【2026年最新】ASMR・VTuber専用防音ブースの選び方。失敗しないための「静寂と配信効率」の両立術**
  - `internal_url`: /ja/column/others/asmr-vtuber-booth-guide/
  - `path`: `src/content/ja/column/others/asmr-vtuber-booth-guide/index.mdx`
- [complete] **古民家を配信スタジオ防音室にリノベ！費用と注意点を徹底試算**
  - `internal_url`: /ja/column/others/kominka-renovation-streaming-room/
  - `path`: `src/content/ja/column/others/kominka-renovation-streaming-room/index.mdx`
- [complete] **防音文化比較｜静寂を愛する日本、自由を尊ぶアメリカ**
  - `internal_url`: /ja/column/others/soundproof-culture-japan-vs-america/
  - `path`: `src/content/ja/column/others/soundproof-culture-japan-vs-america/index.mdx`
- [complete] **配信者のための防音室「節税・経費化」戦略：個人事業主・法人が知るべき減価償却のルール**
  - `internal_url`: /ja/column/others/streamer-tax-strategy/
  - `path`: `src/content/ja/column/others/streamer-tax-strategy/index.mdx`
- [complete] **【配信部屋のレイアウト学】狭くても「映える」部屋は作れる！カメラ画角と防音室の配置ルール**
  - `internal_url`: /ja/column/others/streaming-room-layout-guide/
  - `path`: `src/content/ja/column/others/streaming-room-layout-guide/index.mdx`
- [complete] **低周波・振動対策の最前線｜防振床・浮き床技術の進化と新工法**
  - `internal_url`: /ja/column/others/vibration-isolation-technology-trend/
  - `path`: `src/content/ja/column/others/vibration-isolation-technology-trend/index.mdx`
- [complete] **Web会議で「声が小さい」と言われたら、マイクを買い換えるな。壁を疑え。**
  - `internal_url`: /ja/column/others/web-meeting-voice-soundleak-prevention/
  - `path`: `src/content/ja/column/others/web-meeting-voice-soundleak-prevention/index.mdx`

---

## 防音賃貸（soundproof-rental）

**記事数**: 41 件

### subcategory: others

- [complete] **【2026最新】千葉の防音賃貸ガイド｜船橋・松戸・市川の最新相場と穴場エリア**
  - `internal_url`: /ja/soundproof-rental/others/chiba-soundproof-rental-guide/
  - `path`: `src/content/ja/soundproof-rental/others/chiba-soundproof-rental-guide/index.mdx`
- [complete] **広島で楽器可物件を探すなら「音大エリア」を狙え！中区・エリザベト周辺の防音事情と家賃相場**
  - `internal_url`: /ja/soundproof-rental/others/hiroshima-soundproof-rental-guide/
  - `path`: `src/content/ja/soundproof-rental/others/hiroshima-soundproof-rental-guide/index.mdx`
- [complete] **防音室 賃貸 神奈川の相場・人気エリア・選び方【2025年最新】**
  - `internal_url`: /ja/soundproof-rental/others/kanagawa-soundproof-rental-guide/
  - `path`: `src/content/ja/soundproof-rental/others/kanagawa-soundproof-rental-guide/index.mdx`
- [complete] **【2026最新】神戸の防音賃貸ガイド｜三宮・中央区・灘の最新相場と失敗しない選び方**
  - `internal_url`: /ja/soundproof-rental/others/kobe-soundproof-rental-guide/
  - `path`: `src/content/ja/soundproof-rental/others/kobe-soundproof-rental-guide/index.mdx`
- [complete] **防音室 賃貸 京都の相場・人気エリア・選び方【2025年最新】**
  - `internal_url`: /ja/soundproof-rental/others/kyoto-soundproof-rental-guide/
  - `path`: `src/content/ja/soundproof-rental/others/kyoto-soundproof-rental-guide/index.mdx`
- [complete] **【2026最新】大阪の防音賃貸ガイド｜ペット可・駅近・格安エリアまで徹底網羅**
  - `internal_url`: /ja/soundproof-rental/others/osaka-soundproof-rental-guide/
  - `path`: `src/content/ja/soundproof-rental/others/osaka-soundproof-rental-guide/index.mdx`
- [complete] **【A4一枚】防音リノベ ROI収益シミュレーション | オーナー向け5年回収モデル完全解説**
  - `internal_url`: /ja/soundproof-rental/others/owner-renovation-roi-simulation-tool/
  - `path`: `src/content/ja/soundproof-rental/others/owner-renovation-roi-simulation-tool/index.mdx`
- [complete] **渋谷・新宿エリアのマンションオーナー向け「VTuber・配信特化型」防音リノベ戦略**
  - `internal_url`: /ja/soundproof-rental/others/owner-renovation-shibuya-shinjuku-vtuber-strategy/
  - `path`: `src/content/ja/soundproof-rental/others/owner-renovation-shibuya-shinjuku-vtuber-strategy/index.mdx`
- [complete] **【オーナー必見】「誰でも、ではなく”あなたに”」——マイノリティを熱狂させる防音リノベ経営戦略**
  - `internal_url`: /ja/soundproof-rental/others/owner-soundproof-renovation-strategy/
  - `path`: `src/content/ja/soundproof-rental/others/owner-soundproof-renovation-strategy/index.mdx`
- [complete] **防音室 賃貸 埼玉の相場・人気エリア・選び方【2025年最新】**
  - `internal_url`: /ja/soundproof-rental/others/saitama-soundproof-rental-guide/
  - `path`: `src/content/ja/soundproof-rental/others/saitama-soundproof-rental-guide/index.mdx`
- [complete] **札幌は楽器演奏に最高の環境？「二重窓」標準装備がもたらす防音メリットと物件探しのコツ**
  - `internal_url`: /ja/soundproof-rental/others/sapporo-soundproof-rental-guide/
  - `path`: `src/content/ja/soundproof-rental/others/sapporo-soundproof-rental-guide/index.mdx`
- [complete] **仙台の防音賃貸事情｜音大生向け物件の探し方**
  - `internal_url`: /ja/soundproof-rental/others/sendai-soundproof-rental-guide/
  - `path`: `src/content/ja/soundproof-rental/others/sendai-soundproof-rental-guide/index.mdx`
- [complete] **東京の防音賃貸相場2026｜エリア別の家賃目安・失敗しない選び方**
  - `internal_url`: /ja/soundproof-rental/others/tokyo-soundproof-rental-summary/
  - `path`: `src/content/ja/soundproof-rental/others/tokyo-soundproof-rental-summary/index.mdx`

### subcategory: knowledge

- [complete] **【2026完全版】防音賃貸・防音マンション完全ガイド｜全国相場・D値・ブランド・選び方を総まとめ**
  - `internal_url`: /ja/soundproof-rental/knowledge/bouon-rental-market-guide/
  - `path`: `src/content/ja/soundproof-rental/knowledge/bouon-rental-market-guide/index.mdx`
- [complete] **【2025年最新】防音賃貸の家賃相場とトレンド｜需要30倍の衝撃と狙い目エリア**
  - `internal_url`: /ja/soundproof-rental/knowledge/bouonrental-market-research2025/
  - `path`: `src/content/ja/soundproof-rental/knowledge/bouonrental-market-research2025/index.mdx`
- [complete] **VTuber・ゲーム配信者向け防音賃貸の選び方｜回線・電源・防音性能で失敗しない完全ガイド**
  - `internal_url`: /ja/soundproof-rental/knowledge/bourentakl-streamer-settingsetubi/
  - `path`: `src/content/ja/soundproof-rental/knowledge/bourentakl-streamer-settingsetubi/index.mdx`
- [complete] **防音賃貸の「D値」とは？楽器別の推奨レベルと失敗しない物件選びの基準**
  - `internal_url`: /ja/soundproof-rental/knowledge/bourental-syaouseid-choiceindi/
  - `path`: `src/content/ja/soundproof-rental/knowledge/bourental-syaouseid-choiceindi/index.mdx`
- [complete] **【比較】大手ハウスメーカー5社の防音性能（2026）：カタログ数値の「罠」と、Dr-65を実現する投資判断** （draft）
  - `internal_url`: /ja/soundproof-rental/knowledge/housing-builder-soundproof-comparison/
  - `path`: `src/content/ja/soundproof-rental/knowledge/housing-builder-soundproof-comparison/index.mdx`
- [complete] **ミュージション（MUSISION）完全攻略ガイド | 2026年最新の防音性能と経済的合理性**
  - `internal_url`: /ja/soundproof-rental/knowledge/musision-comprehensive-guide/
  - `path`: `src/content/ja/soundproof-rental/knowledge/musision-comprehensive-guide/index.mdx`
- [complete] **「24時間演奏可」物件という最強の差別化：プロ奏者・音楽講師を長期入居者に変えるオーナー戦略**
  - `internal_url`: /ja/soundproof-rental/knowledge/owner-renovation-musician-24h-practice-strategy/
  - `path`: `src/content/ja/soundproof-rental/knowledge/owner-renovation-musician-24h-practice-strategy/index.mdx`
- [complete] **楽器可物件でもチェロは要注意？防音賃貸の規約と落とし穴**
  - `internal_url`: /ja/soundproof-rental/knowledge/rental-caution-cello/
  - `path`: `src/content/ja/soundproof-rental/knowledge/rental-caution-cello/index.mdx`
- [complete] **配信者向け賃貸の選び方｜静かに配信できる部屋を探すコツ**
  - `internal_url`: /ja/soundproof-rental/knowledge/streamer-rental-selection-guide/
  - `path`: `src/content/ja/soundproof-rental/knowledge/streamer-rental-selection-guide/index.mdx`

### subcategory: diy

- [complete] **ワンルーム配信の防音ハック｜1万円以下で隣人の壁ドンを回避する現実的な解**
  - `internal_url`: /ja/soundproof-rental/diy/one-room-streaming-soundproof/
  - `path`: `src/content/ja/soundproof-rental/diy/one-room-streaming-soundproof/index.mdx`
- [complete] **賃貸・実家でも原状回復0円！壁を傷つけず「防音室」並みの静寂を作る裏技5選**
  - `internal_url`: /ja/soundproof-rental/diy/renter-parent-house-soundproofing/
  - `path`: `src/content/ja/soundproof-rental/diy/renter-parent-house-soundproofing/index.mdx`
- [complete] **法律は変えられない？ならば窓を変えよう｜賃貸でもできる「内窓」ハック**
  - `internal_url`: /ja/soundproof-rental/diy/soundproof-window-merit-demerit/
  - `path`: `src/content/ja/soundproof-rental/diy/soundproof-window-merit-demerit/index.mdx`
- [complete] **木造アパートの防音は無理？苦情ゼロまで音を減らす3つの現実的対策**
  - `internal_url`: /ja/soundproof-rental/diy/wooden-apartment-soundproof-guide/
  - `path`: `src/content/ja/soundproof-rental/diy/wooden-apartment-soundproof-guide/index.mdx`

### subcategory: solution

- [complete] **築20年のマンションに重さ500kgの防音室を置ける？床補強なしで設置するための安全基準と計算術**
  - `internal_url`: /ja/soundproof-rental/solution/apartment-weight-limit-500kg/
  - `path`: `src/content/ja/soundproof-rental/solution/apartment-weight-limit-500kg/index.mdx`
- [complete] **【子育て×防音リノベ】マンションの騒音トラブルを「構造」から解決する完全ガイド**
  - `internal_url`: /ja/soundproof-rental/solution/child-rearing-soundproof-pillar/
  - `path`: `src/content/ja/soundproof-rental/solution/child-rearing-soundproof-pillar/index.mdx`
- [complete] **自宅映画と自宅カラオケを両立する防音設計ガイド｜遮音と音響の分け方と費用**
  - `internal_url`: /ja/soundproof-rental/solution/home-theater-karaoke-soundproof-design/
  - `path`: `src/content/ja/soundproof-rental/solution/home-theater-karaoke-soundproof-design/index.mdx`
- [complete] **騒音で眠れないあなたへ。「耳栓＋ノイキャン」最強の組み合わせで静寂を手に入れる**
  - `internal_url`: /ja/soundproof-rental/solution/noise-canceling-headphones-sleep/
  - `path`: `src/content/ja/soundproof-rental/solution/noise-canceling-headphones-sleep/index.mdx`
- [complete] **騒音クレームを直接言うのは危険？マンションの騒音トラブルを解決する『3フェーズ式』対策マニュアル**
  - `internal_url`: /ja/soundproof-rental/solution/noise-complaint-landlord-negotiation-guide/
  - `path`: `src/content/ja/soundproof-rental/solution/noise-complaint-landlord-negotiation-guide/index.mdx`
- [complete] **在宅ワークで家族と快適に共存。防音で実現する「境界のある暮らし」**
  - `internal_url`: /ja/soundproof-rental/solution/remote-work-family-harmony-soundproof/
  - `path`: `src/content/ja/soundproof-rental/solution/remote-work-family-harmony-soundproof/index.mdx`
- [complete] **管理会社・オーナーを味方につける：防音室「設置提案書」テンプレートと交渉術**
  - `internal_url`: /ja/soundproof-rental/solution/rental-permission-proposal-template/
  - `path`: `src/content/ja/soundproof-rental/solution/rental-permission-proposal-template/index.mdx`
- [complete] **賃貸で防音室は隠せる？大家さんに「OK」と言わせる神交渉術と原状回復の極意**
  - `internal_url`: /ja/soundproof-rental/solution/rental-proofroom-contractcheck/
  - `path`: `src/content/ja/soundproof-rental/solution/rental-proofroom-contractcheck/index.mdx`
- [complete] **賃貸でユニット型防音室を置く方法は？大家交渉と許可取得の完全ガイド**
  - `internal_url`: /ja/soundproof-rental/solution/rental-unit-soundproof-room/
  - `path`: `src/content/ja/soundproof-rental/solution/rental-unit-soundproof-room/index.mdx`
- [complete] **【調査報告】首都圏・関西圏における高性能防音賃貸市場の定量的分析 (2025-2026)** （draft）
  - `internal_url`: /ja/soundproof-rental/solution/report-japan-soundproof-rental-market-needs/
  - `path`: `src/content/ja/soundproof-rental/solution/report-japan-soundproof-rental-market-needs/index.mdx`
- [complete] **防音賃貸の住み心地｜ゲーム配信者が語る引っ越して半年のリアルな暮らし**
  - `internal_url`: /ja/soundproof-rental/solution/soundproof-rental-life-streamer/
  - `path`: `src/content/ja/soundproof-rental/solution/soundproof-rental-life-streamer/index.mdx`
- [complete] **防音室の設置条件をプロが解説｜マンション・戸建別の耐荷重ミスを防ぐ3つの基準**
  - `internal_url`: /ja/soundproof-rental/solution/soundproof-room-installation-conditions/
  - `path`: `src/content/ja/soundproof-rental/solution/soundproof-room-installation-conditions/index.mdx`
- [complete] **【2026完全版】配信者・VTuberのための防音環境完全ガイド｜ワンルームから防音室まで全解説**
  - `internal_url`: /ja/soundproof-rental/solution/streamer-soundproof-room-comprehensive-guide/
  - `path`: `src/content/ja/soundproof-rental/solution/streamer-soundproof-room-comprehensive-guide/index.mdx`
- [complete] **マンションのランニングマシーン防音おすすめ対策！「重ね敷き」で苦情回避**
  - `internal_url`: /ja/soundproof-rental/solution/treadmill-apartment-soundproofing-layering/
  - `path`: `src/content/ja/soundproof-rental/solution/treadmill-apartment-soundproofing-layering/index.mdx`
- [complete] **なぜジョイントマットでは防げないのか？「重量床衝撃音」を遮蔽するプロの防音構造の正体**
  - `internal_url`: /ja/soundproof-rental/solution/vibration-reduction-science/
  - `path`: `src/content/ja/soundproof-rental/solution/vibration-reduction-science/index.mdx`

---

## 防音室（soundproof-room）

**記事数**: 72 件

### subcategory: others

- [complete] **【2026最新】防音室おすすめ比較｜失敗しない選び方と5年後の売却価格（ROI）を分析**
  - `internal_url`: /ja/soundproof-room/others/bouon-osusume-hikaku/
  - `path`: `src/content/ja/soundproof-room/others/bouon-osusume-hikaku/index.mdx`
- [complete] **防音室導入の最終チェックリスト｜後悔しないためのサイズ・重量・搬入のデッドライン**
  - `internal_url`: /ja/soundproof-room/others/bouon-setti-checkpoint/
  - `path`: `src/content/ja/soundproof-room/others/bouon-setti-checkpoint/index.mdx`
- [complete] **カワイ防音室ナサール（Nasal）完全ガイド｜特徴・価格・ヤマハとの違い**
  - `internal_url`: /ja/soundproof-room/others/kawai-nasal-soundproof-room-guide/
  - `path`: `src/content/ja/soundproof-room/others/kawai-nasal-soundproof-room-guide/index.mdx`
- [complete] **2025-2026年騒音規制アップデート｜隣人の騒音に「法的エビデンス」で勝つための数値基準と対策**
  - `internal_url`: /ja/soundproof-room/others/noise-regulation-update-2025/
  - `path`: `src/content/ja/soundproof-room/others/noise-regulation-update-2025/index.mdx`
- [complete] **「防音室は買わずに借りる時代」とは言うが損益分岐はどこだ**
  - `internal_url`: /ja/soundproof-room/others/rental-vs-purchase-soundproof-room/
  - `path`: `src/content/ja/soundproof-room/others/rental-vs-purchase-soundproof-room/index.mdx`
- [complete] **【投資シミュレーション】防音室は「動産」か？ 5年後の売却価値と出口戦略の実証** （draft）
  - `internal_url`: /ja/soundproof-room/others/report-japan-soundproof-unit-resale-value-simulation/
  - `path`: `src/content/ja/soundproof-room/others/report-japan-soundproof-unit-resale-value-simulation/index.mdx`
- [complete] **島村楽器で防音室を選ぶメリット｜試奏体験と限定コラボモデル「S-OTODASU」**
  - `internal_url`: /ja/soundproof-room/others/shimamura-music-soundproof-room-guide/
  - `path`: `src/content/ja/soundproof-room/others/shimamura-music-soundproof-room-guide/index.mdx`
- [complete] **空き時間を「練習場所」として収益化。防音室を資産運用するシェアリング戦略の全貌**
  - `internal_url`: /ja/soundproof-room/others/soundproof-asset-sharing/
  - `path`: `src/content/ja/soundproof-room/others/soundproof-asset-sharing/index.mdx`
- [complete] **防音室を高く売るには？買取査定のポイントと個人売買の注意点【2026年版】**
  - `internal_url`: /ja/soundproof-room/others/soundproof-room-buyback-guide/
  - `path`: `src/content/ja/soundproof-room/others/soundproof-room-buyback-guide/index.mdx`
- [complete] **防音室のローン・分割払いガイド2026｜審査の要点と月々の支払シミュレーション**
  - `internal_url`: /ja/soundproof-room/others/soundproof-room-loan-guide/
  - `path`: `src/content/ja/soundproof-room/others/soundproof-room-loan-guide/index.mdx`
- [complete] **防音室サイズ別価格相場2026｜0.5畳〜4.5畳の実勢価格と隠れコスト完全比較**
  - `internal_url`: /ja/soundproof-room/others/soundproof-room-price-market/
  - `path`: `src/content/ja/soundproof-room/others/soundproof-room-price-market/index.mdx`
- [complete] **防音室レンタルの初期費用と月額相場｜2026年最新・購入との損益分岐点**
  - `internal_url`: /ja/soundproof-room/others/soundproof-room-rental-cost/
  - `path`: `src/content/ja/soundproof-room/others/soundproof-room-rental-cost/index.mdx`
- [complete] **ユニット防音室のサイズと選び方：演奏スタイルに合わせた内寸確認法**
  - `internal_url`: /ja/soundproof-room/others/soundproof-room-size/
  - `path`: `src/content/ja/soundproof-room/others/soundproof-room-size/index.mdx`
- [complete] **北米の80%ラグルールが失敗する理由｜日本の積層物理学で振動を止める**
  - `internal_url`: /ja/soundproof-room/others/why-your-80-percent-rug-rule-fails/
  - `path`: `src/content/ja/soundproof-room/others/why-your-80-percent-rug-rule-fails/index.mdx`

### subcategory: knowledge

- [complete] **バイオフィリック・アコースティック：苔と緑で「静寂の庭」を壁に作る技法**
  - `internal_url`: /ja/soundproof-room/knowledge/biophilic-acoustics/
  - `path`: `src/content/ja/soundproof-room/knowledge/biophilic-acoustics/index.mdx`
- [complete] **防音室の資産価値分析｜リセールバリューと不動産投資的視点でのROI**
  - `internal_url`: /ja/soundproof-room/knowledge/bouon-asset-value-analysis/
  - `path`: `src/content/ja/soundproof-room/knowledge/bouon-asset-value-analysis/index.mdx`
- [complete] **遮音性能の基準「D値」とは？楽器・用途別の目安を徹底解説**
  - `internal_url`: /ja/soundproof-room/knowledge/bouon-dchiseinou-meyasu/
  - `path`: `src/content/ja/soundproof-room/knowledge/bouon-dchiseinou-meyasu/index.mdx`
- [complete] **防音室サイズ選びの決定版｜失敗しないための判断基準と畳数別ガイド**
  - `internal_url`: /ja/soundproof-room/knowledge/bouon-size-choice/
  - `path`: `src/content/ja/soundproof-room/knowledge/bouon-size-choice/index.mdx`
- [complete] **防音のプロが教えるD値の嘘と本当｜カタログスペックだけで選ぶと失敗する理由**
  - `internal_url`: /ja/soundproof-room/knowledge/d-value-truth-and-myths/
  - `path`: `src/content/ja/soundproof-room/knowledge/d-value-truth-and-myths/index.mdx`
- [complete] **木造アパート2階に「だんぼっち」は危険？点でかかる荷重を分散させるDIY補強術**
  - `internal_url`: /ja/soundproof-room/knowledge/danbocchi-floor-protection/
  - `path`: `src/content/ja/soundproof-room/knowledge/danbocchi-floor-protection/index.mdx`
- [complete] **DIY防音の不都合な真実を解説｜科学的根拠に乏しい製品を見抜く思考法**
  - `internal_url`: /ja/soundproof-room/knowledge/diy-soundproof-truth/
  - `path`: `src/content/ja/soundproof-room/knowledge/diy-soundproof-truth/index.mdx`
- [complete] **自分の部屋を防音室にしたい？DIYの壁防音と専門工事の現実的な選択肢**
  - `internal_url`: /ja/soundproof-room/knowledge/diy-wall-soundproofing-room-guide/
  - `path`: `src/content/ja/soundproof-room/knowledge/diy-wall-soundproofing-room-guide/index.mdx`
- [complete] **HSP気質の方へ。生活音のストレスを劇的に減らす「防音（遮音）カーテン」の正しい選び方と限界**
  - `internal_url`: /ja/soundproof-room/knowledge/hsp-soundproof-curtain-guide/
  - `path`: `src/content/ja/soundproof-room/knowledge/hsp-soundproof-curtain-guide/index.mdx`
- [complete] **100万円クラス防音室の到達レベル｜プロ用途で選ぶべき基準と投資対効果**
  - `internal_url`: /ja/soundproof-room/knowledge/million-yen-soundproof-room-professional/
  - `path`: `src/content/ja/soundproof-room/knowledge/million-yen-soundproof-room-professional/index.mdx`
- [complete] **'近隣騒音の相談件数が示す季節パターン｜最新統計から見る騒音トラブルの実態'** （draft）
  - `internal_url`: /ja/soundproof-room/knowledge/neighborhood-noise-seasonal-pattern-statistics/
  - `path`: `src/content/ja/soundproof-room/knowledge/neighborhood-noise-seasonal-pattern-statistics/index.mdx`
- [complete] **ニトリの吸音・防音グッズはどこまで使える？効果と限界を徹底解説**
  - `internal_url`: /ja/soundproof-room/knowledge/nitori-soundproof-acoustic-guide/
  - `path`: `src/content/ja/soundproof-room/knowledge/nitori-soundproof-acoustic-guide/index.mdx`
- [complete] **騒音苦情への正しい対応｜解決事例と判例から学ぶ受忍限度の境界線** （draft）
  - `internal_url`: /ja/soundproof-room/knowledge/noise-complaint-legal-precedent-manual/
  - `path`: `src/content/ja/soundproof-room/knowledge/noise-complaint-legal-precedent-manual/index.mdx`
- [complete] **OTODASU（オトダス）の実力検証｜深夜2時のボイスチャットは隣室に許されるのか？**
  - `internal_url`: /ja/soundproof-room/knowledge/otodasu-voice-chat-test/
  - `path`: `src/content/ja/soundproof-room/knowledge/otodasu-voice-chat-test/index.mdx`
- [complete] **【個人事業主向け】防音室は贅沢品ではない！「小規模事業者持続化補助金」採択のための申請ノウハウ**
  - `internal_url`: /ja/soundproof-room/knowledge/small-business-soundproof-subsidy-guide/
  - `path`: `src/content/ja/soundproof-room/knowledge/small-business-soundproof-subsidy-guide/index.mdx`
- [complete] **予算別防音室選び方ガイド｜50万円・100万円・200万円で選ぶ方法**
  - `internal_url`: /ja/soundproof-room/knowledge/soundproof-room-budget-selection-guide/
  - `path`: `src/content/ja/soundproof-room/knowledge/soundproof-room-budget-selection-guide/index.mdx`
- [complete] **引越しで防音室を移設する費用は？専門業者の選び方と失敗しない手順**
  - `internal_url`: /ja/soundproof-room/knowledge/soundproof-room-moving/
  - `path`: `src/content/ja/soundproof-room/knowledge/soundproof-room-moving/index.mdx`
- [complete] **防音室はレンタル・リース可能？個人と法人の「一番賢い借り方」と料金比較**
  - `internal_url`: /ja/soundproof-room/knowledge/soundproof-room-rental-lease/
  - `path`: `src/content/ja/soundproof-room/knowledge/soundproof-room-rental-lease/index.mdx`
- [complete] **うちの家は対象？防音工事の補助金エリアの調べ方【空港・自衛隊・道路】**
  - `internal_url`: /ja/soundproof-room/knowledge/soundproof-subsidy-check-guide/
  - `path`: `src/content/ja/soundproof-room/knowledge/soundproof-subsidy-check-guide/index.mdx`
- [complete] **防音室の補助金2026年最新版｜二重窓リノベで最大200万円受給する裏技**
  - `internal_url`: /ja/soundproof-room/knowledge/soundproof-subsidy-news-2025/
  - `path`: `src/content/ja/soundproof-room/knowledge/soundproof-subsidy-news-2025/index.mdx`
- [complete] **【東京・大阪】防音工事で補助金が出る地域は？空港や幹線道路沿いの調べ方**
  - `internal_url`: /ja/soundproof-room/knowledge/soundproof-subsidy-tokyo-osaka/
  - `path`: `src/content/ja/soundproof-room/knowledge/soundproof-subsidy-tokyo-osaka/index.mdx`
- [complete] **【2025年最新】防音窓リフォームで使える補助金制度まとめ｜先進的窓リノベ対応**
  - `internal_url`: /ja/soundproof-room/knowledge/soundproof-window-subsidy-2025-guide/
  - `path`: `src/content/ja/soundproof-room/knowledge/soundproof-window-subsidy-2025-guide/index.mdx`
- [complete] **【2026最新】配信者・VTuber向け防音室導入完全ガイド｜タイミング・資金計画・技術スペック**
  - `internal_url`: /ja/soundproof-room/knowledge/vtuber-soundproof-environment-complete-guide/
  - `path`: `src/content/ja/soundproof-room/knowledge/vtuber-soundproof-environment-complete-guide/index.mdx`

### subcategory: diy

- [complete] **ベーストラップ導入ガイド｜低音こもりの改善術**
  - `internal_url`: /ja/soundproof-room/diy/bass-trap-installation-guide/
  - `path`: `src/content/ja/soundproof-room/diy/bass-trap-installation-guide/index.mdx`
- [complete] **「寝室でテレワーク」がつらい理由。睡眠と仕事を分ける「部屋の中の部屋」レイアウト**
  - `internal_url`: /ja/soundproof-room/diy/bedroom-telework-layout-soundproof/
  - `path`: `src/content/ja/soundproof-room/diy/bedroom-telework-layout-soundproof/index.mdx`
- [complete] **クローゼットを防音室にDIY！費用3万円〜で実現する「自分だけの音空間」 2026**
  - `internal_url`: /ja/soundproof-room/diy/closet-diy-soundproof-room/
  - `path`: `src/content/ja/soundproof-room/diy/closet-diy-soundproof-room/index.mdx`
- [complete] **【図面あり】ホームセンターの資材だけで「自作だんぼっち」！本家の半額で作る設計図公開**
  - `internal_url`: /ja/soundproof-room/diy/danbotchi-diy-blueprints/
  - `path`: `src/content/ja/soundproof-room/diy/danbotchi-diy-blueprints/index.mdx`
- [complete] **配信映えする「LED付き自作吸音パネル」の作り方！光と音を同時に操る**
  - `internal_url`: /ja/soundproof-room/diy/diy-led-acoustic-panels/
  - `path`: `src/content/ja/soundproof-room/diy/diy-led-acoustic-panels/index.mdx`
- [complete] **自作防音室の費用内訳｜材料費だけでいくらかかる？プロの施工と徹底比較**
  - `internal_url`: /ja/soundproof-room/diy/diy-soundproof-room-cost-breakdown/
  - `path`: `src/content/ja/soundproof-room/diy/diy-soundproof-room-cost-breakdown/index.mdx`
- [complete] **防音パネルの罠｜DIY失敗例から学ぶ『遮音と吸音』の物理学的黄金比**
  - `internal_url`: /ja/soundproof-room/diy/diy-soundproof-room-failures-solutions/
  - `path`: `src/content/ja/soundproof-room/diy/diy-soundproof-room-failures-solutions/index.mdx`
- [complete] **DIY防音のコツ｜安価で効果的な遮音・吸音テクニックを音響エンジニアが解剖**
  - `internal_url`: /ja/soundproof-room/diy/diy-soundproofing-tips/
  - `path`: `src/content/ja/soundproof-room/diy/diy-soundproofing-tips/index.mdx`
- [complete] **スーパーの無料段ボールは使えるか？厚さ重視で選ぶ「最強の段ボール」と多重貼りテクニック**
  - `internal_url`: /ja/soundproof-room/diy/free-cardboard-soundproof-tech/
  - `path`: `src/content/ja/soundproof-room/diy/free-cardboard-soundproof-tech/index.mdx`
- [complete] **見た目はヤバいが効果はガチ。布団と段ボールで囲う「ひとり用カラオケボックス」の作り方**
  - `internal_url`: /ja/soundproof-room/diy/futon-cardboard-karaoke-booth/
  - `path`: `src/content/ja/soundproof-room/diy/futon-cardboard-karaoke-booth/index.mdx`
- [complete] **吸音材を貼る位置で音が変わる？モニター裏・スピーカー裏に貼るべき理由**
  - `internal_url`: /ja/soundproof-room/diy/gamer-acoustic-placement/
  - `path`: `src/content/ja/soundproof-room/diy/gamer-acoustic-placement/index.mdx`
- [complete] **【市場整理】屋外用防音カーテン｜防音シートの構造と調達・選定の実務ポイント** （draft）
  - `internal_url`: /ja/soundproof-room/diy/outdoor-soundproof-curtain-market-guide/
  - `path`: `src/content/ja/soundproof-room/diy/outdoor-soundproof-curtain-market-guide/index.mdx`
- [complete] **防音室のエアコン選びと静音化の極意｜2026年最新の空調・換気戦略**
  - `internal_url`: /ja/soundproof-room/diy/proofroom-aircondition-select/
  - `path`: `src/content/ja/soundproof-room/diy/proofroom-aircondition-select/index.mdx`
- [complete] **「遮音窓」と「防音窓」の違いとは？費用と効果で選ぶ窓リフォーム完全ガイド**
  - `internal_url`: /ja/soundproof-room/diy/shanon-vs-bouon-window/
  - `path`: `src/content/ja/soundproof-room/diy/shanon-vs-bouon-window/index.mdx`
- [complete] **自作防音室の費用内訳｜材料費だけでいくらかかる？**
  - `internal_url`: /ja/soundproof-room/diy/soundproof-room-diy-cost/
  - `path`: `src/content/ja/soundproof-room/diy/soundproof-room-diy-cost/index.mdx`
- [complete] **防音室DIYの落とし穴。「遮音シート」の重さで自作ブースが崩壊しないためのフレーム補強術**
  - `internal_url`: /ja/soundproof-room/diy/soundproof-sheet-heavy-diy-tips/
  - `path`: `src/content/ja/soundproof-room/diy/soundproof-sheet-heavy-diy-tips/index.mdx`

### subcategory: solution

- [complete] **吸音材か遮音材か迷う人へ｜あなたの環境で“必要なのはどっち？”徹底ガイド**
  - `internal_url`: /ja/soundproof-room/solution/absorption-vs-soundproofing-materials/
  - `path`: `src/content/ja/soundproof-room/solution/absorption-vs-soundproofing-materials/index.mdx`
- [complete] **防音室での加湿器選び：スチーム式 vs 気化式の結露・湿気シミュレーション** （draft）
  - `internal_url`: /ja/soundproof-room/solution/bouon-humidifier-comparison/
  - `path`: `src/content/ja/soundproof-room/solution/bouon-humidifier-comparison/index.mdx`
- [complete] **【2025年版】格安防音室の残酷な真実。だんぼっち・OTODASU・自作…20万円以下で買える現実解**
  - `internal_url`: /ja/soundproof-room/solution/budget-soundproof-booth-comparison/
  - `path`: `src/content/ja/soundproof-room/solution/budget-soundproof-booth-comparison/index.mdx`
- [complete] **内窓の防音効果を実測｜賃貸DIYポリカ窓から本格インプラスまで徹底比較【2025-2026年版】**
  - `internal_url`: /ja/soundproof-room/solution/diy-internal-window-road-noise-reduction/
  - `path`: `src/content/ja/soundproof-room/solution/diy-internal-window-road-noise-reduction/index.mdx`
- [complete] **配信者のための家電・生活音対策｜冷蔵庫と換気扇のノイズを物理的に沈める方法**
  - `internal_url`: /ja/soundproof-room/solution/diy-refrigeration-noise-reduction/
  - `path`: `src/content/ja/soundproof-room/solution/diy-refrigeration-noise-reduction/index.mdx`
- [complete] **【灼熱対策】0.5畳の防音室にエアコンが付けられない！DIYで「空気の通り道」を作る排熱・換気術**
  - `internal_url`: /ja/soundproof-room/solution/diy-soundproof-ventilation-heat-exhaust/
  - `path`: `src/content/ja/soundproof-room/solution/diy-soundproof-ventilation-heat-exhaust/index.mdx`
- [complete] **静寂の力：なぜ防音室は『最強のメンタルケア』になるのか** （draft）
  - `internal_url`: /ja/soundproof-room/solution/mental-health-benefits-of-silence/
  - `path`: `src/content/ja/soundproof-room/solution/mental-health-benefits-of-silence/index.mdx`
- [complete] **音楽家・演奏家のための防音室導入戦略｜「本職の信用」と「ファンの応援」を賢く使う**
  - `internal_url`: /ja/soundproof-room/solution/musician-soundproof-loan-strategy/
  - `path`: `src/content/ja/soundproof-room/solution/musician-soundproof-loan-strategy/index.mdx`
- [complete] **夜間練習はどこまで許される？深夜でも楽器を弾くための防音室選びと「振動」の罠**
  - `internal_url`: /ja/soundproof-room/solution/night-practice-soundproof-guide/
  - `path`: `src/content/ja/soundproof-room/solution/night-practice-soundproof-guide/index.mdx`
- [complete] **防音室の温湿度管理ガイド2026｜暑さ・結露・乾燥を物理的に防ぐ改善術**
  - `internal_url`: /ja/soundproof-room/solution/proofroom-humidity-airconditionlist/
  - `path`: `src/content/ja/soundproof-room/solution/proofroom-humidity-airconditionlist/index.mdx`
- [complete] **防音室の音漏れ対策ガイド2026｜原因特定から段階的改善のマニュアル**
  - `internal_url`: /ja/soundproof-room/solution/proofroom-soudmore-manual/
  - `path`: `src/content/ja/soundproof-room/solution/proofroom-soudmore-manual/index.mdx`
- [complete] **短時間でも深い眠りを：『超静寂睡眠』がもたらす驚異の疲労回復効果** （draft）
  - `internal_url`: /ja/soundproof-room/solution/sleep-quality-soundproof-room/
  - `path`: `src/content/ja/soundproof-room/solution/sleep-quality-soundproof-room/index.mdx`
- [complete] **【シミュレーション】防音室で音はどこまで消える？用途別の軽減率を徹底検証**
  - `internal_url`: /ja/soundproof-room/solution/sound-reduction-simulation/
  - `path`: `src/content/ja/soundproof-room/solution/sound-reduction-simulation/index.mdx`
- [complete] **ドラム防音のD値基準｜振動対策と個体伝搬音の壁**
  - `internal_url`: /ja/soundproof-room/solution/soundproof-performance-drum/
  - `path`: `src/content/ja/soundproof-room/solution/soundproof-performance-drum/index.mdx`
- [complete] **防音室の解体・処分完全ガイド｜自分でやるリスクと業者費用の相場**
  - `internal_url`: /ja/soundproof-room/solution/soundproof-room-demolition-guide/
  - `path`: `src/content/ja/soundproof-room/solution/soundproof-room-demolition-guide/index.mdx`
- [complete] **2畳以上の広々防音室ガイド｜グランドピアノ・声楽・プロ仕様の空間作り**
  - `internal_url`: /ja/soundproof-room/solution/soundproof-room-large-size/
  - `path`: `src/content/ja/soundproof-room/solution/soundproof-room-large-size/index.mdx`
- [complete] **防音室の花粉対策｜換気を止めずに春の「花粉・黄砂」をシャットアウトする方法**
  - `internal_url`: /ja/soundproof-room/solution/soundproof-room-pollen-protection/
  - `path`: `src/content/ja/soundproof-room/solution/soundproof-room-pollen-protection/index.mdx`
- [complete] **テレワーク・在宅勤務のための防音室ローン活用｜集中環境と耳の健康への戦略投資**
  - `internal_url`: /ja/soundproof-room/solution/telework-soundproof-loan-strategy/
  - `path`: `src/content/ja/soundproof-room/solution/telework-soundproof-loan-strategy/index.mdx`
- [complete] **Web会議の「声漏れ」を劇的に減らす｜パーティションを魔法の壁に変える裏技**
  - `internal_url`: /ja/soundproof-room/solution/workbooth-office-soundproof-trend/
  - `path`: `src/content/ja/soundproof-room/solution/workbooth-office-soundproof-trend/index.mdx`

---

## 参考（ルール）

- `.cursor/rules/bouon-internal-link-postlist.mdc`
- `.cursor/skills/internal-link-ops/SKILL.md`

