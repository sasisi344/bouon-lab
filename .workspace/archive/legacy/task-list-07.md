# task-list-07：トピッククラスタ表の最新化とカニバリ改善（2026-07-10）

`creator-topic-clusters.md`・`site-topic-clusters.md`が2026-06-24作成のまま陳腐化していたため最新記事一覧で更新し、提言されたカニバリ改善3件を実施。

## クラスタ表の最新化
- [x] `creator-topic-clusters.md` を39→45記事に更新。ペルソナB由来6記事を正式登録、提言をcreator量産停止後の運用（差別化維持・効果測定）に更新
- [x] `site-topic-clusters.md` を132→158記事に更新。初版以降の26記事を各クラスタ表に反映、新規クロスカテゴリ課題（D・I）と分業の良例（J・K）を追記

## カニバリ改善3件（提言のうち着手可能なもの）
- [x] D値ハブ化：`bouon-dchiseinou-meyasu`（soundproof-room）をD値の基本ハブに指定。`d-value-truth-and-myths`・`d-value-vs-rw-value-confusion`（knowledge）に誘導文・相互リンクを設置
- [x] 業者選びの分業固定：`construction-types-cost-comparison`（soundproof-room）と`soundproof-contractor-selection-guide`（money）に相互リンク＋守備範囲宣言を設置
- [x] 家賃相場クラスタの確認：`soundproof-rental-cost-performance-guide`と`rental-price-index-13cities-soundproof`は本文確認の結果カニバリではなく分業と判定。欠けていた片方向リンクを追加

詳細は `archieve/topic-clusters-resolved-20260710.md`。編集6記事のlastmod更新、`npx astro check`（0エラー）・`npx astro build`（218ページ・0エラー）で確認済み。

## 未対応のまま残っている最優先事項
- [ ] クロスカテゴリA（オーナー向け防音リノベROI、business2記事・soundproof-rental1記事・money1記事の計4記事）の統合検討。初版から2回の更新を経ても未着手で、サイト最大のクロスカテゴリカニバリのまま
- [ ] money「レンタル vs 購入」3本、soundproof-rental「導入・許可・耐荷重」クラスタ、soundproof-room「サイズ選び」2本の読み比べ・統合検討（`site-topic-clusters.md`提言2参照）
