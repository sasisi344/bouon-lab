# 統合タスク（実行用）

更新日: 2026-04-13

このファイルは `.workspace/.task` の未完了タスクのみを統合した実行リストです。  
完了済みタスクと重複ドキュメントは整理済みです。

---

## 【優先】ハブ記事戦略・コレクション整理（2026-04-13 途中）

### ✅ 完了済み（本日）

- [x] **価格ハブ強化**: `solutions/unit-rooms/ja/soundproof-room-price/` を拡充（中古価格列・月額コスト・損益分岐・4層価格帯追加）
- [x] **競合記事 draft 化**: `soundproof-room-price-complete-guide` → `draft: true`
- [x] **ストリーマーハブ拡充**: `solutions/ja/streamer-soundproof-room-comprehensive-guide/` を5,000字→14,000字（29サテライト結合）
- [x] **防音賃貸ハブ拡充**: `solutions/rentals/ja/bouon-rental-market-guide/` を5,700字→16,000字（全30記事の導線集約）
- [x] **DIYハブ拡充**: `solutions/custom/ja/soundproof-room-diy-complete-manual/` を5,500字→17,000字（24サテライト結合・卵パック神話・質量則追加）

### 🔲 次回タスク（残り）

#### A. 防音室（一般）ハブ：タイトル更新のみ
- [ ] `solutions/unit-rooms/ja/soundproof-room-complete-guide-2025/index.mdx`
  - title を「2025」→「2026」に変更
  - description を更新
  - `soundproof-room-types`（新しい記事）との役割重複を整理
  - 主要サテライトへの内部リンクを本文内に追加

#### B. Phase 2-A：22記事を `knowledge/ja/` → `solutions/unit-rooms/ja/` に移動
- 参照ファイル: `.workspace/.task/query-analyize/kaizen.md`（TODO リスト）
- 内部リンクは基本なし（最優先で安全に実行可能）
- カテゴリ別: 資産・リセール5記事, 価格3記事, スペック6記事, 運用7記事, ブランド1記事

#### C. Phase 2-B：23記事を `knowledge/ja/` → `solutions/custom/ja/` に移動
- **要確認**: 重複スラッグ2件
  - `diy-soundproof-egg-carton-myth` vs `egg-carton-soundproofing-myth`（どちらかを draft 化）
  - `soundproof-subsidy-system-list` vs `soundproof-subsiproof-subsidy-system-list`（後者はタイポスラッグ → 修正）
- DIY系8記事 + 資材4記事 + 補助金11記事

#### D. Phase 2-C：22記事を `knowledge/ja/` → `use-case/` サブカテゴリに移動
- `use-case/streamer-tech/ja/`: 9記事
- `use-case/musician-pro/ja/`: 5記事
- `use-case/living-health/ja/`: 8記事

#### E. Phase 3：残りカニバリゼーション整理
- `soundproof-room-price-market`（0.5〜4.5畳詳細）: タイトルを「詳細サイズ別相場」に変更し差別化
- `bouon-price-souba`（ROI・資産価値特化）: タイトルを資産価値軸に明確化
- `soundproof-subsidy-*` 記事群の重複整理

---

## P0: 内部リンク最適化と計測運用

### 1) ホワイトペーパー -> オーナー戦略への導線追加
- [ ] ホワイトペーパー主要記事（No.02含む）から、オーナー向け戦略記事へ文脈リンクを追加する。

### 2) 公開前の内部リンク品質チェックを標準運用化
- [ ] 本文に文脈リンクを最低3本入れる（導入1本、比較1本、行動1本）。
- [ ] `Next Step` が3本表示されることを確認する。
- [ ] `Next Step` と `関連記事` の同一URL重複を解消する。
- [ ] ハブ経由2クリック以内で対象記事に到達できることを確認する。
- [ ] CTA記事（`solutions` / `use-case`）への導線を最低1本含める。

### 3) 回遊改善の未完了項目
- [ ] 重要カテゴリごとのハブページ内部リンク密度を再設計する。
- [ ] 主要導線を3本に固定する（在宅ワーク / 楽器練習 / 配信）。
- [ ] 各導線の構成を固定する（入口3 + 比較2 + 実践2 + CTA1）。
- [ ] `ja` / `en` で同一導線構造を揃える。
- [ ] 成果指標を確定する（PV/Session、記事間CTR、カテゴリ深度、直帰率）。
- [ ] カテゴリピルを副導線化し、ハブ導線を主導線へ切り替える。

### 4) 計測と改善ループ
- [ ] Search Consoleでカバレッジ、重複URL、言語ターゲティングを週次監視する。
- [ ] P0/P1反映後2-4週間のクロール頻度・表示回数を比較する。
- [ ] 低CTR/高表示の記事を定義し、title/description/内部リンクを改善する。
- [ ] 2-4週間比較で悪化導線をAB差し替え候補として抽出する。
- [ ] Sprint 4としてリンク構造の再調整（削除/統合/昇格）を実施する。
- [ ] DoD検証（Next Step 3本、2クリック到達、平均閲覧ページ増、孤立記事率閾値以下）を完了する。

## P1: 収益・検索戦略コンテンツの実行

### 1) 金融導線（防音室ローン戦略）
- [ ] 高額商品系4記事に「月額シミュレーション + ローン導線」セクションを追加する。
  - [ ] `src/content/solutions/unit-rooms/ja/million-yen-soundproof-room-professional/index.mdx`
  - [ ] `src/content/solutions/unit-rooms/ja/yamaha-avitecs-cefine-ns-guide/index.mdx`
  - [ ] `src/content/solutions/unit-rooms/ja/kawai-nasal-soundproof-room-guide/index.mdx`
  - [ ] `src/content/knowledge/ja/bouon-price-souba/index.mdx`
- [ ] 新規記事 `soundproof-room-loan-resale-value` を作成する。
- [ ] ASP比較表（リフォームローン/フリーローン/楽器ローン）を整備する。
- [ ] 実質月額モデル（残価差引）を図表化する。
- [ ] 税務・控除の適用可否を一次情報ベースで追記する。

### 2) ブランドクエリ・ファンアウト
- [ ] 5つの核KWから15-20記事のファンアウトマップを確定する。
- [ ] レポート導線（Reports層）を深化レイヤーとして設計する。
- [ ] 優先3記事（加湿器/換気/資産価値）を下書き作成する。
- [ ] 一般記事から深化コンテンツへの誘導パーツをテンプレート実装する。

### 3) データ公開戦略の残タスク
- [ ] 各リサーチデータを公開テンプレートに沿ってMarkdown化する。
- [ ] 10記事の公開スケジュール（週1 x 10週）を作成する。
- [ ] 記事末尾のCSV/PDFダウンロード導線（リード獲得）を設計する。

### 4) 市場調査・多言語展開
- [ ] 都市別データ（東京/名古屋/大阪/福岡/仙台）を更新する。
- [ ] 繁体字中国語・韓国語のローカライズ検証を実施する。
- [ ] 言語別KPI（セッション、CTR、CTA、CV）を90日で計測する。
- [ ] 翻訳比率の上限（10-20%）を運用ルールとして固定する。

## 運用メモ

- 実行中タスクはこのファイルだけを更新する。
- 新規アイデアは `_integrated-backlog.md` に追記する。
