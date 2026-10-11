# 優先度ビュー（案）

> 「配信者クラスタ再設計待ち」の記事は、統合・排除を判断しない。段階別の再設計案は [cluster-streamer.md](./cluster-streamer.md)。

作成: 2026-10-11 / 各バッチの「優先度」列と同じ内容を優先度別に並べ替えたもの。**ここで確定するのではなく、各バッチの「方針(ユーザー記入)」欄で確定する。**

## 優先度の付け方

- 判定に使った数字: 3か月累計の表示・クリック・順位（`access-data/2026/w40/ページ.csv`）、W42の7日表、GA4のW40〜W42の3週セッション、被リンク数（`src/content/ja/`内の記事から）。**数字は2週〜3か月と薄いため、方向を決める材料であり、本文を読んでの確認が前提**
- 軸の適合度（高／中／低）は、防音室・防音賃貸・DIY防音・補助金などの主軸との近さをタイトルから判断した。配信者向けのニッチ記事、ニュース系、海外事例、軸外のテーマは「低」
- 統合先は、同じクラスタで流入・被リンク・ハブ掲載のある強い記事を選んだ
- 統合・排除の前に、`bouon-internal-link-ops` skillで被リンクを確認し、付け替え先を決める（P3・P4で被リンクが5以上の記事は特に注意）

## 件数

| 優先度 | 本数 | 方向 |
|---|---|---|
| P1 リライトで伸ばす（最優先） | 12 | リライト |
| P2 リライト（通常） | 22 | リライト |
| P3 統合検討 | 23 | 統合検討 |
| P4 排除検討 | 15 | 排除検討 |
| 保留 | 1 | 保留 |

## P1 リライトで伸ばす（最優先）（12本）

3か月の順位が8〜20位で、表示・クリック・GA4流入が相対的に大きい記事。または統合先として受け皿にする記事。リライトの効果が最も出やすい

| バッチ#番号 | lastmod | category/slug | 3か月 表示/クリック/順位 | GA4(3週) | 被リンク | 区分(案) | 統合先(案) | 理由 |
|---|---|---|---|---|---|---|---|---|
| 04#34 | 2026-06-24 | knowledge/soundproof-app-review-2026 | 62 / 0 / 14.45 | 1 | 2 | リライト | - | 順位8〜20位で表示/流入が相対的に大きい |
| 04#38 | 2026-06-24 | soundproof-rental/musision-comprehensive-guide | 19 / 1 / 9.32 | 1 | 3 | リライト | - | 順位8〜20位で表示/流入が相対的に大きい |
| 05#42 | 2026-07-05 | creator/streamer-soundproof-room-comprehensive-guide | 17 / 1 / 12.76 | 22 | 8 | リライト(クラスタ再設計の入口候補) | - | 【再設計待ち】統合先ではなく、段階別クラスタの入口候補として再構築。旧判断: 配信者クラスタの統合先。GA4 22セッション・被リンク8・ハブ掲載。受け皿として強化 |
| 05#46 | 2026-07-08 | business/japan-soundproof-market-size | 241 / 3 / 15.97 | 1 | 4 | リライト | - | 順位8〜20位で表示/流入が相対的に大きい |
| 05#50 | 2026-07-10 | creator/gaming-floor-impact-noise-fix | 238 / 4 / 9.04 | 3 | 5 | リライト | - | 順位8〜20位で表示/流入が相対的に大きい |
| 06#52 | 2026-07-10 | creator/streamer-rental-selection-guide | 17 / 0 / 18.41 | 13 | 9 | リライト(クラスタ再設計の入口候補) | - | 【再設計待ち】統合先ではなく、段階別クラスタの入口候補として再構築。旧判断: 配信者(賃貸)の統合先。Bing 9・被リンク9。順位18位から引き上げ |
| 06#57 | 2026-07-10 | knowledge/sound-sensitivity-misophonia-environment-guide | 25 / 0 / 18.96 | 12 | 4 | リライト | - | 順位8〜20位で表示/流入が相対的に大きい |
| 07#61 | 2026-07-10 | soundproof-room/bouon-dchiseinou-meyasu | 1 / 0 / 25 | 13 | 11 | リライト(統合先) | - | 【16か月実績で補正】表示723・クリック16・順位9.9。D値クラスタの統合先。GA4にBing流入13・被リンク11・ハブ掲載 |
| 07#63 | 2026-07-10 | soundproof-room/onetouch-soundproof-wall-review | 282 / 12 / 13.43 | 1 | 4 | リライト | - | 順位8〜20位で表示/流入が相対的に大きい |
| 07#64 | 2026-07-14 | business/datacenter-soundproof-technology-facts | 44 / 2 / 10.8 | 1 | 2 | リライト | - | 順位8〜20位で表示/流入が相対的に大きい |
| 07#67 | 2026-07-20 | soundproof-rental/bouon-rental-market-guide | 21 / 1 / 10.38 | 26 | 25 | リライト | - | 順位8〜20位で表示/流入が相対的に大きい |
| 07#70 | 2026-07-21 | soundproof-rental/rental-proofroom-contractcheck | 3 / 0 / 7.33 | 1 | 13 | リライト | - | 【16か月実績で補正】表示1,557・クリック32・順位11.5。旧URLの実績を含めると、順位8〜20位で最大の表示。退去時費用という固有テーマ |

## P2 リライト（通常）（22本）

主軸テーマ（防音室・防音賃貸・DIY防音）で需要の兆候がある記事、または順位8〜20位・Bing流入がある記事

| バッチ#番号 | lastmod | category/slug | 3か月 表示/クリック/順位 | GA4(3週) | 被リンク | 区分(案) | 統合先(案) | 理由 |
|---|---|---|---|---|---|---|---|---|
| 01#5 | 2026-02-28 | diy/wooden-apartment-soundproof-guide | 17 / 0 / 30.29 | 4 | 3 | リライト | - | 順位8〜20位または流入あり |
| 01#8 | 2026-03-10 | soundproof-room/million-yen-soundproof-room-professional | 2 / 0 / 8.5 | 0 | 2 | リライト | soundproof-room/soundproof-room-price-market | 【16か月実績で補正】表示281・クリック12・順位10.2。順位8〜20位で実際にクリックがある。統合せずリライト |
| 01#10 | 2026-04-08 | soundproof-room/sound-reduction-simulation | 26 / 2 / 18.08 | 0 | 2 | リライト | - | 順位8〜20位または流入あり |
| 02#16 | 2026-06-01 | soundproof-room/sleep-quality-soundproof-room | 7 / 0 / 5.71 | 3 | 4 | リライト | - | 順位8〜20位または流入あり |
| 03#22 | 2026-06-10 | knowledge/absorption-vs-soundproofing-materials | 14 / 0 / 19.93 | 5 | 10 | リライト | - | 順位8〜20位または流入あり |
| 03#24 | 2026-06-10 | knowledge/vibration-isolation-technology-trend | 0 / 0 / - | 10 | 4 | リライト | - | Bing 6〜10セッションで読まれている。GSCに出ない理由をBing側で確認 |
| 03#25 | 2026-06-10 | soundproof-rental/report-japan-soundproof-rental-market-needs | 3 / 0 / 8.67 | 51 | 3 | リライト | - | Teams共有で51セッション。リライトより出口導線の点検（案J） |
| 04#33 | 2026-06-24 | diy/soundproof-sheet-heavy-diy-tips | 5 / 0 / 6.4 | 0 | 3 | リライト | - | 主軸テーマで需要の兆候あり |
| 04#35 | 2026-06-24 | local/tokyo-soundproof-rental-summary | 21 / 0 / 7.76 | 1 | 14 | リライト | - | 順位8〜20位または流入あり |
| 04#37 | 2026-06-24 | money/soundproof-room-price-market | 14 / 0 / 16.14 | 16 | 8 | リライト(統合先) | - | 防音室価格クラスタの統合先。GA4 16セッション・被リンク8・ハブ掲載 |
| 04#39 | 2026-06-24 | soundproof-room/proofroom-soudmore-manual | 9 / 0 / 21.78 | 2 | 2 | リライト | - | 順位8〜20位または流入あり |
| 05#45 | 2026-07-05 | money/quiet-space-budget-decision-guide | 25 / 0 / 14.72 | 0 | 6 | リライト | - | 順位8〜20位または流入あり |
| 05#48 | 2026-07-08 | money/quiet-space-relocation-decision-guide | 20 / 0 / 23.7 | 0 | 4 | リライト | - | 順位8〜20位または流入あり |
| 06#53 | 2026-07-10 | diy/diy-wall-soundproofing-room-guide | 4 / 1 / 48.25 | 4 | 3 | リライト | - | 順位8〜20位または流入あり |
| 06#54 | 2026-07-10 | diy/renter-parent-house-soundproofing | 6 / 0 / 13.33 | 1 | 2 | リライト | - | 主軸テーマで需要の兆候あり |
| 06#58 | 2026-07-10 | money/soundproof-contractor-selection-guide | 72 / 0 / 25.26 | 0 | 5 | リライト | - | 順位8〜20位または流入あり |
| 06#60 | 2026-07-10 | soundproof-rental/saxophone-apartment-practice-guide | 18 / 1 / 15.78 | 0 | 3 | リライト | - | 順位8〜20位または流入あり |
| 07#62 | 2026-07-10 | soundproof-room/hsp-soundproof-room-guide | 14 / 1 / 8.79 | 0 | 6 | リライト | - | 順位8〜20位または流入あり |
| 07#66 | 2026-07-15 | money/used-soundproof-room-buying-guide | 59 / 1 / 27.76 | 7 | 4 | リライト(統合先) | - | 中古・買取クラスタの統合先。表示59・順位27.8 |
| 07#68 | 2026-07-21 | diy/diy-vocal-soundproof-mask | 0 / 0 / - | 0 | 3 | 配信者クラスタ再設計待ち | - | 【再設計待ち】クエリ取得後に段階(これから/不満/安定)へ割り当て直す。旧判断: 【16か月実績で補正】表示160・クリック22・順位10.2。「防音マスク ゲーム 自作」でクリック7。サジェストにも「配信 防音マスク」。排除しない |
| 07#69 | 2026-07-21 | knowledge/soundproof-culture-japan-vs-america | 0 / 0 / - | 0 | 2 | リライト | - | 【16か月実績で補正】表示450・クリック8・順位3.9。上位表示でCTRが低い。排除せず、タイトル・導入の改善を優先 |
| 08#73 | 2026-07-29 | soundproof-rental/pet-noise-soundproof-measures | 12 / 0 / 15.33 | 0 | 3 | リライト | - | 主軸テーマで需要の兆候あり |

## P3 統合検討（23本）

需要が弱い、または同じテーマの強い記事がある。統合先に寄せて旧URLを301にする候補。統合先に価値を足せるか、被リンクを付け替えられるかを見て判断

| バッチ#番号 | lastmod | category/slug | 3か月 表示/クリック/順位 | GA4(3週) | 被リンク | 区分(案) | 統合先(案) | 理由 |
|---|---|---|---|---|---|---|---|---|
| 01#1 | 2025-10-12 | soundproof-rental/bourental-syaouseid-choiceindi | 11 / 0 / 30.18 | 0 | 6 | 統合検討 | soundproof-room/bouon-dchiseinou-meyasu | D値の解説が重複。順位30位・被リンク6を統合先へ付け替え |
| 01#3 | 2026-02-28 | creator/soundproof-rental-life-streamer | 13 / 0 / 15.31 | 0 | 2 | 配信者クラスタ再設計待ち | - | 【再設計待ち】クエリ取得後に段階(これから/不満/安定)へ割り当て直す。旧判断: 軸外/ニッチ。統合先に寄せる |
| 01#6 | 2026-02-28 | knowledge/diy-soundproof-truth | 7 / 0 / 20.14 | 0 | 2 | 統合検討(統合先は要検討) | - | 周辺テーマ。統合先に寄せるか現状維持 |
| 01#7 | 2026-02-28 | soundproof-rental/rental-caution-cello | 9 / 0 / 8.78 | 3 | 3 | 統合検討 | soundproof-rental/saxophone-apartment-practice-guide | 1,361字と薄い。楽器別の賃貸練習記事に統合 |
| 01#9 | 2026-03-11 | knowledge/biophilic-acoustics | 6 / 0 / 2.5 | 0 | 2 | 統合検討(統合先は要検討) | - | 軸外/ニッチ。統合先に寄せる |
| 02#13 | 2026-06-01 | business/soundproof-space-business-guide | 4 / 1 / 5.75 | 0 | 2 | 統合検討 | business/japan-soundproof-market-size | 軸外/ニッチ。統合先に寄せる |
| 02#14 | 2026-06-01 | knowledge/mental-health-benefits-of-silence | 14 / 0 / 4.86 | 0 | 2 | 統合検討 | soundproof-room/sleep-quality-soundproof-room | 周辺テーマ。統合先に寄せるか現状維持 |
| 02#19 | 2026-06-05 | creator/streamer-regional-studio-move | 8 / 0 / 6.62 | 0 | 2 | 配信者クラスタ再設計待ち | - | 【再設計待ち】クエリ取得後に段階(これから/不満/安定)へ割り当て直す。旧判断: 軸外/ニッチ。統合先に寄せる |
| 03#26 | 2026-06-10 | soundproof-room/soundproof-room-pollen-protection | 4 / 1 / 10.25 | 0 | 2 | 統合検討 | soundproof-room/proofroom-humidity-airconditionlist | 周辺テーマ。統合先に寄せるか現状維持 |
| 03#28 | 2026-06-12 | creator/streamer-pet-noise-balance | 26 / 0 / 16.46 | 1 | 2 | 配信者クラスタ再設計待ち | - | 【再設計待ち】クエリ取得後に段階(これから/不満/安定)へ割り当て直す。旧判断: 順位は範囲内だが配信者ニッチ。統合しつつ需要クエリを拾う |
| 03#30 | 2026-06-24 | creator/streaming-audio-first-low-budget | 31 / 0 / 18.29 | 2 | 2 | 配信者クラスタ再設計待ち | - | 【再設計待ち】クエリ取得後に段階(これから/不満/安定)へ割り当て直す。旧判断: 順位は範囲内だが配信者ニッチ。統合しつつ需要クエリを拾う |
| 04#31 | 2026-06-24 | creator/young-streamer-smartphone-monetization-roadmap | 47 / 0 / 9.51 | 0 | 2 | 配信者クラスタ再設計待ち | - | 【再設計待ち】クエリ取得後に段階(これから/不満/安定)へ割り当て直す。旧判断: 順位9.5位で表示47。配信者クラスタに統合しつつ、需要クエリを統合先で拾う |
| 04#36 | 2026-06-24 | money/musician-soundproof-loan-strategy | 3 / 0 / 4.33 | 0 | 2 | 統合検討 | money/piano-soundproof-mortgage-tax-guide | 需要なし。ローン・税の記事に統合 |
| 04#40 | 2026-07-02 | business/report-japan-asmr-vtuber-streaming-studio-standard | 6 / 0 / 6 | 0 | 2 | 配信者クラスタ再設計待ち | - | 【再設計待ち】クエリ取得後に段階(これから/不満/安定)へ割り当て直す。旧判断: 軸外/ニッチ。統合先に寄せる |
| 05#43 | 2026-07-05 | creator/vtuber-soundproof-environment-complete-guide | 4 / 0 / 32 | 0 | 2 | 配信者クラスタ再設計待ち | - | 【再設計待ち】クエリ取得後に段階(これから/不満/安定)へ割り当て直す。旧判断: 軸外/ニッチ。統合先に寄せる |
| 05#44 | 2026-07-05 | knowledge/dry-floating-floor-natural-frequency | 28 / 0 / 35.75 | 0 | 2 | 統合検討(統合先は要検討) | - | 周辺テーマ。統合先に寄せるか現状維持 |
| 05#47 | 2026-07-08 | diy/parenting-generation-quiet-corner-diy | 7 / 1 / 16.43 | 0 | 3 | 統合検討(統合先は要検討) | - | 周辺テーマ。統合先に寄せるか現状維持 |
| 05#49 | 2026-07-10 | creator/bourentakl-streamer-settingsetubi | 0 / 0 / - | 1 | 2 | 配信者クラスタ再設計待ち | - | 【再設計待ち】クエリ取得後に段階(これから/不満/安定)へ割り当て直す。旧判断: 軸外/ニッチ。統合先に寄せる |
| 06#51 | 2026-07-10 | creator/streamer-noise-complaint-response | 19 / 2 / 27 | 0 | 3 | 配信者クラスタ再設計待ち | - | 【再設計待ち】クエリ取得後に段階(これから/不満/安定)へ割り当て直す。旧判断: 軸外/ニッチ。統合先に寄せる |
| 06#55 | 2026-07-10 | diy/treadmill-apartment-soundproofing-layering | 0 / 0 / - | 2 | 2 | 統合検討(統合先は要検討) | - | 4,256字で表示0。ランニングマシン需要は小さい。統合先は要検討 |
| 06#56 | 2026-07-10 | knowledge/d-value-truth-and-myths | 0 / 0 / - | 3 | 8 | 統合検討 | soundproof-room/bouon-dchiseinou-meyasu | D値の解説が重複。0表示・被リンク8を統合先へ付け替え |
| 06#59 | 2026-07-10 | money/soundproof-room-buyback-guide | 1 / 0 / 33 | 0 | 9 | 統合検討 | money/used-soundproof-room-buying-guide | 主軸だが需要の兆候が弱い。タイトル・検索意図を見直すか統合 |
| 07#65 | 2026-07-14 | knowledge/hsp-self-check-sound-sensitivity | 25 / 1 / 29.08 | 4 | 4 | 統合検討 | knowledge/sound-sensitivity-misophonia-environment-guide | HSP・音過敏の記事が分散。統合先に寄せる |

## P4 排除検討（15本）

表示・流入ともほぼゼロで、軸外またはニッチ。要点があれば統合先に吸収したうえで、旧URLを301（または410）にする候補

| バッチ#番号 | lastmod | category/slug | 3か月 表示/クリック/順位 | GA4(3週) | 被リンク | 区分(案) | 統合先(案) | 理由 |
|---|---|---|---|---|---|---|---|---|
| 01#2 | 2026-02-19 | knowledge/why-your-80-percent-rug-rule-fails | 0 / 0 / - | 0 | 2 | 排除検討 | - | 需要なし・軸外/ニッチ |
| 01#4 | 2026-02-28 | creator/streaming-room-layout-guide | 3 / 0 / 7.33 | 0 | 3 | 配信者クラスタ再設計待ち | - | 【再設計待ち】クエリ取得後に段階(これから/不満/安定)へ割り当て直す。旧判断: 需要なし・軸外/ニッチ |
| 02#11 | 2026-04-14 | soundproof-rental/home-theater-karaoke-soundproof-design | 1 / 0 / 10 | 0 | 6 | 排除検討(要点は統合先へ) | soundproof-room/soundproof-room-price-market | 5,947字だが表示1。要点を価格記事に吸収して排除。被リンク6を付け替え |
| 02#12 | 2026-06-01 | business/bouonrental-areasec-newbusiness | 2 / 0 / 9.5 | 0 | 2 | 排除検討(要点は統合先へ) | soundproof-rental/bouon-rental-market-guide | 需要なし |
| 02#15 | 2026-06-01 | knowledge/proofroom-maker-2025productcheck | 0 / 0 / - | 0 | 2 | 排除検討 | - | ニュース系2本(5,426字・2,670字)で表示0。更新型の1本にするか排除。残す場合は1本に統合 |
| 02#17 | 2026-06-05 | creator/game-streamer-sound-types | 2 / 0 / 4 | 0 | 3 | 配信者クラスタ再設計待ち | - | 【再設計待ち】クエリ取得後に段階(これから/不満/安定)へ割り当て直す。旧判断: 需要なし・軸外/ニッチ |
| 02#18 | 2026-06-05 | creator/soundproof-rental-vs-diy-streamer | 2 / 0 / 4.5 | 0 | 2 | 配信者クラスタ再設計待ち | - | 【再設計待ち】クエリ取得後に段階(これから/不満/安定)へ割り当て直す。旧判断: 需要なし・軸外/ニッチ |
| 02#20 | 2026-06-05 | creator/streamer-rental-preview-checklist | 1 / 0 / 6 | 0 | 3 | 配信者クラスタ再設計待ち | - | 【再設計待ち】クエリ取得後に段階(これから/不満/安定)へ割り当て直す。旧判断: 需要なし・軸外/ニッチ |
| 03#21 | 2026-06-10 | diy/outdoor-soundproof-curtain-market-guide | 0 / 0 / - | 0 | 2 | 排除検討 | - | 需要なし |
| 03#23 | 2026-06-10 | knowledge/future-ssi-silent-speech-interface-revolution | 0 / 0 / - | 0 | 2 | 排除検討 | - | 需要なし・軸外/ニッチ |
| 03#27 | 2026-06-12 | creator/dance-fitness-streamer-soundproof | 0 / 0 / - | 0 | 2 | 配信者クラスタ再設計待ち | - | 【再設計待ち】クエリ取得後に段階(これから/不満/安定)へ割り当て直す。旧判断: 需要なし・軸外/ニッチ |
| 03#29 | 2026-06-14 | business/soundproof-industry-news-2026-06 | 0 / 0 / - | 0 | 2 | 排除検討 | - | ニュース系2本(5,426字・2,670字)で表示0。更新型の1本にするか排除。残す場合は1本に統合 |
| 04#32 | 2026-06-24 | diy/diy-refrigeration-noise-reduction | 3 / 0 / 5.67 | 0 | 2 | 配信者クラスタ再設計待ち | - | 【再設計待ち】クエリ取得後に段階(これから/不満/安定)へ割り当て直す。旧判断: 需要なし |
| 05#41 | 2026-07-05 | creator/horror-game-scream-soundproof-mic | 3 / 0 / 13.67 | 0 | 2 | 配信者クラスタ再設計待ち | - | 【再設計待ち】クエリ取得後に段階(これから/不満/安定)へ割り当て直す。旧判断: 需要なし・軸外/ニッチ |
| 08#71 | 2026-07-21 | soundproof-room/bouon-humidifier-comparison | 0 / 0 / - | 0 | 2 | 配信者クラスタ再設計待ち | - | 【再設計待ち】クエリ取得後に段階(これから/不満/安定)へ割り当て直す。旧判断: 需要なし・軸外/ニッチ |

## 保留（1本）

効果測定中。着手しない

| バッチ#番号 | lastmod | category/slug | 3か月 表示/クリック/順位 | GA4(3週) | 被リンク | 区分(案) | 統合先(案) | 理由 |
|---|---|---|---|---|---|---|---|---|
| 08#72 | 2026-07-29 | knowledge/soundproof-material-spec-chart | 72 / 1 / 12.75 | 77 | 6 | 保留 | - | W-21で効果測定中 |

## 統合先ごとのまとめ（P3・P4のうち統合先案があるもの）

### → `soundproof-room/bouon-dchiseinou-meyasu`（2本）

- `soundproof-rental/bourental-syaouseid-choiceindi`（P3、3か月表示11・被リンク6）
- `knowledge/d-value-truth-and-myths`（P3、3か月表示0・被リンク8）

### → `soundproof-rental/saxophone-apartment-practice-guide`（1本）

- `soundproof-rental/rental-caution-cello`（P3、3か月表示9・被リンク3）

### → `soundproof-room/soundproof-room-price-market`（1本）

- `soundproof-rental/home-theater-karaoke-soundproof-design`（P4、3か月表示1・被リンク6）

### → `soundproof-rental/bouon-rental-market-guide`（1本）

- `business/bouonrental-areasec-newbusiness`（P4、3か月表示2・被リンク2）

### → `business/japan-soundproof-market-size`（1本）

- `business/soundproof-space-business-guide`（P3、3か月表示4・被リンク2）

### → `soundproof-room/sleep-quality-soundproof-room`（1本）

- `knowledge/mental-health-benefits-of-silence`（P3、3か月表示14・被リンク2）

### → `soundproof-room/proofroom-humidity-airconditionlist`（1本）

- `soundproof-room/soundproof-room-pollen-protection`（P3、3か月表示4・被リンク2）

### → `money/piano-soundproof-mortgage-tax-guide`（1本）

- `money/musician-soundproof-loan-strategy`（P3、3か月表示3・被リンク2）

### → `money/used-soundproof-room-buying-guide`（1本）

- `money/soundproof-room-buyback-guide`（P3、3か月表示1・被リンク9）

### → `knowledge/sound-sensitivity-misophonia-environment-guide`（1本）

- `knowledge/hsp-self-check-sound-sensitivity`（P3、3か月表示25・被リンク4）
