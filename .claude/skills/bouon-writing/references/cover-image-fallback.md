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
node .workspace/scripts/generate-image.js --preset content "acoustic panels mounted on a bedroom wall behind a desk" "./fig-01.png"  # 文字なしの場面だけ。文字・数値の入る図は SVG（.workspace/codex/image-style.md §5-2）

# プリセット一覧確認
node .workspace/scripts/generate-image.js --list-presets
```

| プリセット | 用途 | アスペクト比 |
| --- | --- | --- |
| `cover` | 記事カバー画像 | 6:4 |
| `content` | 記事内挿入画像 | 16:9 |
| `portrait` | 縦長（サイドバー） | 4:6 |
| `infographic` | 廃止（2026-11-09。指定するとスクリプトが止まる。図解は SVG かメモ画像） | — |
| `sns` | SNS用 | 1:1 |

- プロンプトは**英語**で、**何が写っているか（主題・場面・小道具・構図）だけ**を12〜25語で書く。トーン（色・画風・文字なし・顔なし・比率）は `.workspace/scripts/prompts/bouon-presets.json` で固定しており、スクリプトが自動で付ける（2026-11-09〜）。色や文字の指定を書くと警告が出る
- 画像に文字は入れない。文字・数値が要る図は SVG かメモ画像（`.workspace/codex/image-style.md` §5-2）
- 記事内に AI 画像を入れるのは「ここぞ」の場所だけ（`image-style.md` §4-2）
- 例: `"unit soundproof booth placed in the corner of a six-tatami Japanese room, desk and keyboard inside"`
- API Key: `GEMINI_API_KEY` を `.workspace/scripts/.env` に設定
- スクリプトが失敗した場合（APIキーなし等）: `image` をfrontmatterから除外するか残したまま、ユーザーに通知して続行する
- 記事に画像生成プロンプトを書いた段階で生成してよい（2026-11-06 ユーザー決定。全サイト共通）
