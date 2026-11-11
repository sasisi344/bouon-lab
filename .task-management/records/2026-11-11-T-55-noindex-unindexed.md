# T-55 未登録の3本を noindex にする

- 完了日: 2026-11-11
- 種別: 施策
- テーマ: インデックス, noindex, サイトマップ
- 対象: `business/global-soundproof-market-trends`・`business/soundproof-market-esg-trend`・`soundproof-rental/child-rearing-soundproof-pillar`
- 起票元: 分析:2026-11（records T-47）

## 何をしたか

- 11/06 の判定（T-47 の判定表）を、11/11 の状況で見直した。見直しに使ったのは、GSC API（7/30〜10/28）、11/06 以降の変更と被リンク、11/09 のサジェストKW、11/10 の triage
- 3本は判定どおり noindex にした。4本とも Google の表示は0のままで、本文の変更もない
- 季節統計（`knowledge/neighborhood-noise-seasonal-pattern-statistics`）は noindex にしなかった（ユーザー判断）。サジェストに「騒音 苦情件数」など件数の語が7つあり、triage「騒音苦情」#4 がこの記事を受け先にしていた。T-63 でリライトする
- 3本の frontmatter に `noindex: true` を足した。`astro.config.mjs` には、frontmatter の noindex を集めてサイトマップから外す処理を足した。それまでのサイトマップは frontmatter の noindex を見ていなかった
- 内部リンクは残した
- commit 4e04ff2。2026-11-11 にデプロイした（run 42938542425）

## 結果

- 本番で3本に `noindex,follow` の meta が出て、`sitemap-0.xml` から消えたことを確かめた（サイトマップは197件）
- 登録から外れたかは T-59（12/02）で見る。判定表は `.workspace/projects/rewrite-priority/2026-11-06-t47-unindexed-decisions.md`
