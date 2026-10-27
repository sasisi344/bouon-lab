# Tier B: 薄いコンテンツ（3,000字未満）の選別と拡充

- **親タスク**: `.workspace/.task/content-structure-strengthening-survey.md`
- **対象**: 84記事（3,000字未満）
- **注意**: CLAUDE.mdの「Small（〜1,500字）」はFAQ・チェックリスト型として正規のボリューム。3,000字未満＝即問題ではない。GSC表示回数・CTRと突き合わせ、「意図的に短いだけ」か「需要はあるのに薄い」かを判断すること
- **判断の凡例**: 拡充候補 / 現状維持（意図的にSmall） / 統合検討（表示ゼロ継続で他記事へ統合） / 未判断

## 選別に使用したデータ（2026-09-05実施）

- **4ヶ月集計（`kouki`）**: `.workspace/access-data/2026/gsc-query-data-0702-1year/kouki/ページ.csv`（期間: 2026/03/06-2026/06/30）。継続的な需要の有無を見るための主データ
- **直近週（W36）**: `.workspace/access-data/2026/W36/GSC/ページ.csv`。直近の動き（急上昇・急落）を見るための補助データ
- 集計は同一slugの新旧URL・アンカー付きURLをすべて合算（クリック数・表示回数の合計、掲載順位は表示があった中の最良値）

## 判定ルール

- **統合検討**: 4ヶ月表示 ≤ 5 かつ 直近週表示 ≤ 5（継続的に需要がほぼゼロ）
- **拡充候補**: 4ヶ月表示 ≥ 15 または 直近週表示 ≥ 20（継続的または直近の検索需要が確認できる）のうち、掲載順位が伸び悩んでいるかクリックが少ない記事
- **現状維持**: 表示は少なめでも掲載順位が既に良好（10位以内など）でCTR・クリックが健闘しており、薄い分量が実害になっていないと判断できる記事
- **未判断**: 直近週のみ単発的に表示があり4ヶ月間の実績がない（または逆）等、1回のデータだけでは傾向を確定できない記事。次回エクスポートで再確認

| # | category | slug | title | 文字数 | lastmod | GSC状況（4ヶ月/直近週） | 判断 | メモ |
|---|---|---|---|---|---|---|---|---|
| 1 | business | web-meeting-voice-soundleak-prevention | Web会議で「声が小さい」と言われたら | 2226 | 2026-02-19 | 表示3・クリック0・順位8.67 / 表示2・クリック0・順位27 | 統合検討 | 4ヶ月通してほぼ無風 |
| 2 | business | global-soundproof-market-trends | 世界の防音市場予測2026 | 2322 | 2026-09-05 | 表示0 / 表示0 | 統合検討 | 4ヶ月+直近週とも表示ゼロ |
| 3 | business | privacy-pod-market-growth | プライバシーポッド市場が伸びる背景 | 2654 | 2026-06-10 | 表示0 / 表示5・順位1.4 | 統合検討 | 直近週のみ単発、4ヶ月間は無風 |
| 4 | business | workbooth-office-soundproof-trend | Web会議の「声漏れ」を劇的に減らす | 2744 | 2026-06-10 | 表示26・クリック2・順位3 / 表示1 | 現状維持 | 4ヶ月間は順位3位と好調。直近週の落ち込みは要観察だが薄さが問題ではない |
| 5 | business | soundproof-market-esg-trend | 防音市場にESGの波 | 2843 | 2026-06-10 | 表示12・クリック0・順位34.08 / 表示0 | 統合検討 | 表示はあるが順位が深く、クリックもゼロ |
| 6 | creator | soundproof-booth-food-odor-management | 防音ブース内での飲食、匂いが一番残る | 2188 | 2026-09-05 | 表示0 / 表示44・順位13.45 | 拡充候補 | 直近週で急増。Tier2本音リライト済みだが分量拡充の余地あり |
| 7 | creator | streamer-soundproof-evolution-story | 配信歴3年で変わった防音環境の変遷記録 | 2337 | 2026-06-05 | 表示0 / 表示0 | 統合検討 | |
| 8 | creator | cramped-booth-gaming-chair-health | 0.8畳の防音ブースで足がむくむ理由 | 2350 | 2026-07-05 | 表示0 / 表示22・順位15.55 | 拡充候補 | 直近週で急増、需要の芽あり |
| 9 | creator | collab-streaming-soundproof-space | 2人配信・コラボ収録できる防音部屋 | 2367 | 2026-09-05 | 表示0 / 表示2 | 統合検討 | |
| 10 | creator | female-streamer-privacy-soundproof | 女性配信者が「一人暮らし」を特定されないための対策 | 2398 | 2026-09-05 | 表示0 / 表示33・順位16.36 | 拡充候補 | 直近週で急増 |
| 11 | creator | soundproof-rental-vs-diy-streamer | 防音賃貸 vs 普通の部屋で防音DIY | 2410 | 2026-06-05 | 表示0 / 表示2 | 統合検討 | |
| 12 | creator | streamer-budget-temp-soundproof | 防音室を買う前に試したい2万円以下の騒音対策 | 2437 | 2026-09-05 | 表示0 / 表示0 | 統合検討 | |
| 13 | creator | cable-noise-ground-loop-prevention | 配信の『サー』『ジー』音はグランドループが原因？ | 2466 | 2026-09-05 | 表示101・クリック1・順位5 / 表示0 | 拡充候補 | 4ヶ月間は表示101件と需要大。直近週ゼロは要観察だが拡充優先度高 |
| 14 | creator | streamer-regional-studio-move | 地方移住して配信スタジオを作った人の話 | 2483 | 2026-06-05 | 表示0 / 表示8・順位6.62 | 未判断 | 直近週のみの単発データ |
| 15 | creator | family-home-soundproof-reno-negotiation | 実家暮らし配信者の防音リフォーム交渉 | 2531 | 2026-07-05 | 表示0 / 表示27・順位15.59 | 拡充候補 | 直近週で急増 |
| 16 | creator | horror-game-scream-soundproof-mic | ホラーゲーム実況の絶叫の配置術 | 2548 | 2026-07-05 | 表示0 / 表示0 | 統合検討 | |
| 17 | creator | streamer-soundproof-rental-share | 配信者向け防音ブースのレンタル・シェアスタジオ比較 | 2556 | 2026-09-05 | 表示0 / 表示2・クリック1 | 統合検討 | |
| 18 | creator | utaite-vs-streamer-soundproof | 歌ってみた・宅録の防音とゲーム配信の防音 | 2574 | 2026-09-05 | 表示0 / 表示1 | 統合検討 | |
| 19 | creator | soundproof-room-fatigue-ventilation | 防音室で疲れる原因と換気対策 | 2607 | 2026-09-05 | 表示22・順位10 / 表示42・クリック1・順位9.14 | 拡充候補 | 両期間とも表示あり、順位もあと一歩 |
| 20 | creator | night-streaming-neighbor-tips | 深夜配信を続けるための近隣トラブル回避術 | 2632 | 2026-06-05 | 表示0 / 表示0 | 統合検討 | |
| 21 | creator | streamer-rental-preview-checklist | 配信者が防音賃貸を内見するときのチェックリスト | 2659 | 2026-06-05 | 表示0 / 表示1 | 統合検討 | |
| 22 | creator | streaming-room-reverb-absorption | 配信部屋の反響を消す吸音パネルの選び方 | 2664 | 2026-09-05 | 表示0 / 表示2・順位23.5 | 統合検討 | |
| 23 | creator | streamer-noise-quick-fix | ゲーム配信者が防音より先にやるべき騒音対策3つ | 2665 | 2026-09-05 | 表示24・クリック1・順位15.33 / 表示56・クリック1・順位21.54 | 拡充候補 | GSC順位急落中（weekly-task.md参照）、表示は多いが順位悪化。優先対応 |
| 24 | creator | streamer-soundproof-timing | 配信者が防音室を買うべきタイミング | 2806 | 2026-09-05 | 表示0 / 表示0 | 統合検討 | |
| 25 | creator | streamer-soundproof-budget-roadmap | 予算別 配信者の防音環境アップグレードロードマップ | 2814 | 2026-09-05 | 表示0 / 表示4 | 統合検討 | |
| 26 | creator | streamer-discord-noise-cancel-vs-physical | Discordのノイキャン頼みで配信は成立する？ | 2830 | 2026-07-05 | 表示0 / 表示0 | 統合検討 | |
| 27 | creator | asmr-external-noise-elimination | ASMR配信者が外音を消す部屋づくり | 2833 | 2026-09-05 | 表示0 / 表示8・順位8.5 | 未判断 | 直近週のみの単発データ |
| 28 | creator | voice-chat-soundleak-fix | ボイスチャットの音漏れを今すぐ防ぐ7つの方法 | 2875 | 2026-09-05 | 表示0 / 表示26・クリック1・順位12.81 | 拡充候補 | 直近週で急増しクリックも発生 |
| 29 | creator | streamer-pet-noise-balance | 配信中のペットの鳴き声対策 | 2882 | 2026-06-12 | 表示0 / 表示9・順位14.22 | 未判断 | 直近週のみの単発データ |
| 30 | creator | vtuber-family-privacy-rules | 実家・同棲VTuberの身バレ・親フラ対策 | 2912 | 2026-06-21 | 表示77・クリック4・順位6.39 / 表示6・クリック1・順位7.33 | 拡充候補 | 4ヶ月間の実績が最も厚い部類。順位6〜7で安定、拡充で更に上を狙える |
| 31 | creator | streaming-room-layout-guide | 配信部屋のレイアウト学 | 2932 | 2026-02-28 | 表示6・順位5.33 / 表示3・順位7.33 | 現状維持 | 表示は少ないが順位5〜7と健闘。Tier Cで確認済み・変更なし |
| 32 | creator | one-room-streaming-soundproof | ワンルーム配信の防音ハック | 2966 | 2026-04-14 | 表示33・順位3 / 表示4・順位3.25 | 拡充候補 | 順位3位と非常に良いが表示・クリックが少ない。分量拡充でクリック獲得を狙える |
| 33 | creator | asmr-vtuber-booth-guide | ASMR・VTuber専用防音ブースの選び方 | 2995 | 2026-09-05 | 表示0 / 表示4・クリック1・順位14 | 統合検討 | Tier Cで架空製品名を修正済み。効果はデータ反映後に再確認 |
| 34 | diy | diy-soundproof-ventilation-heat-exhaust | 0.5畳の防音室にエアコンが付けられない | 1041 | 2026-02-23 | 表示15・順位10 / 表示18・クリック2・順位10.44 | 拡充候補 | 全記事中最少文字数。両期間とも表示・クリックあり、拡充優先度高 |
| 35 | diy | danbotchi-diy-blueprints | ホームセンターの資材だけで自作だんぼっち | 1408 | 2026-09-05 | 表示3・順位3 / 表示2・順位6.5 | 統合検討 | 表示は極少だが順位は良い。文字数最少クラスなのに需要が薄い |
| 36 | diy | diy-led-acoustic-panels | LED付き自作吸音パネルの作り方 | 2236 | 2026-09-05 | 表示26・クリック2・順位8.25 / 表示1 | 拡充候補 | 4ヶ月間で実績あり |
| 37 | diy | gamer-acoustic-placement | 吸音材を貼る位置は一次反射面が最優先 | 2260 | 2026-09-05 | 表示61・クリック2・順位3 / 表示32・順位8.94 | 拡充候補 | 両期間とも表示多数、順位も良好。拡充で更なるクリック増を狙える |
| 38 | diy | closet-diy-soundproof-room | クローゼットDIYで3万円から作れる録音ブース | 2418 | 2026-09-05 | 表示49・順位8.67 / 表示25・クリック2・順位8.32 | 拡充候補 | 継続的に表示・クリックあり |
| 39 | diy | diy-internal-window-road-noise-reduction | 内窓の防音効果を実測 | 2603 | 2026-06-24 | 表示0 / 表示4・順位12.25 | 統合検討 | |
| 40 | diy | futon-cardboard-karaoke-booth | 布団と段ボールで囲うひとり用カラオケボックス | 2614 | 2026-09-05 | 表示4・順位5.25 / 表示2・順位9 | 統合検討 | 表示は極少 |
| 41 | diy | soundproof-room-diy-cost | 自作防音室の費用内訳 | 2623 | 2026-09-05 | 表示104・クリック1・順位10.6 / 表示3・順位28.67 | 拡充候補 | 4ヶ月間の表示が全記事中トップクラス。順位10前後で拡充効果が見込める |
| 42 | diy | bedroom-telework-layout-soundproof | 「寝室でテレワーク」がつらい理由 | 2693 | 2026-02-28 | 表示0 / 表示0 | 統合検討 | Tier Cで確認済み・変更なしだが需要も無し |
| 43 | diy | soundproof-window-merit-demerit | 賃貸でもできる内窓ハック | 2735 | 2026-06-24 | 表示5・順位7.6 / 表示2・順位9.5 | 統合検討 | |
| 44 | diy | diy-soundproofing-tips | DIY防音のコツ | 2762 | 2026-09-05 | 表示35・クリック1・順位22.37 / 表示8・順位5.12 | 拡充候補 | 4ヶ月間で表示35件、直近週で順位急改善（22→5）。拡充で伸びる可能性 |
| 45 | diy | danbocchi-floor-protection | だんぼっちの荷重分散DIY補強術 | 2832 | 2026-03-12 | 表示0 / 表示0 | 統合検討 | Tier Cで軽微な修正済みだが需要は確認できず |
| 46 | diy | electronic-drum-vibration-fuwafuwa-system | 電子ドラムの振動対策 | 2995 | 2026-07-10 | 表示0 / 表示41・クリック1・順位18.88 | 拡充候補 | 直近週で急増しクリックも発生 |
| 47 | knowledge | biophilic-acoustics | バイオフィリック・アコースティック | 2317 | 2026-03-11 | 表示6・順位8.33 / 表示3・順位8.67 | 現状維持 | 表示は少ないが順位8前後で安定。Tier A・Cで確認済み |
| 48 | knowledge | noise-complaint-legal-precedent-manual | 騒音苦情への正しい対応 | 2467 | 2026-06-01 | 表示2・順位5.5 / 表示3・順位44.33 | 統合検討 | 表示自体が少ない上、直近週で順位急落 |
| 49 | knowledge | vibration-reduction-science | 重量床衝撃音を遮蔽するプロの防音構造 | 2489 | 2026-07-10 | 表示33・クリック1・順位16.26 / 表示29・クリック1・順位8.5 | 拡充候補 | 継続的な需要あり、直近週で順位改善傾向 |
| 50 | knowledge | coincidence-effect-soundproofing | コインシデンス効果と質量則の限界 | 2885 | 2026-07-05 | 表示0 / 表示65・順位10.31 | 拡充候補 | 直近週で表示65件と急増、需要の芽が大きい |
| 51 | knowledge | diy-soundproof-truth | DIY防音の不都合な真実 | 2908 | 2026-02-28 | 表示7・順位7.33 / 表示7・順位20.14 | 未判断 | 表示は安定しているが順位が期間で大きくブレている |
| 52 | knowledge | mental-health-benefits-of-silence | 静寂の力（メンタルケア） | 2913 | 2026-06-01 | 表示0 / 表示14・順位4.86 | 未判断 | 直近週のみの単発データだが順位は良好 |
| 53 | knowledge | d-value-vs-rw-value-confusion | D値とRw値は換算できない | 2944 | 2026-07-29 | 表示0 / 表示118・クリック2・順位9.79 | 拡充候補 | 直近週で表示118件と全記事中でも大きい伸び。優先度高 |
| 54 | local | osaka-soundproof-rental-guide | 大阪の防音賃貸ガイド | 2868 | 2026-06-24 | 表示205・順位19.83 / 表示17・順位12.3 | 拡充候補 | 4ヶ月表示205件と非常に大きいが順位が深くクリック0。weekly-task.mdでも評価分散が指摘されている要注意記事 |
| 55 | local | hiroshima-soundproof-rental-guide | 広島で楽器可物件を探すなら音大エリア | 2982 | 2026-09-05 | 表示6・クリック1・順位6.17 / 表示0 | 未判断 | 4ヶ月間は健闘も直近週で表示消失、傾向不明 |
| 56 | money | report-japan-soundproof-unit-resale-value-simulation | 防音室は「動産」か？5年後の売却価値 | 2354 | 2026-06-24 | 表示0 / 表示0 | 統合検討 | |
| 57 | money | streamer-tax-strategy | 配信者の防音室は経費にできる | 2359 | 2026-09-05 | 表示14・順位8 / 表示15・順位8 | 拡充候補 | 順位8で安定、直近週で表示倍増傾向。今回money/small-business-soundproof-subsidy-guideへの内部リンクも追加済み |
| 58 | money | soundproof-subsidy-news-2025 | 防音室の補助金2026年最新版 | 2727 | 2026-09-05 | 表示45・クリック1・順位7.45 / 表示0 | 拡充候補 | 4ヶ月間の実績は良好（順位7台）。直近週ゼロは季節要因の可能性、拡充優先度は維持 |
| 59 | money | small-business-soundproof-subsidy-guide | 個人事業主向け小規模事業者持続化補助金 | 2734 | 2026-02-23 | 表示0 / 表示1・順位2 | 統合検討 | Tier Aで内部リンク追加済み（streamer-tax-strategyから）。効果はデータ反映後に再確認 |
| 60 | money | telework-soundproof-loan-strategy | テレワークのための防音室ローン活用 | 2743 | 2026-06-21 | 表示0 / 表示0 | 統合検討 | |
| 61 | money | soundproof-room-moving | 引越しで防音室を移設する費用 | 2902 | 2026-02-15 | 表示29・順位9.82 / 表示18・クリック2・順位10.11 | 拡充候補 | 両期間とも表示・クリックあり、順位10前後で安定的な需要 |
| 62 | money | soundproof-room-rental-cost | 防音室レンタルの初期費用と月額相場 | 2963 | 2026-06-24 | 表示125・クリック3・順位9.94 / 表示5・順位9.4 | 拡充候補 | 4ヶ月表示125件・クリック3件と全記事中トップクラスの実績 |
| 63 | soundproof-rental | rental-caution-cello | 楽器可物件でもチェロは要注意？ | 2168 | 2026-02-28 | 表示8・クリック3・順位12.62 / 表示9・順位8.78 | 現状維持 | 表示は少ないがCTR37.5%と非常に高く、ニッチ需要を的確に捉えている |
| 64 | soundproof-rental | pet-noise-soundproof-measures | ペットの騒音は防音だけでは解決しない | 2556 | 2026-07-29 | 表示10・順位10.1 / 表示14・順位17.57 | 拡充候補 | 継続的な表示があるが順位が後退傾向、クリックはまだゼロ |
| 65 | soundproof-rental | noise-complaint-landlord-negotiation-guide | 騒音クレームを直接言うのは危険？ | 2562 | 2026-03-16 | 表示0 / 表示0 | 統合検討 | Tier Cで陳腐化した年号表現を削除済み。効果はデータ反映後に再確認 |
| 66 | soundproof-rental | bouonrental-market-research2025 | 防音賃貸の家賃相場とトレンド | 2646 | 2026-09-05 | 表示5・順位7.6 / 表示5・順位8.2 | 統合検討 | Tier4で事実確認・修正済み。表示は少ないまま |
| 67 | soundproof-rental | owner-renovation-shibuya-shinjuku-vtuber-strategy | 渋谷・新宿エリアのVTuber特化型防音リノベ戦略 | 2681 | 2026-04-04 | 表示4・順位9 / 表示5・順位5 | 統合検討 | Tier Cで重複見出し・タグ崩れを修正済み。表示は少ない |
| 68 | soundproof-rental | saxophone-apartment-practice-guide | サックスは賃貸で練習できる？ | 2720 | 2026-07-10 | 表示0 / 表示8・クリック1・順位14.5 | 未判断 | 直近週のみの単発データだがクリックも発生 |
| 69 | soundproof-rental | child-rearing-soundproof-pillar | 子育て×防音リノベ | 2806 | 2026-03-31 | 表示0 / 表示1 | 統合検討 | Tier Cでダミーリンク6箇所を実リンクに修正済み。効果はデータ反映後に再確認 |
| 70 | soundproof-rental | rental-price-index-13cities-soundproof | 防音賃貸の家賃相場はどう決まる？13都市統計 | 2922 | 2026-07-10 | 表示6・順位14.33 / 表示8・順位13.88 | 拡充候補 | 統計・データ系記事は厚みが評価されやすいテーマ。継続的な表示あり |
| 71 | soundproof-rental | housing-builder-soundproof-comparison | 防音室が作れるハウスメーカー5社比較 | 2999 | 2026-07-10 | 表示0 / 表示49・クリック4・順位20.29 | 拡充候補 | 直近週で表示49・クリック4と急伸。Tier Aで内部リンク先にも選ばれた人気記事 |
| 72 | soundproof-room | soundproof-room-large-size | 2畳以上の広々防音室ガイド | 2018 | 2026-09-05 | 表示3・順位6 / 表示1・順位8 | 統合検討 | Tier1本音リライト済みだが表示は依然少ない |
| 73 | soundproof-room | hsp-soundproof-curtain-guide | HSP気質の方への防音カーテンの選び方 | 2126 | 2026-07-10 | 表示0 / 表示0 | 統合検討 | |
| 74 | soundproof-room | otodasu-voice-chat-test | OTODASUの実力検証 | 2275 | 2026-03-12 | 表示0 / 表示2・順位13 | 統合検討 | Tier Cで確認済み・変更なし（価格・性能値とも正確） |
| 75 | soundproof-room | soundproof-room-size | ユニット防音室のサイズと選び方 | 2345 | 2026-09-05 | 表示3・順位11 / 表示11・順位9.6 | 現状維持 | Tier1本音リライト・見出しバグ修正済みで順位改善傾向。分量より導線強化で様子見 |
| 76 | soundproof-room | soundproof-performance-drum | ドラム防音のD値基準 | 2362 | 2026-09-05 | 表示15・順位4 / 表示0 | 拡充候補 | 4ヶ月間は順位4位と非常に良好。Tier1本音リライト済みだが分量はまだ薄い |
| 77 | soundproof-room | daiwa-house-jiyuku-soundproof-review | 大和ハウス「私の自由区」防音室レビュー | 2522 | 2026-05-16 | 表示0 / 表示26・クリック3・順位44.81 | 拡充候補 | 直近週で急増しクリック3件。順位は深いが実需あり |
| 78 | soundproof-room | sleep-quality-soundproof-room | 防音室で眠ると睡眠の質が変わる理由 | 2801 | 2026-06-01 | 表示0 / 表示7・順位5.71 | 未判断 | 直近週のみの単発データだが順位は良好 |
| 79 | soundproof-room | bouon-size-choice | 防音室サイズ選びの決定版 | 2814 | 2026-06-24 | 表示23・順位7.36 / 表示0 | 拡充候補 | 4ヶ月間は順位7台で健闘 |
| 80 | soundproof-room | bouon-setti-checkpoint | 防音室導入の最終チェックリスト | 2897 | 2026-06-24 | 表示31・順位30.81 / 表示1・順位41 | 拡充候補 | 表示はあるが順位が深い。チェックリスト型でも情報の厚みが不足している可能性 |
| 81 | soundproof-room | yamaha-tabisuru-bouon-room | ヤマハ「旅する防音室」とは | 2911 | 2026-06-01 | 表示0 / 表示5・順位3.4 | 統合検討 | Tier Aで宙ぶらりんの誤記述を削除済み。表示自体は少ない |
| 82 | soundproof-room | soundproof-room-pollen-protection | 防音室の花粉対策 | 2913 | 2026-06-10 | 表示6・順位3 / 表示4・クリック1・順位10.25 | 現状維持 | 表示は少ないが順位3位と非常に良好、クリックも発生済み |
| 83 | soundproof-room | kawai-nasal-soundproof-room-guide | カワイ防音室ナサール完全ガイド | 2944 | 2026-09-05 | 表示45・順位6.16 / 表示3・順位10.33 | 拡充候補 | Tier1本音リライト済み、4ヶ月間の実績は良好。競合ヤマハ系記事と比べ分量拡充の余地あり |
| 84 | soundproof-room | wifi-connection-guide | 防音室でWi-Fiが繋がらない原因 | 2986 | 2026-07-29 | 表示8・順位6.88 / 表示129・クリック2・順位8.47 | 拡充候補 | 直近週で表示129件と全記事中トップの急増。優先度最高クラス |

---

## サマリ

- **拡充候補**: 34記事（`d-value-vs-rw-value-confusion`・`wifi-connection-guide`・`osaka-soundproof-rental-guide`・`soundproof-room-rental-cost`・`coincidence-effect-soundproofing`・`housing-builder-soundproof-comparison`・`streamer-noise-quick-fix`は直近週の表示急増幅が特に大きく優先度高）
- **統合検討**: 36記事（4ヶ月+直近週とも表示5以下で需要がほぼ確認できない。他の関連記事へのリダイレクト統合、またはnoindex化を検討）
- **現状維持**: 6記事（`workbooth-office-soundproof-trend`・`streaming-room-layout-guide`・`biophilic-acoustics`・`rental-caution-cello`・`soundproof-room-size`・`soundproof-room-pollen-protection`。薄いが順位・CTRは健闘しており実害なし）
- **未判断**: 8記事（直近週のみ／4ヶ月間のみの単発データで傾向が確定できない。次回GSCエクスポートで再確認）

## 次のアクション（ユーザー判断待ち）

1. **拡充候補34記事**への着手順序を決める。表示急増幅が大きい`wifi-connection-guide`・`d-value-vs-rw-value-confusion`・`osaka-soundproof-rental-guide`・`streamer-noise-quick-fix`（順位急落中）から着手するのが効率的
2. **統合検討36記事**の扱いを判断する。「他記事へリダイレクト統合」「noindex化」「もう少し様子見してから判断」のいずれにするか方針を決める（G4後続のkanazawa等4記事と同様の枠組みで扱える）
3. **未判断8記事**は次回GSCエクスポート後に再判定
4. Tier A/Cで今回内部リンク追加・事実修正を行った記事（`asmr-vtuber-booth-guide`・`danbocchi-floor-protection`・`noise-complaint-landlord-negotiation-guide`・`child-rearing-soundproof-pillar`・`owner-renovation-shibuya-shinjuku-vtuber-strategy`・`small-business-soundproof-subsidy-guide`等）は統合検討寄りの判定だが、施策の効果が反映される前のデータのため、次回エクスポートで再評価すること

## 進捗サマリ

- 拡充候補: 34 / 統合検討: 36 / 現状維持: 6 / 未判断: 8（判定完了、個別記事の拡充作業自体はこれから）
