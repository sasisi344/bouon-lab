# 防音Lab inbox

問題点・気づき・hq からの修正依頼を1行で書く。誰でも雑に書いてよい。作業を始めたセッションは「未処置」から処理する。未処置のまま2週間たった行は、必ず起票か見送りにする。処置済みの行は消す（起票したものは task.md、経緯は records と git に残る）。最終整理: 2026-11-26（I-30・H-55・T-70 の公開に合わせて I-29〜I-43・I-46 を records T-70・T-93 と T-77・T-85・T-88・T-89・T-95〜T-97 へ）。

処置: `→ T-NN`／`→ hq:H-NN`／`見送り: 理由`／`未処置`

| ID | 日付 | 書いた人 | 内容（1〜2行） | 処置 |
|---|---|---|---|---|
| I-21 | 11/11 | Claude | site-admin の admin-lint が、図解マーカー（MDX コメント）内の `alt:` 行を段落90字超の WARN に数える（T-62 で8件すべて誤検知。11/25 の T-82 でも1件）。`{/* IMAGE: ... */}` の中を除外する。ツールは hq のものなので、サイトでは直せない | → hq（起票の判断待ち） |
| I-47 | 11/26 | Codex | `assembly-type-comparison` の簡易型の製品に外部の出典がない（T-93 の B11 で採用できなかった）。公式の出典と測定条件を補う | 未処置 |
| I-48 | 11/26 | hq | 修正依頼: deploy の短縮（hq:H-56）の確認だけ。何も変えずに2回ビルドして `diff -rq dist` の件数を見る（直近の deploy は184件、追加・削除とも 1.27MB でハッシュ付きアセットの差し替えが中心か）。0件なら完了、差分があれば原因の部品と改修案を hq に返す（改修は承認が要る）。手順はレファレンス `namagomi-techo/.workspace/projects/build-speedup/reference.md` §2 | 未処置 |
| I-49 | 11/27 | hq | 修正依頼: data-set の調べものを `.workspace/.data-set/knowledge/<カテゴリ>/` へ移した（main `eb52a3d`、決まりは `knowledge/CLAUDE.md`）。作業中のブランチ `t65-new-articles-3` の未コミットの変更（`05_商品/research-2026-10-07-private-booth.md` の編集、`01_防音室/`・`02_防音賃貸/` の 11/27 の research 3本、`.data-set/CLAUDE.md`）は、main を取り込むときに knowledge 側へ置き直す（private-booth は `knowledge/products/`、事例は `knowledge/places/`、索引は `knowledge/index.md`） | 未処置 |
