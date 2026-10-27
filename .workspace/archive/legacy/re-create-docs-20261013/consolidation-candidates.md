# 統合案の記録（batch-01〜08 横断）

作成: 2026-10-13 / 最終更新: 2026-10-13（配信者クラスタの統合8本を実行した時点）。派生ファイルで、方針の確定は`remaining.md`の「方針(ユーザー記入)」欄で行う（運用は `README.md`）。

- 数字は `priority-list.md` と、アーカイブ済みの各バッチ表と同じ（3か月＝2026-09-26時点の累計、現行URLのみ。GA4＝W40〜W42の3週）。被リンクは `src/content/ja/` 内の記事から数えた本数
- 統合・排除は、`bouon-internal-link-ops` skillで被リンクを確認し、旧URLを301（`public/.htaccess`・`astro.config.mjs`）にし、1回の公開でまとめて処理する
- 配信者クラスタの記事は統合・排除を判断しない（`cluster-streamer.md`）。本ファイルの対象外
- 旧記事ごとの詳細（根拠・選択肢）は [consolidation-pending-batch01-05.md](./consolidation-pending-batch01-05.md)。そちらは判断待ち9本の根拠が詳しい

## 全体のまとめ

統合案が出ていた記事の結末（配信者クラスタを除く）。

| 結末 | 本数 | 内容 |
|---|---|---|
| 統合を実行した | 13 | 旧記事を削除し、301と被リンクの付け替えまで完了（検証済み）。うち8本は配信者クラスタ（§1b） |
| 統合せず残した | 8 | 統合先案があったが、検索意図の違い・順位・被リンクを見て、単独で残した |
| 途中で止まっている | 1 | チェロ記事（統合の設定済み・ファイル残置。T-27でユーザーが個別に対応） |
| 判断待ち | 9 | 統合先未定5本（B）、排除検討で統合先なし4本（C） |
| 合計 | 31 | |

## 1 統合を実行した（5本）

| バッチ#番号 | 旧記事 | 統合先 | 実行内容 | 検証（2026-10-13） |
|---|---|---|---|---|
| 01#1 | soundproof-rental/bourental-syaouseid-choiceindi | soundproof-room/bouon-dchiseinou-meyasu | 統合先に「防音賃貸（物件）のD値」の節を追加、旧記事削除、301切替 | 301は.htaccess・astro.configの両方に設定済み。本文中の旧URLへのリンクは0 |
| 02#11 | soundproof-rental/home-theater-karaoke-soundproof-design | money/soundproof-room-price-market | 要点を価格記事に吸収、旧記事削除、301切替 | 同上 |
| 02#12 | business/bouonrental-areasec-newbusiness | soundproof-rental/bouon-rental-market-guide | 本文は移さず301のみ、旧記事削除 | 同上 |
| 02#13 | business/soundproof-space-business-guide | business/japan-soundproof-market-size | 要点を市場規模記事に吸収、旧記事削除、301切替 | 同上 |
| 04#36 | money/musician-soundproof-loan-strategy | money/soundproof-room-loan-guide | 統合先は案の `piano-soundproof-mortgage-tax-guide` から変更（読者の悩みが合うため）、旧記事削除、301切替 | 同上 |

- 5本とも、サイトマップ（`dist/sitemap-0.xml`）に旧URLは出ていない
- 統合先の4記事（`bouon-dchiseinou-meyasu`・`soundproof-room-price-market`・`japan-soundproof-market-size`・`soundproof-room-loan-guide`）は、統合と同時に加筆済み。`bouon-rental-market-guide` は本文を移していない

### 1b 配信者クラスタの統合（2026-10-13、8本）

`cluster-streamer.md` §10 に詳細。廃止した8本のうち、7本は「クロール済み - インデックス未登録」、1本（ダンス）は登録の記録なし。

| 旧記事 | 統合先 |
|---|---|
| creator/soundproof-rental-vs-diy-streamer | creator/streamer-rental-selection-guide |
| creator/streamer-rental-preview-checklist | creator/streamer-rental-selection-guide |
| creator/streamer-soundproof-budget-roadmap | creator/streamer-soundproof-room-comprehensive-guide |
| creator/streamer-soundproof-timing | creator/vtuber-soundproof-environment-complete-guide |
| creator/streamer-soundproof-rental-share | money/soundproof-room-rental-cost |
| creator/kominka-renovation-streaming-room | creator/streamer-regional-studio-move |
| creator/dance-fitness-streamer-soundproof | diy/treadmill-apartment-soundproofing-layering |
| creator/utaite-vs-streamer-soundproof | creator/singer-instrumentalist-stream-soundproof |

## 2 統合せず残した（8本）

統合先案があったが、単独で残すことにした記事。いずれもslugは変えていない。

| バッチ#番号 | 記事 | 統合先案 | 判断（2026-10-13） | 根拠 |
|---|---|---|---|---|
| 01#8 | soundproof-room/million-yen-soundproof-room-professional | money/soundproof-room-price-market | 統合せずリライト | 旧URLを含む16か月で表示281・クリック12・順位10.2。実際にクリックがある |
| 02#14 | knowledge/mental-health-benefits-of-silence | soundproof-room/sleep-quality-soundproof-room | 現状維持。根拠のない数値を修正 | 検索意図が違い、順位4.86位・表示14 |
| 03#26 | soundproof-room/soundproof-room-pollen-protection | soundproof-room/proofroom-humidity-airconditionlist | 現状維持。統合先の温湿度記事に加筆 | 統合先に加湿・温湿度計・結露の節を足して、単独でも十分な内容になった |
| 06#55 | diy/treadmill-apartment-soundproofing-layering | （統合先未定） | 統合せずリライト | 旧URL `/posts/treadmill-soundproofing-vibration-control/` が16か月で表示97・8.9位。その301先をカテゴリ一覧から本記事に変更 |
| 06#56 | knowledge/d-value-truth-and-myths | soundproof-room/bouon-dchiseinou-meyasu | 統合せず単独でリライト | 役割が「早見表」と違う。被リンク8本、旧URL5本の301の転送先 |
| 06#59 | money/soundproof-room-buyback-guide | money/used-soundproof-room-buying-guide | 統合せず売却特化でリライト | 検索意図が逆（売る／買う）。被リンク10本 |
| 07#65 | knowledge/hsp-self-check-sound-sensitivity | knowledge/sound-sensitivity-misophonia-environment-guide | 統合せず単独でリライト | セルフチェックと環境調整で検索意図が違い、Bingで「音に敏感な人の特徴」が3.2位 |
| 05#41 | creator/horror-game-scream-soundproof-mic | creator/game-streamer-sound-types | 統合せず残した（2026-10-13） | 登録済み・20.8位。game-streamer-sound-types を音の種類の振り分け記事にし、絶叫の詳細記事として残す。指向性マイクと吸音パネルの置き方という固有の疑問に答える |

## 3 途中で止まっている（1本）：ユーザーが個別に対応（`task-list.md` T-27）

| バッチ#番号 | 記事 | 統合先 | 状態 |
|---|---|---|---|
| 01#7 | soundproof-rental/rental-caution-cello | soundproof-rental/saxophone-apartment-practice-guide | サックス記事にチェロの節を追加し、301（.htaccess・astro.config）も設定済み。**チェロ記事のファイルは残置**で、今のままデプロイすると、チェロのURLはサックス記事に301される |

- 根拠: Bingで「チェロ エンドピン 床に振動 減らす」（3.75位・クリック1）、「チェロ エンドピンからの振動 軽減」（3位）、「チェロ 防振マット」（4位・クリック1）、「チェロ 騒音」（4位・クリック1）が出ている（`../query-check/analysis_楽器別.md`）
- 選択肢
  1. 統合を取り消す（推奨）: サックス記事のチェロの節を外し、チェロ分の301を消し、被リンク2記事（`music-student-property-search-guide`・`soundproof-performance-drum`）を元に戻す。チェロ記事は楽器別クラスタの入口として「エンドピン・防振マット・床」の悩みでリライトする
  2. 統合を維持する: チェロ記事のファイルを削除する（被リンクの付け替えと301は設定済み）
- 影響範囲: `public/.htaccess` 516行目・`astro.config.mjs` 695行目、サックス記事（チェロの節）、被リンク2記事
- **結末（2026-10-19）**: 1を採用。統合を取り消し、チェロ記事をエンドピン・防振マット・床の悩みでリライトした（`../task-list-37.md`）

## 4 判断待ち（9本）

### B 統合先が未定（5本）

| バッチ#番号 | 記事 | 文字数 | 3か月 表示/クリック/順位 | 被リンク | 統合先の案 | 推奨 |
|---|---|---|---|---|---|---|
| 01#2 | knowledge/why-your-80-percent-rug-rule-fails | 2,138 | 0 / 0 / - | 2 | knowledge/vibration-reduction-science | 統合して301 |
| 01#6 | knowledge/diy-soundproof-truth | 2,131 | 7 / 0 / 20.14 | 2 | diy/diy-soundproof-room-failures-solutions | 統合して301 |
| 01#9 | knowledge/biophilic-acoustics | 1,465 | 6 / 0 / 2.5 | 2 | knowledge/absorption-vs-soundproofing-materials | 現状維持（苔の吸音の根拠を足すリライト） |
| 05#44 | knowledge/dry-floating-floor-natural-frequency | 2,081 | 28 / 0 / 35.75 | 2 | knowledge/vibration-isolation-technology-trend | 現状維持 |
| 05#47 | diy/parenting-generation-quiet-corner-diy | 2,910 | 7 / 1 / 16.43 | 3 | money/quiet-space-budget-decision-guide | 現状維持 |

### C 排除検討・統合先なし（4本）

| バッチ#番号 | 記事 | 文字数 | 被リンク | 推奨 |
|---|---|---|---|---|
| 02#15 | knowledge/proofroom-maker-2025productcheck | 5,426 | 2 | 排除（要点は `bouon-osusume-hikaku` へ。301） |
| 03#29 | business/soundproof-industry-news-2026-06 | 2,670 | 2 | 更新型の1本として残す |
| 03#21 | diy/outdoor-soundproof-curtain-market-guide | 4,235 | 2 | 排除（301先は `soundproof-material-spec-chart` か410） |
| 03#23 | knowledge/future-ssi-silent-speech-interface-revolution | 2,409 | 2 | 現状維持（表示0が続くなら排除） |

判断してほしいこと（優先順）:

1. 01#7 チェロ記事: 統合を取り消す（推奨）か、維持してファイルを削除するか
2. 01#2・01#6: 推奨どおり統合して301にしてよいか
3. 01#9・05#44・05#47: 推奨どおり現状維持（01#9は苔の根拠を足すリライト）でよいか
4. 02#15・03#29（ニュース系）: 02#15を排除し、03#29を更新型として残す（推奨）でよいか
5. 03#21・03#23: 排除か、現状維持か

## 5 統合先ごとの集計（結末つき）

| 統合先 | 旧記事（結末） |
|---|---|
| soundproof-room/bouon-dchiseinou-meyasu | 01#1（統合済み）、06#56（統合せず） |
| soundproof-rental/saxophone-apartment-practice-guide | 01#7（途中で止まっている） |
| money/soundproof-room-price-market | 02#11（統合済み）、01#8（統合せず） |
| soundproof-rental/bouon-rental-market-guide | 02#12（統合済み） |
| creator/streamer-rental-selection-guide | 02#18・02#20（統合済み） |
| creator/streamer-soundproof-room-comprehensive-guide | 予算ロードマップ（統合済み） |
| creator/vtuber-soundproof-environment-complete-guide | 購入タイミング（統合済み） |
| money/soundproof-room-rental-cost | レンタル・シェア比較（統合済み） |
| creator/streamer-regional-studio-move | 古民家（統合済み）、02#19は書き直し済み |
| diy/treadmill-apartment-soundproofing-layering | 03#27（統合済み） |
| creator/singer-instrumentalist-stream-soundproof | 歌い手・宅録（統合済み） |
| business/japan-soundproof-market-size | 02#13（統合済み） |
| money/soundproof-room-loan-guide | 04#36（統合済み） |
| soundproof-room/sleep-quality-soundproof-room | 02#14（統合せず） |
| soundproof-room/proofroom-humidity-airconditionlist | 03#26（統合せず） |
| money/used-soundproof-room-buying-guide | 06#59（統合せず） |
| knowledge/sound-sensitivity-misophonia-environment-guide | 07#65（統合せず） |
| knowledge/vibration-reduction-science | 01#2（判断待ち） |
| diy/diy-soundproof-room-failures-solutions | 01#6（判断待ち） |
