# 週間タスク・効果測定ボード

最終整理: 2026-10-13（W42の結果を各W-NNへ反映。W-26〜W-28を追加。2026-10-04に`effect-monitoring.md`を本ファイルに統合。運用ルールは同階層の`CLAUDE.md`を参照）

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
| W-21 | 短期 | `soundproof-material-spec-chart`の入口化（10/6、出リンク4本・被リンク2本） | GA4 LP・GSCページ | 次回エクスポート |
| W-24 | 短期 | 補助金エリア記事の統合先`soundproof-subsidy-check-guide`の表示・順位（10/6、旧`tokyo-osaka`を301） | GSCページ・クエリ | デプロイ後〜W43 |
| W-26 | 短期 | 中古・買取クラスタ: 総合ページ`soundproof-room-buy-rent-sell-guide`の新設と`used-soundproof-room-buying-guide`の予算10万円軸リライト（10/13） | GSCページ・クエリ、GA4 LP | W43〜W44 |
| W-27 | 短期 | `proofroom-humidity-airconditionlist`に加湿の要否・温湿度計・結露の時期を加筆（10/13） | GSCページ・クエリ | 次回エクスポート〜W44 |
| W-28 | 短期 | `creator/`のクロール済み・インデックス未登録19本の作り直しと、登録状況の確認（10/13〜、表示の多い順） | GSC UI「ページのインデックス登録」、GSCページ・クエリ | 作り直し後、毎週〜11/16 |
| W-29 | 短期 | re-createバッチ06のリライト7本（10/13）: 聴覚過敏・DIY壁・賃貸DIY・ランニングマシン・防音業者・D値・防音室買取 | GSCページ・クエリ、Bing検索ワード | 次回エクスポート〜W45 |
| W-30 | 短期 | re-createバッチ07・08のリライト7本（10/13）: 退去時費用・ワンタッチ防音壁・データセンター・HSP防音室・HSPセルフチェック・日米管理規約・ペットの騒音 | GSCページ・クエリ、Bing検索ワード | 次回エクスポート〜W45 |
| W-31 | 短期 | noindex解除4本（加湿器・退去時費用・防音マスク・日米管理規約）と、配信系の旧URL5本の転送先変更（10/13） | GSCページ・クエリ、Bing検索ワード | 次回エクスポート〜W46 |
| W-32 | 短期 | 配信者クラスタの統合8本（10/13）: 統合先7本の登録・表示と、旧URLの受け皿への転送 | GSCページ・クエリ、GSC URL検査 | 次回エクスポート〜W46 |
| W-33 | 短期 | 配信者クラスタの統合・第2弾（10/13）: ワンルーム配信・マイクノイズ・防音環境完全ガイドの3本と、吸収した4本の旧URL | GSCページ・クエリ、GSC URL検査 | 次回エクスポート〜W46 |
| W-34 | 短期 | 配信者クラスタの統合・第3弾（10/13）: 賃貸選び・ASMR・同居人・コラボ・農地と地方・身バレの6本と、吸収した7本の旧URL | GSCページ・クエリ、GSC URL検査 | 次回エクスポート〜W46 |
| W-15 | 継続 | GA4改善傾向の持続（W41〜） | GA4週次 | 毎週 |
| W-16 | 継続 | AI系流入の追跡 | GA4参照元 | 毎週 |
| W-17 | 継続 | Teams経由流入（賃貸市場レポート） | GA4参照元 | 毎週 |
| W-18 | 継続 | music-student-property-search-guideの順位推移 | GSCページ（1週間） | 毎週 |
| W-19 | 継続 | (direct)・Bing優位の実態 | GA4参照元 | 毎週 |
| W-20 | 継続 | 指名検索「防音ラボ」 | GSCクエリ・GA4イベント | 毎週 |
| W-25 | 継続 | GSC「インデックス登録済み」ページ数の推移（基準102件、10/7〜）。判定は11/2（S-09） | GSC UI「ページのインデックス登録」 | 毎週記録・2026-11-02判定 |

---

## 短期（次回GSCエクスポートで確認）

### W-06 Tier B記事の選別・拡充＋本音と建前リライトの効果測定（2026-10-06に旧W-09を統合）

どちらも同じGSCページ表で記事単位の表示・CTR・順位を見る作業で、対象記事も重なる（Tier B作業シート70本のうち約29本が`archive/honne-tatemae-rewrite-survey.md`の記載記事と重複。slug一致ベースの概算）ため、1項目にまとめて同時進行する。

- [ ] **(A) 本音と建前リライトの効果測定**（旧W-09、2026-09-05実施。Tier1 23・Tier2 30・Tier3 15の計68記事）: W42の7日表を基準値にして、W43以降で表示・CTR・順位の変化を見る。`construction-types-cost-comparison`はCTR0%からの改善が最も見えやすい。W41は最初の7日データで、リライト前との比較はできない
  - 2026-10-13 W42基準値（7日表）: 対象の約70本（`archive/honne-tatemae-rewrite-survey.md`のTier1〜3の表から抽出。見出しの68本と数本ずれる概算）のうち、W42のページ表に出たのは**7本のみ**（合計クリック5・表示39）。内訳: `bass-trap-installation-guide` 5クリック/表示23/9.3位、`construction-types-cost-comparison` 表示5/77.4位、`piano-soundproof-mortgage-tax-guide` 表示4/14.5位、`farmland-prefab-streaming-room-legal` 表示3/10.3位、`proofroom-humidity-airconditionlist` 表示2/5.0位、`diy-led-acoustic-panels`・`futon-cardboard-karaoke-booth` 各表示1。残り約64本は表示0。**W43以降は「表示が出た本数」と「表示の合計」を比べる**（記事単位のCTRは母数が足りない）。順位が70位台の`construction-types-cost-comparison`ではCTR改善は測れない
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
  - 2026-10-13 W42（7日）: ページ表示5→44・順位19.2→68.2・クリック0。「ノイズ アース」「アース ノイズ 対策」「ノイズ アース 線」など**アース系クエリ約10種が55〜84位で新規出現**（各3〜5表示）。施策の効果というより表示母数の拡大で、需要はあるが評価が低い段階。GA4は11セッション（W41=16）でほぼBing。小手先の語句追加では動きにくいため、SERPの目視比較が先（`w42-weekly-task.md` §3 タスクB。判定はW44〜W45）

### W-11 wifi-connection-guideのタイトル調整（2026-09-17実施）

- [ ] CTR・順位のさらなる変化を確認する（W39時点では表示170・クリック2・CTR1.18%・順位9.25とやや悪化、継続観察）
  - 2026-10-04 W41（7日）: 表示13・クリック0・順位7.77。順位は上がったがクリック0
  - 2026-10-13 W42（7日）: 表示9・クリック0・順位2.8。順位は9.25→7.77→2.8と継続して改善（タイトル調整の効果は「順位は上がった」と結論づけてよい）。CTRは母数が9表示で判断できないためW44まで保留

### W-12 指名検索記事のAI Overview対策リライト（2026-09-30実施）

`mansion-instrument-practice-time-rules`（「マンション 楽器 何時まで」順位8.55だがCTR0%）。SERP目視調査でAI概要（出典「STUDIO楽」）にクリックを奪われていると判明したため、一次情報とQ&A構造への書き換えを実施した。追加内容: ①国交省「マンション標準管理規約」に基づく使用細則の実例文言・賃貸募集の3区分（禁止／条件付き可／制限なく可）を追加（詳細型の本音への対応）、②「よくある質問」セクション（5問）を新設し、すでに苦情を受けている読者向けの誘導も追加（ユーザーの声型の本音への対応）。この「詳細型／ユーザーの声型」判断ロジックは`bouon-research` skillに恒久ルールとして追記済み、今後の直接回答型クエリ記事にも適用する。

- [ ] 「マンション 楽器 何時まで」のCTR・順位変化を確認する。AI概要が変わらず占有し続ける場合、Q&A構造の効果は限定的と判断し、他の一次情報強化策を検討する
  - 2026-10-04 W41（7日、施策は9/30実施のため直後の観測）: ページ表示24・順位9.42・クリック0。「マンション 楽器 何時まで」表示8・順位9.38、「何時 まで」表示4・順位7.5、いずれもクリック0。再クロール前後の可能性が高く、判断はW42〜W43の7日データで行う
  - 2026-10-13 W42（7日）: ページ**表示24→50（約2倍）・順位9.4→7.4・初クリック1**。「マンション 楽器 何時 まで」は表示10・1クリック（CTR10%）、「何時まで」表記は表示9・0クリック。9/30のQ&A化から1週間の初動で、まだ判定しない。W43の7日データまで見る。`l.threads.com`からの初流入2セッション（エンゲージ0・滞在0秒）もこのページ
- 関連: Threads初回投稿（クエリ疑問オープナー型）の起点クエリ。`.workspace/_sns-post/archive/topic-index.md`参照

### W-21 `soundproof-material-spec-chart`の入口化（2026-10-06実施、T-05）

W41でbing経由32セッション（W40は10）・エンゲージメント率88%・滞在約65秒だった記事から次の読み物へ誘導するため、出リンク4本（`bass-trap-installation-guide`・`diy-wall-soundproofing-room-guide`・`soundproof-sheet-heavy-diy-tips`・`bouon-osusume-hikaku`と`soundproof-room-price-market`）と、DIY系2記事からの被リンク2本を追加した。詳細は`archive/task-list-18.md`。

- [ ] W42〜W44のGA4で、この記事のLPセッション数（W41=32）・エンゲージメント率（W41=88%）・滞在時間（W41=約65秒）が維持されるか、`related_click`・内部リンクのクリックイベントが出ているかを確認する。32件が一過性の可能性もあるため、セッションが10前後に戻っても施策の失敗とは判定しない
- [ ] W42以降のGSC 7日表に`soundproof-material-spec-chart`と追加リンク先（`bass-trap-installation-guide`など）の表示が出るかを見る。リンク先側のセッションが増えていれば導線は機能している
  - 2026-10-13 W42: GA4で**35セッション（bot疑い除外後34）・Bing 29・エンゲージ97%・平均72秒**。W41（32件・88%・約65秒）を維持。GSCは表示5・順位5.0・クリック0でBing依存の流入。リンク先では`bass-trap-installation-guide`がGSC 5クリック・表示23・9.3位（GA4は7セッション・エンゲージ100%）。`related_click`等のイベントは今回のGA4ファイルに列がなく未確認（次回エクスポートでイベント別の表を足す）

### W-24 補助金エリア記事の統合先`soundproof-subsidy-check-guide`の表示・順位（2026-10-06実施、旧W-10の後続）

`soundproof-subsidy-tokyo-osaka`を`soundproof-subsidy-check-guide`へ統合し、旧URLを301にした（`public/.htaccess`・`astro.config.mjs`）。統合先には東京・大阪の具体例の表、窓リノベ2026の上限100万円への更新、米国のデータセンター騒音の節を追記した。詳細は`archive/weekly-task-archive-20261006.md`のW-10。デプロイ日: 2026-10-06。

- [x] 2026-10-06 デプロイ後、旧URL`/ja/money/soundproof-subsidy-tokyo-osaka/`が本番で`301`→`soundproof-subsidy-check-guide`になることをcurlで確認済み
- [x] 2026-10-06 統合先のGSC URL検査でインデックス登録をリクエスト済み（ユーザー、T-17。`archive/task-list-21.md`）
- [ ] W42（基準値）・W43のGSCページ表で、`soundproof-subsidy-check-guide`の表示・順位を見る（W41は表に出ていない。W43の確認は`schedule-task.md` S-07で行う）。「防音工事 補助金」「データセンター 騒音」などの新規クエリの出現も合わせて見る
  - 2026-10-13 W42基準値: `soundproof-subsidy-check-guide`は**表示0**（統合・301は10/6デプロイから4日、インデックス登録待ち）。W43で出現を確認する（S-07）
- [ ] 判定: メインクエリ（「東京 防音 工事 補助金」）を追わない方針に変えたため、順位改善は判定基準にしない。表示が出始めるか、内部リンクからの回遊（`related_click`）が出るかで見る

### W-26 中古・買取クラスタ: 総合ページの新設と中古記事の予算10万円軸リライト（2026-10-13実施）

「防音室 予算10万円」の検索・知恵袋が目につくため、`money/used-soundproof-room-buying-guide`を「予算10万円で、元の製品から中古で探す製品を選ぶ」軸に書き直した（slug不変）。主張は、中古で狙うのは元値10万円前後の組み立て式（だんぼっち・OTODASU）、セフィーネ等100万円クラスは運搬・解体・再組立費で総額が50万円を超えやすく公式レンタル（音レント）が現実的、の2点。あわせてクラスタの入口として`money/soundproof-room-buy-rent-sell-guide`（買う・借りる・売る総合ページ、カバー画像あり）を新設し、中古・買取・レンタル・リースの4記事から戻りリンクを追加した。デプロイ日: 未（デプロイ後に記入）。

- 対象URL: `/ja/money/used-soundproof-room-buying-guide/`、`/ja/money/soundproof-room-buy-rent-sell-guide/`。戻りリンクを足した`soundproof-room-buyback-guide`・`soundproof-room-rental-lease`・`soundproof-room-rental-cost`も回遊の確認対象
- 基準値（中古記事、3か月累計・2026-09-26時点。旧URL分は含まない）: 表示59・クリック1・順位27.76、GA4 3週で7セッション、被リンク4。**W42の7日表を基準にしてW43以降と比べる**
  - 2026-10-13 W42基準値（7日表）: `used-soundproof-room-buying-guide`は**表示3・順位30.3・クリック0**。クエリは「防音室 中古」が1表示・61位のみ。総合ページ`soundproof-room-buy-rent-sell-guide`は未デプロイ・未登録のため表示0
- [ ] ユーザー: デプロイ後、GSC URL検査で2本（総合ページ・中古記事）のインデックス登録をリクエストし、`schedule/2026-11-02-indexed-count-check.md`の「申請記録」へ記録する（W-25）
- [ ] W43・W44のGSCで、「防音室 予算 10万円」「中古 防音室」「だんぼっち 中古」「オトダス 中古」などのクエリの表示・順位を見る。総合ページが新規URLとして表示に出始めるか（インデックス登録のずれは1〜2週見込む）
- [ ] W43・W44のGA4で、総合ページ→中古記事・レンタル記事への回遊（`related_click`・内部リンクのクリック）を見る。総合ページ経由で2ページ目に進むセッションが出ていれば導線は機能している
- [ ] 判定: 中古記事の順位が27位前後から改善するか、予算10万円系クエリで表示が出るかで見る。クリック数だけでは判断しない（表示数が細い）
- 保留中の判断: `soundproof-room-buyback-guide`を統合検討から外し、総合ページから送る単独記事として残すか（`re-create/consolidation-candidates.md`）。トップの入口カード（`money-market`）に総合ページを入れるかは、`bouon-hub-cards`の運用方針に沿って後日判断（今回は`hub`未設定）

### W-27 `proofroom-humidity-airconditionlist`に加湿の要否・温湿度計・結露の時期を加筆（2026-10-13実施）

統合先案だった記事を単独の完成記事として残す判断をし、冬の乾燥が楽器と健康に関わること、防音室内に温湿度計を置くこと、加湿が必要な時期、結露が起きやすい時期（冬と梅雨〜夏）を追記した（slug不変、`lastmod`2026-10-13）。数値は、楽器別の適正湿度の目安と、水蒸気量・露点の計算値のみ。メーカー公式の推奨値は未確認。これにより、`soundproof-room-pollen-protection`の統合は見送り（`re-create/consolidation-candidates.md`）。

- 対象URL: `/ja/soundproof-room/proofroom-humidity-airconditionlist/`
- 2026-10-13 W42基準値（7日表）: ページ**表示2・順位5.0・クリック0**。加湿・湿度・結露・乾燥を含むクエリはW42のクエリ表（40行）に**1件も出ていない**。冬の需要が立ち上がる前の基準として記録
- [ ] ユーザー: デプロイ後、GSC URL検査でインデックス登録をリクエストし、申請記録（W-25）へ記録する
- [ ] W42（基準値）・W43・W44のGSCで、「防音室 加湿器」「防音室 湿度」「防音室 結露」「防音室 乾燥」などのクエリの表示・順位を見る。加湿の話は冬に需要が立ち上がるため、11〜12月のデータでも継続して見る（季節要因を考慮し、10月の数値だけで効果を判断しない）
- [ ] 判定: 新規クエリ（加湿・温湿度計・結露）の出現と、冬の入口で表示が増えるか。順位が動かなくても、表示の新規クエリが出ていれば加筆の方向は合っていると見る

### W-28 `creator/`のクロール済み・インデックス未登録19本の作り直し（2026-10-13〜、表示の多い順に着手）

`index-none/表.csv`（2026-10-13取込、現役記事98本）で、`creator/`の初期記事19本が「クロール済み - インデックス未登録」のまま。ユーザー判断で、再構築は`creator/`の未登録だけを最優先にする（登録済みは後回し）。登録済み79本と比べて、本文の長さ（約3,100字）・被リンク（中央値3本）に差はなく、9/5〜9/6に加筆した記事も未登録のまま。公開時期（1〜6月）とテーマの広さで分かれていた（7月公開の一つの疑問に答える記事は27本すべて登録）。作業の進め方と対象一覧は`task-list.md` T-26。

- 作業順（16か月の表示順）: `streaming-pc-fan-noise-mic`（68）→ `voice-chat-soundleak-fix`（28）→ `soundproof-rental-life-streamer`（13）→ `parenting-streamer-soundproof`（12）→ `asmr-external-noise-elimination`（10）→ 以降は表示8以下の14本
- **2026-10-13 見直し（ユーザー承認。案は `re-create/cluster-streamer.md` §4）**: 19本を「今すぐ作り直す11本」と「作り直さない8本（11/16の判定まで保留）」に分ける。統合候補の8本（`streamer-soundproof-budget-roadmap`・`streamer-soundproof-timing`・`streamer-soundproof-rental-share`・`soundproof-rental-vs-diy-streamer`・`streamer-rental-preview-checklist`・`kominka-renovation-streaming-room`・`streamer-regional-studio-move`・`utaite-vs-streamer-soundproof`）は、作り直してから統合すると手戻りになるため
  - **2026-10-13 追記**: 作り直さない保留8本のうち7本（`streamer-soundproof-budget-roadmap`・`streamer-soundproof-timing`・`streamer-soundproof-rental-share`・`soundproof-rental-vs-diy-streamer`・`streamer-rental-preview-checklist`・`kominka-renovation-streaming-room`・`utaite-vs-streamer-soundproof`）は、ユーザー判断で11/16を待たずに統合を実行した（`re-create/cluster-streamer.md` §10）。残る1本の`streamer-regional-studio-move`は、古民家の記事を吸収して書き直した（統合先）。W-28の対象は、作り直す11本と、書き直し済みの`streamer-regional-studio-move`の登録確認になる。統合先の`vtuber-soundproof-environment-complete-guide`は、購入タイミングの節を追加済み（作り直しはこれから）
  - 作り直す11本の順: `one-room-streaming-soundproof`（ハブカード所属・旧URL含め238表示） → `streaming-pc-fan-noise-mic` → `streaming-mic-noise-room`（Bingの反響の束） → `vtuber-soundproof-environment-complete-guide` → `voice-chat-soundleak-fix` → `parenting-streamer-soundproof` → `bourentakl-streamer-settingsetubi`（回線・電源に絞る） → `asmr-external-noise-elimination` → `asmr-vtuber-booth-guide` → `soundproof-rental-life-streamer` → `game-streamer-sound-types`（打鍵音はT-25の枝Aへ。T-25と調整）
  - 1本ごとの「答える疑問」の案は `cluster-streamer.md` §4 の表。作り直す前に、ユーザーが確認する
  - **2026-10-13 方針縮小（ユーザー承認）**: 「作り直す11本」を1本ずつ作り直す計画は、近い話題を統合して土台9本を作り直す計画に置き換える。グループと進捗は `task-list.md` T-26。統合で吸収されたURLは、本項目の対象から外す
  - **2026-10-13 実施（グループ1・2・8）**: `voice-chat-soundleak-fix`・`night-streaming-neighbor-tips`（→ `one-room-streaming-soundproof`）、`streaming-mic-noise-room`（→ `streaming-pc-fan-noise-mic`）、`vtuber-soundproof-environment-complete-guide`（→ `streamer-soundproof-room-comprehensive-guide`）を統合して削除。W-28の対象は、残る作り直し対象に、統合後の土台（`one-room-streaming-soundproof`・`streaming-pc-fan-noise-mic`）を加えたものになる。作り直しの代わりに、この統合で本文を書き直した
  - **2026-10-13 第3弾（全9グループ完了）**: 作り直し対象の残り（`bourentakl-streamer-settingsetubi`・`soundproof-rental-life-streamer`・`asmr-vtuber-booth-guide`・`parenting-streamer-soundproof`・`streamer-regional-studio-move`）のうち、統合で消えた5本は対象から外れた。土台になった記事（`streamer-rental-selection-guide`・`asmr-external-noise-elimination`・`parenting-streamer-soundproof`・`collab-streaming-soundproof-space`・`farmland-prefab-streaming-room-legal`・`female-streamer-privacy-soundproof`）の登録状態は W-34 で確認する。残る個別の作り直し対象は `game-streamer-sound-types`（振り分け記事への役割変更。T-25と調整）のみ
- 基準値（2026-10-13時点・全19本）: 最終クロール日が9/26以降は2本のみ（`streaming-pc-fan-noise-mic`が10/10、`soundproof-rental-vs-diy-streamer`が9/27。どちらも未登録）、残り17本は9/17以前
- [ ] 1本ごとに作り直す前に、その記事が答える疑問を1行で決める（`task-list.md` T-26）。T-25の入口（打鍵音など）と範囲が重なる記事は、先に役割分担を決める
- [ ] 作り直した記事ごとに、実施日・疑問・変えた点を本項目へ1行追記する（`lastmod`を更新、slugは変えない）
- [ ] ユーザー: 作り直した後に限り、GSC URL検査でインデックス登録をリクエストし、申請記録（W-25、`schedule/2026-11-02-indexed-count-check.md`）へ記録する。作り直し前の再申請は、前回の申請で変わらなかったため行わない
- [ ] 毎週のGSC UIで、19本の「前回のクロール」日と状態（登録済みに移ったか）を確認する。クロール日が申請後も動かない記事は、サイト側の評価の問題として扱う
- [ ] 判定（11/16前後）: 作り直した記事と未着手の記事で、登録された本数に差が出たかを見る。差が出なければ、作り直しの方向（疑問の絞り方）が合っていないと判断し、T-26の方針を見直す
- 保留: `business/`の未登録9本は、一次情報不足が原因というユーザー仮説。`creator/`の後に、本文の一次情報の有無を確認してから着手を決める

### W-29 re-createバッチ06: リライト7本の効果測定（2026-10-13実施）

`archive/re-create-batch-01-08-20261013/batch-06.md`の#53・#54・#55・#57・#58に加え、#56・#59（統合せず単独でリライト）をリライトした（#60は同日のチェロ統合でリライト済み）。slugは変えていない。#55は統合案を取り下げ、旧URL `/posts/treadmill-soundproofing-vibration-control/`（16か月で表示97・順位8.9）の301先を `/ja/knowledge/` から `/ja/diy/treadmill-apartment-soundproofing-layering/` に変更した（`public/.htaccess`・`astro.config.mjs`）。

- 対象URLと見る指標（W42基準値は7日表。該当が無い記事は表示0）
  - `/ja/knowledge/sound-sensitivity-misophonia-environment-guide/`: 表示3・順位31.67。「聴覚過敏 引越し」「ミソフォニア 家の中」「聴覚過敏 違い」系クエリの出現（Bing「聴覚過敏」50表示・9位が起点）
  - `/ja/diy/diy-wall-soundproofing-room-guide/`: 表示0。「防音壁」「防音室 自作」「防音室 DIY」系（Bing「防音壁」49表示・8.7位）
  - `/ja/diy/renter-parent-house-soundproofing/`: 表示0。「賃貸 防音対策 壁を傷つけない」系（Bingで1位）
  - `/ja/diy/treadmill-apartment-soundproofing-layering/`: 表示0。「ランニングマシン うるさい／防音」系と、旧URLの301変更後の表示の戻り
  - `/ja/money/soundproof-contractor-selection-guide/`: 表示0。「防音工事 業者の選び方」（GSC 16か月で16表示・30位）
  - `/ja/knowledge/d-value-truth-and-myths/`: 表示0（旧URLは16か月で表示19・6.05位）。「db と d値 の違い」（16か月で表示22・34.6位）、「d値とは」系
  - `/ja/money/soundproof-room-buyback-guide/`: 表示0。「防音室 買取」（16か月で表示14・51.6位）と「防音室 買取 東京／兵庫／九州」系
- [ ] ユーザー: デプロイ後、GSC URL検査で7本のインデックス登録をリクエストし、申請記録（W-25）へ記録する
- [ ] W43・W44・W45のGSCで、上記クエリの表示・順位を見る
- [ ] 判定: 対象クエリの新規出現と順位の改善（目安: 表示が出ること、30位台の記事が20位台に入ること）。動きが無い記事は需要ミスマッチを疑う（`project_indexing_vs_demand_mismatch`の考え方）

### W-30 re-createバッチ07・08: リライト7本の効果測定（2026-10-13実施）

`archive/re-create-batch-01-08-20261013/batch-07.md`の#62・#63・#64・#65・#69・#70と、`archive/re-create-batch-01-08-20261013/batch-08.md`の#73をリライトした（#61・#66・#67は同日に別作業で加筆済み）。slugは変えていない。#69・#70は2026-10-13にnoindexを解除（W-31）。

- 対象URLと見る指標（W42基準値は7日表。該当が無い記事は表示0）
  - `/ja/soundproof-room/onetouch-soundproof-wall-review/`: W42は表示22・順位10.95。「ワンタッチ防音壁 評判／買う前／賃貸／設置」系（16か月で表示333・13.2位）
  - `/ja/business/datacenter-soundproof-technology-facts/`: 表示0（16か月で70・10.8位）。「データセンター 騒音対策」系
  - `/ja/soundproof-room/hsp-soundproof-room-guide/`: 表示0（旧URLは16か月で44・9.5位、クリック8）
  - `/ja/knowledge/hsp-self-check-sound-sensitivity/`: 表示0（16か月で27・29.5位）。「音に敏感な人の特徴」系（Bing 3.2位）
  - `/ja/soundproof-rental/pet-noise-soundproof-measures/`: 表示0（16か月で22・12.95位）。「ペット 騒音／鳴き声／足音」系。GSC・Bingとも「ペット」系クエリがほぼ無く、需要が小さい可能性がある
  - `/ja/knowledge/soundproof-culture-japan-vs-america/`・`/ja/soundproof-rental/rental-proofroom-contractcheck/`: 2026-10-13にnoindexを解除（W-31）。旧URLの16か月実績は450表示・3.9位、1,554表示・11.5位
- [ ] ユーザー: デプロイ後、GSC URL検査で、この項目の対象のうちnoindex解除済みの2本を含む7本のインデックス登録をリクエストし、申請記録（W-25）へ記録する（noindex解除分の手順はW-31）
- [ ] W43・W44・W45のGSCで、上記クエリの表示・順位を見る
- [ ] 判定: 対象クエリの新規出現と順位の改善。動きが無い記事は需要ミスマッチを疑う

### W-31 noindex解除4本と、配信系の旧URL5本の転送先変更の効果測定（2026-10-13実施）

`re-create/cluster-streamer.md` §5・§6の案を、ユーザー承認のうえ実施した（コンテンツのリライトは各バッチの記録を参照）。

- **noindexを解除した4本**（`noindex: true`を削除し、`astro.config.mjs`のサイトマップ除外からも外した）。16か月の旧URLを含む実績が基準値
  - `/ja/soundproof-room/bouon-humidifier-comparison/`: 旧URL `/posts/soundproof-room-humidifier-guide/`が425表示・53クリック。クエリ「防音室 加湿器」は227表示・23クリック・6.47位。本文を、配信ブース限定から汎用の「防音室の加湿器の選び方」へ書き直した（公式仕様で確認できた機種のみ記載。アフィリエイトカード `humidifier-vaporizer-daikin`は、ダイキン MCK70Yが加湿空気清浄機（最大700mL/h）で防音室向けではないため、記事から外した）
  - `/ja/soundproof-rental/rental-proofroom-contractcheck/`: 旧URL含め1,592表示・34クリック・11.5位
  - `/ja/diy/diy-vocal-soundproof-mask/`: 旧URL含め160表示・22クリック。出典のないdB値を「相対評価」に直した
  - `/ja/knowledge/soundproof-culture-japan-vs-america/`: 450表示・8クリック・3.9位
- **noindexを維持した1本**: `/ja/local/sendai-soundproof-rental-guide/`（出典不明の主張が多いため。T-28）
- **転送先を変えた旧URL5本**（`public/.htaccess`・`astro.config.mjs`を同時に変更。二重の301なし）
  - `/posts/streamer-proofroom-choicetech/`（363表示・7クリック・26.0位）: `/ja/creator/` → `/ja/creator/streamer-soundproof-room-comprehensive-guide/`
  - `/posts/streamer-trouble-rule/`（241表示・7クリック・8.9位）: `/ja/soundproof-rental/` → `/ja/creator/streamer-noise-complaint-response/`
  - `/posts/gamer-bouon-room-select/`（73表示・3クリック・20.3位）: `/ja/soundproof-room/` → `/ja/creator/streamer-soundproof-room-comprehensive-guide/`
  - `/posts/vtuber-heat-noise-management/`（56表示・6クリック・10.1位）: `/ja/creator/` → `/ja/soundproof-room/proofroom-aircondition-select/`
  - `/posts/voice-only-streaming-optimization/`（54表示・1クリック・13.7位）: `/ja/creator/` → `/ja/creator/streaming-audio-first-low-budget/`
- 変更日: 2026-10-13（デプロイ日は未確定。デプロイ後に追記する）
- [ ] ユーザー: デプロイ後、サイトマップをGSCで再送信し、noindexを解除した4本と、転送先を変えた3本の受け皿（総合ガイド・苦情対応・音質優先）のインデックス登録をリクエストして、申請記録（W-25）へ記録する
- [ ] W43〜W46のGSCで、次を見る
  - 4本: 掲載（インデックス）の回復、表示・クリック・順位。特に「防音室 加湿器」「防音マスク ゲーム 自作」「退去時 防音室 費用」系
  - 旧URL5本の受け皿: 受け皿URLでの表示・順位。転送先が変わると、旧URLの評価の引き継ぎに数週間かかる
- [ ] 判定（11/16前後）: noindex解除から4週間たっても掲載されない記事は、サイト側の評価（W-25）の問題として扱う
- 注意: noindexを外しても、掲載の回復には数週間かかる。旧URLの実績は、2026-09のGoogle低迷より前の数字で、現在の順位ではない

### W-32 配信者クラスタの統合8本の効果測定（2026-10-13実施）

`re-create/cluster-streamer.md` §10 の統合を、ユーザー承認のうえ実施した。廃止した8本は、7本が「クロール済み - インデックス未登録」、1本（ダンス）は登録の記録なし。順位を失うリスクはなかった。

- 統合先と、見る語（基準値は統合前。統合先はいずれも統合前の表示を持つ）
  - `/ja/creator/streamer-rental-selection-guide/`（登録済み。16か月で50表示）: 「配信者 賃貸 内見」「配信者向け賃貸」「賃貸 配信 防音 内見」系。旧URL `/posts/bourenatal-naikencheck/`（96表示・1クリック・8.65位）の受け皿
  - `/ja/creator/streamer-soundproof-room-comprehensive-guide/`（登録済み。17表示）: 旧URL `/posts/streamer-lowbudget-simula/`（85表示・3クリック・7.54位）の受け皿。「配信 防音 予算」系
  - `/ja/creator/vtuber-soundproof-environment-complete-guide/`（未登録。旧URL含め128表示）: 「配信者 防音室 買うタイミング」系。**2026-10-13に `streamer-soundproof-room-comprehensive-guide` へ統合済み（W-33）**。以降は総合ガイドで見る
  - `/ja/money/soundproof-room-rental-cost/`: 「防音室 レンタル」系（時間貸し・シェアスタジオの形態を追記）
  - `/ja/creator/streamer-regional-studio-move/`（未登録）: 「古民家 配信 防音」「地方移住 配信」系
  - `/ja/diy/treadmill-apartment-soundproofing-layering/`: 「ダンス 配信 足音」「フィットネス 配信 階下」系を追加（旧URLの受け皿の16か月は表示97・8.9位）
  - `/ja/creator/singer-instrumentalist-stream-soundproof/`（状態不明）: 「歌ってみた 防音」「宅録 防音」系
- 同時に直した既存の旧URL転送4本（二重の301を避けた）: `/posts/bourenatal-naikencheck/`・`/posts/streamer-lowbudget-simula/`・`/ja/creator/streamer-soundproof-evolution-story/`・`/ja/column/others/kominka-renovation-streaming-room/`
- 変更日: 2026-10-13（デプロイ日は未確定。デプロイ後に追記する）
- [ ] ユーザー: デプロイ後、GSC URL検査で、統合先のうち未登録の記事（`vtuber-soundproof-environment-complete-guide`・`streamer-regional-studio-move`・`singer-instrumentalist-stream-soundproof`）と、登録済みの統合先（賃貸選び・総合ガイド）の再クロールをリクエストし、申請記録（W-25）へ記録する。作り直し前の再申請は行わない（W-28の方針）
- [ ] W43〜W46のGSCで、上記の統合先の表示・順位と、旧URLの受け皿に表示が戻るかを見る
- [ ] 判定（11/16前後）: 統合先の表示が統合前（旧URL分を含めた合計）を下回らないか。下回る場合は、吸収した節の見出し・内容を見直す
- 注意: 統合先に吸収した内容は、出典を確認できた範囲に限っている。統合先に残る課題（賃貸選びガイドの相場・事例・ブランド、VTuber防音室ガイドの税・売却額）の出典確認は、W-28の作り直しで行う
---

---

## 継続観察（毎週のGA4/GSCで見る。次回データがなくても急がない）


### W-33 配信者クラスタの統合・第2弾の効果測定（2026-10-13実施）

`re-create/cluster-streamer.md` §11のグループ1・2・8を実施した（§12）。吸収した4本のうち、`voice-chat-soundleak-fix`・`streaming-mic-noise-room`・`vtuber-soundproof-environment-complete-guide` は「クロール済み - インデックス未登録」、`night-streaming-neighbor-tips` は登録状態が不明。順位を失うリスクは小さい。

- 統合先と、見る語（基準値は統合前）
  - `/ja/creator/one-room-streaming-soundproof/`（未登録。旧URL含め238表示・4クリック。ハブカード所属）: 「ワンルーム 配信 防音」「配信 声 漏れる」「深夜 配信 近隣」「ボイスチャット 音漏れ」系。旧URL `/posts/gamesteram-proofroom-soudflash/` と `/ja/creator/streamer-discord-noise-cancel-vs-physical/` の受け皿に変わった
  - `/ja/creator/streaming-pc-fan-noise-mic/`（未登録。68表示）: 「配信 マイク ファン音」に加え、Bingの「反響」の束（マイク 部屋の反響抑えたい ほか）と、旧URL `/ja/use-case/streaming-mic-soundproof-guide/` の受け皿
  - `/ja/creator/streamer-soundproof-room-comprehensive-guide/`（登録済み。17表示）: 「配信者 防音室 買うタイミング」「配信者 防音室 節税」系。旧URL `/posts/vtuber-soundproof-environment-complete-guide/`（旧URL含め128表示）の受け皿に変わった
- 変更日: 2026-10-13（デプロイ日は未確定。デプロイ後に追記する）
- [ ] ユーザー: デプロイ後、GSC URL検査で、未登録の統合先2本（`one-room-streaming-soundproof`・`streaming-pc-fan-noise-mic`）と、登録済みの総合ガイドの再クロールをリクエストし、申請記録（W-25）へ記録する
- [ ] 毎週のGSCで、上の語の表示・順位と、2本の登録状態（登録済みに移ったか）を確認する
- [ ] 判定（11/16前後）: 統合した土台が登録され、吸収した語の表示が土台に出たか。出なければ、土台の疑問の絞り方を見直す


### W-34 配信者クラスタの統合・第3弾の効果測定（2026-10-13実施）

`re-create/cluster-streamer.md` §11のグループ7・5・3・6・9・4を実施した（§13）。吸収した7本のうち、未登録は `bourentakl-streamer-settingsetubi`・`soundproof-rental-life-streamer`・`asmr-vtuber-booth-guide`・`streamer-regional-studio-move`、`sleeping-parent-game-streaming-guide`・`podcast-collab-recording-acoustics`・`vtuber-family-privacy-rules` は登録状態が不明（未登録の一覧にも10/6の登録済みにも無い）。

- 土台と、見る語（基準値は統合前）
  - `/ja/creator/streamer-rental-selection-guide/`（登録済み。50表示）: 「配信者 賃貸 回線」「配信 賃貸 電源」「防音賃貸 配信者」系。旧URL `/posts/bourentakl-streamer-settingsetubi/` など（旧URL含め114表示・3クリック）の受け皿に変わった
  - `/ja/creator/asmr-external-noise-elimination/`（未登録。10表示）: 「ASMR 防音」「ASMR 外音」「ASMR 防音ブース」系。旧URL `/posts/asmr-soundproof-environment-guide/`（121表示・8クリック）と `/posts/asmr-proofroom-guide/`（120表示・8クリック）の転送先候補。受け皿が登録されてから転送先を変える（cluster-streamer §5）
  - `/ja/creator/parenting-streamer-soundproof/`（未登録。12表示・2クリック）: 「配信 子供 うるさい」「実家 ゲーム実況 親」「ルームシェア 配信」系
  - `/ja/creator/collab-streaming-soundproof-space/`（状態不明。2表示）: 「コラボ収録 部屋」「ポッドキャスト マイク 2人」系
  - `/ja/creator/farmland-prefab-streaming-room-legal/`（登録済み。95表示・2クリック・11.2位）: 既存の語（農地 プレハブ 配信）を落とさないこと。追加した古民家・地方移住の語は「古民家 配信 防音」「地方移住 配信」
  - `/ja/creator/female-streamer-privacy-soundproof/`（登録済み。48表示）: 既存の語に加えて、「親フラ 防止」「VTuber 身バレ 実家」系。旧URL経由155表示・9クリックの受け皿
- 変更日: 2026-10-13（デプロイ日は未確定。デプロイ後に追記する）
- [ ] ユーザー: デプロイ後、GSC URL検査で、未登録の土台3本（`asmr-external-noise-elimination`・`parenting-streamer-soundproof`・`collab-streaming-soundproof-space`）と、登録済みの土台3本の再クロールをリクエストし、申請記録（W-25）へ記録する
- [ ] 登録済みの土台3本（賃貸選び・農地・身バレ）は、統合前の語の順位が落ちていないかを毎週確認する。落ちた場合は、吸収した内容が原因かを疑う
- [ ] 判定（11/16前後）: 土台が登録されたか、吸収した語の表示が土台に出たか

### W-15 GA4改善傾向の持続（W41〜）

- [ ] セッション151→207（+37%）、エンゲージメント率43.0%→56.5%、平均エンゲージメント時間39.6→54.5秒が次週以降も維持されるか。bot除外後の数値も合わせて確認する
  - 2026-10-13 W42: セッション207→303（+46%、1日あたり+67%）だが**Bingは横ばい（行合計130→122）**で、増加分はbot疑いのdirect（74→159、うち約80行が中国・シンガポール・米国発でエンゲージ3.8%・滞在1.0秒）、Teams、計測の付け替えが占める。エンゲージ率56.5→54.5%、平均滞在54.5→44.6秒。**「改善傾向の持続」とは言えない**。bot除外を適用したうえで読み直す（T-04、`w42-weekly-task.md`タスクH）。GA4の日数がW41=8日・W42=7日のため増減は目安

### W-16 AI系流入の追跡

- [ ] W41でchatgpt.com・openai・copilot.com・perplexity.aiの合計約14件（W40は約3件）。どの記事に着地しているか継続して見る
  - 2026-10-13 W42: AI系14→8（openai 4・chatgpt.com 3・copilot.com 1、perplexity 0）。減少。W41の増加は一過性だった可能性

### W-17 Teams経由流入

- [ ] `teams.public.onecdn.static.microsoft`経由8件（賃貸市場レポート系ページ）: Teams内で記事共有された形跡。B2B・法人層の関心か、一過性かを継続して見る
  - 2026-10-13 W42: Teams経由が約8→**34**。着地は`report-japan-soundproof-rental-market-needs` 16・`bouon-rental-market-guide` 9・`music-student-property-search-guide` 3・`proofroom-aircondition-select` 3。すべて日本発でエンゲージメント率約9割、平均滞在2〜7分の長いセッションが複数。社内共有で読まれている可能性が高い。増加傾向。出口の点検は`w42-weekly-task.md`タスクJ

### W-18 music-student-property-search-guideの順位推移

- [ ] 3か月累計で表示381・順位31・クリック0。圏外表示が増えただけで需要ミスマッチの可能性があるため、1週間単位の順位推移で判断する
  - 2026-10-04 W41（7日）: 表示6・順位47.3・クリック0。3か月累計の週平均（約29表示）より大幅に少なく、順位も悪化。W42以降も同水準なら需要ミスマッチ/圏外化と判断する
  - 2026-10-13 W42（7日）: **表示0**（W41=表示6・47.3位）。2週連続で細く圏外化が進んでいる。W43でも0〜数表示なら、判定を「需要ミスマッチ寄り」で終了する（`project_music_student_hub_strategy`の方針どおり単独記事は追加しない）。GA4ではTeams経由3セッション

### W-19 (direct)流入・Bing優位の実態

- [ ] セッション参照元の内訳を継続監視（`chatgpt.com`/`copilot.com`経由の新規流入も追跡。W39時点で計5セッション）
  - 2026-10-04 W41: bing約51%に対し、google系は約6%（GA4で約15行分、GSC 7日クリック8と整合）。**GSCはGoogleだけ**なので、流入の過半を占めるBingの実態はGSCでは見えない
  - 2026-10-13 W42: Bing 130→122（横ばい）・direct 74→159（うちbot疑い約80行）。Bingは依然として実質の検索流入の中心。参照元が`hub_entry`・`hub_cta`・`article_footer`になったセッションが29行あり、`Head.astro`のイベントパラメータ名`source`が流入元と衝突している疑い。**2026-10-13にパラメータ名を`link_source`へ変更済み（デプロイ待ち。次回GA4で当該行が0になるか確認）**

### W-20 指名検索「防音ラボ」

- [ ] W41（7日）は「防音ラボ」表示4・クリック1・順位8.5、トップページ`/ja/`は表示4・クリック1。W39で初クリック1件（表示42・順位7.21・CTR2.38%）。2026-09-30に記事フッターへ運営者バイライン（`/ja/about/`・X `@sasisi344`への導線）を追加したため、`author_byline_click`イベントの発生状況とあわせてクリック推移を継続観察する
  - 2026-10-13 W42（7日）: 「防音ラボ」表示2・順位7.5・クリック0、`/ja/`は表示3・クリック0（W41は表示4・クリック1）。母数が小さく、W41の1クリックは揺れの範囲
- [ ] Threads（@bouonlab）プロフィール整備・投稿開始後は、指名検索の増減との関連も見る

### W-25 GSC「インデックス登録済み」ページ数の推移（2026-10-07〜、判定は2026-11-02）

ユーザーが10月中、既存記事のリライト・再構築・内部リンク修正を1記事ずつ進め、その都度GSCでインデックス登録を申請する（終了日は未定、概算で10月中）。その効果を、GSCの「ページのインデックス登録」の**登録済みページ数**で見る。判定日と手順は`schedule-task.md` S-09（`schedule/2026-11-02-indexed-count-check.md`）。

- **基準値**: 102件（2026-10-06エクスポート）。**判定に使うのは、うち有効な89件（サイトマップ202URLのうち登録済み）**。残り13件は既に301の旧URLで、再クロールで自然に消える。参考: 2026-09-25は約100件。ただしレポートは約2週間遅れ（一覧の最新クロールは9/22）で、「12日で変化なし」とは言えない。記事の登録は80/193（約41%）、`local`は0/13。詳細は`schedule/2026-11-02-indexed-count-check.md`
- 判定日: 2026-11-02を中間判定、**11/16前後を最終判定**（レポートの遅れのため）
- [ ] 毎週のエクスポート時（10/10・10/17・10/24・10/31）に、登録済み件数を1行追記する（数字だけでよい。推移の途中経過を見るため）
  - 2026-10-06エクスポート（10/7確認）: 102（有効89）
- [ ] 申請した記事のURLと申請日を記録する（`schedule/2026-11-02-indexed-count-check.md`の「申請記録」へ。申請した記事と未申請の記事で、登録率に差が出るかを見るため）
- [ ] 2026-11-02に判定する（S-09）。判定基準は個別ファイルを参照
- 注意: リライトは**slugを変えない**ため、URLは変わらず、申請済みの記事は「登録済み」に移れる状態。一方、統合・301で旧URLが外れる分は登録済みの減少として出る可能性があるため、減少した場合は旧URLの扱いかを先に確認する

---

## 週次生データ（新しい順。直近3週分を保持し、古いものは`archive/weekly-task-archive-YYYYMMDD.md`へ移す）

### W42定点観測（GSC・GA4とも2026-10-04〜10-10）

> 詳細・改善タスク案は `w42-weekly-task.md`。GA4の日数はW41=8日間（9/26〜10/3）、W42=7日間のため、増減は目安。

GA4（防音Lab、2026-10-11再取得）:

| 指標 | W41 | W42 | 変化 |
|---|---|---|---|
| セッション | 207 | 303 | +46% |
| アクティブユーザー | 185 | 260 | +41% |
| エンゲージメント率 | 56.5% | 54.5% | -2.0pt |
| 平均エンゲージメント時間 | 54.5秒 | 44.6秒 | -18% |

- 増加分は実質の流入増ではない: Bingは横ばい（行合計130→122）。direct 74→159のうち約80行が中国・シンガポール・米国発のbot疑い（エンゲージ率3.8%・滞在1.0秒）。Teams約8→34。AI系14→8。
- **計測不具合**: 参照元が`hub_entry`・`hub_cta`・`article_footer`のセッションが29行。`Head.astro`がイベントパラメータ名`source`で送っていてGA4の流入元と衝突している疑い（`w42-weekly-task.md`タスクA）
- `l.threads.com`から初流入2セッション（`mansion-instrument-practice-time-rules`）
- `soundproof-material-spec-chart`: 35セッション・Bing 29・エンゲージ97%・平均72秒（W-21は維持）

GSC（7日同士、W41と比較可能）:

| 指標 | W41 | W42 | 変化 |
|---|---|---|---|
| クリック | 8 | 11 | +38% |
| 表示回数 | 218 | 265 | +22% |
| CTR | 3.67% | 4.15% | +0.5pt |
| 掲載順位（表示加重） | 18.8 | 25.2 | 悪化。`ground-loop-noise-basics`（表示5→44・順位19→68）を除くと16.7で改善 |

- クリックのあったページ: `bass-trap-installation-guide` 5（表示23・9.3位）、`mansion-instrument-practice-time-rules` 1（表示50・7.4位）、`onetouch-soundproof-wall-review` 1、`daiwa-house-jiyuku-soundproof-review` 1、`soundproof-room-moving` 1、`diy-soundproof-ventilation-heat-exhaust` 1、`family-home-soundproof-reno-negotiation` 1
- `ground-loop-noise-basics`: アース系クエリ約10種が55〜84位で新規出現（クリック0）
- S-06統合4記事・S-07統合先2記事・S-10統合先は表示0（基準値）

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
