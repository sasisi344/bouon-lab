# 現在抱えているタスク
思いつきmemoも含めて、防音Labで実行するべきタスクを整理。

## 今日やるべきこと
- 少ないカテゴリ記事を精査して、どんな記事を追加するべきか
- en記事の候補を作成して最低限のenページ原型を作成する

### enページの再構成
翻訳機能では文化側面を意識したライティングにしているが、そのまま翻訳するよりも、カルチャー発信にしたほうがいいと判断している。

トップページからja-enに相互移動する方法を用意。

## 今後すべきこと
- カテゴリに格納されている記事数のバランス調整

---

## カテゴリ構成の再編
ja（src/contnt/ja/）とen（src/contnt/en/）をトップに置く。
防音室、防音賃貸、コラムで分ける。

## _content-backupからcontentに記事移動
既存記事で使えるものを移動。フロントマターを新規に合わせて修正する。
使えるものは手動で見つけていくのが手っ取り早いか。

### 確認事項
- 全体的にパーマリンクが変わるからリダイレクトをするか、自然浸透を狙うか。
    「bouon-lab.com/ja or en/」で始まるようになるから、リダイレクトよりもサイトマップと構造化データの修正が最優先か。

### complete-task

- [x] ja記事全体
    - [x] soundproof-room
    - [x] soundproof-rental
    - [x] column

ja記事はすべて移動完了。次にやるならenに翻訳するべきものをチョイス。
それか、enだけ別構成にする方法もある。

- [ ] en記事全体
    - [ ] soundproof-room
    - [ ] soundproof-rental
    - [ ] column

終わったかの判断は`_content-backup`の中身がゼロになるかどうか。既存記事でも使えないのは多い。新しく生まれ変わる目的を含める。

### 今後のやりたいこと
- en記事の充実
- アジア圏をフォローするため言語設定を最適化したい
    - 現在はXがGrokで自動翻訳してくれるため、Xに投稿する文章にKWを盛り込んでもいける



新フロントマター例（推奨）
現在の実装（src/content.config.ts）に合わせるなら、まずこの形が基準です。

---
title: "防音パネルはデータセンターで使われる？用途と注意点を解説"
description: "データセンターでの騒音対策として防音パネルを使う際の考え方を、吸音・遮音の違いと設置時の注意点から整理します。"
slug: "data-center-noise-control-panel-guide"
date: "2024-06-01"
lastmod: "2026-04-30"
draft: false
lang: "ja"
category: "soundproof-room"
subcategory: "knowledge"
tags: ["防音パネル", "データセンター", "騒音対策", "吸音", "遮音", "サーバールーム"]
image: ./cover.png
---
EN版の例：

---
title: "Do Data Centers Use Acoustic Panels? Practical Guide"
description: "A practical overview of when acoustic panels help in data centers, and how to avoid common mistakes in noise control design."
slug: "data-center-acoustic-panel-guide"
date: "2024-06-01"
lastmod: "2026-04-30"
draft: false
lang: "en"
category: "soundproof-room"
subcategory: "knowledge"
tags: ["acoustic panel", "data center", "noise control", "sound absorption", "sound insulation"]
image: ./cover.png
---
あなたの要件に対する最適化提案
date: 初回公開日を固定（移行時に作成日を再定義するなら統一ルール化）
lastmod: 移行編集日を必ず更新
draft: 移行中は true、公開確定で false
image: ./cover.png で統一（記事フォルダ同階層）
tags: 最大7個にしたい方針は賛成（過剰タグ防止）
category: soundproof-room などの機械値を保持（表示名だけ言語別変換）
slug: カテゴリ語の重複を避ける（例: soundproof-room 配下で soundproof- を繰り返さない）
subcategory を残すべきか
残すメリット:
一覧ページ生成・パンくず・関連記事導線の制御が楽
「solution / knowledge / diy / others」の意図が明確
URLと情報設計が一致し、運用時の迷子が減る
省略するデメリット:
将来の再分類コスト増
タグ依存が強くなり、同義タグ揺れで崩れやすい
なので、内部データとしては subcategory を持ち、UIでは主カテゴリ中心に見せるのが実務的に最適です。
（あなたの「関連性はタグ中心で制御」も併用でOKです）

1点だけ実装整合の注意
現状スキーマでは tags が max(10) です。
運用を「最大7個」に固定するなら、src/content.config.ts の上限も max(7) に合わせるとブレません。

必要なら次に、あなた向けに _content-backup から移すときの**コピペ用テンプレート（ja/en別）**をさらに短く作ります。

## 実行待ちタスク


> ToDoリストで管理する。実行したら実行済にチェックを入れて、「##実行済タスク」へ移動する。

## 実行済タスク

> 実行済に関しては、完了もしくはコメントアウトから2週間たったら「#archieve」フォルダに移動する。