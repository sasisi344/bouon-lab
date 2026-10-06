# 図解メモ画像の元データ（T-10 住宅系4記事用）

「保存版メモ」画像の元HTML。文言を変えたらPNGを再生成する。**作り方・デザイン仕様・文言ルールは`.claude/skills/bouon-memo-image/SKILL.md`に集約した（2026-10-06）**。ここは使用例の記録。

| HTML | 型 | 出力先（記事フォルダ） |
|---|---|---|
| `memo-compare.html` | compare | `noise-solutions-relocate-retrofit-custom-home/memo-compare.png` |
| `memo-flow.html` | flow | `noise-solutions-relocate-retrofit-custom-home/memo-flow.png` |
| `memo-contract-check.html` | checklist＋compare | `custom-home-soundproof-builder-selection/memo-contract-check.png` |
| `memo-consult-prep.html` | fill-in | `custom-home-soundproof-consultation-prep/memo-consult-prep.png` |
| `memo-layout-check.html` | lookup | `custom-home-soundproof-room-layout/memo-layout-check.png` |

共通スタイルは`memo-common.css`（skillの`templates/memo-common.css`と同じ）。記事フォルダはすべて`src/content/ja/soundproof-room/`配下。

## 再生成（リポジトリのルートで実行。高さは自動）

```bash
node .claude/skills/bouon-memo-image/scripts/render-memo.mjs \
  .workspace/.task/t10-housing-affiliate/images-src/memo-layout-check.html \
  src/content/ja/soundproof-room/custom-home-soundproof-room-layout/memo-layout-check.png
```
