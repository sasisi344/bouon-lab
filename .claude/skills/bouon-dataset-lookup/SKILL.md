---
name: bouon-dataset-lookup
description: 記事の執筆・リライト・企画で、防音スペック・市場データ・競合分析・補助金メモ・過去の調査結果など `.workspace/.data-set/` の既存ナレッジを探すとき、新しい調査ファイルを `.data-set` に追加して索引を更新するときに使う。どのファイルのどの節を読むかを、全文を読まずに絞り込む検索・目次・索引チェックの手順を定義する。
---

# BouonLab ナレッジ（.data-set）の探し方と索引保守

`.workspace/.data-set/` は調査メモ・市場データ・旧データセット（約100ファイル、1.7MB）の置き場。**全文を読むと高コスト**なので、索引→検索→目次→該当節、の順で絞る。索引・鮮度ラベル・取得先の早見表の正本は `.workspace/.data-set/CLAUDE.md`。

## 探し方（記事作成時）

1. **早見表を引く**: `.workspace/.data-set/CLAUDE.md` §3「記事作成時の取得先 早見表」で、テーマに合うファイルがあるか確認する。鮮度ラベル（◎○△✕）も見る
2. **見つからなければ検索する**:

   ```bash
   S=.claude/skills/bouon-dataset-lookup/scripts/dataset_tool.py
   python $S find 質量則 DIY             # AND検索。ファイル別に件数・該当行・直近の見出し
   python $S find 補助金 窓 --archive    # 旧データ(.archieve)も含める
   python $S find 防音室 価格 --any      # OR検索
   ```

   結果が多いときはキーワードを足して絞る。内部リンク候補は `interlink-tag-clusters.md` に対して `find` でタグ名・カテゴリ名を検索する（全文を読まない）
3. **節だけ読む**:

   ```bash
   python $S outline 02_防音賃貸/research-rent-price-urban-suburban-gap-2026-06.md
   ```

   出力の `L{開始}-{終了}` を使い、Read の `offset`=開始-1、`limit`=行数 で必要な節だけ読む
4. **事実を使う前に確認する**: 鮮度が △ のもの、および価格・補助金・制度・実在企業名・統計は、`bouon-research` skill に従い一次情報で再確認してから記事に書く。`.data-set` は調査の起点であり、最終根拠ではない

## 読まないもの

- ✕ ラベルのファイル（旧記事一覧 `post-list.md`・`content_post_list.md`・`content_cleanup_list.md`、旧 `tag-list.md`・`category-list.md`、`/en/` 向け多言語SEO資料）。`find` は既定でこれらを除外する
- 記事の存在確認・内部リンクは `interlink-postlist.md`（正本）。旧リストは使わない
- 最新のアクセス実績は `.data-set` ではなく `.workspace/access-data/`（`bouon-weekly-report` skill）

## 索引の保守（ファイルを追加・移動・削除したとき）

1. `.workspace/.data-set/CLAUDE.md` の §4（フォルダ別の表）に1行追記する。早見表（§3）に載せるべきテーマなら §3 も更新する。鮮度ラベルと更新日・用途を書く
2. 次を実行して、ずれが0であることを確認する:

   ```bash
   python $S check      # 索引にないファイル／索引にあるが実在しないファイル名を表示（ずれがあれば終了コード1）
   python $S index      # 全ファイルの一覧（パス・サイズ・更新日・H1）。索引の作成・見直し時の下書きに使う
   ```

3. 新規調査ファイルは `research-YYYY-MM-DD-{テーマ}.md`、分析は `analysis-{テーマ}.md` とし、冒頭に作成日・目的・反映先記事（slug）を書く（置き場所は CLAUDE.md §7）
4. 索引内のファイル名は**バッククォートで囲む**（`check` がバッククォート内のトークンを実ファイル名と照合するため）。`*` を使うグループ表記（例 `target-query/*.md`）と末尾 `/` のフォルダ表記も使える

## 注意

- `.archieve/`（綴りはこのまま）は `.gitignore` 対象のローカル専用旧データ。編集しない。別の環境には存在しない場合がある
- スクリプトは標準ライブラリのみ。検索対象は既定で `.md`/`.txt`（CSVは `--csv`）。巨大/古い生成リストは `--all` で含める
