# task-list-27

- **完了日**: 2026-10-08
- **概要**: T-14 スマホ表示の残り確認（一覧ページ・CtaBox・AffiliateCard・ArchiveCarousel・検索・次に読む／関連記事）。T-09（記事ページの本文幅・表・見出し）の後続

## 実施内容

- [x] 記事一覧ページ（`src/pages/[lang]/[category]/index.astro`）のカード・スターターセット・見出しのスマホ表示
- [x] `CtaBox`・`AffiliateCard`・`ArchiveCarousel`のスマホ表示（カード幅、タップ領域、矢印の位置）
- [x] 検索（Pagefind）の表示、記事末尾の「次に読む」「関連記事」の幅
- [x] デプロイ後に実機（またはブラウザの端末エミュレーション）でT-09の変更を確認し、表の横スクロールが分かりにくくないか判断する

## 派生

- 確認の過程で、10万円台の防音室向けCTAがないことに気づいた → T-23として起票

## 参照

- 改善後のGA4確認: `schedule-task.md` S-08（`schedule/2026-10-24-w44-mobile-design-check.md`）
- 前提: `archive/task-list-20.md`（T-09）
