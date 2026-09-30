---
description: _draft/ の下書きをボリューム指定（small/medium/high-quality）で本番記事に仕上げ、カバー画像を生成してコンテンツコレクションへ投稿する
---

# /write-article — ボリューム指定ドラフト記事公開ワークフロー

**引数**: `{ボリューム} {ファイル名（省略可）}`

```
/write-article small 騒音トラブル対処チェックリスト.md
/write-article medium 在宅ワーカーの防音対策ガイド.md
/write-article high-quality 防音室ユニット完全比較2026.md
/write-article medium          ← _draft/ の記事ドラフトを一覧して選択
```

**ボリューム定義**:

| ボリューム | 文字数目安 | 構成フレームワーク | 主な用途 |
| --- | --- | --- | --- |
| `small` | 〜1,500字 | PREP（結論→理由→例→結論） | FAQ・チェックリスト・補助記事 |
| `medium` | 2,000〜3,000字 | Problem-Solution | 一般解説・比較・シナリオガイド |
| `high-quality` | 5,000〜7,000字 | QUEST or PASONA（高密度） | ピラー・高単価商材・意思決定サポート |

このコマンドは `bouon-draft-publish-pipeline` skillの共通処理（メタ情報抽出・frontmatter生成・画像生成・バンドル作成・下書き削除）を使う。本ファイルはボリューム・フレームワーク選択のみを固有に扱う。

## Step 1. フレームワーク決定

| ボリューム | メインロジック | 副ロジック |
| --- | --- | --- |
| `small` | PREP | なし（簡潔優先） |
| `medium` | Problem-Solution | BEAF |
| `high-quality` | QUEST（防音室・ガジェット系）または PASONA（賃貸・DIY系） | 両方可 |

テーマが「賃貸・住居選び・DIY・オーナー投資」→PASONA優先。「配信者・楽器・プロ向け機器・スペック比較」→QUEST優先。

## Step 2. 本文の執筆（ボリューム別構成）

共通の記法ルールは `bouon-writing` skillに従う。

### small ── PREP構成（〜1,500字）

検索意図を満たす直接的な答えを最優先。H2は2〜3本、比較表・FAQは原則なし（必要なら1つ）。`<CtaBox />`を記事末尾に1つ配置。

```
[リード文] 結論を先出し（〜100字）
## {問い／課題を端的に示すH2} → Point: 結論を1〜2文
## {理由・根拠 H2} → Reason（〜300字）+ Example（〜200字）
## {読者の次のアクション H2} → Point（再）+行動喚起
[まとめ（CTA）]（〜150字）
```

### medium ── Problem-Solution構成（2,000〜3,000字）

H2は4〜5本、比較表1つ、`<AffiliateCard />`は1〜2個配置可。

```
[リード文] 課題提示＋この記事で得られる答え（〜150字）
## {問題の背景・現状 H2}（〜300字）
## {解決策の全体像 H2}（〜300字、箇条書きで概観）
## {解決策A H2}（〜400字、BEAF展開）
## {解決策B H2}（〜400字、同上）
## {選択肢の比較 H2}（〜400字、比較表1つ）
## まとめ（〜200字、内部リンク2〜3本）
[CTA: <CtaBox />]
```

### high-quality ── QUESTまたはPASONA構成（5,000〜7,000字）

H2は6〜8本、比較表2〜3個、`<AssetValueTable />`は投資・費用比較記事で使用可、`<SmartLink href="..." />`で内部リンク3〜5本。Persona Ωチェック必須（「遮断」→「低減」、「完全防音」→「高い遮音性能」等）。

**QUEST**（配信者・楽器・機器・スペック比較向け）:

```
[リード文]（〜200字）
## Qualify: あなたに必要な情報はここにあります（〜300字）
## Understand: 問題の本質を理解する（〜600字、技術的背景・誤解の訂正）
## Educate: 解決策の全知識を習得する（〜1,500字、H3で細分化・比較表2〜3個）
## Stimulate: 今行動する理由（〜600字、リスク・ROI等）
## Transition: 次のステップへ（〜400字、行動手順・内部導線）
## よくある質問（FAQ）（〜600字）
## まとめ（〜300字）
[CTA: <CtaBox /> + <AffiliateCard />]
```

**PASONA**（賃貸・DIY・オーナー投資向け）:

```
[リード文] 痛みを直撃する問題提起（〜200字）
## Problem: あなたが直面している問題（〜400字）
## Agitation: 問題はさらに深刻化する（〜400字）
## Solution: 解決策の全体像（〜400字、物理的根拠）
## Offer: 具体的な実行プラン（〜1,500字、H3で段階分け）
## Narrow: あなたのケースに当てはめる（〜600字）
## Action: 今すぐできる第一歩（〜400字）
## よくある質問（FAQ）（〜500字、Persona Ωフィルター適用）
## まとめ（〜300字）
[CTA: <CtaBox /> + <AffiliateCard />]
```

## Step 3. パイプライン実行

`bouon-draft-publish-pipeline` skillのStep 0〜7を実行する。カテゴリ判定は `bouon-category` skillを使う（`solutions`/`use-case`等の旧カテゴリ名は廃止済み、使わない）。カバー画像・バンドルパスは**言語ファースト**（`src/content/ja/{category}/{slug}/`）。

## 完了レポート

```
## /write-article 完了レポート

### 公開済み
- [{title}] → src/content/ja/{category}/{slug}/index.mdx
  - ボリューム: {small/medium/high-quality} / 約{文字数}字
  - 構成フレームワーク: {PREP/Problem-Solution/QUEST/PASONA}
  - カバー画像: 生成済み / 未生成（理由）

### スキップ
- [{ファイル名}]: 理由
```

## 制約事項

- 画像生成はこのコマンド実行時のみ行う
- ドラフトのslug・URLは変更しない
- `pnpm build` / `git commit` は実行しない（ユーザーが手動で確認・実行する）
