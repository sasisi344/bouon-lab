# hub-cluster-list（トップの入口カードの所属記事）

`.workspace/scripts/build-hub-list.mjs` で生成。記事の frontmatter `hub`（クラスターkey: 表示順）を集計。**トップには各クラスターの所属記事から3本が、アクセスごとにランダムで出る**（母集団＝所属の全記事。表示順1〜3は、JS無効時と検索エンジンに見える初期表示）。

- **再生成**: `node .workspace/scripts/build-hub-list.mjs`
- **クラスター定義**: `src/data/hubClusters.ts`
- **要件**: `.workspace/.task/top-category-chenge-task.md`

## soundproof-room（4本）

| 表示順 | 初期表示 | category | slug | title | draft |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | ○ | soundproof-room | `bouon-osusume-hikaku` | 【2026最新】防音室おすすめ比較｜失敗しない選び方とROI（投資対効果）を分析 | false |
| 2 | ○ | soundproof-room | `piano-room-guide` | ピアノ防音室ガイド｜アップライト・グランド別の費用とマンション設置の条件 | false |
| 3 | ○ | soundproof-room | `soundproof-room-size` | ユニット防音室のサイズと選び方：演奏スタイルに合わせた内寸確認法 | false |
| 4 | - | soundproof-room | `assembly-type-comparison` | 組み立て式防音室おすすめ比較｜用途別（楽器・ゲーム・配信）と価格帯 | false |

## soundproof-rental（4本）

| 表示順 | 初期表示 | category | slug | title | draft |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | ○ | soundproof-rental | `bouon-rental-market-guide` | 【2026完全版】防音賃貸・防音マンション完全ガイド｜全国相場・D値・ブランド・選び方を総まとめ | false |
| 2 | ○ | soundproof-rental | `report-japan-soundproof-rental-market-needs` | 【調査報告】首都圏・関西圏における高性能防音賃貸市場の定量的分析（2025-2026） | false |
| 3 | ○ | local | `osaka-soundproof-rental-guide` | 【2026最新】大阪の防音賃貸ガイド｜ペット可・駅近・格安エリアまで徹底網羅 | false |
| 4 | - | local | `regional-city-soundproof-rental-guide` | 【2026】地方都市の防音賃貸ガイド｜金沢・岡山・熊本（西日本）と新潟（東日本）の選び方 | false |

## sound-leak（4本）

| 表示順 | 初期表示 | category | slug | title | draft |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | ○ | creator | `streamer-soundproof-room-comprehensive-guide` | 【2026完全版】配信者・VTuberのための防音環境完全ガイド｜ワンルームから防音室まで全解説 | false |
| 2 | ○ | creator | `one-room-streaming-soundproof` | ワンルーム配信の防音ハック｜1万円以下で隣人の壁ドンを回避する現実的な解 | false |
| 3 | ○ | soundproof-rental | `remote-work-family-harmony-soundproof` | 在宅ワークの音の悩みと防音｜家族の声・Web会議の声漏れ・寝室仕事の対策を整理 | false |
| 4 | - | soundproof-rental | `guitar-apartment-practice-guide` | ギターは賃貸で弾ける？ヘッドホンアンプでも消えない音への対処法 | false |

## diy（4本）

| 表示順 | 初期表示 | category | slug | title | draft |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | ○ | diy | `diy-internal-window-road-noise-reduction` | 内窓の防音効果を実測｜賃貸DIYポリカ窓から本格インプラスまで徹底比較【2025-2026年版】 | false |
| 2 | ○ | diy | `bass-trap-installation-guide` | ベーストラップ自作・設置ガイド｜低音こもりを解消する配置・測定の全手順 | false |
| 3 | ○ | diy | `soundproof-room-diy-cost` | 自作防音室の費用内訳｜材料費だけでいくらかかる？ | false |
| 4 | - | diy | `renter-parent-house-soundproofing` | 賃貸・実家でも原状回復0円！壁を傷つけず「防音室」並みの静寂を作る裏技5選 | false |

## sound-basics（5本）

| 表示順 | 初期表示 | category | slug | title | draft |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | ○ | knowledge | `soundproof-material-spec-chart` | 防音材スペック早見表｜面密度・TL値・D値の対応を一覧で比較できる資料 | false |
| 2 | ○ | knowledge | `ground-loop-noise-basics` | アース線とノイズの関係を基礎から解説｜グランドループの仕組みと対処 | false |
| 3 | ○ | soundproof-room | `bouon-dchiseinou-meyasu` | 遮音性能の基準「D値」とは？楽器・用途別の目安を徹底解説 | false |
| 4 | - | soundproof-rental | `bedroom-noise-type-solution-guide` | 上の階の足音・隣の話し声で眠れない｜音の種類で変わる寝室の騒音対策の選び方 | false |
| 5 | - | knowledge | `d-value-vs-rw-value-confusion` | D値とRw値は換算できない｜日本と海外の遮音等級を混同すると失敗する理由 | false |

## money-market（4本）

| 表示順 | 初期表示 | category | slug | title | draft |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | ○ | money | `soundproof-room-price-market` | 防音室の値段・価格相場2026｜サイズ別の実勢価格と隠れコスト完全比較 | false |
| 2 | ○ | money | `piano-soundproof-mortgage-tax-guide` | 防音室・ピアノ室は住宅ローンに組み込める｜資金計画と固定資産税の注意点 | false |
| 3 | ○ | business | `japan-soundproof-market-size` | 日本の防音市場規模の統計データ｜配信者経済とテレワークが押し上げる需要 | false |
| 4 | - | money | `soundproof-subsidy-check-guide` | うちの家は対象？防音工事の補助金エリアの調べ方【空港・基地・道路／東京・大阪の例つき】 | false |

