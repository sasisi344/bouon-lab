---
name: bouon-internal-link-ops
description: 記事公開前後の内部リンク品質チェック、interlink-postlist/tag-clustersの参照、Next Step重複回避、週次CTRログ更新が必要なときに使う。内部リンクを追加・変更する前に必ず参照する。
---

# BouonLab 内部リンク運用

## 正本ファイル（必読）

- **パス**: `.workspace/.data-set/interlink-postlist.md`
- **用途**: 現在の `src/content` 掲載記事の `title` / **URL用 `slug`（フォルダ名）** / `tags` / `category` / `internal_url` / `draft` を一覧化したもの
- **URL形式**: `/{lang}/{category}/{slug}/`（subcategory階層は廃止済み。カテゴリは8種のフラット構成、詳細は `bouon-category` skill参照）

**クラスタ一覧**（内部リンク候補探し用）: `.workspace/.data-set/interlink-tag-clusters.md`。`draft: false` の記事をカテゴリ別・共有タグ2件以上のタグ別にグルーピングした一覧。

## ルール

1. **内部リンクを追加・変更するとき**は、リンク先URLを手入力で推測せず、まず `interlink-postlist.md` で存在する `internal_url` を確認する
2. **スラッグはフォルダ名が正**。frontmatterの`slug`がフォルダ名と異なる場合があるため、リストの`slug`列と`internal_url`を優先する
3. **リンク候補を探すとき**は `interlink-tag-clusters.md` のカテゴリ別・タグ別クラスタから選ぶ
4. **記事の追加・移動・フォルダ名変更・公開切替**のあと、両ファイルを `node .workspace/scripts/build-interlink-postlist.mjs` で再生成する（または手動更新）

## 公開前チェックリスト（必須）

- 文脈リンクを本文中に最低3本入れる（導入1本、比較1本、行動1本）
- 対象記事で `Next Step` が3本表示されることを確認する
- `Next Step` と関連記事で同一URLの重複導線を作らない
- ハブ経由で2クリック以内に対象記事へ到達できることを確認する
- 高単価カテゴリ（`soundproof-room`/`soundproof-rental`/`money`）への導線を最低1本含める

## アンカーテキスト規約

- 抽象語のみ（例: 「こちら」「詳しく」「この記事」）は使わない
- リンク先の主KWと解決意図（比較/実践/導入）を含める
- 1記事内で同一アンカーを連打せず、意図別に語彙を分散する

## リンク先の優先順位

1. 同一クラスター内（同タグ、同ペルソナ）
2. 比較記事（横断判断ができる記事）
3. CV導線記事（`soundproof-room`/`soundproof-rental`/`money`の商品比較・意思決定記事）

補足: 外部リンクより内部リンクを先に設計する。クラスター外リンクを張る場合は本文に遷移理由を明記する。

## 実行フロー

1. 下書き完成後に「公開前チェックリスト」を実施する
2. CMS反映前にハブ導線と `Next Step` のリンク先を手動クリック確認する
3. 公開後24時間以内にGA4で `hub_click` / `next_step_click` / `related_click` の発火を確認する
4. 週次で `.workspace/.task/internal-link-weekly-log.md` を更新する

## 週次ログ記録テンプレート

```markdown
- 対象週:
- hub経由セッション数:
- 2ページ目到達率:
- hub_click CTR:
- next_step_click CTR:
- related_click CTR:
- search_result_click CTR:
- 前週比（増減）:
- 悪化導線（URL/クラスター）:
- AB差し替え候補:
```

## 悪化判定ルール（暫定）

- `hub_click` CTRが前週比 -15%以上
- 2ページ目到達率が前週比 -10%以上
- 特定クラスターで孤立記事率が20%超

いずれかを満たした場合は、翌週スプリントでリンク再配置を行う。
