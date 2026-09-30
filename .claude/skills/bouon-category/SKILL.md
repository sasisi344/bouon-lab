---
name: bouon-category
description: 記事テーマからBouonLabの8トップカテゴリを判定し、配置パス・frontmatter・タグを決めるときに使う。新規記事の配置先を決めるとき、既存記事の再分類、/draft-plan・/write-article・/publish-draft・/power-up-article のカテゴリ判定ステップから必ず参照する。
---

# BouonLab カテゴリ判定

## 前提

- 主軸は `ja` 記事。`en` は廃止済み（2026-09-05〜）、`src/content/en/` は削除済みで再開の予定なし。
- サブカテゴリ（`diy`/`knowledge`/`solution`/`others` 等）は廃止。新規記事はすべて `/ja/{category}/{slug}/` の3階層URLに配置する。
- 物理パス: `src/content/ja/{category}/{slug}/index.mdx`（**言語ファースト**。カテゴリより前に `ja` が来る）
- 公開URL: `https://bouon-lab.com/ja/{category}/{slug}/`（末尾スラッシュ必須）

## 8トップカテゴリ

| # | カテゴリ | URL第2セグメント | 記事の中心 | 優先度 |
|---|---------|-----------|-----------|--------|
| 1 | 防音室 | `soundproof-room` | 防音室製品・設置・性能・選び方 | ★★★ |
| 2 | 防音賃貸 | `soundproof-rental` | 賃貸物件・契約・管理会社・大家 | ★★★ |
| 3 | DIY防音 | `diy` | 自作・素材・DIY手順・コスト | ★★ |
| 4 | お金・補助金 | `money` | 費用・ローン・補助金・節税・ROI | ★★ |
| 5 | 配信・クリエイター | `creator` | 配信者・VTuber・宅録の活動環境 | ★★ |
| 6 | 防音の基礎知識 | `knowledge` | 仕組み・法令・科学・統計 | ★ |
| 7 | 地域ガイド | `local` | 特定都市・地域の防音情報 | ★ |
| 8 | 企業・法人向け | `business` | オフィス・スタジオ・市場分析 | ☆ |

## 判定ポイント（除外条件つき）

- **`soundproof-room`**: 「防音室を選ぶ/使う/管理する」が主題。除外: 費用中心→`money` / DIY製作→`diy` / 賃貸探し→`soundproof-rental`
- **`soundproof-rental`**: 「賃貸物件を借りる・貸す立場での防音」が主題。除外: DIY改造中心→`diy` / 製品中心→`soundproof-room`
- **`diy`**: 「自分でやる・作る」HOW-TOが主な価値。タグで親カテゴリを明示（例: `tags: ["soundproof-room"]`）
- **`money`**: 「費用・お金・補助金・節税・ROI」が主題の中心
- **`creator`**: 「配信/録音/VTuber活動」というペルソナの問題解決が主題
- **`knowledge`**: 「読むと仕組みが分かる」純粋な知識記事。除外: 製品選びが主→`soundproof-room` / DIY手順が主→`diy`
- **`local`**: 地名が主要キーワードで、地域特有の情報が価値の中心
- **`business`**: 「法人・企業の業務文脈」での防音が主題

## 判定フローチャート

```
地名が主役？ → local
企業・オフィス・スタジオ運営・市場分析？ → business
配信者/VTuber/宅録の活動環境？ → creator
費用・ローン・補助金・節税・ROI？ → money
自分で作る・素材選び・DIY手順？ → diy
仕組み・法令・科学的解説？ → knowledge
賃貸物件・契約・管理会社・大家？ → soundproof-rental
防音室製品・設置・性能・選び方？ → soundproof-room
```

曖昧なケース・旧カテゴリからの移行マッピングは `references/category-legacy-mapping.md` を参照。

## frontmatterテンプレート

```yaml
---
title: "主要KWを左側に | 35-42文字"
description: "SEO用サマリー | 80-120文字"
slug: "unique-slug"
date: "YYYY-MM-DD"
lastmod: "YYYY-MM-DD"
draft: false
lang: "ja"
category: "{上記8カテゴリのいずれか}"
tags: ["タグ1", "タグ2"]
image: ./cover.png
---
```

`subcategory` フィールドは新規記事では不要（廃止済み）。

## スラッグ・フォルダ名のルール

- カテゴリパスに意味語が含まれる場合、同じ意味を `slug` に繰り返さない（例: `soundproof-room` 配下で `soundproof-room-...` は冗長）
- 省略・略語にしない。意図が伝わる語を使う
- SEO過剰積み上げより明確さを優先

## タグによるクロスリンク

カテゴリを跨ぐ関連性はタグで表現する。

| 状況 | 例 |
|------|----|
| DIY記事が防音室に関係する | `tags: ["防音室", "diy"]` |
| creator記事が賃貸前提 | `tags: ["配信者", "防音賃貸"]` |
| money記事が楽器向け | `tags: ["補助金", "楽器", "防音室"]` |

## 出力フォーマット（カテゴリ判定を単体で依頼された場合）

```
## カテゴリ判定結果
- **カテゴリ**: {category}
- **理由**: {判定根拠を1〜2文で}
- **配置パス**: src/content/ja/{category}/{slug}/index.mdx
- **公開URL**: /ja/{category}/{slug}/
- **推奨タグ**: ["タグ1", "タグ2", ...]
```
