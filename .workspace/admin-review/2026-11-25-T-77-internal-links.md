# T-77 内部リンク0本の4本への本文リンク 監査記録

- 日付: 2026-11-25 ／ 監査: CC（hq のセッション。書き手も CC 本体なので、書き手と検収が分かれていない）
- 対象: 記事11本に誘導文を1文ずつ（11リンク）。リンク先は `building-fire-law-soundproof-room`（3）・`soundproof-rental-brand-comparison`（3）・`buy-home-with-soundproof-room`（2）・`wind-string-instrument-booth-selection`（3）
- 指示書: なし（起票済みの T-77。hq:H-51 のリスト K4） ／ 報告書: なし
- 読み方: 全文 0本／リンク元は前後の節 11本、リンク先は該当の節 4本

## 判定

**公開可**（足した行の ERROR 0、ビルド成功、ビルド後のリンク切れ 0）

| 記事 | 判定 | ひとこと |
|---|---|---|
| `door-window-weak-points`・`home-private-booth-guide`・`custom-home-soundproof-room-layout` | 公開可 | 建築基準法・消防法の記事へ |
| `chiba-soundproof-rental-guide`・`bouon-rental-market-guide`・`streamer-rental-selection-guide` | 公開可 | ブランド比較へ |
| `noise-solutions-relocate-retrofit-custom-home`・`piano-soundproof-mortgage-tax-guide` | 公開可 | 防音室付き物件の購入へ |
| `compact-booth-under-1-5-tatami`・`budget-soundproof-booth-comparison`・`rental-caution-cello` | 公開可 | 管楽器・バイオリンの防音室へ |

## 機械チェック

- admin-lint（全文）: ERROR 1・WARN 14。どれも今回足した行ではない。ERROR は `custom-home-soundproof-room-layout:268` の引用元の記事名「徹底解説」で誤検知
- change-summary: 使っていない（作業フォルダが別のセッションの編集中のため）。代わりに `git diff` を全行見た。足したのは22行だけで、消した行・frontmatter の変更なし
- ビルド: 成功（205ページ）。リンク切れ 0

## ファクトチェック

| 記事 | 主張 | 出典 | 確認日 | 結果 |
|---|---|---|---|---|
| 11本 | 誘導文の「リンク先で分かること」がリンク先にある | リンク先の見出しと表 | 2026-11-25 | 一致 |

## 書き方の検収

| 見る点（指示書・常設部の項目） | 結果 | 記事・行 |
|---|---|---|
| 誘導文は独立した段落（bouon-writing） | ○ | 11本 |
| 末尾 `/`、アンカーにリンク先の主KW（bouon-internal-link-ops） | ○ | 11本 |
| 同じ先への2本目を張らない | ○ | 11本 |
| 体験を作っていない | ○ | 11本 |

## 読者と収益の評価

変えた節だけを見た（全文は読んでいない）。

| 記事 | 読み進め | 広告・カードの位置 | SEO・AEO | 内部リンク | △・× の中身と直し方 |
|---|---|---|---|---|---|
| 11本 | ○ | ○（動かしていない） | ○ | ○ | — |

- 受けるリンクの候補（ほかの記事からこの記事へ）: 被リンク1本の10本は次の候補
- △ の原因: なし

## 守られなかった決まり

なし

## 直したこと（CC）

1. 誘導文4本を、説明の途中から節の終わりへ移した

## 差し戻し

なし

## 張らなかったリンク（結論・数字が食い違うため。inbox I-30・I-31）

| リンク元 | リンク先 | 食い違い |
|---|---|---|
| `saxophone-apartment-practice-guide`・`soundproof-room-budget-selection-guide`・`night-practice-soundproof-guide` | 管楽器の記事 | 管楽器に要る遮音性能が記事で違う（Dr-35〜40／D-40〜45／Dr-45以上／D-55〜60） |
| `soundproof-room-price-market` | 管楽器の記事 | バイオリンの広さ（2.0〜2.5畳／1.5〜2.0畳） |
| `rental-unit-soundproof-room` | 法律の記事 | 感知器の扱い（移設か確認／入居者は自分で移設できない） |

## ユーザーに確認したいこと

なし
