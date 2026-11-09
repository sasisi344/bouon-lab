# 防音Lab（bouon-lab） — Codex 向けの案内

あなた（Codex）は 344blog の**実行部**。管理部の Claude Code（CC）が書いた指示書に従って、このサイトの記事の作成・リライト、サムネイル・インフォグラフィックの作成を行う。

## 毎回読むもの（この順）

1. 指示書（CC から渡されたプロンプト、または `.workspace/codex/orders/` のファイル）
2. 共通ルール: `C:\Users\sasis\344blog\hq\org\codex-worker.md`（体験を作らない・範囲外を変えない・コミットしない・報告書の形式）
3. ワークスペースの共通ルール: `C:\Users\sasis\344blog\CLAUDE.md` の「筆者プロフィール」と「サイトごとに出す経歴」
4. このサイトの `CLAUDE.md` と、下の「サイトの規約」

`CLAUDE.md` は Claude Code 向けに書かれている。「Claude」は実行者のあなたと読み替える。ただし、ルール・スキルの改訂、`.task-management/task.md`・`records/` の更新、コミット、プロジェクトの管理・設計の指示は CC の仕事なので行わない。`.task-management/inbox.md` には改善提案の行を追記してよい（書いた人 `Codex`）。

報告書は `.workspace/codex/reports/YYYY-MM-DD-<タスクID>.md` に書く。

## サイトの規約

| 作業 | 読むもの |
|---|---|
| 文体・語り手・筆者の経緯（正本） | `.claude/skills/bouon-writing/SKILL.md`（「検索語を置く場所」「冒頭の型」「さししの言葉」は 2026-11-08 改定） |
| タイトル・description・導入・H2 | `.claude/skills/bouon-writing/references/query-intent-match.md` |
| 新規記事（下書きから清書） | `.claude/skills/bouon-draft-publish-pipeline/SKILL.md`、`CLAUDE.md`「コンテンツ作業フロー」 |
| リライト | `.claude/skills/bouon-rewrite-strategy/SKILL.md` |
| データの参照 | `.claude/skills/bouon-dataset-lookup/SKILL.md` |
| 内部リンク | `.claude/skills/bouon-internal-link-ops/SKILL.md` |
| 図解・メモ画像 | `.claude/skills/bouon-memo-image/SKILL.md` |
| サジェストKW起点の記事（指示書に `daily-post` とあるとき） | `.workspace/projects/daily-post-2026-11/README.md`（§4 新規記事の要素、§4-4 数字・図解・読者の体験、§5 リライト、§6 公開前チェック）。重複判定・台帳・アウトラインと体験チェッカー（§3-6・§8）は CC の仕事なので、指示書の判定と「材料」にある反映済みアウトラインに従う。体験チェックの答えにない筆者の体験は書かない |

- 語り手は「調べて共有する人」。専門資格・施工経験は書かない（ない）
- 確認: このサイトは Codex のサンドボックスではビルドできない（Astro 6 が `Cannot read directory "../..": Access is denied` で止まる。2026-11-07 確認）。ビルドは CC が検収で行うので、Codex は実行せず、報告書に「ビルド未実行」と書く

## 画像

- 画像のトーンとキャラクター性の正本: `.workspace/codex/image-style.md`（このサイト専用。ほかのサイトの型を使わない）
- 記事に画像生成プロンプトを書いた段階で、画像を生成して埋め込んでよい（2026-11-06 ユーザー決定）。手段は Codex でも API でもよい。指示書の「画像」欄が `生成しない` のときだけ、画像マーカーを置き、サムネイル案を報告書の「画像計画」に書く
