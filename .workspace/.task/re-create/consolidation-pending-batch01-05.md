# 統合予定・統合判断待ちの記事（batch-01〜05）

作成: 2026-10-13 / 対象: `batch-01.md`〜`batch-05.md`（#1〜#50。2026-10-13にアーカイブ `../archive/re-create-batch-01-08-20261013/`）。残件は [remaining.md](./remaining.md)/ 派生ファイル（マスターではない）
関連: [consolidation-candidates.md](./consolidation-candidates.md)（batch-01〜08横断の統合案の記録。**最新の結末はそちら**。本ファイルは判断待ち9本の根拠が詳しい）、[README.md](./README.md)（運用ルールと優先度）

- 数字は各batchの表と同じ（3か月＝2026-09-26時点の累計、現行URLのみ。GA4＝W40〜W42の3週）。被リンクは `src/content/ja/` 内の記事から数えた本数（2026-10-13時点。処理済みの付け替えは反映済み）
- 「推奨」は私の案。確定は `remaining.md` の「方針(ユーザー記入)」欄で行う
- 統合・排除は、旧URLを301（`public/.htaccess`・`astro.config.mjs`）にし、旧記事の削除・`interlink-postlist.md`/`interlink-tag-clusters.md` の再生成・`pnpm build` までを1回でまとめて処理する

## 件数

| 区分 | 本数 | 内容 |
|---|---|---|
| A 途中で止まっている | 1 | #7 チェロ記事（統合の設定済み・ファイル残置） |
| B 統合先が未定（要判断） | 5 | #2・#6・#9・#44・#47 |
| C 排除検討・統合先なし（要判断） | 4 | #15・#21・#23・#29 |
| D 判断済み（動かさない） | 2 | #14・#26 |
| E 配信者クラスタ（統合判断はしない） | 16 | 再設計待ち（#42は入口候補） |
| F 処理済み（参考） | 5 | 統合・排除の実行済み |
| （参考）リライト完了 | 17 | #5・#8・#10・#16・#22・#24・#25・#33・#34・#35・#37・#38・#39・#45・#46・#48・#50 |

合計：1＋5＋4＋2＋16＋5＋17＝50本（batch-01〜05の全数）。

## A 途中で止まっている（1本）：判断が最優先

| batch#番号 | category/slug | 3か月 表示/クリック/順位 | 状態 |
|---|---|---|---|
| 01#7 | soundproof-rental/rental-caution-cello | 9 / 0 / 8.78 | `saxophone-apartment-practice-guide` へ統合する設定（節の追加・被リンク付け替え・301）は済み。**ファイルだけ残置**。今のままデプロイするとチェロのURLはサックス記事に301される |

- 根拠：Bingで「チェロ エンドピン 床に振動 減らす」（3.75位・クリック1）、「チェロ エンドピンからの振動 軽減」（3位）、「チェロ 防振マット」（4位・クリック1）、「チェロ 騒音」（4位・クリック1）が出ている（`../query-check/analysis_楽器別.md`）
- 選択肢
  1. <strong>統合を取り消す（推奨）</strong> : サックス記事のチェロの節を外し、チェロ分の301を消し、被リンク2記事（`music-student-property-search-guide`・`soundproof-performance-drum`）を元に戻す。チェロ記事は楽器別クラスタの入口として「エンドピン・防振マット・床」の悩みでリライトする
  2. 統合を維持する：チェロ記事のファイルを削除する（被リンクの付け替えと301は設定済み）
- 影響範囲：`public/.htaccess`・`astro.config.mjs` の追加分（チェロ2行）、サックス記事（節の追加分）、被リンク2記事

## B 統合先が未定（要判断：5本）

統合先を決めるか、現状維持にするかを判断する。

| batch#番号 | category/slug | 文字数 | 3か月 表示/クリック/順位 | 被リンク | 統合先の案 | 推奨 |
|---|---|---|---|---|---|---|
| 01#2 | knowledge/why-your-80-percent-rug-rule-fails | 2,138 | 0 / 0 / - | 2 | `knowledge/vibration-reduction-science`（ジョイントマットで防げない理由） | 統合して301 |
| 01#6 | knowledge/diy-soundproof-truth | 2,131 | 7 / 0 / 20.14 | 2 | `diy/diy-soundproof-room-failures-solutions`（DIY失敗例）または `diy/diy-wall-soundproofing-room-guide`（06#53） | 統合して301（失敗例の記事へ） |
| 01#9 | knowledge/biophilic-acoustics | 1,465 | 6 / 0 / 2.5 | 2 | `knowledge/absorption-vs-soundproofing-materials` | <strong>現状維持</strong>（下記） |
| 05#44 | knowledge/dry-floating-floor-natural-frequency | 2,081 | 28 / 0 / 35.75 | 2 | `knowledge/vibration-isolation-technology-trend` | 現状維持（下記） |
| 05#47 | diy/parenting-generation-quiet-corner-diy | 2,910 | 7 / 1 / 16.43 | 3 | `money/quiet-space-budget-decision-guide` | 現状維持（下記） |

### 理由

- <strong>01#2</strong> : 表示0で、需要は見えない。ただし内容は床の振動（ラグ・マットで防げない理由）で、`vibration-reduction-science` と同じ悩み。関連クエリ「ジョイントマット 防音 意味ない」はGSCに出ている。被リンクは `gaming-floor-impact-noise-fix` ほか2本
- <strong>01#6</strong> : 順位20位・表示7。「科学的根拠に乏しい製品を見抜く」は、DIY失敗例の記事と役割が重なる
- <strong>01#9</strong> : 1,465字と薄いが、Bingで「苔 吸音 効果」が2位、「苔 防音 研究」「苔 防音 構造」が2位に出ている。ニッチだが検索に合っているため、統合より、苔の吸音の根拠（研究・構造）を足すリライトを推奨
- <strong>05#44</strong> : 固有振動数の考え方（共振で振動が増える）は、`vibration-isolation-technology-trend` に要点を入れた（2026-10-13）。ただし、この記事の「ばねの選び方」は独自の内容で、統合すると失われる。表示は28件あるので、順位20位より下でも、`vibration-isolation-technology-trend` の「防振の基本原理」からの内部リンクで足りる
- <strong>05#47</strong> : `quiet-space-budget-decision-guide`（05#45）に「0〜3万円で試せる一人になれる場所」の節を足した（2026-10-13）。ただし、#47 は「1万円台から始める段階的な作り方」で、手順の詳細を持つ。統合すると#45が長くなりすぎる

## C 排除検討・統合先なし（4本）

3か月の表示が0件。統合先が決まらないため、「排除（301または410）」か「現状維持」かの判断が要る。

| batch#番号 | category/slug | 文字数 | 被リンク | 内容 | 推奨 |
|---|---|---|---|---|---|
| 03#21 | diy/outdoor-soundproof-curtain-market-guide | 4,235 | 2 | 屋外用防音カーテンの市場整理・調達（建設現場寄り） | 排除（301先は `knowledge/soundproof-material-spec-chart`、または410） |
| 03#23 | knowledge/future-ssi-silent-speech-interface-revolution | 2,409 | 2 | 無声音声インターフェース（SSI）の将来予測 | 現状維持か、`business/global-soundproof-market-trends` へ301 |
| 02#15 | knowledge/proofroom-maker-2025productcheck | 5,426 | 2 | 防音室メーカーの動向（ニュース系） | 排除（要点は `soundproof-room/bouon-osusume-hikaku` へ。301） |
| 03#29 | business/soundproof-industry-news-2026-06 | 2,670 | 2 | 業界ニュースのまとめ（ミュージション世田谷赤堤など） | 更新型の1本として残すか、排除かを選ぶ |

### 判断のポイント

- <strong>ニュース系2本（#15・#29）</strong> : 両方とも表示0。#15 は、出典の確認できない記述が多い（「2020〜2025年の市場変化」など）。#29 は、リブランの公表情報など一次情報にもとづく部分がある。選択肢
  1. #15 を排除（要点を `bouon-osusume-hikaku` へ）、#29 を更新型として残す（推奨）
  2. 2本とも排除する
  3. 2本を1本にまとめる（統合先は `soundproof-industry-news-2026-06`）
- <strong>#21</strong> : 被リンクは `hsp-soundproof-curtain-guide` など。排除する場合は被リンクを付け替える
- <strong>#23</strong> : 「軸外/ニッチ」だが、害はない。サイトの専門性（E-E-A-T）として残す選択もある。表示0が続くなら排除

## D 判断済み（動かさない：2本）

| batch#番号 | category/slug | 判断 |
|---|---|---|
| 02#14 | knowledge/mental-health-benefits-of-silence | 2026-10-13 統合しない。検索意図が統合先（睡眠）と違い、順位4.86位・表示14件。根拠のない数値は修正済み |
| 03#26 | soundproof-room/soundproof-room-pollen-protection | 2026-10-13 統合しない。温湿度管理記事への加筆で単独でも十分な内容に |

## E 配信者クラスタ（統合・排除は判断しない：16本）

方針は `cluster-streamer.md`。段階別（これから／不満／安定）に再設計し、実データが出るまで統合・排除・301はしない。

| batch | 番号 | slug |
|---|---|---|
| 01 | 3 | creator/soundproof-rental-life-streamer |
| 01 | 4 | creator/streaming-room-layout-guide |
| 02 | 17 | creator/game-streamer-sound-types |
| 02 | 18 | creator/soundproof-rental-vs-diy-streamer |
| 02 | 19 | creator/streamer-regional-studio-move |
| 02 | 20 | creator/streamer-rental-preview-checklist |
| 03 | 27 | creator/dance-fitness-streamer-soundproof |
| 03 | 28 | creator/streamer-pet-noise-balance |
| 03 | 30 | creator/streaming-audio-first-low-budget |
| 04 | 31 | creator/young-streamer-smartphone-monetization-roadmap |
| 04 | 32 | diy/diy-refrigeration-noise-reduction |
| 04 | 40 | business/report-japan-asmr-vtuber-streaming-studio-standard |
| 05 | 41 | creator/horror-game-scream-soundproof-mic |
| 05 | 42 | creator/streamer-soundproof-room-comprehensive-guide（入口候補） |
| 05 | 43 | creator/vtuber-soundproof-environment-complete-guide |
| 05 | 49 | creator/bourentakl-streamer-settingsetubi |

05#42は「統合先ではなく段階別クラスタの入口候補」として再構築する対象です。

## F 処理済み（参考：5本）

| batch#番号 | category/slug | 統合先 | 状態 |
|---|---|---|---|
| 01#1 | soundproof-rental/bourental-syaouseid-choiceindi | soundproof-room/bouon-dchiseinou-meyasu | 統合済み・削除・301切替 |
| 02#11 | soundproof-rental/home-theater-karaoke-soundproof-design | money/soundproof-room-price-market | 統合済み・削除・301切替 |
| 02#12 | business/bouonrental-areasec-newbusiness | soundproof-rental/bouon-rental-market-guide | 本文は移さず301のみ・削除 |
| 02#13 | business/soundproof-space-business-guide | business/japan-soundproof-market-size | 統合済み・削除・301切替 |
| 04#36 | money/musician-soundproof-loan-strategy | money/soundproof-room-loan-guide | 統合済み・削除・301切替（案の統合先から変更） |

統合先の記事（`bouon-dchiseinou-meyasu`・`soundproof-room-price-market`・`japan-soundproof-market-size`・`soundproof-room-loan-guide`）は、統合と同時に加筆済みです。

## 判断してほしいこと（優先順）

1. <strong>A：チェロ記事</strong> : 統合を取り消す（推奨）か、維持してファイルを削除するか
2. <strong>B：#2・#6</strong> : 推奨どおり統合して301にしてよいか
3. <strong>B：#9・#44・#47</strong> : 推奨どおり現状維持（#9 は苔の根拠を足すリライト）でよいか
4. <strong>C：ニュース系（#15・#29）</strong> : 選択肢1〜3のどれか
5. <strong>C：#21・#23</strong> : 排除（301/410）か、現状維持か

batch-06〜08 の統合候補（`consolidation-candidates.md` のA・Bグループ）は、このリストの対象外。
