# task-list-34

- **完了日**: 2026-10-18
- **概要**: T-23 10万円台の防音室向けCTAを追加。`affiliates.ts`に`otodasu-2-light`（楽天アフィリエイト、S-OTODASUⅡ LIGHT 奥行拡大モデル 11x12D・島村楽器専売）を登録し、`CtaBox`に安価帯用の文言（variant standard）を追加。価格帯の合わないアビテックスCTAを2記事で外し、だんぼっち・OTODASU IIのCTAを4記事に配置。商品名を含む32記事を点検し、古い価格（6記事＋AssetValueTable）と性能・重量の表記（3記事）を2026年10月時点に修正。CtaBoxのルールはメモリ`feedback_ctabox_rule`と`bouon-writing` skillに反映
- 残り: デプロイはユーザーが実施。効果確認はS-12（`schedule/2026-12-02-m11-monthly-analysis.md`、`affiliate_click`のslug別クリック）
- 残置: 未使用の登録`otodasu-dx-pro`

## T-23 本文（完了時点）

### T-23 10万円台の防音室向けCTAの追加（2026-10-08 追加、T-14のスマホ確認中に発見）

ユーザーの気づき: `CtaBox`のCTAは、ヤマハ アビテックス（65万円〜）とカワイ ナサール（80万円〜）の高額防音室しかない。「10万円台の比較的安い防音室おすすめ」を扱う記事では、高額商品のCTAが内容と合わない。**記事の価格帯に合ったCTAを用意し、マッチ度を上げる。**

現状（2026-10-08確認）:
- `src/data/affiliates.ts`に10万円台前後の防音室は登録済み（`danbocchi-wide` 9.8万円〜、`danbocchi-standard` 7.5万円〜、`otodasu-dx-pro` 14.9万円〜）だが、記事内のCTA（`<CtaBox slug=...>`）として使われているのは実質アビテックス・ナサールのみ
- 運用ルール（`feedback_ctabox_rule`メモリ）は「使える slug は`yamaha-avitex`と`kawai-nasal`のみ・商品名を記事で紹介した場合だけ置く」。この制限が、安価帯のCTAが出ない原因

- [x] 対象記事を洗い出す（2026-10-18）。価格帯の食い違い: `money/used-soundproof-room-buying-guide` 88行目（予算10万円の記事に`yamaha-avitex`）、`soundproof-room/assembly-type-comparison` 107行目（簡易型の節に`yamaha-avitex`）。`soundproof-room/bouon-osusume-hikaku` はOTODASU IIを推す節（76行目付近）にCTAなし。ほかの`CtaBox`（`piano-room-guide`・`kawai-nasal-soundproof-room-guide`・`karaoke-box-soundproof-performance-guide`・`creator/collab-streaming-soundproof-space`・`creator/farmland-prefab-streaming-room-legal`、上記2記事のナサール）は高額機種を名前で紹介している節なので維持
- [x] CTAにする商品を決める（2026-10-18 ユーザー判断）: **だんぼっち＋OTODASU II**。登録済みの`otodasu-dx-pro`（ASIN `B0F3NVRDFH`）は記事の「OTODASU II」と別商品なので使わない
- [x] 方針（2026-10-18 ユーザー判断）
  - 表示部品: `CtaBox`に安価帯用の文言を追加する（`variant: 'standard'`のときに組み立て式向けの文言。話し声向け・軽量・賃貸に置きやすい等）。高額機種の表示は変えない
  - 既存の高額CTA: 価格帯が合わない位置（上記2か所）だけ安価帯CTAに置き換える。アビテックス・ナサールを名前で紹介している節のCTAは残す
  - 価格の修正: **全記事を直す**（だんぼっち・OTODASUの価格を書いている約30記事。`rg "だんぼっち|OTODASU" src/content`で特定）。記事内の旧表記の例: だんぼっち「4万〜6万円台」、OTODASU II「9万〜15万円程度」
- 公式価格（2026-10-18取得、公式サイトHTMLを直接取得）
  - OTODASU II 標準（吸音材なし・平均-20dB・約30kg・内寸W1,150×D1,150×H1,900mm）: **¥144,400（税抜）** https://otodasu.jp/product/otodasu-light/
  - OTODASU II 吸音材あり（平均-30dB・約58kg・内寸W1,100×D1,100×H1,900mm）: **¥206,700（税抜）** https://otodasu.jp/product/otodasu/
  - 参考: OTODASU IIの価格表 https://otodasu.jp/price/ 。階上げ配送は+¥15,000（戸建は不可）
  - だんぼっち: **¥83,500** ／トール ¥104,300 ／ワイド ¥113,400 ／グランデ ¥127,500（デザイン版は ¥98,500／¥123,300／¥128,400／¥146,500）。公式 https://www.danbocchi.com/ 。**税込・税抜の表記なし（未確定）**、送料は別途。記事には「公式サイト価格（2026年10月時点、送料別）」と書き、税の扱いは確定してから書く
  - だんぼっちのAmazon商品ページは実在を確認済み（standard `B0CYCDKBY4`・wide `B0CYCH38BZ`）
- [x] アフィリエイトリンクを決める（2026-10-18 ユーザー提示）
  - だんぼっち: 登録済みのAmazonカード（`danbocchi-standard`・`danbocchi-wide`）を使う
  - OTODASU II: **楽天アフィリエイトのみ**。`affiliates.ts`に`otodasu-2-light`（`type: 'link'`・`program: 'rakuten'`。`program`の型に`'rakuten'`を追加）で登録済み。リンク先は楽天市場の「OTODASU2」検索結果。価格は島村楽器の楽天店 https://item.rakuten.co.jp/shimamuragakki/mt0120739/ （S-OTODASU II LIGHT＝吸音材なし、¥150,400・送料込み、関東・関西・中部・北陸のみ配送、注文後キャンセル不可）
  - 楽天のテキストリンクは、aタグの文字を自由に変えられる（ユーザー提供のタグ: `<a href="(上記url)" target="_blank" rel="nofollow sponsored noopener">otodasu</a>`）。本文中のテキストリンクにも使える
  - 商品名は「S-OTODASUⅡ LIGHT 奥行拡大モデル 11x12D」。画像は https://shop.r10s.jp/shimamuragakki/cabinet/mt01207/mt0120739.jpg （`astro.config.mjs`の`image.domains`に`shop.r10s.jp`を追加。`CtaBox`がhttp(s)の画像URLを扱えなかったので、`AffiliateCard`と同じくそのまま使うよう修正）
  - **島村楽器専売**（ユーザー情報）。記事では「近くに島村楽器の店舗があれば、展示があるか確認して見に行くのもあり」と添えられる。展示の有無は店舗ごとに違うので断定しない
- 参考: 当初のリンク先候補（公式）
  - だんぼっち（スタンダード）: Amazon https://www.amazon.co.jp/dp/B0CYCDKBY4 ／公式 https://www.danbocchi.com/products/%E3%81%A0%E3%82%93%E3%81%BC%E3%81%A3%E3%81%A1
  - だんぼっち ワイド: Amazon https://www.amazon.co.jp/dp/B0CYCH38BZ ／公式 https://www.danbocchi.com/products/%E3%81%A0%E3%82%93%E3%81%BC%E3%81%A3%E3%81%A1%E3%83%AF%E3%82%A4%E3%83%89
  - OTODASU II（標準）: 公式 https://otodasu.jp/product/otodasu-light/ （ASP案件の有無はユーザーが確認。なければ公式への直リンク）
  - OTODASU II（吸音材あり）: 公式 https://otodasu.jp/product/otodasu/
- [x] `affiliates.ts`の登録内容を更新する（2026-10-18）。だんぼっちのAmazon価格は¥96,100（standard）・¥130,500（wide）で登録どおりだったので価格は維持。リンク先がAmazonなので、カードの価格もAmazonに合わせる。`otodasu-2-light`は価格`¥150,400`、送料込み・販売店・時点は説明文に書いた（スマホで価格欄が折れるため、価格欄は短くする）
- [x] `feedback_ctabox_rule`メモリと`bouon-writing` skillのCtaBoxルールを更新する（2026-10-18。使えるslugに`danbocchi-standard`・`danbocchi-wide`・`otodasu-2-light`を追加。「商品名を記事で紹介した場合のみ配置」は維持）
- [x] `CtaBox`に安価帯用の文言を追加し、記事にCTAを配置する（2026-10-18）
  - `CtaBox`: `variant: 'standard'`のとき、箇条書き（話し声向け・分解して運べる・楽器や大声は防ぎきれない）とフッター（楽器ならユニット型と比べて）を安価帯用に。ボタンはAmazonなら「Amazonで価格を確認する」、楽天なら「楽天市場で価格を確認する」。価格ラベルが折れないよう`white-space: nowrap`
  - `money/used-soundproof-room-buying-guide`: アビテックスのCTA（旧88行目、音レントの直後）を外し、「中古で狙うなら」の節に`danbocchi-standard`・`otodasu-2-light`を追加。価格表・description・まとめの価格を2026年10月時点に修正
  - `soundproof-room/assembly-type-comparison`: アビテックスのCTA（旧107行目、値段比較表の直後）を外し、「ボイチャ・ゲーム実況なら簡易型で足りる」の節に2つを追加。冒頭・タイプ表・値段比較表の簡易型の価格を修正
  - `soundproof-room/bouon-osusume-hikaku`: OTODASU IIを推す節（C）の最後に`otodasu-2-light`を追加
  - 3記事とも`lastmod`を2026-10-18に更新。`pnpm build`成功、`pnpm preview`のスマホ幅（iframe 390px）で横はみ出しなし・画像表示を確認
- [x] 残りの記事のだんぼっち・OTODASUの価格を直す（2026-10-18）。商品名を含む32記事を、前後4行の価格・重量まで含めて点検した。価格が古かったのは6記事で、残りは価格を書いていないか、すでに正しかった（`creator/streamer-soundproof-room-comprehensive-guide`は公式価格で記載済み）
  - `soundproof-room/budget-soundproof-booth-comparison`: 比較表（だんぼっち 4万〜6万円台→8万円台〜14万円台、OTODASU II 9万〜15万円→15万円前後）と注記に公式価格
  - `soundproof-room/otodasu-voice-chat-test`: 「10万円以下・10万円を切る」→「15万円前後」（description・導入・まとめ）
  - `soundproof-room/shimamura-music-soundproof-room-guide`: S-OTODASU II LIGHT 12万〜13万円台→15万400円（11x12D、楽天の島村楽器、配送地域とキャンセル不可も追記）
  - `soundproof-room/soundproof-room-budget-selection-guide`: だんぼっち 6〜15万円→8万〜15万円程度。「だんぼっち（ヤマハ）」のメーカー表記は誤りなので削除
  - `money/soundproof-room-buy-rent-sell-guide`: 新品4万〜15万円→8万〜16万円程度
  - `business/report-japan-asmr-vtuber-streaming-studio-standard`: 簡易ブースの予算「30万円〜」→「8万円〜」
  - `src/components/AssetValueTable.astro`: OTODASU IIの初期費用149,000円→150,400円、実質月額2,250円→2,260円（売却額15,000円の仮定は維持）
  - `lastmod`は上記の記事で2026-10-18に更新（`otodasu-voice-chat-test`は更新済み）。`pnpm build`成功
- [x] 価格以外の疑わしい記述を直す（2026-10-18、ユーザー判断）
  - `soundproof-room/soundproof-room-budget-selection-guide`: 最新の`bouon-dchiseinou-meyasu`（2026-10-18更新）と`assembly-type-comparison`の数値に合わせた。簡易ブースはD-15〜25程度（話し声レベル）、ユニット型はDr-35〜40程度、用途別の目安はピアノD-35〜40・管楽器D-40〜45・ドラムD-60以上。「海外製簡易ブース 8〜30万円・D-30〜40」は根拠がないので、OTODASU II・ISOVOX 2・GAMEBOX・VOICEBOXの公表値に差し替えた。50万円の行の総額（60〜70万円）を10万〜20万円程度に、セフィーネNS 1.5畳を「110万円〜」から希望小売価格97万9千円（Dr-35標準壁）に修正
  - `soundproof-rental/rental-unit-soundproof-room`: OTODASU IIの重さを公式表記（吸音材なし約30kg・吸音材あり約58kg）に。軽量モデルでも、和室（畳）・フローリング以外の床・床の老朽化では床の保護や補強が必要と追記（ユーザー指摘）
  - `soundproof-room/shimamura-music-soundproof-room-guide`: Dr-15程度は吸音材なしのモデルの目安と明記。吸音材ありは平均-30dB・20万6,700円（税抜）の20万円クラス。吸音材を後から足す方法（純正セットは内部形状に合わせてあり貼るだけ、Amazonのセットは切るなどDIYが必要）と、奥行拡大モデルに純正が合うかは島村楽器に確認、を追記。商品名を紹介している節なので`otodasu-2-light`のCtaBoxも追加
- 未使用の登録`otodasu-dx-pro`（¥149,000〜、記事で使われていない）は残置
- [x] スマホ幅390pxで表示確認（2026-10-18、上記）。`data-track-slug`は`danbocchi-standard`・`otodasu-2-light`で出力されることをビルド後のHTMLで確認
- [x] 効果確認の起票（2026-10-18）: 月の後半の配置なので、判定はm11の月次解析（S-12、`schedule/2026-12-02-m11-monthly-analysis.md`）に節を足した
- [x] デプロイ（ユーザーが実施）
- 注意: 記事の主張と合わない商品は載せない。遮音性能・価格は公式の表記どおりに書き、誇張しない。画像生成は指示があるまで行わない
