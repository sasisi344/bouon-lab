# SEOネック記事リライト方針

更新日: 2026-04-14  
起点: `src/content/` 全日本語記事のファイルサイズスキャン（wc -c 昇順）

---

## 概要

実質文字数が極端に少ない（〜1,000字）記事を特定した。  
SEO競合力の低下だけでなく、構造バグ（消失セクション・壊れた画像・不正書式）を含む記事が複数存在する。  
以下の優先順位で順次リライトを実施する。

---

## Tier 1 — 構造バグ（最優先・即修正）

### 🚨 `one-room-streaming-soundproof`

- **パス**: `src/content/use-case/streamer-tech/ja/one-room-streaming-soundproof/index.mdx`
- **現状**: 本文が「4. 予算1万円の防音ポートフォリオ」から唐突に始まる。セクション1〜3が完全消失。
- **原因推定**: 過去の編集でコンテンツがカットされた（lastmodが2026-03-10 → 公開後に改変あり）
- **SEO需要**: 高（「ワンルーム 配信 防音」「壁ドン 1万円 対策」）
- **リライト方針**:
  - [x] 消失セクション1〜3を復元（音漏れ経路の特定・隙間対策・家具活用）
  - [x] 全体を QUEST ロジックで Medium（2,000字）に構成し直す
  - [x] 末尾に `soundproof-rental-waiting-alternatives` などへの内部リンクを追加

### 🚨 `rental-vs-apartment`

- **パス**: `src/content/solutions/rentals/ja/rental-vs-apartment/index.mdx`
- **現状**:
  - `![Infographic](infographic.jpg)` → 存在しないファイルで 404
  - `**圧倒的に安い です。**` → Markdown bold 混入（Astro ビルドで警告）
  - フルート限定の切り口で汎用性が低い
- **SEO需要**: 高（「防音賃貸 防音室 どっち」「楽器可賃貸 費用比較」）
- **リライト方針**:
  - [x] `![Infographic]` 行を削除（または cover.png に差し替え）
  - [x] `**bold**` を `<strong>` に修正
  - [x] 楽器種別をフルート限定から拡張（ピアノ・ギター・歌・配信）
  - [x] 3年ではなく5年シミュレーションに拡張してリセール価値も追加
  - [x] `soundproof-room-resale-strategy` への内部リンク追加

---

## Tier 2 — 極小（実質500〜900字）＋ 高SEO需要

### ⚠️ `streamer-keyboard-silence`（3,011B）

- **パス**: `src/content/use-case/streamer-tech/ja/streamer-keyboard-silence/index.mdx`
- **現状**: 実質〜800字。静音リング・デスクマットを列挙するだけで終わっている。
- **SEO需要**: 高（「キーボード うるさい 配信」「打鍵音 マイク 対策」）
- **リライト方針**:
  - [x] スイッチ種類（赤軸/茶軸/静音軸）と打鍵音の関係を説明
  - [x] 静音化手法の比較表（静音リング/デスクマット/スイッチ交換/キーボード買い替え）を追加
  - [x] コスト×効果×作業難易度の3軸評価を追加
  - [x] ソフト対策（NVIDIA Broadcast）との組み合わせ論を拡充
  - [x] ペルソナ B（FPS配信者）向けの具体的な製品推奨に落とす
  - [x] 目標: Medium（2,000字）

### ⚠️ `self-built-booth-ventilation`（3,066B）

- **パス**: `src/content/knowledge/ja/self-built-booth-ventilation/index.mdx`
- **現状**: 実質〜750字。末尾に `© 2026 BouonLab` の不要行あり。
- **SEO需要**: 高（「自作防音室 換気」「DIY防音室 熱中症」）
- **リライト方針**:
  - [x] 末尾の `© 2026 BouonLab` を削除
  - [x] 消音ダクトの具体寸法と材料費を追加（段ボール→MDF移行の判断基準も）
  - [x] CO2濃度リスクを Persona Ω フィルターで追記（1,000ppm 基準）
  - [x] 夏冬別の運用方法（スポットクーラー連携・冬は結露リスク）を追加
  - [x] `co2-concentration-lossnay-productivity` への内部リンクを追加
  - [x] 目標: Medium（2,000字）

### ⚠️ `diy-led-acoustic-panels`（2,945B）

- **パス**: `src/content/knowledge/ja/diy-led-acoustic-panels/index.mdx`
- **現状**: 実質〜700字。組み立て手順が箇条書き4行のみ。
- **SEO需要**: 中（「LED 吸音パネル DIY」「配信部屋 背景 自作」）
- **リライト方針**:
  - [x] 材料費の内訳（吸音ウレタン・LEDテープ・フレーム材・両面テープ）を表形式で追加
  - [x] 各組み立てステップを200〜300字で詳述
  - [x] 失敗パターン（LEDの光漏れ・壁固定の落下）と対策を追加
  - [x] 吸音性能への影響（LEDを仕込む隙間で性能が落ちるか）を Ω 視点で言及
  - [x] 目標: Medium（1,800字）

---

## Tier 3 — 小（実質700〜1,000字）・優先度中

### `soundproof-rental-waiting-alternatives`（3,657B）

- **パス**: `src/content/use-case/living-health/ja/soundproof-rental-waiting-alternatives/index.mdx`
- **方針**: 2週間実施の記録方法を手順化・感情描写を強化・チェックリスト形式に拡張
- **参照**: 2026-04-14 ブレスト確定済み方針を適用
- [x] 目標: Medium（1,800〜2,200字）

### `remote-work-noise-solution-guide`（3,735B）

- **パス**: `src/content/use-case/living-health/ja/remote-work-noise-solution-guide/index.mdx`
- **方針**: 各H2に200〜400字の肉付け・防音カーテンの帯域説明・進め方テンプレの具体化
- **参照**: 2026-04-14 ブレスト確定済み方針を適用
- [x] 目標: Medium+（2,000〜2,500字）

### `gamer-acoustic-placement`（3,462B）

- **パス**: `src/content/use-case/streamer-tech/ja/gamer-acoustic-placement/index.mdx`
- **方針**: 一次反射面の視覚的説明・天井・コーナー処理・具体製品追加
- [x] 目標: Medium（2,000字）

### `nitori-soundproof-curtain-tension-rod-danger`（3,891B）

- **方針**: 危険性の物理根拠・代替固定方法の詳細・失敗事例の描写
- [x] 目標: Medium（2,000字）

---

## 後回し（優先度低）

| slug                                | 理由                                       |
| ----------------------------------- | ------------------------------------------ |
| `soundproof-asset-sharing`          | テーマがニッチ、検索需要が小さい           |
| `daiso-sound-absorbing-felt-review` | レビュー系は差別化が難しい、時間劣化もある |

---

## 実行ルール

- リライト時は **URLスラッグ変更禁止**（既存 SEO 評価を保護）
- `**bold**` を必ず `<strong>` に修正してから公開
- Persona Ω チェック: 誇大表現・換気リスク未言及・断定系の排除
- リライト完了後に `lastmod` を当日日付に更新
- 完了したタスクはこのファイルの `[ ]` を `[x]` に更新する

---

## 進捗

- [x] Tier 1: `one-room-streaming-soundproof` リライト
- [x] Tier 1: `rental-vs-apartment` バグ修正 + リライト
- [x] Tier 2: `streamer-keyboard-silence` Medium化
- [x] Tier 2: `self-built-booth-ventilation` Medium化（著作権行削除含む）
- [x] Tier 2: `diy-led-acoustic-panels` Medium化
- [x] Tier 3: `soundproof-rental-waiting-alternatives` Medium化
- [x] Tier 3: `remote-work-noise-solution-guide` Medium+化
- [x] Tier 3: `gamer-acoustic-placement` Medium化
- [x] Tier 3: `nitori-soundproof-curtain-tension-rod-danger` Medium化
