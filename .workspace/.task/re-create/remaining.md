# re-create 残件（作業ファイル）

更新: 2026-10-13 / 対象: `lastmod`が2026-08より前の73記事のうち、**作業が残っているものだけ**。完了分（リライト32・統合21・統合せず残した8）の記録は、すべて `../archive/` に移した（§4）

- 数字: 3か月＝2026-09-26時点の累計（現行URLのみ）、16か月＝旧URLを含む（GSC 2026-10-11取得、`/en/`は除く）。**判断は16か月で見る**
- 「推奨」は、データと本文を見たClaudeの**案**。確定は §1 表の「方針(ユーザー記入)」欄（リライト／統合→統合先slug／削除／保留）
- 統合・排除は、`bouon-internal-link-ops` skill で被リンクを確認し、旧URLを301（`public/.htaccess`・`astro.config.mjs`を同時に変更）にし、旧記事の削除・内部リンク正本の再生成・`pnpm build`まで1回の公開でまとめる。処理した行は本ファイルから削除する

## 全体の状況

| 区分 | 本数 | 場所 |
|---|---|---|
| 判断待ち（配信者以外） | 10 | §1 |
| 配信者クラスタの残作業 | 8項目 | §2（統合は2026-10-13に9グループ完了。`creator/` 36本→26本） |
| 保留（効果測定中） | 1 | §3 |

## 1 判断待ち（配信者以外・10本）

| バッチ#番号 | category/slug | タイトル | 文字数 | 3か月 表示/クリック/順位 | 16か月 表示/クリック | 優先度 | 推奨 | 根拠 | 方針(ユーザー記入) |
|---|---|---|---|---|---|---|---|---|---|
| 01#7 | soundproof-rental/rental-caution-cello | 楽器可物件でもチェロは要注意？防音賃貸の規約と落とし穴 | 1,361 | 9 / 0 / 8.78 | 19 / 4 | P3 | 統合を取り消す（推奨）か、維持してファイルを削除 | サックス記事にチェロの節と301は設定済み、ファイル残置。デプロイ前に決める（`task-list.md` T-27、ユーザーが個別に対応）。Bingで「チェロ エンドピン 床に振動 減らす」3.75位など | **2026-10-19 統合を取り消し、エンドピン・防振マット・床の悩みでリライト（T-27完了、`archive/task-list-37.md`）** |
| 01#2 | knowledge/why-your-80-percent-rug-rule-fails | 北米の80%ラグルールが失敗する理由｜日本の積層物理学で振動を止める | 2,138 | 0 / 0 / - | 2 / 0 | P4 | 統合して301 → `knowledge/vibration-reduction-science` | 表示0。内容は床の振動（ラグ・マットで防げない理由）で、統合先と同じ悩み。関連クエリ「ジョイントマット 防音 意味ない」。被リンク2 |  |
| 01#6 | knowledge/diy-soundproof-truth | DIY防音の不都合な真実を解説｜科学的根拠に乏しい製品を見抜く思考法 | 2,131 | 7 / 0 / 20.14 | 8 / 0 | P3 | 統合して301 → `diy/diy-soundproof-room-failures-solutions` | 順位20位・表示7。「科学的根拠に乏しい製品を見抜く」は、DIY失敗例の記事と役割が重なる。被リンク2 |  |
| 01#9 | knowledge/biophilic-acoustics | バイオフィリック・アコースティック：苔と緑で「静寂の庭」を壁に作る技法 | 1,465 | 6 / 0 / 2.5 | 12 / 0 | P3 | 現状維持。苔の吸音の根拠（研究・構造）を足すリライト | 1,465字と薄いが、Bingで「苔 吸音 効果」「苔 防音 研究」「苔 防音 構造」が2位。被リンク2 |  |
| 05#44 | knowledge/dry-floating-floor-natural-frequency | 防振ゴムを入れたのに振動が増えた｜乾式浮き床の固有振動数の考え方 | 2,081 | 28 / 0 / 35.75 | 28 / 0 | P3 | 現状維持 | 固有振動数の考え方は `vibration-isolation-technology-trend` に要点を入れ済み（10/13）。ただし「ばねの選び方」は独自の内容で、統合すると失われる。表示28。被リンク2 |  |
| 05#47 | diy/parenting-generation-quiet-corner-diy | 子育て世代のDIY「一人になれる場所」｜1万円台から始める段階的な作り方 | 2,910 | 7 / 1 / 16.43 | 7 / 1 | P3 | 現状維持 | `quiet-space-budget-decision-guide` に「0〜3万円」の節を足した（10/13）が、本記事は「1万円台から始める段階的な作り方」で手順が詳しい。統合すると長くなりすぎる。被リンク3 |  |
| 02#15 | knowledge/proofroom-maker-2025productcheck | 防音室メーカー最新ニュース｜新製品・モデルチェンジ | 5,426 | 0 / 0 / - | 55 / 0 | P4 | 排除（要点は `soundproof-room/bouon-osusume-hikaku` へ。301） | 3か月は表示0（旧URL含め16か月で55・クリック0）。出典の確認できない記述が多い（「2020〜2025年の市場変化」など）。被リンク2 |  |
| 03#29 | business/soundproof-industry-news-2026-06 | 防音賃貸・防音室ニュースまとめ｜2026年最新の業界動向と新製品情報 | 2,670 | 0 / 0 / - | 0 / 0 | P4 | 更新型の1本として残す | 表示0だが、リブランの公表情報など一次情報にもとづく部分がある。被リンク2 |  |
| 03#21 | diy/outdoor-soundproof-curtain-market-guide | 【市場整理】屋外用防音カーテン｜防音シートの構造と調達・選定の実務ポイント | 4,235 | 0 / 0 / - | 0 / 0 | P4 | 排除（301先は `knowledge/soundproof-material-spec-chart`、または410） | 表示0。屋外用防音カーテンの市場整理で、建設現場寄り。被リンク2（`hsp-soundproof-curtain-guide` など。付け替えが必要） |  |
| 03#23 | knowledge/future-ssi-silent-speech-interface-revolution | 2030年の防音Lab：無声音声インターフェース(SSI)が「遮音」の常識を | 2,409 | 0 / 0 / - | 0 / 0 | P4 | 現状維持（表示0が続くなら排除） | 「軸外／ニッチ」だが害はない。専門性（E-E-A-T）として残す選択もある。被リンク2 |  |

判断してほしいこと（優先順）:

1. ~~01#7 チェロ記事~~: 2026-10-19に統合を取り消してリライト済み（T-27完了）
2. 01#2・01#6: 推奨どおり統合して301にしてよいか
3. 01#9・05#44・05#47: 推奨どおり現状維持（01#9は苔の根拠を足すリライト）でよいか
4. 02#15・03#29（ニュース系）: 02#15を排除し、03#29を更新型として残す（推奨）でよいか
5. 03#21・03#23: 排除か、現状維持か

根拠の詳細は [../archive/re-create-docs-20261013/consolidation-pending-batch01-05.md](../archive/re-create-docs-20261013/consolidation-pending-batch01-05.md)。

## 2 配信者クラスタの残作業

統合（9グループ）は完了し、記録は [../archive/re-create-docs-20261013/cluster-streamer.md](../archive/re-create-docs-20261013/cluster-streamer.md) §10〜§13。効果測定は `weekly-task.md` W-28・W-32・W-33・W-34。残るのは次の8項目。

| # | 作業 | 担当 | 条件・メモ |
|---|---|---|---|
| 1 | `creator/game-streamer-sound-types` を、音の種類を振り分ける記事に役割変更する（打鍵音はT-25の枝Aへ） | Claude+ユーザー | T-25と調整。未登録・2表示 |
| 2 | 旧URL `/posts/keyboard-sound-streaming-soundproof-guide/`（646表示・16クリック）の転送先を、`/ja/creator/` からT-25の枝Aに変更する | Claude | T-25の新記事の公開と同時。変更は `.htaccess` と `astro.config.mjs` を同時に |
| 3 | 旧URL `/posts/asmr-soundproof-environment-guide/`（121表示・8クリック）と `/posts/asmr-proofroom-guide/`（120表示・8クリック）、`/ja/use-case/asmr-proofroom-guide/` の転送先を、`/ja/creator/` から `creator/asmr-external-noise-elimination` に変更する | Claude | 土台が登録されてから（W-34）。現在の土台は未登録 |
| 4 | 旧URL `/posts/rental-game-soundproof-booth-3man/`（70表示・7クリック）と `/ja/use-case/rental-game-soundproof-booth-3man/` の転送先を決める（現在は `/ja/soundproof-rental/`） | Claude+ユーザー | 旧記事の内容を確認する。候補は `creator/collab-streaming-soundproof-space` か `creator/streamer-rental-selection-guide` |
| 5 | トップのハブカード `sound-leak`（`src/data/hubClusters.ts`）のボタンの先を、`/ja/creator/` のままにするか、音の発生源のハブ記事（T-25のW5）にするかを決める | ユーザー | T-21（入口カード再設計）と一緒に。カード所属は4本（総合ガイド・ワンルーム配信・ギター・在宅）。約束（楽器・在宅）とボタンの先（配信者の記事のみ）が合っていない |
| 6 | アフィリエイトカード `humidifier-vaporizer-daikin`（`src/data/affiliates.ts`）の商品と説明を見直す | ユーザー | 「ダイキン 気化式加湿器 MCK70Y」は、確認できた範囲で加湿ストリーマ空気清浄機（加湿は最大700mL/h・19畳）。約5m³の防音室には過大。加湿器の記事からは外してある |
| 7 | 別クラスタへ移すか決める: `diy/diy-refrigeration-noise-reduction`（3表示）、`business/report-japan-asmr-vtuber-streaming-studio-standard`（6表示。事業者向けの技術解説） | ユーザー | 配信者の記事ではなく、DIY／事業者クラスタの変種。今のまま残して害はない |
| 8 | 統合先の出典確認: 総合ガイドの耐用年数（税理士確認の書き方にしてある）、賃貸選びガイドのミュージション家賃表（本サイト調査2026-06-24、26棟）の更新 | Claude | 急がない。W-28の作り直しの一部 |

- 対象外（残す）: ブース運用3本（チェア・匂い・配線）、台パン・ホラー絶叫・苦情対応・ペット・実家の費用交渉・スマホ配信・音質優先・歌い手・レイアウト（`streaming-room-layout-guide` は入口⑤を作らず、そのまま残す）
- 別項目で管理: チェロ記事＝T-27（2026-10-19完了、統合を取り消し）、仙台の防音賃貸記事の裏取り＝T-28（2026-10-19完了、音大生記事へ統合・301）

## 3 保留（1本）

| バッチ#番号 | category/slug | タイトル | 3か月 表示/クリック/順位 | GA4(3週) | 理由 |
|---|---|---|---|---|---|
| 08#72 | knowledge/soundproof-material-spec-chart | 防音材スペック早見表｜面密度・TL値・D値の対応を一覧で比較できる資料 | 72 / 1 / 12.75 | 77 | W-21で効果測定中のため着手しない |

## 4 完了の記録（アーカイブ）

- 各バッチの作業メモ（batch-01〜08。記事ごとの変更内容・検証・統合を取り下げた理由）: `../archive/re-create-batch-01-08-20261013/`
- 配信者クラスタの設計と実施記録、優先度ビュー、統合案の結末、判断待ち9本の詳細: `../archive/re-create-docs-20261013/`（ファイル一覧は同フォルダの `README.md`）
- 効果測定: `weekly-task.md` W-29〜W-34
