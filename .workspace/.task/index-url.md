# 手動インデックス登録（GSC URL検査）の申請リスト

作成: 2026-10-13 / 対象: 2026-10-12〜13に内容を変えた記事（`lastmod`が10/12・10/13）と、転送先を変えた受け皿、noindexを解除した記事。マスターではなく作業用（`weekly-task.md` W-25の申請記録の元）

## 申請の前に

- **デプロイしてから申請する。** 2026-10-13時点で、最新のコミット（`540a16b tougou`）はあるが、公開サイトへの反映は未確認。URL検査は公開中のページを見るため、反映前は古い内容を申請することになる
- **サイトマップを再送信する**（noindexを解除した4本がサイトマップに戻ったため。W-31）
- 申請には**1日の上限**がある（目安は1日10件前後）。上限に当たったら翌日に回す。下の表は **A → B → C → D の順**に申請する。1日目はAの11本
- 申請したら、`schedule/2026-11-02-indexed-count-check.md` の「申請記録」に、日付とURLを1行ずつ書く（W-25）
- 状態は、未登録＝2026-10-12のGSC「クロール済み - インデックス未登録」の一覧、登録済み(10/6)＝10/6の登録済み一覧、不明＝どちらにも載っていない（URL検査で確認する）。データは古いため、検査画面の表示を優先する
- 「16か月」は、現行URLだけの表示・クリック（旧URLの実績は含まない。旧URLの数字は「変更内容」に書いた）
- 2026/10/13時点で「インデックス登録済ページ」は103件。

## 申請しないもの

- **301にした旧URL・削除した記事**（`/posts/…`、統合で削除した記事）: 申請しても意味がない。統合先を申請する
- `local/sendai-soundproof-rental-guide`: noindex維持（T-28）
- `soundproof-rental/rental-caution-cello` と `soundproof-rental/saxophone-apartment-practice-guide`: チェロ記事の統合を取り消すか決める（T-27）まで保留。いまデプロイすると、チェロのURLはサックス記事に301される
- `/ja/creator/game-streamer-sound-types/` ほか、リンクの付け替えだけの記事: 申請不要（クローラーが自然に拾う）

## 進み具合（2026-10-13・割り当て上限のため、ここで中断）

| 区分 | 本数 | 内容 |
|---|---|---|
| 完了済み（申請済み） | 14 | A 10本、B 2本、C 2本 |
| 確認済み・申請不要 | 8 | Bのうち、検査の結果が「登録済み」だった記事 |
| 未完了 | 32 | A 1本（#8の再申請）、C 15本、D 16本 |
| 合計 | 54 | |

※ 「状態」と「メモ」の欄は、あなたがURL検査の結果を書き込んだ文言をそのまま残している（A・Bの行）。

## 未完了（次に申請する）

### 次回の10件の案

#8 の再申請 → C の未登録・不明を番号順に9本（#24・#25・#26・#29・#30・#31・#33・#34・#35）。

### 再申請：A #8

| # | URL | 状態 | 16か月 表示/クリック | 変更内容・メモ |
|---|---|---|---|---|
| 8 | https://bouon-lab.com/ja/soundproof-room/bouon-humidifier-comparison/ | noindexタグで除外されている | 0 / 0 | noindex解除＋汎用の加湿器記事に書き直し。旧URLが最大のクリック源（425表示・53クリック）。W-31 前回クロール2026/09/01 要修正 |

公開中のページには noindex が無い（HTML・ヘッダーとも確認済み）。GSCの表示は、前回クロール（2026/09/01）時点の状態の可能性が高い。「公開URLをテスト」で確認してから再申請する。

### C リライトした記事（残り15本。未登録・不明を先、登録済みを後）

| # | URL | 状態 | 16か月 表示/クリック | 変更内容・メモ |
|---|---|---|---|---|
| 24 | https://bouon-lab.com/ja/knowledge/d-value-truth-and-myths/ | 未登録 | 0 / 0 | リライト＋旧URL5本の転送先。W-29 |
| 25 | https://bouon-lab.com/ja/soundproof-room/bouon-dchiseinou-meyasu/ | 未登録 | 1 / 0 | 統合先（物件のD値の節を追加） |
| 26 | https://bouon-lab.com/ja/soundproof-room/hsp-soundproof-room-guide/ | 不明 | 15 / 1 | リライト。旧URL含め44表示・クリック8。W-30 |
| 29 | https://bouon-lab.com/ja/soundproof-rental/pet-noise-soundproof-measures/ | 未登録 | 22 / 0 | リライト。W-30 |
| 30 | https://bouon-lab.com/ja/diy/diy-wall-soundproofing-room-guide/ | 未登録 | 4 / 1 | リライト。W-29 |
| 31 | https://bouon-lab.com/ja/diy/renter-parent-house-soundproofing/ | 不明 | 20 / 0 | リライト。W-29 |
| 33 | https://bouon-lab.com/ja/money/soundproof-room-buyback-guide/ | 未登録 | 1 / 0 | 売却特化にリライト。W-29 |
| 34 | https://bouon-lab.com/ja/soundproof-room/proofroom-humidity-airconditionlist/ | 未登録 | 24 / 0 | 加湿・温湿度計・結露を加筆。W-27 |
| 35 | https://bouon-lab.com/ja/soundproof-room/million-yen-soundproof-room-professional/ | 未登録 | 2 / 0 | リライト（統合せず）。旧URL含め281表示・12クリック |
| 36 | https://bouon-lab.com/ja/money/soundproof-room-price-market/ | 未登録 | 19 / 0 | 統合先（家庭用シアター等を吸収） |
| 37 | https://bouon-lab.com/ja/money/soundproof-room-loan-guide/ | 未登録 | 16 / 2 | 統合先（音楽家のローン戦略を吸収） |
| 27 | https://bouon-lab.com/ja/knowledge/hsp-self-check-sound-sensitivity/ | 登録済み(10/6) | 27 / 1 | リライト。W-30 |
| 28 | https://bouon-lab.com/ja/knowledge/sound-sensitivity-misophonia-environment-guide/ | 登録済み(10/6) | 28 / 0 | リライト。W-29 |
| 32 | https://bouon-lab.com/ja/money/soundproof-contractor-selection-guide/ | 登録済み(10/6) | 73 / 0 | リライト。73表示・25位。W-29 |
| 38 | https://bouon-lab.com/ja/business/japan-soundproof-market-size/ | 登録済み(10/6) | 269 / 3 | 統合先（事業ガイドを吸収） |

### D 更新の度合いが小さい記事（16本。上限に余裕があるときだけ）

| # | URL | 状態 | 16か月 表示/クリック | 変更内容・メモ |
|---|---|---|---|---|
| 39 | https://bouon-lab.com/ja/knowledge/absorption-vs-soundproofing-materials/ | 不明 | 36 / 0 | 更新 |
| 40 | https://bouon-lab.com/ja/knowledge/mental-health-benefits-of-silence/ | 不明 | 14 / 0 | 数値の修正 |
| 41 | https://bouon-lab.com/ja/knowledge/soundproof-app-review-2026/ | 登録済み(10/6) | 66 / 0 | 更新 |
| 42 | https://bouon-lab.com/ja/knowledge/vibration-isolation-technology-trend/ | 未登録 | 0 / 0 | 固有振動数の要点を追記 |
| 43 | https://bouon-lab.com/ja/local/tokyo-soundproof-rental-summary/ | 不明 | 21 / 0 | 更新 |
| 44 | https://bouon-lab.com/ja/money/quiet-space-budget-decision-guide/ | 登録済み(10/6) | 25 / 0 | 0〜3万円の節を追記 |
| 45 | https://bouon-lab.com/ja/money/quiet-space-relocation-decision-guide/ | 登録済み(10/6) | 20 / 0 | 更新 |
| 46 | https://bouon-lab.com/ja/money/soundproof-room-rental-lease/ | 不明 | 9 / 0 | 戻りリンクを追記 |
| 47 | https://bouon-lab.com/ja/soundproof-rental/musision-comprehensive-guide/ | 未登録 | 33 / 2 | 更新 |
| 48 | https://bouon-lab.com/ja/soundproof-rental/bouon-rental-market-guide/ | 未登録 | 21 / 1 | 更新 |
| 49 | https://bouon-lab.com/ja/soundproof-rental/report-japan-soundproof-rental-market-needs/ | 未登録 | 3 / 0 | 更新 |
| 50 | https://bouon-lab.com/ja/diy/soundproof-sheet-heavy-diy-tips/ | 未登録 | 5 / 0 | 更新 |
| 51 | https://bouon-lab.com/ja/diy/wooden-apartment-soundproof-guide/ | 未登録 | 19 / 0 | 更新 |
| 52 | https://bouon-lab.com/ja/soundproof-room/proofroom-soudmore-manual/ | 不明 | 9 / 0 | 更新 |
| 53 | https://bouon-lab.com/ja/soundproof-room/sleep-quality-soundproof-room/ | 未登録 | 7 / 0 | 更新 |
| 54 | https://bouon-lab.com/ja/soundproof-room/sound-reduction-simulation/ | 未登録 | 28 / 2 | 更新 |

### 任意：B の登録済み8本の再クロール

検査画面の「前回のクロール」が古いままの記事だけ、上限に余裕があるときに申請する（下の「確認済み・申請不要」）。

## 完了済み（申請済み）

申請日はすべて 2026-10-13。記録は `schedule/2026-11-02-indexed-count-check.md`。

### A（10本）

| # | URL | 状態 | 16か月 表示/クリック | 変更内容・メモ |
|---|---|---|---|---|
| 1 | https://bouon-lab.com/ja/money/soundproof-room-buy-rent-sell-guide/ | 不明 | 0 / 0 | 新規ページ（買う・借りる・売るの総合）。W-26 |
| 2 | https://bouon-lab.com/ja/creator/one-room-streaming-soundproof/ | 未登録 | 4 / 0 | 統合の土台（声漏れ・夜間配信・家族）。ハブカード所属。旧URL含め238表示。W-33 前回のクロール2026/09/01 |
| 3 | https://bouon-lab.com/ja/creator/streaming-pc-fan-noise-mic/ | 未登録 | 68 / 1 | 統合の土台（PC・反響・外音の切り分け）。W-33 前回のクロール2026/10/11 |
| 4 | https://bouon-lab.com/ja/creator/asmr-external-noise-elimination/ | 未登録 | 10 / 0 | 統合の土台（ASMRの外音＋ブース）。旧URL2本の受け皿候補。W-34前回のクロール2026/07/29 |
| 5 | https://bouon-lab.com/ja/creator/parenting-streamer-soundproof/ | 未登録 | 12 / 2 | 統合の土台（子ども・親・ルームシェア）。W-34 前回のクロール2026/09/17 |
| 6 | https://bouon-lab.com/ja/creator/collab-streaming-soundproof-space/ | 登録されている | 2 / 0 | 統合の土台（コラボ・ポッドキャスト）。W-34 前回のクロール2026/09/26 |
| 7 | https://bouon-lab.com/ja/creator/singer-instrumentalist-stream-soundproof/ | 不明 | 0 / 0 | 統合の土台（歌い手・宅録。utaite統合）。W-32 クロール該当なし |
| 9 | https://bouon-lab.com/ja/soundproof-rental/rental-proofroom-contractcheck/ | noindex解除済 | 3 / 0 | noindex解除＋リライト。旧URL含め1,592表示・34クリック。W-31 前回クロール2026/09/01 インデックス登録申請済 |
| 10 | https://bouon-lab.com/ja/diy/diy-vocal-soundproof-mask/ | 未登録 | 0 / 0 | noindex解除＋dB値を相対評価に修正。旧URL含め160表示・22クリック。W-31（lastmodは07-21のまま） 前回のクロール2026/07/07 クロール済インデックス未登録 |
| 11 | https://bouon-lab.com/ja/knowledge/soundproof-culture-japan-vs-america/ | 不明 | 0 / 0 | noindex解除＋リライト。旧URL含め450表示・3.9位。W-31 前回のクロール2026/05/09 |

### B（2本・未登録だったためリクエスト）

| # | URL | 状態 | 16か月 表示/クリック | 変更内容・メモ |
|---|---|---|---|---|
| 18 | https://bouon-lab.com/ja/diy/treadmill-apartment-soundproofing-layering/ | 未登録 | 0 / 0 | 統合先（ダンス配信を吸収）＋リライト。旧URL含め97表示・8.9位。W-29・W-32。**2026-10-13 リクエスト済**（未登録だった。前回のクロール2026/07/01） |
| 19 | https://bouon-lab.com/ja/money/soundproof-room-rental-cost/ | 未登録 | 9 / 0 | 統合先（時間貸し・シェアの形態を追記）。W-32。**2026-10-13 リクエスト済**（未登録だった。前回のクロール2026/09/01） |

### C（2本）

| # | URL | 状態 | 16か月 表示/クリック | 変更内容・メモ |
|---|---|---|---|---|
| 22 | https://bouon-lab.com/ja/soundproof-room/onetouch-soundproof-wall-review/ | 登録済み(10/6) | 333 / 14 | リライト。333表示・14クリック・13.2位。W-30 |
| 23 | https://bouon-lab.com/ja/business/datacenter-soundproof-technology-facts/ | 未登録 | 70 / 3 | リライト。70表示・10.8位。W-30 | 未登録だったのでリクエスト済 | 前回のクロール2026/08/06 |

- ほかに、URL未確認の1本（ユーザー申請。Aのリストは11本だが12本申請したとの報告）。URLが分かれば申請記録に補う

## 確認済み・申請不要（Bの8本）

検査の結果が「登録済み」だったため、申請していない。

| # | URL | 状態 | 16か月 表示/クリック | 変更内容・メモ |
|---|---|---|---|---|
| 12 | https://bouon-lab.com/ja/creator/streamer-soundproof-room-comprehensive-guide/ | 登録済み(10/6) | 17 / 1 | 統合先（予算・購入判断を吸収）。旧URL `/posts/streamer-lowbudget-simula/` ほかの受け皿。W-32・W-33 |
| 13 | https://bouon-lab.com/ja/creator/streamer-rental-selection-guide/ | 登録済み(10/6) | 17 / 0 | 統合先（内見・回線・電源・デメリットを吸収）。旧URL `/posts/bourenatal-naikencheck/` ほか。W-32・W-34 |
| 14 | https://bouon-lab.com/ja/creator/farmland-prefab-streaming-room-legal/ | 登録済み(10/6) | 95 / 2 | 統合先（古民家・地方移住を追記）。W-34 |
| 15 | https://bouon-lab.com/ja/creator/female-streamer-privacy-soundproof/ | 登録済み(10/6) | 48 / 0 | 統合先（親フラ対策を吸収）。旧URL経由155表示。W-34 |
| 16 | https://bouon-lab.com/ja/creator/streamer-noise-complaint-response/ | 登録済み(10/6) | 22 / 2 | 旧URL `/posts/streamer-trouble-rule/`（241表示・7クリック）の転送先に変更。W-31（記事は未変更） |
| 17 | https://bouon-lab.com/ja/creator/streaming-audio-first-low-budget/ | 登録済み(10/6) | 31 / 0 | 旧URL `/posts/voice-only-streaming-optimization/` の転送先に変更。W-31（記事は未変更） |
| 20 | https://bouon-lab.com/ja/money/used-soundproof-room-buying-guide/ | 登録済み(10/6) | 67 / 1 | 予算10万円軸にリライト。W-26 |
| 21 | https://bouon-lab.com/ja/creator/gaming-floor-impact-noise-fix/ | 登録済み(10/6) | 278 / 5 | 更新（lastmod 10/13）。278表示・8.7位で、5クリック |

合計 54 本（完了済み 14・確認済み 8・未完了 32）
