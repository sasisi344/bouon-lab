# 現在抱えているタスク
思いつきmemoも含めて、防音Labで実行するべきタスクを整理。

## やるべきこと
- SEO改善
    - tagページのnoindex化（不要なクロールされないページを減らす）
    - CTRが高く順位が低いページの改善（文量を増やして詳細）
- カテゴリの再構築
    - 現在のカテゴリは少いので、構造的に複雑化している。トップカテゴリを8つくらいに細分化して、URL構造をなるべく短くしてわかりやすく処理
    - 完了したのでlistをレビューして最終確認が残っている

---

## 英語ページ対応（2026-05-31 方針変更）

### 現状
- `src/content/en/` 配下は空ディレクトリのみ（記事ファイルはゼロ）
- Search Console の `en/posts/` URLは旧サイト構造のキャッシュ
- 英語ページはSEO上の寄与がほぼゼロ（CTR 0%〜1%台、一部例外あり）

### 実施済み（2026-05-31）
- [x] `src/pages/[lang]/index.astro` — `en` を `getStaticPaths` から除外
- [x] `src/pages/[lang]/about.astro` — 同上
- [x] `src/pages/[lang]/privacy.astro` — 同上
- [x] `src/pages/[lang]/[category]/index.astro` — `EN_TOP_CATEGORIES` のループを除外

### 結果
ビルド時に `/en/` 以下のすべてのページが生成されなくなる。
`src/content/en/` ディレクトリは残存（空なので無害）。

### 将来の英語ページ再構築メモ
- 「翻訳量産」ではなく Japan lens（日本の住宅・文化・市場）での発信に再構成する
- カテゴリ構造は `japan-noise-and-society` / `japan-soundproof-housing` / `japan-quiet-spaces` を想定
- 再開するときは `getStaticPaths` の `en` を戻し、`src/content/en/` に記事を置くだけでOK
- 参照: `.cursor/rules/bouon-content-categories.mdc`（Japan lens の詳細方針）

---

## カテゴリ構成の再編（進行中）

ja（src/content/ja/）のトップに置く3カテゴリ：防音室 / 防音賃貸 / コラム

### complete-task

- [x] ja記事全体
    - [x] soundproof-room
    - [x] soundproof-rental
    - [x] column

- [ ] en記事全体 → **2026-05-31 時点で一旦保留。英語ページ全体を非公開化した**

---

## SEO改善タスク
詳細は `.workspace/.task/seo-check/seo-task.md` を参照。

### Zone A（タイトルリライト・最優先）
- [ ] rental-proofroom-contractcheck — 972表示・CTR 1.65%。タイトルを具体化
- [ ] bouon-rental-yatinsouba — 373表示・CTR 0.27%。数値・年号をタイトルに入れる
- [ ] soundproof-culture-japan-vs-america — 順位2.8位・CTR 0.52%。記事転換または削除検討
- [ ] soundproof-room-wifi-guide / soundproof-room-internet-lan-guide — カニバリ確認・統合検討

### Zone B（内部リンク強化）
- [ ] diy-vocal-soundproof-mask — CTR 14.43%・順位10.3位。内部リンク集中で5位狙い
- [ ] hsp-soundproof-room-guide — CTR 21.88%・順位9.3位。あと1〜2ランクで別次元
- [ ] asmr-proofroom-guide — 境界線（8.0位）・CTR 7.84%。リンク1本で突破可能
- [ ] soundproof-room-cheapest — CTR 5.59%・順位9.6位

### Zone C（コンテンツ強化・中期）
- [ ] bass-trap-installation-guide — 182表示・CTR 8.24%・順位14位。図解・データ追加
- [ ] soundproof-room-standard-size — CTR 15.62%・順位15位。サイズ別比較表追加
- [ ] soundproof-room-loan — CTR 7.35%・順位24位。申請手順・金融機関比較追加

---

## テーマ刷新（Starlight 採用方針）

> **実行タイミング**: カテゴリ再構築・SEO改善など、上記の現行コンテンツ作業が一段落してから着手する。  
> **方針**: 現在のカスタムテーマは破棄し、新テーマへ全面差し替え。具体的なデザイン・細部はこれから決定。

### 採用候補の方向性（2026-05-31 合意）

- **第一候補: [Starlight](https://starlight.astro.build/)** — ナレッジベース / ドキュメント型 UI
- **トップ IA**: カテゴリ入口（防音室・防音賃貸・コラム等）を上部に固定表示 → その下に最新投稿
- **カテゴリ内**: サイドバーでサブ区分（`solution` / `diy` / `knowledge` 等）へ分岐
- **未決定**: 最終デザイン、カラースキーム、Starlight 以外の併用・フォークの要否

### 移行時に押さえる前提

- [ ] 現行 URL（`/{lang}/{category}/{slug}/`）と slug は原則維持（SEO 保護）
- [ ] グローバル MDX コンポーネント（`CtaBox` / `RegionBanner` 等）の Starlight 側への再登録
- [ ] `ja` / 将来の `en`（Japan lens）でカテゴリ体系・サイドバーを分離
- [ ] 段階移行案: トップ + カテゴリ導線 → 記事テンプレート → 旧レイアウト削除

### 着手前チェックリスト

- [ ] カテゴリ再構築（`## カテゴリ構成の再編`）が完了している
- [ ] 適用テーマ・デザイン案が確定している
- [ ] PoC ブランチでトップ（splash + カテゴリ3枚 + 最新投稿）を試作済み

---

## 実行待ちタスク

> ToDoリストで管理する。実行したら実行済にチェックを入れて、「##実行済タスク」へ移動する。

## 実行済タスク

> 実行済に関しては、完了もしくはコメントアウトから2週間たったら「#archieve」フォルダに移動する。
