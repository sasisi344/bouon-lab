# T-30 収益ゼロの原因分解と収益導線づくり

- 完了日: 2026-10-31
- 種別: 施策
- テーマ: AdSense, アフィリエイト, CtaBox, 収益導線
- 対象: 流入上位6本（knowledge/soundproof-material-spec-chart、money/soundproof-room-price-market、soundproof-room/bouon-dchiseinou-meyasu、creator/streamer-soundproof-room-comprehensive-guide、soundproof-rental/report-japan-soundproof-rental-market-needs、soundproof-rental/bouon-rental-market-guide）、記事中の広告枠
- 起票元: ユーザー

## 何をしたか

- 2026-10-27 診断: AdSense の実装は正常（ads.txt・adsbygoogle.js・記事末尾の枠は filled）。収益ゼロの原因は故障ではなく、量（日本からのセッション 681/月、見込みは月100〜300円前後）と置き場所（見える広告は記事末尾の1枠だけ、流入上位ページに CtaBox なし、キーイベント0）
- 2026-10-27 記事中の広告枠を追加: 2つ目の H2 の直前に、記事中専用のレスポンシブ広告（ユニット名「bouon」、slot `5976402243`）。設定は `src/data/adsensePlacements.ts` の `rectangleArticleMid`、テンプレートは `[...slug].astro`
- 2026-10-29 管理画面の設定・確認は T-41 に切り出して完了（`2026-10-29-T-41-adsense-settings.md`）
- 2026-10-31 流入上位6本に、商品名を出す段落と CtaBox 8個・AffiliateCard 2個を追加（Codex 実行・CC 検収、コミット `074437f`）。価格帯は節の予算・用途に合わせ、だんぼっちには楽器の音に足りない旨を書いた。スペック早見表は防音室の記事ではないので AffiliateCard（吸音パネル・騒音計）。グランドループは防音室と関係が薄いので対象外

## 使ったデータ・資料

- `.workspace/access-data/2026/m09/bouon-ga4-m9.csv`（日本からのセッション）
- 指示書 `.workspace/codex/orders/2026-10-31-T-30.md`・`2026-10-31-T-30-r1.md`、報告書 `.workspace/codex/reports/2026-10-31-T-30.md`

## 結果

施策は実施済み。効果測定は T-46（m11、12/02 に `affiliate_click` と6本のセッションを見る）。10/31 のデプロイなので m10 では判定しない。

## 次に使える知見

- 小規模サイトの AdSense は「0円に見える」のが普通（1日数円）。故障を疑う前に、PV と広告が見える位置を確認する
- Google 検索からのクリックは週11件で、流入の主力は Bing。PV を2倍にしても月数百円の規模なので、収益はクリック単価の高いアフィリエイト導線で作る
- CtaBox は商品名に触れる節にだけ置き、価格帯をそろえる（10万円台の節に高額帯を置かない、その逆も）。商品の説明は `affiliates.ts` の範囲だけ
