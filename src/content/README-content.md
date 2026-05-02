# contentの説明書

本番記事格納フォルダ `src/content` のフォルダ構造を指定。

## フォルダ階層指示

### 日本語（`ja`）— 実務ナレッジ軸

```
src/content/ja/
├── column/
│   ├── company/
│   ├── news/
│   └── others/
├── soundproof-rental/
│   ├── diy/
│   ├── knowledge/
│   ├── others/
│   └── solution/
└── soundproof-room/
    ├── diy/
    ├── knowledge/
    ├── others/
    └── solution/
```

### 英語（`en`）— Japan lens（文化・社会・市場の国際発信）

`en` は **ja と同じトップカテゴリ名を使わない**。海外読者向けに「日本の防音・静寂がどう機能しているか」を説明する軸で整理する。

```
src/content/en/
├── japan-noise-and-society/     # 騒音と社会：近隣・マナー・住宅文化・日米欧比較
│   ├── culture/                 # 集合住宅・期待される静けさ・クレームの文脈
│   ├── etiquette/               # 作法・証拠・コミュニケーション
│   └── comparison/              # 海外との制度・生活文化の対比
├── japan-soundproof-housing/    # 住まいと防音市場：防音賃貸・リノベ・オーナー視点
│   ├── rental-market/           # 防音賃貸・用語・相場の「日本ならでは」
│   ├── renovation-investment/   # 投資・リノベ・収益モデル（日本文脈）
│   └── foreign-residents/       # 外国人・駐在・留学と「日本の音」のリアル
└── japan-quiet-spaces/          # 静かな空間：ユニット防音室・クリエイター文化・ルール
    ├── unit-booths/             # ブランド・製品文化・部屋の中の部屋
    ├── creators/                # 演奏・配信・ナイトプラクティスと防音
    └── rules-and-diy/           # 賃貸契約・耐荷重・原状回復など日本ルール下のDIY
```

- 第1階層: 言語コード（`ja` / `en`）
- 第2階層: **`ja`** は `column` / `soundproof-rental` / `soundproof-room`。**`en`** は上記3つの **Japan lens** カテゴリのみを使う。
- 第3階層: サブ区分（記事タイプ・編集上の束ね。上表を正とする）

ナビ・カテゴリ一覧の正本はコード上 `src/data/contentCategories.ts`（`JA_TOP_CATEGORIES` / `EN_TOP_CATEGORIES`）も参照。

## _draft から本番記事へ移す際のカテゴリ厳密ルール

- 下書きは必ず `_draft` に作成し、公開時に `src/content/ja/` 配下へ移す（**企画の起点は基本 `ja`**）。
- **`en` を新規に書く場合**も、上記 `en` ツリーの **第2・第3階層**にだけ配置する（`ja` と同じ `soundproof-room` 等には置かない）。
- 主要キーワードが防音室なら（ja）`soundproof-room`、（en）ではテーマに応じて `japan-quiet-spaces` または `japan-soundproof-housing` を選ぶ。
- 主要キーワードが防音賃貸なら（ja）`soundproof-rental`、（en）では `japan-soundproof-housing` を優先する。
- 最新情報・企業関連の話題は（ja）`column`。（en）では「日本の市場・文化としてのニュース」なら `japan-noise-and-society` か `japan-quiet-spaces` のサブ区分を選ぶ。
- 第3階層は必ずフォルダで切る（上表のいずれか）。

## frontmatter ルール（categories / slug）

- `lang` / `category` / `subcategory` は **ディレクトリ構造と一致**させる。
- `category` で使った英数字列は、`slug` では可能な限り重複使用しない。
- パーマリンク全体で記事意図が伝わるよう、`slug` は固有テーマを簡潔に表現する。
