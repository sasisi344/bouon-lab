---
description: GSC/GA4の月次アクセスデータを取り込み、Google優先のKPIで解析して .task-management/task.md へタスク化し、判定済みの効果測定を records/ へ移す
---

# /monthly-ppdca — 月次PDCA解析コマンド

**引数**: 対象月（例: `/monthly-ppdca m10`）。省略時は実行日の前月を対象にする（月末当日に実行した場合は当月）。

**前提**: CSVの取得はユーザーが手動で行う。何を取るかの正本は `.workspace/access-data/export-spec.md`（G1〜G3・A1〜A3）。2026-10-16に週次（`/weekly-ppdca`）から移行した。

## Step 0. 事前ロード

`.task-management/CLAUDE.md`（サイト固有節を含む）と `bouon-task-ops` skillを前提に、`.task-management/inbox.md` の未処置、`.task-management/task.md` の**索引表**、`.task-management/records/index.md` を読む（本文は必要なIDだけ）。`task.md` の「m{MM}の月次解析」の行（例: m10はT-31）と、予定日が「（T-NN内）」の行が今回の確認対象。手順ファイル `.workspace/projects/monthly-analysis/YYYY-MM-02-m{MM}-monthly-analysis.md` に並ぶ効果測定の節を読む。`access-data/CLAUDE.md` §2・§7 と `export-spec.md` §4（KPI）を読む。

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
6. 「この月の出来事」（公開・リライト・統合・サイト変更）を、git log と `.task-management/records/index.md`（その月の完了日の行）・月次解析の手順ファイルの実施日から下書きしてユーザーに確認する

## Step 2. 集計

```bash
M=.claude/skills/bouon-weekly-report/scripts/monthly_report.py
python $M inventory
python $M report m{MM}                # 前月比（日平均）
python $M trend {施策対象のslugの一部}  # 月次解析の手順ファイルに並ぶ施策の対象URL
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

`.task-management/records/index.md` をテーマ・slugで Grep し、過去に完了・見送りした施策と重ならないか確認する。同じテーマの未完了T-NN、月次解析の手順ファイルの節があれば進捗更新として扱い、今月の手順ファイルに並ぶ節を判定する。

## Step 5. ドラフト出力（この時点ではファイルに書き込まない）

```
## 月次PDCA草案（m{MM}）

### Check（KPIと前月からの変化）
{KPI表・順位帯・インデックスの要点}

### 今すぐ着手できる候補（task.md に着手可で起票）
- {リライト候補・意図のずれ修正・affiliate導線の改善}

### 翌月のデータ待ちの候補（翌月の月次解析の手順ファイル＋task.md のデータ待ちの行）
- [ ] {事象} → {確認する指標・判定の月}（今月の節の継続か、新しい節かを明記）

### 陳腐化・見送り候補（records/ 行き）
- {前提が崩れた項目}
```

## Step 6. 確定 → ファイルへの反映

1. `m{MM}/README.md` にKPI表のスナップショットを書く（タスクファイルには写さない）
2. 今月の手順ファイルの各節に「結果」を書く。判定まで済んだ効果測定は、`task.md` の行を消して `records/` に1ファイル＋`records/index.md` に1行（`.task-management/CLAUDE.md` §6）。続ける項目は翌月の手順ファイル（`.workspace/projects/monthly-analysis/YYYY-MM-02-m{MM}-monthly-analysis.md`）に節を送り、`task.md` に翌月の「m{MM}の月次解析」の行（予定日は翌月2日）を起票する
3. 今すぐ着手できるものは `task.md` に新規T-NN（着手可）で追加する（**索引と本文を同じ編集で**）。新規IDは `task.md` と `records/index.md` を合わせた最大値+1
4. `access-data/CLAUDE.md` の§3索引・§6作業ログを更新する
5. 変更点を要約して報告する
