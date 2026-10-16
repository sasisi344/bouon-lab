---
description: GSC/GA4の月次アクセスデータを取り込み、Google優先のKPIで解析してtask-list.md・weekly-task.mdへタスク化する
---

# /monthly-ppdca — 月次PDCA解析コマンド

**引数**: 対象月（例: `/monthly-ppdca m10`）。省略時は実行日の前月を対象にする（月末当日に実行した場合は当月）。

**前提**: CSVの取得はユーザーが手動で行う。何を取るかの正本は `.workspace/access-data/export-spec.md`（G1〜G3・A1〜A3）。2026-10-16に週次（`/weekly-ppdca`）から移行した。

## Step 0. 事前ロード

`.workspace/.task/CLAUDE.md` と `bouon-task-ops` skillを前提に、`task-list.md`・`weekly-task.md` の**索引表**と `archive/task-list-index.md` を読む（本文は必要なIDだけ）。`access-data/CLAUDE.md` §2・§7 と `export-spec.md` §4（KPI）を読む。

## Step 1. 取り込み・仕分け

1. `_inbox/` が空なら「ファイルがありません」と伝えて止まる
2. 各ファイルの中身（先頭数行・列名）で種別を判定する（ファイル名では判定しない）:
   - GSC検索パフォーマンス: 1列目が `上位のページ`／`上位のクエリ`／`デバイス`／`日付`／`検索での見え方` → そのままのファイル名
   - GSCページ×クエリ: ページとクエリの2軸＋クリック・表示 → `gsc-page-query.csv`
   - GSCインデックス: `URL,前回のクロール` → `gsc-index-indexed.csv`、理由と件数の表 → `gsc-index-reasons.csv`
   - GA4: 探索名（先頭コメント）と列で A1 `ga4-lp.csv`／A2 `ga4-events.csv`／A3 `ga4-device.csv`
3. `.workspace/access-data/2026/m{MM}/` へ移す。`templates/monthly-checklist.md` を `m{MM}/README.md` にコピーし、期間・取得日・取得チェックを埋める
4. `gsc-periods.json` に期間を登録する（暦月=`month`、30日=`30d`）。GSCには期間が書かれないので、GA4の先頭コメントの期間と同じか**ユーザーに確認**する
5. 欠けているファイル、比較モード付き・累計のGSC、列が仕様と違うGA4があれば報告し、再取得を依頼する
6. 「この月の出来事」（公開・リライト・統合・サイト変更）を、git log と `task-list.md`・`weekly-task.md` の完了日から下書きしてユーザーに確認する

## Step 2. 集計

```bash
M=.claude/skills/bouon-weekly-report/scripts/monthly_report.py
python $M inventory
python $M report m{MM}                # 前月比（日平均）
python $M trend {施策対象のslugの一部}  # weekly-task.md のW-NNの対象URL
```

CSVは直接読まない。スクリプトの警告（未登録・列不足・期間のずれ）は必ず報告に含める。

## Step 3. 解析（Google優先、`export-spec.md` §4の順）

1. **インデックス**: 登録済みの記事数とカテゴリ別の内訳。前月から増えたか、登録0のカテゴリ（例: `local`）が残っていないか
2. **検索に乗った記事**: 表示が出た記事の本数、新しく出たページ・消えたページ。消えた記事は統合・301・noindexの影響か確認する
3. **順位帯**: 表示が上の帯（4〜10位・1〜3位）へ移ったか
4. **リライト候補**: 11〜20位のページ・クエリ
5. **意図のずれ**: 10位以内でCTR 3%未満のページを、G2のクエリと照らしてタイトル・description・H2の修正候補にする（`bouon-writing` skill `references/query-intent-match.md` Step 7）
6. **読まれ方と収益**: Google自然検索のエンゲージメント率、`affiliate_click` のページ別。押されたページと押されないが流入のあるページを分ける
7. **スマホ**: スマホ×自然検索のエンゲージメント率
8. 参考: 参照元の構成比（Bing・AI系）、ボット疑いの比率。判断には使わない

**施策の効果**は、施策日より後に丸1か月を含む月で判定する（公開・リライト直後の月は基準値として扱う）。公開ラッシュ中の月は前月比より次月の基準値として扱う。

## Step 4. 既存タスクとの重複チェック

`bouon-task-ops` skillに従う。同じテーマの未完了W-NN／T-NNがあれば進捗更新として扱い、確認時期が今月に当たるW-NNを判定する。

## Step 5. ドラフト出力（この時点ではファイルに書き込まない）

```
## 月次PDCA草案（m{MM}）

### Check（KPIと前月からの変化）
{KPI表・順位帯・インデックスの要点}

### 今すぐ着手できる候補（task-list.md行き）
- {リライト候補・意図のずれ修正・affiliate導線の改善}

### 翌月のデータ待ちの候補（weekly-task.md行き）
- [ ] {事象} → {確認する指標・確認月}（既存W-NNへの追記か新規W-NNかを明記）

### 陳腐化・archive行き候補
- {前提が崩れた項目}
```

## Step 6. 確定 → ファイルへの反映

1. `weekly-task.md`「週次生データ」の先頭に `m{MM}` のスナップショット（KPI表）を追記する
2. 該当W-NNに結果を書き、次月に確認する項目は新規W-NNとして起票する（**索引表も同時に更新**）
3. 今すぐ着手できるものは `task-list.md` に新規T-NNで追加する（**索引表も同時に更新**）
4. `access-data/CLAUDE.md` の§3索引・§6作業ログを更新する
5. 変更点を要約して報告する
