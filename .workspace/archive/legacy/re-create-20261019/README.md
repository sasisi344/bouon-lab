# re-create: lastmodが古い記事の再構築キュー（2026-10-19に完了・アーカイブ）

> 全件の処理が終わり、2026-10-19に本フォルダを`archive/re-create-20261019/`へ移した。以下は移動前の記述（相対パスは移動前のまま）。

作成: 2026-10-11 / 更新: 2026-10-13 / 方針の根拠は `../w42-weekly-task.md` §2（Bingが主力・Googleは回復途上のため、順位8〜20位の記事と、古く流入の少ない記事を、`lastmod`の古い順に改善する）

作業ファイルは次の2つだけ。完了した記録はすべて `../archive/` にある。

| ファイル | 内容 |
|---|---|
| [remaining.md](./remaining.md) | **入口**。判断待ち10本（配信者以外）、配信者クラスタの残作業8項目、保留1本 |
| [entrance-design.md](./entrance-design.md) | 打鍵・打撃音の入口設計（確定。実装は `task-list.md` のT-24〜T-26） |

## 運用ルール

1. 残件の方針は、`remaining.md` の「方針(ユーザー記入)」欄に **リライト／統合（統合先slug）／削除／保留** を記入して確定する
2. 作業の前に、`bouon-rewrite-strategy` skill（slug不変・内部リンク確認）と、統合・削除の場合は `bouon-internal-link-ops` skill で被リンクを確認する。統合・削除は旧URLを301（`public/.htaccess`・`astro.config.mjs`）にし、1回の公開でまとめて処理して、サイトマップと内部リンクの切れを確認する
3. 手を入れた記事は `lastmod` を更新し、GSCでインデックス登録を申請する（`weekly-task.md` W-25の記録に追記）。効果確認が必要なものは `weekly-task.md` にW-NNを起票する（実施日・対象URL・見る指標）
4. 処理した行・項目は `remaining.md` から削除する。完了の記録はW-NNに残す。全件が片付いたら、本フォルダの2ファイルを `../archive/` へ移す
5. 着手しない記事: 効果測定中の記事（`soundproof-material-spec-chart`＝W-21）
6. 本フォルダは作業用の派生ファイル。マスターは `task-list.md`（T-NN）・`weekly-task.md`（W-NN）。詳細は本フォルダに書き、T-NN側はID参照のみにする
7. **整理の判断は、旧URLを含む16か月で見る**。3か月・W42の数字は現行URLのみで、旧URL（`/posts/`・`/ja/solutions/`・`/ja/knowledge/`）の実績を含まない。旧URLが記事ではなくカテゴリ一覧やnoindexのページに転送されていないかも確認する

## 次の対象（未登録）

`lastmod` が2026-09以降の約124記事（うち111本が2026-09）は本キューの対象外。本音と建前リライトの効果測定（W-06(A)）が終わり、W43〜W44のデータで伸びない記事を、`remaining.md` へ追加する（旧運用の `batch-09` 以降は作らない）。
