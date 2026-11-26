# S-12 11月の月次アクセス解析（m11）と10月施策の判定（2026-12-02〜12-03）

- 担当: ユーザー（エクスポート・GSC UIの確認）+ Claude（解析・記録）
- 状態: 未着手
- 関連: S-11（m10の途中経過と各項目の見る指標）、S-04、S-09、`access-data/export-spec.md`
- 経緯: `.workspace/archive/legacy/weekly-task-archive-20261017.md`

## 目的

10月中旬の施策（10/13の統合・リライト・noindex解除、10/16の書き直し）は、m10では月の後半しか反映されない。もとは「11/16前後」「W44〜W46」とされていた判定を、丸1か月分そろうm11でまとめて行う。

## 手順

1. ユーザー: `export-spec.md` §3のG1〜A3をm11（2026-11-01〜11-30）で取得し、`access-data/2026/m11/`に置く
2. Claude: `/monthly-ppdca`でm10との比較を作る。S-11の「結果」を読み、下の判定を書く
3. 結論が出た項目は、この個別ファイルに結論を書いて終了する。続ける項目は次の月の解析（S-NN）を起票して送る

## 判定する項目（見る指標はS-11の同じIDを参照）

- **W-08 アース線ノイズ**: アース系クエリが50位台より上に入ったか。70位台のままなら、統合か追加記事を検討する
- **W-27 加湿・結露**: 冬の入口で、加湿・湿度・結露のクエリが出たか、表示が増えたか
- **W-28 `creator/`の未登録記事**: 作り直した記事と未着手の記事で、登録された本数に差が出たか。差がなければ、疑問の絞り方を見直す（T-26）
- **W-29・W-30 リライト14本**: 表示が出たか、30位台が20位台に入ったか。動きがない記事は需要ミスマッチを疑う
- **W-31 noindex解除4本**: 解除から4週間以上たっても掲載されない記事は、サイト側の評価（W-25）の問題として扱う
- **W-32〜W-34 配信者クラスタの統合**: 統合先の表示が、統合前（旧URL分を含む合計）を下回っていないか。下回る記事は、吸収した節の見出しと内容を見直す
- **W-25 インデックス登録済み数**: 最終判定（もとは11/16前後。基準102件・有効89件。詳細は`.workspace/projects/monthly-analysis/2026-11-02-indexed-count-check.md`）
- **S-04 404の最終確認**: 見送り（2026-11-25 に S-03 で判定済み。721件、records T-32）。元の条件: S-03で判断できなかった場合のみ
- **防音スペースのレンタル（T-20、2026-10-18作成）**: 対象は`/ja/soundproof-rental/soundproof-space-rental-guide/`（新規、基準値なし）。2026-10-18にデプロイ。見る: インデックス登録の有無、「防音スペース レンタル」「防音 レンタルスペース」「個人練習 スタジオ」などの表示・順位、`soundproof-room-rental-cost`からの回遊。判定: 登録後に表示が出ていれば継続。表示が0なら需要ミスマッチを疑い、メインKWを見直す（`project_indexing_vs_demand_mismatch`メモリ）。サービス名を含むクエリが出ていれば、個別記事の独立を検討する（T-20の方針）
- **個室ブースを自宅に置く記事（T-22、2026-10-18作成）**: 対象は`/ja/soundproof-room/home-private-booth-guide/`（新規、基準値なし。2026-10-18にデプロイ）。見る: インデックス登録の有無、「個室ブース 自宅」「個室ブース 安い」「個室ブース エアコン」「テレワークブース 自宅」の表示・順位、旧T-20の記事との相互の回遊。判定: サジェストに派生が多い語なので、登録後に表示が出なければタイトルの語順と競合の種類を見直す
- **窓リノベ2026の補助金2記事（T-16、2026-10-18更新）**: 対象は`/ja/money/soundproof-subsidy-news-2025/`（タイトルを「最大200万円」→「最大100万円」に変更）と`/ja/money/soundproof-window-subsidy-2025-guide/`（【2025年最新】→【2026年最新】）。基準値はm10の両ページの表示・CTR・平均順位（m10は10/18以降の2週間しか反映されないため基準にとどめる）。見る: 「窓リノベ 2026」「先進的窓リノベ 上限」「内窓 補助金 2026」などのクエリの表示、タイトル変更後のCTR。判定: 表示が保たれ、CTRが下がっていなければ維持。表示が落ちた場合は、タイトルから「200万円」を外した影響かをクエリ別に確認する。なお制度は2026-12-31で締め切られるため、m12以降は2027年度の制度の発表を確認して再更新する
- **10万円台の防音室CTA（T-23、2026-10-18配置）**: 対象は`/ja/money/used-soundproof-room-buying-guide/`（アビテックスのCTAを外し、`danbocchi-standard`・`otodasu-2-light`を追加）、`/ja/soundproof-room/assembly-type-comparison/`（同じくアビテックスを外し、2つを追加）、`/ja/soundproof-room/bouon-osusume-hikaku/`・`/ja/soundproof-room/shimamura-music-soundproof-room-guide/`（`otodasu-2-light`を追加）。基準値なし（配置前に安価帯のCTAはなかった）。見る: GA4の`affiliate_click`のslug別クリック（`danbocchi-standard`・`otodasu-2-light`・`yamaha-avitex`・`kawai-nasal`）とページ別の内訳、楽天・Amazonの管理画面のクリックと成果。判定: 安価帯のクリックが出ていれば、ほかの組み立て式の記事（`budget-soundproof-booth-comparison`・`otodasu-voice-chat-test`など）にも広げる。クリックが0なら、置き場所（節の位置）と文言を見直す。中古記事と組み立て式比較の記事は価格表も2026年10月時点に直したので、表示・CTRもあわせて見る
- **キーボードの打鍵音対策（T-25 枝A、2026-10-18作成、2026-10-19デプロイ）**: 対象は`/ja/diy/keyboard-typing-noise-vibration/`（新規、基準値なし）と、同時に転送先を`/ja/creator/`から変えた旧URL2本（`/posts/keyboard-sound-streaming-soundproof-guide/`：16か月で646表示・16クリック・10.3位、`/posts/streamer-keyboard-silence/`：23表示）。デプロイ: 2026-10-19（curlで新記事200・旧URLの301を確認）。見る: インデックス登録の有無、「キーボード 打鍵音 対策」（16か月で12表示・21位）「キーボードの音をなくす方法」（8表示・1位）「キーボード 打鍵音 下の階」「静音キーボード」の表示・順位、旧URL2本の表示が新記事へ移るか。GA4の`affiliate_click`のslug `wool-felt-desk-mat`（フェルトマット）のクリックと、Amazonの管理画面のクリック・成果。あわせて、打鍵音の節を短くして新記事へ送った`creator/game-streamer-sound-types`の表示が落ちていないか。判定: 公開から4週間以上たつm11で判定。登録後に表示が出ていれば、枝B（電子ピアノ）も同じ型で進める。表示が0なら、メインKWとタイトルの語順を見直す
- **電子ピアノの打鍵音対策（T-25 枝B、2026-10-18作成、2026-10-19デプロイ）**: 対象は`/ja/diy/electronic-piano-key-noise-vibration/`（新規、基準値なし）と、同時に転送先を`/ja/knowledge/`から変えた旧URL`/posts/electronic-piano-vibration-solution/`（16か月で25表示・28.7位）。デプロイ: 2026-10-19（curlで新記事200・旧URLの301を確認）。見る: インデックス登録の有無、「電子ピアノ 打鍵音 対策」「電子ピアノ 防音マット 必要か」「電子ピアノ ペダル 音」「電子ピアノ 苦情」の表示・順位。判定: 登録後に表示が出ていれば、枝C（打楽器）も同じ型で進める。表示が0なら、メインKWとタイトルの語順を見直す
- **電子ドラムの振動対策のリライト（T-25 枝C、2026-10-18、2026-10-19デプロイ）**: 対象は`/ja/diy/electronic-drum-vibration-fuwafuwa-system/`（既存。旧URL含む16か月で53表示・18.9位、旧URL`/posts/electronic-drum-vibration/`は10/18に転送先をこの記事へ変更済み）。基準値はm10のこのページの表示・順位（m10はリライト後の2週間弱しか反映されない）。見る: 「電子ドラム 振動 対策」「ふにゃふにゃシステム」「電子ドラム 防音マット」「電子ドラム 防音 100均」「キックペダル 防音」「カホン 防音」の表示・順位。判定: 表示と順位が保たれ、キック・マット系の語が新しく出ていれば継続。ふにゃふにゃシステムの順位が落ちた場合は、タイトルの語順を戻すか検討する
- **固体伝搬音のハブ記事（T-25 ハブ、2026-10-19作成、2026-10-19デプロイ）**: 対象は`/ja/knowledge/structure-borne-noise-tapping-striking/`（新規、基準値なし）。枝A〜Cと台パン（`creator/gaming-floor-impact-noise-fix`）から本文リンクで受け、4本へ送る。デプロイ: 2026-10-19（curlで新記事200・旧URLの301を確認）。見る: インデックス登録の有無、「下の階 響く なぜ」「ヘッドホン 下の階 響く」「打撃音 下の階 響く」「固体伝搬音 対策」の表示・順位（タイトルは10/19に「固体伝搬音の対策」から「叩く音・押す音が下の階に響くのはなぜ？」へ変更）。GA4でハブから枝4本への遷移（`related_click`など）。判定: ハブ自体の検索流入は小さくてよい。枝への遷移が出ていれば役割は果たしている。表示が0でも枝の表示が伸びていれば維持し、`knowledge/vibration-reduction-science`と表示の語が食い合っていないかだけ確認する
- **チェロ記事の統合取り消しとリライト（T-27、2026-10-19）**: 対象は`/ja/soundproof-rental/rental-caution-cello/`（slug不変で全面リライト）。10/13〜デプロイまでの間はサックス記事へ301されていたため、m10のこのページの数値は基準にならない。基準値は統合前の実績（3か月で表示9・順位8.78、16か月で表示19・クリック4。Bingで「チェロ エンドピン 床に振動 減らす」3.75位など）。見る: デプロイ後のインデックス登録の有無、「チェロ エンドピン 振動」「チェロ エンドピン 床に振動 減らす」「チェロ 防振マット」「チェロ 騒音」「チェロ マンション 防音」「エンドピンストッパー」の表示・順位（Google・Bingとも）、サックス記事の「サックス アパート」系の表示が節の削除で落ちていないか。判定: 登録後にエンドピン・防振マット系の語で表示が出ていれば、楽器別クラスタ（`query-check/analysis_楽器別.md` §6）の入口として継続し、ピアノの防音マット記事（P1）へ同じ型を広げる。表示が0なら、タイトルの語順（「チェロ 防振マット」を先頭にするか）を見直す
- **語り手リライト21本（T-43フェーズ3、2026-10-28、T-44）**: 対象は`persona-rewrite/plan.md`付録の上から20本と見本1本の計21本（`knowledge/ground-loop-noise-basics`・`soundproof-rental/music-student-property-search-guide`・`soundproof-room/onetouch-soundproof-wall-review`・`diy/bass-trap-installation-guide`・`soundproof-room/wifi-connection-guide`・`knowledge/mansion-instrument-practice-time-rules`・`creator/gaming-floor-impact-noise-fix`・`soundproof-room/daiwa-house-jiyuku-soundproof-review`・`business/japan-soundproof-market-size`・`knowledge/coincidence-effect-soundproofing`・`money/soundproof-room-moving`・`money/soundproof-contractor-selection-guide`・`soundproof-room/construction-types-cost-comparison`・`money/used-soundproof-room-buying-guide`・`soundproof-room/piano-room-guide`・`knowledge/soundproof-app-review-2026`・`knowledge/soundproof-material-spec-chart`・`money/piano-soundproof-mortgage-tax-guide`・`knowledge/d-value-vs-rw-value-confusion`・`creator/family-home-soundproof-reno-negotiation`・`creator/streamer-pet-noise-balance`。`ground-loop-noise-basics`は見本として先行）。変更は各記事に2〜3文（調べた動機・「私なら〜。〜からです」・断定のやわらげ）を足しただけで、タイトル・数値・構成は変えていない。基準値はm10の21本の表示・CTR・平均順位（日平均）。見る: 21本合計とページ別の表示・CTR・順位、GA4の平均エンゲージメント時間。判定: 21本合計の表示と順位がm10と同程度なら、フェーズ4（残り154本）を同じ型で進める。順位が2位以上落ちた記事は、足した文が導入の結論を遠ざけていないかを確認する
- **語り手リライト バッチ1の21本（T-43フェーズ4、2026-10-31、T-45）**: 対象は `persona-rewrite/plan.md`「フェーズ4のバッチ」のバッチ1（一覧は `.workspace/codex/orders/2026-10-31-T-43-b1.md` の対象表）。Codex が実行し CC が検収（報告書 `.workspace/codex/reports/2026-10-31-T-43-b1.md`）。変更は各記事に3〜4文（調べて引っかかった疑問・根拠の出どころ・「私なら〜。〜からです」）を足し、専門家口調の断定をやわらげただけで、タイトル・数値・構成は変えていない。10/31 の変更なので、m11 が変更後の初めての丸1か月。基準値は m10 の21本の表示・CTR・平均順位（日平均）。見る: 21本合計とページ別の表示・CTR・順位、GA4 の平均エンゲージメント時間。判定: T-44 と同じ（21本合計の表示と順位が m10 と同程度ならバッチ2以降も同じ型で進める。順位が2位以上落ちた記事は、足した文が導入の結論を遠ざけていないかを確認する）。1週間の API 比較（11/10、継続）は `access-data/api/2026-11-10-persona-b1/README.md`。`sound-reduction-simulation` は H2「結論」直後の足した1文を、順位が戻らなければ結論の後ろへ動かす
- **流入上位6本の収益導線（T-30、2026-10-31、T-46）**: 対象は `knowledge/soundproof-material-spec-chart`・`money/soundproof-room-price-market`・`soundproof-room/bouon-dchiseinou-meyasu`・`creator/streamer-soundproof-room-comprehensive-guide`・`soundproof-rental/report-japan-soundproof-rental-market-needs`・`soundproof-rental/bouon-rental-market-guide`。各記事に商品名を出す段落と CtaBox（スペック早見表だけ AffiliateCard）を足しただけで、本文の情報・見出しは変えていない。基準値は m10 の6本の日本からのセッションと `affiliate_click`（記事別。`hq/.workspace/seo/tools/analytics-fetch/` の `fetch.mjs ga4 --event affiliate_click --dims pagePath` で取れる）。見る: 6本の `affiliate_click` の件数とクリック率（クリック÷セッション）、どの CtaBox が押されたか、6本のセッションと平均エンゲージメント時間が落ちていないか。判定: `affiliate_click` が6本合計で1件以上出れば導線は機能していると見て、同じ型を流入の次の層へ広げる。0件なら置く位置（記事の後半すぎないか）と商品の価格帯を見直す。`soundproof-room-price-market` は同じ日に T-45（語り手リライト）も入っているので、セッション・順位の変化はどちらの影響か分けられない点に注意
- **継続観察**（W-15〜W-20）: S-11と同じ項目を見る

## m10 から送った項目（2026-11-14、T-31 を閉じるときに移した）

変更の内容・見る語は m10 の手順ファイル（`2026-11-02-m10-monthly-analysis.md`）の同じ見出しの節にある。m10 の値は途中経過（変更から2週間弱）。

- **電子ドラム・ピアノの旧URL3本の転送先変更（T-24、10/18）**: m10 は `electronic-drum-vibration-fuwafuwa-system` 表示8・19位、`piano-room-guide` 表示7・**77.6位**（9月 32表示・46.9位から下がった）。判定: 転送先2本の表示・順位が9月の水準に戻ったか。`piano-room-guide` が70位台のままなら、旧URLの語（「ピアノ 防音室」系）と記事の約束がずれていないかを見直す
- **賃貸ゲーム音の自作ブースの旧URL2本の転送先変更（10/19）**: m10 は `closet-diy-soundproof-room` 表示13・19.8位（9月 3表示）。判定: 「自作 防音室 賃貸」「ゲーム 音漏れ」系の語が出たか
- **住宅系の既存3記事の補強とタイトル変更（T-10 R-2〜R-4、10/19）**: m10 は price-guide 表示2・9位、mortgage 表示15・13.5位、daiwa 表示65・49.2位・2クリック。判定は m10 の節のとおり（「ピアノ 住宅ローン」が10位以内に入りクリックが付くか、上の語の順位が落ちていないか）
- **re-create 判断待ち9本の処理（10/19）**: m10 で表示が出たのは `biophilic-acoustics`（2表示・2.5位）だけ。判定: 統合先3本の表示が落ちていないか、リライト4本に狙いの語の表示が付いたか
- **配信者クラスタの残作業（10/19）**: m10 は3本とも表示ほぼなし。判定: 「冷蔵庫 振動」「暗騒音 目安」「NC値」系の表示、トップのカード `sound-leak` の `hub_click`
- **継続観察 W-20 指名「防音ラボ」**: m10 は表示19・5.7位・クリック0（9月 2クリック）

## T-58 のタイトル変更（2026-11-06作成、2026-11-07デプロイ、2026-11-08 URL検査で申請）

同じ順位帯のCTRを、変更前後の月次で比べる。

| 記事 | 旧タイトル | 新タイトル |
|---|---|---|
| bouon-osusume-hikaku | 【2026最新】防音室おすすめ比較｜失敗しない選び方とROI（投資対効果）を分析 | 防音室おすすめ比較｜配信・楽器と予算で選ぶメーカー・製品の目安 |
| kawai-nasal-soundproof-room-guide | カワイ防音室ナサール（Nasal）完全ガイド｜特徴・価格・ヤマハとの違い | カワイ防音室ナサールの価格と選び方｜構造・Dr値・ヤマハとの比較 |
| shimamura-music-soundproof-room-guide | 島村楽器で防音室を選ぶメリット｜試奏体験と限定コラボモデル「S-OTODASU」 | 島村楽器の防音室はどこで試せる？展示店舗・試奏とS-OTODASU |
| streamer-tax-strategy | 防音室は経費にできる？配信者だけじゃない対象職業と判断基準 | 防音室は経費にできる？減価償却・耐用年数と配信者の家事按分 |
| budget-soundproof-booth-comparison | 格安防音室は夏に地獄化する？だんぼっち・OTODASU排熱リスクと中古購入の注意点 | 防音室の格安モデルは夏に暑い？だんぼっち・OTODASUの排熱と中古の注意点 |

## T-50 前半のタイトル変更と T-53 の基準値（2026-11-08。同日デプロイ）

基準値は 2026年10月の GSC（`api/monthly/2026/m10/gsc-page-query.csv`、`site:` の語を除くページ合計）。判定は T-53（CTR が上がり、順位が落ちていない）。

| 記事 | 旧タイトル | 新タイトル | 10月（表示・クリック・平均順位） |
|---|---|---|---|
| mansion-instrument-practice-time-rules | マンションで楽器は何時まで？規約例は9〜21時｜条例と受忍限度で判断 | マンションで楽器は何時まで？管理規約と演奏時間の確かめ方 | 98・1・6.0 |
| onetouch-soundproof-wall-review | ワンタッチ防音壁は効果ある？買う前に知りたい限界と評判、賃貸での使い方 | ワンタッチ防音壁の評判は？口コミと自分の部屋で効く条件 | 85・5・11.3 |
| wifi-connection-guide | 防音室でWi-Fiが繋がらない原因と対策｜穴を開けずにできる方法も紹介 | 防音室のwifiが繋がらない？穴を開けずに試す対策の順番 | 4・0・5.5 |
| bass-trap-installation-guide | ベーストラップ自作・設置ガイド｜低音こもりを解消する配置・測定の全手順 | ベーストラップ自作・設置ガイド｜材料と寸法、配置・測定の手順 | 179・8・9.2 |

mansion は一般的な終了時刻の目安を消した（裏取りできないため）。CTR が上がらなければ、時刻を明記した公的な例を足すかを判断する（監査記録 `admin-review/2026-11-08-T-50.md` §3）。

## T-50 後半のタイトル変更と T-53 の基準値（2026-11-08。同日デプロイ）

基準値の取り方は前半と同じ。

| 記事 | 旧タイトル | 新タイトル | 10月（表示・クリック・平均順位） |
|---|---|---|---|
| diy-vocal-soundproof-mask | 防音マスク自作は息苦しい？段ボールヘッドボックスの酸欠リスクを検証 | 防音マスク自作で声は抑えられる？作り方と密閉を避ける判断 | 63・4・9.4 |
| musision-comprehensive-guide | ミュージション（MUSISION）ガイド｜家賃相場・評判と防音性能を整理 | ミュージションの家賃は？6.9万円〜の掲載例と入居審査の流れ | 43・2・11.4 |

vocal-mask は装着型の密閉マスクの作り方を外し、開放型シールドの作り方にした（安全の根拠がないため）。「作り方」の語で CTR が落ちていないかも見る。

## T-60・T-62・T-64 の基準値（2026-11-12。T-67）

- **T-60 新規5本（11/10 作成、11/12 までにデプロイ）**: `diy/sound-insulation-sheet-effect`・`diy/room-tuning-basics`・`knowledge/floor-soundproof-rating`・`diy/soundproof-curtain-effect`・`soundproof-rental/noise-complaint-letter-template`。基準値なし。見る: 登録の有無、各台帳（`.workspace/projects/daily-post-2026-11/triage/`）のメインKWの表示・順位
- **T-62 新規5本（11/11 デプロイ、11/12 修正）**: `diy/sound-absorbing-material-recommend`（吸音材 おすすめ）・`diy/sound-insulation-sheet-wall-install`（遮音シート 壁 貼り方）・`soundproof-rental/noise-moving-cost-claim`（騒音 引っ越し費用 請求）・`diy/floor-soundproof-underlay`（床 防音 下地）・`diy/soundproof-curtain-recommend`（防音カーテン おすすめ）。基準値なし。見る: 同上
- **T-64 リライト2本（11/12 デプロイ、タイトル変更）**: `knowledge/absorption-vs-soundproofing-materials`（吸音材 防音材 違い。変更前は「騒音対策 科学的な遮音・吸音の使い分け」で41位のみ）、`soundproof-rental/noise-complaint-landlord-negotiation-guide`（騒音 苦情 どこに言えばいい）。基準値は m10 の2本の表示・CTR・順位（日平均）。旧タイトルは `.workspace/codex/reports/2026-11-12-T-64.md`
- 判定: 新規は m11 では途中経過。登録後に表示が0なら需要ミスマッチを疑う（`project_indexing_vs_demand_mismatch`）。T-64 はメインKWで表示が出て、全体の表示が m10 を下回っていなければ継続。下回ればタイトルの語順を見直す

## T-65・T-69・T-56 の基準値（2026-11-14 作成・デプロイ、同日 URL 検査で申請）

- **T-65 新規4本**: `diy/door-soundproof`（ドア 防音）・`soundproof-rental/earplugs-for-sleep`（耳栓 睡眠）・`soundproof-rental/upstairs-footsteps-noise`（上の階 足音）・`knowledge/outdoor-ac-unit-noise`（室外機 騒音）。m11 は途中経過、登録と表示の有無を見る
- **T-69 タイトル変更4本**（m08〜m10 の流入はほぼ0。基準値は m10 の表示・順位）

| 記事 | 旧タイトル | 新タイトル | m10（表示・クリック・平均順位） |
|---|---|---|---|
| `diy/diy-internal-window-road-noise-reduction` | 内窓の防音効果を実測｜賃貸DIYポリカ窓から本格インプラスまで比較【2025-2026年版】 | 窓の防音DIYは内窓と隙間から｜ポリカ内窓・隙間テープ・換気口の対策と効果 | 表示なし |
| `knowledge/soundproof-app-review-2026` | 防音性能を測るスマホアプリ比較2026｜無料アプリでどこまで分かる？ | 騒音計アプリはどこまで正確？無料のiPhone・Androidアプリで防音の効果を測る方法 | 10・0・8.8位 |
| `knowledge/sound-sensitivity-misophonia-environment-guide` | （変更なし。H2「聴覚過敏の子供のイヤーマフ」を追加） | — | 13・0・28.5位 |
| `soundproof-rental/bedroom-noise-type-solution-guide` | 上の階の足音・隣の話し声で眠れない｜音の種類で変わる寝室の騒音対策の選び方 | 寝室の騒音で眠れない｜足音・話し声・外の音、音の種類で変わる対策の選び方 | 1・0・74位 |

- **T-56 統合3本（301）**: `noise-canceling-headphones-sleep`→`earplugs-for-sleep`、`soundproof-window-subsidy-2025-guide`→`soundproof-subsidy-news-2025`、`danbocchi-floor-protection`→`apartment-weight-limit-500kg`（統合先のタイトルを「マンションに防音室を置ける？床の耐荷重の確かめ方と、500kg級・だんぼっちの荷重分散」に変更。旧「築20年のマンションに重さ500kgの防音室を置ける？床補強なしで設置するための安全基準と計算術」）。見る: 統合先の表示が統合元の分を足して減っていないか、旧URLが索引から外れたか（T-59）
- 判定: タイトル変更はメインKWで表示が出るか。m11 は途中経過、最終は m12

## T-79 新規2本（2026-11-25 公開）

- `diy/three-tatami-booth-100k`（防音室 自作 3畳 10万円）・`creator/aircon-noise-mic`（エアコン 音 マイク）。基準値なし。デプロイ 2026-11-25
- m11 は登録の有無だけ見る。判定は m12 以降（登録後に表示が0なら需要ミスマッチを疑う）

## T-80〜T-82（2026-11-25 公開）

- T-80 `otodasu-voice-chat-test`（title 変更）: 3か月の表示3。見る語「otodasu 賃貸 許可」（1年分 13表示・12.15位）「otodasu だんぼっち 比較」（2表示・21.5位）
- T-81 部分更新: `musision-comprehensive-guide`（3か月の表示69）・`custom-home-soundproof-price-guide`（73）・`streamer-rental-selection-guide`（13）ほか4本
- T-82 新規 `knowledge/quiet-hotel-room`: 基準値なし
- m11 は登録の有無だけ見る。判定は m12 以降。デプロイ 2026-11-25。効果測定は T-84

## T-77 本文の被リンク（2026-11-25 公開。T-85）

- 対象と基準値（GSC 2026-08-22〜11-21 の表示・クリック・平均順位。`access-data/api/2026-11-24-h51-gsc-page-3m/`）: `building-fire-law-soundproof-room` 47・0・10.7位／`soundproof-rental-brand-comparison` 20・1・9.7位／`buy-home-with-soundproof-room` 24・1・29.6位／`wind-string-instrument-booth-selection` 3・0・6.7位
- 見る指標: 日平均の表示・順位、登録。判定基準: 表示が増え、順位が落ちていなければ継続。m11 は途中経過、判定は m12。`brand-comparison`・`buy-home`・`wind-string` は 11/26 公開予定の数字の修正（I-30・H-55）とも重なるので、リンクだけの効果とは言い切らない

## 優先Aのアウトライン7本（2026-10-15〜10-19 公開。2026-11-26 追加）

- 実施日: A01 `soundproof-room/notice-outside-sounds-in-booth` 10/15、A02 `money/soundproof-reform-cost-by-tatami` 10/16、A03 `soundproof-room/compact-booth-under-1-5-tatami` 10/17、A04 `soundproof-room/buy-home-with-soundproof-room` 10/18、A05 `local/tokyo-soundproof-rental-summary`（「沿線で探す」H2 の加筆）・A06 `soundproof-rental/single-living-soundproof-rental-guide`・A07 `soundproof-rental/soundproof-rental-brand-comparison` 10/19（日付はコミット日）
- 基準値: GSC 10/15〜11/23 の表・クエリ・登録は `access-data/api/2026-11-26-outline-a/README.md`（期間が違うので日平均で比べる。m11 の期間と重なるので、前後比較の「前」としては使わない）
- 見る指標: 日平均の表示・クリック・順位、出たクエリ（メインKW: 防音室 インターホン／防音室 リフォーム 費用／防音室 0.8畳／防音室付きマンション／中央線 防音賃貸／防音賃貸 一人暮らし／防音賃貸 おすすめ）、登録と前回クロール日、Bing、`affiliate_click`
- 確認項目と判定基準:
  - [ ] 前回クロールが 10/17〜10/21 のままの5本（A01・A02・A03・A06・A07）が、リライト後（11/07〜11/14）に再クロールされたか。されていなければ順位の良し悪しは判定せず m12 へ送る
  - [ ] A01・A03: 再クロール後もメインKWの表示が0なら需要ミスマッチと見て、`article-ideas/` のサジェストだけを根拠にした新規をやめる判断の材料にする（統合・削除は m12 以降）
  - [ ] A02: 「防音工事 費用」を取っている `custom-home-soundproof-price-guide` との役割分け。A02 の順位が50位より下のままなら、内部リンクと見出しの分担を見直す
  - [ ] A04: 「中古マンション 防音室」系が20位以内に入ったか（11/25 の T-77 と重なる）
  - [ ] A05: 登録は T-91。沿線・駅名の表示が出なければ独立記事にしない
  - [ ] A06: クエリが見えたか。匿名のままなら保留
  - [ ] A07: 「ラシクラス うるさい・評判」の表示・順位。加筆は T-92（加筆の効果は m12）
- 注意: A03 は T-80、A04・A07 は T-77（T-85）、I-30・H-55 の修正と重なる。件数が少ないので CTR・順位の小さな差では判定しない

## T-93 新規3本と加筆2本（2026-11-26 公開。T-94）

- 実施日: 2026-11-26（records T-93）
- 新規（基準値なし）: B11 `soundproof-room/maker-comparison-daiken-panasonic-others`（防音室 メーカー 比較）、B15 `soundproof-rental/detached-maisonette-family-soundproof-rental`（防音賃貸 メゾネット・戸建て）、B16 `soundproof-rental/structure-rc-src-wood-soundproof-rental`（鉄筋コンクリート 防音賃貸・構造）
- 加筆: B09 → `soundproof-rental/apartment-weight-limit-500kg`（見る語: 防音室 床 抜ける／タワマン 防音室）、B12〜B14 → `soundproof-rental/instrument-allowed-rental-research-method`（見る語: ドラム 賃貸／グランドピアノ 賃貸／24時間 楽器可）。基準値は m10（`access-data/api/2026-11-02-m10p-gsc-page/`）の2本の表示・順位を日平均で使う
- 見る指標: 新規は登録の有無とメインKWの表示。加筆は日平均の表示・順位と、上の語の表示が出たか
- 判定基準: m11 は公開から1週間なので途中経過だけ。m12 で、新規3本はメインKWの表示が0なら需要ミスマッチを疑い、加筆2本は表示が増えて順位が落ちていなければ継続
- 注意: B11 は T-87（ハウスメーカー比較と依頼先選びの食い合い）と同じ「防音室 メーカー」の語に掛かる。`housing-builder-soundproof-comparison` の順位が落ちていないかも見る

## T-70・I-30・H-55 数字の修正（2026-11-26 公開。T-95）

- 本文は task.md の T-95（実施日・対象・基準値・見る指標・判定基準）。m11 は途中経過として29本合計の日平均の表示・順位だけ見る

## 結果

（実施後に追記）
