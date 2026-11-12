# T-64 サジェストKWのリライト2本

- 完了日: 2026-11-12
- 種別: 施策
- テーマ: リライト, クエリ契約, 受忍限度, Codex
- 対象: knowledge/absorption-vs-soundproofing-materials（吸音材 防音材 違い）, soundproof-rental/noise-complaint-landlord-negotiation-guide（騒音 苦情 どこに言えばいい）
- 起票元: inbox:I-15・I-19

## 何をしたか

- Codex が2本の title・description・導入・H2 をクエリ契約で作り直し、受忍限度の表（55・65dB で線を引く誤り）を「判断で見られる点」に作り替えた。CC が検収し、図解2枚（absorption fig-01、noise memo-01）を描いた。コミット 2027370 でデプロイ
- 新タイトル: 「吸音材と防音材の違いは？音漏れ・響きで選ぶ材料と施工の順番」「騒音の苦情はどこに言えばいい？管理会社・市役所・警察の使い分け」

## 使ったデータ・資料

- 指示書・報告書: `.workspace/codex/orders/2026-11-12-T-64.md`、`.workspace/codex/reports/2026-11-12-T-64.md`（旧タイトルと変更日）
- 監査記録: `.workspace/admin-review/2026-11-12-T-64.md`
- 台帳: `.workspace/projects/daily-post-2026-11/triage/吸音材.md` #1、`騒音苦情.md` #1

## 結果

- 2本とも検収で公開可、11/12 デプロイ。効果測定は T-67。旧タイトルの被リンク文言は inbox I-22 で Codex へ（11/12）

## 次に使える知見

- タイトルを変えると被リンクのアンカーに旧タイトルが残る（今回約19か所）。タイトル変更の指示書には、被リンクの文言の一覧と直し方を最初から入れる
