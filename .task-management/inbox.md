# 防音Lab inbox

問題点・気づき・hq からの修正依頼を1行で書く。誰でも雑に書いてよい。作業を始めたセッションは「未処置」から処理する。未処置のまま2週間たった行は、必ず起票か見送りにする。処置済みの行は消す（起票したものは task.md、経緯は records と git に残る）。最終整理: 2026-11-25（I-18・I-24〜I-28・I-33・I-44 を T-43・T-44・T-48・T-70・T-86〜T-88 へ移して削除。I-29〜I-43 の残りは、公開待ちのブランチ `claude/i30-instrument-numbers` が同じ行を直しているので、11/26 の公開後に片づける。受け先は T-70 の本文）。

処置: `→ T-NN`／`→ hq:H-NN`／`見送り: 理由`／`未処置`

| ID | 日付 | 書いた人 | 内容（1〜2行） | 処置 |
|---|---|---|---|---|
| I-21 | 11/11 | Claude | site-admin の admin-lint が、図解マーカー（MDX コメント）内の `alt:` 行を段落90字超の WARN に数える（T-62 で8件すべて誤検知。11/25 の T-82 でも1件）。`{/* IMAGE: ... */}` の中を除外する。ツールは hq のものなので、サイトでは直せない | → hq（起票の判断待ち） |
| I-29 | 11/24 | Claude | `knowledge/soundproof-material-spec-chart` の石膏ボードの面密度が違う（9.5mm 約8.5→公式6.6、12.5mm 約10.5→公式8.5 kg/m²。吉野石膏の公式FAQ https://yoshino-gypsum.com/support/qa 、自サイトの `sound-insulation-sheet-effect` も8.5）。本文に外部リンクが0本で、ほかの数値も出典が要る。H-51 のリスト K1 | → T-70 |
| I-30 | 11/25 | hq | 修正依頼: 管楽器・バイオリンに要る遮音性能と広さが記事で違う。①トランペット・サックス: `wind-string-instrument-booth-selection` は Dr-35〜40（夜 Dr-40）、`bouon-dchiseinou-meyasu`・`soundproof-room-budget-selection-guide` は D-40〜45、`night-practice-soundproof-guide` は Dr-45以上、`saxophone-apartment-practice-guide` は防音室に D-55〜60（賃貸物件の目安を防音室に当てている疑い） ②バイオリンの広さ: `soundproof-room-price-market` 2.0〜2.5畳／管楽器の記事 1.5〜2.0畳。そろえてからリンクを張る（T-77 の監査記録） | 未処置 |
| I-31 | 11/25 | hq | 修正依頼: 火災感知器の扱いが `rental-unit-soundproof-room`（感知器を移設・「引き込む予定」と伝える）と `building-fire-law-soundproof-room`（自動火災報知設備は入居者が移設できない。警報器を中に付ける）で違う。法律に関わるので一次情報で確かめてそろえる | 未処置 |
| I-32 | 11/25 | hq | T-77 を実施した（記事11本に11リンク、リンク先4本の本文の被リンクは0本→2〜3本）。`task.md` から records へ移し、効果測定の行（データ待ち。登録・表示。m12 で判定）を足してほしい。記録は `.workspace/admin-review/2026-11-25-T-77-internal-links.md` | 未処置 |
| I-34 | 11/25 | hq | `.workspace/scripts/check-internal-links.mjs` は、廃止した subcategory 階層を前提にしていて、正しいリンク1,309本を誤りと出す。ビルド時の検査（`scripts/check-internal-links.mjs`）は 11/25 に入った（`6969093`）ので、消してよい | 未処置 |
| I-35 | 11/25 | hq | 修正依頼（I-30 に追加。T-77 の監査の見落とし）: T-77 で公開した2本は、リンク元と先で書き方が違う。①`compact-booth-under-1-5-tatami`: フルート0.8畳・トロンボーン1.5畳「足りる」／`wind-string-instrument-booth-selection`: フルート1.2〜1.5畳・トロンボーン2.0畳以上 ②`budget-soundproof-booth-comparison:43`: だんぼっち級は管楽器に不足しがち／管楽器の記事: フルート・クラリネットの昼の練習に挙げる。③`saxophone-apartment-practice-guide:65` は、:43 で賃貸物件の目安として引いた D-55〜60 を防音室の目安に使っている。楽器別のユニットの目安を1つに決めて、関係する記事をそろえる | 未処置 |
| I-36 | 11/25 | hq | 修正依頼: `buy-home-with-soundproof-room:233` の注文住宅の坪単価「約70万〜120万円」が `custom-home-soundproof-price-guide`「約50万〜155万円」と違う。`noise-solutions`・`piano-soundproof-mortgage-tax-guide` から送っている先なので先に直す | 未処置 |
| I-37 | 11/25 | hq | 修正依頼: `soundproof-rental-brand-comparison:58・233` の「空き待ちの登録が前提」と `musision-comprehensive-guide:148`「すべての申込みに空き待ちが必要というわけではありません」が違う。brand 側の書き方を直す案 | 未処置 |
| I-38 | 11/25 | hq | 修正依頼: ①`rental-unit-soundproof-room:21`「私は不動産コンサルタントとして」が筆者設定（専門資格・施工経験なし）と合わない。I-31（感知器）と一緒に ②`db-reduction-familiar-sound-scale:16・26`「D-40で20dB軽減」と :63「40dB前後の軽減」が同じ記事の中で違う | 未処置 |
| I-43 | 11/25 | Claude | `diy/soundproof-room-diy-cost` の材料費（1.5畳・約18万円）は単価に出典がなく、T-79 の3畳の試算（カインズの表示価格）と1枚あたりの値段が合わない（例: 石膏ボード30〜40枚で約4万円）。単価を調べ直し、同じ前提の表にそろえる案 | 未処置 |
