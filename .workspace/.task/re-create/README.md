# re-create: lastmodが古い記事の再構築キュー

作成: 2026-10-11 / 更新: 2026-10-13 / 方針の根拠は `../w42-weekly-task.md` §2（Bingが主力・Googleは回復途上のため、順位8〜20位の記事と、古く流入の少ない記事を、`lastmod`の古い順に改善する）

## 入口：残件は [remaining.md](./remaining.md) だけ見る

- 対象は`lastmod`が2026-08より前の**73記事**。2026-10-13に、`batch-01〜08.md`の完了43本を除いた**残件30本を、`remaining.md`の1ファイルに統合**した（その後、配信者クラスタの統合を実行し、残件は25本）
- 完了した行と、各バッチの作業メモ（記事ごとの変更内容・検証・統合を取り下げた理由）は、アーカイブ `../archive/re-create-batch-01-08-20261013/`（`batch-01.md`〜`batch-08.md`）にある

| 状態 | 本数 | 場所 |
|---|---|---|
| 完了（リライト等32・統合を実行8・統合せず残した8） | 48 | アーカイブ。統合の結末は [consolidation-candidates.md](./consolidation-candidates.md)、優先度ごとの確認は [priority-list.md](./priority-list.md) |
| 判断待ち（配信者以外） | 10 | `remaining.md` §1 |
| 配信者クラスタ | 14 | `remaining.md` §2。方針は [cluster-streamer.md](./cluster-streamer.md) |
| 保留（効果測定中） | 1 | `remaining.md` §3 |

## 運用ルール

1. 残件の方針は、`remaining.md`の「方針(ユーザー記入)」欄に **リライト／統合（統合先slug）／削除／保留** を記入して確定する。Claudeは本文を読んで確認・加筆する
2. 作業の前に、`bouon-rewrite-strategy` skill（slug不変・内部リンク確認）と、統合・削除の場合は`bouon-internal-link-ops` skillで被リンクを確認する。統合・削除は旧URLを301（`public/.htaccess`・`astro.config.mjs`）にし、**1回の公開でまとめて処理**してサイトマップと内部リンクの切れを確認する
3. 手を入れた記事は`lastmod`を更新し、GSCでインデックス登録を申請する（`weekly-task.md` W-25の記録に追記）。効果確認が必要なものは`weekly-task.md`にW-NNを起票する（実施日・対象URL・見る指標）
4. 処理した記事の行は、`remaining.md`から削除する。完了の記録は、該当のW-NN（効果測定）と、統合・残した判断は [consolidation-candidates.md](./consolidation-candidates.md) に残す。全件が片付いたら、本フォルダの派生ファイルを`../archive/`へ移す
5. **着手しない記事**: 効果測定中の記事（`soundproof-material-spec-chart`＝W-21）
6. 本フォルダは作業用の派生ファイル。マスターは`task-list.md`（T-NN）・`weekly-task.md`（W-NN）。作業をT-NNとして起票する場合も、詳細は本フォルダに書いて、T-NN側はID参照のみにする
7. <strong>整理の判断は、旧URLを含む16か月で見る</strong>。3か月・W42の数字は現行URLのみで、旧URL（`/posts/`・`/ja/solutions/`・`/ja/knowledge/`）の実績を含まない。旧URLが記事ではなくカテゴリ一覧やnoindexのページに転送されていないかも確認する（2026-10-13にnoindexの誤判断を解除した経緯は、`cluster-streamer.md` §6）

## 対象とレーン

- レーン: **1**=3か月の順位が8〜20位（表示15以上で、リライトで伸ばす候補）／**2**=3か月の表示20未満かつGA4が3週で5セッション以下（古く低流入、整理の候補）／**3**=その他（流入または表示がある。順位は20位より下など）
- 優先度（案、2026-10-11）: P1 12・P2 22・P3 23・P4 15・保留 1。優先度別の一覧と完了確認は [priority-list.md](./priority-list.md)。数字とタイトルからの案で、確定は`remaining.md`の方針欄で行う
- 旧URLを含む16か月で優先度を見直した5本は、`rental-proofroom-contractcheck`、`bouon-dchiseinou-meyasu`、`million-yen-soundproof-room-professional`、`diy-vocal-soundproof-mask`、`soundproof-culture-japan-vs-america`

## 派生ファイル

| ファイル | 内容 |
|---|---|
| [remaining.md](./remaining.md) | **残件25本の統合版（入口）** |
| [priority-list.md](./priority-list.md) | 優先度別の一覧と、完了確認（73本の状態） |
| [consolidation-candidates.md](./consolidation-candidates.md) | 統合案の結末（実行13・残した8・止まっている1・判断待ち9） |
| [consolidation-pending-batch01-05.md](./consolidation-pending-batch01-05.md) | 判断待ち9本とチェロ記事の根拠（詳細） |
| [cluster-streamer.md](./cluster-streamer.md) | 配信者クラスタの再考（疑問の型、2026-10-13）。旧版は [cluster-streamer-v1-20261011.md](./cluster-streamer-v1-20261011.md) |
| [cluster-streamer-query-design.md](./cluster-streamer-query-design.md) | 配信者クラスタの検索ワード設計（2026-10-11） |
| [entrance-design.md](./entrance-design.md) | 打鍵・打撃音の入口設計（確定、T-24〜T-26） |

## 次の対象（未登録）

`lastmod`が2026-09以降の約124記事（うち111本が2026-09）は本キューの対象外。本音と建前リライトの効果測定（W-06(A)）が終わり、W43〜W44のデータで伸びない記事を、`remaining.md`へ追加する（旧運用の`batch-09`以降は作らない）。
