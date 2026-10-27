# weekly-task アーカイブ（2026-10-06）

## W-01 404件数の減少確認（完了、2026-10-06）

- 内容: GSC 404件数（対応前2,592件、2026-09-16時点2,595件でほぼ横ばい）が、9/25の301化・410化後に減少しているか確認する（期限2026-10-05）
- 結果: 2026-10-06にユーザーがGSCで確認した2,526件は、エクスポートしたチャートCSV（最終日2026-09-21）の9/19〜9/21の値と一致する。つまりGSCの表示遅延で、**9/25の301化・410化より前のデータ**。チャート上の減少（9/7の2,578→9/15の2,544→9/19の2,526）は9/25の施策とは無関係
- 追加監査（2026-10-06）: エクスポートできた先頭1,000件を現行`public/.htaccess`に当てて突合した結果、999件は既にカバー済み（410が899件、301が100件。301の転送先100件はすべて`src/content/`に実在）。未カバーは`/upload/5833372137.m3u8`の1件のみ。本番へのcurlでも410・301が想定どおり返ることを確認済み。追加すべきマッピングは実質なし
- 結論: 「施策の効果で404が減ったか」は判定不能（GSCの404レポートが9/25以降に追いついていない）。W-03のインデックス登録・404件数の推移で、再クロール後の反映を待って確認する。W-01は判定の根拠データが揃わないままクローズ
- 残り: `/upload/`の扱いと、GSC側の反映確認は `task-list.md` T-08 に集約

## W-04 音大生向けシェアハウス地域別クエリ（完了、2026-10-06）

- 内容: 2026-09-22に構成を刷新し、2026-10-06に`music-student-property-search-guide`を1記事のまま全面再構成した（地域別の個別記事は作らない方針）
  - ①地名軸から音大キャンパス・最寄り駅軸へ（首都圏9キャンパス、関西4校を公式サイトで確認）、②「天王寺＝大阪音大」の誤りを訂正（大阪音大は豊中市庄内）、国立音大は立川市、京都市芸大は2023年10月に京都駅東部へ移転、otowaは板橋区小竹向原、③地名→通学圏の読み替え表・シェアハウスと単身防音賃貸の家賃比較表・FAQ5問、④`/local/`の5記事（東京・大阪・神奈川・広島・埼玉）からハブへ内部リンクを追加
  - 同日の追加修正: 「防音シェアハウスは供給が稀」との指摘を受け、ハブの軸を「ふつうのシェアハウスに防音室は置けるか」に変更。選択肢2を、許可・個室の広さ・床の耐荷重・搬入・契約期間・退去の6条件、個室別の占有率表、24か月費用比較（シェア個室＋音レント 約101万〜157万円／単身防音賃貸 約192万〜384万円）に差し替え
- 結果: 地域別記事は1記事に統合済みのため、地域別クエリを個別に追う目的は消滅。ユーザー判断（2026-10-06）で完了扱い。W41（7日）時点の観測は、「シェアハウス 音大生」22位・「中央区 音大生」36位・「渋谷 音大生」49位など各1表示で、`music-student-property-search-guide`は表示6・順位47.3・クリック0。逆相関（表示増・順位悪化）は確認できず、表示そのものが細かった
- **個別記事への昇格基準（恒久ルールとして残す）**: ある地域・キャンパスのクエリが、7日データで週10表示以上、または順位20位以内を連続2週続け、かつ実在する物件・サービスでその地域だけの記事が書ける場合に限り、個別記事を検討する。それまでは追加しない
- 引き継ぎ: ハブ記事の順位・表示の推移は W-18 が継続して見る。リライト後の「音大」「キャンパス名」クエリの出現はW-18の確認時に合わせて見る。音レント契約条件の事実確認は T-12

## W-03 リダイレクトのmeta refresh→301化・旧URL群の410化（完了、2026-10-06）

- 内容: 2026-09-25に`public/.htaccess`でmeta refreshを本物の301へ、旧URL群を410へ切り替えた。インデックス登録の未登録件数（対応前約3,000件）の減少、登録済み件数（対応前約100件）の増加を確認する項目
- 結果: ユーザーがGSCで未登録（404等）の件数が減少していることを確認済み（2026-10-06）。GSC 404チャートは最終日2026-09-21時点で9/25施策前のデータだったが、その後の減少をユーザーが確認したため完了扱い
- 補足: `.htaccess`の突合結果（エクスポート1,000件中999件はカバー済み、410が899・301が100）は上記W-01に記録。未カバーの`/upload/5833372137.m3u8`と`/upload/`の扱いは`task-list.md` T-08
- 残った懸念（W-03本文にあった2つ目のチェック項目）: 9月施策（グランドループ統合・カニバリクラスタA〜D）の301もmeta refresh問題の影響を受けていた可能性。W-07・W-08の確認時に、`.htaccess`で本物の301になっているかを合わせて見る

## W-05 Tier A内部リンク再強化（完了、2026-10-06）

- [ ] クロール・インデックス状況の改善が見られるか確認する（GSC「ページのインデックス登録」はエクスポートに含まれないため、判定は次回以降のUI確認とW42〜W44の7日表での表示有無で行う）
  - 2026-10-06 現状確認（Claude）: 対象44本（`archive/content-structure-tier-a-round2-20260916.md`の表）へのリンクは**全件が現行ソースに残存**。W41（7日）のGSCに出た対象は11/44本（`onetouch-soundproof-wall-review` 表示32・クリック1、`japan-soundproof-market-size` 13、`wifi-connection-guide` 13、`daiwa-house-jiyuku-soundproof-review` 10、`farmland-prefab-streaming-room-legal` 3、`hsp-self-check-sound-sensitivity` 3、`tokyo-bouon-whitekyuon-okudake-review` 3、ほか4本は各1表示）。施策前の同条件データがないため増減は判定不能。**W42の7日表との比較が最初の判定材料**。判定基準: W42〜W44で表示が出る対象本数が11本から増えていれば改善傾向とみなす
  - 2026-10-06 追加対応: 再スキャンで孤立2本（`creator/sleeping-parent-game-streaming-guide`・`diy/karaoke-box-soundproof-performance-guide`、いずれも9月公開の新規記事でW-14の対象）と希薄1本（`soundproof-rental/guitar-apartment-practice-guide`）を検出。本文中の文脈リンクを計6本追加して解消（孤立0、希薄は既知の2本のみ）。追加元: `creator/night-streaming-neighbor-tips`・`creator/family-home-soundproof-reno-negotiation`→sleeping-parent、`diy/futon-cardboard-karaoke-booth`・`soundproof-rental/home-theater-karaoke-soundproof-design`→karaoke-box、`soundproof-rental/saxophone-apartment-practice-guide`・`creator/singer-instrumentalist-stream-soundproof`→guitar。`pnpm build`成功（210ページ）。リンク元の`lastmod`は変更していない
  - 2026-10-06 第3ラウンド（Claude）: 集計に`<SmartLink slug>`形式を含めて再計測（従来は`/ja/…`形式のみで、`asmr-vtuber-booth-guide`は被リンク1→実際は3だった）。被リンク2本以下かつ施策対象・W41のGSCに表示のあった7記事に、文脈の合う記事から計14本の本文リンクを追加し、全7記事を被リンク3〜4本に引き上げた。追加元→先: `web-meeting-voice-soundleak-prevention`・`bedroom-telework-layout-soundproof`→`future-ssi-silent-speech-interface-revolution`（1→3）、`japan-bouonproof-marketnextasia`・`soundproof-market-esg-trend`→`japan-soundproof-market-size`（2→4）、`soundproof-rental-vs-diy-streamer`・`streamer-soundproof-room-comprehensive-guide`→`farmland-prefab-streaming-room-legal`（2→4）、`hsp-soundproof-room-guide`・`hsp-soundproof-curtain-guide`→`hsp-self-check-sound-sensitivity`（2→4）、`otodasu-voice-chat-test`・`danbotchi-diy-blueprints`→`tokyo-bouon-whitekyuon-okudake-review`（2→4）、`diy-soundproof-room-failures-solutions`・`renter-parent-house-soundproofing`→`onetouch-soundproof-wall-review`（2→4）、`streamer-rental-selection-guide`・`bouon-osusume-hikaku`→`wifi-connection-guide`（2→4）。全202記事で被リンク1本以下は0記事（被リンク2本の記事はまだ79本あり、次ラウンドの候補）。出リンク2本以下の記事は`datacenter-soundproof-technology-facts`・`privacy-pod-market-growth`の2記事。`pnpm build`成功（214ページ）。リンク元の`lastmod`は変更していない。判定基準は変わらず、W42〜W44で表示が出る対象本数が11本から増えるかを見る。施策前の同条件データがないため、効果判定の起点はW42

- 結果: 本文の内部リンク追加は3ラウンド（9/16の45記事、10/6の孤立・希薄6本、10/6の被リンク2本以下の7記事×14本）で実施し、被リンク1本以下は0記事になった。被リンク2本の記事が残り79本あるが、**クエリ強化のリライト時に、その記事の内部リンクも合わせて追加する**方針（ユーザー判断、2026-10-06）。効果判定（W42〜W44で表示が出る対象本数が11本から増えるか）は、W42以降のGSC 7日表で参考値として見る程度に留め、専用のW-NNは立てない

## W-07 カニバリクラスタA〜D統合（4記事へ集約、完了、2026-10-06）

- 内容: 2026-09-16にカニバリクラスタA〜D（7記事）を`owner-renovation-roi-simulation-tool`・`soundproof-room-rental-cost`・`rental-unit-soundproof-room`・`soundproof-room-size`の4記事へ集約した（`task-list-09.md`）。表示回数・掲載順位の確認と、301がmeta refresh止まりでないかの確認が項目
- 結果（301）: 2026-10-06に、削除した7記事の旧URLを本番へcurlし、すべて`301`で統合先へ転送されることを確認（統合先の4記事は`200`）。W-08の`/ja/creator/cable-noise-ground-loop-prevention/`→`ground-loop-noise-basics`も`301`。旧W-03から引き継いだ懸念は解消
- 結果（表示・順位）: W41（7日、9/26〜10/3）でGSCに出たのは`owner-renovation-roi-simulation-tool`のみ（表示1・順位9・クリック0）。ほか3記事は表示なしで、W41は最初の週次GSCのため増減は判定不能
- 引き継ぎ: W42の基準値取得とW43との比較は`schedule-task.md` S-06（`schedule/2026-10-17-w07-cluster-merge-check.md`）に移した。`soundproof-room-size`は順位11でクリック0のCTR課題があり、S-06で見る

## W-10 「東京 防音 工事 補助金」記事の構成修正（完了、2026-10-06）

- 内容: 2026-09-17に`soundproof-subsidy-tokyo-osaka`の構成を修正し、「東京 防音 工事 補助金」クエリの順位・表示変化を確認する項目だった
- 判断（2026-10-06、ユーザー）: クエリ順位を確認したところ、上位2位までは東京都のページで、それ以外は「補助金がある」「申請方法」の内容だった。リライトしても内容が被るためメインクエリからずらす方針とし、地域を指定しなくてもAI要約が入るため順位改善は難しいと判断。ナレッジ記事として完成させる案も出たが、`soundproof-subsidy-check-guide`（「補助金エリアの調べ方」）と役割が重なるうえslugに`tokyo`・`osaka`が入るため、新記事は作らずcheck-guideへ統合した
- 実施内容:
  - `soundproof-subsidy-check-guide`に、東京・大阪の具体例の表（羽田・厚木/横田・環七環八・伊丹）、助成金額と更新工事の節、環七環八の建築時期条件を移した
  - 記事内容を最新化: 窓リノベは2026年度が1戸あたり上限100万円（2025年度は200万円）、交付申請は遅くとも2026-12-31まで（環境省の公式ページで確認）。羽田空港の相談先を大田区環境政策課に、関東防衛局を北関東・南関東防衛局に訂正。東京都建設局のリンクを現行URLに修正
  - 新規節「これから増える騒音源：データセンター周辺の対策は米国でどうなっている？」を追記（ラウドン郡55dBA・建設前後の騒音調査・2027年改正見込み、プリンスウィリアム郡の24時間規制条例、チャンドラー市の立地規制、Amazonの防音シュラウド、日本は2026-03-31の東京都ガイドライン）。米国で住民宅の防音工事費を補助する制度・事業者が負担する事例は確認できなかった
  - 旧URL`/ja/money/soundproof-subsidy-tokyo-osaka/`を`public/.htaccess`と`astro.config.mjs`で`soundproof-subsidy-check-guide`へ301。既存の旧URL（`/ja/soundproof-room/knowledge/…`・`/posts/…`）の転送先も付け替え、二重リダイレクトを回避
  - 内部リンク: `noise-regulation-update-2025`・`small-business-soundproof-subsidy-guide`・`soundproof-subsidy-news-2025`の旧記事リンクを削除（check-guideへのリンクは既存）。check-guideのタイトル変更に合わせ、リンク文言3箇所を更新
  - `pnpm build`で213ページ生成・エラー0
- 結果: W41（7日）時点で旧記事は7日表に出現せず、統合で失う順位・流入はなし。統合後の効果は新規W-24で見る
- 引き継ぎ: 本番での301確認と表示観察は W-24。`soundproof-subsidy-news-2025`・`soundproof-window-subsidy-2025-guide`の窓リノベ記述（2025年度の上限200万円）の更新は task-list.md T-16

## W-13 G4後続：地方4都市の統合（noindexではなく1記事に集約、完了、2026-10-06）

- 内容: kanazawa・okayama・kumamoto・niigataの4記事は、W40累計で13〜24表示・クリック0、W41の7日表では表示0と需要が細く、noindexにするかを判断する項目だった
- 判断（2026-10-06、ユーザー）: noindexではなく、**西日本（金沢・岡山・熊本）と東日本（新潟）の2セクションの1記事に統合して301**とした。都市別の記事は今後作らない（音大生×地域の方針と同じ。メモリ`project_regional_cities_consolidation`）
- 実施内容:
  - 統合先`/ja/local/regional-city-soundproof-rental-guide/`を新規作成。4都市の一般賃貸相場（LIFULL HOME'S）・大都市までの所要時間・土地柄と遮音性能を混同しやすい点の比較表・契約前チェックリスト・FAQを収録。Googleの検索演算子で探す方法の節（基本の検索式・目的別パターン・家賃で絞る・`loc:`が使えない理由）を追加
  - 旧4記事を削除し、`astro.config.mjs`と`public/.htaccess`に301を追加。旧4記事を指していた内部リンク6記事（`bouon-rental-market-guide`・sendai・osaka・kyoto・hiroshima・fukuoka）を差し替え、interlink一覧を再生成
  - 旧記事のエリア別家賃表（出典なし・4都市でほぼ同一の帯）は転記せず置き換えた。旧記事の所要時間の誤り（新潟「東京まで2時間」は最速1時間29分、熊本→博多「35分」は約40分）を訂正した
  - 注意: 防音物件の家賃（約5.8〜7.3万円）は福岡の上乗せ率+15〜30%を準用した試算で、4都市の実測ではない
- 結果:
  - 2026-10-06にコミット`0774f83`をpushしてデプロイ（FTP接続のタイムアウトで1回失敗し、再実行で成功）
  - 本番で旧4URLがすべて`301`→統合先、統合先は`200`で表示されることをcurlで確認
  - 統合先のGSC URL検査とインデックス登録リクエストをユーザーが実施（2026-10-06、T-17）
- 引き継ぎ: 統合先の表示・流入の効果測定は`schedule-task.md` S-07（`schedule/2026-10-17-w43-merge-articles-check.md`、W43）。家賃を加えた検索式の件数をユーザーが測定したら、記事の検索方法の節に追記する

## W-14 新規記事3本のインデックス反映確認（完了、2026-10-06）

- 対象: `guitar-apartment-practice-guide`（9/16公開）・`sleeping-parent-game-streaming-guide`（9/18）・`karaoke-box-soundproof-performance-guide`（9/17）
- 経緯: W41（10/4）の7日表で3本とも未出現 → 2026-10-06にユーザーがGSC URL検査を実施
- 結果: 3本とも**インデックス未登録・クロール履歴なし**（「URLはGoogleに登録されていません」、正規URLとしては認識済み）。サイト側の原因は否定済み（noindex・robots・sitemap掲載・本番200・canonical自己参照いずれも問題なし）。公開以来、内部リンク0〜1本の孤立状態だった（W-05の再スキャンで判明）ことがクロールされなかった主因の可能性が高い。リンク元7記事への追加は本番反映を確認済み
- 対応: 2026-10-06にユーザーが3URLへ「インデックス登録をリクエスト」を実施
- 結論（ユーザー判断）: クローラーの来訪頻度が低い＝サイト評価がまだ低いことを示す。一方でアクセスは回復傾向にあり、手動登録の効果が出ていると見る
- 引き継ぎ: 3本のインデックス確認は`schedule/2026-10-10-w42-gsc-ga4-import.md`（W42）で、URL検査の「最終クロール」の有無と7日表への出現を見る。W43（10/17）でも最終クロールなしならサイトマップ再送信とトップ・カテゴリ一覧からのリンク追加を検討。クロール済みでも未登録なら内容の独自性・カニバリを疑う
