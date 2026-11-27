# .workspace/.data-set/ 索引とルール

記事執筆・リライト・企画のための**ナレッジ置き場**。何がどこにあり、どれが新しいかをここに記録し、**全文を読まずに必要な節だけ取る**ための入口。検索・目次・索引チェックは `bouon-dataset-lookup` skill のスクリプトで行う。

## 1. 基本ルール

1. **索引から入る。** 探したいテーマを §3 の早見表で引く。載っていなければ `find` で検索する（§6）
2. **全文を読まない。** 大きいファイルは `outline` で節の行番号を出し、Read の `offset`/`limit` で必要な節だけ読む
3. **ここの情報は「調査の起点」であり、事実の最終根拠ではない。** 価格・補助金額・制度・実在企業名・統計は、記事に書く前に `bouon-research` skill の手順で一次情報を確認する。特に §2 の鮮度が △ のものは必ず再確認する
4. **鮮度ラベルを確認してから使う**（§2）。古い生成物（✕）は読まない
5. 新しいデータを足したら、**同じ編集で本ファイルの索引に追記**し、`check` でずれがないことを確認する（§7）
6. `.archieve/`（綴りはこのまま）は `.gitignore` 対象のローカル専用旧データ。編集しない。参照のみ

## 2. 鮮度ラベル

| ラベル | 意味 | 使い方 |
|---|---|---|
| ◎ | 自動生成で常に最新、または2026年6月以降の調査 | そのまま参照してよい（数値は記事側で再確認） |
| ○ | 2026年3〜5月の調査・分析 | 傾向の把握に使う。数値は再確認 |
| △ | 2025年〜2026年2月の旧データ（主に `.archieve`） | 着想・構成の材料に限る。事実は必ず一次情報で再確認 |
| ✕ | 陳腐化した生成リスト、廃止済み戦略 | 読まない |

## 3. 記事作成時の取得先 早見表

| 知りたいこと | まず見る | 補足・鮮度 |
|---|---|---|
| 内部リンクの存在確認・記事一覧（slug/title/category/tags） | `interlink-postlist.md` | ◎ 正本。再生成は `node .workspace/scripts/build-interlink-postlist.mjs`。ルールは `bouon-internal-link-ops` skill |
| 内部リンク候補（同じカテゴリ・共有タグの記事） | `interlink-tag-clusters.md` | ◎ 175KBと大きい。全文を読まず、`find` でタグ名・カテゴリ名を検索する |
| 防音室を探す人の本音・意思決定の阻害要因 | `knowledge/serp/soundproof-room-user-needs.md` | ○ |
| ホームシアター・カラオケの防音設計（Dr値、残響、浮き床、換気、費用） | `knowledge/methods/analysis-hometheater-karaoke-design.md` | ○ 節ごとにA〜Fの記号つき |
| 防音賃貸の本音・契約までの不安 | `knowledge/serp/soundproof-rental-user-needs.md` | ○ |
| 防音賃貸の都市別市場（東京・大阪・名古屋・福岡・仙台） | `knowledge/data/analysis-rental-market-2026.md` | ○ 2026年4月版 |
| 防音賃貸の家賃相場・都心と郊外の差・防音プレミアム | `knowledge/data/research-rent-price-urban-suburban-gap-2026-06.md` | ◎ 2026-06-24。記事構成用のコスパ判断フレームつき |
| 賃貸アフィリエイトの導線設計 | `06_リサーチ・管理/strategy-affiliate-rental.md` | ○ 実際のリンクは `src/data/affiliates.ts` |
| 配信者・VTuberの課題、ステップアップ | `knowledge/methods/analysis-streamer-solutions-expert.md`、`knowledge/methods/analysis-streamer-needs-infrastructure.md` | ○ |
| 配信機材（PCファン騒音、ペット同居配信） | `knowledge/products/research-2026-06-10-streamer-equipment.md` | ◎ 記事slug別のメモ |
| 楽器別の防音要件（ピアノ・ドラム・弦・管、ヤマハ/カワイ） | `knowledge/products/analysis-brand-instrument-selection.md` | ○ 短い要約。詳細は §5 の旧データ |
| DIYと音響物理（質量則、よくある誤解） | `knowledge/methods/analysis-physics-diy-acoustics.md` | ○ 短い要約。詳細は §5 の旧データ |
| 無声音声インターフェース（SSI） | `knowledge/methods/silent-speech-interface-research.md` | ○ ニッチ |
| 防音室の資産価値・ROI・ローン・税 | `knowledge/data/analysis-asset-investment-strategy.md` | ○ |
| 製品スペック（ヤマハ・カワイ等）・Dr値・測定基準・BtoB材料 | `knowledge/products/product_specifications.md` | ○ 2026-03-31。価格は再確認 |
| BtoB建材・メーカー・市場 | `knowledge/products/analysis-b2b-manufacturer-materials.md`、`knowledge/data/analysis-global-soundproof-blanket-market-2026.md` | ○ |
| 権威性UP用の補足データ（個室ブース市場、加湿器、ニトリ等） | `knowledge/data/research-2026-06-10-supplementary.md` | ◎ 反映先記事つき |
| `knowledge/products/research-2026-10-07-private-booth.md` | 個室ブースの防音室との違い、遮音dB公表値の比較（測定条件の注意）、価格・サブスク、消防法（可動式ブース）、需要チャネル（駅・大学・自治体・マンション共用部ほか）、未確認事項 | ◎ |
| 個室ブース（ワークブース）の遮音性能・価格・消防法・需要チャネル | `knowledge/products/research-2026-10-07-private-booth.md` | ◎ 2026-10-07。価格・消防庁基準は記事前に再確認。タスクはT-22 |
| タワーマンションの防音（床スラブ厚、ジム騒音） | `knowledge/data/tower-mansion-sound-insulation-memo.md` | ○ |
| 筆者（さしし）の体験・書き方の好み（記事の「筆者の体験」に使えるもの） | `author-experience.md` | ◎ 2026-11-14。体験チェックの回答から移した。ここにない体験は創作せず、アウトラインで質問する |
| dBの大きさを身近な空間で例える言い方（Dr値で下がったあとの音、夜間45dBなど） | `knowledge/data/db-familiar-sound-scale.md` | ◎ 2026-10-18。記事の例えは必ずこの表に揃える（正本） |
| 楽器別の防音室（ユニット）のDr値・広さ・簡易ブースの可否 | `knowledge/data/instrument-unit-guideline.md` | ◎ 2026-11-25。記事の楽器別の目安は必ずこの表に揃える（正本） |
| 検索クエリの勝ち筋・改善機会（3月時点） | `knowledge/serp/query-analysis-90days-20260324.md` | ○ 最新の実績は `.workspace/access-data/`（`bouon-weekly-report` skill） |
| 重要クエリと既存記事の突合（カバー済み／加筆／新規） | `seo-check/gsc-analysis-20260702/query-article-match-20260702.md` | ○ 前期データ基準 |
| ランキング崩壊・旧URL・リダイレクト漏れの調査 | `seo-check/gsc-analysis-20260702/ranking-collapse-root-cause-20260702.md`、`seo-check/gsc-analysis-20260702/redirect-gap-full-audit-20260702.md`、`seo-check/gsc-analysis-20260702/summary.md` | ○ 対応済みの記録。経緯の確認用。`ranking-collapse-root-cause`は2026-10-13に整理済み（結論・現在の指標・未対応のみ。対応済みの節と7月時点の履歴は`.workspace/archive/legacy/ranking-collapse-resolved-20261013.md`） |
| 404一覧（2026-09 監査） | `seo-check/gsc-404-audit-20260905/` | ○ CSVは `head` で見る |
| CTR改善・順位改善の対象ページ（W28版） | `ctr-check-list.md`、`pagerank-list.md` | ○ 2026-07-08。現在の対象は週報（`bouon-weekly-report`）で再判定する |
| 補助金・助成金・税制 | `.archieve` の `【補助金・税制】防音室_v2025.01.md`、`financial_support.md`、`【DB】防音窓・リフォームデータベース.md` | △ **必ず一次情報で再確認**（制度は毎年変わる）。`bouon-research` skill |
| 国内の防音業者・メーカー | `.archieve` の `【11_COMPANY】国内防音ソリューション企業DB.md`、`【まとめ】国内防音ソリューション企業体系化マップ.md` | △ 実在・現状をWebSearchで確認してから記載 |
| ユーザーの口コミ・体験談 | `.archieve` の `【12_VOICE】防音ユーザー体験談・PX.md`、`YouTubeの防音室紹介.md` | △ 傾向把握のみ。個別の主張は引用元を確認 |
| 防音室の価格帯・メーカー別価格 | `.archieve` の `【07_MARKET】市場データベース.md`、`【09_KEYWORD】SEOマーケティングデータ.md` | △ 価格は最新を確認 |
| 競合上位記事の分析（補助金・内窓・自作費用・暑さ対策など7クエリ） | `.archieve/target-query/` | △ 2026-03-16時点 |

## 4. フォルダ構成と各ファイル

### 直下（自動生成・チェックリスト）

| ファイル | 内容 | 鮮度 |
|---|---|---|
| `interlink-postlist.md` | 掲載記事の一覧（lang/category/slug/title/tags/internal_url/draft）。内部リンクの正本 | ◎ |
| `interlink-tag-clusters.md` | カテゴリ別・共有タグ別の記事クラスタ（`draft: false` のみ） | ◎ |
| `hub-cluster-list.md` | トップの入口カード6枚の所属記事（frontmatter `hub` の集計。所属の全記事から3本がアクセスごとにランダムで出る。表示順1〜3はJS無効時の初期表示）。再生成は `node .workspace/scripts/build-hub-list.mjs`（手編集しない） | ◎ 2026-10-07 |
| `ctr-check-list.md` | CTR改善チェックリスト（W28版、2026-07-08） | ○ |
| `pagerank-list.md` | 順位改善／深追い不要チェックリスト（W28版、2026-07-08） | ○ |
| `knowledge/data/tower-mansion-sound-insulation-memo.md` | タワマンの防音性能メモ | ○ |
| `author-experience.md` | 筆者の体験（記事で使ってよいもの）と、体験チェックで分かった書き方の好み。新しい回答は記事の公開時に追記 | ◎ |

### `knowledge/` — 調べた事実（2026-11-27 に 01〜05 と直下の調べものを移した）

カテゴリ（places・rules・products・methods・data・serp）ごとのファイル一覧・状態・確認日は `knowledge/index.md`、書き方と使い方は `knowledge/CLAUDE.md`。記事の数字の正本 `knowledge/data/db-familiar-sound-scale.md`・`knowledge/data/instrument-unit-guideline.md` もここにある。

### `06_リサーチ・管理/` — 検索分析・旧リスト

| ファイル | 内容 | 鮮度 |
|---|---|---|
| `knowledge/serp/query-analysis-90days-20260324.md` | 過去90日（2025/12〜2026/3）のクエリ分析と次の施策 | ○ |
| `knowledge/serp/search-console-20260315.csv` | 上記の生データ | ✕ |
| `06_リサーチ・管理/INDEX.md` | 旧インデックス（本ファイルへ統合済み。ポインタのみ） | ✕ |
| `06_リサーチ・管理/analysis-global-research-multilingual-seo.md` | 多言語SEOのグローバル調査 | ✕ `/en/` 廃止済み |
| `06_リサーチ・管理/strategy-cross-lingual.md` | JA/EN二言語戦略 | ✕ `/en/` 廃止済み |
| `06_リサーチ・管理/category-list.md` | 旧カテゴリ一覧（件数0のまま） | ✕ 正は `bouon-category` skill |
| `06_リサーチ・管理/tag-list.md` | 旧タグ一覧（2026-04-02） | ✕ 最新は `interlink-tag-clusters.md` |
| `06_リサーチ・管理/post-list.md` | 旧記事一覧（2026-04-02） | ✕ 正は `interlink-postlist.md` |
| `06_リサーチ・管理/content_post_list.md` | 旧記事一覧（2026-03-18、79KB） | ✕ |
| `06_リサーチ・管理/content_cleanup_list.md` | 旧・記事整理リスト（2026-03-16、57KB） | ✕ 整理済み |

### `seo-check/` — SEO調査

| ファイル | 内容 | 鮮度 |
|---|---|---|
| `../archive/legacy/seo-task.md` | SEO改善チェックリスト（2026-06-10棚卸し版、ZONE A〜E。全項目完了、2026-10-27に凍結） | × タスクの正は `.task-management/task.md` |
| `seo-check/ctr-check-list.md` | CTR分析（Search Console 2026-04-25） | ✕ 古い。直下の同名ファイル（W28版）を使う |
| `seo-check/pagerank-list.md` | 掲載順位別分析（2026-04-25） | ✕ 古い。直下の同名ファイル（W28版）を使う |
| `seo-check/DeepResearch_prompt_hometheater_karaoke.md` | ホームシアター×カラオケ向けDeepResearchプロンプト集 | ○ プロンプトで、データではない |
| `seo-check/gsc-analysis-20260702/` | ランキング崩壊調査一式（summary、root-cause、redirect-gap、query-article-match、各CSV） | ○ |
| `seo-check/gsc-404-audit-20260905/` | 404監査CSV | ○ |

## 5. `.archieve/`（旧データ、△、`.gitignore` 対象）

2025年10月〜2026年3月の旧データ。ファイルの一覧は `archieve-list.md`。構成の参考や着想には使えるが、**事実は再確認が前提**。

## 6. 検索・目次（`bouon-dataset-lookup` skill）

リポジトリルートで実行する。

```bash
S=.claude/skills/bouon-dataset-lookup/scripts/dataset_tool.py
python $S find 補助金 窓 --archive     # AND検索。ファイル別に該当行と直近の見出しを表示（--any でOR）
python $S outline knowledge/data/research-rent-price-urban-suburban-gap-2026-06.md   # 節と行番号
python $S index                        # 全ファイルの一覧（--archive で旧データも）
python $S check                        # 本ファイルの索引と実ファイルのずれを検出
```

- `find` は既定で §4 の ✕ にあたる巨大/古い生成リストを除外する（`--all` で含める）
- 読むときは、`outline` で出た行番号を使い、Read の `offset`/`limit` で該当節だけ読む

## 7. 追加・更新のルール

- **ファイル名**: 調査は `research-YYYY-MM-DD-{テーマ}.md`、分析は `analysis-{テーマ}.md`。冒頭に作成日・目的・反映先記事（slug）を書く
- **置き場所**: 調べた事実（製品・市場・読者・費用・原理）は `knowledge/<カテゴリ>/` に置き、書き方は `knowledge/CLAUDE.md` に従う。検索データの分析は `seo-check/`、運営のリストは直下か `06_リサーチ・管理/`。新しい大分類が必要なときはユーザーに確認する
- **追加したら**: §3（早見表に該当するとき）と §4 の表に追記し、`python $S check` で「索引にないファイル」「実在しないファイル名」が0であることを確認する
- **古くなったら**: 鮮度ラベルを下げ、読まない理由を1行書く。ファイルの削除・移動は、`.workspace/scripts/` や他ファイルからの参照を確認してから行う
- **自動生成**: `interlink-postlist.md`・`interlink-tag-clusters.md` は記事の追加・変更後に再生成する（手編集しない）
- **既知の注意**: `.workspace/scripts/generate_post_list.js` は `post-list.md`・`tag-list.md`・`category-list.md` を直下に出力し、`consolidate-tags.js`・`consolidate-categories.js` は直下の `tag-list.md`・`category-list.md` を前提にする。これらは現在 `06_リサーチ・管理/` にある古いコピーとは別物で、実行しても現行運用（`interlink-postlist.md`）には影響しない。**実行しない**（必要ならスクリプト側の出力先を見直す）
- 関連skill: 事実確認は `bouon-research`、内部リンクは `bouon-internal-link-ops`、カテゴリは `bouon-category`、アクセスデータは `bouon-weekly-report`
