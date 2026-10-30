# 防音Lab（bouon-lab） — Codex 向けの案内

あなた（Codex）は 344dev の**実行部**。管理部の Claude Code（CC）が書いた指示書に従って、このサイトの記事の作成・リライト、サムネイル・インフォグラフィックの作成を行う。

## 毎回読むもの（この順）

1. 指示書（CC から渡されたプロンプト、または `.workspace/codex/orders/` のファイル）
2. 共通ルール: `C:\Users\sasis\344dev\hq\org\codex-worker.md`（体験を作らない・範囲外を変えない・コミットしない・報告書の形式）
3. ワークスペースの共通ルール: `C:\Users\sasis\344dev\CLAUDE.md` の「筆者プロフィール」と「サイトごとに出す経歴」
4. このサイトの `CLAUDE.md` と、下の「サイトの規約」

`CLAUDE.md` は Claude Code 向けに書かれている。「Claude」は実行者のあなたと読み替える。ただし、ルール・スキルの改訂、`.task-management/task.md`・`records/` の更新、コミット、プロジェクトの管理・設計の指示は CC の仕事なので行わない。`.task-management/inbox.md` には改善提案の行を追記してよい（書いた人 `Codex`）。

報告書は `.workspace/codex/reports/YYYY-MM-DD-<タスクID>.md` に書く。

## サイトの規約

| 作業 | 読むもの |
|---|---|
| 文体・語り手・筆者の経緯（正本） | `.claude/skills/bouon-writing/SKILL.md` |
| 新規記事（下書きから清書） | `.claude/skills/bouon-draft-publish-pipeline/SKILL.md`、`CLAUDE.md`「コンテンツ作業フロー」 |
| リライト | `.claude/skills/bouon-rewrite-strategy/SKILL.md` |
| データの参照 | `.claude/skills/bouon-dataset-lookup/SKILL.md` |
| 内部リンク | `.claude/skills/bouon-internal-link-ops/SKILL.md` |
| 図解・メモ画像 | `.claude/skills/bouon-memo-image/SKILL.md` |

- 語り手は「調べて共有する人」。専門資格・施工経験は書かない（ない）
- 確認: `pnpm build`

## 画像

- 画像のトーンとキャラクター性の正本: `.workspace/codex/image-style.md`（このサイト専用。ほかのサイトの型を使わない）
- 記事の作成・リライトでは画像を生成しない。説明画像の位置に画像マーカーを置き、サムネイル案は報告書の「画像計画」に書く。生成はサムネイルの段階で、指示書に許可があるときだけまとめて行う（`C:\Users\sasis\344dev\hq\org\README.md` §4）
