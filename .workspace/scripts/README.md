# .workspace/scripts

このディレクトリがスクリプトの正本です。

## 環境変数（`.env`）

`generate-image.js` 用。`.env.example` をコピーして `.env` を作成する。

| 変数 | 用途 |
| --- | --- |
| `GEMINI_API_KEY` | Gemini API キー |
| `GEMINI_IMAGE_MODEL` | 画像生成モデル ID（例: `gemini-3.1-flash-lite-image`） |

## 常用スクリプト

- `generate-image.js`
- `build-interlink-postlist.mjs`
- `generate-linkcheck-task.mjs`
- `generate_post_list.js`
- `consolidate-tags.js`
- `consolidate-categories.js`
- `check-internal-links.mjs`
- `list-missing-covers.mjs`
