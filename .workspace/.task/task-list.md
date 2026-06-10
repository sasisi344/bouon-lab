# 現在抱えているタスク

作成日：2026-06-10
前提：本日 `rewrite-post.md`（P1〜P3 全10記事）/ `streamer-post.md`（creator新規21記事）/ `seo-task.md`（ZONE A〜C）が完了済み。
本ファイルは「次に着手するタスク」を ①権威性UP（残存記事の補強） ②内部リンク改善 ③不足コンテンツ追加 の3軸で棚卸しした。

---

## ストリーマー記事の商品アフィコンポーネント登録作業
.workspace\.task\affi-item-list.md
提示された商品は記事中で使う予定なので、Amazonなりで商品のASINを確認。確認後、affiliates.tsへの登録をして記事作成を円滑にする。


## ① 権威性UP — 残存B評価記事の補強（`eeat-filecheck-list.md` より、本日未対応分）

`.cursor/rules/bouon-rewrite-strategy.mdc` の手順（診断→最新化→再構成→内部リンク更新）に沿って実施。

- [x] `soundproof-room/bouon-humidifier-comparison`
  - 対応済み：ダイニチ/シャープのハイブリッド式加湿器5機種（型番・運転音dB・タンク容量）を追記（2026-06-10）
- [x] `soundproof-room/nitori-soundproof-acoustic-guide`
  - 対応済み：「遮音 vs 吸音」の物理的根拠（質量則・NRC）と、樹脂コーティングカーテンの軽減率データを追加（2026-06-10）
- [x] `diy/outdoor-soundproof-curtain-market-guide`
  - 対応済み：QYResearchのグローバル市場規模データ、周波数帯別素材表、国内外主要メーカー一覧を追加（2026-06-10）
- [x] `knowledge/future-ssi-silent-speech-interface-revolution`
  - 対応済み：MIT「AlterEgo」の実例（92%認識精度、2025年商用化移管）を追加し誇大予測トーンを是正（2026-06-10）
- [x] `business/japan-bouonproof-marketnextasia`
  - 対応済み：韓国/台湾/香港の騒音課題、ブランド階層、多言語キーワード表、東京・名古屋の家賃プレミアムデータを追加（2026-06-10）
- [x] `business/privacy-pod-market-growth`
  - 対応済み：個室ワークブース市場規模（2025年24億円、2026年度17,000台予測）を出典付きで追加（2026-06-10）
- [x] `local/sapporo-soundproof-rental-guide`
  - 対応済み：札幌の防音賃貸ポータル地域シェア（1.7%）と検索ボリューム傾向データを追加（2026-06-10）

---

## ② 内部リンク改善

- [x] `node .workspace/scripts/build-interlink-postlist.mjs` を実行し、`interlink-postlist.md` / `interlink-tag-clusters.md` を最新化（159記事を反映、2026-06-10）
- [x] creator新規21記事への被リンクを点検：ハブ記事（`streamer-soundproof-room-comprehensive-guide`、`vtuber-soundproof-environment-complete-guide`）から各テーマ別記事への導線が張られているか確認し、不足箇所を追加
  - 対応済み：comprehensive-guideの「→ 詳細：」プレースホルダー8箇所を実リンク（SmartLink）に変換、vtuber-guideにも4本のリンクを追加し相互リンク化（2026-06-10）
- [x] `bouon-humidifier-comparison`（上記①で補強後）に対し、`soundproof-room-pollen-protection`・`proofroom-humidity-airconditionlist` など「防音室×生活環境」シリーズから相互リンクを追加（seo-task.md ZONE C で言及済みの未実施分）
  - 対応済み：3記事間で相互リンクを追加（2026-06-10）
- [x] `local`カテゴリ10記事間の相互リンク状況を確認（東京・大阪等の大都市記事から地方記事への「他エリアも見る」導線が手薄な可能性）
  - 対応済み：全10記事に「他エリアの防音賃貸ガイドも見る」セクションを追加し、関東・関西・地方都市圏で相互リンク化（2026-06-10）

---

## ③ 不足コンテンツ追加（新規記事候補）

### local カテゴリ（現状10記事・最小カテゴリ）
- [x] 名古屋の防音賃貸ガイド（`nagoya-soundproof-rental-guide`）— 東京・大阪に次ぐ需要地として`eeat-filecheck-list.md`でも指摘済み
  - 対応済み：栄・今池・八事のエリア別相場、選び方を新規作成（2026-06-10）
- [x] 福岡の防音賃貸ガイド（`fukuoka-soundproof-rental-guide`）— 同上
  - 対応済み：天神・博多・西新のエリア別相場、選び方を新規作成（2026-06-10）
  - 東京・大阪・広島の各記事から相互リンクを追加

### knowledge カテゴリ（権威性の核となるリファレンス記事）
- [x] 防音材スペック早見表（面密度・透過損失TL・D値/Dr値の対応関係を一覧化した「データ集」記事）
  - 対応済み：`soundproof-material-spec-chart` を新規作成（2026-06-10）
  - d-value-truth-and-myths / bouon-dchiseinou-meyasu / absorption-vs-soundproofing-materials から相互リンク済み

---

## 進捗管理

- 効果測定待ちの既存施策（seo-task.md ZONE A〜C、W27目安）は本ファイルとは別管理。GSCデータ更新後に再評価する。
