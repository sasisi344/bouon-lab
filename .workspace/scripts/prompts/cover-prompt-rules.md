# カバー画像プロンプト生成ルール

> `generate-image.js --preset cover` に渡すユーザープロンプトの組み立て方。
> systemContext（BouonLabのトーン）と cover preset（6:4 editorial）は自動付与されるため、
> ユーザープロンプトは**主題・場面・小道具**の指定のみに絞る。

---

## 基本フォーマット

```
[主題（スラグから抽出）] + [場面（カテゴリから決定）] + [小道具（タグから1〜2個）]
```

**目標文字数**: 英語で **12〜20 words**（長すぎると生成がブレる）

---

## Step 1 — スラグから主題を抽出

スラグはすでに英語のキーワード列。フィラーワードを除いて1〜3語の名詞句にする。

| 除去するフィラー | 残す核 |
|----------------|--------|
| `guide` `tips` `how-to` `for` `with` `complete` `full` `review` `comparison` | 具体的な名詞・動詞 |

**例:**
- `bass-trap-installation-guide` → `bass trap installation`
- `diy-soundproof-room-cost-breakdown` → `soundproof room cost breakdown`
- `hsp-soundproof-room-guide` → `HSP soundproof room`
- `proofroom-soudmore-manual` → `soundproof room sound leak inspection`

---

## Step 2 — カテゴリから場面（Scene）を決定

| category | 場面テンプレート |
|----------|----------------|
| `soundproof-room` | inside a professional soundproof room |
| `soundproof-rental` | Japanese urban apartment, soundproof rental |
| `diy` | DIY acoustic treatment workspace, hands-on |
| `money` | financial planning desk with documents |
| `creator` | streaming studio setup, VTuber room |
| `knowledge` | acoustic science diagram, educational illustration |
| `local` | [都市名] residential neighborhood Japan |
| `business` | professional office or corporate setting |

---

## Step 3 — タグから小道具（Props）を1〜2個選ぶ

記事の主題に最も近い視覚的名詞を選択。

| タグ（日本語） | 英語 Props |
|--------------|-----------|
| 防音室 / ユニット防音室 | soundproof booth unit |
| 吸音材 / 吸音パネル | acoustic foam panels |
| 遮音シート | mass loaded vinyl |
| ベーストラップ | bass trap corner absorber |
| 楽器名（ピアノ等） | piano / guitar / cello |
| 配信・実況 / VTuber | streaming microphone, RGB lighting |
| ASMR | sensitive microphone, whisper setup |
| DIY / 自作 | construction materials, tools |
| ローン / 費用 | financial documents, cost chart |
| 補助金 | official documents, subsidy stamps |
| 不動産投資 | property blueprints, investment chart |
| データセンター | server racks, cooling units |
| HSP / 感覚過敏 | soft warm lighting, calm interior |
| 換気 / エアコン | ventilation duct, HVAC unit |
| 温湿度 | humidity gauge, climate monitor |
| ESG | eco-friendly materials, green building |
| 睡眠 | person sleeping peacefully |
| 騒音統計 | data chart, noise complaint graph |

---

## Step 4 — 組み立て例

### 記事: `diy/bass-trap-installation-guide`
- タイトル: ベーストラップ設置ガイド
- カテゴリ: `diy`
- タグ: `ベーストラップ`, `吸音材`

```
bass trap corner absorber installation, DIY acoustic workspace, triangular rockwool panel
```

---

### 記事: `soundproof-room/hsp-soundproof-room-guide`
- タイトル: HSP・音過敏のための防音室完全ガイド
- カテゴリ: `soundproof-room`
- タグ: `HSP`, `ユニット防音室`

```
HSP soundproof room interior, soft warm lighting, calm and peaceful atmosphere
```

---

### 記事: `money/musician-soundproof-loan-strategy`
- タイトル: 音楽家・演奏家のための防音室導入戦略
- カテゴリ: `money`
- タグ: `ローン`, `防音室`

```
musician reviewing loan documents for soundproof room, financial planning desk
```

---

### 記事: `local/sendai-soundproof-rental-guide`
- タイトル: 仙台の防音賃貸事情
- カテゴリ: `local`
- タグ: `防音賃貸`, `仙台`

```
Sendai Japan quiet residential area, soundproof rental apartment buildings
```

---

## 避けるべき表現

| 避ける | 理由 |
|--------|------|
| `Japanese blog article about...` | systemContext に含まれており重複 |
| `modern clean professional...` | preset suffix が付与するため不要 |
| `no text, no watermark...` | systemContext に含まれており重複 |
| 20語超の長文 | 生成の一貫性が下がる |
| 抽象語（`concept` `idea` `strategy`） | 視覚的に具体性がない |

---

## コマンドテンプレート

```bash
node .workspace/scripts/generate-image.js --preset cover \
  "[主題] [場面] [小道具]" \
  "./src/content/ja/{category}/{slug}/cover.png"
```

---

## 自動化の場合の判定フロー

```
slug → 核名詞を抽出
category → 場面テンプレートを選択
tags[0〜1] → 小道具を最大2個選択
→ "{核名詞}, {場面}, {小道具}" の順で英文を組む
→ 16〜20語に収める
```
