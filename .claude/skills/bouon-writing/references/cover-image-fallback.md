# カバー画像フォールバックと画像生成スクリプト

`bouon-writing` SKILL.md の補助資料。

## カテゴリ共通カバー（フォールバック）

`image` を省略した記事は、表示・OG画像とも `src/data/categoryDefaultCover.ts` の `resolvePostCover` により、トップカテゴリ（`category`）に対応する `src/assets/images/category-default/{カテゴリキー}.png` が使われる。未対応カテゴリは `report-common-cover.png` にフォールバックする。

共通画像の差し替えは `category-default/` 内の該当PNGを置き換える（記事フォルダごとに `cover.png` を増やさない運用も可能）。

**運用上の推奨**: ビルド時に記事フォルダへ `cover.png` を自動生成・書き込みするプリビルドスクリプトは、リポジトリが汚れやすくCI/ローカルの差分も出やすいため非推奨。`image` を省略して共通フォールバックに任せるか、画像を生成して**置いた後に** `image: ./cover.png` を書くこと。

## 画像生成スクリプト

```bash
# 基本実行
node .workspace/scripts/generate-image.js "YOUR_PROMPT_HERE" "./cover.png"

# プリセット使用（推奨）
node .workspace/scripts/generate-image.js --preset cover "防音室のある静かなリビング" "./cover.png"
node .workspace/scripts/generate-image.js --preset content "吸音パネルの断面図" "./infographic.png"

# プリセット一覧確認
node .workspace/scripts/generate-image.js --list-presets
```

| プリセット | 用途 | アスペクト比 |
| --- | --- | --- |
| `cover` | 記事カバー画像 | 6:4 |
| `content` | 記事内挿入画像 | 16:9 |
| `portrait` | 縦長（サイドバー） | 4:6 |
| `infographic` | 図解・ダイアグラム | — |
| `sns` | SNS用 | 1:1 |

- プロンプトは**英語**で書く（生成精度向上のため）。記事のメインテーマを具体的に描写し、人物の顔・テキストオーバーレイ・著作権物は避ける
- 画像内テキストが必要な場合は**日本語**で指定
- BouonLabスタイル: Modern, Calm, Professional（防音・静寂・スタジオ系ビジュアル）
- 例: `"Soundproof booth setup in a modern home studio, acoustic panels on walls, soft warm lighting, no people, professional photography style"`
- API Key: `GEMINI_API_KEY` を `.workspace/scripts/.env` に設定
- スクリプトが失敗した場合（APIキーなし等）: `image` をfrontmatterから除外するか残したまま、ユーザーに通知して続行する
- 画像生成は明示的な指示があるときのみ実行する（無条件に自動生成しない）
