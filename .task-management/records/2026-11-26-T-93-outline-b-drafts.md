# T-93 アウトライン B09〜B16 の完成稿と公開

- 完了日: 2026-11-26
- 種別: 施策
- テーマ: 新規記事, 加筆, 防音室メーカー, 防音賃貸, 構造, メゾネット, 楽器可賃貸, 床荷重
- 対象: 新規 `soundproof-room/maker-comparison-daiken-panasonic-others`（B11）・`soundproof-rental/detached-maisonette-family-soundproof-rental`（B15）・`soundproof-rental/structure-rc-src-wood-soundproof-rental`（B16）。加筆 `soundproof-rental/apartment-weight-limit-500kg`（B09）・`soundproof-rental/instrument-allowed-rental-research-method`（B12〜B14）
- 起票元: ユーザー

## 何をしたか

Codex が8本を `draft: true` で書き、CC が検収（差し戻し1回）。ユーザーの判断で、新規3本を公開、4本を既存2本へ加筆、B10（防音室の仕組み）は保留にした。

- 新規3本: 図解・メモ画像を各1枚（HTML/SVG から描画。原本は `.workspace/projects/article-ideas/images-src/`）、カバーを Gemini で生成（B15 は町家風になったので1回作り直し）
- 受けリンク: B15 ← `single-living-soundproof-rental-guide`、B16 ← `wooden-apartment-soundproof-guide`・`bouon-rental-market-guide`、B11 ← `housing-builder-soundproof-comparison`・`assembly-type-comparison`
- 加筆: B09 の重さの早見表・6畳の計算例・タワマンの確認表を H2 2つで、B12〜B14 のドラム・グランドピアノ・24時間可を H2 3つで追加。description と lastmod も更新
- ついでに I-46（`single-living-soundproof-rental-guide` の志木南の所在地を新座市に）を直した
- 使った下書き5本（加筆の4本と保留の B10）は `.workspace/projects/article-ideas/archive/drafts-T-93/`、アウトライン7本は `archive/outlines/`（B10 のアウトラインは `outlines/` に残した）

## 使ったデータ・資料

- 指示書 `.workspace/codex/orders/2026-11-26-T-93.md`・`-fix1.md`、報告書 `.workspace/codex/reports/2026-11-26-T-93-{a,b,fix1}.md`、検収記録 `.workspace/admin-review/2026-11-26-T-93.md`
- ミュージション公式（物件一覧・テラス・各物件ページ）、ヤマハ・カワイ・VERY-Q・大建工業・パナソニックの公式資料、日本建設業連合会の事例集、建築基準法・施行令（2026年11月に確認）

## 結果

基準値なし（新規）。加筆2本の基準値と判定は `.workspace/projects/monthly-analysis/2026-12-02-m11-monthly-analysis.md` の「T-93」。効果測定は T-94。

## 次に使える知見

- 「〜はある？」の記事は、答えになる実例（今回はミュージションテラス）を CC が材料に入れないと、書き手は「見つからなかった」で終わる。材料集めで反例と実例を探す
- 書き手は「私は〜します」と書きやすく、筆者の体験に読める。「私なら〜」に直した。指示書の基本ルールに足す候補（`order-base.md` の別件の変更が片付いてから）
- サジェストだけが根拠の楽器別の3本（B12〜B14）は、新規にせず受け皿に H2 で足した。優先Aの途中経過（新規で表示がほとんど出ない）を踏まえた判断
