# T-61 バッチ2の出典不明の主張を裏取りする

- 完了日: 2026-11-12
- 種別: 施策
- テーマ: ファクトチェック, 出典, 健康, Codex
- 対象: diy/nitori-soundproof-acoustic-guide, creator/closet-diy-soundproof-room, knowledge/mental-health-benefits-of-silence, diy/diy-soundproofing-tips, knowledge/ear-pressure-tinnitus-dizziness
- 起票元: inbox:I-11

## 何をしたか

- CC が5本の主張を一次情報・計算で裏取りし、行ごとに「出典あり／削除／目安に変更」の直し案を指示書にした。記事の修正は Codex（11/12 ユーザー指示で CC → Codex に変更）、CC が検収
- 削除: ニトリの床・窓・カーテンの低減量、closet の「許可なし」「1mmで50%」「数分で意識混濁」「深夜でも」、diy-tips の「9割」「8割」「5cmで低域が劇的に向上（誤り）」と未確認の商品名
- 出典つきに: mental-health は Lancet 2014（Basner ほか）・WHO 2009 の範囲、diy-tips の1%の隙間は 10log(1/0.01) で20dBが上限、ear-pressure の CO2 表は V=1.44㎥ で検算一致（「1時間に1回」は当サイトの目安と明記）
- CC が closet の原状回復ガイドラインの説明（一般的な基準で法的な強制力なし）とニトリの窓の H3 を直した。コミット 2027370 でデプロイ

## 使ったデータ・資料

- 指示書: `.workspace/codex/orders/2026-11-12-T-61-a.md`・`-T-61-b.md`、報告書 `.workspace/codex/reports/` の同名
- 監査記録: `.workspace/admin-review/2026-11-12-T-61-a.md`・`-T-61-b.md`

## 結果

- 5本すべての該当箇所に結論をつけ、`lastmod` を 2026-11-12 に更新。検収で公開可、11/12 デプロイ

## 次に使える知見

- Codex は制度の説明を「原則」などの強い言い方にまとめがち（原状回復ガイドライン）。法令・ガイドラインの文は検収で原文と照らす
- 健康の記事は研究の対象（航空機騒音・夜間騒音など）と記事の場面のずれを本文に書くと、断定を避けたまま根拠を残せる
