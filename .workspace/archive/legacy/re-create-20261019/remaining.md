# re-create 残件（作業ファイル）— 2026-10-19に完了・アーカイブ

> 2026-10-19に全件を処理し、`re-create/`フォルダごと`archive/re-create-20261019/`へ移した。残った2件は`schedule/2026-11-02-m10-monthly-analysis.md`（S-11）へ移した: §2 #8の家賃表＝W-28節、§3の保留＝W-21節。

更新: 2026-10-19 / 対象: `lastmod`が2026-08より前の73記事のうち、**作業が残っているものだけ**。完了分（リライト32・統合21・統合せず残した8）の記録は、すべて `../` に移した（§4）

- 数字: 3か月＝2026-09-26時点の累計（現行URLのみ）、16か月＝旧URLを含む（GSC 2026-10-11取得、`/en/`は除く）。**判断は16か月で見る**
- 「推奨」は、データと本文を見たClaudeの**案**。確定は §1 表の「方針(ユーザー記入)」欄（リライト／統合→統合先slug／削除／保留）
- 統合・排除は、`bouon-internal-link-ops` skill で被リンクを確認し、旧URLを301（`public/.htaccess`・`astro.config.mjs`を同時に変更）にし、旧記事の削除・内部リンク正本の再生成・`pnpm build`まで1回の公開でまとめる。処理した行は本ファイルから削除する

## 全体の状況

| 区分 | 本数 | 場所 |
|---|---|---|
| 判断待ち（配信者以外） | 0（2026-10-19に全件処理） | §1 |
| 配信者クラスタの残作業 | 0（#8の家賃表はS-11のW-28節へ移動） | §2（2026-10-19に#1〜#7を処理） |
| 保留（効果測定中） | 0（S-11のW-21節へ移動） | §3 |

## 1 判断待ち（配信者以外）— 2026-10-19に全件処理

ユーザーの指示（各行の`[!forAI]`）どおりに処理した。変更内容・旧タイトル・基準値・効果測定は `../../schedule/2026-11-02-m10-monthly-analysis.md` の「re-create判断待ち9本の処理」節にまとめた（未デプロイ）。

| バッチ#番号 | slug | 処理 |
|---|---|---|
| 01#7 | soundproof-rental/rental-caution-cello | 統合を取り消してリライト（T-27、`archive/task-list-37.md`） |
| 01#2 | knowledge/why-your-80-percent-rug-rule-fails | 統合して301 → `knowledge/vibration-reduction-science`（forAIなし。推奨どおり） |
| 01#6 | knowledge/diy-soundproof-truth | 統合して301 → `diy/diy-soundproof-room-failures-solutions`（「不都合な真実＝仕上げきれなかった自分への悔しさ」の節を追加） |
| 05#44 | knowledge/dry-floating-floor-natural-frequency | 統合して301 → `knowledge/vibration-isolation-technology-trend`（ばねの選び方は統合先へ移した） |
| 02#15 | knowledge/proofroom-maker-2025productcheck | 排除して301 → `soundproof-room/bouon-osusume-hikaku` |
| 03#29 | business/soundproof-industry-news-2026-06 | 排除して301 → `soundproof-rental/bouon-rental-market-guide`（ニュースはThreads投稿で扱う） |
| 01#9 | knowledge/biophilic-acoustics | 研究データでリライト、タイトル変更 |
| 05#47 | diy/parenting-generation-quiet-corner-diy | 夜泣きの交代で眠る部屋に軸を変えてリライト、タイトル変更 |
| 03#21 | diy/outdoor-soundproof-curtain-market-guide | 一般向け（家庭・間仕切り）にリライト、タイトル変更 |
| 03#23 | knowledge/future-ssi-silent-speech-interface-revolution | 再リサーチしてリライト、タイトルから「防音Lab」を外した |

- 残した点: `knowledge/soundproof-material-spec-chart`（§3で保留中）の本文にある屋外用防音カーテン記事へのリンクは、アンカーが旧タイトルのまま（リンク先は有効）。保留が明けたら直す

根拠の詳細は [../re-create-docs-20261013/consolidation-pending-batch01-05.md](../re-create-docs-20261013/consolidation-pending-batch01-05.md)。

## 2 配信者クラスタの残作業

統合（9グループ）は完了し、記録は [../re-create-docs-20261013/cluster-streamer.md](../re-create-docs-20261013/cluster-streamer.md) §10〜§13。2026-10-19に8項目を処理し、残りは#8の後半だけ。変更と効果測定は `../../schedule/2026-11-02-m10-monthly-analysis.md`（S-11）の「配信者クラスタの残作業」節とW-34。

| # | 作業 | 状態 |
|---|---|---|
| 1 | `creator/game-streamer-sound-types` を音の種類を振り分ける記事に役割変更 | 2026-10-19 完了（未デプロイ）。タイトル変更 |
| 2 | 旧URL `/posts/keyboard-sound-streaming-soundproof-guide/` の転送先をT-25枝Aへ | 完了（T-25、2026-10-19に本番の301を確認） |
| 3 | ASMRの旧URL3本の転送先を `creator/asmr-external-noise-elimination` へ | 完了（2026-10-17変更、2026-10-19に本番の301を確認） |
| 4 | 旧URL `rental-game-soundproof-booth-3man` 2本の転送先 | 2026-10-19 変更（未デプロイ）→ `diy/closet-diy-soundproof-room` |
| 5 | トップのカード `sound-leak` のボタンの先 | 2026-10-19 決定: `/ja/creator/`のまま。所属を4本→6本に補強（未デプロイ）。カード文言の再設計はT-21で |
| 6 | アフィリエイト `humidifier-vaporizer-daikin` | 2026-10-19 削除（記事での使用なし） |
| 7 | `diy/diy-refrigeration-noise-reduction`・`report-japan-asmr-vtuber-streaming-studio-standard` を別クラスタへ | 2026-10-19 完了（未デプロイ）。前者は冷蔵庫の振動音の記事へ、後者は`knowledge/`へ移して暗騒音（NC値）の記事へ作り直し・301 |
| 8 | 統合先の出典確認 | 耐用年数は確認済み（税理士確認の書き方、2026-04-01からの少額減価償却40万円未満を反映済み）。**残り**: 賃貸選びガイドのミュージション家賃表（本サイト調査2026-06-24、26棟）の更新。急がない。W-28の作り直しの一部。**2026-10-19にS-11のW-28節へ移動** |

- 対象外（残す）: ブース運用3本（チェア・匂い・配線）、台パン・ホラー絶叫・苦情対応・ペット・実家の費用交渉・スマホ配信・音質優先・歌い手・レイアウト（`streaming-room-layout-guide` は入口⑤を作らず、そのまま残す）
- 別項目で管理: チェロ記事＝T-27（2026-10-19完了、統合を取り消し）、仙台の防音賃貸記事の裏取り＝T-28（2026-10-19完了、音大生記事へ統合・301）

## 3 保留（1本）

| バッチ#番号 | category/slug | タイトル | 3か月 表示/クリック/順位 | GA4(3週) | 理由 |
|---|---|---|---|---|---|
| 08#72 | knowledge/soundproof-material-spec-chart | 防音材スペック早見表｜面密度・TL値・D値の対応を一覧で比較できる資料 | 72 / 1 / 12.75 | 77 | W-21で効果測定中のため着手しない > [!forAI]10月末に確認するのでschedule-taskに移動 → **2026-10-19にS-11のW-21節へ移動** |

## 4 完了の記録（アーカイブ）

- 各バッチの作業メモ（batch-01〜08。記事ごとの変更内容・検証・統合を取り下げた理由）: `../re-create-batch-01-08-20261013/`
- 配信者クラスタの設計と実施記録、優先度ビュー、統合案の結末、判断待ち9本の詳細: `../re-create-docs-20261013/`（ファイル一覧は同フォルダの `README.md`）
- 効果測定: `weekly-task.md` W-29〜W-34
