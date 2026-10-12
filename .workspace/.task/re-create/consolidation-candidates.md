# 統合検討の記事（batch-01〜08 横断）

作成: 2026-10-13 / 各バッチの「区分(案)」が**統合検討**の14本を、統合先ごとにまとめたもの（うち1本は2026-10-13に「統合しない」と判断済み）。派生ファイルで、方針の確定は各バッチの「方針(ユーザー記入)」欄で行う（運用は `README.md`）。

- 数字は `priority-list.md` と各バッチ表と同じ（3か月＝2026-09-26時点の累計、現行URLのみ。GA4＝W40〜W42の3週）。被リンクは `src/content/ja/` 内の記事から数えた本数
- 統合する場合は、`bouon-internal-link-ops` skillで被リンクを確認し、付け替え先を決める。旧URLは301（`public/.htaccess`・`astro.config.mjs`）にし、**1回の公開でまとめて処理**する
- 配信者クラスタの記事（「配信者クラスタ再設計待ち」）は統合を判断しないため含めない（`cluster-streamer.md`）

## 件数

| グループ | 本数 |
|---|---|
| A 統合先あり | 8 |
| B 統合先は要検討 | 5 |
| 判断済み（統合しない） | 1 |
| 合計 | 14 |

## A 統合先あり（8本・統合先6記事）

統合先の優先度は `priority-list.md` のもの。統合先を先にリライトして受け皿を強くしてから、旧URLを寄せると手戻りが少ない。

### → `soundproof-room/bouon-dchiseinou-meyasu`（P1・D値クラスタの統合先）

| バッチ#番号 | category/slug | タイトル | 文字数 | 3か月 表示/クリック/順位 | GA4(3週) | 被リンク | 理由 |
|---|---|---|---|---|---|---|---|
| 01#1 | soundproof-rental/bourental-syaouseid-choiceindi | 防音賃貸の「D値」とは？楽器別の推奨レベルと失敗しない物件選びの基準 | 4,599 | 11 / 0 / 30.18 | 0 | 6 | D値の解説が重複。順位30位・被リンク6を統合先へ付け替え |
| 06#56 | knowledge/d-value-truth-and-myths | 防音のプロが教えるD値の嘘と本当｜カタログスペックだけで選ぶと失敗する理由 | 4,630 | 0 / 0 / - | 3 | 8 | D値の解説が重複。0表示・被リンク8を統合先へ付け替え |

- 2本とも4,600字台と長い。統合先に吸収する要点（楽器別の推奨D値／カタログスペックの落とし穴）を先に洗い出す
- 被リンク合計14本の付け替えが必要

### → `soundproof-rental/saxophone-apartment-practice-guide`（P2）

| バッチ#番号 | category/slug | タイトル | 文字数 | 3か月 表示/クリック/順位 | GA4(3週) | 被リンク | 理由 |
|---|---|---|---|---|---|---|---|
| 01#7 | soundproof-rental/rental-caution-cello | 楽器可物件でもチェロは要注意？防音賃貸の規約と落とし穴 | 1,361 | 9 / 0 / 8.78 | 3 | 3 | 1,361字と薄い。楽器別の賃貸練習記事に統合 |

- 順位8.78位で表示9。統合先がサックス記事のため、チェロ固有の内容（楽器の構造・床への振動）を節として足せるかを見て判断

### → `business/japan-soundproof-market-size`（P1）

| バッチ#番号 | category/slug | タイトル | 文字数 | 3か月 表示/クリック/順位 | GA4(3週) | 被リンク | 理由 |
|---|---|---|---|---|---|---|---|
| 02#13 | business/soundproof-space-business-guide | 防音スペースのビジネス活用ガイド｜副業シェアから事業化まで3パターン | 2,315 | 4 / 1 / 5.75 | 0 | 2 | 軸外/ニッチ。統合先に寄せる |

### → `soundproof-room/sleep-quality-soundproof-room`（P2）

| バッチ#番号 | category/slug | タイトル | 文字数 | 3か月 表示/クリック/順位 | GA4(3週) | 被リンク | 理由 |
|---|---|---|---|---|---|---|---|
| 02#14 | knowledge/mental-health-benefits-of-silence | 静寂の力：なぜ防音室は『最強のメンタルケア』になるのか | 2,461 | 14 / 0 / 4.86 | 0 | 2 | 周辺テーマ。統合先に寄せるか現状維持 |

- 順位4.86位で表示14。上位に出ているため、現状維持も選択肢

### → `money/piano-soundproof-mortgage-tax-guide`（バッチ対象外・lastmodが新しい）

| バッチ#番号 | category/slug | タイトル | 文字数 | 3か月 表示/クリック/順位 | GA4(3週) | 被リンク | 理由 |
|---|---|---|---|---|---|---|---|
| 04#36 | money/musician-soundproof-loan-strategy | 音楽家・演奏家のための防音室導入戦略｜「本職の信用」と「ファンの応援」を賢く | 2,350 | 3 / 0 / 4.33 | 0 | 2 | 需要なし。ローン・税の記事に統合 |

### → `money/used-soundproof-room-buying-guide`（P2・中古・買取クラスタの統合先）

| バッチ#番号 | category/slug | タイトル | 文字数 | 3か月 表示/クリック/順位 | GA4(3週) | 被リンク | 理由 |
|---|---|---|---|---|---|---|---|
| 06#59 | money/soundproof-room-buyback-guide | 防音室を高く売るには？買取査定のポイントと個人売買の注意点【2026年版】 | 3,729 | 1 / 0 / 33 | 0 | 9 | 主軸だが需要の兆候が弱い。タイトル・検索意図を見直すか統合 |

- 被リンク9は統合候補で最多級。統合しても、買取（売る側）の切り口を統合先に節として残す必要がある

### → `knowledge/sound-sensitivity-misophonia-environment-guide`（P1）

| バッチ#番号 | category/slug | タイトル | 文字数 | 3か月 表示/クリック/順位 | GA4(3週) | 被リンク | 理由 |
|---|---|---|---|---|---|---|---|
| 07#65 | knowledge/hsp-self-check-sound-sensitivity | HSPセルフチェックリスト｜音に敏感な人の特徴と対処法まとめ | 2,857 | 25 / 1 / 29.08 | 4 | 4 | HSP・音過敏の記事が分散。統合先に寄せる |

- 統合先は `hsp-soundproof-room-guide`（07#62、P2）とも近い。HSP系の3本をどう分けるかを先に決める

## B 統合先は要検討（5本）

統合先の案が付いていない記事。統合先を決めるか、現状維持にするかをユーザーが判断する。

| バッチ#番号 | category/slug | タイトル | 文字数 | 3か月 表示/クリック/順位 | GA4(3週) | 被リンク | 理由 |
|---|---|---|---|---|---|---|---|
| 01#6 | knowledge/diy-soundproof-truth | DIY防音の不都合な真実を解説｜科学的根拠に乏しい製品を見抜く思考法 | 2,131 | 7 / 0 / 20.14 | 0 | 2 | 周辺テーマ。統合先に寄せるか現状維持 |
| 01#9 | knowledge/biophilic-acoustics | バイオフィリック・アコースティック：苔と緑で「静寂の庭」を壁に作る技法 | 1,465 | 6 / 0 / 2.5 | 0 | 2 | 軸外/ニッチ。統合先に寄せる |
| 05#44 | knowledge/dry-floating-floor-natural-frequency | 防振ゴムを入れたのに振動が増えた｜乾式浮き床の固有振動数の考え方 | 2,081 | 28 / 0 / 35.75 | 0 | 2 | 周辺テーマ。統合先に寄せるか現状維持 |
| 05#47 | diy/parenting-generation-quiet-corner-diy | 子育て世代のDIY「一人になれる場所」｜1万円台から始める段階的な作り方 | 2,910 | 7 / 1 / 16.43 | 0 | 3 | 周辺テーマ。統合先に寄せるか現状維持 |
| 06#55 | diy/treadmill-apartment-soundproofing-layering | マンションのランニングマシーン防音おすすめ対策！「重ね敷き」で苦情回避 | 4,256 | 0 / 0 / - | 2 | 2 | 4,256字で表示0。ランニングマシン需要は小さい。統合先は要検討 |

- 01#6・05#44・05#47・06#55 は DIY防音・材料クラスタ。受け皿になる記事（例: P2の `diy/diy-wall-soundproofing-room-guide`〈06#53〉）に寄せるかを、まとめて決められる
- 01#9 は軸外寄りのため、統合より排除検討に近い

## 判断済み（統合しない）

| バッチ#番号 | category/slug | 統合先(案) | 判断 |
|---|---|---|---|
| 03#26 | soundproof-room/soundproof-room-pollen-protection | soundproof-room/proofroom-humidity-airconditionlist | 2026-10-13 統合しない。統合先案の温湿度管理記事に、加湿の要否・温湿度計・結露の時期を加筆して単独で十分な内容になったため。花粉対策は別記事のまま残す（温湿度管理記事から内部リンク済み） |

## 関連（区分は「統合検討」ではないが統合先を持つ）

排除検討（P4）のうち、要点を統合先に吸収する前提の記事。統合時に同じ公開でまとめて処理する。

| バッチ#番号 | category/slug | 統合先(案) | 被リンク | 区分(案) |
|---|---|---|---|---|
| 02#11 | soundproof-rental/home-theater-karaoke-soundproof-design | soundproof-room/soundproof-room-price-market | 6 | 排除検討(要点は統合先へ) |
| 02#12 | business/bouonrental-areasec-newbusiness | soundproof-rental/bouon-rental-market-guide | 2 | 排除検討(要点は統合先へ) |

## 判断の進め方（案）

1. グループAのうち、統合先がP1の3記事（D値・市場規模・音過敏）は、**統合先のリライトと同時に**旧URLを寄せる。受け皿が強くなってから寄せると、順位の取りこぼしが小さい
2. 順位が高い記事（`mental-health-benefits-of-silence` 4.86位、`rental-caution-cello` 8.78位）は、統合せず現状維持も選べる
3. 被リンクが多い記事（`soundproof-room-buyback-guide` 9本、`d-value-truth-and-myths` 8本）は、統合後も内部リンクの付け替え漏れが出ないよう、`bouon-internal-link-ops` で先に一覧を出す
