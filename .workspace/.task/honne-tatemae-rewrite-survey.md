# 本音と建前リライト調査（既存記事の全体リライト検討）

- **作成日**: 2026-09-05
- **背景**: `.agents/bouon-writer.md`（本音と建前シンキングルール）と新スキル `/power-up-article` を使って、既存記事を slug 固定のまま検索意図によりフィットするようリライトする構想が出た。全211記事に着手する前に、まず「本音への言及が薄い記事がどれだけあるか」「着手する価値があるか」を調査した。
- **結論**: **価値あり**。211記事中83記事（約39%）が本音を示すキーワードを一切含まず、特に防音室ユニット比較・ローン計画・地域別賃貸ガイドなど「個人の高額な意思決定」を扱う記事群で建前オンリー構成が確認できた。全記事一括ではなく、Tier1から段階的に着手することを推奨する。

---

## 調査方法（一次スクリーニング、精読ベースではない点に注意）

1. `node .workspace/scripts/build-interlink-postlist.mjs` で記事一覧を最新化（211記事、`ja`のみ・`en`は廃止済みで0件）
2. `src/content/ja/**/index.mdx` に対し、本音を示す語彙（不安・後悔・焦り・見栄・諦め・クレーム・揉め・我慢・恥ずかし・気まずい・本音・限界・プレッシャー・心配・ストレス・罪悪感・半信半疑・渋々・怖い・恐怖・言われた・怒られ・嫌われ 等）を正規表現でGrep
3. **1語もヒットしなかった83記事**を「本音への言及がほぼゼロ」の一次候補として抽出
4. カテゴリ別に4〜5記事を実際に読み、ヒューリスティックの妥当性を検証（下記「検証サンプル」参照）

**注意**: これはキーワードの有無による一次スクリーニングであり、ヒットした128記事が本音に十分踏み込めているかは未検証（表面的に単語が1つ出ているだけの可能性もある）。Tier着手時は個別に `/power-up-article` で深掘りが必要。

### 検証サンプル（実際に読んで確認）

| 記事 | 確認結果 |
|---|---|
| `soundproof-room/bouon-osusume-hikaku` | 導入で「失敗したくない」という表層的な不安には触れるが、直後に純粋なスペック・ROI比較へ移行。裏読み（配偶者への言い訳・粗大ゴミ化への恐怖等）は未着手 |
| `local/chiba-soundproof-rental-guide` | 完全に建前オンリー。家賃相場・エリア特徴のみで、読者がなぜ千葉を検討しているか（都心を諦める葛藤・通勤とのトレードオフ等）への言及ゼロ |
| `creator/streamer-noise-quick-fix` | 「壁ドンされた」という具体的シーンはあるが、その後は対策の実務解説のみ。焦り・恥・諦めの深掘りなし |
| `business/soundproof-industry-news-2026-06` | 業界ニュースまとめで個人の読者像が存在しない。本音と建前フレームワークの適用対象外（CLAUDE.mdの既存方針どおり） |

---

## Tier別candidate一覧（計83記事）

### Tier1（最優先・23記事）: 高額な個人の意思決定 — 本音アプローチの効果が最も出やすい ✅完了（2026-09-05、全23記事リライト・noindex解除・ビルド確認・コミット/push済み）

防音室ユニット比較・ローン/補助金・賃貸のコスパ判断など、「買うか迷っている」「言い訳を探している」読者が多いテーマ。

| category | slug | title |
|---|---|---|
| soundproof-room | assembly-type-comparison | 組み立て式防音室おすすめ比較｜用途別（楽器・ゲーム・配信）と価格帯 |
| soundproof-room | bouon-osusume-hikaku | 【2026最新】防音室おすすめ比較｜失敗しない選び方と5年後の売却価格（ROI）を分析 |
| soundproof-room | budget-soundproof-booth-comparison | 格安防音室は夏に地獄化する？だんぼっち・OTODASU排熱リスクと中古購入の注意点 |
| soundproof-room | construction-types-cost-comparison | 防音工事の種類と価格比較｜壁・床・開口部、業者の選び方まで |
| soundproof-room | kawai-nasal-soundproof-room-guide | カワイ防音室ナサール（Nasal）完全ガイド｜特徴・価格・ヤマハとの違い |
| soundproof-room | night-practice-soundproof-guide | 夜間練習はどこまで許される？深夜でも楽器を弾くための防音室選びと「振動」の罠 |
| soundproof-room | piano-room-guide | ピアノ防音室ガイド｜アップライト・グランド別の費用とマンション設置の条件 |
| soundproof-room | proofroom-aircondition-select | 防音室のエアコン選びと静音化の極意｜2026年最新の空調・換気戦略 |
| soundproof-room | proofroom-humidity-airconditionlist | 防音室の温湿度管理ガイド2026｜暑さ・結露・乾燥を物理的に防ぐ改善術 |
| soundproof-room | soundproof-performance-drum | ドラム防音のD値基準｜振動対策と個体伝搬音の壁 |
| soundproof-room | soundproof-room-budget-selection-guide | 予算別防音室選び方ガイド｜50万円・100万円・200万円で選ぶ方法 |
| soundproof-room | soundproof-room-demolition-guide | 防音室の解体・処分完全ガイド｜自分でやるリスクと業者費用の相場 |
| soundproof-room | soundproof-room-large-size | 2畳以上の広々防音室ガイド｜グランドピアノ・声楽・プロ仕様の空間作り |
| soundproof-room | soundproof-room-size | ユニット防音室のサイズと選び方：演奏スタイルに合わせた内寸確認法 |
| money | bouon-asset-value-analysis | 防音室の資産価値分析｜リセールバリューと不動産投資的視点でのROI |
| money | owner-renovation-roi-simulation-tool | 【A4一枚】防音リノベ ROI収益シミュレーション |
| money | piano-soundproof-mortgage-tax-guide | 防音室・ピアノ室は住宅ローンに組み込める｜資金計画と固定資産税の注意点 |
| money | soundproof-room-loan-guide | 防音室ローン・分割払い完全ガイド2026｜月々いくら？審査・無金利・節税を解説 |
| money | soundproof-subsidy-news-2025 | 防音室の補助金2026年最新版｜二重窓リノベで最大200万円受給する裏技 |
| money | soundproof-window-subsidy-2025-guide | 【2025年最新】防音窓リフォームで使える補助金制度まとめ｜先進的窓リノベ対応 |
| money | streamer-tax-strategy | 配信者の防音室は経費にできる｜30万円特例で節税する減価償却ガイド |
| soundproof-rental | soundproof-rental-cost-performance-guide | 防音賃貸の家賃相場はいくら？コスパ・通勤・実用性で選ぶ完全ガイド【2026】 |
| soundproof-rental | owner-renovation-musician-24h-practice-strategy | 「24時間演奏可」物件という最強の差別化：プロ奏者・音楽講師を長期入居者に変えるオーナー戦略（※読者はオーナー側。本音は「空室・クレームへの恐怖」） |

### Tier2（次点・30記事）: 生活シーンの悩み — クリエイター・DIY層の本音 ✅完了（2026-09-05、全30記事リライト。build/commit/pushは未実施、ユーザー判断待ち）

配信者・DIY実践者の「親にバレたくない」「近隣に嫌われたくない」「お金をかけたくない」系の悩み。

| category | slug | title |
|---|---|---|
| creator | asmr-external-noise-elimination | ASMR配信者が外音を消す部屋づくり｜現実的な防音対策まとめ |
| creator | cable-noise-ground-loop-prevention | 配信の『サー』『ジー』音はグランドループが原因？アース・ケーブル対策ガイド |
| creator | collab-streaming-soundproof-space | 2人配信・コラボ収録できる防音部屋の広さと最低条件 |
| creator | farmland-prefab-streaming-room-legal | 休耕地・畑にプレハブで配信部屋は作れる？農地転用と建築基準法を解説 |
| creator | female-streamer-privacy-soundproof | 女性配信者が「一人暮らし」を特定されないための音の対策｜ボイスチェンジャーと防音壁 |
| creator | parenting-streamer-soundproof | 子育て・同居人と暮らす配信者の防音と生活音調整術 |
| creator | podcast-collab-recording-acoustics | 2人以上のポッドキャスト・対談配信｜マイク構成と音響セッティングの基本 |
| creator | singer-instrumentalist-stream-soundproof | ピアノ・ギター弾き語り配信の防音設計｜楽器音と声を同時に処理する |
| creator | soundproof-booth-food-odor-management | 防音ブース内での飲食、実は匂いが一番残る｜配信中の消臭・換気マネジメント |
| creator | soundproof-room-fatigue-ventilation | 防音室で疲れる原因と換気対策｜配信者の作業環境改善ガイド |
| creator | streamer-budget-temp-soundproof | 防音室を買う前に試したい2万円以下の騒音対策【配信者向け】 |
| creator | streamer-noise-quick-fix | ゲーム配信者が防音より先にやるべき騒音対策3つ（※GSC順位急落中、`weekly-task.md`参照） |
| creator | streamer-soundproof-budget-roadmap | 5万円・20万円・50万円｜予算別 配信者の防音環境アップグレードロードマップ |
| creator | streamer-soundproof-rental-share | 配信者向け防音ブースのレンタル・シェアスタジオ比較｜月額で使えるサービス一覧 |
| creator | streamer-soundproof-timing | 配信者が防音室を買うべきタイミング｜月収・再生数・苦情リスクで判断する方法 |
| creator | streaming-mic-noise-room | マイクの「音割れ・ノイズ」を防ぐ部屋づくり｜吸音と遮音どちらが先か |
| creator | streaming-pc-fan-noise-mic | 配信のマイクノイズはPC本体が原因？ファン音・振動対策ガイド |
| creator | streaming-room-reverb-absorption | 配信部屋の反響を消す吸音パネルの選び方と設置場所 |
| creator | utaite-vs-streamer-soundproof | 歌ってみた・宅録の防音とゲーム配信の防音｜何が違うのか |
| creator | voice-chat-soundleak-fix | ボイスチャットの音漏れを今すぐ防ぐ7つの方法｜家族・隣人への配慮 |
| diy | bass-trap-installation-guide | ベーストラップ自作・設置ガイド｜低音こもりを解消する配置・測定の全手順（※`weekly-task.md`でクリック獲得エンジンと記録済み。リライト時は既存の好調な導線を壊さない） |
| diy | closet-diy-soundproof-room | 防音室を自作する方法｜クローゼットDIYで3万円から作れる録音ブース |
| diy | danbotchi-diy-blueprints | 【図面あり】ホームセンターの資材だけで「自作だんぼっち」！本家の半額で作る設計図公開 |
| diy | diy-led-acoustic-panels | 配信映えする「LED付き自作吸音パネル」の作り方！光と音を同時に操る |
| diy | diy-soundproof-room-failures-solutions | 防音パネルの罠｜DIY失敗例から学ぶ『遮音と吸音』の物理学的黄金比 |
| diy | diy-soundproofing-tips | DIY防音のコツ｜安価で効果的な遮音・吸音テクニックを音響エンジニアが解剖 |
| diy | free-cardboard-soundproof-tech | スーパーの無料段ボールは使えるか？厚さ重視で選ぶ「最強の段ボール」と多重貼りテクニック |
| diy | futon-cardboard-karaoke-booth | 見た目はヤバいが効果はガチ。布団と段ボールで囲う「ひとり用カラオケボックス」の作り方 |
| diy | gamer-acoustic-placement | 吸音材を貼る位置は一次反射面が最優先｜モニター裏・スピーカー裏の貼り方 |
| diy | soundproof-room-diy-cost | 自作防音室の費用内訳｜材料費だけでいくらかかる？ |

### Tier3（バッチ処理向き・15記事）: 地域別賃貸ガイド ✅15本完了（2026-09-05。11本は本音リライト、4本は新ポジショニングでの再構築。詳細は下記）

**方針転換（2026-09-05）**: 当初は「共通の本音導入パターンを都市名だけ差し替えて横展開」という効率化案だったが、ユーザーから「テンプレ構成と断定しているからこそランダム性を追加した現在のライティングルールにおいては改善する余地がある」と指摘され、**単一パターンの使い回しは採用しなかった**。実際には11記事それぞれ、その都市固有の実在情報（沿線名・大学名・家賃相場・記事内で既に言及されている独自の切り口）から個別に本音を導出し、型（問いかけ型・断定型・状況描写型・警告型）も重複させていない。

| category | slug | title |
|---|---|---|
| local | chiba-soundproof-rental-guide | 【2026最新】千葉の防音賃貸ガイド｜船橋・松戸・市川の最新相場と穴場エリア |
| local | fukuoka-soundproof-rental-guide | 【2026最新】福岡の防音賃貸ガイド｜天神・博多・西新の最新相場と選び方 |
| local | hamamatsu-soundproof-rental-guide | 【2026最新】浜松の防音賃貸ガイド｜楽器の街ならではの相場と選び方 |
| local | hiroshima-soundproof-rental-guide | 広島で楽器可物件を探すなら「音大エリア」を狙え！中区・エリザベト周辺の防音事情と家賃相場 |
| local | kanagawa-soundproof-rental-guide | 防音室 賃貸 神奈川の相場・人気エリア・選び方【2026年最新】 |
| local | kanazawa-soundproof-rental-guide | 【2026最新】金沢の防音賃貸ガイド｜香林坊・大学周辺の相場と選び方 |
| local | kobe-soundproof-rental-guide | 【2026最新】神戸の防音賃貸ガイド｜三宮・灘・西宮の相場と選び方 |
| local | kumamoto-soundproof-rental-guide | 【2026最新】熊本の防音賃貸ガイド｜中心部・大学周辺の相場と選び方（※`task-list.md`でnoindex検討中の1本。着手前に方針確認） |
| local | kyoto-soundproof-rental-guide | 【2026最新】京都の防音賃貸ガイド｜中心部・伏見・嵐山の相場と選び方 |
| local | nagoya-soundproof-rental-guide | 【2026最新】名古屋の防音賃貸ガイド｜栄・今池・八事の最新相場と選び方 |
| local | niigata-soundproof-rental-guide | 【2026最新】新潟の防音賃貸ガイド｜万代・古町・大学周辺の相場と選び方（※noindex検討中） |
| local | okayama-soundproof-rental-guide | 【2026最新】岡山の防音賃貸ガイド｜岡山駅周辺・倉敷方面の相場と選び方（※noindex検討中） |
| local | saitama-soundproof-rental-guide | 防音室 賃貸 埼玉の相場・人気エリア・選び方【2025年最新】 |
| local | sapporo-soundproof-rental-guide | 札幌は楽器演奏に最高の環境？「二重窓」標準装備がもたらす防音メリットと物件探しのコツ |
| local | sendai-soundproof-rental-guide | 宮城教育大学生向け｜家賃7万円以下で探す仙台の防音賃貸・練習室代替案 |

**注意**: `kanazawa`・`okayama`・`kumamoto`・`niigata`の4本は`task-list.md`の「G4後続」でnoindex化を検討中（表示ゼロ継続の場合）だったが、2026-09-05に「差別化不足」という診断そのものを解消する再構築を実施した（下記「保留4本の再構築」参照）。noindexはまだ適用されていない（今後もW32〜W33のGSC観測待ち）。

### 保留4本の再構築（2026-09-05）

ユーザーの提案により、当初のTier3リライトとは別に、この4本を「テンプレ型で差別化が弱い」という診断から「東京・大阪より安く、静かに拠点を構えられる場所」という積極的なポジショニングへ再構築した。単一の使い回し文言ではなく、各都市固有の交通事情（新幹線・空港のアクセス実態を正確に確認）を根拠に組み立てている。

| slug | 新しい訴求軸（都市固有の事実に基づく） |
|---|---|
| kanazawa | 北陸新幹線で東京駅まで最速2時間半。美大生・音楽家の低コスト創作拠点 |
| okayama | 大阪へ新幹線1時間弱、東京へも乗り換えなし約3時間強。西日本の交通結節点としての拠点性 |
| kumamoto | 熊本空港⇄羽田が空路約1時間35分、博多へ新幹線35分（新幹線でのTokyo直通はないため空路で正確に訴求） |
| niigata | 上越新幹線で東京駅まで最速2時間。音楽イベントが盛んな土地柄と組み合わせた拠点性 |

共通して「資金に余裕のあるフリーランス・ノマドワーカーの静かな拠点」「音大生・配信者/クリエイターの低コスト活動拠点」という2つのペルソナ・ベネフィットを打ち出した。title/descriptionも新しい訴求軸に合わせて更新。既存のエリア別相場・注意点セクションは維持し、導入部とまとめに新セクションを追加する形。段落分割・見出し数字バグチェックも合わせて実施（バグ該当なし）。全4本`lastmod`を2026-09-05に更新。noindexは未適用のまま。`pnpm build`・コミット・pushは未実施。

### Tier4（除外推奨・15記事）: 個人の悩みが薄いテーマ

市場レポート・業界ニュース・技術リファレンスは、CLAUDE.mdの既存方針（「市場・ニュース系: アフィリエイトロジックは無効」）どおり読者個人の意思決定ドラマが存在しないため、本音と建前フレームワークの適用対象外と判断。

| category | slug | title |
|---|---|---|
| business | global-soundproof-market-trends | 世界の防音市場予測2026｜北米・欧州・アジアの潮流と「住まいの静寂」の価値 |
| business | japan-bouonproof-marketnextasia | 【2026】日本の防音市場は次にアジアのどこを攻めるべきか｜中国・韓国・ベトナムの最新動向 |
| business | report-japan-asmr-vtuber-streaming-studio-standard | 【技術解説】ASMR・VTuberに求められる「配信専用スタジオ」の防音・熱対策基準 (2026) |
| business | shared-streaming-studio-growth-pricing-utilization | シェア型配信スタジオが急成長｜利用料金の相場と稼働率の最新データ |
| business | soundproof-industry-news-2026-06 | 防音賃貸・防音室ニュースまとめ｜2026年最新の業界動向と新製品情報 |
| business | soundproof-market-esg-trend | 防音市場にESGの波｜省エネ構造・循環素材がもたらす新トレンド |
| business | soundproof-renovation-cost-outlook-2026 | 防音リノベ費用は2027年夏まで高止まり｜高騰の背景とオーナー投資判断 |
| business | workbooth-office-soundproof-trend | Web会議の「声漏れ」を劇的に減らす｜パーティションを魔法の壁に変える裏技 |
| knowledge | db-reduction-familiar-sound-scale | 防音室の-dB軽減効果とは？楽器・交通音・空港・配信音で分かる体感早見表 |
| knowledge | ground-loop-noise-basics | アース線とノイズの関係を基礎から解説｜グランドループの仕組みと対処 |
| knowledge | neighborhood-noise-seasonal-pattern-statistics | 近隣騒音トラブルが増える季節パターン｜最新統計から読み解く原因と先手対策 |
| knowledge | soundproof-material-spec-chart | 防音材スペック早見表｜面密度・TL値・D値の対応を一覧で比較できる資料 |
| knowledge | tokyo-bouon-whitekyuon-okudake-review | 東京防音レビュー｜ホワイトキューオンとOkudakeは合うか |
| soundproof-rental | bouonrental-market-research2025 | 【2025年最新】防音賃貸の家賃相場とトレンド｜需要30倍の衝撃と狙い目エリア |
| soundproof-rental | report-japan-soundproof-rental-market-needs | 【調査報告】首都圏・関西圏における高性能防音賃貸市場の定量的分析（2025-2026） |

---

## パイロット実施（2026-09-05）

Tier1から3記事を選び、`/power-up-article`の分析手順（Step1〜4）を適用したうえで改稿案をユーザーに提示・承認を得て反映済み。slug・タイトル・description・比較表・見出し構成は変更せず、導入部の共感フックと小節1つの追加のみ（構造リライトではなく本音レイヤーの追加が目的のため）。

| 記事 | 反映内容 | 反映前のGSC状況（参考） |
|---|---|---|
| `soundproof-room/bouon-osusume-hikaku` | 導入に「趣味への罪悪感」「配偶者への説得材料が欲しい」を追加。まとめに家族向け記事への内部リンク追加。2026-09-05追加修正: (1) title/description/ROI訴求を「5年後の売却価格」中心から「今の悩み・将来のリスクの解消」中心に再構築、(2) セフィーネ等の最高級モデル部分に「本気度の証明」「クレーム不安からの解放」の本音を追加、(3) OTODASU(C.)セクションを「コスト最優先」から「住宅環境（RC造/木造・戸建て距離・同居人有無）で選ぶ」ロジックに再構築 | isHighPriority・既存流入あり |
| `soundproof-room/construction-types-cost-comparison` | 導入に「業者に高額請求される不安」を追加。業者選びセクションに「相場から外れた見積もりの注意点」小節を新設 | 表示12・順位44.1・CTR0%（weekly-task記録済み） |
| `money/soundproof-room-loan-guide` | 導入に「借金への後ろめたさ」を追加・無金利ローンを「後ろめたくない選択」として再定義。まとめに家族向け記事への内部リンク追加 | データ未記録（今回が実質初回のベースライン） |

いずれも`lastmod`を2026-09-05に更新済み。`pnpm build`は本ファイル作成時点では未実行（ユーザー手動確認の運用のため）。

## Tier1全記事への展開完了（2026-09-05）

パイロット3記事の結果を受け、ユーザーの「概ねの調整は終えたのでTier1候補記事を全て改善してほしい」という指示によりTier1残り20記事にも同じ手法を適用した。3つのサブエージェントに分担（soundproof-room前半6・soundproof-room後半6+soundproof-rental2・money6）。

**適用内容（全23記事共通）**:
- 記事固有の本音・建前分析（`.agents/bouon-writer.md`の手順）。廉価帯/高級帯で本音の質を変える（廉価＝妥協の言い訳・粗大ゴミ化への恐怖、高級＝本気度の証明・悩みからの解放）
- 導入フックは[[feedback_honne_hook_avoid_template]]に従い記事ごとに型を変えた（断定型・問いかけ型・状況描写型など）。3記事パイロットの定型フックは使い回していない
- ROI訴求がある記事は「資産売却額」ではなく「悩みの解消」軸に再構築（例外: `money/bouon-asset-value-analysis`・`money/owner-renovation-roi-simulation-tool`は記事テーマ自体が資産分析のためROI=資産軸のまま）
- オーナー・大家ペルソナの記事（`soundproof-rental/owner-renovation-musician-24h-practice-strategy`・`money/owner-renovation-roi-simulation-tool`）は「空室リスクへの恐怖」「クレーマー入居者への不安」等、テナント側と異なる本音セットを使用
- [[feedback_mobile_paragraph_spacing]]のスマホ優先段落分割ルールを全記事に適用（既存の密集段落も含め全面的に見直し）
- 全記事`lastmod`を2026-09-05に更新。slug・カテゴリ・タグは変更なし

**作業中に見つかった付随課題**:
- `soundproof-room/budget-soundproof-booth-comparison`は`noindex: true`が設定済みだったが、2026-09-05にユーザー判断で解除済み（frontmatterと`astro.config.mjs`のsitemapフィルター両方修正、ビルド確認済み）
- `soundproof-room/soundproof-room-size`のH3見出しで「8畳〜1.0畳」「2畳〜1.5畳」等、数字の先頭（0.5/1.2/2.0のうち整数部）が欠落していたバグを発見・本文の文脈から復元して修正（`0.8畳〜1.0畳`等）。過去の「見出し手動番号禁止」ルール一括適用時に誤って数字を削った可能性があり、**他の未処理記事にも同様のバグが残っている可能性がある**（Tier2/3着手時、または別途全記事横断チェックで確認要、未対応）
- 複数記事で`*`箇条書きマーカーが`-`形式ルール違反のまま残っていたため`-`に統一（記法ルール違反の副次修正）

**Tier1完了・クローズ（2026-09-05）**: 全23記事リライト → noindex解除 → `pnpm build`確認（223ページ、エラーなし）→ コミット`843c212` → `origin/main`へpush済み。

## Tier2全記事への展開完了（2026-09-05）

ユーザーの「Tier2の作業を進めて」という指示によりTier2全30記事（creator20・diy10）にTier1と同じ手法を適用した。3つのサブエージェントに分担（creator前半10・creator後半10・diy10）。

**適用内容**: Tier1と同様の本音・建前分析、スマホ優先の段落分割、フック型の使い回し回避（計53記事分のフックと重複させていない）を全記事に適用。Tier2固有の本音は「親・同居人にバレたくない」「近隣クレームへの恐怖」「業者に頼むお金がない/頼みたくない恥ずかしさ」「見た目がチープで恥ずかしい」「機材のせいにしたい」等、日常的な羞恥心・気まずさ系が中心。ROI再構築が該当した記事は0件（Tier2にROI訴求記事なし）。

**好調記事への配慮**: `weekly-task.md`で言及のある2記事は既存の強みを壊さないよう変更を抑制。
- `creator/streamer-noise-quick-fix`（GSC順位急落中）: title/description/内部リンク構造は不変、本音追加と軽微な段落分割のみ
- `diy/bass-trap-installation-guide`（サイト唯一のクリック獲得エンジン）: 見出し構成・内部リンクは維持、導入に本音を1文追加する程度の軽微な変更のみ

**作業中に見つかった付随バグ（修正済み）**:
- `diy/futon-cardboard-karaoke-booth`: 本文の締めの一文が誤ってH2見出し（`## 「お金はないけれど...」`）としてフォーマットされていたのを通常の段落に修正
- `diy/soundproof-room-diy-cost`: 冒頭に壊れた画像記法の残骸（`!自作防音室の費用内訳｜材料費だけでいくらかかる？` というURL/alt無しの孤立した`!`）が残っていたのを削除
- 見出し数字欠落バグ（`soundproof-room-size`型）はTier2の60記事では検出されず

**スコープ外の気づき（未対応）**:
- `creator/podcast-collab-recording-acoustics`（AffiliateCardのslug`acoustic-panel-felmenon`）・`creator/singer-instrumentalist-stream-soundproof`（`防振-mat-piano`）で、AffiliateCardのslugが日本語混じりなど不自然な命名になっている。`src/data/affiliates.ts`のslug規約と照らして問題ないか別途確認要

全30記事: `lastmod`を2026-09-05に更新、slug・カテゴリ・タグは未変更、CtaBox未使用（対象製品への言及なし）、noindex記事は0件。

## Tier3（地域ガイド11本）への展開完了（2026-09-05）

ユーザーの「11本は進めていい」という指示により、Tier3のうちnoindex判断待ちの4本（後述）を除く11本にリライトを実施した。2つのサブエージェントに分担（local前半6・local後半5）。

**noindex判断待ちの4本（今回は対象外）**: `kanazawa`・`okayama`・`kumamoto`・`niigata`。`.workspace/.task/sitecheck-and-postcheck/suggest-task.md`の「local 17本の振り分け表（G4成果物・2026-07-20確定）」で「テンプレ型（駅名・大学周辺）で差別化弱い」「統合候補（要観察）」と判定され、W32〜W33のGSCで表示ゼロが続けばnoindex検討という条件付き保留になっている。ユーザーには「差別化が弱いという診断そのものが今回のリライトで解消しうる」旨を共有済み。着手する場合は別途判断が必要。

**リライトした11本の本音（都市固有の根拠から個別導出、型の重複なし）**:

| slug | 本音の要旨 | 型 |
|---|---|---|
| chiba | 東京を諦めたと思われたくない見栄／リモートワークでの正当化 | 問いかけ型 |
| fukuoka | 地方拠点で音楽/配信シーンから取り残される焦り | 断定型 |
| hamamatsu | 「楽器の街だから大丈夫」と思い込みたい／個別確認を避けたい | 問いかけ型 |
| hiroshima | 音大受験の高揚感の裏での物件探し出遅れ焦り／規約への気まずさ | 状況描写型 |
| kanagawa | 東京での内見疲れの末の妥協という敗北感の払拭 | 状況描写型 |
| kobe | オシャレ・築浅イメージ先行で防音性能を見落とす不安 | 警告型 |
| kyoto | 中古・リノベで防音効果が本当に出るか不安／邦楽器への対応が半信半疑 | 問いかけ型 |
| nagoya | 土地勘のないまま来ることになった焦り／格下感の払拭 | 断定型 |
| saitama | 「ダサイタマ」と言われる気まずさ（埼玉特有の文化的ステレオタイプ） | 状況描写型 |
| sapporo | 本州から来て音楽環境レベルが下がるのではという不安 | 状況描写型 |
| sendai | 奨学金・仕送りへの引け目、同期との比較による焦り（**noindex: trueは解除せず維持**） | 状況描写型 |

**付随修正**: `hiroshima`・`sapporo`で`*`箇条書きマーカーの記法ルール違反を`-`に統一。見出し数字欠落バグ（`soundproof-room-size`型）は11本とも該当なし。全記事`lastmod`を2026-09-05に更新、slug/カテゴリ/タグは未変更。`pnpm build`・コミット・pushは未実施。

## 効果測定（次回GSCエクスポート以降）

- [ ] Tier1全23記事の表示回数・CTR・掲載順位の変化をGSC次回エクスポートで確認する（`weekly-task.md`のPDCAサイクルに組み込み）。特に`construction-types-cost-comparison`（元CTR0%）は改善が最も見えやすい
- [ ] Tier2全30記事についても同様にGSC推移を確認する
- [ ] Tier3の11記事についても同様にGSC推移を確認する（local系はW30時点で表示ほぼゼロだったため、新規需要の掘り起こしが見えるかが焦点）

## 次のアクション

1. Tier1・Tier2・Tier3（計64記事）の効果をGSC次回エクスポートで確認する（ユーザー判断待ち）
2. 見出し数字欠落バグ・AffiliateCard slug表記の横断チェックは`task-list.md`に作業内容を記録済み。着手判断はユーザー待ち
3. Tier2・Tier3の`pnpm build`確認 → コミット → push を行うか判断する
4. `kanazawa`・`okayama`・`kumamoto`・`niigata`の4本（noindex判断待ち）は、「差別化不足の診断を今回のリライトで解消できるか試す」対象にするか、それとも当初方針どおりGSC観測を待つかを判断する

## 参照

- `.agents/bouon-writer.md`（本音と建前シンキングルール本体）
- `.claude/commands/power-up-article.md`（本コマンドで1記事ずつ実行）
- `.cursor/rules/bouon-rewrite-strategy.mdc`（構造・データ面のリライト戦略、本調査と併用）
- `.workspace/.data-set/interlink-postlist.md`（2026-09-05に再生成済み、211記事）
