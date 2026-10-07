# S-10 在宅ワーク3記事の統合先の効果測定（W42基準値→W44比較、2026-10-24前後）

- 担当: Claude（解析・記録）。ユーザーはW43・W44のGSC/GA4エクスポートのみ（S-01・S-08と同じエクスポートを使う）
- 状態: 未着手
- 関連: T-15（後続候補）、`schedule/2026-10-10-w42-gsc-ga4-import.md`（S-01）、`schedule/2026-10-17-w43-merge-articles-check.md`（S-07）

## 背景

2026-10-07に、在宅ワーク系の3記事を`/ja/soundproof-rental/remote-work-family-harmony-soundproof/`へ統合した（デプロイ後に旧URLの301を確認する）。統合前の5本（統合先・3本・別維持の`telework-soundproof-loan-strategy`）は、GSC 3か月累計でも表示が0〜18件、直近7日（W41）は5本とも表示0で、評価が育っていなかった。そのため、統合による評価の損失はほぼない想定。

| 旧URL | 統合前の状況（3か月累計の表示） |
|---|---|
| `/ja/business/workbooth-office-soundproof-trend/` | 18（インデックス登録済み・2026-10-06時点） |
| `/ja/business/web-meeting-voice-soundleak-prevention/` | 2（未登録） |
| `/ja/diy/bedroom-telework-layout-soundproof/` | 0（未登録） |

統合先は旧`remote-work-family-harmony-soundproof`（表示3、未登録）の本文を書き直して拡張した。slugは変えていない。`telework-soundproof-loan-strategy`（money）は検索意図が「お金・経費」で異なるため別記事のまま残し、統合先からリンクしている。

## 手順

1. S-01実施時（W42取り込み）: 統合先の表示・クリック・順位をW42の7日ページ表から拾い、「結果」に**基準値**として記録する（出なければ「表示0」）
2. W44のGSC（カスタム7日）・GA4が揃ったら、`bouon-weekly-report` skillで同じURLをW42と比較して「結果」に追記する
   - GSCページ表: 統合先の表示・クリック・順位
   - GSCクエリ: 「テレワーク 家族 うるさい」「web会議 声漏れ」「寝室 テレワーク」「在宅ワーク 防音」などが統合先に付いているか
   - GSCのURL検査（ユーザー作業）: 統合先がインデックス済みか。旧3URLが「リダイレクトによりページがインデックス登録されませんでした」になっているか
   - GA4: 統合先のランディングと、`telework-soundproof-loan-strategy`・`bedroom-noise-type-solution-guide`への内部回遊
3. 判定
   - **インデックス済みで表示が出ている**: 統合の効果ありとして継続観察
   - **インデックスされたが表示0**: 需要が細いと判断し、追加施策は打たない。個別記事へ分ける基準は、7日データで週10表示以上または順位20位以内を2週連続（W-04の基準を準用）
   - **未インデックス**: URL検査で原因を確認し、必要ならT-NNを起票する。再リクエストは1回だけ

## 完了条件

- W42基準値とW44比較が「結果」に記録されている
- 判定結果（継続観察・追加施策なし・T-NN起票のいずれか）が書かれている

## 結果

（実施後に追記）
