# 記事ネタの優先リスト（article-ideas）

記事にする前のネタ・アウトラインの**唯一の置き場**。ここにあるのは「まだタスクにしていない候補」で、着手すると決めたものだけを `.task-management/task.md` に1行で起票する（このリストは hq が読まない。hq と共有するのは task.md だけ）。

- 作成: 2026-11-14（`.workspace/_inbox/article-outlines-20261015/` と `article-query-list-20261015.md` から移した）
- 判断の順番は `.workspace/projects/daily-post-2026-11/README.md` と同じ: **重複を探す → あればリライト（加筆）→ なければ新規**。タイトル・H2 はクエリ契約（`bouon-writing/references/query-intent-match.md`）
- 需要の数字は GSC の1年分（`access-data/2026/gsc-query-data-0702-1year/`）と m10 のクエリ（`access-data/api/2026-11-02-m10p-gsc-query/`）を、各アウトラインのメインKWの語で部分一致させた表示回数（2026-11-14 集計）

## 運用

1. 新しいネタは `_inbox/` に置き、振り分けのときにこの表へ1行足す（アウトラインがあれば `outlines/` へ）
2. 優先1から順に、まとめて1本のタスク（`T-NN`）にして起票する。起票したら「状態」を `T-NN` にする
3. 記事になったら、行を消してアウトラインも削除する（経緯は records に残る）。見送ったものは行を消す
4. 月次解析（`/monthly-ppdca`）のときに、優先2・3の需要を見直す（GSC に表示が出始めたら上げる）

## 優先1（既存の記事で受ける＝加筆・リライト。次に着手）

| ID | ネタ | 需要（GSC） | 受け皿 | やること | アウトライン | 状態 |
|---|---|---|---|---|---|---|
| B10 | 防音室とは（仕組み・種類・無響室との違い） | 70表示（「防音室 仕組み」27.7位、「防音室の仕組み」1.0位のページあり） | 1.0位のページ（GSC の画面で特定する） | 1位のページを特定し、そのページを「仕組み」の答えに寄せるリライトを先に。足りなければ新規 | `outlines/B10-what-is-soundproof-room.md` | 未起票 |
| B12・B13・B14 | ドラム可・グランドピアノ可・24時間楽器可の賃貸 | 0（サジェストのみ） | `soundproof-rental/instrument-allowed-rental-research-method`（楽器可賃貸の探し方） | 3本の新規ではなく、受け皿に「ドラム」「グランドピアノ」「24時間」の H2 を足す | `outlines/B12-…`・`B13-…`・`B14-…` | 未起票 |
| B09 | 防音室で床は抜けるか（耐荷重・タワマン） | 0（サジェスト「防音室 床」11語） | `soundproof-rental/apartment-weight-limit-500kg`・`soundproof-room/bouon-setti-checkpoint` | 「床抜け」の答えを受け皿に足す。タワマンの制約は H2 1つ | `outlines/B09-tower-mansion.md` | 未起票 |

## 優先2（条件が揃ったら）

| ID | ネタ | 需要（GSC） | 条件・メモ | アウトライン |
|---|---|---|---|---|
| C08 | DTM・宅録向けの防音賃貸 | 79表示（「配信部屋 防音賃貸」など） | `creator/streamer-rental-selection-guide` に DTM の H2 を足す。creator クラスタの判定（11/16 以降）が済んでから | `outlines/C08-dtm-streamer-rental.md` |
| B11 | 防音室（ユニット）のメーカー比較 | 307表示だが大半は「防音室 ハウスメーカー」（住宅会社の意図で `housing-builder-soundproof-comparison` の領域） | ユニットのメーカー比較は収益導線（CtaBox）に近い。新規の前に「防音室 メーカー」の Google のサジェスト・検索結果を確かめる | `outlines/B11-maker-comparison.md` |
| B16 | 構造別（RC・SRC・木造・鉄骨）の防音賃貸 | 9表示 | `diy/wooden-apartment-soundproof-guide`（木造）と分担。需要が出たら新規 | `outlines/B16-structure-rc-src-wood.md` |

## 優先3（需要が出るまで保留。アウトライン自身が「加筆で足りる」としているもの）

| ID | ネタ | 需要（GSC） | 受け皿の候補 | アウトライン |
|---|---|---|---|---|
| B15 | 戸建て・メゾネット・ファミリー向けの防音賃貸 | 0 | なし（新規） | `outlines/B15-detached-house-family-rental.md` |
| C01 | 防音室を体験できる場所 | 0 | `soundproof-room/shimamura-music-soundproof-room-guide`・`yamaha-tabisuru-bouon-room` | `outlines/C01-where-to-try-soundproof-room.md` |
| C02 | 防音室の電源・照明・コンセント | 9 | `soundproof-room/wifi-connection-guide` ほか | `outlines/C02-power-lighting-lan.md` |
| C03 | 防音室の虫・湿気・メンテナンス | 0 | `soundproof-room/proofroom-humidity-airconditionlist` | `outlines/C03-insects-humidity-maintenance.md` |
| C04 | 犬・ペット用の防音室 | 0 | `soundproof-rental/pet-noise-soundproof-measures`・`creator/streamer-pet-noise-balance` | `outlines/C04-pet-dog-booth.md` |
| C06 | 防音賃貸はなぜ高い？ | 0 | `soundproof-rental/rental-price-index-13cities-soundproof`・`soundproof-rental-cost-performance-guide` | `outlines/C06-why-soundproof-rental-expensive.md` |
| C07 | ペット可×防音賃貸 | 0 | `soundproof-rental/pet-noise-soundproof-measures` | `outlines/C07-pet-allowed-soundproof-rental.md` |

## 片付けたもの（2026-11-14）

- 完了: 優先A（2026-10-19）、B01〜B08（10/22〜10/27。B05 は耳の記事へ統合）。アウトラインは削除
- 見送り: C05 ゴルフ（GSC 0、アウトライン自身が「需要がなければ作らない」）。アウトラインは削除
- 元の一覧 `source-query-list-20261015.md` は根拠の参照用に残す（候補の追加はこの README にする）
- ラッコの元 CSV 2本は `projects/query-check/data/`（コミットしない）
