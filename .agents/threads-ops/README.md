# Threads運用 作業フォルダ

防音LabのThreads（@bouonlab）運用に関する下書き・記録を管理する。ルール本体は `bouon-threads-ops` skill（`.claude/skills/bouon-threads-ops/SKILL.md`）を参照。

## 構成

- `postlist.md` — 投稿済みリスト（投稿タイプ・ソース・投稿日・URLを記録）
- `used-sources.md` — 使用済みの記事・検索クエリの管理（重複防止）
- `drafts/snippet/` — 小ネタ型（定期投稿）の下書き
- `drafts/query-hook/` — クエリ疑問オープナー型（長文・エンゲージメント重視）の下書き

## 運用の流れ

1. `bouon-threads-ops` skillのルールに沿って下書きを`drafts/`配下に作成する
2. `used-sources.md`で重複がないか確認する
3. ユーザーがThreadsアプリから実際に投稿する
4. 投稿後、`postlist.md`に投稿日・投稿URLを追記する
