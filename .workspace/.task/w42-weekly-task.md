# W42 週報PPDCA（2026-10-04〜10-10）

作成: 2026-10-11 / 集計: `bouon-weekly-report` skill（`python .claude/skills/bouon-weekly-report/scripts/weekly_report.py report w42`）

> **データの前提（先に読む）**
> - GA4は2026-10-11に防音Labプロパティで再取得済み（`w42-ga4-bouon.csv`、10/4〜10/10）。**最初に出したファイルは別サイトのデータで破棄**。列構成はW41と違い、`市区町村`の代わりに`国`と`ページパスとスクリーン クラス`が入っている
> - GSCは7日。期間はユーザー確認済み（10/4〜10/10）。W41との前週比較ができる最初の週
> - **GA4の日数がW41と1日違う**: W41のヘッダーは `20260926-20261003`（8日間）、W42は `20261004-20261010`（7日間）。`weekly_report.py` は「比較不可（期間6日）」と判定するため、GA4の前週比は手計算で出した。**日数が違うので増減は目安**
> - サンプルは小さい（GSCクリックは十数件）。方向を言うのは表示20以上かつ±30%超のときに限る
> - GSCはGoogleのみ。流入の過半を占めるBingはGA4で見る
> - GA4の行合計（399）は総計（303）を超える（ページパス列で分割されるため）。参照元・国は比率で読む

---

## 1. Check（前週からの変化）

### サイト全体（GSC 7日同士）

| 指標 | W42 | W41 | 変化 |
|---|---|---|---|
| クリック | 11 | 8 | +3（+38%） |
| 表示回数 | 265 | 218 | +47（+22%） |
| CTR | 4.15% | 3.67% | +0.5pt |
| 掲載順位（表示加重） | 25.2 | 18.8 | 悪化（下記） |
| 1ページ目（順位10.5以内）の表示 | 136（51%） | 92（42%） | 構成比+9pt |

- **順位悪化の正体は1記事**: `ground-loop-noise-basics` が表示5→44、順位19→68に変わったため。これを除くと順位は18.8→16.7とむしろ改善（表示221）。サイト全体が劣化したわけではない
- ページ表43行、クリックが付いたのは7ページ。うち5クリックが `bass-trap-installation-guide` 1本

### クリックのあったページ

| ページ | クリック | 表示 | CTR | 順位 |
|---|---|---|---|---|
| `diy/bass-trap-installation-guide` | 5 | 23 | 21.7% | 9.3 |
| `knowledge/mansion-instrument-practice-time-rules` | 1 | 50 | 2.0% | 7.4 |
| `soundproof-room/onetouch-soundproof-wall-review` | 1 | 22 | 4.5% | 10.9 |
| `soundproof-room/daiwa-house-jiyuku-soundproof-review` | 1 | 11 | 9.1% | 50.6 |
| `money/soundproof-room-moving` | 1 | 6 | 16.7% | 12.3 |
| `diy/diy-soundproof-ventilation-heat-exhaust` | 1 | 2 | 50.0% | 11.5 |
| `creator/family-home-soundproof-reno-negotiation` | 1 | 1 | 100% | 9.0 |

クエリ側でクリックが見えるのは「マンション 楽器 何時 まで」「ベーストラップ」「ベース トラップ 自作」の3つだけ。残り8クリックは匿名クエリ。

### 主な動き

1. **`bass-trap-installation-guide`**: 表示34→23だがクリック0→5、順位11.7→9.3。W25〜W28（週2〜5クリック）の水準に戻った。順位が10位内に入るとCTRが一気に動く典型。新規クエリ「ベーストラップ」（4表示・順位11.8・1クリック）が出現
2. **`mansion-instrument-practice-time-rules`（W-12）**: 表示24→50（約2倍）、順位9.4→7.4、**初クリック1**。9/30のQ&A化から1週間。対象クエリ「マンション 楽器 何時 まで」は表示10・1クリック（CTR10%）、「何時まで」表記は表示9・0クリック
3. **`ground-loop-noise-basics`（W-08）**: 表示5→44と急増したが、順位は55〜84位。「ノイズ アース」「アース ノイズ 対策」「ノイズ アース 線」「ノイズ 対策 アース」「ノイズ グランド」など**アース系クエリが大量に新規出現**（各3〜5表示）し、いずれも順位70位台。需要はあるが評価が低い状態。クリック0
4. **市場規模系**: `business/japan-soundproof-market-size` 表示13・順位52。「日本の防音市場」（6表示・28.7位）はW41から継続。英語クエリ「japan sound masking system market」（4表示・85位）も出ているが追わない
5. **ハウスメーカー系**: `daiwa-house-jiyuku-soundproof-review` 表示11・順位50.6・1クリック。「大和ハウス 防音」「ダイワハウス 防音」が各4表示（55〜60位）。表記ゆれが2種類ある
6. **AIチャット型の長文クエリ**: 「小規模スタジオで、残響の減衰時間やモード特性を基にベーストラップの効果を測定するには、どんな測定ツールが最適ですか？」が3表示・7.3位。`bass-trap-installation-guide` への着地とみられる
7. **消えたページ**: `music-student-property-search-guide`（W41=表示6・47位→0）、`hsp-self-check-sound-sensitivity`、`gamer-acoustic-placement`、`piano-room-guide` 等13ページ。いずれも1〜6表示の揺れの範囲

### 施策対象の確認（基準値の記録）

| 対象 | W42 | 備考 |
|---|---|---|
| S-06 統合4記事（`owner-renovation-roi-simulation-tool`・`soundproof-room-rental-cost`・`rental-unit-soundproof-room`・`soundproof-room-size`） | **4本とも表示0** | W41は`owner-renovation-roi-simulation-tool`が表示1だったが今週は消えた |
| S-07 統合先2記事（`regional-city-soundproof-rental-guide`・`soundproof-subsidy-check-guide`） | **2本とも表示0** | 基準値は0。`small-business-soundproof-subsidy-guide`が表示1・順位1.0で出ている |
| S-10 統合先`remote-work-family-harmony-soundproof` | 表示0 | 基準値は0 |
| W-06(A) `construction-types-cost-comparison` | 表示5・順位77.4・クリック0 | 「防音工事 種類」が5表示・77.4位。順位が70位台のためCTR改善は測れない |
| W-11 `wifi-connection-guide` | 表示9・順位2.8・クリック0 | 順位は大きく改善（W41=7.8）。表示が少なくクリック有無は判断できない |
| W-18 `music-student-property-search-guide` | 表示0 | W41=表示6・47.3位。2週連続で細く、圏外化が進んでいる |
| W-20 「防音ラボ」 | 表示2・順位7.5・クリック0。`/ja/`は表示3・クリック0 | W41=表示4・クリック1。母数が小さく変化とは言えない |
| W-24 `soundproof-subsidy-check-guide` | 表示0 | 統合・301は10/6デプロイ。インデックス登録待ち |

新規出現パターン: 表示1〜5の「防音室 電波」（1位）、「9時からは？」（1位）、「ふにゃふにゃシステム」（`electronic-drum-vibration-fuwafuwa-system`）など。ロングテール。

### GA4（防音Lab、10/4〜10/10）

| 指標 | W41 | W42 | 変化 |
|---|---|---|---|
| セッション | 207 | 303 | +46%（1日あたりでは+67%） |
| アクティブユーザー | 185 | 260 | +41% |
| エンゲージメント率 | 56.5% | 54.5% | -2.0pt |
| 平均エンゲージメント時間 | 54.5秒 | 44.6秒 | -18% |
| キーイベント | 0 | 0 | 変化なし |

参照元（行合計ベース。件数ではなく比率で見る）:

| 参照元 | W41 | W42 | 見方 |
|---|---|---|---|
| bing | 130（51%） | 122（31%） | **件数は横ばい**。構成比の低下は他が増えたため |
| (direct) | 74（29%） | 159（40%） | +85。うち約80行がbot疑い（下記） |
| teams | 約7 | 34 | 賃貸市場レポート系に着地。エンゲージ率88%・平均約130秒 |
| google | 15 | 20 | 微増 |
| AI系（openai・chatgpt.com・copilot.com） | 14 | 8 | perplexityは0。W41から減少 |
| `hub_entry`・`hub_cta`・`article_footer` | 0 | 29 | **計測の不具合の疑い（下記）** |
| l.threads.com | 0 | 2 | **Threadsからの初流入**（`mansion-instrument-practice-time-rules`。エンゲージ0・滞在0秒） |

**セッション+46%は、実際の流入が増えたわけではない。** Bing（実質的な検索流入）は横ばいで、増えた分はbot疑いのdirect、Teams共有、計測の不具合による参照元の付け替えが占める。

1. **bot疑いのdirect**: direct のうち、中国・シンガポール・米国発でエンゲージメント率20%以下の行が80行（行合計の約20%）。エンゲージメント率3.8%・平均滞在1.0秒。`/ja`宛て（米国27・シンガポール7・中国6）と、中国から一覧ページ（`/ja/soundproof-rental`・`/ja/money`・`/ja/business`等）への巡回が目立つ。W41に出ていた一覧ページ宛てdirect（T-04）が増幅した形
2. **参照元が`hub_entry`・`hub_cta`・`article_footer`になっているセッションが29行**。原因はサイトのコード（`src/components/starlight/Head.astro`）。`data-track-source="..."` を拾ってGA4イベントのパラメータ名`source`で送っており、これがGA4の流入元（セッションの参照元）の予約パラメータと衝突しているとみられる。ハブカードや記事フッターをクリックしたセッションが、元の流入元から付け替わっている。**参照元の集計を歪めるため、パラメータ名の変更が必要**（タスクA）
3. **Teams経由が34へ増加**（W41は約8）。`report-japan-soundproof-rental-market-needs` 16、`bouon-rental-market-guide` 9、`music-student-property-search-guide` 3、`proofroom-aircondition-select` 3。すべて日本発でエンゲージメント率約9割、平均滞在は2〜7分の長いセッションが複数ある。社内共有で読まれている可能性が高い（W-17）
4. **LPが`(not set)`のセッションが18**（W41は11）。エンゲージメント率0%。bing 8・teams 4。計測の抜けでT-03の粒度問題と同系統

ランディング（bot疑い除外後、セッション順）:

| LP | セッション | うちBing | エンゲージ率 | 平均滞在 | GSC表示 | GSC順位 |
|---|---|---|---|---|---|---|
| `/ja` | 89 | 0 | 87% | 11秒 | 3 | 5.3 |
| `soundproof-material-spec-chart` | 34 | 29 | 97% | 72秒 | 5 | 5.0 |
| `report-japan-soundproof-rental-market-needs` | 27 | 0 | 96% | 50秒 | - | - |
| `bouon-rental-market-guide` | 15 | 0 | 100% | 138秒 | - | - |
| `ground-loop-noise-basics` | 11 | 10 | 64% | 63秒 | 44 | 68.2 |
| `streamer-rental-selection-guide` | 9 | 9 | 67% | 16秒 | - | - |
| `sound-sensitivity-misophonia-environment-guide` | 8 | 6 | 75% | 25秒 | 3 | 31.7 |
| `bass-trap-installation-guide` | 7 | 1 | 100% | 48秒 | 23 | 9.3 |
| `vibration-isolation-technology-trend` | 6 | 6 | 100% | 21秒 | - | - |

- **`soundproof-material-spec-chart`（W-21）**: 34セッション（bot疑い除外後。除外前は35）、Bing 29、エンゲージ率97%、平均72秒。W41（32件・88%・約65秒）を**維持**。GSCは表示5・クリック0で、Bing依存の流入
- **`ground-loop-noise-basics`**: GA4は11セッション（W41=16）でほぼBing。GSCの表示44と、GA4の実セッションの差は大きい。アース系クエリの需要はBing側で実在する
- **Bingだけに着地していてGSCに出ない記事**: `streamer-rental-selection-guide` 9、`vibration-isolation-technology-trend` 6、`noise-complaint-legal-precedent-manual` 4、`karaoke-box-soundproof-performance-guide` 4、`electronic-drum-vibration-fuwafuwa-system` 4。Googleでの評価が低く、Bingでは読まれている記事
- `/ja`宛ては129行→bot疑い除外で89。うち direct 45、`search.google.com` 12（Search Console由来の可能性。自分の確認作業のノイズかもしれない）。W41の16件からの急増は、ほぼbot疑いとハブ計測の付け替えで説明できる

### 判断（この週の結論）

- **全体は小幅に改善**（クリック+3、1ページ目表示の構成比+9pt）。ただし1ページ目の成果は`bass-trap`と`mansion-instrument`の2本に偏っている
- **W-12のQ&A化は初動が出た**（表示2倍・順位+2・初クリック）。まだ判定はしない。W43の7日データまで見る
- **ground-loop は「表示は出るが順位が低い」段階**。記事タイトルは「アース線とノイズの関係」で語彙は一致している（本文に「アース」15回）。それでも70位台なので、小手先の語句追加では動きにくい。SERPの目視比較が先（タスクB）
- **GA4は「流入が増えた」ではなく「計測が濁った」週**。Bingは横ばい、directはbot疑いで水増し、参照元のイベントパラメータ衝突で29行が付け替わっている。数値の読み方を直す対策（タスクA・H）が先
- 統合・新規系（S-06・S-07・S-10）は**まだ表示ゼロ**。統合から3〜4週、10/6の301デプロイから4日なので正常範囲。W43で出始めるかを見る

---

## 2. 改善方針と作業キュー（2026-10-11、ユーザー指示）

**方針**: ①流入の主力はBing、Googleは戻り始めている段階。順位8〜20位のクエリ・ページを主体に、記事内容を改善する。②古く、流入が少なすぎる記事を改善（リライト・統合・整理）する。③コンテンツ系は**`lastmod`が古いものから**優先する。

- 判定データ: 順位は直近の7日表（W41・W42）と3か月累計（W40）、流入はGA4（W40〜W42の3週）。3か月累計は**候補の絞り込み専用**で、週次の前後比較には使わない
- `lastmod`の分布（197記事）: 2026-09が111本（9/5前後の本音と建前リライトなど）、2026-06・07が62本、2026-04以前が11本。**古い順に着手すれば、9月に手を入れていない記事から順に当たる**
- 下の「3 改善タスク案」の優先度は、この方針に合わせて次のように読み替える

| 案 | 読み替え |
|---|---|
| D `onetouch-soundproof-wall-review` | 最優先に格上げ（下のレーン1、`lastmod`7/10・3か月表示282・順位10.9） |
| G `japan-soundproof-market-size` | レーン1に入る（7/8・3か月順位16.0。ただしW42は52位、「日本の防音市場」は28.7位） |
| B `ground-loop-noise-basics` | 順位68位でレーン対象外。9/16に手を入れて日が浅く、レーン1の後に回す |
| C `bass-trap-installation-guide` | 順位9.3で対象内だが、9/5更新で5クリックと好調。タイトル・slugは触らず、測定FAQの追記のみ |
| E・F・H・I・J | 計測・基準値の作業なので変更なし |

### レーン1: 順位8〜20位の改善（`lastmod`が古い順）

3か月累計の順位が8〜20位で、表示が15以上のページ（42ページ）から、手を入れていない記事を優先して選んだ。W42の7日値は参考。

| 順 | lastmod | slug | 3か月表示/クリック/順位 | W42(表示/順位) | GA4(3週) | 方向 |
|---|---|---|---|---|---|---|
| 1 | 2026-04-08 | soundproof-room/sound-reduction-simulation | 26 / 2 / 18.1 | 1 / 4.0 | 0 | Tier C確認済み。クエリを確認して見出し・直接回答を調整 |
| 2 | 2026-06-12 | creator/streamer-pet-noise-balance | 26 / 0 / 16.5 | 0 / - | 1 | レーン2の配信者クラスタと同時に判断 |
| 3 | 2026-06-24 | knowledge/soundproof-app-review-2026 | 62 / 0 / 14.5 | 3 / 7.0 | 1 | W42で7位。タイトル・冒頭の答えを強化してクリックに変える |
| 4 | 2026-06-24 | creator/young-streamer-smartphone-monetization-roadmap | 47 / 0 / 9.5 | 1 / 6.0 | 0 | 順位は10位前後でクリック0。クエリ確認の上、サイト軸（防音）に合うかも判断 |
| 5 | 2026-06-24 | creator/streaming-audio-first-low-budget | 31 / 0 / 18.3 | 0 / - | 2 | レーン2の配信者クラスタと同時に判断 |
| 6 | 2026-07-05 | creator/streamer-soundproof-room-comprehensive-guide | 17 / 1 / 12.8 | 0 / - | 22 | GA4で22セッション。配信者クラスタの統合先候補 |
| 7 | 2026-07-05 | money/quiet-space-budget-decision-guide | 25 / 0 / 14.7 | 0 / - | 0 | 検索意図を確認して調整 |
| 8 | 2026-07-08 | business/japan-soundproof-market-size | 241 / 3 / 16.0 | 13 / 52.4 | 1 | 案G（冒頭の直接回答） |
| 9 | 2026-07-10 | soundproof-room/onetouch-soundproof-wall-review | 282 / 12 / 13.4 | 22 / 10.9 | 1 | 案D（「買う前」「評判」節） |
| 10 | 2026-07-10 | creator/gaming-floor-impact-noise-fix | 238 / 4 / 9.0 | 17 / 6.8 | 3 | 6.8位でクリック0。タイトル（長い）とスニペットを見直し |
| 11 | 2026-07-10 | creator/streamer-rental-selection-guide | 17 / 0 / 18.4 | 0 / - | 13 | GA4はBing 9。Bingでは読まれている |
| 12 | 2026-07-10 | knowledge/sound-sensitivity-misophonia-environment-guide | 25 / 0 / 19.0 | 3 / 31.7 | 12 | GA4はBing 6。Bingでは読まれている |
| 13 | 2026-07-14 | business/datacenter-soundproof-technology-facts | 44 / 2 / 10.8 | 0 / - | 1 | 順位は10位前後。事実確認を更新して調整 |
| 14 | 2026-07-20 | soundproof-rental/bouon-rental-market-guide | 21 / 1 / 10.4 | 0 / - | 26 | Teams経由が多い。案Jと同時に点検 |

- 手を入れない: `soundproof-material-spec-chart`（W-21で効果測定中）、`mansion-instrument-practice-time-rules`（W-12）、`wifi-connection-guide`（W-11）、`soundproof-subsidy-check-guide`（W-24）
- 9/5〜9/6に本音と建前リライト済みで順位8〜20位にあるページ（`d-value-vs-rw-value-confusion`・`piano-soundproof-mortgage-tax-guide`・`farmland-prefab-streaming-room-legal`・`custom-home-soundproof-price-guide`・`tokyo-bouon-whitekyuon-okudake-review`・`coincidence-effect-soundproofing`など）は、**W-06(A)の効果測定を壊さないため当面は保留**。W43〜W44の7日表で伸びなければ次の手を考える
- 進め方: 1記事ごとに、①SERPと、GSC・Bing Webmaster（案I）のクエリを確認②見出し・冒頭の直接回答・タイトルを調整（slug不変）③GSCでインデックス登録申請（W-25に記録）④W-NNを起票して2〜3週後に表示・順位・クリックを見る

### レーン2: 古くて流入の少ない記事の整理（`lastmod`が古い順）

`lastmod`が2026-08より前（73本）のうち、3か月の表示が20未満かつGA4のセッションが3週で5以下の**48本**（一覧は`re-create/`のバッチ）。9/5前後に手を入れた記事は含まない。

- **傾向**: 配信者向け14本、DIY防音8本、楽器・賃貸6本、ニュース・市場5本、D値4本、防音室選び・価格4本、睡眠・心理3本、軸外の可能性4本（タイトルからの仮説）。同じテーマの記事が分散して、どれも流入が出ない状態（ペルソナ分散による低迷の診断、2026-09-25、と整合）
- **処理の選択肢**（各記事で本文を読んで決める。判断はユーザー）
  1. **全面リライト**: 検索需要があり、サイトの軸（防音・遮音）に合う（例: `wooden-apartment-soundproof-guide`、`sleep-quality-soundproof-room`はT-15の睡眠入口記事と連携）
  2. **統合**: 同じテーマの強い記事（流入・クリックがあるもの）へ寄せ、旧URLは301（`public/.htaccess`・`astro.config.mjs`）。クラスタ仮説の例: D値4本→`d-value-vs-rw-value-confusion`（5クリック）、配信者14本→`streamer-soundproof-room-comprehensive-guide`と`streamer-rental-selection-guide`の2〜3本、ニュース系→1本の更新型
  3. **削除**: 需要がなく軸外（例: `future-ssi-silent-speech-interface-revolution`、`biophilic-acoustics`）。旧URLは301または410（過去の統合・410化の手順は`archive/task-list-09.md`、`archive/consolidation-candidates-20260916.md`を参照）
- **週あたりの目安（案）**: レーン1を週3本、レーン2を週5本の判断。第1バッチは`re-create/batch-01.md`（`lastmod`が2025-10〜2026-04の10本）
- 注意: 統合・削除はT-08（旧URL解消）と同じ「Googleのクロール負荷」の観点があるため、**1回の公開でまとめて処理**し、サイトマップと内部リンクの切れを確認する。`bouon-internal-link-ops` skillで被リンクを確認する
- **要判断（ユーザー）**: `re-create/batch-01.md`の10本の処理方針（リライト／統合／削除）。`re-create/`の「クラスタ仮説」はタイトルだけからの推定で、本文は未確認

## 3. 改善タスク案（W42の観測ベース）

> 登録先は**ユーザー承認後**に決める。区分が「今すぐ」のものは `task-list.md`（T-NN、末尾の最大番号+1、索引も同時更新）、「データ待ち」のものは `weekly-task.md`（W-NN）へ起票する。現時点の最大番号: T-23、W-25。

### 優先度 高

**A. GA4イベントのパラメータ名`source`を変更し、流入元の付け替えを止める（今すぐ・Claude、コード変更あり・承認後に実施）**
- 根拠: W42のGA4で、セッションの参照元が`hub_entry`・`hub_cta`・`article_footer`になった行が29（行合計の約7%）。`Head.astro`の委譲リスナーが`data-track-source`を`source`というパラメータ名で送っており、GA4の流入元と衝突しているとみられる
- 手順: ①`src/components/starlight/Head.astro`のクリック計測で、キーが`source`のとき`link_source`に変換する（1行。`data-track-source`の属性側は変えない）②`pnpm build`で確認③デプロイ後、GA4のリアルタイムでハブカード・記事フッターをクリックし、参照元が付け替わらないことを確認④GA4の「カスタム定義」に`link_source`を登録するかはユーザーが判断（登録しなくてもイベント自体は送られる）
- 影響範囲: `hub_click`・`next_step_*`・`related_*`・`search_modal`などの既存イベントの`source`が`link_source`に変わる。過去データとの連続性は切れるが、記録が少ないため許容範囲
- 判定: 次回のGA4で`hub_entry`等の参照元行が0になること。W-19（direct・Bing優位の実態）の数値がきれいになる

**B. `ground-loop-noise-basics` を「アース ノイズ 対策」系クエリ向けに強化する（今すぐ・Claude、W-08関連）**
- 根拠: 表示5→44、アース系クエリ約10種が55〜84位に新規出現。クリック0。需要はあるが順位が低い
- 手順: ①「ノイズ アース」「アース ノイズ 対策」「グランドループ ノイズ 対策」のSERPを目視し、上位の構成・見出し・答えの置き方を記事と比較する（`bouon-research` skillの直接回答型の判断ロジックを適用）②冒頭に「アースを繋ぐ／外すとノイズはどう変わるか」の直接回答ブロックを置く③H2「アースとノイズはどう関係しているのか」以降に、検索語（アース線・アースライン・接地）の表記をそろえる④`knowledge`内の関連記事・`creator/gaming...`等から内部リンクを追加（`bouon-internal-link-ops`で確認）
- 制約: slug不変。リライト後はGSCでインデックス登録を申請（W-25の記録に追記）
- 判定: W44〜W45の7日表で、アース系クエリの順位が50位台より上に入るか。70位台のままなら記事単独の改善では限界とみて、統合・追加記事を検討する

**C. `bass-trap-installation-guide` に測定手順のFAQを足し、勝ち筋を固める（今すぐ・Claude）**
- 根拠: W42でクリック5（サイト全体の約45%）。順位9.3で1ページ目の下位。AIチャット型の長文クエリ（測定ツール）が7.3位で出ており、測定に関する具体的な問いに答える節が不足している可能性がある（本文中の「REW／測定マイク／測定ツール」言及は1箇所のみ）
- 手順: ①スマホアプリ・USBマイク＋REWなど測定手段の比較表を追加②「ベーストラップ」単語クエリ（4表示・11.8位）向けに冒頭の定義を短く明示③最終更新日が2026-09-05のため、一次情報（メーカー・測定ソフトの公式）を確認して`lastmod`を更新
- 注意: 勝っているページなのでタイトルとslugは変えない。W-21で追加した`soundproof-material-spec-chart`からの被リンクの効果も、W43のGA4と合わせて見る

### 優先度 中

**D. `onetouch-soundproof-wall-review` の「買う前」「評判」節を強化する（今すぐ・Claude）**
- 根拠: 「ワンタッチ防音壁 評判」13表示・10.6位・0クリック（W41は15表示・11位で1クリック）。W39の「ワンタッチ 防音 壁 買う前」（22表示・17位）の宿題が未対応。`lastmod`が2026-07-10のまま
- 手順: 評判の一次情報（公式・販売ページの記載、口コミの傾向）を`bouon-research`で再確認し、「買う前に確認すること」節を追加。順位を10位以内に入れ、クリックを安定させるのが目的

**E. 統合・新規系の「基準値0」の記録と、W43での出現確認（データ待ち・Claude）**
- 対象: S-06の4記事、S-07の2記事、S-10の1記事。W42基準値=すべて表示0（上表）
- やること: 各個別ファイル（`schedule/2026-10-17-w07-cluster-merge-check.md`・`schedule/2026-10-17-w43-merge-articles-check.md`・`schedule/2026-10-24-telework-merge-check.md`）の「結果」に、W42基準値=表示0を1行ずつ追記する（S-01の完了条件）
- 判定: W43で1本でも表示が出れば継続観察。0のままならW44まで延長（S-06の既定どおり）。インデックス登録の有無はGSCのURL検査で確認する（ユーザー）

**F. W-25 インデックス登録済み件数を今週分記録する（今すぐ・ユーザー）**
- 10/10エクスポート分の登録済み件数（GSC UI「ページのインデックス登録」）を`weekly-task.md` W-25に1行追記する。基準は102件（有効89）。数字だけでよい

**G. `japan-soundproof-market-size` の冒頭に「日本の防音市場」の直接回答を置く（今すぐ・Claude、優先度は低め）**
- 根拠: 「日本の防音市場」6表示・28.7位。表示13・順位52で、2週連続で市場規模系クエリが出ている。市場規模の数値の一次情報を確認し、冒頭1〜2文＋要約表で答える。英語クエリ（global market系）は追わない
- 注意: 数値は`bouon-research`に従いWebSearchで裏取りし、出典を本文側に書く

**H. direct流入のbot疑いをフィルタで切り分ける（今すぐ・ユーザー+Claude、T-04に追記する）**
- 根拠: W42でdirectの約半数（80行、行合計の約20%）が、中国・シンガポール・米国発でエンゲージメント率3.8%・平均滞在1.0秒。中国発は一覧ページ（`/ja/soundproof-rental`・`/ja/money`・`/ja/business`等）を巡回している。W41までの一覧ページ宛てdirect（T-04）と同じ型
- 手順: GA4の探索レポートに「国」を残したまま、directかつ国が中国・シンガポール・米国のセッションを除外するセグメントを作る（あるいはデータフィルタで除外）。週報では「bot疑い除外後」の数値を併記する
- 判定: 除外後のセッション・エンゲージメント率で、W-15（改善傾向の持続）を読み直す

**I. Bing Webmaster Toolsで、Bingの検索クエリと順位を確認する（今すぐ・ユーザー）**
- 根拠: 実質的な検索流入はBing（122行）で、GSCに出ない記事がBingでは読まれている（`streamer-rental-selection-guide` 9、`vibration-isolation-technology-trend` 6、`noise-complaint-legal-precedent-manual` 4など）。GSCだけでは全体の半分しか見えていない
- 手順: Bing Webmaster Toolsの「検索パフォーマンス」を7日でエクスポートし、`access-data/2026/w42/`に`bing-クエリ.csv`・`bing-ページ.csv`として置く（未登録なら、サイトの所有確認から）
- 判定: Bingでの上位記事・クエリを、W-06（Tier B選別）とリライト優先度の判断材料に加える

**J. Teams経由の読者に向けて、賃貸市場レポート系ページの出口を点検する（今すぐ・Claude、W-17関連）**
- 根拠: Teams経由34セッション（W41=約8）、エンゲージメント率約9割、平均滞在2〜7分の長いセッションが複数。着地は`report-japan-soundproof-rental-market-needs`・`bouon-rental-market-guide`が中心で、いずれもGSCに表示が出ない（共有で読まれている記事）
- 手順: 2記事の末尾の導線（次に読む記事、運営者プロフィール`/ja/about/`、関連レポート）を確認し、法人・調査目的の読者が次に見るページがあるかを点検する。収益導線（CTA）は付けない
- 判定: W43以降のGA4で、Teams経由セッションのページ遷移（2ページ目以降）が出るか

### 優先度 低（観察のみ・新規起票しない）

- **`wifi-connection-guide`（W-11）**: 順位は改善（9.25→7.77→2.8）。母数が9表示でクリック有無は判断できない。タイトル変更の効果は「順位は上がった」と結論づけ、CTRはW44まで保留
- **`daiwa-house-jiyuku-soundproof-review`**: 「大和ハウス 防音」「ダイワハウス 防音」はハウスメーカー全般の需要で、体験記では上位を取りにくい。T-10（住宅系記事のCTA）と合わせて、ハウスメーカー別の入口記事が必要かをS-05（10/18）の効果測定で判断する
- **`gaming-floor-impact-noise-fix`**: 表示17・6.8位・0クリック（W41は1クリック）。変動の範囲。W43でも0クリックならタイトルの見直しを検討する
- **`music-student-property-search-guide`（W-18）**: 表示6→0。W43でも0〜数表示なら、W-18の判定を「需要ミスマッチ寄り」で終了する（`project_music_student_hub_strategy`の方針どおり単独記事を追加しない）

---

## 4. 既存W-NN・S-NNへの反映案

| ID | W42の結果（追記内容） |
|---|---|
| W-06 | (A)基準値: `construction-types-cost-comparison` 表示5・77.4位・0クリック。68記事分の一括基準値は未取得（W42の表に出ているのは数記事のみ）。順位が70位台のため、本音リライト単体の効果は測りにくい |
| W-08 | 表示5→44、順位19.2→68.2（アース系クエリが新規出現し70位台）。クリック0。施策の効果というより表示母数の拡大。タスクBに移行 |
| W-11 | 表示9・順位2.8・クリック0。順位は継続して改善、CTRは母数不足 |
| W-12 | 表示24→50、順位9.4→7.4、**初クリック1**（「マンション 楽器 何時 まで」10表示・CTR10%）。W43まで継続観察 |
| W-18 | 表示0（W41=6・47.3位）。W43でも0なら終了 |
| W-20 | 「防音ラボ」表示2・7.5位・クリック0。`/ja/`表示3・クリック0。W41の1クリックは母数の揺れ |
| W-24 | `soundproof-subsidy-check-guide` 表示0（基準値）。W43で出現確認（S-07） |
| W-15 | セッション207→303（+46%、1日あたり+67%）だがBingは横ばい（130→122）。増加分はbot疑いdirect・Teams・計測の付け替え。エンゲージ率56.5→54.5%、平均滞在54.5→44.6秒。**「改善傾向の持続」とは言えない**。タスクH後に読み直す |
| W-16 | AI系14→8（openai 4・chatgpt.com 3・copilot.com 1、perplexity 0）。減少 |
| W-17 | Teams 約8→34。賃貸市場レポート系に着地、エンゲージ約9割。増加傾向（タスクJ） |
| W-19 | Bing 130→122（横ばい）、direct 74→159（bot疑い約80）。Bingは依然として実質の検索流入の中心 |
| W-21 | `soundproof-material-spec-chart` 35セッション・Bing 29・エンゲージ97%・平均72秒。W41の水準を維持。`related_click`は今回のファイルにイベント列がなく未確認 |
| T-07 | `l.threads.com`から初流入2セッション（`mansion-instrument-practice-time-rules`、エンゲージ0・滞在0秒） |
| S-06 / S-07 / S-10 | 基準値=すべて表示0（タスクE） |

---

## 5. 次回データ（W43、2026-10-17前後）で見ること

1. GA4のW43をW42と並べる（セッション・エンゲージメント率・Bing件数・AI系流入。**bot疑い除外後**と`hub_entry`等の参照元が消えたかも見る）。日数をそろえる（W43は10/11〜10/17の7日間）
2. S-06・S-07の基準値（表示0）との比較。1本でも表示が出るか
3. `mansion-instrument-practice-time-rules`: 表示50・順位7.4・1クリックが続くか（W-12）
4. `ground-loop-noise-basics`: 表示44が持続するか、タスクBの施策後に順位が動くか
5. `bass-trap-installation-guide`: 5クリックが再現するか
6. GSCはカスタム7日（GA4と同じ日付）、期間を`gsc-periods.json`・`access-data/CLAUDE.md`・`_inbox/README.md`に必ず記録する

---

## 6. 付録: 作業キュー

レーン1・レーン2の記事一覧は、数が多いため`re-create/`フォルダに移した（`lastmod`が古い順に10本ずつ、全73記事・8バッチ）。入口は`re-create/README.md`。本ファイルには一覧を重複して持たない。

優先度（P1〜P4）の案は`re-create/priority-list.md`（2026-10-11）。P3を統合検討、P4を排除検討とした。配信者クラスタは統合せず、段階別（これから／不満／安定）に再設計する方針（`re-create/cluster-streamer.md`、2026-10-11）。

## 7. クローズ時点の状態（2026-10-11）

このファイルは、W42のレポートと、その後の「再構築・配信者クラスタ」の議論の記録。クローズ時点の状態は次のとおり。

### 登録済み（`task-list.md`）

- **T-24** 旧URL3本の転送先を既存記事へ変更（**次に着手**）
- **T-25** 打鍵・打撃音の入口づくり（キーボード・ピアノ鍵盤・打楽器＋ハブ）
- **T-26** 配信者向け記事の方針を決める（`re-create/batch-NN.md`の方針欄）

### 未反映（次回以降）

| 項目 | 状態 |
|---|---|
| §4 既存W-NN・S-NNへの反映案（W42の結果追記） | **未反映**。`weekly-task.md`の個別W-NNに、W42の結果を追記していない |
| §3 改善タスク案A〜J | **未登録**。A（`Head.astro`の`source`→`link_source`）は承認待ち。B〜Jも未起票 |
| 順位8〜20位のレーン1（14本）の改善 | `re-create/`のP1（12本）に反映。個別のリライトは未着手 |
| `soundproof-room/wifi-connection-guide`（「防音室 wifi」順位12） | 順位8〜20位の改善候補に加えるかが未決（lastmod 2026-09-17で`re-create`の対象外） |
| Bing Webmaster Toolsのページ別の表 | 未取得（どの記事に着地したかが分からない） |
| サイト全体の旧URL125本（カテゴリ一覧・トップへ301）の点検 | 未決・未起票 |

### 派生ファイル

- `re-create/`: 再構築キューと優先度（P1〜P4）、配信者クラスタ、入口設計（`entrance-design.md`）
- `query-check/`: サジェスト・GSC・Bingの分析（`analysis_*.md`、`classified_*.csv`）。生データはコミットしない
