# 防音Lab — 画像のトーンとキャラクター性

作成: 2026-10-30（CC。既存のスキルの方針をまとめた案。ユーザー確認待ちの項目は §6）。画像の流れは `C:\Users\sasis\344blog\hq\org\README.md` §4。

## 1. 絵の人格（キャラクター性）

**静かな空間を求めて調べ尽くした人が、整理して手渡すメモ。**

- 落ち着き・静けさ・整理。誇張や煽り（「騒音地獄」のような不安の演出）をしない
- 専門家・施工業者のふりをしない（筆者に資格・施工経験はない）。施工現場の職人風の絵にしない
- 装飾より「理解を短縮する図」を優先する（`bouon-growth-ops` のビジュアル設計）

## 2. トーン

| 項目 | 指定 |
|---|---|
| スタイル | Modern, Calm, Professional。防音・静寂・スタジオ系の空間。人物の顔なし |
| 色 | AI 画像のトーンは `.workspace/scripts/prompts/bouon-presets.json` で固定（2026-11-09〜）。サイトのダーク配色に合わせる。背景 `#17120e`、カード `#241c15`、アクセントはゴールド（正本は `.claude/skills/bouon-memo-image/templates/memo-common.css` の `:root`） |
| 避ける | 高彩度・ネオン、人物の顔、著作権物、文字のオーバーレイ（カバー） |

## 3. 種類ごとの仕様

| 種類 | 仕様の正本 | 要点 |
|---|---|---|
| サムネイル（cover） | `.claude/skills/bouon-writing/references/cover-image-fallback.md` | `--preset cover`（6:4）、`cover.png`。省略時はカテゴリ共通カバーが使われる |
| メモ画像（比較・判断フロー・チェックリスト） | `.claude/skills/bouon-memo-image/SKILL.md` | HTML テンプレートから描画（AI 生成ではない）。幅1080px、1記事1〜2枚、本文の確認済みの事実だけ |
| そのほかの説明画像（断面図・仕組み） | このファイル §5-2 | 文字・数値が入るものは SVG → PNG（AI 生成にしない）。文字のない場面の絵だけ `--preset content`（16:9）。メモ画像と合わせて1記事3枚まで |

## 4. プロンプトの型（英語）

**トーン（色・画風・文字なし・顔なし・比率）は `.workspace/scripts/prompts/bouon-presets.json` で固定している（2026-11-09〜）。** スクリプトが自動で付けるので、記事側のプロンプトには **何が写っているか（主題・場面・小道具・構図）だけ** を英語12〜25語で書く。色コード・`background`・`labels`・`text`・`style`・比率を書くと、スクリプトが警告を出す。トーンを変えたいときは記事ではなく JSON を直す（CC の仕事）。

- サムネイル（`--preset cover`）: `<記事のメインKWの実物>, <場面>, <小道具1〜2個>`。組み立て方は `.workspace/scripts/prompts/cover-prompt-rules.md`
  - 例: `mass loaded vinyl sheet being fixed over plasterboard on an apartment wall, utility knife and tape nearby`
- 場面・実物の絵（`--preset content`）: `<読者が思い浮かべてほしい場面か実物>, <位置関係や大きさが分かる構図>`
  - 例: `cross-section view of a bedroom wall shared with a neighbor, layers of plasterboard and insulation visible, bed placed against the wall`
- 文字・数値・矢印の説明が要る図は AI に頼まない（§5-2 の SVG かメモ画像）
- メモ画像はプロンプトではなく、マーカーに「型（compare/flow/checklist/fill-in/lookup）と載せる項目」を書く

## 4-2. AI 画像を入れるのは「ここぞ」の場所だけ（2026-11-09〜）

Gemini API の費用は小さいので、使うこと自体はためらわない。ただし記事と関係の薄い画像は、ページの主題をぼかし、読者の時間も取る。入れる場所を絞る。

**入れてよい**（すべて満たす）

1. 読者が見たことのない物・場所・位置関係で、文字だけでは思い浮かべにくい（壁の中の層、内窓の取り付け位置、部屋の中の吸音材の配置、防音室を置いたときの大きさ）
2. 直前の段落でその場面・物を言葉で説明している（§README 4-4 ②の描写のあと、確かめに見る絵）
3. alt に、その H2 の主題の語と、絵の具体的な中身を書ける

**入れない**

- 雰囲気だけの絵（「静かな部屋のイメージ」「悩む人のイメージ」）。alt が一般的な言葉にしかならない絵はすべてこれ
- 表・図解・メモ画像と同じことを描く絵
- 見出しの飾り、段落の区切りとしての絵
- 記事の主題と違う物が主役の絵（遮音シートの記事に防音室の絵など）

**枚数**: サムネイル1枚（全記事）＋記事内の AI 画像は0〜1枚。図解・メモ画像と合わせて記事内3枚まで（§3）。

**生成後の確認**: 文字や数字のようなものが写り込んでいないか、記事の物と違う物（別の製品・ありえない構造）になっていないか、顔が出ていないかを見る。当てはまれば作り直す。2回作り直してもだめなら入れない。

## 5. 生成（サムネイルの段階だけ）

`node .workspace/scripts/generate-image.js --preset <cover|content> "<prompt>" "<保存先>"`。メモ画像は `bouon-memo-image` の手順。

## 5-2. 画像の分担（2026-11-09 決定）

**原則: 文字・数値が入る画像はコードで描く（SVG・HTML → PNG）。文字のない画像は API で生成する。** 画像生成AIは日本語と数字を崩しやすく（プリセットでも文字は8字まで）、図解の数値が本文とずれる原因になるため。

| 種類 | 文字・数値 | 作り方 | 作り手 | タイミング |
|---|---|---|---|---|
| サムネイル（cover） | なし | Gemini API（`generate-image.js --preset cover`） | Claude（Codex が API を呼べると確かめられたら Codex でもよい） | 完成稿の検収後 |
| 場面・実物の絵（§4-2 の条件を満たすときだけ。記事内0〜1枚） | なし | Gemini API（`--preset content`） | 同上 | 同上 |
| 仕組みの図解（断面・音の通り道・数値の棒グラフ・前後比較） | あり | SVG を手で書き、Chrome で PNG に描画（下の「SVG 図解の作り方」） | Claude | 検収で数値を確かめた後 |
| メモ画像（比較・判断フロー・チェックリスト・書き込み式・早見） | あり | `bouon-memo-image` の HTML テンプレート → PNG | Claude | 検収で数値を確かめた後 |

- **Codex は図解を作らず、図解の仕様をマーカーで置く**（下の書式）。Codex 内蔵の画像生成は、数値の入る図には使わない。サムネイルにも使わない（Gemini で作った既存のカバーとトーンをそろえるため）
- 図解を検収の後に作るのは、数値が検収で直ることがあるため。確定した数値から1回で描けば、本文と図の食い違いと作り直しが出ない
- Claude の使用量が足りない時期は、Codex に「マーカーの仕様から SVG を書く」までを任せ、Claude は数値と文字の確認だけにする（2026-11-10 の T-60 の後に別途試す）

### 画像マーカーの書式（Codex が本文に置く）

既存の `{/* IMAGE: ... */}` の書式に `種類=` を足して使う。説明したい段落の直後に置き、完成稿には残さない（Claude が画像に差し替える）。

文字・数値の入る図（SVG・メモ画像）:

```mdx
{/* IMAGE: fig-01 | 種類=svg-diagram | 位置=遮音シートの効果の表の後 | 目的=壁の層の順番と音が通る向きを示す | 状態=未作成
labels: 隣室／石膏ボード 12.5mm／遮音シート 1.2mm／室内（図に入れる文言をそのまま）
numbers: 面密度 約2.2kg/m²（本文「遮音シートの効果」の表、メーカー公表値）
alt: 図の中身を1〜2文で
*/}
```

文字のない AI 画像（§4-2 の条件を満たすときだけ）:

```mdx
{/* IMAGE: fig-02 | 種類=ai-content | 位置=内窓の取り付け位置の説明の後 | 目的=既存の窓の内側に枠が付く位置関係を見せる | 状態=未作成
Prompt: an inner window frame installed inside an existing aluminum window in a Japanese apartment, air gap between the two panes visible
alt: 図の中身を1〜2文で
*/}
```

- `種類=` は `svg-diagram`（断面・経路）／`svg-chart`（数値の比較）／`memo-compare`／`memo-flow`／`memo-checklist`／`ai-content`
- `Prompt:` には主題・場面・構図だけを書く（§4）。色・画風・文字の指定は書かない
- 2026-11-09 より前に置かれた IMAGE マーカーの Prompt に配色や日本語ラベルの指定があっても、そのまま使わない。生成するときに §4 の形へ書き直し、文字が要るものは SVG に回す

- numbers には、本文のどの節の数値かを必ず書く。本文にない数値を図だけに載せない
- 1記事の画像は、メモ画像と図解を合わせて3枚まで（§3）

### SVG 図解の作り方（Claude）

1. 原本の SVG を `.workspace/projects/<案件>/images-src/<slug>/fig-01.svg` に書く。`viewBox` は幅1080基準、文字は27px以上（補足24px以上）、配色はメモ画像と同じ `:root` の色
2. SVG を HTML で包み（フォント指定はメモ画像の `memo-common.css` と同じ）、`node .claude/skills/bouon-memo-image/scripts/render-memo.mjs <包んだ.html> src/content/ja/<category>/<slug>/fig-01.png` で PNG にする
3. 記事には `![alt](./fig-01.png)` で入れる。alt に図の中身（何と何をどう比べたか）を書き、出典は本文に書く
4. 画像を開いて、文字の切れ・重なり・孤立した1文字の折り返し・本文との数値の一致を確かめる

SVG を記事に直接埋め込まず PNG にする理由: 画像として読み込んだ SVG は Web フォントが効かず端末ごとに字形が変わる。MDX に SVG を直接書くと記事のファイルが長くなり、スマホ幅での文字サイズの確認もしにくい。PNG はサイトの画像最適化を通り、読者がスクリーンショットで保存しても崩れない。数値を直すときは原本の SVG を直して描き直す。

## 6. 未決（ユーザー確認）

- マスコット・案内役のキャラクターを置くか（現在なし）
