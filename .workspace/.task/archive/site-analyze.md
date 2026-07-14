---
title: "BouonLab サイト構成分析レポート（SEOアナリスト視点）"
date: "2026-07-09"
scope: "サイト構造・技術SEO・コンテンツ配分・llms.txt 正規化/構造化チェック"
source: "リポジトリ実査（astro.config.mjs / dist 出力 / robots.txt / llms.txt / GSC分析ファイル）"
---

# BouonLab サイト構成分析レポート（2026-07-09）

## 2026-07-10対応状況

❌判定だった項目はすべて対応済み。

- <strong>P0-1（`/en/` 可視性矛盾）</strong>: `public/robots.txt`の`Disallow: /en/`を撤廃、`astro.config.mjs`のsitemap filter/serializeを`/ja/`・`/en/`両対応に変更、`llms.txt`の「English version is currently paused」記述をen記事3本のリスト付き記述に更新。ビルド確認済み（sitemap-0.xmlにen記事3本のURLが出力されることを確認）。
- <strong>P0-2（JSON-LD未実装）</strong>: `astro.config.mjs`のstarlight `head`オプションでサイト全体に`Organization`/`WebSite`を追加。`src/pages/[lang]/[category]/[...slug].astro`で記事ごとに`BreadcrumbList`と`BlogPosting`（headline/description/image/datePublished/dateModified/author/publisher）を生成し、StarlightPageの`frontmatter.head`経由で出力。ビルド後のHTMLで4件のJSON-LDスクリプトを確認済み。
- <strong>P1-1（`og:image`なし）</strong>: 上記と同じ実装内で`getImage()`によりcover画像を1200x675 webpに最適化し、`og:image`・`og:image:width/height`・`twitter:image`を出力。ビルド後のHTMLで確認済み。
- <strong>llms.txt仕様非準拠</strong>: H1直後を`>` blockquote化、Index/Key ArticlesのURLを全て`- [title](url): description`形式に統一、Sitemap/Technical Foundationを`## Optional`配下に移動、`Last updated`を2026-07-10に更新。

未対応のまま：P1-2（需要未回収クラスター、qfo-recheckタスクに委譲）、P2-1（カテゴリ偏在・ハブページ）、P2-2（RSSフィード・ドキュメントドリフト）、llms.txtの自動生成スクリプト化・llms-full.txt併設（5・6番、余力があれば）。

---

## エグゼクティブサマリー

サイトの基盤（URL設計・canonical・リダイレクト・サイトマップ）は良好で、2026-06-01のカテゴリフラット化も丁寧に移行されている。一方で、<strong>致命度の高い矛盾が1件</strong>（公開済み `/en/` 記事3本がrobots.txtでブロックされ検索エンジンから不可視）、<strong>E-E-A-T戦略と直結する欠落が1件</strong>（構造化データJSON-LDが全ページでゼロ）ある。llms.txtは記載URLの実在性は全て確認できたが、llmstxt.org仕様への準拠と内容の鮮度に問題がある。

### 優先度マトリクス

| 優先度 | 課題 | 影響 |
| --- | --- | --- |
| P0 | `/en/` 記事の可視性矛盾（robots・sitemap・llms.txtの三重遮断） | 新規en記事3本のGSC需要が完全に無駄になる |
| P0 | JSON-LD構造化データが全ページ未実装 | リッチリザルト・E-E-A-Tシグナル・AI検索での引用性を全て逃す |
| P1 | 記事ページに `og:image` がない | SNS/メッセージ共有時のCTR損失 |
| P1 | llms.txt の仕様非準拠・情報陳腐化 | AI検索（AIO/LLM引用）最適化の効果減 |
| P1 | 表示あり・クリック0のクエリクラスター未回収 | qfo-recheck-20260709で特定済み（約680表示のアース系ほか） |
| P2 | カテゴリ偏在（creator 45本=全体の23%） | トピッククラスターの深さと収益導線のバランス |
| P2 | RSSフィード無し・内部ドキュメントのドリフト | 発見性・運用効率 |

---

## サイト構成の現状

### 技術スタック・URL設計

- Astro 6 + Starlight + MDX。ルーティングは `src/pages/[lang]/[category]/[...slug].astro` に集約
- URL: `https://bouon-lab.com/{lang}/{category}/{slug}/`（末尾スラッシュ・フラット構造、subcategory層なし）
- canonical: 全記事で自己参照canonicalが正しく出力されている（dist実査で確認）
- リダイレクト: `astro.config.mjs` に旧 `/posts/` 系214件＋2026-06-01フラット化移行64件＋`/en/`系19件を網羅。<strong>旧URL資産の引き継ぎは適切</strong>
- サイトマップ: `/ja/` のみ対象、about/privacy除外、priority/changefreq をカテゴリ別に出し分け。noindexページ（about/privacy）との整合も取れている

### コンテンツ在庫（2026-07-09時点、公開記事）

| カテゴリ | 記事数 | 比率 |
| --- | --- | --- |
| creator | 45 | 23.1% |
| soundproof-room | 30 | 15.4% |
| soundproof-rental | 24 | 12.3% |
| diy | 24 | 12.3% |
| money | 21 | 10.8% |
| knowledge | 19 | 9.7% |
| local | 17 | 8.7% |
| business | 15 | 7.7% |
| <strong>ja 合計</strong> | <strong>195</strong> | — |
| en（Japan lens） | 3 | — |

draft記事は0本（在庫は全て公開状態）。

---

## 課題詳細

### P0-1: `/en/` 記事の可視性矛盾【即時対応】

2026-07-02〜03にGSC需要データを起点として公開された en 記事3本（`building-code-reform-2025-noise-insulation` / `cost-to-soundproof-a-room-in-japan` / `how-japanese-streamers-soundproof`、いずれも `draft: false`）が、以下の三重遮断で検索エンジン・AIクローラーから不可視になっている。

1. `public/robots.txt` の `Disallow: /en/`（旧翻訳記事の排除措置の名残）
2. `astro.config.mjs` の sitemap filter が `/ja/` 以外を全除外
3. `llms.txt` の「English version is currently paused」記述

旧・単純翻訳記事の排除方針（意図的）と、新・Japan lens記事の公開方針が衝突している状態。<strong>需要データ起点で書いた記事が構造的にインデックス不能</strong>であり、執筆コストが回収できない。

<strong>対策</strong>: robots.txt の `Disallow: /en/` を撤廃し（旧enパーマリンクは既に404か redirects で処理済みのため個別ブロック不要）、sitemap filter を「`/ja/` または `/en/` の公開記事」に拡張。llms.txt の該当記述を「Selected English articles under Japan lens categories」に更新。

### P0-2: 構造化データ（JSON-LD）が全ページ未実装

`src` 全体・dist出力ともに `application/ld+json` が0件。E-E-A-T権威を目標に掲げるサイトとして最大の技術的欠落。

- `Article` / `BlogPosting`（headline・datePublished・dateModified・author・image）が無く、`lastmod` 運用の努力が検索エンジンに構造的に伝わっていない
- `BreadcrumbList` が無く、カテゴリ階層がSERP上で表現されない
- `Organization` / `WebSite` が無く、サイトレベルのエンティティ確立ができていない
- FAQ形式のコンテンツがあっても `FAQPage` として認識されない

<strong>対策</strong>: `src/components/starlight/Head.astro` はカスタム済みのため実装地点は確保されている。frontmatter（title/description/date/lastmod/image/category）から `BlogPosting` + `BreadcrumbList` を自動生成するコンポーネントを追加するのが最小工数。author情報はサイト運営者エンティティとして `Organization` に紐付ける。

### P1-1: 記事ページに `og:image` がない

dist実査で og:title / og:description / og:url / og:locale は出力されているが `og:image` が無い。全記事が `cover.png` を持っているのに共有時に画像が出ない。Starlight デフォルトHeadは記事個別のOG画像を出さないため、Head.astro での追加出力が必要（JSON-LD対応と同時に実装可能）。

### P1-2: 検索需要の未回収クラスター

`.workspace/strategies/qfo-recheck-20260709.md` で特定済みの通り。特にアース・グランドループ系（累計約680表示・クリック0）はサイト最大の未回収在庫。ワンタッチ防音壁（クリック実績あり・順位11〜34位）は商用性が高く専用記事化の期待値が最も高い。楽器別ではサックスが完全空白で、CtaBox設置可能な数少ないテーマ。→ 実行はqfo-recheckタスクに委譲（本レポートでは重複管理しない）。

### P2-1: カテゴリ偏在とハブページの薄さ

creator が45本（23%）に対し business 15本・local 17本。creatorのカニバリ解消は直近コミットで着手済みだが、収益主軸（防音室・防音賃貸のアフィリエイト導線）に対してcreator比重が高い。また、カテゴリインデックスページは記事一覧＋短い説明のみで、ハブとしての独自コンテンツ（カテゴリ内の選び方ガイド・主要記事への編集的導線）が薄い。カテゴリページ自体が「{カテゴリ名} 全般」クエリの受け皿になりきれていない。

### P2-2: その他

- <strong>RSSフィード無し</strong>: `@astrojs/rss` 未導入。発見性・更新通知・一部AIクローラーの巡回効率に寄与するため低コストで追加推奨
- <strong>内部ドキュメントのドリフト</strong>: `CLAUDE.md` は依然subcategory前提の記述（frontmatterテンプレート・パーマリンク例）が残り、`README-content.md`（フラット構造が正）と矛盾。AIエージェント運用の事故要因になるため同期推奨

---

## llms.txt 正規化・構造化チェック

### 仕様準拠（llmstxt.org スペック照合）

| チェック項目 | 判定 | 詳細 |
| --- | --- | --- |
| H1 でサイト名を宣言 | ✅ | `# BouonLab — 防音ナレッジベース…` |
| H1 直後の blockquote 要約（`> …`） | ❌ | 要約がプレーン段落で書かれている。仕様上は `>` 引用ブロックが必須 |
| セクションは H2 区切り | ✅ | Primary Locale / URL Structure / Categories / Key Articles 等 |
| リンクは `- [name](url): description` 形式のリスト | ❌ | 大半が `Index: https://…` の裸URL・プレーン記述。仕様はMarkdownリンクのリストを想定しており、パーサビリティが落ちる |
| `## Optional` セクションの活用 | ⚠️ | 未使用。Sitemap / Technical Foundation は Optional 節に移すと主要コンテンツの優先度が明確になる |
| 水平線 `---` の多用 | ⚠️ | 仕様違反ではないがセクション構造はH2のみで表現するのが標準的 |

### 内容の正確性（実データ照合）

| チェック項目 | 判定 | 詳細 |
| --- | --- | --- |
| 記載記事URL 24件の実在性 | ✅ | 全URLが `src/content/ja/{category}/{slug}/index.mdx` と一致（照合済み） |
| カテゴリ8種・フラットURL構造の記述 | ✅ | 実構造と一致 |
| 「English version is currently paused」 | ❌ | 2026-07-02以降 en 記事3本が公開済み。陳腐化 |
| `Last updated: 2026-06-01` | ⚠️ | 1ヶ月超未更新。7月公開の記事群（子育て世代money記事等）が未反映 |
| 掲載カバレッジ | ⚠️ | 195記事中24記事（12%）のみ掲載。money/creator等で主要記事の追加余地あり |

### 正規化の推奨アクション

1. H1直後の要約を `>` blockquote に変換する
2. カテゴリ節・Key Articles節のURLを全て `- [記事タイトル](URL): 一行説明` のリスト形式に統一する（Index URLも同様）
3. Sitemap / Technical Foundation を `## Optional` 配下へ移動する
4. en の記述を「Japan lens 3カテゴリで選択的に公開中」へ更新し、en記事3本のURLを追加する
5. `build-interlink-postlist.mjs` と同様に、<strong>frontmatterから llms.txt を自動生成するスクリプト</strong>（`.workspace/scripts/build-llms-txt.mjs` 等）を作り、鮮度問題を運用から排除する。カテゴリごとに「表示回数・クリック上位」の記事を優先掲載すればAI引用の期待値も上がる
6. 余力があれば `llms-full.txt`（全記事のタイトル＋description一覧）の併設を検討する

---

## 今後の対策ロードマップ

### 〜30日（技術基盤の穴を塞ぐ）

1. robots.txt / sitemap filter / llms.txt の `/en/` 三重遮断を解消（P0-1、作業30分規模）
2. `BlogPosting` + `BreadcrumbList` + `Organization` のJSON-LDを Head.astro に実装（P0-2）
3. 同時に記事別 `og:image`（cover.png）を出力（P1-1）
4. llms.txt を仕様準拠形式に正規化＋自動生成スクリプト化

### 31〜60日（需要回収）

5. qfo-recheck-20260709 の優先記事（ワンタッチ防音壁 → アース一般向け → 住宅ローン組込 → サックス）を順次公開
6. CTR 0%クエリのタイトル・description改修を継続（kaizen.md の未完了分。地域ガイドは「+踏み込んだニーズ」型タイトルへ）

### 61〜90日（構造の強化）

7. カテゴリハブページの編集コンテンツ化（選び方ガイド・主要記事キュレーション）— まず収益主軸の soundproof-room / soundproof-rental / money から
8. business / local の在庫拡充はGSC需要データ起点で個別判断（enと同じ規律を適用）
9. RSSフィード追加、CLAUDE.md と README-content.md の記述同期

---

## 良好な点（維持すべき基盤）

- 旧 `/posts/` 214件＋フラット化64件のリダイレクト網羅は模範的。URL資産の毀損なし
- canonical・末尾スラッシュ・noindexページのsitemap除外の整合性が取れている
- draft運用ゼロ在庫（公開判断が明確）
- タスク管理（qfo-check / query-analyize / strategies）のPDCAが実データ駆動で回っている
- AIクローラー許可の明示（GPTBot / ClaudeBot / PerplexityBot 等）はAI検索時代の方針として一貫している
