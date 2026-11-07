# T-47 インデックス未登録34本の扱い（2026-11-06）

`.task-management/records/2026-11-06-T-47-unindexed-decisions.md` の本体。結論は **待つ 16本・作り直し 4本・noindex 4本・統合 10本**。

## 使ったデータ

| データ | 内容 |
|---|---|
| `2026-11-01-e-inspect.csv` | URL 検査（11/01 時点）。登録状況・最終クロール日。**今日の再検査はしていない** |
| `query-check/data/GSC-16month-…/ページ.csv` | 旧URLを含む16か月の表示・クリック（slug の末尾で突き合わせ） |
| `access-data/api/monthly/2026/m{08,09,10}/bing-page.csv` | Bing の3か月 |
| `git log --numstat` | 最終クロールの後に足された行数 |
| `src/content/ja/`・`.workspace/projects/indexing/index-url.md` | 文字数・被リンク（本文からのリンク数）・CTA・H2、申請の履歴 |

## 判断の基準

1. **検出のみ**（Google が読んでいない）は内容の評価が出ていないので、統合も書き直しもしない
2. **最終クロールの後に大きく直した記事**は、今の内容がまだ評価されていない。書き直さず申請する。目安は足した行が70行以上
3. **今の内容に近いものを読まれて未登録**の記事は、内容に理由がある。需要か収益導線があれば作り直す。なければ、近い登録済み記事があれば統合、なければ noindex
4. noindex は旧URLを含む16か月で表示が少ない記事だけにする（2026-10-13 の解除の反省）
5. 統合先が効果測定中なら、判定が済むまで待つ

CTA のある4本（T-47 が先に見るとした記事）の結論は、`bouon-osusume-hikaku`・`kawai-nasal`・`shimamura-music` が作り直し、`budget-soundproof-booth-comparison` は待つ。`noise-regulation-update-2025` は公開・サイトマップ・canonical に問題がなく、申請の最優先。

## 待つ（申請して再クロールを待つ） 16本

| 記事 | 状態・最終クロール | クロール後の追加 | 字数 | 被リンク | CTA | 16か月 クリック/表示 | Bing クリック/表示 | 実施 | 理由 |
|---|---|---:|---:|---:|---:|---:|---:|---|---|
| `knowledge/noise-regulation-update-2025` | 不明 — | +119 | 2,987 | 4 | 1 | 15/6,665 | 19/282 | T-54 | 公開・サイトマップ・canonical は正常（11/06 本番確認）。Google が URL を知らないだけ。旧URLに16か月 6,665表示があり Bing も19クリック。申請の最優先 |
| `soundproof-room/budget-soundproof-booth-comparison` | クロール 06/04 | +189 | 4,001 | 20 | 1 | 10/512 | 0/3 | T-58→T-54 | 最終クロール6/4の後に大きく更新。被リンク20で旧URLに実績あり。先に「地獄化」のタイトルだけ直してから申請 |
| `soundproof-room/proofroom-aircondition-select` | クロール 07/06 | +197 | 5,389 | 14 | 0 | 2/158 | 3/40 | T-54 | 7/6 のクロール後に9月の拡充が入った。Bing 3クリック・被リンク14。温湿度の記事（登録済み）とは冷房選びで分かれる |
| `local/chiba-soundproof-rental-guide` | クロール 06/01 | +151 | 4,492 | 6 | 0 | 1/83 | 0/0 | T-54 | 6/1 のクロール後に10月まで更新。都心との比較という固有の切り口がある |
| `diy/diy-soundproof-room-failures-solutions` | クロール 06/30 | +73 | 4,175 | 7 | 0 | 0/94 | 0/1 | T-54 | 6/30 のクロール後に更新。被リンク7 |
| `diy/outdoor-soundproof-curtain-market-guide` | クロール 07/06 | +112 | 4,159 | 2 | 0 | 0/0 | 0/0 | T-54 | 10/19 に書き直し。Google はまだ読んでいない |
| `knowledge/future-ssi-silent-speech-interface-revolution` | クロール 07/04 | +113 | 4,376 | 2 | 0 | 0/0 | 0/3 | T-54 | 10/19 に書き直し。需要は小さいので m11 でも未登録なら noindex の候補 |
| `soundproof-room/soundproof-performance-drum` | クロール 07/04 | +116 | 2,703 | 6 | 0 | 2/32 | 0/0 | T-54 | 7/4 のクロール後に T-27 などで更新 |
| `money/soundproof-room-buyback-guide` | クロール 06/30 | +210 | 4,525 | 11 | 0 | 1/9 | 0/0 | 申請済み | 10/13 に売却特化へ書き直し、申請済み。被リンク11 |
| `creator/one-room-streaming-soundproof` | クロール 08/31 | +156 | 4,631 | 6 | 0 | 4/255 | 0/0 | 申請済み | 10/13 に書き直し、10/16 に申請済み。W-28 の判定（m11）を待つ |
| `creator/singer-instrumentalist-stream-soundproof` | 検出 — | +157 | 3,915 | 1 | 2 | 0/0 | 0/0 | 申請済み | 検出のみ。10/13 に統合先として補強し、10/16 に申請済み。W-28 と同じ |
| `local/fukuoka-soundproof-rental-guide` | 検出 — | +381 | 9,070 | 6 | 0 | 1/64 | 1/2 | T-54 | 検出のみ＝内容の評価はまだ。地元発の全戸防音マンションの節など固有の情報がある |
| `local/nagoya-soundproof-rental-guide` | 検出 — | +319 | 6,624 | 6 | 0 | 0/26 | 0/1 | T-54 | 検出のみ＝内容の評価はまだ。評価が出るまで統合しない |
| `local/hamamatsu-soundproof-rental-guide` | 検出 — | +190 | 4,740 | 2 | 0 | 0/0 | 0/0 | T-54 | 検出のみ。楽器の街という固有の切り口。評価が出るまで統合しない |
| `soundproof-rental/soundproof-rental-cost-performance-guide` | 検出 — | +367 | 10,110 | 5 | 0 | 0/0 | 2/4 | T-54 | 検出のみ。10/19 に書き直し済み。家賃相場の記事と重なるので、評価が出たら役割を整理する |
| `soundproof-room/assembly-type-comparison` | 検出 — | +190 | 5,065 | 9 | 3 | 0/0 | 1/16 | T-54 | 検出のみ。CtaBox 3個・被リンク9・Bing 16表示。比較記事の役割は `bouon-osusume-hikaku` の作り直しで分ける |

## 作り直し 4本

| 記事 | 状態・最終クロール | クロール後の追加 | 字数 | 被リンク | CTA | 16か月 クリック/表示 | Bing クリック/表示 | 実施 | 理由 |
|---|---|---:|---:|---:|---:|---:|---:|---|---|
| `soundproof-room/bouon-osusume-hikaku` | クロール 07/06 | +62 | 4,809 | 18 | 3 | 20/1,046 | 1/119 | T-58 | サイトの比較の柱（CtaBox 3個・被リンク18・旧URLに20クリック）。7/6 の後の更新は小さい。タイトルの「ROI」は読者の検索語でも悩みの解消軸でもない。組み立て式・格安との役割分担も決める |
| `soundproof-room/kawai-nasal-soundproof-room-guide` | クロール 09/26 | +2 | 2,513 | 9 | 1 | 2/88 | 7/110 | T-58 | 9/26 に最新に近い内容を読まれて未登録。2,513字と薄く、Bing に7クリックの需要がある。指名検索として価格・仕様を一次情報で厚くする |
| `soundproof-room/shimamura-music-soundproof-room-guide` | クロール 07/04 | +24 | 2,959 | 2 | 1 | 0/5 | 0/1 | T-58 | 7/4 の後の更新は小さい。CtaBox あり・指名語。被リンク2なので内部リンクも足す |
| `money/streamer-tax-strategy` | クロール 08/06 | +39 | 2,489 | 5 | 0 | 0/15 | 0/0 | T-58 | 「防音室 経費」に答える記事はほかにない。8/6 の後の更新は小さく、断定の強い税務の話なので出典を確かめて書き直す |

## noindex 4本

| 記事 | 状態・最終クロール | クロール後の追加 | 字数 | 被リンク | CTA | 16か月 クリック/表示 | Bing クリック/表示 | 実施 | 理由 |
|---|---|---:|---:|---:|---:|---:|---:|---|---|
| `business/global-soundproof-market-trends` | クロール 09/25 | +1 | 1,912 | 2 | 0 | 0/0 | 0/0 | T-55 | 1,912字。9/25 に読まれて未登録、16か月の表示0。読者の悩みに答える記事ではない |
| `business/soundproof-market-esg-trend` | クロール 07/01 | +12 | 2,966 | 1 | 0 | 0/25 | 0/0 | T-55 | 16か月 25表示・0クリック。業界向けの話で、サイトの読者とずれる |
| `knowledge/neighborhood-noise-seasonal-pattern-statistics` | クロール 07/02 | +3 | 2,748 | 2 | 0 | 1/16 | 0/0 | T-55 | 7/2 から更新は3行。16か月 16表示・1クリック。統計の出典を確かめ直す費用が需要に合わない |
| `soundproof-rental/child-rearing-soundproof-pillar` | クロール 09/25 | +6 | 3,033 | 5 | 0 | 0/1 | 0/0 | T-55 | 9/25 に読まれて未登録、16か月 1表示。「完全ガイド」と広く、オーナー向けまで混ざる。子育ての音は登録済みの2本が受ける |

## 統合（301） 10本

| 記事 | 状態・最終クロール | クロール後の追加 | 字数 | 被リンク | CTA | 16か月 クリック/表示 | Bing クリック/表示 | 実施 | 理由 |
|---|---|---:|---:|---:|---:|---:|---:|---|---|
| `money/soundproof-window-subsidy-2025-guide` | クロール 09/25 | +39 | 3,761 | 3 | 0 | 0/11 | 0/3 | T-56 → `money/soundproof-subsidy-news-2025` | 同じ先進的窓リノベ2026の話で、登録済みの記事がある。交付申請が12/31までなので先に行う |
| `soundproof-rental/noise-canceling-headphones-sleep` | クロール 06/01 | +20 | 2,814 | 4 | 0 | 1/41 | 0/0 | T-56 → `soundproof-rental/bedroom-noise-type-solution-guide` | 6/1 の後の更新は小さい。寝室の騒音対策の1節に収まる。16か月 41表示・1クリックは統合先へ渡す |
| `diy/danbocchi-floor-protection` | クロール 09/01 | +17 | 2,690 | 2 | 1 | 0/0 | 0/1 | T-56 → `soundproof-rental/apartment-weight-limit-500kg` | 9/1 に読まれて未登録、16か月0。床の荷重の話は登録済みの記事に節として足せる |
| `diy/danbotchi-diy-blueprints` | クロール 08/28 | +33 | 1,500 | 3 | 1 | 0/3 | 0/0 | T-57 → `diy/closet-diy-soundproof-room` | 1,500字と最も薄い。自作ブースの寸法例は統合先の節になる。統合先は T-43 バッチ2の検収後 |
| `soundproof-room/hsp-soundproof-curtain-guide` | クロール 07/01 | +19 | 2,359 | 9 | 0 | 0/0 | 0/0 | T-57 → `soundproof-room/hsp-soundproof-room-guide` | 16か月0。読者が同じなので「防音室の前にカーテン」の節にする。統合先は T-43 バッチ2の検収後 |
| `money/telework-soundproof-loan-strategy` | クロール 07/21 | +14 | 2,815 | 3 | 0 | 0/0 | 0/0 | T-57 → `money/soundproof-room-loan-guide` | 16か月0。10/07 に別維持としたが、登録されないまま。**10/07 の判断を変えるので承認が要る**。統合先は T-45 の最終判定後 |
| `local/hiroshima-soundproof-rental-guide` | クロール 06/30 | +38 | 2,522 | 3 | 0 | 1/7 | 0/0 | T-57 → `local/regional-city-soundproof-rental-guide` | 10/06 の地方都市の統合と同じ型。音大エリアの節を移す。統合先は T-35 の判定後 |
| `local/sapporo-soundproof-rental-guide` | クロール 07/03 | +26 | 3,019 | 2 | 0 | 0/5 | 0/0 | T-57 → `local/regional-city-soundproof-rental-guide` | 同上。二重窓の節を移す |
| `local/kobe-soundproof-rental-guide` | クロール 07/01 | +14 | 5,184 | 4 | 0 | 1/73 | 0/0 | T-57 → `local/regional-city-soundproof-rental-guide` | 7/1 の後の更新は14行。名古屋・浜松と見出しが同じひな形で、都市名を変えただけに見える |
| `soundproof-rental/noise-complaint-landlord-negotiation-guide` | クロール 09/26 | +8 | 2,604 | 7 | 0 | 0/0 | 0/0 | T-57 → `knowledge/noise-complaint-legal-precedent-manual` | 9/26 に読まれて未登録、16か月0。統合先と内容が重なる。統合先は T-44 の判定後（T-48 の候補でもある） |

## 実施の順番

タスクは `.task-management/task.md` の T-54〜T-59。

| 順 | ID | 内容 | 日付 |
|---|---|---|---|
| 1 | T-54 | 待つ記事の申請12本（ユーザー）。`budget-soundproof-booth-comparison` は T-58 の後 | 11/11 |
| 2 | T-55 | noindex 4本 | 11/12 |
| 3 | T-56 | 統合 先行3本 | 11/18 |
| 4 | T-58 | 作り直し4本＋`budget` のタイトル | 11/20 |
| 5 | T-59 | 34本の再検査と判定（T-39 内） | 12/02 |
| 6 | T-57 | 統合 後続7本（統合先の判定が済んだもの） | 12/03〜 |

## T-43（語り手リライト）への反映

- 保留19本のうち、バッチに入れてよいのは「待つ」の記事だけ。統合・noindex の記事は入れない。作り直しの記事は T-58 の中で語り手も合わせる
- local の保留: 福岡・名古屋・浜松・千葉は登録されてから。広島・札幌・神戸はバッチに入れない
- business の保留: `global-soundproof-market-trends`・`soundproof-market-esg-trend` はバッチに入れない
