# S-11 10月の月次アクセス解析（m10）と効果測定のまとめ確認（2026-11-02〜11-03）

- 担当: ユーザー（エクスポート・GSC UIの確認）+ Claude（解析・記録）
- 状態: 未着手
- 関連: `access-data/export-spec.md`（取得仕様）、`/monthly-ppdca`、S-03・S-05〜S-10（同じ日にまとめて処理）、S-12（m11へ送る項目）、T-29（比較基準のm07〜m09）
- 経緯・完了済みの作業・W41/W42の生データ: `.workspace/archive/legacy/weekly-task-archive-20261017.md`（2026-10-17に旧`weekly-task.md`から移した。IDのW-NNはそのまま使う）

## 前提

- 週次取得は2026-10-16に廃止した。下の項目と、S-05〜S-10の個別ファイルに残る「W43」「W44」「7日表」は、**m10（2026-10-01〜10-31）**に読み替える
- 比較の正式な基準は**m09**（T-29で取得）。W42（10/4〜10/10の7日表）の基準値は期間が違うため、日平均にして参考に並べるだけにする
- 10月中旬以降の施策（10/13の統合・リライト、10/16の書き直し）は、m10では月の後半しか反映されない。**判定はS-12（m11）で行い、m10は途中経過**として扱う

## 手順

1. ユーザー: `export-spec.md` §3のG1〜A3をm10で取得し、`access-data/2026/m10/`に置く（推奨は11/2〜11/3）
2. Claude: `/monthly-ppdca`でm09との月次比較を作る
3. Claude: 下の確認項目を上から順に見て、各項目の「結果」に1〜2行書く。同じ解析の中で、S-03・S-05〜S-10・S-09の個別ファイルも処理する
4. 判定まで時間が要る項目はS-12へ送る。着手できる施策が出たら`.task-management/task.md`にT-NNを起票する
5. 終わったら`.task-management/task.md`の状態を更新する

---

## 施策の効果測定

### W-06 本音と建前リライト68記事＋Tier B記事の選別

- 見る: m10ページ表で、対象約70本（`.workspace/archive/legacy/honne-tatemae-rewrite-survey.md`のTier1〜3）のうち**表示が出た本数と表示の合計**。W42は7本・表示39。記事単位のCTRは見ない
- `bass-trap-installation-guide`は10/16に書き直した（10/17本番確認）。この記事の動きは本音リライトの効果と分けて読む
- Tier B（`.workspace/archive/legacy/content-structure-tier-b-action-plan.md`の70本）は2026-09-06に方向性を全件反映済み。m10でも表示0の記事を、統合・現状維持に分け直す
- 注意: `soundproof-room-rental-cost`はS-06の判定が出るまで拡充しない
- 結果:

### W-08 アース線ノイズ（`/ja/knowledge/ground-loop-noise-basics/`）

- 施策: 10/16に「アース線 ノイズ」向けに書き直し（10/17本番確認）
- 見る: アース系クエリ（「ノイズ アース 線」「アース 線 ノイズ 対策」「ノイズ アース」「アース ノイズ 対策」。W42は55〜84位）の順位
- ユーザー: 再クロールを申請し、申請記録（S-09の個別ファイル）へ書く
- 判定はS-12: 50位台より上に入るか。70位台のままなら、統合か追加記事を検討する
- 結果:

### W-11 `wifi-connection-guide`のタイトル調整

- 順位の改善（9.25→7.77→2.8位）は結論済み。m10の月間の表示数でCTRを見て、0%のままでなければ終了する
- 結果:

### W-12 `mansion-instrument-practice-time-rules`のAI Overview対策

- 見る: 「マンション 楽器 何時まで」系のCTR・順位（W42はページ表示50・7.4位・1クリック）
- 判定: 表示が増えてもCTRが伸びない場合は、AI概要の占有が続いているとみて、別の一次情報の強化を検討する
- 結果:

### W-21 `soundproof-material-spec-chart`の入口化

- 見る: GA4のLPセッション・エンゲージ率・滞在（W41=32・88%・約65秒、W42=35・97%・72秒）と、A2で`related_click`・内部リンクのクリック
- 流入の大半はBing。Googleの表示は細い（W42は表示5）。リンク先の`bass-trap-installation-guide`側のセッションが増えていれば導線は機能している
- 保留の判断（2026-10-19にre-create §3から移動。ユーザー指示「10月末に確認する」）: この日の結果で、リライトするか現状維持かを決める。3か月の基準値は表示72・クリック1・12.75位、GA4（3週）77
- 保留明けにやること: 本文にある屋外用防音カーテン記事へのリンクのアンカーを、新タイトル「屋外用防音カーテンは家庭でも使える？工事用防音シートの効果と間仕切りへの使い方」に直す（リンク先は有効。2026-10-19のリライトでタイトルが変わった）
- 結果:

### W-24 補助金の統合先`soundproof-subsidy-check-guide`

- 見る: 表示が出始めたか（W42は表示0）、「防音工事 補助金」「データセンター 騒音」などの新規クエリ、`related_click`。順位は判定基準にしない
- S-07の個別ファイルと一緒に処理する
- 結果:

### W-26 中古・買取クラスタ

- 対象: `/ja/money/used-soundproof-room-buying-guide/`（W42は表示3・30.3位）、`/ja/money/soundproof-room-buy-rent-sell-guide/`（10/14登録）
- 見る: 「防音室 予算 10万円」「中古 防音室」「だんぼっち 中古」「オトダス 中古」の表示・順位、総合ページ→中古・レンタル記事への回遊
- 判定: 中古記事が27位前後から上がるか、予算10万円系で表示が出るか。クリック数では判断しない
- 保留中の判断: `soundproof-room-buyback-guide`を単独で残すか、総合ページを入口カード（`money-market`）に入れるか
- 結果:

### W-27 `proofroom-humidity-airconditionlist`の加湿・結露の加筆

- 見る: 「防音室 加湿器」「防音室 湿度」「防音室 結露」「防音室 乾燥」の出現（W42はゼロ）。冬に需要が立ち上がるため、10月の数字だけで判断しない（S-12でも見る）
- 結果:

### W-28 `creator/`の未登録記事の作り直し

- 見る（GSC UI「ページのインデックス登録」）: 登録待ちの`one-room-streaming-soundproof`・`parenting-streamer-soundproof`・`singer-instrumentalist-stream-soundproof`が登録済みに移ったか、前回のクロール日
- 残る個別の作り直しは`game-streamer-sound-types`のみ（T-25と調整）→ 2026-10-19に完了（下の「配信者クラスタの残作業」節）
- 残作業（2026-10-19にre-create §2 #8から移動。急がない）: `creator/streamer-rental-selection-guide` のミュージション家賃表（本サイト調査2026-06-24、26棟）を公式サイトで取り直す。耐用年数の記述は確認済みで直す所なし。この日の確認と合わせて着手するかを決め、着手するならT-NNに起票する
- 判定はS-12: 作り直した記事と未着手の記事で、登録された本数に差が出たか
- 結果:

### W-29 re-createバッチ06のリライト7本

- 見る: 聴覚過敏（「聴覚過敏 引越し」ほか）、DIY壁（「防音壁」「防音室 DIY」）、賃貸DIY（「賃貸 防音対策 壁を傷つけない」）、ランニングマシン（旧URL301変更後の戻り）、防音業者（「防音工事 業者の選び方」）、D値（「db と d値 の違い」）、防音室買取（「防音室 買取」）の表示・順位
- 判定: 表示が出ること、30位台が20位台に入ること。動きがない記事は需要ミスマッチを疑う
- 結果:

### W-30 re-createバッチ07・08のリライト7本

- 見る: ワンタッチ防音壁（W42は表示22・10.95位）、データセンター騒音、HSP防音室、HSPセルフチェック、ペットの騒音（登録待ち）、日米の文化、退去時費用の表示・順位
- 判定: W-29と同じ
- 結果:

### W-31 noindex解除4本と、配信系の旧URL5本の転送先変更

- 見る: 解除4本（加湿器・退去時費用・防音マスク・日米の文化）の表示・クリック・順位。特に「防音室 加湿器」「防音マスク ゲーム 自作」「退去時 防音室 費用」。旧URL5本の受け皿（総合ガイド・苦情対応・音質優先ほか）の表示
- ユーザー: サイトマップの再送信をしたか確認する（実施記録がない）
- 判定はS-12
- 結果:

### W-32・W-33・W-34 配信者クラスタの統合（第1〜3弾）

- 見る: 統合先・土台の表示と順位、吸収した語が土台に出たか。登録済みの土台（賃貸選び・農地・身バレ）は、統合前の語の順位が落ちていないか
- W-34: ASMRの旧URL3本の転送先を`asmr-external-noise-elimination`へ変えた（2026-10-17）。**本番反映を2026-10-19にcurlで確認**（3本とも1回の301で転送先へ、転送先は200）。「ASMR 防音」系の表示を見る
- W-34: `collab-streaming-soundproof-space`は10/16の全面リライトが本番に出ている（10/17確認）。ユーザーが再クロールを申請する
- 判定はS-12
- 結果:

### 電子ドラム・ピアノの旧URL3本の転送先変更（T-24、2026-10-18変更・同日デプロイ）

- 変更: カテゴリ一覧から既存記事へ（`public/.htaccess`・`astro.config.mjs`）
  - `/posts/electronic-drum-vibration/`（16か月で17表示・36.2位）: `/ja/knowledge/` → `/ja/diy/electronic-drum-vibration-fuwafuwa-system/`
  - `/posts/piano-proofroom-select-guide/`（73表示・24.7位）: `/ja/soundproof-room/` → `/ja/soundproof-room/piano-room-guide/`
  - `/posts/soundproof-performance-piano/`（16表示・8.4位）: `/ja/soundproof-room/` → `/ja/soundproof-room/piano-room-guide/`
- デプロイ: 2026-10-18。curlで3本とも1回の301で転送先へ行き、転送先2記事は200であることを確認した
- 見る: 転送先2記事の表示・順位（変更前との比較）。旧URL3本の表示が消えていくか。「電子ドラム 振動」「ピアノ 防音室」系の語が転送先に出るか
- 判定はS-12（m10は変更から月末まで日が浅いので途中経過）
- 結果:

### 賃貸ゲーム音の自作ブースの旧URL2本の転送先変更（re-create §2 #4、2026-10-19変更・同日デプロイ）

- 変更: `/ja/soundproof-rental/`（カテゴリ一覧）→ `/ja/diy/closet-diy-soundproof-room/`（`public/.htaccess`・`astro.config.mjs`）
  - `/posts/rental-game-soundproof-booth-3man/`（16か月で70表示・7クリック・16.8位）
  - `/ja/use-case/rental-game-soundproof-booth-3man/`
- 理由: 旧記事は「賃貸でゲーム音がうるさい｜3万円以下で作る安い自作防音室」。転送先の「クローゼットDIYで3万円から・賃貸の板囲い方式」と約束が合う
- デプロイ: 2026-10-19。curlで旧URL2本（`/posts/`・`/ja/use-case/`）とも1回の301で`/ja/diy/closet-diy-soundproof-room/`へ行き、転送先は200であることを確認した
- 見る: 転送先の表示・順位。旧URL2本の表示が消えていくか。「自作 防音室 賃貸」「ゲーム 音漏れ」系の語が転送先に出るか
- 判定はS-12
- 結果:

### 住宅系の既存3記事の補強とタイトル変更（T-10 R-2〜R-4、2026-10-19変更・同日デプロイ）

- 変更（slug不変。詳細は`t10-housing-affiliate/02-article-plan.md` §3）
  - `/ja/money/custom-home-soundproof-price-guide/`（R-2）: 旧「防音 注文住宅の坪単価相場｜全国平均・地域差と新築組み込み費用の目安」→ 新「防音工事の坪単価相場｜注文住宅で防音室を足す費用と地域差・新築と後付けの差」。防音工事の坪単価を冒頭の答えにし、地域別の建物坪単価を2025年度フラット35利用者調査に差し替え（旧表の「その他地域 約73万円/坪」は公表値から計算した約114万円/坪と大きくずれていた）、ローコスト住宅・新築戸建ての節を追加
  - `/ja/money/piano-soundproof-mortgage-tax-guide/`（R-3）: 旧「防音室・ピアノ室は住宅ローンに組み込める｜資金計画と固定資産税の注意点」→ 新「ピアノと住宅ローン｜防音室・ピアノ室は組み込める、ピアノ本体は別が基本」。旧descriptionが「ピアノ本体の購入ローンではなく」と検索語の文字どおりの意図を外していたのを直し、対象になる・ならない費用の表、住宅購入の流れの表、教室にする場合（非住宅部分）の節を追加
  - `/ja/soundproof-room/daiwa-house-jiyuku-soundproof-review/`（R-4）: 旧「大和ハウス「私の自由区」防音室を検討して分かったこと」→ 新「大和ハウスの防音室「私の自由区」とは｜音の自由区との違いと契約前の確認点」。一人称の検討記から、公式発表の整理（3カテゴリー・音の自由区との違い・商談の質問リスト）へ作り直し（`02-article-plan.md` §6-3の決定どおり）。`<RegionBanner />`の抜けも修正
- 基準値（W40＝過去3か月、Google）
  - ページ: price-guide 153表示・0クリック・18.2位／mortgage 144表示・1クリック・13.3位／daiwa 77表示・3クリック・45.5位
  - クエリ: 「防音 坪単価」105表示・19.8位、「防音工事 坪単価」25表示・35.6位（price-guide）／「ピアノ 住宅ローン」121表示・11.3位、「住宅ローン ピアノ」6表示・21.5位（mortgage）／「大和ハウス 防音」25表示・58.9位、「私の自由区」2表示・12.5位（daiwa）
- 見る: 3ページの表示・順位・CTR。上の語の順位が落ちていないか。「ピアノ 住宅ローン」が10位以内に入りクリックが付くか（10位以内のCTR目標5%）。比較は日平均で行う（期間が違うため）
- デプロイ: 2026-10-19。curlで3ページとも本番で新タイトルが出ることを確認した
- 判定はS-12（m10は変更から月末まで日が浅いので途中経過）
- 結果:

### re-create判断待ち9本の処理（re-create §1、2026-10-19変更・同日デプロイ）

- 統合・排除して301（`public/.htaccess`・`astro.config.mjs`。旧URLを経由していた古い転送も最終の転送先へ直接向けた）
  - `/ja/knowledge/why-your-80-percent-rug-rule-fails/` → `/ja/knowledge/vibration-reduction-science/`（「ジョイントマットは意味ない？」のH2を追加）
  - `/ja/knowledge/diy-soundproof-truth/` → `/ja/diy/diy-soundproof-room-failures-solutions/`（「DIY防音の不都合な真実」のH2と製品の見抜き方を追加）
  - `/ja/knowledge/dry-floating-floor-natural-frequency/` → `/ja/knowledge/vibration-isolation-technology-trend/`（失敗の原因と、沈み込み量から固有振動数を見積もる表を追加）
  - `/ja/knowledge/proofroom-maker-2025productcheck/` → `/ja/soundproof-room/bouon-osusume-hikaku/`（排除。出典の確認できない記述が多く、更新余地なし）
  - `/ja/business/soundproof-industry-news-2026-06/` → `/ja/soundproof-rental/bouon-rental-market-guide/`（排除。ニュースは記事でなくThreadsで扱う方針）
- リライトとタイトル変更（slug不変）
  - `/ja/knowledge/biophilic-acoustics/`: 旧「バイオフィリック・アコースティック：苔と緑で「静寂の庭」を壁に作る技法」→ 新「苔の吸音効果はどのくらい？研究データで見る防音との違いと壁への取り入れ方」。2026年の音響管試験（Karklinaほか）の吸音率表を入れ、「吸音ウレタンより高い」「半永久的」など根拠のない記述を削除
  - `/ja/diy/parenting-generation-quiet-corner-diy/`: 旧「子育て世代のDIY「一人になれる場所」｜1万円台から始める段階的な作り方」→ 新「夜泣きの交代制で眠れない？非番の人が寝る部屋を1万円台から静かにする方法」。夜泣きの交代で非番の人が眠る部屋づくりに軸を変更
  - `/ja/diy/outdoor-soundproof-curtain-market-guide/`: 旧「【市場整理】屋外用防音カーテン｜防音シートの構造と調達・選定の実務ポイント」→ 新「屋外用防音カーテンは家庭でも使える？工事用防音シートの効果と間仕切りへの使い方」。BtoB向けから一般向けへ（全地連2023の実測、間仕切りDIYの手順）
  - `/ja/knowledge/future-ssi-silent-speech-interface-revolution/`: 旧「2030年の防音Lab：無声音声インターフェース(SSI)が「遮音」の常識を破壊する」→ 新「無声音声インターフェース（SSI）とは？声を出さずに話す技術の現在地と防音への影響」。2025〜2026年の研究（SilentWear・Revoice・AESSI・総説）で作り直し
- 基準値（16か月、旧URL含む、GSC 2026-10-11取得）: rug 2表示・0クリック／truth 8・0（3か月20.14位）／dry-floor 28・0（3か月35.75位）／maker 55・0／news 0・0／biophilic 12・0（3か月2.5位、Bingで「苔 吸音 効果」2位）／parenting 7・1／curtain 0・0／SSI 0・0
- 見る: 統合先3本（vibration-reduction-science・diy-soundproof-room-failures-solutions・vibration-isolation-technology-trend）の表示・順位が落ちていないか。リライト4本で「苔 吸音」「夜泣き 交代」「屋外用防音カーテン」「無声音声インターフェース」系の語に表示が付くか。比較は日平均で行う
- デプロイ: 2026-10-19。curlで旧URL5本と、同じ転送先へ付け替えた古い経路3本（`/ja/soundproof-room/others/`・`/ja/soundproof-room/knowledge/`・`/ja/column/news/`・`/posts/`）がすべて1回の301で転送先へ行き、転送先は200であることを確認した。リライト4本も200
- 判定はS-12（m10は変更から月末まで日が浅いので途中経過）
- 結果:

### 配信者クラスタの残作業（re-create §2 #1・#5・#6・#7、2026-10-19変更・同日デプロイ）

- #1 `/ja/creator/game-streamer-sound-types/`: 旧「ゲーム実況者の防音環境｜打鍵音・マウス音・叫び声ごとの対策」→ 新「ゲーム実況の騒音対策｜打鍵音・マウス音・叫び声・台パンを音の種類で振り分ける」。6種類の音（台パン・PCファン音を追加）の早見表と、苦情の方向別の優先表を入れ、各音の詳しい記事（打鍵音・台パン・絶叫・PCファン・ハブ）へ送る振り分け記事に変更。根拠のない「クリック音1/5以下」を削除
- #5 トップのカード`sound-leak`: ボタンの先は`/ja/creator/`のまま（ユーザー判断）。所属に`game-streamer-sound-types`（5）・`diy/keyboard-typing-noise-vibration`（6）を足して4本→6本
- #6 `affiliates.ts`の`humidifier-vaporizer-daikin`を削除（記事での使用なし。商品が防音室向けでなかった）
- #7 別クラスタへ移動し、移動先に合わせて作り直し（ユーザー判断）
  - `/ja/business/report-japan-asmr-vtuber-streaming-studio-standard/` → `/ja/knowledge/report-japan-asmr-vtuber-streaming-studio-standard/`（slug不変、カテゴリ移動で301。経由していた旧URL2本も直接向けた）。旧「【技術解説】ASMR・VTuberに求められる「配信専用スタジオ」の防音・熱対策基準 (2026)」→ 新「暗騒音の目安はNC値で決める｜ASMR・歌枠・ゲーム実況の録音に必要な静けさ」。サイト内で唯一のNC値の解説として、NC曲線の表・部屋別の推奨値（Engineering ToolBox）・コンテンツ別の目標・測り方に作り直し。出典のない「15分で5℃上昇」「0.8畳から1年以内に買い替え」、価格表、フェーズ別ロードマップ（総合ガイドと重複）は削除
  - `/ja/diy/diy-refrigeration-noise-reduction/`: 旧「配信者のための家電・生活音対策｜冷蔵庫と換気扇のノイズを物理的に沈める方法」→ 新「冷蔵庫のブーンという振動音の対策｜防振マットの選び方と床に響かせない置き方」。配信者向けから、家電の騒音・防振のクラスタへ（タグを「冷蔵庫・家電騒音・防振・生活音・騒音対策・換気扇」に変更）。マイクの節は残した
- 基準値（16か月、GSC 2026-10-11）: game-streamer-sound-types 2表示（未登録）／refrigeration 3表示／report-japan-asmr 6表示
- 見る: 3本の表示が付くか（「冷蔵庫 振動」「暗騒音 目安」「NC値」系）。トップのカード`sound-leak`の`hub_click`（カード単位）
- デプロイ: 2026-10-19。curlで旧URL `/ja/business/report-japan-asmr-vtuber-streaming-studio-standard/` と古い経路2本（`/ja/column/company/`・`/posts/streaming-asmr-vtuber-soundproof-boom/`）が1回の301で`/ja/knowledge/`の新URLへ行き、200で新タイトルが出ることを確認した。振り分け記事・冷蔵庫記事も200
- 判定はS-12
- 結果:

---

## 継続観察（毎月の解析で見る）

- **W-15 GA4全体**: セッション・エンゲージ率・滞在を、bot疑いのdirect（米国・中国・シンガポール発でエンゲージがほぼ0）を除いて読む（T-04）
- **W-16 AI系流入**: chatgpt.com・openai・copilot.com・perplexity.aiの合計と着地ページ（W41=約14、W42=8）
- **W-17 Teams経由**: 件数と、2ページ目に進むか（W42で34件。10/16に記事同士のリンクを追加、10/17本番確認）
- **W-18 `music-student-property-search-guide`**: W42で表示0。m10でも0〜数表示なら「需要ミスマッチ寄り」で終了する（単独記事は追加しない）
- **W-19 参照元の内訳**: Bingとdirectの比率。`hub_entry`・`hub_cta`・`article_footer`が参照元に出る行が0になったか（10/13にパラメータ名を`link_source`へ変更済み）
- **W-20 指名検索「防音ラボ」**: 表示・クリックと`author_byline_click`
- **W-25 インデックス登録済み数**: S-09で中間判定（基準102件・有効89件）
- 結果:
