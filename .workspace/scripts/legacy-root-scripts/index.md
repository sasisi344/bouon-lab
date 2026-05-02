# legacy-root-scripts

ルート `scripts/` から移設した旧スクリプト群です。  
新規運用は `.workspace/scripts/` 直下を優先してください。

## 再利用候補（比較的安全）

- `generate_post_list.cjs`
- `audit_images.cjs`
- `convert_bold_to_strong.py`
- `convert_bold_to_strong.ps1`
- `mdx_sanitizer.cjs`
- `fix_list_strong.cjs`

## 注意して使う

- `fix_missing_images.cjs`
- `deep_repair.cjs`
- `final_repair.cjs`
- `ultimate_repair.cjs`

## 廃止候補（要再実装）

- `cross_ref_gsc.py`
- `cross_ref_gsc_fixed.py`
- `cross_ref_gsc_pathlib.py`
- `analyze_gsc.py`
- `final_analysis.py`
- `generate_cleanup_list.py`
- `move_to_archive.py`

理由: 旧ディレクトリ構成や旧絶対パス依存が残っているため。
