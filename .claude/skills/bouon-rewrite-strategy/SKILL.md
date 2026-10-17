---
name: bouon-rewrite-strategy
description: 既存記事の改善優先度判定・実行フロー・リライト時の必須制約（slug不変・内部リンク確認）が必要なとき、CTR改善やレガシー記事の再構成時に使う。
---

# BouonLab リライト戦略

## 優先順位

- 既存記事の改善を新規作成より優先する
- 高impression・低CTR記事を優先。CTRは順位帯で判定する（順位帯別の判定と対応は `bouon-writing` skillの`references/query-intent-match.md` Step 7）
  - 10位以内でCTR 3%未満 → タイトル・descriptionの修正を最優先
  - 表示30回以上（3か月）のクエリの語がタイトルにもH2にもない → 意図のずれ。H2追加、主要クエリならタイトルも合わせる
  - 11〜20位 → 内容の補強。タイトルだけ直しても効果は小さい
  - 21位以下で表示が多い → 統合・作り直しを検討
- CTRの効果測定は「10位以内のページのCTR（目標5%以上）」で行い、サイト全体の平均は使わない
- レガシー記事は現行の構造・語彙・導線に再構成する

## 実行フロー

1. 既存記事の課題を診断する。GSC画面でページを絞り込んで実際のクエリを確認し、クエリ契約（`references/query-intent-match.md` Step 1）を書き直してから、タイトル・description・導入・H2とのずれを洗い出す
2. データセットで仕様・価格・制度情報を最新化する
3. 見出し・本文を再設計し、薄いセクションを排除する
4. 内部リンクを更新し、回遊導線を補強する（`bouon-internal-link-ops` skillを参照）

## リライト時の必須ルール

- 既存 `slug` は原則変更しない（SEO評価保護）
- 内部リンクの追加・差し替えは `.workspace/.data-set/interlink-postlist.md` でリンク先を確認する
- 記法・frontmatter整合は `bouon-writing` skillを必ず維持する
- 結論先出し（PREP）で冒頭3秒の理解速度を上げる
- タイトルを変えたら、変更日と旧タイトルを、次の月次解析のS-NN（`.workspace/.task/schedule-task.md`）の個別ファイルに節として記録し、翌月以降の月次データで同じ順位帯のCTRを比べる
- 「文字数だけを増やす」加筆は禁止。比較・数値・事例を足す
