# カテゴリ判定：曖昧ケースと旧カテゴリ対照表

`bouon-category` SKILL.md の補助資料。判定に迷ったときのみ参照する。

## 曖昧ケースの判定基準

| 状況 | 判定 | 理由 |
|------|------|------|
| 「防音室の費用まとめ」 | `money` | 費用が主題 |
| 「防音室の選び方（予算別）」 | `soundproof-room` | 製品選定が主題。費用は補助情報 |
| 「賃貸でDIY防音する方法」 | `diy` | HOW-TOが主題。タグに `soundproof-rental` |
| 「配信者向け防音室ガイド」 | `creator` | ペルソナが主題。タグに `soundproof-room` |
| 「VTuberの防音補助金活用」 | `money` | 補助金取得手順が主題。タグに `creator` |
| 「仙台の防音賃貸ガイド」 | `local` | 地名が主役 |
| 「大阪の防音工事費用」 | `local` | 地名 + 費用。地名が主役ならlocal |
| 「D値と防音室の選び方」 | `soundproof-room` | 選び方が目的。D値は説明手段 |
| 「D値の仕組みと読み方」 | `knowledge` | 純粋な解説が目的 |

## 旧カテゴリとの対照表（移行参考）

2026-06-01のカテゴリ改定前は `{category}/{subcategory}/` の階層構造だった。既存記事の再分類や過去記録の解釈時のみ参照する。

| 旧パス（subcategory） | 新カテゴリへの振り分け |
|---|---|
| `soundproof-room/diy` | `diy` |
| `soundproof-room/knowledge` | 内容により `soundproof-room` / `knowledge` / `money` / `creator` |
| `soundproof-room/solution` | 内容により `soundproof-room` / `diy` |
| `soundproof-room/others` | 内容により `soundproof-room` / `money` / `business` |
| `soundproof-rental/knowledge` | 内容により `soundproof-rental` / `creator` |
| `soundproof-rental/solution` | 内容により `soundproof-rental` / `diy` / `money` |
| `soundproof-rental/others` | `local`（地域系）/ `soundproof-rental`（その他） |
| `soundproof-rental/diy` | `diy` |
| `column/company` | `business` |
| `column/news` | `knowledge` |
| `column/others` | 内容により `creator` / `knowledge` / `business` |

**さらに古い最上位カテゴリ名**（2026-04〜の初期構想時代の名残。当時Gemini/Cursor等ツール別に運用ルールが分散していた名残で、現在は本skillに一本化済み）との対照:

| さらに旧いカテゴリ名 | 意味 | 現行カテゴリへの置き換え |
|---|---|---|
| `solutions` | 投資家・オーナー・プロ向けの意思決定支援 | `money`（ROI・投資試算）または `business`（経営判断） |
| `use-case` | 配信者・在宅ワーカー等の特定ペルソナ向け | `creator`（配信者）。在宅ワーカーはテーマにより `knowledge` / `money` |
| `company` | 特定メーカー・ブランドの資産価値評価 | `business` |
| `column` | 広い読者層向けの一般コラム | 廃止。内容に応じて8カテゴリのいずれかへ |
