「手動でURLを消していく」は、実は今回のケースでは筋が悪い可能性が高いです。GSCの404レポートが意味していることと、削除(URL削除ツール)が実際にできることにはズレがあるので、まずそこを整理させてください。

## なぜ「手動で消す」が根本解決にならないか

Search Consoleの「削除」ツールは、**検索結果から一時的に(最大6ヶ月)非表示にするだけ**の機能です。これは「ユーザーに見せたくない情報を隠す」ためのもので、以下のことは一切起きません。

- 旧URLが持っていた被リンク評価・クリック履歴が新URLに移る、ということは**ない**
- ページの評価(パワー)が別のページに引き継がれる、ということも**ない**
- 404が消えても、SEO的な「評価の断絶」は解消されない

つまり、2,592件を手動で消したとしても、**見た目のエラー件数が減るだけで、旧ページが本来持っていたはずの評価は永久に失われたまま**になります。これは「傷を隠す」処置であって「傷を治す」処置ではありません。

## 本来やるべきこと:「なぜredirectが効いていないURL」なのかの特定

Claude Codeでredirect設定をしたにもかかわらず2,592件が404のままということは、**設定したredirectのルールが、実際の旧URLパターンを網羅できていない**可能性が非常に高いです。よくある原因:

| 原因パターン | 具体例 |
|---|---|
| slugのエンコーディング差異 | 日本語スラッグがURLエンコード/デコードの扱いでHugoとAstroで異なる形式になっている |
| trailing slashの有無 | `/article/` と `/article` の違いをredirectルールが吸収できていない |
| ページネーション・タグ/カテゴリページ | 記事本体だけredirectして、一覧・タグ・アーカイブページが漏れている |
| 大文字小文字の違い | URLの大文字小文字が変換時に変わり、ルールが一致しない |
| リダイレクトの適用範囲 | 特定のディレクトリ配下だけ設定して、他の配下が漏れている |
| リダイレクトチェーンの問題 | 旧→中間URL→新URLの多段になっていて、Googleがチェーンを追いきれていない |

**2,592件全てを個別に見る必要はありません。** GSCの404レポートから10〜20件ほどサンプルを見て、パターンが共通しているかを確認するだけで、原因はほぼ特定できます。

## 具体的な次のアクション

1. GSCの「ページ」→「404」のURLリストを開き、**実際に404になっている旧URLを10〜20件ほどコピー**する
2. それぞれのURLに実際にアクセスして、本当に404が返るか(redirectが発火しないか)を確認する
3. 404になっているURLと、正しくredirectされている(はずの)URLとで、**構造上の違い**を探す
4. 差分が見つかったら、そのパターンだけを追加でredirectルールに組み込む
5. 修正後、サンプルURLを数件Search Consoleの「URL検査」→「インデックス登録をリクエスト」で個別に再クロールさせ、正しく301が反映されているか確認する
6. 全体的な再クロールはGoogle側のスケジュール依存なので、修正後も反映まで数週間〜1、2ヶ月はかかる前提で見ておく

## 例外的に「削除」を使っていいケース

以下に該当するURLだけは、削除ツールを使う意味があります。

- 記事自体をもう残さないと決めた(統合・削除する)ページで、redirect先も存在しない
- 明らかに重複・低品質で、今後も残す価値がないページ

ただしこれは「404を消す」ためではなく、「もう要らないページを検索結果から片付ける」という別の目的です。今回の2,592件の大半は「本来redirectされるべきだったのに漏れている」ケースだと考えられるので、まず削除ではなく**redirectルールの穴埋め**を先にやるべきです。

実際に404になっている旧URLをいくつか(10件ほど)貼ってもらえますか?パターンを一緒に見て、redirectルールのどこが漏れているか特定できると思います。

---

## GSCで404が出ているURLを20件コピーする

https://bouon-lab.com/ja/knowledge/shanon-vs-bouon-window/
https://bouon-lab.com/ja/use-case/child-rearing-soundproof-pillar/
https://bouon-lab.com/index.xml
https://bouon-lab.com/en/knowledge/soundproof-subsidy-news-2025/
https://bouon-lab.com/tags/%E3%82%B7%E3%82%A7%E3%82%A2%E5%9E%8B%E9%85%8D%E4%BF%A1%E3%82%B9%E3%82%BF%E3%82%B8%E3%82%AA/
https://bouon-lab.com/tags/%E3%82%B7%E3%82%A7%E3%82%A2%E5%9E%8B%E9%85%8D%E4%BF%A1%E3%82%B9%E3%82%BF%E3%82%B8%E3%82%AA/
https://bouon-lab.com/categories/%E7%94%9F%E6%B4%BB%E9%9F%B3%E9%A8%92%E9%9F%B3%E5%AF%BE%E7%AD%96/
https://bouon-lab.com/en/tags/demerits-of-soundproof-room/
https://bouon-lab.com/tags/%E3%82%A2%E3%83%91%E3%83%BC%E3%83%88/
https://bouon-lab.com/en/tags/soundproof-room-mechanism/
https://bouon-lab.com/tags/metadox/
https://bouon-lab.com/en/tags/office/
https://bouon-lab.com/tags/%E4%B8%80%E4%BA%BA%E6%9A%AE%E3%82%89%E3%81%97%E9%85%8D%E4%BF%A1/
https://bouon-lab.com/ja/solutions/soundproof-sheet-size-used-market-guide/
https://bouon-lab.com/en/categories/soundproof-rentals/
https://bouon-lab.com/en/tags/soundproof-room-budget/

### 備考
「en」サブディレクトリが多いので、これらは全て削除してもいいのではないかと考える。現状でjpとenでディレクトリを分けているが、コンテンツ的に日本国内の情報をメインで発信するのがベストだし、en記事を作成しても外国からのアクセスが多かったこともないので、日本語で発信をして、その中で英語に自動翻訳してもらうほうが正しいコンテンツ提供になる。
そもそもの話、外国勢が求めているのは防音室の機能性と日本における文化の違いがメインであるため、総合的なナレッジ面では網羅する必要がないと判明はした。

---

## 再チェック結果（2026-09-05）

上記20件（重複除くと15件）を実際に本番URLへ`curl -I -L`で確認したところ、**全件が現在も404のまま**だった。パターンを分類すると、原因は一枚岩ではなく4種類に分かれる。

### パターンA: リダイレクト先の記事は存在するが、旧URLキー自体が登録漏れ（2件・修正済み）

`astro.config.mjs`のPhase 1〜3リダイレクトは「`/ja/{カテゴリ}/{旧サブカテゴリ}/{slug}/`」形式の旧URLしか吸収しておらず、**「knowledge」「use-case」「solutions」がトップレベルカテゴリだった、さらに古い世代の旧URL**が未登録だった。

| 旧URL（GSC 404） | 対応する既存リダイレクト（別ソースURL） | 今回追加した新キー |
|---|---|---|
| `/ja/knowledge/shanon-vs-bouon-window/` | `/ja/soundproof-room/diy/shanon-vs-bouon-window/` → `/ja/soundproof-room/shanon-vs-bouon-window/`（既存） | 同じ宛先へ新規追加 |
| `/ja/use-case/child-rearing-soundproof-pillar/` | `/ja/soundproof-rental/solution/child-rearing-soundproof-pillar/` → `/ja/soundproof-rental/child-rearing-soundproof-pillar/`（既存） | 同じ宛先へ新規追加 |

→ `astro.config.mjs`に2件追加し、`astro build`で301スタブの生成を確認済み（`dist/ja/knowledge/shanon-vs-bouon-window/index.html`等）。

### パターンB: 記事自体が削除済みで受け皿がない（1件・カテゴリindexへフォールバック）

`/ja/solutions/soundproof-sheet-size-used-market-guide/` は記事実体（`src/content/solutions/custom/ja/soundproof-sheet-size-used-market-guide/`）がコミット`96e6446`で削除されており、代替記事もない（`diy/soundproof-sheet-heavy-diy-tips`はテーマが異なり誤誘導になるため不採用）。7/2監査と同じ方針（統合先不特定→カテゴリindexへの安全側フォールバック）に倣い、`/ja/money/`へ追加した。

### パターンC: `/en/` 配下は既定方針により対応不要（3件確認: knowledge, tags×3, categories×1）

`/en/knowledge/soundproof-subsidy-news-2025/` `/en/tags/*` `/en/categories/soundproof-rentals/` は、いずれも旧Hugo時代の単純翻訳記事・タクソノミページで、Astro移行時に**意図的に非公開化済み**（`robots.txt`で一般UAには`Disallow: /en/`）。これは「直すべきリダイレクト漏れ」ではなく既定路線なので、今回は修正対象から除外した。ユーザー自身も本備考で「en配下は消してもいい」と言及しており、方針と一致する。

### パターンD: `/tags/*` `/categories/*` `/index.xml` は「記事の移行漏れ」ではなく「機能自体が廃止された旧Hugo構造」（8件確認）

現行Astroサイトには**タグ／カテゴリのアーカイブページも、RSSフィード（`/index.xml`）も実装が存在しない**（`src/pages`配下を確認、該当ルートなし）。つまりこれらは「移行時に受け皿URLを作り忘れた」のではなく、**サイト構造として機能ごと廃止されている**。個別記事のリダイレクトとは性質が違うため、対応方針は3択:

1. 何もしない（GSCの404は放置。機能自体がないので「削除」判断が妥当）
2. まとめて関連カテゴリのトップページへリダイレクト（例: `/tags/一人暮らし配信/` → `/ja/creator/`）— ただしタグ名からカテゴリを機械的に推定する必要があり、精度に限界がある
3. GSCの「削除」ツールで検索結果から非表示にする（今回の元メモが指摘した通り、これは評価継承にはならないので次善策）

2,592件のうち`/tags/` `/categories/` `/index.xml`パターンがどの程度の割合を占めるかは、今回サンプル15件の情報だけでは判断できない（8/15がこのパターンなので、全体でも大きな比率を占めている可能性が高い）。

### 次のアクション（要判断）

- [ ] GSCから2,592件の404 URL一覧をCSVでエクスポートしてもらえれば、7/2監査と同じ手法（既存記事slugとの完全一致照合）でパターンA相当の「記事はあるがリダイレクト漏れ」を全件洗い出せる
- [ ] パターンD（tags/categories/index.xml）の対応方針をユーザーに確認（放置 / カテゴリへの一括リダイレクト / 削除ツール、のどれを取るか）
- [ ] パターンB（削除済み記事）が他にもないか、今回のサンプル以外の404 URLでも要確認

---

## 方針転換: `/en/` 完全廃止（2026-09-05）

上記の議論を踏まえ、ユーザーが「サイト構成は現状維持のまま、`en`を排除し、`ja`単独構成で404を解消する」方針を決定。以下を実施し、`astro build`で検証済み（223ページ、エラーなし、`dist/en/`配下30件は全てリダイレクトスタブで実コンテンツ0件）。

1. `src/content/en/` を全削除（実記事4件: Japan lens `japan-noise-and-society`×2, `japan-quiet-spaces`×2。他は元々空フォルダ）
2. `public/robots.txt` に `Disallow: /en/` を**全UAグループ**（`*`だけでなくGooglebot・bingbot等の名前付きグループ全て）に追加。以前の`/en/`非公開設定は`*`グループのみで、Googlebotには効いていなかった不備を今回修正
3. `astro.config.mjs` に削除時点で実在した4記事URL＋`/en/`ルートを`/ja/`へ301リダイレクト追加（Astroの`redirects`はワイルドカード`[...slug]`から静的パスへは転送できない仕様のため、個別URL列挙で対応。他の旧`/en/tags/`等は元々ページ実体がなく意図的な廃止のため404のままでよいと判断）
4. `Navigation.astro` の言語切替ボタン（English⇄日本語）を削除（リンク先がリダイレクトで`/ja/`に戻るだけの死んだUIになるため）
5. `CLAUDE.md` / `GEMINI.md` / `src/content/README-content.md` / `.cursor/rules/bouon-writing-master.mdc` / `.cursor/rules/bouon-content-categories.mdc` の en戦略記述を「廃止済み」に更新（今後のAIセッションが古い方針でen記事を再作成しないように）

### 未実施・保留

- `src/data/contentCategories.ts` の `EN_TOP_CATEGORIES` / `TOP_CATEGORY_LABELS.en` フィールドや、`SmartLink.astro` / `Search.astro` 内のen分岐ロジックは、削除しても実害はないが**呼び出されなくなるだけの死んだコード**として残置（`[lang]/index.astro` と `[lang]/[category]/index.astro` の`getStaticPaths`は元々`lang: 'ja'`のみを返す実装だったため、`en`コンテンツを消した時点でこれらのUI分岐は到達不能）。将来的なコード整理のタイミングで削除して良い
- `git rm` 済みだがコミットはしていない。ユーザーの明示的な依頼があればコミットする