# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository. This file is a **router**: it holds only facts that must always be known, and points to Skills for everything else.

## Project Overview

**BouonLab（防音Lab）** は防音・遮音分野のE-E-A-T権威を目指すAstro 6製ブログ。`https://bouon-lab.com/` で公開。**記事の主軸は常に日本語（`ja`）**。コンテンツ戦略・ライティング方針は `bouon-writing` skillを参照。

## Commands

```bash
pnpm dev        # 開発サーバー (localhost:4321)
pnpm build      # 本番ビルド → ./dist/
pnpm preview    # ビルド確認
npx astro check # 型チェック
```

## コアアーキテクチャ

- **ルーティング**: 全コンテンツは `src/pages/[lang]/[category]/[...slug].astro` 1ファイルで処理。公開URL例: `https://bouon-lab.com/ja/soundproof-room/post-slug/`（末尾スラッシュ）。物理パスは**言語ファースト**: `src/content/ja/{category}/{slug}/index.mdx`。階層の全体像は `src/content/README-content.md` を正とする
- **多言語**: 主軸は`ja`。`en`は廃止済み（2026-09-05〜、`src/content/en/`削除・`robots.txt`で全UA `Disallow: /en/`）。今後`en`に新規記事を作成しない
- **Content Collections**: `src/content.config.ts` のローダー・スキーマ定義を参照。エントリは共通の`baseSchema`（`lang`/`category`等）に従う
- **カテゴリ・frontmatter・スラッグルール・MDXコンポーネント・画像アセット・ライティング記法**の詳細は下記Skills一覧を参照（本ファイルには埋め込まない）

## Skills一覧

タスクに応じてSkill toolで該当スキルを読み込むこと。`.claude/skills/<name>/SKILL.md`。

| Skill | いつ使うか |
| --- | --- |
| `bouon-category` | 記事の配置カテゴリ判定、frontmatterのcategory決定時 |
| `bouon-writing` | 記事の新規執筆・リライト・frontmatter作成・MDXコンポーネント使用時（必読） |
| `bouon-persona-thinking` | 検索意図の裏にある読者心理（本音と建前）を掘り下げるとき |
| `bouon-research` | 価格・補助金・実在企業名等の事実確認、AI Overview対策、Tier C記事の情報更新時 |
| `bouon-rewrite-strategy` | 既存記事の改善優先度判定・リライト実行時 |
| `bouon-internal-link-ops` | 内部リンクの追加・変更、公開前チェック時 |
| `bouon-hub-cards` | トップの入口カード6枚への掲載（frontmatter `hub`）の追加・変更、伸ばしたい記事のテコ入れ判断時 |
| `bouon-task-ops` | `.workspace/.task/` の参照・更新・アーカイブ時 |
| `bouon-dataset-lookup` | 記事作成・リライトで防音スペック・市場データ・調査メモなどの既存ナレッジを探すとき |
| `bouon-weekly-report` | `.workspace/access-data/` のGSC/GA4の週報集計・前週比較・ページ別推移 |
| `bouon-growth-ops` | 収益導線設計（QUEST/PASONA/BEAF）・ビジュアル設計時 |
| `bouon-memo-image` | 文量の多い記事に「複数の説明を1枚にまとめた、ポケットに入れておくメモ画像」（比較・判断フロー・チェックリスト）を作るとき |
| `bouon-threads-ops` | Threads投稿の作成・記録時（週間運用は`.workspace/_sns-post/CLAUDE.md`） |
| `bouon-draft-publish-pipeline` | `/publish-draft`・`/write-article` の実処理（コマンドから自動的に参照される） |

ペルソナ定義（消費者A〜H・サプライヤーS1〜S5・編集長フィルター）は `.agents/persona/` を参照。`bouon-persona-thinking` skillと併用する。

## タスク管理（`.workspace/.task/`）

2本柱＋索引運用。まず `.workspace/.task/CLAUDE.md`（索引・読み方・更新ルール）を読む。詳細手順は `bouon-task-ops` skillを参照。

- **`task-list.md`** — 今すぐ着手できるタスクのみ。項目ID `T-NN`（**削除厳禁**）
- **`weekly-task.md`** — データ待ちの確認項目（期限・短期・継続観察）＋週次の生データ。項目ID `W-NN`（**削除厳禁**）
- **`effect-monitoring.md`** — 2026-10-04に`weekly-task.md`へ統合済みの移行先ポインタ。新規追記しない（**削除厳禁**）
- **`archive/`** — 完了済みタスクの保管（索引: `archive/task-list-index.md`）

ブログ横断の中期〜長期タスクはGitHub Projectでも管理: https://github.com/users/sasisi344/projects/1 （詳細は`344ob/07_workspace/.agents/blog-registry.md`）。二重管理はしない。

## コンテンツ作業フロー

1. `_draft/` にメモ・素案を置く
2. `/draft-plan` でブレスト → 方向性を確定
3. `/publish-draft {ファイル名}` または `/write-article {volume} {ファイル名}` で本番記事を生成
4. 生成完了後、使用した `_draft/` ファイルを削除する

ドラフト内の `> [!forAI]` ブロックは清書時に最優先で参照し、本番記事には載せない（詳細は`bouon-draft-publish-pipeline` skill）。

既存記事の読者心理面の強化は `/power-up-article`、構造・データ面のリライトは `bouon-rewrite-strategy` skillを使う。

## Threads投稿フロー

`bouon-threads-ops` skill（投稿の作り方）と `.workspace/_sns-post/CLAUDE.md`（週間運用・ネタ台帳・重複防止）を参照。作業フォルダは `.workspace/_sns-post/`（`w{NN}-threads-post.md`・`archive/topic-index.md`）。

## 主要ファイル参照先

- `src/data/contentCategories.ts` — トップカテゴリ一覧とナビ・一覧用ラベル
- `src/data/affiliates.ts` — アフィリエイトリンクデータ
- `.workspace/strategies/` — コンテンツ計画・リライトスケジュール
- `.workspace/.data-set/CLAUDE.md` — ナレッジ置き場の索引・鮮度ラベル・「記事作成時にどこから取るか」の早見表（内部リンク正本 `interlink-postlist.md` を含む。検索は`bouon-dataset-lookup` skill）
- `.workspace/access-data/CLAUDE.md` — GSC/GA4エクスポートのフォルダ索引・取り込みルール・解析の作業ログ（CSVを開く前に読む）
