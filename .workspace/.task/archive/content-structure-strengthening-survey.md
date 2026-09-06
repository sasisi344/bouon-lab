# 既存記事の構造強化タスク（ハブ）

- **作成日**: 2026-09-05
- **背景**: 本音と建前リライト（Tier1〜4、計83記事）が完了し、ユーザーから「改善はもう十分にベネフィットを提供している」との評価を得た。次のフェーズとして、本音と建前の軸ではなく、<strong>211記事全体を対象に「コンテンツ構成として強いかどうか」</strong>を機械的にチェックし、タスクの振り分けを行った。
- **スコープ**: 本音と建前とは別軸（内部リンク構造・コンテンツの厚み・情報の鮮度）での調査。
- **本ファイルの役割**: 調査結果のサマリと方針を記録する<strong>ハブ</strong>。記事単位の詳細な進捗管理・個別修正は、Tierごとに分離した以下の派生ファイルで行う（1記事ずつ状態・メモを更新できる）。

| Tier | 派生ファイル | 対象 |
|---|---|---|
| A | `.workspace/.task/content-structure-tier-a-internal-links.md` | 内部リンクが孤立（0本）・希薄（1本）な83記事 |
| B | `.workspace/.task/content-structure-tier-b-thin-content.md` | 3,000字未満の84記事（拡充/現状維持/統合の選別） |
| C | `.workspace/.task/content-structure-tier-c-stale-content.md` | `lastmod`が2026-05以前の29記事（情報鮮度確認） |
| D | `.workspace/.task/content-structure-tier-d-dedup-check.md` | 既存タスク（カニバリ調査等）との重複整理 |

---

## 調査方法

1. `src/content/ja/**/index.mdx` 全211記事の文字数・`lastmod`を集計
2. 各記事のURL（`/ja/{category}/{slug}/`）が、自分以外の何本の記事から内部リンクされているか（inbound link数）をカウントし、孤立記事（0本）・薄いリンク（1本のみ）を抽出
3. 3,000字未満（CLAUDE.mdの「Small」目安1,500字を超えて厚めに書くべきテーマかどうかの一次スクリーニング）を抽出
4. `lastmod`が2026-05以前（4ヶ月以上更新されていない）記事を抽出

---

## 調査結果

### A. 内部リンクの孤立・希薄（最優先候補）

全211記事中、<strong>他記事から一切リンクされていない「孤立記事」が44本</strong>、<strong>リンクが1本しかない記事が39本</strong>、合計83記事が内部リンク構造上弱い状態にある。孤立記事はGoogleのクロール・インデックスの手がかりが乏しく、サイト内の関連導線も存在しないため、コンテンツの中身を良くしても評価・回遊の面で不利になりやすい。

| カテゴリ | 記事数 | 孤立（0本） | 1本のみ | 平均inbound数 |
|---|---|---|---|---|
| creator | 46 | 15 | 8 | 2.22 |
| knowledge | 25 | 8 | 8 | 2.12 |
| diy | 25 | 7 | 7 | 1.64 |
| business | 15 | 5 | 4 | 1.27 |
| soundproof-room | 33 | 6 | 4 | 3.79 |
| soundproof-rental | 26 | 2 | 7 | 4.77 |
| money | 24 | 1 | 1 | 4.33 |
| local | 17 | 0 | 0 | 4.35 |

`local`は2026-07-20のG4施策（ハブ記事`bouon-rental-market-guide`との双方向リンク整備）が効いており孤立ゼロ。`creator`・`knowledge`・`diy`・`business`は同様のハブ化がまだ弱い。

記事単位の一覧・進捗管理は `.workspace/.task/content-structure-tier-a-internal-links.md` を参照（1記事ずつ「追加した内部リンク元」「状態」を記録できる形式）。

### B. コンテンツの厚み（3,000字未満：84記事）

| カテゴリ | 3,000字未満の記事数 |
|---|---|
| creator | 28 |
| soundproof-room | 13 |
| diy | 13 |
| soundproof-rental | 9 |
| money | 7 |
| knowledge | 7 |
| business | 5 |
| local | 2 |

**注意**: CLAUDE.mdの分類では「Small（〜1,500字）」はFAQ・チェックリスト型として正規のボリュームであり、3,000字未満＝すべて問題があるわけではない。GSC表示回数・CTRなど需要データと突き合わせ、「意図的に短いだけ」の記事と「需要はあるのに薄くて機会損失している」記事を選別する必要がある（この選別はまだ未実施）。

記事単位の一覧・進捗管理は `.workspace/.task/content-structure-tier-b-thin-content.md` を参照。

### C. 情報の鮮度（`lastmod`が2026-05以前：29記事）

半年近く更新されていない記事が29本ある。価格・製品ラインナップ・法制度など時間で変化する情報が古いままになっていないか、内容の再確認が必要。特に`knowledge/noise-regulation-update-2025`（法改正情報）と補助金関連2記事は優先度を上げる余地がある。

記事単位の一覧・進捗管理は `.workspace/.task/content-structure-tier-c-stale-content.md` を参照。

---

## 提案するタスク振り分け

| Tier | 内容 | 対象 | コスト感 | 効果の見込み |
|---|---|---|---|---|
| **A** | 内部リンクの孤立解消 | 83記事（孤立44＋1本のみ39） | 低（本文改稿不要、文脈に沿った内部リンク追加のみ） | 高（クロール性・回遊率・既存の本音リライト効果の後押し） |
| **B** | 薄いコンテンツの選別と拡充 | 84記事候補（要GSCデータでの絞り込み） | 中〜高（記事によっては本文の大幅加筆） | GSC需要データ次第で高〜低 |
| **C** | 情報鮮度の更新 | 29記事 | 低〜中（事実確認＋該当箇所の更新） | 中（誤情報リスクの解消、E-E-A-T維持） |
| **D** | 既存タスクとの統合 | カニバリ調査・ランキング崩壊調査・G4後続noindex判断等（`task-list.md`既存項目） | - | 重複作業の回避 |

**推奨する着手順**: A（低コスト・高効果、他の施策の土台になる）→ C（事実確認は独立して進められる）→ B（GSCデータでの絞り込みが先に必要なため、次回エクスポート後に着手）。Dは新規タスクではなく既存タスクとの重複チェック。

---

## 次のアクション（ユーザー判断待ち）

1. Tier A（`content-structure-tier-a-internal-links.md`、83記事）から着手するか判断する。着手する場合、カテゴリ別にサブエージェントを分けて、各記事に対し「どの既存記事から・どんな文脈で内部リンクを追加すべきか」を設計し、ファイル内の「追加した内部リンク元」「状態」列を更新しながら反映する
2. Tier C（`content-structure-tier-c-stale-content.md`、29記事）を並行して進めるか判断する。特に`knowledge/noise-regulation-update-2025`は法改正情報のため優先度を上げるべきか確認する
3. Tier B（`content-structure-tier-b-thin-content.md`）は次回GSCエクスポート後、表示回数・CTRと突き合わせて「GSC状況」「判断」列を埋めてから着手する
4. Tier D（`content-structure-tier-d-dedup-check.md`）は新規実行タスクではなく、`task-list.md`の既存項目との重複確認のみ

## 参照

- `.workspace/.task/content-structure-tier-a-internal-links.md`（Tier A: 内部リンク孤立・希薄記事の一覧と進捗）
- `.workspace/.task/content-structure-tier-b-thin-content.md`（Tier B: 薄いコンテンツの一覧と選別）
- `.workspace/.task/content-structure-tier-c-stale-content.md`（Tier C: 情報鮮度確認の一覧と進捗）
- `.workspace/.task/content-structure-tier-d-dedup-check.md`（Tier D: 既存タスクとの重複整理）
- `.workspace/.task/honne-tatemae-rewrite-survey.md`（本音と建前フェーズの記録）
- `.workspace/.data-set/interlink-postlist.md`（記事一覧、内部リンク整理の基礎データ）
- `.workspace/.data-set/pagerank-list.md`・`ctr-check-list.md`（既存のSEO優先度データ、Tier Bの絞り込みに活用予定）
- `.workspace/.task/task-list.md`（既存の未解決タスク一覧）
