# T-65 新規4記事・第3弾（Claude がアウトライン、Codex が完成稿）

- 完了日: 2026-11-14
- 種別: 施策
- テーマ: 新規記事, サジェストKW, モデル選定, 図解, Codex
- 対象: diy/door-soundproof（ドア 防音）, soundproof-rental/earplugs-for-sleep（耳栓 睡眠）, soundproof-rental/upstairs-footsteps-noise（上の階 足音）, knowledge/outdoor-ac-unit-noise（室外機 騒音）
- 起票元: inbox:I-16

## 何をしたか

- 8シードのサジェストから新規4本・リライト4本（T-69）に振り分け、CC がアウトラインと体験チェック、ユーザーが回答、CC が反映して指示書（事実の材料つき）、Codex 既定 gpt-6.1-sol・medium が完成稿、CC が検収・図解8枚・カバー4枚
- 耳栓の記事に筆者の使っている DJcong QuietFit の AffiliateCard（`earplugs-djcong-quietfit`）
- T-69・T-56 と同時に 11/14 デプロイ（7af43f5）、同日ユーザーが URL 検査で申請
- 公開後、アウトラインを削除し、体験と書き方の好みを `.workspace/.data-set/author-experience.md` へ移した

## 使ったデータ・資料

- 台帳: `.workspace/projects/daily-post-2026-11/triage/2026-11-14-第3弾.md`
- 指示書・報告書: `.workspace/codex/orders/2026-11-14-T-65.md`、`.workspace/codex/reports/2026-11-14-T-65-<slug>.md`
- 検収・評価表: `.workspace/admin-review/2026-11-14-T-65.md`
- 図解の原本: `.workspace/projects/daily-post-2026-11/images-src/<slug>/`

## 結果

- 4本とも検収で十分（事実の誤りは CC の材料表の1件だけ）。文字数は上限内（3,774〜4,659字）。README §3-7 の Codex の既定を gpt-6.1-sol・medium に確定（gpt-5.5 は ChatGPT アカウントで使えない）。効果は m11 の手順ファイル「T-65・T-69・T-56 の基準値」で見る

## 次に使える知見

- 事実の材料表に二次資料の値を入れると、そのまま記事に入る。商品の試験値は公式ページで取る
- 図解は描いたあと必ず開いて見る（今回、引き出し線のまたぎ・ラベルの隠れ・1〜2字の折り返しを3件直した）
