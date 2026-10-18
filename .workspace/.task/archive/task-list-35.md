# task-list-35

- **完了日**: 2026-10-18
- **概要**: T-24 電子ドラム・ピアノの旧URL3本の転送先を、カテゴリ一覧から既存記事へ変更（`public/.htaccess` 236・390・438行目、`astro.config.mjs` 374・546・612行目）。転送先2記事は公開中（draft: false・noindexなし）で、転送元として登録されていないため二重の301はない。`pnpm build`成功、`dist/`のmeta refresh先とサイトマップ（旧URLなし・転送先あり）を確認。`src/`内に旧URLへの内部リンクはない
- デプロイ: 2026-10-18（ユーザー）。curlで3本とも1回の301で転送先へ行き、転送先は200であることを確認。効果確認はS-11（`schedule/2026-11-02-m10-monthly-analysis.md`の「電子ドラム・ピアノの旧URL3本の転送先変更」節）、判定はS-12
- 引き継ぎ: 残りの旧URL3本（キーボード2本・`electronic-piano-vibration-solution`）はT-25の枝A・枝Bの公開と同時に変更。カテゴリ一覧・トップへ301された旧URL125本の点検はT-08に未決として移した

## T-24 本文（完了時点）

### T-24 旧URL3本の転送先を既存記事へ変更（2026-10-11 追加）

背景: 旧URLのキーボード・ピアノ・電子ドラム関連が、記事ではなくカテゴリ一覧へ301されている（`public/.htaccess`、`astro.config.mjs`）。ユーザー指示（2026-10-11）で、次のタスクとして登録。実施前に、変更内容をユーザーに提示して確認する（2026-10-18 ユーザー承認）。

- [x] 次の3本を、既存記事へ転送する（16か月のGSC実績）
  - `/posts/electronic-drum-vibration/`（17表示・36.2位）: `/ja/knowledge/` → `/ja/diy/electronic-drum-vibration-fuwafuwa-system/`
  - `/posts/piano-proofroom-select-guide/`（73表示・24.7位）: `/ja/soundproof-room/` → `/ja/soundproof-room/piano-room-guide/`
  - `/posts/soundproof-performance-piano/`（16表示・8.4位）: `/ja/soundproof-room/` → `/ja/soundproof-room/piano-room-guide/`
- [x] `public/.htaccess`と`astro.config.mjs`を同時に変更し、転送の連鎖（二重の301）が無いことを確認する。`pnpm build`、サイトマップ、内部リンクを確認
- [x] 効果確認の節をS-11の個別ファイルに足した（公開後のGSC確認はそこで行う）
- 残りの旧URL3本（`keyboard-sound-streaming-soundproof-guide`（646表示・16クリック）、`streamer-keyboard-silence`、`electronic-piano-vibration-solution`）は、T-25の新記事の公開と**同時**に転送先を変える
- 未決: サイト全体で、カテゴリ一覧・トップへ301された旧URL125本（16か月で表示17,456・クリック240。`/en/`の分を含む）の点検は、起票していない（T-08へ移した）
