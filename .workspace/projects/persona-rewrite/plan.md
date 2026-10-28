# 語り手変更に合わせた既存記事のリライト（T-43）

作成: 2026-10-28 ／ タスク: `.task-management/task.md` T-43 ／ 規約の正本: `.claude/skills/bouon-writing/SKILL.md`「語り手」節（2026-10-27〜）

## 1. なぜやるか

2026-10-27 に語り手を「建築音響・不動産・心理に精通したエキスパート（ペルソナΩ）」から、**一般ユーザーとして防音を調べてきた さしし**に変えた（Ωは編集長の品質チェックとしてだけ残す）。既存186記事は旧い語り手のまま書かれていて、次のずれがある。

## 2. 現状（2026-10-28 grep で計測。`src/content/ja` の186記事）

| 項目 | 該当 | 規約 |
|---|---|---|
| 「私」「筆者」がない記事 | **174本** | 1記事2〜4箇所、調べた動機・迷った点・計算の前提・一般ユーザーとしての感想に使う |
| 煽り語（徹底解説46・最強36・圧倒的15・完全攻略5） | 66本・102箇所（うち title/description に22本） | 誇大表現はΩフィルター1で排除 |
| 「防音のプロが教えるD値の嘘と本当」のリンク文言 | 12本 | 専門家を名乗らない。リンク先のタイトルは修正済みで、リンク文言だけ古い |
| 「プロの視点から」「編集部が」 | 4本 | 同上・一人称は「私」 |
| 施工・所有の体験 | 0本（「施工した」の該当3本は読者・業者の話で問題なし） | — |

「本記事では」（56）・「当サイト」（54）は規約で禁止していないため対象外。

## 3. 作業の種類と見積もり

トークン量は Claude の作業量の目安（記事を読む量＋編集量）。週の使用量に対する割合は、作業1回目のあとで実測して見直す。

| ID | 作業 | 対象 | やり方 | 1本あたり | 合計の目安 | 規模 |
|---|---|---|---|---|---|---|
| B1 | リンク文言「防音のプロが教える〜」を現タイトルに合わせる | 12本 | 一括置換（`[D値の嘘と本当｜…](/ja/knowledge/d-value-truth-and-myths/)`） | — | 1万トークン | S |
| B2 | 「プロの視点から」「編集部が」を語り手に合わせて書き換え | 4本 | 該当行だけ編集 | 3千 | 1.5万 | S |
| B3 | 煽り語を具体的な事実の言い方に置き換え。title/description は CTR に効くので、クエリ契約（`query-intent-match.md`）を守って直す | 66本・102箇所 | 該当行を grep →文脈を見て編集 | 3〜5千 | 30万 | M |
| B4 | 語り手の置き換え（下の §4）。記事を通読して、一人称2〜4箇所・根拠の出どころの明示・専門家口調の断定の言い換え | 174本 | 1本ずつ通読して編集 | 1.5〜2万 | 300万（上位20本なら35万） | L |

**全部で約330万トークン**。B1〜B3 は機械的に近く軽い。重いのは B4 で、全体の9割を占める。

## 4. B4 の書き方（1本ごとのチェックリスト）

1. 導入（3文以内）の直後か最初の H2 のどこかに、**調べた動機**を1文（「静かに眠れる部屋にしたくて調べ始めたとき、最初に迷ったのが〜でした」のように、きっかけ節の範囲で）
2. 比較・試算の段で「私が調べた範囲では」「メーカーの公表値を並べると」と、**根拠の出どころ**を地の文で示す（1〜2箇所）
3. 結論・まとめで、一般ユーザーとしての判断を1文（「この価格差なら、私は〜を選びます」）
4. 「〜すべきです」「プロとして断言します」など専門家の断定は、出典つきの「〜とされています」「メーカーは〜と案内しています」＋「最終的な判断は施工業者に相談を」に変える
5. 体験（見学・問い合わせ・使った）が必要な箇所は書かない。素材があったほうがよい箇所にだけ `{/* USER_NOTE: 候補=〇〇の感想 / 筆者が記入 */}` を残す（**1記事1個まで**。未処理のまま公開しないルールなので、筆者の記入作業が増えすぎないように）
6. Ωの4フィルター（誇大広告の排除・二次リスク・ROI・QOL）で最後に確認。`lastmod` を更新
7. 一人称は**主役にしない**。データ・出典・表は今のまま残す（書き直すのは声だけで、情報量は減らさない）

## 5. 進め方（フェーズ）

| フェーズ | 内容 | 目安 | 状態 |
|---|---|---|---|
| 1 | B1・B2（一括置換と4本の書き換え） | 2.5万 | 完了 2026-10-28（リンク文言8本。プロ表現は追加で見つかった「音響エンジニアが解剖」「専門家が解説」等を含め11本・13箇所。改名したタイトルへのリンク文言も更新。計17本） |
| 2 | B3 のうち title/description の22本 → 本文の残り | 30万 | 未着手 |
| 3 | B4 を表示回数の上位20本（付録の上から順） | 35万 | 未着手 |
| 4 | B4 の残り154本を、カテゴリごとに集中枠で | 265万 | 未着手 |

- フェーズ3の効果測定: 直した20本の日付を T-43 の本文に書き、翌々月の月次解析で表示・CTR・順位を前月と比べる（リライトで順位が落ちていないかの確認が主目的）
- フェーズ4は T-42（改善優先度の再判定）の結果で、統合・noindex になる記事を先に除く

## 6. 付録：記事ごとの該当数（表示回数 m09 の多い順）

列: 表示(m09)＝GSC の表示回数（`access-data/2026/m09/ページ.csv`。0 はデータなし）／一人称＝「私」「筆者」の行数／煽り＝煽り語の数／プロ表現＝「防音のプロ」「プロの視点」等の数

| 表示(m09) | 記事 | 一人称 | 煽り | プロ表現 |
|---:|---|---:|---:|---:|
| 243 | `knowledge/ground-loop-noise-basics` | 0 | 0 | 0 |
| 191 | `soundproof-rental/music-student-property-search-guide` | 0 | 0 | 0 |
| 96 | `soundproof-room/onetouch-soundproof-wall-review` | 0 | 0 | 0 |
| 90 | `diy/bass-trap-installation-guide` | 0 | 1 | 0 |
| 69 | `soundproof-room/wifi-connection-guide` | 0 | 0 | 0 |
| 69 | `knowledge/mansion-instrument-practice-time-rules` | 0 | 0 | 0 |
| 68 | `creator/gaming-floor-impact-noise-fix` | 0 | 0 | 0 |
| 64 | `soundproof-room/daiwa-house-jiyuku-soundproof-review` | 14 | 0 | 0 |
| 60 | `business/japan-soundproof-market-size` | 0 | 0 | 0 |
| 44 | `knowledge/coincidence-effect-soundproofing` | 0 | 0 | 1 |
| 42 | `money/soundproof-room-moving` | 0 | 0 | 0 |
| 40 | `money/soundproof-contractor-selection-guide` | 0 | 0 | 0 |
| 35 | `soundproof-room/construction-types-cost-comparison` | 0 | 0 | 0 |
| 33 | `money/used-soundproof-room-buying-guide` | 0 | 0 | 0 |
| 32 | `soundproof-room/piano-room-guide` | 0 | 0 | 0 |
| 32 | `knowledge/soundproof-app-review-2026` | 0 | 0 | 2 |
| 31 | `knowledge/soundproof-material-spec-chart` | 0 | 1 | 1 |
| 26 | `money/piano-soundproof-mortgage-tax-guide` | 0 | 0 | 0 |
| 26 | `knowledge/d-value-vs-rw-value-confusion` | 0 | 1 | 1 |
| 21 | `creator/family-home-soundproof-reno-negotiation` | 0 | 0 | 0 |
| 20 | `creator/streamer-pet-noise-balance` | 0 | 0 | 0 |
| 16 | `creator/female-streamer-privacy-soundproof` | 0 | 0 | 0 |
| 15 | `soundproof-room/soundproof-room-size` | 0 | 0 | 1 |
| 15 | `knowledge/tokyo-bouon-whitekyuon-okudake-review` | 0 | 0 | 0 |
| 15 | `creator/farmland-prefab-streaming-room-legal` | 0 | 0 | 0 |
| 14 | `money/soundproof-room-price-market` | 0 | 1 | 0 |
| 13 | `creator/streamer-noise-complaint-response` | 0 | 0 | 0 |
| 12 | `knowledge/db-reduction-familiar-sound-scale` | 0 | 2 | 2 |
| 11 | `soundproof-rental/saxophone-apartment-practice-guide` | 0 | 1 | 0 |
| 11 | `soundproof-rental/instrument-allowed-rental-research-method` | 0 | 2 | 0 |
| 11 | `money/custom-home-soundproof-price-guide` | 0 | 0 | 0 |
| 11 | `knowledge/hsp-self-check-sound-sensitivity` | 0 | 1 | 0 |
| 11 | `diy/electronic-drum-vibration-fuwafuwa-system` | 0 | 0 | 0 |
| 10 | `knowledge/sound-sensitivity-misophonia-environment-guide` | 0 | 0 | 0 |
| 10 | `creator/streaming-pc-fan-noise-mic` | 0 | 0 | 0 |
| 9 | `soundproof-room/sound-reduction-simulation` | 0 | 1 | 0 |
| 9 | `money/quiet-space-budget-decision-guide` | 0 | 0 | 0 |
| 8 | `soundproof-rental/pet-noise-soundproof-measures` | 0 | 0 | 0 |
| 7 | `money/quiet-space-relocation-decision-guide` | 0 | 1 | 0 |
| 7 | `diy/parenting-generation-quiet-corner-diy` | 0 | 0 | 0 |
| 7 | `creator/cramped-booth-gaming-chair-health` | 0 | 0 | 0 |
| 6 | `money/soundproof-room-loan-guide` | 0 | 0 | 0 |
| 6 | `knowledge/biophilic-acoustics` | 0 | 1 | 0 |
| 6 | `diy/gamer-acoustic-placement` | 0 | 0 | 0 |
| 6 | `creator/young-streamer-smartphone-monetization-roadmap` | 0 | 0 | 0 |
| 6 | `creator/streaming-audio-first-low-budget` | 0 | 1 | 0 |
| 6 | `creator/soundproof-booth-food-odor-management` | 0 | 0 | 0 |
| 5 | `soundproof-room/proofroom-humidity-airconditionlist` | 0 | 0 | 0 |
| 5 | `local/osaka-soundproof-rental-guide` | 0 | 3 | 0 |
| 5 | `diy/wooden-apartment-soundproof-guide` | 0 | 3 | 0 |
| 5 | `diy/soundproof-sheet-heavy-diy-tips` | 0 | 0 | 0 |
| 4 | `soundproof-room/shanon-vs-bouon-window` | 0 | 0 | 1 |
| 4 | `soundproof-rental/rental-price-index-13cities-soundproof` | 0 | 0 | 0 |
| 4 | `soundproof-rental/owner-renovation-musician-24h-practice-strategy` | 1 | 2 | 0 |
| 4 | `soundproof-rental/housing-builder-soundproof-comparison` | 3 | 0 | 0 |
| 4 | `money/soundproof-room-rental-cost` | 0 | 0 | 0 |
| 4 | `creator/parenting-streamer-soundproof` | 0 | 0 | 0 |
| 4 | `creator/horror-game-scream-soundproof-mic` | 0 | 0 | 0 |
| 4 | `business/privacy-pod-market-growth` | 0 | 0 | 0 |
| 4 | `business/datacenter-soundproof-technology-facts` | 0 | 0 | 0 |
| 3 | `money/soundproof-room-rental-lease` | 0 | 1 | 0 |
| 3 | `money/small-business-soundproof-subsidy-guide` | 0 | 0 | 0 |
| 3 | `diy/closet-diy-soundproof-room` | 0 | 1 | 0 |
| 3 | `creator/asmr-external-noise-elimination` | 0 | 0 | 0 |
| 3 | `business/japan-bouonproof-marketnextasia` | 0 | 0 | 0 |
| 2 | `soundproof-rental/bouonrental-market-research2025` | 0 | 0 | 0 |
| 2 | `creator/streamer-soundproof-room-comprehensive-guide` | 0 | 0 | 0 |
| 2 | `creator/streamer-noise-quick-fix` | 0 | 0 | 0 |
| 1 | `soundproof-room/sleep-quality-soundproof-room` | 0 | 1 | 0 |
| 1 | `soundproof-room/proofroom-soudmore-manual` | 0 | 0 | 0 |
| 1 | `soundproof-room/million-yen-soundproof-room-professional` | 0 | 0 | 0 |
| 1 | `soundproof-room/bouon-setti-checkpoint` | 0 | 0 | 0 |
| 1 | `soundproof-rental/rental-caution-cello` | 0 | 1 | 0 |
| 1 | `soundproof-rental/bouon-rental-market-guide` | 0 | 1 | 0 |
| 1 | `money/soundproof-subsidy-news-2025` | 0 | 0 | 0 |
| 1 | `money/soundproof-subsidy-check-guide` | 0 | 0 | 0 |
| 1 | `money/owner-renovation-roi-simulation-tool` | 0 | 2 | 0 |
| 1 | `local/tokyo-soundproof-rental-summary` | 0 | 0 | 0 |
| 1 | `diy/free-cardboard-soundproof-tech` | 0 | 1 | 0 |
| 1 | `diy/diy-led-acoustic-panels` | 0 | 0 | 0 |
| 1 | `creator/streamer-rental-selection-guide` | 0 | 1 | 0 |
| 1 | `creator/game-streamer-sound-types` | 0 | 0 | 0 |
| 0 | `soundproof-room/yamaha-tabisuru-bouon-room` | 0 | 0 | 0 |
| 0 | `soundproof-room/wind-string-instrument-booth-selection` | 0 | 0 | 0 |
| 0 | `soundproof-room/soundproof-room-pollen-protection` | 0 | 0 | 0 |
| 0 | `soundproof-room/soundproof-room-large-size` | 0 | 0 | 0 |
| 0 | `soundproof-room/soundproof-room-demolition-guide` | 0 | 1 | 0 |
| 0 | `soundproof-room/soundproof-room-budget-selection-guide` | 0 | 1 | 0 |
| 0 | `soundproof-room/soundproof-performance-drum` | 1 | 1 | 0 |
| 0 | `soundproof-room/shimamura-music-soundproof-room-guide` | 0 | 0 | 0 |
| 0 | `soundproof-room/proofroom-aircondition-select` | 0 | 0 | 0 |
| 0 | `soundproof-room/outdoor-detached-soundproof-room` | 0 | 0 | 0 |
| 0 | `soundproof-room/otodasu-voice-chat-test` | 0 | 1 | 0 |
| 0 | `soundproof-room/notice-outside-sounds-in-booth` | 1 | 0 | 0 |
| 0 | `soundproof-room/noise-solutions-relocate-retrofit-custom-home` | 0 | 0 | 0 |
| 0 | `soundproof-room/nitori-soundproof-acoustic-guide` | 0 | 0 | 0 |
| 0 | `soundproof-room/night-practice-soundproof-guide` | 0 | 2 | 0 |
| 0 | `soundproof-room/kawai-nasal-soundproof-room-guide` | 0 | 3 | 0 |
| 0 | `soundproof-room/hsp-soundproof-room-guide` | 0 | 1 | 0 |
| 0 | `soundproof-room/hsp-soundproof-curtain-guide` | 1 | 0 | 0 |
| 0 | `soundproof-room/home-theater-soundproof-room` | 1 | 0 | 0 |
| 0 | `soundproof-room/home-private-booth-guide` | 0 | 0 | 0 |
| 0 | `soundproof-room/ear-pressure-tinnitus-dizziness` | 0 | 0 | 0 |
| 0 | `soundproof-room/door-window-weak-points` | 0 | 0 | 0 |
| 0 | `soundproof-room/custom-home-soundproof-room-layout` | 0 | 1 | 0 |
| 0 | `soundproof-room/custom-home-soundproof-consultation-prep` | 0 | 0 | 0 |
| 0 | `soundproof-room/custom-home-soundproof-builder-selection` | 3 | 0 | 1 |
| 0 | `soundproof-room/compact-booth-under-1-5-tatami` | 0 | 0 | 0 |
| 0 | `soundproof-room/buy-home-with-soundproof-room` | 0 | 0 | 0 |
| 0 | `soundproof-room/budget-soundproof-booth-comparison` | 0 | 0 | 0 |
| 0 | `soundproof-room/bouon-osusume-hikaku` | 0 | 2 | 0 |
| 0 | `soundproof-room/bouon-humidifier-comparison` | 0 | 0 | 0 |
| 0 | `soundproof-room/bouon-dchiseinou-meyasu` | 0 | 2 | 2 |
| 0 | `soundproof-room/assembly-type-comparison` | 0 | 1 | 0 |
| 0 | `soundproof-rental/soundproof-space-rental-guide` | 0 | 0 | 0 |
| 0 | `soundproof-rental/soundproof-rental-cost-performance-guide` | 0 | 2 | 0 |
| 0 | `soundproof-rental/soundproof-rental-brand-comparison` | 0 | 0 | 0 |
| 0 | `soundproof-rental/single-living-soundproof-rental-guide` | 0 | 0 | 0 |
| 0 | `soundproof-rental/report-japan-soundproof-rental-market-needs` | 0 | 2 | 0 |
| 0 | `soundproof-rental/rental-unit-soundproof-room` | 1 | 0 | 0 |
| 0 | `soundproof-rental/rental-proofroom-contractcheck` | 0 | 0 | 0 |
| 0 | `soundproof-rental/remote-work-family-harmony-soundproof` | 1 | 1 | 0 |
| 0 | `soundproof-rental/owner-renovation-shibuya-shinjuku-vtuber-strategy` | 0 | 1 | 0 |
| 0 | `soundproof-rental/noise-complaint-landlord-negotiation-guide` | 0 | 0 | 0 |
| 0 | `soundproof-rental/noise-canceling-headphones-sleep` | 1 | 8 | 0 |
| 0 | `soundproof-rental/musision-comprehensive-guide` | 0 | 2 | 1 |
| 0 | `soundproof-rental/guitar-apartment-practice-guide` | 0 | 0 | 0 |
| 0 | `soundproof-rental/child-rearing-soundproof-pillar` | 0 | 3 | 0 |
| 0 | `soundproof-rental/bedroom-noise-type-solution-guide` | 0 | 0 | 0 |
| 0 | `soundproof-rental/apartment-weight-limit-500kg` | 0 | 1 | 1 |
| 0 | `money/telework-soundproof-loan-strategy` | 0 | 1 | 0 |
| 0 | `money/streamer-tax-strategy` | 0 | 1 | 0 |
| 0 | `money/soundproof-window-subsidy-2025-guide` | 0 | 3 | 0 |
| 0 | `money/soundproof-room-buyback-guide` | 0 | 0 | 0 |
| 0 | `money/soundproof-room-buy-rent-sell-guide` | 0 | 0 | 0 |
| 0 | `money/soundproof-reform-cost-by-tatami` | 0 | 0 | 0 |
| 0 | `money/bouon-asset-value-analysis` | 0 | 2 | 1 |
| 0 | `local/sapporo-soundproof-rental-guide` | 0 | 2 | 0 |
| 0 | `local/saitama-soundproof-rental-guide` | 0 | 1 | 0 |
| 0 | `local/regional-city-soundproof-rental-guide` | 0 | 0 | 0 |
| 0 | `local/nagoya-soundproof-rental-guide` | 0 | 1 | 0 |
| 0 | `local/kyoto-soundproof-rental-guide` | 0 | 0 | 0 |
| 0 | `local/kobe-soundproof-rental-guide` | 0 | 0 | 0 |
| 0 | `local/kanagawa-soundproof-rental-guide` | 0 | 1 | 0 |
| 0 | `local/hiroshima-soundproof-rental-guide` | 0 | 1 | 0 |
| 0 | `local/hamamatsu-soundproof-rental-guide` | 0 | 0 | 0 |
| 0 | `local/fukuoka-soundproof-rental-guide` | 0 | 3 | 0 |
| 0 | `local/chiba-soundproof-rental-guide` | 0 | 1 | 0 |
| 0 | `knowledge/vibration-reduction-science` | 0 | 0 | 0 |
| 0 | `knowledge/vibration-isolation-technology-trend` | 0 | 0 | 0 |
| 0 | `knowledge/structure-borne-noise-tapping-striking` | 0 | 0 | 0 |
| 0 | `knowledge/soundproof-culture-japan-vs-america` | 0 | 0 | 0 |
| 0 | `knowledge/report-japan-asmr-vtuber-streaming-studio-standard` | 0 | 1 | 0 |
| 0 | `knowledge/noise-regulation-update-2025` | 0 | 1 | 1 |
| 0 | `knowledge/noise-complaint-legal-precedent-manual` | 0 | 0 | 0 |
| 0 | `knowledge/neighborhood-noise-seasonal-pattern-statistics` | 0 | 0 | 0 |
| 0 | `knowledge/mental-health-benefits-of-silence` | 0 | 2 | 0 |
| 0 | `knowledge/future-ssi-silent-speech-interface-revolution` | 0 | 0 | 0 |
| 0 | `knowledge/d-value-truth-and-myths` | 0 | 3 | 0 |
| 0 | `knowledge/building-fire-law-soundproof-room` | 0 | 0 | 0 |
| 0 | `knowledge/absorption-vs-soundproofing-materials` | 0 | 1 | 0 |
| 0 | `diy/treadmill-apartment-soundproofing-layering` | 0 | 0 | 0 |
| 0 | `diy/soundproof-room-diy-cost` | 0 | 0 | 0 |
| 0 | `diy/renter-parent-house-soundproofing` | 0 | 0 | 0 |
| 0 | `diy/outdoor-soundproof-curtain-market-guide` | 0 | 0 | 0 |
| 0 | `diy/keyboard-typing-noise-vibration` | 5 | 0 | 0 |
| 0 | `diy/karaoke-box-soundproof-performance-guide` | 0 | 1 | 0 |
| 0 | `diy/futon-cardboard-karaoke-booth` | 0 | 1 | 0 |
| 0 | `diy/electronic-piano-key-noise-vibration` | 0 | 0 | 0 |
| 0 | `diy/diy-wall-soundproofing-room-guide` | 0 | 0 | 0 |
| 0 | `diy/diy-vocal-soundproof-mask` | 0 | 0 | 0 |
| 0 | `diy/diy-substitute-materials-daiso-plastic-board` | 0 | 0 | 0 |
| 0 | `diy/diy-soundproofing-tips` | 0 | 3 | 1 |
| 0 | `diy/diy-soundproof-room-failures-solutions` | 0 | 0 | 0 |
| 0 | `diy/diy-refrigeration-noise-reduction` | 0 | 0 | 0 |
| 0 | `diy/diy-internal-window-road-noise-reduction` | 0 | 1 | 0 |
| 0 | `diy/danbotchi-diy-blueprints` | 0 | 1 | 0 |
| 0 | `diy/danbocchi-floor-protection` | 0 | 1 | 0 |
| 0 | `creator/streaming-room-layout-guide` | 0 | 1 | 0 |
| 0 | `creator/soundproof-booth-cable-management` | 0 | 0 | 0 |
| 0 | `creator/singer-instrumentalist-stream-soundproof` | 0 | 0 | 0 |
| 0 | `creator/one-room-streaming-soundproof` | 0 | 0 | 0 |
| 0 | `creator/collab-streaming-soundproof-space` | 0 | 0 | 0 |
| 0 | `business/soundproof-market-esg-trend` | 0 | 0 | 0 |
| 0 | `business/shared-streaming-studio-growth-pricing-utilization` | 0 | 0 | 0 |
| 0 | `business/global-soundproof-market-trends` | 0 | 1 | 0 |
