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
| 防音室を探す人の本音・意思決定の阻害要因 | `01_防音室/防音室：ユーザー潜在ニーズ・意思決定阻害要因のDeep Research.md` | ○ |
| ホームシアター・カラオケの防音設計（Dr値、残響、浮き床、換気、費用） | `01_防音室/analysis-hometheater-karaoke-design.md` | ○ 節ごとにA〜Fの記号つき |
| 防音賃貸の本音・契約までの不安 | `02_防音賃貸/防音賃貸：ユーザー潜在ニーズ・意思決定阻害要因のDeep Research.md` | ○ |
| 防音賃貸の都市別市場（東京・大阪・名古屋・福岡・仙台） | `02_防音賃貸/analysis-rental-market-2026.md` | ○ 2026年4月版 |
| 防音賃貸の家賃相場・都心と郊外の差・防音プレミアム | `02_防音賃貸/research-rent-price-urban-suburban-gap-2026-06.md` | ◎ 2026-06-24。記事構成用のコスパ判断フレームつき |
| 賃貸アフィリエイトの導線設計 | `02_防音賃貸/strategy-affiliate-rental.md` | ○ 実際のリンクは `src/data/affiliates.ts` |
| 配信者・VTuberの課題、ステップアップ | `03_ユーザー/analysis-streamer-solutions-expert.md`、`03_ユーザー/analysis-streamer-needs-infrastructure.md` | ○ |
| 配信機材（PCファン騒音、ペット同居配信） | `05_商品/research-2026-06-10-streamer-equipment.md` | ◎ 記事slug別のメモ |
| 楽器別の防音要件（ピアノ・ドラム・弦・管、ヤマハ/カワイ） | `03_ユーザー/analysis-brand-instrument-selection.md` | ○ 短い要約。詳細は §5 の旧データ |
| DIYと音響物理（質量則、よくある誤解） | `03_ユーザー/analysis-physics-diy-acoustics.md` | ○ 短い要約。詳細は §5 の旧データ |
| 無声音声インターフェース（SSI） | `03_ユーザー/silent-speech-interface-research.md` | ○ ニッチ |
| 防音室の資産価値・ROI・ローン・税 | `04_オーナー/analysis-asset-investment-strategy.md` | ○ |
| 製品スペック（ヤマハ・カワイ等）・Dr値・測定基準・BtoB材料 | `05_商品/product_specifications.md` | ○ 2026-03-31。価格は再確認 |
| BtoB建材・メーカー・市場 | `05_商品/analysis-b2b-manufacturer-materials.md`、`05_商品/analysis-global-soundproof-blanket-market-2026.md` | ○ |
| 権威性UP用の補足データ（個室ブース市場、加湿器、ニトリ等） | `05_商品/research-2026-06-10-supplementary.md` | ◎ 反映先記事つき |
| タワーマンションの防音（床スラブ厚、ジム騒音） | `tower-mansion-sound-insulation-memo.md` | ○ |
| 検索クエリの勝ち筋・改善機会（3月時点） | `06_リサーチ・管理/query-analysis-90days-20260324.md` | ○ 最新の実績は `.workspace/access-data/`（`bouon-weekly-report` skill） |
| 重要クエリと既存記事の突合（カバー済み／加筆／新規） | `seo-check/gsc-analysis-20260702/query-article-match-20260702.md` | ○ 前期データ基準 |
| ランキング崩壊・旧URL・リダイレクト漏れの調査 | `seo-check/gsc-analysis-20260702/ranking-collapse-root-cause-20260702.md`、`seo-check/gsc-analysis-20260702/redirect-gap-full-audit-20260702.md`、`seo-check/gsc-analysis-20260702/summary.md` | ○ 対応済みの記録。経緯の確認用 |
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
| `ctr-check-list.md` | CTR改善チェックリスト（W28版、2026-07-08） | ○ |
| `pagerank-list.md` | 順位改善／深追い不要チェックリスト（W28版、2026-07-08） | ○ |
| `tower-mansion-sound-insulation-memo.md` | タワマンの防音性能メモ | ○ |

### `01_防音室/` — 防音室（ユニット・施工）

| ファイル | 内容 | 鮮度 |
|---|---|---|
| `01_防音室/防音室：ユーザー潜在ニーズ・意思決定阻害要因のDeep Research.md` | 「防音室」検索者の深層心理と阻害要因 | ○ |
| `01_防音室/analysis-hometheater-karaoke-design.md` | ホームシアター×カラオケ両立設計の技術データ（残響・Dr値・費用・換気・施工事例） | ○ |

### `02_防音賃貸/` — 防音賃貸

| ファイル | 内容 | 鮮度 |
|---|---|---|
| `02_防音賃貸/防音賃貸：ユーザー潜在ニーズ・意思決定阻害要因のDeep Research.md` | 「防音賃貸」検索者の深層心理 | ○ |
| `02_防音賃貸/analysis-rental-market-2026.md` | 主要5都市の市場比較・優先攻略順・アフィリエイト施策（2026年4月版） | ○ |
| `02_防音賃貸/research-rent-price-urban-suburban-gap-2026-06.md` | 家賃相場の都心/郊外ギャップ、MUSISION全棟サンプル、プレミアム率、コスパ判断フレーム | ◎ |
| `02_防音賃貸/strategy-affiliate-rental.md` | 賃貸アフィリエイトのCV設計（短い） | ○ |

### `03_ユーザー/` — 読者・用途別

| ファイル | 内容 | 鮮度 |
|---|---|---|
| `03_ユーザー/analysis-brand-instrument-selection.md` | 楽器別・ブランド選定基準（要約） | ○ |
| `03_ユーザー/analysis-physics-diy-acoustics.md` | DIY防音の物理と科学的誤認（要約） | ○ |
| `03_ユーザー/analysis-streamer-needs-infrastructure.md` | 配信者の熱・PCノイズ・通信インフラ要件（要約） | ○ |
| `03_ユーザー/analysis-streamer-solutions-expert.md` | 配信者の4大課題、フェーズ別ステップアップ、主要ソリューション比較 | ○ |
| `03_ユーザー/silent-speech-interface-research.md` | 無声音声インターフェースの要約 | ○ |

### `04_オーナー/` — 資産・投資

| ファイル | 内容 | 鮮度 |
|---|---|---|
| `04_オーナー/analysis-asset-investment-strategy.md` | 市場価値・再販、融資・税、ROI（スタジオ賃貸 vs 戸建て+防音室） | ○ |

### `05_商品/` — 製品・市場・補足リサーチ

| ファイル | 内容 | 鮮度 |
|---|---|---|
| `05_商品/product_specifications.md` | 防音性能の理解、製品、材料、楽器別要件、内部仕様、騒音測定・法基準、BtoB材料 | ○ |
| `05_商品/analysis-b2b-manufacturer-materials.md` | BtoB防音材・規格（JIS/ASTM/REACH/RoHS）・質量則 | ○ |
| `05_商品/analysis-global-soundproof-blanket-market-2026.md` | グローバル防音毛布市場（QYResearch）。市場規模・競合・需要ドライバー | ○ |
| `05_商品/research-2026-06-10-streamer-equipment.md` | creator記事用の補足（PCファン騒音、ペット同居配信） | ◎ |
| `05_商品/research-2026-06-10-supplementary.md` | 権威性UP用の補足（個室ブース市場、SSI、加湿器、ニトリ吸音） | ◎ |

### `06_リサーチ・管理/` — 検索分析・旧リスト

| ファイル | 内容 | 鮮度 |
|---|---|---|
| `06_リサーチ・管理/query-analysis-90days-20260324.md` | 過去90日（2025/12〜2026/3）のクエリ分析と次の施策 | ○ |
| `06_リサーチ・管理/search-console-20260315.csv` | 上記の生データ | ✕ |
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
| `seo-check/seo-task.md` | SEO改善チェックリスト（2026-06-10棚卸し版、ZONE A〜E） | ○ 進行中タスクは `.workspace/.task/` が正 |
| `seo-check/ctr-check-list.md` | CTR分析（Search Console 2026-04-25） | ✕ 古い。直下の同名ファイル（W28版）を使う |
| `seo-check/pagerank-list.md` | 掲載順位別分析（2026-04-25） | ✕ 古い。直下の同名ファイル（W28版）を使う |
| `seo-check/DeepResearch_prompt_hometheater_karaoke.md` | ホームシアター×カラオケ向けDeepResearchプロンプト集 | ○ プロンプトで、データではない |
| `seo-check/gsc-analysis-20260702/` | ランキング崩壊調査一式（summary、root-cause、redirect-gap、query-article-match、各CSV） | ○ |
| `seo-check/gsc-404-audit-20260905/` | 404監査CSV | ○ |

## 5. `.archieve/`（旧データ、△、`.gitignore` 対象）

2025年10月〜2026年3月の旧データセット。構成の参考や着想には使えるが、**事実は再確認が前提**。

| ファイル | 内容 |
|---|---|
| `【00_INDEX】データセットインデックス.md` | 旧インデックス（v2025.12） |
| `【06_MASTER】統合ナレッジベース.md` | 旧・統合ナレッジ（ユーザー心理、企業体系、市場特性、統計） |
| `【01_カテゴリ別DS】防音室.md`、`【02_カテゴリ別DS】防音賃貸.md`、`【03_カテゴリ別DS】配信・クリエイター向け.md`、`【04_カテゴリ別DS】オフィス・法人向け.md`、`【05_カテゴリ別DS】市場・ニュース.md` | カテゴリ別の旧データセット |
| `【07_MARKET】市場データベース.md` | 地域別市場、価格構造・相場、入居者ニーズ、投資分析 |
| `【08_SPEC】技術製品データベース.md` | 技術・製品仕様、価格・性能比較、用語集 |
| `【09_KEYWORD】SEOマーケティングデータ.md` | キーワード、競合、価格帯別・メーカー別比較 |
| `【10_GUIDE】導入活用ガイド.md`、`【13_MAINTENANCE】防音室運用・維持管理ガイド.md` | 導入・運用・維持管理（英語の短いガイド） |
| `【11_COMPANY】国内防音ソリューション企業DB.md`、`【まとめ】国内防音ソリューション企業体系化マップ.md` | 国内企業DB（62KB）と業界マップ |
| `【12_VOICE】防音ユーザー体験談・PX.md` | ワンタッチ防音壁を中心としたユーザーの声と期待値 |
| `【補助金・税制】防音室_v2025.01.md`、`financial_support.md` | 補助金・税制（2025年版） |
| `【DB】防音グッズ：設備データベース.md`、`【DB】防音窓・リフォームデータベース.md` | 防音グッズ・窓・リフォームのDB |
| `【03_楽器別】防音スペックシート.md`、`ヤマハ防音室.md`、`OTODASU.md` | 楽器別スペック、ヤマハ防音室、OTODASU |
| `楽器演奏用防音室における*.md` | クラシック/打楽器向けの大型研究報告書 |
| `防音ユニットの資産価値再定義*.md`、`防音室導入の投資価値分析*.md` | 資産価値・投資の大型レポート |
| `防音賃貸市場における高単価成約*.md`、`2025-2026年*.md` | 賃貸の収益化戦略・主要都市の定量分析 |
| `DIY防音室・壁防音における*.md` | DIY・音響物理と誤認の分析 |
| `VTuber・ストリーマーにおける*.md`、`ssi-research.md` | 配信者の課題分析、SSIの大型調査 |
| `【MAP】トピック・リンク・CTA統合マッピング.md` | 旧・トピック/CTAマップ（現在は `src/data/affiliates.ts` と `bouon-growth-ops` が正） |
| `【DS】防音Labの記事ライティングプロンプト考.md`、`【DS】防音室Labカテゴリ構成.md`、`防音Lab記事再現プロンプト.md` | 旧ライティング指針（現在は `bouon-writing` skill が正） |
| `日英双方向コンテンツ戦略とノウハウ.md` | 日英戦略（`/en/` 廃止済みのため参考外） |
| `d-dr-value-simulator-requirements.md`、`d-dr-value-simulator-todo.md` | D値診断ツールの要件・TODO |
| `アフィリエイトリンク.md`、`user_guides.md`、`YouTubeの防音室紹介.md` | 旧リンク集、ユーザーガイド、YouTube防音室レビュー |
| `target-query/*.md` | 競合上位記事の分析7本（補助金2025、内窓の効果、自作費用、暑さ対策、大阪相場ほか） |
| `.SCaccessdata/` | 2026-02-17のSearch Consoleエクスポート |

## 6. 検索・目次（`bouon-dataset-lookup` skill）

リポジトリルートで実行する。

```bash
S=.claude/skills/bouon-dataset-lookup/scripts/dataset_tool.py
python $S find 補助金 窓 --archive     # AND検索。ファイル別に該当行と直近の見出しを表示（--any でOR）
python $S outline 02_防音賃貸/research-rent-price-urban-suburban-gap-2026-06.md   # 節と行番号
python $S index                        # 全ファイルの一覧（--archive で旧データも）
python $S check                        # 本ファイルの索引と実ファイルのずれを検出
```

- `find` は既定で §4 の ✕ にあたる巨大/古い生成リストを除外する（`--all` で含める）
- 読むときは、`outline` で出た行番号を使い、Read の `offset`/`limit` で該当節だけ読む

## 7. 追加・更新のルール

- **ファイル名**: 調査は `research-YYYY-MM-DD-{テーマ}.md`、分析は `analysis-{テーマ}.md`。冒頭に作成日・目的・反映先記事（slug）を書く
- **置き場所**: 読者・用途別の調査は `03_ユーザー/`、製品・市場・補足リサーチは `05_商品/`、賃貸は `02_防音賃貸/`、防音室は `01_防音室/`、資産・投資は `04_オーナー/`、検索データの分析は `seo-check/`。新しい大分類が必要なときはユーザーに確認する
- **追加したら**: §3（早見表に該当するとき）と §4 の表に追記し、`python $S check` で「索引にないファイル」「実在しないファイル名」が0であることを確認する
- **古くなったら**: 鮮度ラベルを下げ、読まない理由を1行書く。ファイルの削除・移動は、`.workspace/scripts/` や他ファイルからの参照を確認してから行う
- **自動生成**: `interlink-postlist.md`・`interlink-tag-clusters.md` は記事の追加・変更後に再生成する（手編集しない）
- **既知の注意**: `.workspace/scripts/generate_post_list.js` は `post-list.md`・`tag-list.md`・`category-list.md` を直下に出力し、`consolidate-tags.js`・`consolidate-categories.js` は直下の `tag-list.md`・`category-list.md` を前提にする。これらは現在 `06_リサーチ・管理/` にある古いコピーとは別物で、実行しても現行運用（`interlink-postlist.md`）には影響しない。**実行しない**（必要ならスクリプト側の出力先を見直す）
- 関連skill: 事実確認は `bouon-research`、内部リンクは `bouon-internal-link-ops`、カテゴリは `bouon-category`、アクセスデータは `bouon-weekly-report`
