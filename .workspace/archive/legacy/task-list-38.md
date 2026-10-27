# task-list-38

- **完了日**: 2026-10-19
- **概要**: T-28 仙台の防音賃貸記事（`local/sendai-soundproof-rental-guide`）を裏取りした結果、記事の前提がほぼ成り立たなかったため、音大生の物件探し記事（`soundproof-rental/music-student-property-search-guide`）へ統合して301にした

## 裏取りの結果（2026-10-19、WebSearch・公式サイト）

- **宮城教育大学の所在地が誤り**: 本部キャンパスは青葉区荒巻字青葉149（青葉山、地下鉄東西線「青葉山」駅）。「青葉区上杉」は附属の小・中学校・幼稚園の所在地（上杉6-4-1）。記事の「宮城教育大学（青葉区上杉）周辺」の節は根拠がない
- **ミュージション仙台は存在しない**: ミュージション公式サイト（musision.jp）の物件一覧は東京・神奈川・埼玉・千葉・愛知のみ。「リブラン（ミュージション仙台）D-55仕様の分譲賃貸を仙台駅東口で展開」は誤り
- **「ナサールショールーム仙台」「仙台防音ルーム不動産」は見つからない**。仙台で防音室を展示しているのは島村楽器 仙台泉パークタウンタピオ店（防音ショールーム）など
- **出典なし**: 「防音賃貸ストック約320戸（当社調査）」「入居者の約6割が音大生・音楽講師」、エリア別の平均家賃、「2025年春に新築予定（募集予定戸数12戸）」
- **大学の選び方が誤り**: 東北学院大学に音楽の学科はない。音楽科があるのは宮城学院女子大学（青葉区桜ケ丘9-1-1、仙台駅・泉中央駅からバス）で、記事では触れていなかった
- 実績: 16か月で表示約76・クリック約10（ほぼ旧URL `/posts/…`）。新URLは表示0

## 実施内容

- ユーザー判断: 推奨の「音大生記事へ統合」（2026-10-06の「音大生×地域は1記事」方針と一致）
- 記事を削除（`src/content/ja/local/sendai-soundproof-rental-guide/`）
- 301: `/ja/local/sendai-soundproof-rental-guide/`を追加、旧URL `/posts/sendai-soundproof-rental-guide/`・`/ja/soundproof-rental/others/sendai-soundproof-rental-guide/`の転送先も統合先へ変更（`astro.config.mjs`・`public/.htaccess`）。`/en/posts/…`→`/ja/`はそのまま
- `astro.config.mjs`のサイトマップ除外（sendai）を削除
- 統合先`music-student-property-search-guide`: 「他の地域の音大」表の仙台の行を、宮城教育大学（青葉山）・宮城学院女子大学音楽科（桜ケ丘）の正しい所在地に差し替え（上杉は附属校である旨も明記）。選択肢3の仙台記事への言及を削除。`lastmod`は2026-10-19
- 被リンクの削除: `regional-city-soundproof-rental-guide`（東日本の他都市の一文）、`sapporo-soundproof-rental-guide`（関連リンク）、`public/llms.txt`
- `interlink-postlist.md`・`interlink-tag-clusters.md`を再生成。`check-internal-links.mjs`でmissingPath 0

## 残り（ユーザー）

- [x] デプロイ（2026-10-19、コミット b40be31）。curlで確認: `/ja/local/sendai-soundproof-rental-guide/`と旧URL2本が統合先へ301、統合先・札幌・地方都市の記事は200で仙台記事へのリンクなし、`llms.txt`・サイトマップにも仙台記事なし、統合先に宮城学院女子大学の行が出ている
- [ ] GSCで統合先（`music-student-property-search-guide`）のインデックス登録をリクエストする（任意。表の1行の修正のみ）

## 元のタスク本文

### T-28 仙台の防音賃貸記事の裏取りとnoindexの判断（2026-10-13 追加）

`local/sendai-soundproof-rental-guide`は、2026-07-21にnoindexにした記事。16か月で表示76・クリック10の実績があり、2026-10-13にほかの4本はnoindexを解除したが、**この記事だけは解除していない**。本文に、出典の確認できない主張が多いため。

- 解除しなかった理由（本文の例）: 「仙台市の防音賃貸ストックは約320戸（2025年9月時点、当社調査）」「入居者の約6割が音大生・音楽講師」、業者・ブランド名（「仙台防音ルーム不動産」「ナサールショールーム仙台」「リブラン（ミュージション仙台）D-55仕様の分譲賃貸」）、「2025年春に新築予定（募集予定戸数12戸）」、エリア別の平均家賃
- [ ] 本文の主張を、一次情報（不動産ポータル、業者の公式サイト、宮城教育大学・東北学院大学の公式サイト）で裏取りする。裏取りできない部分は削除または表現を弱める
- [ ] 方針の確認: 音大生×地域の記事は `music-student-property-search-guide` に集約し、地域別の個別記事は作らない（2026-10-06決定）。仙台記事を残すか、集約するかをユーザーが決める
- [ ] 残す場合は、裏取り後に`noindex: true`を外し、`astro.config.mjs`のサイトマップ除外（`sendai-soundproof-rental-guide`）も外す
- 関連: 旧W-31（`schedule/2026-11-02-m10-monthly-analysis.md`）
