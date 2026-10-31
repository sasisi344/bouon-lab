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
- **S-04 404の最終確認**: S-03で判断できなかった場合のみ
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
- **語り手リライト バッチ1の21本（T-43フェーズ4、2026-10-31、T-45）**: 対象は `persona-rewrite/plan.md`「フェーズ4のバッチ」のバッチ1（一覧は `.workspace/codex/orders/2026-10-31-T-43-b1.md` の対象表）。Codex が実行し CC が検収（報告書 `.workspace/codex/reports/2026-10-31-T-43-b1.md`）。変更は各記事に3〜4文（調べて引っかかった疑問・根拠の出どころ・「私なら〜。〜からです」）を足し、専門家口調の断定をやわらげただけで、タイトル・数値・構成は変えていない。10/31 の変更なので、m11 が変更後の初めての丸1か月。基準値は m10 の21本の表示・CTR・平均順位（日平均）。見る: 21本合計とページ別の表示・CTR・順位、GA4 の平均エンゲージメント時間。判定: T-44 と同じ（21本合計の表示と順位が m10 と同程度ならバッチ2以降も同じ型で進める。順位が2位以上落ちた記事は、足した文が導入の結論を遠ざけていないかを確認する）
- **流入上位6本の収益導線（T-30、2026-10-31、T-46）**: 対象は `knowledge/soundproof-material-spec-chart`・`money/soundproof-room-price-market`・`soundproof-room/bouon-dchiseinou-meyasu`・`creator/streamer-soundproof-room-comprehensive-guide`・`soundproof-rental/report-japan-soundproof-rental-market-needs`・`soundproof-rental/bouon-rental-market-guide`。各記事に商品名を出す段落と CtaBox（スペック早見表だけ AffiliateCard）を足しただけで、本文の情報・見出しは変えていない。基準値は m10 の6本の日本からのセッションと `affiliate_click`（記事別。`hq/tools/analytics-fetch/` の `fetch.mjs ga4 --event affiliate_click --dims pagePath` で取れる）。見る: 6本の `affiliate_click` の件数とクリック率（クリック÷セッション）、どの CtaBox が押されたか、6本のセッションと平均エンゲージメント時間が落ちていないか。判定: `affiliate_click` が6本合計で1件以上出れば導線は機能していると見て、同じ型を流入の次の層へ広げる。0件なら置く位置（記事の後半すぎないか）と商品の価格帯を見直す。`soundproof-room-price-market` は同じ日に T-45（語り手リライト）も入っているので、セッション・順位の変化はどちらの影響か分けられない点に注意
- **継続観察**（W-15〜W-20）: S-11と同じ項目を見る

## 結果

（実施後に追記）
