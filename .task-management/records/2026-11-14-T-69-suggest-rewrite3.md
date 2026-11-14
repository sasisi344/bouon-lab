# T-69 サジェスト第3弾のリライト4本

- 完了日: 2026-11-14
- 種別: 施策
- テーマ: リライト, クエリ契約, タイトル変更, Codex
- 対象: diy/diy-internal-window-road-noise-reduction（窓 防音 diy）, knowledge/soundproof-app-review-2026（騒音計 アプリ）, knowledge/sound-sensitivity-misophonia-environment-guide（イヤーマフ 子供 聴覚過敏）, soundproof-rental/bedroom-noise-type-solution-guide（寝室 騒音）
- 起票元: T-65 の台帳（サジェスト第3弾）

## 何をしたか

- T-65 の新規4本を公開する前に、受け皿の4本を Codex（gpt-6.1-sol・medium）で直した（ユーザー指示: T-65 の公開前に済ませる）。CC が指示書・事実の材料（国交省のシックハウス対策、埼玉県の感覚過敏・イヤーマフ）・検収
- 窓: タイトルを「窓の防音DIYは内窓と隙間から｜…」へ、H2「窓の隙間テープ」「換気口（給気口）」を追加。騒音計アプリ: タイトルを「騒音計アプリはどこまで正確？…」へ。聴覚過敏: H2「聴覚過敏の子供のイヤーマフ」を追加（3M の公式ページが取れず、商品名・年齢・遮音値は書かない）。寝室: タイトルを「寝室の騒音で眠れない｜…」へ変え、新規4本へリンク
- 出典のない数値は外した（窓の実測値・80→40dB の試算、アプリの 3/5/10dB の体感表など）
- 11/14 デプロイ（7af43f5）、同日ユーザーが URL 検査で申請

## 使ったデータ・資料

- 指示書・報告書: `.workspace/codex/orders/2026-11-14-T-69-T-56.md`、`.workspace/codex/reports/2026-11-14-T-69-T-56.md`
- 監査記録: `.workspace/admin-review/2026-11-14-T-65.md` の「T-69・T-56」節
- 台帳: `.workspace/projects/daily-post-2026-11/triage/2026-11-14-第3弾.md` #5〜#7、#3
- 流入: m08〜m10 の GSC はほぼ0（タイトル変更で失う語なし）

## 結果

- 4本とも公開。旧タイトルと基準値は `.workspace/projects/monthly-analysis/2026-12-02-m11-monthly-analysis.md` の「T-65・T-69・T-56 の基準値」。効果は m11（途中）・m12 で見る

## 次に使える知見

- 「出典のない数値は消す」と指示すると、Codex は既存の数値も大きく削る。本文が半分になる記事もあるので、タイトルの約束と本文が合うかを検収で必ず見る
- 本文に「CC確認」のような社内の言葉が混ざることがある。検収で grep する
