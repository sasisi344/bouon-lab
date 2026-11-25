# GSC で登録を確認・申請する URL（2026-11-25 作成、作業: ユーザー）

URL 検査に貼り、「URL が Google に登録されていません」なら「インデックス登録をリクエスト」。終わったら「結果」に `登録済`／`申請済 11/26` のように書く。Claude が `.workspace/projects/indexing/index-url.md` と T-67・T-10 に写して、このファイルを消す。

期限の目安: 12/01 まで（12/02 に T-67・T-59 で登録を見る）。

## 1. 申請の候補（7本）

2026-11-01〜11-22 の GSC で表示が0。どれも本番は 200 で noindex なし。登録済みで表示がないだけのこともあるので、先に URL 検査で状態を見る。

| # | 区分 | URL | 結果 |
|---|---|---|---|
| 1 | T-60 新規 | https://bouon-lab.com/ja/diy/sound-insulation-sheet-effect/ | |
| 2 | T-60 新規 | https://bouon-lab.com/ja/diy/soundproof-curtain-effect/ | |
| 3 | T-60 新規 | https://bouon-lab.com/ja/soundproof-rental/noise-complaint-letter-template/ | |
| 4 | T-62 新規 | https://bouon-lab.com/ja/soundproof-rental/noise-moving-cost-claim/ | |
| 5 | T-64 リライト | https://bouon-lab.com/ja/knowledge/absorption-vs-soundproofing-materials/ | |
| 6 | T-64 リライト | https://bouon-lab.com/ja/soundproof-rental/noise-complaint-landlord-negotiation-guide/ | |
| 7 | T-10 ハブ（登録済みなら住宅アフィリエイトの申請へ進める） | https://bouon-lab.com/ja/soundproof-room/noise-solutions-relocate-retrofit-custom-home/ | |

## 2. 申請しなくてよいもの（6本）

同じ期間に GSC の表示が1回以上あるので、登録されている。

- T-60: `/ja/diy/room-tuning-basics/`・`/ja/knowledge/floor-soundproof-rating/`
- T-62: `/ja/diy/sound-absorbing-material-recommend/`・`/ja/diy/sound-insulation-sheet-wall-install/`・`/ja/diy/floor-soundproof-underlay/`・`/ja/diy/soundproof-curtain-recommend/`

11/25 に申請した4本（3畳の自作・エアコンの音・静かなホテル・OTODASU）も、再申請はしない。

## 3. ついでに見てほしい数字（T-32・T-37）

| 見る所 | 書くこと | 結果 |
|---|---|---|
| インデックス作成 → ページ → 見つかりませんでした（404） | 件数と、グラフの最終日（基準 2,526件・2026-09-21） | |
| インデックス作成 → ページ | 登録済みの件数（基準 102件。11/25 のサマリーでは149件） | |
