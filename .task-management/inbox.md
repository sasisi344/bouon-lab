# 防音Lab inbox

問題点・気づき・hq からの修正依頼を1行で書く。誰でも雑に書いてよい。作業を始めたセッションは「未処置」から処理する。未処置のまま2週間たった行は、必ず起票か見送りにする。処置済みの行は消す（起票したものは task.md、経緯は records と git に残る）。最終整理: 2026-11-14（I-01〜I-23 の処置済み21行を削除。やり残しは T-31・T-56/T-57・T-67 の本文へ移した）。

処置: `→ T-NN`／`→ hq:H-NN`／`見送り: 理由`／`未処置`

| ID | 日付 | 書いた人 | 内容（1〜2行） | 処置 |
|---|---|---|---|---|
| I-18 | 11/11 | Claude | `src/data/affiliates.ts` の `acoustic-panel-felmenon`（60×60cm・¥6,000〜）が、同じ ASIN B07XG5CX8X の Amazon の現行品（80×60cm 防音フェルトボード・6,451円・釘施工のみ・評価1件）と食い違う。使っている記事を含めて見直す（T-62 #1 の検収で発見） | 未処置 |
| I-21 | 11/11 | Claude | site-admin の admin-lint が、図解マーカー（MDX コメント）内の `alt:` 行を段落90字超の WARN に数える（T-62 で8件すべて誤検知）。hq へ: `{/* IMAGE: ... */}` の中を除外する | 未処置 |
| I-24 | 11/14 | Claude | T-43 バッチ3の検収（`.workspace/admin-review/2026-11-14-T-43-b3.md`）で残った点: osaka の家賃表・解体の費用表・shared-streaming の料金と稼働率は出典が弱く、本文で「目安」と明かしただけ。見出しの専門家口調（rental-cost「アドバイザーからのメッセージ」、解体「想像を絶する重さと危険」）は見出し変更禁止で残った。出典の確認は bouon-research で、見出しは T-48 で | 未処置 |
| I-25 | 11/14 | Claude | T-43 バッチ3の75ファイルを admin-lint --files（全文）で見ると、今回変えていない行に ERROR 7件（syllabus-hack-c1 セッションの指摘）。①「完全ガイド」: title 3本（`child-rearing-soundproof-pillar`・`rental-unit-soundproof-room`・`soundproof-rental-cost-performance-guide`）はクエリ契約で作り直す、description 2本（`local/kanagawa`・`local/saitama`）。②体験の言い方「正直に言うと」2か所（`local/fukuoka-soundproof-rental-guide:24`・`soundproof-rental/noise-canceling-headphones-sleep:54`）。バッチ4の指示書に入れる（noise-canceling は T-56 の統合元なので統合で消えるなら不要） | 未処置 |
