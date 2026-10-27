# QFO再調査タスク（A-3〜A-8）カバー画像生成タスク

作成日：2026-07-10
完了日：2026-07-10
出典：`.workspace/.task/qfo-recheck-task-20260709.md` のA-3〜A-8。

## 生成コマンド（共通）

```bash
node .workspace/scripts/generate-image.js --preset cover "ENGLISH_PROMPT" "./cover.png"
```

- プリセットは `cover`（アスペクト比6:4）を使用
- プロンプトは英語で記述、画像内に文字が必要な場合のみ日本語で指定を追加
- 生成後、各記事フォルダの `index.mdx` frontmatterで `image: ./cover.png` になっていることを確認（クォートなし）

---

## A-3. 防音室・ピアノ室×住宅ローン（category: money）

- [x] 保存先: `src/content/ja/money/piano-soundproof-mortgage-tax-guide/cover.png`
- [x] frontmatter: `draft: false` / `image: ./cover.png` 確認済み

## A-4. サックス×賃貸（category: soundproof-rental）

- [x] 保存先: `src/content/ja/soundproof-rental/saxophone-apartment-practice-guide/cover.png`
- [x] frontmatter: `draft: false` / `image: ./cover.png` 確認済み

## A-5. マンションで楽器は何時まで？（category: knowledge）

- [x] 保存先: `src/content/ja/knowledge/mansion-instrument-practice-time-rules/cover.png`
- [x] frontmatter: `draft: false` / `image: ./cover.png` 確認済み

## A-6. 音大生の物件探しガイド（category: soundproof-rental）

- [x] 保存先: `src/content/ja/soundproof-rental/music-student-property-search-guide/cover.png`
- [x] frontmatter: `draft: false` / `image: ./cover.png` 確認済み

## A-7. 電子ドラム・電子ピアノの振動対策（category: diy）

- [x] 保存先: `src/content/ja/diy/electronic-drum-vibration-fuwafuwa-system/cover.png`
- [x] frontmatter: `draft: false` / `image: ./cover.png` 確認済み

## A-8. 音過敏・聴覚過敏・ミソフォニアの環境調整ガイド（category: knowledge）

- [x] 保存先: `src/content/ja/knowledge/sound-sensitivity-misophonia-environment-guide/cover.png`
- [x] frontmatter: `draft: false` / `image: ./cover.png` 確認済み

---

## 実行結果

- `npx astro check` : 0エラー
- `npx astro build` : 218ページ生成、画像リンク切れなし
