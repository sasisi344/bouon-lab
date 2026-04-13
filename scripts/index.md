# scripts index

現行構成向けに `scripts/` を用途別整理したインデックスです。

- Current Ready: `generate_post_list.cjs`, `audit_images.cjs`, `convert_bold_to_strong.py`, `convert_bold_to_strong.ps1`, `mdx_sanitizer.cjs`, `fix_list_strong.cjs`
- Current Risky: `fix_missing_images.cjs`, `deep_repair.cjs`, `final_repair.cjs`, `ultimate_repair.cjs`
- Legacy: `cross_ref_gsc.py`, `cross_ref_gsc_fixed.py`, `cross_ref_gsc_pathlib.py`, `analyze_gsc.py`, `final_analysis.py`, `generate_cleanup_list.py`, `move_to_archive.py`

Legacy は旧 `src/content/posts/...` と旧絶対パス依存のため、改修後に使用してください。
# scripts index（現行構成最適化版）

現行のコンテンツ構成 `src/content/{collection}/{lang}/{slug}/index.mdx` を前提に、  
`scripts/` 配下を「今そのまま使えるか」で整理した運用インデックスです。

## 判定サマリ

### Current Ready（そのまま使える）
- `generate_post_list.cjs`（記事一覧生成）
- `audit_images.cjs`（frontmatter 画像参照監査）
- `convert_bold_to_strong.py`
- `convert_bold_to_strong.ps1`
- `mdx_sanitizer.cjs`
- `fix_list_strong.cjs`

### Current Risky（使えるが注意）
- `fix_missing_images.cjs`（対象ファイル固定）
- `deep_repair.cjs`
- `final_repair.cjs`
- `ultimate_repair.cjs`

### Legacy（現行構成では非推奨 / 要改修）
- `cross_ref_gsc.py`
- `cross_ref_gsc_fixed.py`
- `cross_ref_gsc_pathlib.py`
- `analyze_gsc.py`
- `final_analysis.py`
- `generate_cleanup_list.py`
- `move_to_archive.py`

## Legacy判定の理由
- `src/content/posts/...` 前提の旧ディレクトリ設計に依存
- `c:\Users\...\344ob\...` など旧絶対パスをハードコード
- 現在の `knowledge/solutions/use-case/company/column` 構成と不一致

## 目的別クイック選択
- 記事一覧を作る: `generate_post_list.cjs`
- 画像参照を監査する: `audit_images.cjs`
- 強調記法を正規化する: `convert_bold_to_strong.py` → `mdx_sanitizer.cjs` → `fix_list_strong.cjs`
- 崩れを強制修復する（最終手段）: `deep_repair.cjs` / `final_repair.cjs` / `ultimate_repair.cjs`

## 推奨運用順
1. 監査系（`generate_post_list.cjs` / `audit_images.cjs`）
2. 軽微修正（`convert_bold_to_strong.*` → `mdx_sanitizer.cjs`）
3. 必要時のみ強制修復（`deep/final/ultimate` 系）
4. Legacy群は現行構成向けに改修してから再利用

## 実行時の注意
- 一括上書き系は必ず Git 差分確認前提で実行
- 移動/削除系は対象リストを先に確認
# scripts index（現行構成最適化版）

このファイルは、**現在の BouonLab 構成**（`src/content/{collection}/{lang}/{slug}/index.mdx`）に合わせて  
`scripts/` 配下を「今すぐ使えるか」で整理した運用インデックスです。

## 判定サマリ

### そのまま使える（Current Ready）
- `generate_post_list.cjs`
- `audit_images.cjs`
- `convert_bold_to_strong.py`
- `convert_bold_to_strong.ps1`
- `mdx_sanitizer.cjs`
- `fix_list_strong.cjs`

### 要注意で使える（Current Risky）
- `fix_missing_images.cjs`
- `deep_repair.cjs`
- `final_repair.cjs`
- `ultimate_repair.cjs`

### 現行構成では非推奨（Legacy / 要改修）
- `cross_ref_gsc.py`
- `cross_ref_gsc_fixed.py`
- `cross_ref_gsc_pathlib.py`
- `analyze_gsc.py`
- `final_analysis.py`
- `generate_cleanup_list.py`
- `move_to_archive.py`

## 目的別クイック選択
- 記事一覧を作る: `generate_post_list.cjs`
- 画像参照を監査: `audit_images.cjs`
- 強調記法を正規化: `convert_bold_to_strong.py` → `mdx_sanitizer.cjs` → `fix_list_strong.cjs`
- 強い修復（最終手段）: `deep_repair.cjs` / `final_repair.cjs` / `ultimate_repair.cjs`

## 注意
- Legacy群は旧ディレクトリ構成と旧絶対パスに依存しているため、そのまま実行しないでください。
- 一括上書き系スクリプトは必ず差分確認前提で実行してください。
# scripts index（現行構成最適化版）

このファイルは、**現在の BouonLab 構成**（`src/content/{collection}/{lang}/{slug}/index.mdx`）に合わせて  
`scripts/` 配下を「今すぐ使えるか」で整理した運用インデックスです。

---

## 現行構成での判定サマリ

### そのまま使える（Current Ready）

- `generate_post_list.cjs`  
  - `src/content` 全体を走査して `.workspace/.data-set/content_post_list.md` を生成
- `audit_images.cjs`  
  - frontmatter の `image:` 参照を監査（存在しない画像を検出）
- `convert_bold_to_strong.py` / `convert_bold_to_strong.ps1`  
  - `**text**` を `<strong>text</strong>` に一括変換
- `mdx_sanitizer.cjs` / `fix_list_strong.cjs`  
  - `<strong>` 崩れ補正（ただし一括上書きなので差分確認必須）

### 要注意で使える（Current Risky）

- `fix_missing_images.cjs`  
  - 対象ファイルがスクリプトに固定。現状ファイルが存在する前提
- `deep_repair.cjs` / `final_repair.cjs` / `ultimate_repair.cjs`  
  - 修復力は高いが、意図しないタグ再構成が起きやすい

### 現行構成では非推奨（Legacy / 要改修）

- `cross_ref_gsc.py`
- `cross_ref_gsc_fixed.py`
- `cross_ref_gsc_pathlib.py`
- `analyze_gsc.py`
- `final_analysis.py`
- `generate_cleanup_list.py`
- `move_to_archive.py`

非推奨理由:

- `src/content/posts/...` 前提の旧ディレクトリ設計に依存
- `c:\Users\...\344ob\...` など旧環境の絶対パスをハードコード
- 現在の `solutions/knowledge/use-case/company/column` コレクション設計と不整合

---

## 目的別に選ぶ

## 1) 記事一覧を作る

- 第一選択: `generate_post_list.cjs`
- 出力: `.workspace/.data-set/content_post_list.md`

## 2) 画像参照を監査する

- 第一選択: `audit_images.cjs`
- 補助: `fix_missing_images.cjs`（固定対象だけ直す用途）

## 3) 強調記法を正規化する

- 基本: `convert_bold_to_strong.py`（または `.ps1`）
- 追加補正: `mdx_sanitizer.cjs` → `fix_list_strong.cjs`
- 最終手段: `deep_repair.cjs` / `final_repair.cjs` / `ultimate_repair.cjs`

---

## 現行運用での推奨順

1. **監査系から実行**  
   `generate_post_list.cjs` / `audit_images.cjs` で現状を可視化
2. **軽い整形を実行**  
   `convert_bold_to_strong.*` → `mdx_sanitizer.cjs`
3. **強い修復は限定実行**  
   `deep/final/ultimate` 系は対象を絞って実行し、必ず差分確認
4. **Legacy群は改修後に再利用**  
   GSC分析系は現行構成向けに作り直してから使う

---

## 次にやると良い最適化

- `scripts/gsc/` を新設して、LegacyのGSC系を現行構成向けに再実装
- すべてのスクリプトを**相対パス + CLI引数**対応に統一
- `--dry-run` オプションを追加（移動/上書き系の事故防止）

# Scripts Index

`scripts/` 配下のスクリプト用途を整理したインデックスです。  
「次に何をしたいか」から逆引きできるようにまとめています。

## まず結論（用途別）

- **記事の棚卸し/GSC分析をしたい**: `analyze_gsc.py`, `final_analysis.py`, `generate_cleanup_list.py`
- **旧記事をアーカイブへ移動したい**: `move_to_archive.py`
- **`**bold**` を `<strong>` に変換したい**: `convert_bold_to_strong.py` / `convert_bold_to_strong.ps1`
- **`<strong>` 崩れをまとめて修復したい**: `mdx_sanitizer.cjs` → `fix_list_strong.cjs`（必要時のみ `deep_repair.cjs` / `final_repair.cjs` / `ultimate_repair.cjs`）
- **frontmatter の `image` 参照を点検したい**: `audit_images.cjs`
- **特定記事の `image: ./cover.jpg` 行を削除したい**: `fix_missing_images.cjs`
- **全記事一覧を作りたい**: `generate_post_list.cjs`

---

## 詳細カタログ

## `scripts/`（メイン）

| Script | 目的 | 主な入力 | 主な出力 | 実行の安全性 |
| :--- | :--- | :--- | :--- | :--- |
| `analyze_gsc.py` | Page単位でImp集計し、20未満を抽出 | GSC CSV（パス固定） | 標準出力 | 読み取り専用 |
| `cross_ref_gsc.py` | ローカルslugとGSC Impを比較（初期版） | `src/content/posts/ja` + GSC CSV（固定） | 標準出力 | 読み取り専用 |
| `cross_ref_gsc_fixed.py` | `cross_ref_gsc.py` 改良版 | 同上 | 標準出力 | 読み取り専用 |
| `cross_ref_gsc_pathlib.py` | pathlib版の比較処理 | 同上 | 標準出力 | 読み取り専用 |
| `final_analysis.py` | post-listとGSCを突合し、Keep/Low/Ghost分類 | `post-list.md` + GSC CSV（固定） | 標準出力 | 読み取り専用 |
| `generate_cleanup_list.py` | Keep/Review/DeleteのMDを生成 | `post-list.md` + GSC CSV（固定） | `content_cleanup_list.md` | **ファイル生成あり** |
| `move_to_archive.py` | cleanup listのDelete対象をアーカイブ移動 | `content_cleanup_list.md` | `src/content/_archived-posts` へ移動 | **ディレクトリ移動あり** |
| `convert_bold_to_strong.py` | `**text**` を `<strong>text</strong>` へ置換 | `src/content` | 各MD/MDXを上書き | **一括上書き** |
| `convert_bold_to_strong.ps1` | PowerShell版の同等処理 | `src/content` | 各MD/MDXを上書き | **一括上書き** |
| `mdx_sanitizer.cjs` | 行単位で `<strong>` タグ整合を補正 | `src/content` | 各MDXを上書き | **一括上書き** |
| `fix_list_strong.cjs` | 箇条書きの太字ラベルを正規化 | `src/content` | 各MDXを上書き | **一括上書き** |
| `deep_repair.cjs` | 表セル/文中の崩れたタグを修復（強め） | `src/content` | MD/MDX上書き | **強い破壊的変更リスク** |
| `final_repair.cjs` | `deep_repair` 別実装（強め） | `src/content` | MD/MDX上書き | **強い破壊的変更リスク** |
| `ultimate_repair.cjs` | さらに強力な一括修復 | `src/content` | MD/MDX上書き | **最も慎重に使用** |
| `audit_images.cjs` | frontmatter画像参照の存在チェック | `src/content` | Missing一覧を標準出力 | 読み取り専用 |
| `fix_missing_images.cjs` | 指定5ファイルの`image: ./cover.jpg`削除 | スクリプト内固定パス | 対象ファイル上書き | **対象限定の上書き** |
| `generate_post_list.cjs` | content全体の一覧表を生成 | `src/content` | `.workspace/.data-set/content_post_list.md` | ファイル生成あり |
| `gsc_analysis_result.txt` | 過去分析結果のログ | - | - | 実行ファイルではない |

---

## 推奨の使い分けフロー

### 1) GSC起点で整理対象を決めたい

1. `generate_post_list.cjs` で現行記事一覧を出力
2. `final_analysis.py` で概況確認
3. `generate_cleanup_list.py` で作業リスト化
4. 必要なら `move_to_archive.py` で移動

### 2) MDX記法の修復をしたい

1. まず `convert_bold_to_strong.py`（または `.ps1`）
2. 次に `mdx_sanitizer.cjs`
3. 箇条書き崩れが残る時のみ `fix_list_strong.cjs`
4. `deep/final/ultimate` 系は最終手段

### 3) 画像参照を点検したい

1. `audit_images.cjs`
2. 指定記事の既知不整合だけ修正するなら `fix_missing_images.cjs`

---

## 注意点（重要）

- 多くの Python スクリプトで **旧環境の絶対パス**（`344ob/...`）がハードコードされています。現ワークスペースで再利用する場合は、先にパス修正が必要です。
- `deep_repair.cjs` / `final_repair.cjs` / `ultimate_repair.cjs` は修復力が高い反面、意図しない整形が入りやすいです。必ずGit差分確認を前提に実行してください。
- `move_to_archive.py` は実ファイルを移動します。実行前に対象スラグ一覧（cleanup list）を確認してください。

---

## 参考（関連スクリプト）

`scripts/` 以外にも運用系スクリプトがあります。

- `.agents/scripts/generate-image.js`: 画像生成（プリセット対応）
- `.agents/scripts/generate_post_list.js`: post/tag/categoryリスト生成（旧構造寄り）
- `.agents/scripts/consolidate-tags.js`: tags正規化
- `.agents/scripts/consolidate-categories.js`: categories正規化

必要なら次のステップで、`scripts/` 側に合わせて `.agents/scripts` も同じフォーマットで別インデックス化できます。
