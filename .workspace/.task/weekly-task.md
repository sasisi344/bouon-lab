# 週間タスク・効果測定ボード

最終整理: 2026-10-04（`effect-monitoring.md`を本ファイルに統合。運用ルールは同階層の`CLAUDE.md`を参照）

> 本ファイルは「データが揃うのを待って確認する項目（短期〜長期）」と「週次の生データスナップショット」を一元管理する。今すぐ着手できるタスクは `task-list.md`。
> 過去の分析記録（W28〜W36のPlan/Do/Check/Act全文）は `archive/weekly-task-archive-20260916.md`。
> **次回GSCエクスポートは2026-10-10前後**（カスタム1週間・GA4と同じ日付で取得）。手順は`schedule-task.md` S-01（`schedule/2026-10-10-w42-gsc-ga4-import.md`）。日付が決まっているタスクは`schedule-task.md`に集約している。

> **GSCデータの注意（2026-10-04更新）**: W41は7日分で再取得済み（`access-data/2026/w41/`、ファイル内に期間記載なし。GA4と同じ9/26〜10/3として扱う）。**これが最初の週次GSCデータ**で、W39=3週間分、W40=過去3か月累計、W36のbaselineも長期間のため、**W40以前との増減比較はできない**。比較はW42（10/10前後）から可能。GA4は1週間単位で比較可能。

---

## 索引（確認項目）

先に本表だけ読み、該当ID・区分の本文へ飛ぶ。IDは欠番を再利用しない。完了した項目は本文を`archive/`へ移し、本表からも削除する。

| ID | 区分 | 対象 | 確認に使うデータ | 確認時期 |
|---|---|---|---|---|
| W-06 | 短期 | Tier B記事の選別・拡充＋本音と建前リライト68記事の効果測定（旧W-09を統合、10/6） | GSCページ | 次回エクスポート |
| W-08 | 短期 | グランドループ記事統合（9/16） | GSCクエリ | 次回エクスポート |
| W-11 | 短期 | wifi-connection-guideタイトル調整（9/17） | GSCページ | 次回エクスポート |
| W-12 | 短期 | 指名検索記事のAI Overview対策（9/30） | GSCクエリ | 次回エクスポート |
| W-13 | 短期 | 地方4都市を`regional-city-soundproof-rental-guide`に統合（10/6、noindexから方針変更） | GSCページ・URL検査 | デプロイ後〜W43 |
| W-14 | 短期 | 新規記事3本のインデックス反映 | GSC URL検査・ページ | 次回エクスポート |
| W-21 | 短期 | `soundproof-material-spec-chart`の入口化（10/6、出リンク4本・被リンク2本） | GA4 LP・GSCページ | 次回エクスポート |
| W-22 | 短期 | サイトデザインのスマホ最適化（10/6、本文幅・表・見出し。デプロイ後に起算） | GA4（読了率・直帰率・エンゲージメント） | 次回エクスポート |
| W-23 | 短期 | 住宅系3本の公開とindex反映・ハウスメーカー比較記事の書き直し（10/6、T-10） | GSC URL検査・ページ・クエリ | デプロイ後〜次回エクスポート |
| W-24 | 短期 | 補助金エリア記事の統合先`soundproof-subsidy-check-guide`の表示・順位（10/6、旧`tokyo-osaka`を301） | GSCページ・クエリ | デプロイ後〜W43 |
| W-15 | 継続 | GA4改善傾向の持続（W41〜） | GA4週次 | 毎週 |
| W-16 | 継続 | AI系流入の追跡 | GA4参照元 | 毎週 |
| W-17 | 継続 | Teams経由流入（賃貸市場レポート） | GA4参照元 | 毎週 |
| W-18 | 継続 | music-student-property-search-guideの順位推移 | GSCページ（1週間） | 毎週 |
| W-19 | 継続 | (direct)・Bing優位の実態 | GA4参照元 | 毎週 |
| W-20 | 継続 | 指名検索「防音ラボ」 | GSCクエリ・GA4イベント | 毎週 |

---

## 短期（次回GSCエクスポートで確認）

### W-06 Tier B記事の選別・拡充＋本音と建前リライトの効果測定（2026-10-06に旧W-09を統合）

どちらも同じGSCページ表で記事単位の表示・CTR・順位を見る作業で、対象記事も重なる（Tier B作業シート70本のうち約29本が`archive/honne-tatemae-rewrite-survey.md`の記載記事と重複。slug一致ベースの概算）ため、1項目にまとめて同時進行する。

- [ ] **(A) 本音と建前リライトの効果測定**（旧W-09、2026-09-05実施。Tier1 23・Tier2 30・Tier3 15の計68記事）: W42の7日表を基準値にして、W43以降で表示・CTR・順位の変化を見る。`construction-types-cost-comparison`はCTR0%からの改善が最も見えやすい。W41は最初の7日データで、リライト前との比較はできない
- [ ] **(B) Tier B記事（3,000字未満・100記事）の選別**: GSCデータとの突き合わせで、拡充候補・統合検討・現状維持へ再分類し、着手する
  - 2026-10-05: 方針メモ付きの作業シートが既にある（`archive/content-structure-tier-b-action-plan.md`、拡充候補34・統合検討36記事で、ユーザー記入の「方向性」列あり）。W41の7日GSCは表示が細く選別根拠として弱いため、W42〜W43の7日データが揃ってから、方向性が記入済みの記事を優先して着手する
- [ ] **(C) 同時進行の注意**（(A)の測定を壊さないため）
  - (A)の対象68記事をTier Bとして拡充・統合する場合は、着手日と変更内容をここへ追記する。変更後の数値の動きは、本音リライトの効果とは分けて読む
  - `soundproof-room-rental-cost`はTier B拡充候補（シート#25）だが、S-06（カニバリ統合4記事の効果確認、W43まで）の対象でもあるため、S-06の判定が出るまで拡充に着手しない
  - 作業シートの`cable-noise-ground-loop-prevention`（#4）は2026-09-16に削除・301済み（`archive/task-list-10.md`）。着手対象から外す

### W-08 グランドループ記事統合（2026-09-16実施）

- [ ] `ground-loop-noise-basics`の「ノイズ アース」「グランドループ 対策」等のクエリの表示・順位が改善しているか確認する
  - 2026-10-06: 旧URL`/ja/creator/cable-noise-ground-loop-prevention/`は本番で301→`ground-loop-noise-basics`を確認済み（`archive/weekly-task-archive-20261006.md`のW-07参照）
  - 2026-10-04 W41（7日）: ページ表示5・順位19.2・クリック0。クエリは「グランド ループ」62位が1表示のみで、「ノイズ アース」「グランドループ 対策」は表に出ていない。GA4ではbing経由13セッション（エンゲージメント率69%）でBing側の需要は確認できる

### W-11 wifi-connection-guideのタイトル調整（2026-09-17実施）

- [ ] CTR・順位のさらなる変化を確認する（W39時点では表示170・クリック2・CTR1.18%・順位9.25とやや悪化、継続観察）
  - 2026-10-04 W41（7日）: 表示13・クリック0・順位7.77。順位は上がったがクリック0

### W-12 指名検索記事のAI Overview対策リライト（2026-09-30実施）

`mansion-instrument-practice-time-rules`（「マンション 楽器 何時まで」順位8.55だがCTR0%）。SERP目視調査でAI概要（出典「STUDIO楽」）にクリックを奪われていると判明したため、一次情報とQ&A構造への書き換えを実施した。追加内容: ①国交省「マンション標準管理規約」に基づく使用細則の実例文言・賃貸募集の3区分（禁止／条件付き可／制限なく可）を追加（詳細型の本音への対応）、②「よくある質問」セクション（5問）を新設し、すでに苦情を受けている読者向けの誘導も追加（ユーザーの声型の本音への対応）。この「詳細型／ユーザーの声型」判断ロジックは`bouon-research` skillに恒久ルールとして追記済み、今後の直接回答型クエリ記事にも適用する。

- [ ] 「マンション 楽器 何時まで」のCTR・順位変化を確認する。AI概要が変わらず占有し続ける場合、Q&A構造の効果は限定的と判断し、他の一次情報強化策を検討する
  - 2026-10-04 W41（7日、施策は9/30実施のため直後の観測）: ページ表示24・順位9.42・クリック0。「マンション 楽器 何時まで」表示8・順位9.38、「何時 まで」表示4・順位7.5、いずれもクリック0。再クロール前後の可能性が高く、判断はW42〜W43の7日データで行う
- 関連: Threads初回投稿（クエリ疑問オープナー型）の起点クエリ。`.workspace/_sns-post/archive/topic-index.md`参照

### W-13 G4後続：地方4都市の統合（noindexではなく1記事に集約）

- [x] 2026-10-06: kanazawa・okayama・kumamoto・niigataの4本は需要が細く（W40累計で13〜24表示・クリック0、W41の7日表では表示0）、noindexではなく**1記事に統合して301**する方針に変更。統合先は`/ja/local/regional-city-soundproof-rental-guide/`（西日本=金沢・岡山・熊本、東日本=新潟の2セクション、ナレッジ型）
  - 実施内容: 旧4記事を削除し、`astro.config.mjs`と`public/.htaccess`に301を追加。旧4本を指していた内部リンク6記事（`bouon-rental-market-guide`・sendai・osaka・kyoto・hiroshima・fukuoka）を新記事へ差し替え、interlink一覧を再生成
  - 書き直した点: 旧記事のエリア別家賃表（出典なし・4都市でほぼ同一の帯）は転記せず、LIFULL HOME'Sの一般賃貸相場と新幹線・空路の所要時間（最速新潟1時間29分、金沢2時間24分、岡山→新大阪45分、熊本→博多約40分）に置き換えた。旧記事の「新潟 東京まで2時間」「熊本 博多35分」は誤りだったため訂正
  - 注意: 防音物件の家賃（約5.8〜7.3万円）は福岡の上乗せ率+15〜30%を準用した試算で、4都市の実測ではない
- [ ] デプロイ後、統合先のGSC URL検査でindex登録を確認し、旧4URLの301が効いているかを確認する（W-24と同じ観点）
- [ ] W43以降、統合先の表示・順位を確認する。「金沢/岡山/熊本/新潟 防音賃貸」系クエリが拾えているか。表示0が続く場合は、地方4都市で単独の需要がないと判断して追加施策は打たない

### W-14 新規記事のインデックス反映確認

- [ ] `guitar-apartment-practice-guide`（2026-09-16公開）
- [ ] `sleeping-parent-game-streaming-guide`（2026-09-18公開、GA4で高エンゲージメントセッション1件観測済み）
- [ ] `karaoke-box-soundproof-performance-guide`（2026-09-17公開）
  - 2026-10-04 W41（7日）: 3本ともGSCの7日表に出現せず。GA4側でもbing/google経由の着地は確認できていないため、URL検査でインデックス登録状況を確認する
  - 2026-10-06: `sleeping-parent-game-streaming-guide`・`karaoke-box-soundproof-performance-guide`は内部リンク0本の孤立状態だった（公開以来、旧W-05（`archive/weekly-task-archive-20261006.md`）の再スキャンで判明）ため、クローラーが辿れずインデックスされなかった可能性がある。6本のリンク追加で解消済み（詳細は`archive/weekly-task-archive-20261006.md`のW-05）。URL検査は再クロール後のW42〜W43で行う。`guitar-apartment-practice-guide`は被リンク1本だったが追加で3本になった

### W-21 `soundproof-material-spec-chart`の入口化（2026-10-06実施、T-05）

W41でbing経由32セッション（W40は10）・エンゲージメント率88%・滞在約65秒だった記事から次の読み物へ誘導するため、出リンク4本（`bass-trap-installation-guide`・`diy-wall-soundproofing-room-guide`・`soundproof-sheet-heavy-diy-tips`・`bouon-osusume-hikaku`と`soundproof-room-price-market`）と、DIY系2記事からの被リンク2本を追加した。詳細は`archive/task-list-18.md`。

- [ ] W42〜W44のGA4で、この記事のLPセッション数（W41=32）・エンゲージメント率（W41=88%）・滞在時間（W41=約65秒）が維持されるか、`related_click`・内部リンクのクリックイベントが出ているかを確認する。32件が一過性の可能性もあるため、セッションが10前後に戻っても施策の失敗とは判定しない
- [ ] W42以降のGSC 7日表に`soundproof-material-spec-chart`と追加リンク先（`bass-trap-installation-guide`など）の表示が出るかを見る。リンク先側のセッションが増えていれば導線は機能している

### W-22 サイトデザインのスマホ最適化（2026-10-06実装、T-09。デプロイ日から起算）

スマホの本文幅を245px→317px、PCを558px→678pxに広げ、表を横スクロール化、見出しを文節改行にした。詳細は`archive/task-list-20.md`。デプロイ日はまだ確定していないため、デプロイ後に日付をここへ記入する（デプロイ日: 未記入）。

- [ ] デプロイ後のW42〜W44のGA4で、エンゲージメント率（W41=56.5%）・平均エンゲージメント時間（W41=54.5秒）・読了イベント（`article_read_complete`）の発生件数が改善しているかを見る。デプロイ前後で週をまたぐ場合は、デプロイ日以降のみを比較する
- [ ] 判定の注意: 他の施策（内部リンク追加、記事のリライト）と同時期の変化なので、デザイン単独の効果とは断定しない。スマホ・PCの端末別（GA4のデバイスカテゴリ）で差が出るかを補助的に見る

### W-23 住宅系4本の公開とindex反映（2026-10-06作成、T-10。公開日は未記入、デプロイ後に記入）

住宅系アフィリエイトの審査用に、`custom-home-soundproof-builder-selection`・`custom-home-soundproof-consultation-prep`・`custom-home-soundproof-room-layout`の3本と、ハブ記事`noise-solutions-relocate-retrofit-custom-home`（2026-10-06作成済み）の4本を公開する。あわせて`housing-builder-soundproof-comparison`を書き直した（周波数別の数値表を公式の表記へ差し替え、タイトルを4社に変更）。詳細は`t10-housing-affiliate/`。公開日: 未記入。

- [ ] 効果測定レポートは2026-10-18に実施する（`schedule-task.md` S-05、`schedule/2026-10-18-housing-articles-report.md`）。W43（10/10〜10/17）のGSC・GA4を使う
- [ ] デプロイ後、Search Consoleの「URL検査」で4本（ハブ記事を含む）のURLを入力し、インデックス登録をリクエストする（ユーザー対応）。完了日をここへ記入する
- [ ] 数日〜2週間後に、3本が「インデックスに登録済み」になったかを確認する。登録済みになったら、アフィリエイトの申請に進む（`jyutaku-affilate.md`・`t10-housing-affiliate/02-article-plan.md` §5）
- [ ] W42以降のGSCで、`housing-builder-soundproof-comparison`の表示回数・順位の変動を見る（書き直し前: 「防音室 ハウスメーカー おすすめ」297表示・平均21.7位・クリック0）。順位が大きく落ちた場合は、タイトル変更の影響を疑う
- [ ] 住宅系の新規クエリ（注文住宅・家づくり相談・間取りなど）が3本に表示されるかを見る。表示が付かなくても、審査用の材料としての役割は維持する（需要の判断は申請後）

### W-24 補助金エリア記事の統合先`soundproof-subsidy-check-guide`の表示・順位（2026-10-06実施、旧W-10の後続）

`soundproof-subsidy-tokyo-osaka`を`soundproof-subsidy-check-guide`へ統合し、旧URLを301にした（`public/.htaccess`・`astro.config.mjs`）。統合先には東京・大阪の具体例の表、窓リノベ2026の上限100万円への更新、米国のデータセンター騒音の節を追記した。詳細は`archive/weekly-task-archive-20261006.md`のW-10。デプロイ日: 未記入。

- [ ] デプロイ後、旧URL`/ja/money/soundproof-subsidy-tokyo-osaka/`が本番で`301`になっていることをcurlで確認する（W-07と同じ手順）
- [ ] W42（基準値）・W43のGSCページ表で、`soundproof-subsidy-check-guide`の表示・順位を見る（W41は表に出ていない）。「防音工事 補助金」「データセンター 騒音」などの新規クエリの出現も合わせて見る
- [ ] 判定: メインクエリ（「東京 防音 工事 補助金」）を追わない方針に変えたため、順位改善は判定基準にしない。表示が出始めるか、内部リンクからの回遊（`related_click`）が出るかで見る

---

## 継続観察（毎週のGA4/GSCで見る。次回データがなくても急がない）

### W-15 GA4改善傾向の持続（W41〜）

- [ ] セッション151→207（+37%）、エンゲージメント率43.0%→56.5%、平均エンゲージメント時間39.6→54.5秒が次週以降も維持されるか。bot除外後の数値も合わせて確認する

### W-16 AI系流入の追跡

- [ ] W41でchatgpt.com・openai・copilot.com・perplexity.aiの合計約14件（W40は約3件）。どの記事に着地しているか継続して見る

### W-17 Teams経由流入

- [ ] `teams.public.onecdn.static.microsoft`経由8件（賃貸市場レポート系ページ）: Teams内で記事共有された形跡。B2B・法人層の関心か、一過性かを継続して見る

### W-18 music-student-property-search-guideの順位推移

- [ ] 3か月累計で表示381・順位31・クリック0。圏外表示が増えただけで需要ミスマッチの可能性があるため、1週間単位の順位推移で判断する
  - 2026-10-04 W41（7日）: 表示6・順位47.3・クリック0。3か月累計の週平均（約29表示）より大幅に少なく、順位も悪化。W42以降も同水準なら需要ミスマッチ/圏外化と判断する

### W-19 (direct)流入・Bing優位の実態

- [ ] セッション参照元の内訳を継続監視（`chatgpt.com`/`copilot.com`経由の新規流入も追跡。W39時点で計5セッション）
  - 2026-10-04 W41: bing約51%に対し、google系は約6%（GA4で約15行分、GSC 7日クリック8と整合）。**GSCはGoogleだけ**なので、流入の過半を占めるBingの実態はGSCでは見えない

### W-20 指名検索「防音ラボ」

- [ ] W41（7日）は「防音ラボ」表示4・クリック1・順位8.5、トップページ`/ja/`は表示4・クリック1。W39で初クリック1件（表示42・順位7.21・CTR2.38%）。2026-09-30に記事フッターへ運営者バイライン（`/ja/about/`・X `@sasisi344`への導線）を追加したため、`author_byline_click`イベントの発生状況とあわせてクリック推移を継続観察する
- [ ] Threads（@bouonlab）プロフィール整備・投稿開始後は、指名検索の増減との関連も見る

---

## 週次生データ（新しい順。直近3週分を保持し、古いものは`archive/weekly-task-archive-YYYYMMDD.md`へ移す）

### W41定点観測（GA4: 2026-09-26〜10-03、GSCは期間不一致のため参考値）

> 注意: W41のGSCは2026-10-04に7日分で再取得済み（下記）。W40以前のGSCは長期累計のため週次比較には使えない。以後はカスタム1週間に固定する（`task-list.md` T-06）。

GA4（1週間、W40=9/19〜9/26と比較可能）:

| 指標 | W40 | W41 | 変化 |
|---|---|---|---|
| セッション | 151 | 207 | +37% |
| アクティブユーザー | 132 | 185 | +40% |
| エンゲージメント率 | 43.0% | 56.5% | +13.5pt |
| 平均エンゲージメント時間 | 39.6秒 | 54.5秒 | +38% |
| キーイベント | 0 | 0 | 変化なし |

- 参照元の構成比（行がタイトル単位で分割されているため、件数ではなく比率で見る）: bing約51%（W40約47%）・(direct)約29%・google系・ecosia・duckduckgo・yahoo。AI系（chatgpt.com・openai・copilot.com・perplexity.ai）は約14件（W40約3件）。`teams.public.onecdn.static.microsoft`が8件。
- ランディング上位: `soundproof-material-spec-chart` 32件（W40は10）、`report-japan-soundproof-rental-market-needs` 24件、`/ja` 16件、`ground-loop-noise-basics` 16件、`bouon-rental-market-guide` 11件。
- bot疑い: 一覧ページ宛てdirect（`/ja/local`・`/ja/soundproof-room`・`/ja/soundproof-rental`）が各5件、滞在0.8秒以下・エンゲージメント0。

GSC（7日分、2026-10-04再取得。ファイル内に期間記載なし、GA4と同じ9/26〜10/3として扱う）:

- ページ表（38行）合計: クリック8・表示218・CTR3.67%・表示加重平均順位18.8。クエリ表（37行）合計はクリック2・表示89（匿名クエリ分が除外されるためページ表と一致しない）
- クリックのあったページ（各1クリック）: `onetouch-soundproof-wall-review`（表示32・順位13）、`creator/gaming-floor-impact-noise-fix`（表示19・順位7.47、「台パン 対策」15位）、`knowledge/d-value-vs-rw-value-confusion`（表示9・順位4.78）、`money/piano-soundproof-mortgage-tax-guide`（表示5・順位2.8・CTR20%）、`/ja/`（表示4、「防音ラボ」）、`tokyo-bouon-whitekyuon-okudake-review`（表示3）、`hsp-self-check-sound-sensitivity`（表示3・順位26）、`diy/gamer-acoustic-placement`（表示1・順位2）
- クエリ付きのクリックは「ワンタッチ防音壁 評判」（表示15・順位11）と「防音ラボ」のみ。ページ側8クリックのうち6件は匿名・ロングテールクエリ経由
- 表示ありでクリック0の上位: `bass-trap-installation-guide`（表示34・順位11.65。「ベーストラップ 自作」表示12・順位9.75）、`mansion-instrument-practice-time-rules`（表示24・順位9.42）、`wifi-connection-guide`（表示13・順位7.77）、`japan-soundproof-market-size`（表示13・順位46.8）、`daiwa-house-jiyuku-soundproof-review`（表示10・順位59.6）
- 新規パターン: 市場規模系クエリ6種（「日本の防音市場」「防音シーラント市場」「防音材市場」「音響材料市場」「低周波吸音断熱材市場」「音響断熱材市場」、いずれも1表示・順位26〜63）、「大和ハウス 防音」「ダイワハウス 防音」（表示5・4、順位67・62.5）、「住宅ローン ピアノ」（1位、1表示）、「農地にプレハブ小屋」（27位）
- 7日表に出現しなかった施策対象: `soundproof-subsidy-tokyo-osaka`・地域4本・新規3記事・`soundproof-room-size`・`soundproof-room-rental-cost`・`rental-unit-soundproof-room`
- GA4でgoogle経由の着地があるがGSC 7日表にないページ: `bouon-dchiseinou-meyasu`（2）、`bouon-osusume-hikaku`・`soundproof-room-moving`・`proofroom-aircondition-select`（各1）。GSC側のデータ遅延または匿名クエリの可能性

### W39定点観測（2026-09-12〜09-19、W37・W38はエクスポート未取得のためスキップ）

> 2026-10-04注記: W39のGSCは3週間分（W37・W38未集計）の累計で、以下の「W36ベースライン比」は同一期間の比較ではなかった。

サイト全体（GSC、W36単体週ベースライン`ページ_single-period-baseline.csv`と比較可能な形式）:

- クリック数: 111 → 114（+2.7%）
- 表示回数: 5,456 → 6,864（+25.8%）
- CTR: 2.03% → 1.66%（-0.37pt）
- 表示の伸びに対してクリックがほぼ横ばいで、CTRが悪化。伸びの主因はグランドループ/ノイズ アース系・音大生地域系クエリなど低CTRの新規表示（詳細は上記の各項目を参照）

GA4（同期間、セッション180・エンゲージメント率51.1%・平均エンゲージメント時間50.4秒）の参照元内訳: bing 114 > (direct) 62 > (not set) 38 > google系(search.google.com+google) 21 > chatgpt.com 4 / duckduckgo 2 / yahoo 1 / copilot.com 1。詳細はW-19を参照。

軽微な新規発見（要対応ではなくメモ）: 「ワンタッチ 防音 壁 買う前」クエリが新規出現（表示22・クリック0・順位17.05）。`onetouch-soundproof-wall-review`に購入前の懸念点セクションがあるか、次回リライト時に確認する程度で可。
