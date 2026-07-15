# suggest-task — サイト強化タスク（site-check.md 工程の実行リスト）

工程の全体像は [site-check.md](./site-check.md) の「作業工程（整理版 2026-07-15）」を参照。
本ファイルは <strong>実行タスクのチェックリスト</strong> と、Phase 1〜3 の成果物の書き出し先。

## 作業目標（2026-07-15確定・対象期間 W29〜W32）

| # | 目標 | 期限目安 | 完了条件 |
| :--- | :--- | :--- | :--- |
| G1 ✅ | <strong>旧URL回収の監査</strong>: 2026-07-15完了。W26〜28出現の旧URL19件中、未設定8件（`/ja/solutions/`4・`/ja/knowledge/`1・`/en/knowledge/`3）を検出し308リダイレクト追加（計385件）。ビルド検証済み | 即日 | 達成。効果はW30以降のGSCで観測 |
| G2 ✅ | <strong>ja新規 高優先3本の公開</strong>: 2026-07-15完了。中古防音室の買い方（money）/ 組み立て式比較（soundproof-room）/ ピアノ防音室（soundproof-room）。カバー画像生成・双方向内部リンク設置・ビルド検証済み | 2週間（W31まで） | 達成。効果はW32以降のGSCで観測 |
| G3 ✅ | <strong>en FAQ 1本目の公開</strong>: 2026-07-15完了。"Why Do I Keep Getting Noise Complaints in Japan?"（`why-noise-complaints-in-japan`）を japan-noise-and-society に公開。既存en2記事と双方向リンク | 7月中 | 達成。効果はW32以降のGSCで観測 |
| G4 | <strong>local 15本の統合設計</strong>: 導線集約の設計のみ先行。統合実行はW29・W30データが揃う既存PDCA判断（6週連続表示ゼロ→統合/noindex/再設計）と同期 | <strong>2026-07-20実行予定</strong>（W30データ入手後） | 統合方針（残す/統合する/noindexの振り分け表）の確定 |

<strong>効果測定（W33頃のGSCで判定)</strong>: クリック獲得記事を bass-trap 1本 → 3本以上に / 表示ゼロ記事 155本 → 140本以下に。

中優先以下の新規記事（値段マトリクス・Dr値早見・防音室付き賃貸・ペット・後付けリフォーム、en続編2本、ja逆輸入1本）は G1〜G3 完了後に着手判断。

## タスクリスト

### Phase 0: データ整備 ✅ 完了（2026-07-15）

- [x] サジェストCSV 2本を UTF-8 変換 → `suggest-word/suggest-bouonshitsu_utf8.csv`（730KW）/ `suggest-bouonchintai_utf8.csv`（159KW）
- [x] `build-interlink-postlist.mjs` で記事一覧を最新化（211記事）

### Phase 1: KW × 既存記事マッピング ✅ 完了（2026-07-15）

- [x] サジェストKWをテーマ単位にグルーピング（14テーマ）
- [x] 既存記事と突き合わせて ①完全 / ②部分 / ③未カバー に分類
- [x] マッピング表を下記セクションに書き出し

### Phase 2: 需要データ集計 ✅ 完了（2026-07-15）

- [x] W26〜W28 の GSC データを記事単位で集計
- [x] 3週間表示ゼロの記事（155/211本）をリスト化
- [x] 1年分データ（zenki/kouki）で長期トレンド・クエリを補完
- [ ] W29 データ取得後、`2026/W29/` に追加して再集計

### Phase 3: 施策決定 ✅ 暫定確定（2026-07-15）

- [x] KWグループごとに「新規 / リライト / 統合」を割り当て
- [x] 優先度・カテゴリ・slug 付きの記事施策リストを下記セクションに確定
- [ ] 新規記事化候補のラッコ月間検索数の裏取り（ラッコキーワード操作が必要＝ユーザー実行）

### Phase 4: 実行（継続）

- [ ] 高優先タスクから `weekly-task.md` に週次割り当て（目安: 新規2本 or リライト3本/週）
- [ ] 公開ごとに内部リンク追加 → `build-interlink-postlist.mjs` 再生成
- [ ] 月1回 GSC で効果測定し優先度を見直し

### Phase 5: en 拡充（別トラック・方針確定 2026-07-15）

- [x] 既存 en 記事の GSC 実績確認 → `building-code-reform-2025`（表示6,495・CTR 0.05%）と `noise-regulation-update-2025`（表示6,155）。<strong>露出はあるがクリックされていない＝需要は存在する</strong>
- [ ] <strong>FAQ型・文化文脈コンテンツ</strong>を新規で作る（下記「en 新規記事」参照）。日本語記事の流用・翻訳はしない
  - 切り口: 煉瓦造・コンクリ厚壁が標準の欧米は日本のRC・木造ほど防音がセンシティブではない → 「日本に来たら音がうるさいと言われまくる」移住者・日本生活関心層向けFAQ
  - 逆方向: 欧米生活で日本人が生活音とどう向き合うかも ja 記事化できる

---

## KWマッピング表（Phase 1 成果物）

サジェスト計889KW（防音室730 + 防音賃貸159）を14テーマに分類。重複所属あり。

| テーマ | KW数 | カバー判定 | 既存の主な受け皿 | ギャップ（未カバーの意図） |
| :--- | :--- | :--- | :--- | :--- |
| 賃貸（物件探し） | 223 | ②部分 | bouon-rental-market-guide、local 17都市 | 「<strong>防音室付き</strong>賃貸/マンション」（部屋に防音室が付いた物件を探す意図）が明確な受け皿なし |
| 地域 | 98 | ②部分 | local 17都市ガイド | 池袋・所沢・沖縄・茨城・区レベル等は未執筆。<strong>ただし既存local記事は15/17が表示ゼロ→拡張は凍結が妥当</strong> |
| 値段/費用 | 64 | ②部分 | soundproof-room-price-market、budget-selection-guide | 「防音室 値段」で掲載順位44〜56位と負けている。畳数×価格の一覧性が弱い |
| レンタル/中古 | 50 | ②部分 | rental-cost、rental-lease、buyback-guide | <strong>「中古防音室の買い方」が完全に空白</strong>（既存は売却側のみ。中古×畳数・激安・メルカリ等の購入意図KWが多数） |
| 畳数/サイズ | 44 | ②部分 | bouon-size-choice、soundproof-room-size、large-size | 4.5畳〜8畳の「部屋まるごと」帯が薄い |
| 楽器別 | 44 | ②部分 | soundproof-performance-drum、rental-caution-cello、night-practice | <strong>ピアノ専用（グランド/アップライト×費用×マンション）なし</strong>。ギター・サックス・トランペット等の管弦楽器もなし |
| 工事/リフォーム | 40 | ②部分 | construction-types-cost-comparison、installation-conditions | 「6畳リフォーム費用」「後付け」「無窓居室・天井高さ」など施工詳細 |
| 自作/DIY | 34 | ①完全 | diyカテゴリ25本（closet-diy、danbotchi図面、費用内訳等） | 「diy キット」程度。優先度低 |
| 組み立て式/簡易 | 25 | ②部分 | budget-soundproof-booth-comparison、otodasu、asmr-vtuber-booth | 「<strong>組み立て式防音室</strong>」という購入検討軸の比較記事なし（おすすめ/値段/用途別） |
| 用途（ゲーム/配信） | 25 | ①完全 | creatorカテゴリ46本 | なし |
| メーカー/製品 | 21 | ①完全 | kawai-nasal、shimamura、yamaha各記事、bouon-osusume-hikaku | なし |
| 設備/環境 | 19 | ①完全 | aircondition-select、humidity、wifi、ventilation | なし |
| ペット | 12 | ②部分 | pet-noise-soundproof-measures、streamer-pet-noise | 「犬用防音室・防音ケージ」の商品購入意図 |
| その他（dB/DR値等） | 386 | ②部分 | bouon-dchiseinou-meyasu、d-value系 | 「防音室 30〜90db」「Dr-70/80/90」の等級×用途の一覧受け皿がない → 新規早見ガイドで対応 |

## 需要ミスマッチ候補（Phase 2 成果物）

<strong>W26〜W28（6/13〜7/4）集計サマリー</strong>

- 3週間の合計: クリック14・掲載ページ72（タグ・トップ含む）。<strong>211記事中155本が表示ゼロ</strong>
- カテゴリ別の表示ゼロ率: creator 39/46、local 15/17、money 15/23、soundproof-room 21/31、knowledge 18/25、diy 19/25、soundproof-rental 16/26、business 9/15

<strong>勝っている記事（伸ばす対象）</strong>

| 記事 | 3週実績 | 備考 |
| :--- | :--- | :--- |
| /ja/diy/bass-trap-installation-guide/ | 9クリック・表示94・順位9.8 | サイト内エース。1年後期でも20クリック |
| /ja/business/japan-soundproof-market-size/ | 1クリック・表示34 | 「日本の防音市場」で表示80/順位45（後期）→改善余地 |
| /ja/knowledge/vibration-reduction-science/ | 表示18・3週連続掲載 | 安定 |
| /ja/business/datacenter-soundproof-technology-facts/ | 表示39・順位10.2 | クリックゼロ→タイトルCTR改善候補 |
| 防音マスク自作（diy-vocal-soundproof-mask） | 1年後期14クリック・CTR14% | 「防音マスク 自作/作り方」で強い |
| 加湿器ガイド（bouon-humidifier-comparison） | 1年前期48クリック | 「防音室 加湿器」1〜7位。ただし<strong>旧URL /posts/ で計上</strong> |

<strong>需要ミスマッチ（統合・方針転換候補）</strong>

- <strong>local 17都市ガイド</strong>: 15本が3週表示ゼロ（例外: chiba表示1・osaka表示5）。「防音賃貸×地域」はサジェスト上KWは多いが、当サイトには表示が来ていない。→ 新規の地域展開は凍結。既存は bouon-rental-market-guide への統合・導線集約を検討
- <strong>creator 39本表示ゼロ</strong>: 配信系はサイトの主力投資先だが検索流入に結びついていない。個別リライトより、エース記事（comprehensive-guide）への内部リンク集約とカニバリ確認を優先

<strong>技術的発見（対応要）</strong>

- 旧URL（`/posts/…` や `/ja/solutions/…`、`/ja/use-case/…` 等の旧階層）が今もGSC掲載の相当数を占める。<strong>リダイレクトと canonical の総点検が必要</strong>（例: sound-reduction-simulation が新旧2つのURLで別々に計上されている）

## 記事施策リスト（Phase 3 成果物・暫定確定）

※月間検索数はサジェストCSVに含まれないため、優先度はGSC実績×KW件数から判定。ラッコでの裏取りで昇降格あり。

※方針（2026-07-15）: <strong>リライト案は廃止し、新規記事をメインに施策する</strong>。旧リライト候補のKW（値段・Dr値等）は新規まとめ記事として受け直す。

### ja 新規記事（優先度順）

| 優先 | 想定タイトル軸 | カテゴリ / slug案 | 根拠 |
| :--- | :--- | :--- | :--- |
| 高 | 中古防音室の買い方ガイド｜相場・畳数別価格・購入ルートと失敗回避 | money / `used-soundproof-room-buying-guide` | 中古×購入KWが50件超で完全空白。既存buyback（売却側）と対で内部リンク可 |
| 高 | 組み立て式防音室おすすめ比較｜用途別（楽器・ゲーム・配信）と価格帯 | soundproof-room / `assembly-type-comparison` | 「組み立て式」25KW・購入検討層。既存ブース記事群のハブにできる |
| 高 | ピアノ防音室ガイド｜グランド/アップライト別の費用・マンション設置 | soundproof-room / `piano-room-guide` | 楽器別44KWの最大勢力がピアノ。既存はドラム・チェロのみ |
| 中 | 防音室付き賃貸の探し方｜「防音賃貸」との違いと検索テクニック | soundproof-rental / `room-equipped-rental-search` | 「防音室付き 賃貸」系KWが賃貸223KW中の大きな塊 |
| 中 | 犬・ペット用の防音対策とケージ｜集合住宅での現実解 | soundproof-rental / `pet-dog-soundproof-cage` | ペット12KW。既存は騒音対策のみで商品軸なし |
| 中 | 防音室の値段・畳数別価格マトリクス（新規まとめ） | money / `size-price-matrix-guide` | 「防音室 値段」系64KW。既存price-marketが順位44〜56位で負けているため、新規の一覧特化記事で受け直す |
| 中 | 防音室のDr値・dB早見ガイド（等級×用途） | knowledge / `dr-value-db-quick-reference` | 「防音室 30〜90db」「Dr-70/80/90」系KWの受け皿を新規で作る |
| 低 | 防音室の後付けリフォーム費用｜6畳・8畳の実例 | soundproof-room / `retrofit-renovation-cost` | 工事系ギャップ |

### en 新規記事（FAQ型・文化文脈重視）

方針: 日本語記事の流用・翻訳はしない。<strong>煉瓦造・コンクリ厚壁が標準の英語文化圏と、日本の軽量構造（木造・軽量鉄骨・RC）の遮音格差</strong>を切り口に、移住者・日本生活に関心のある層へFAQ型でリーチする。

| 優先 | 想定タイトル軸 | カテゴリ | 根拠 |
| :--- | :--- | :--- | :--- |
| 高 | "Why Do I Keep Getting Noise Complaints in Japan?" — 移住者向けFAQ（壁構造の違い・生活音マナー・苦情が来たときの対応） | japan-noise-and-society | 既存en記事は表示6,000超（CTR 0.05%）で<strong>露出は既にある</strong>。FAQ型で検索意図に直接答える |
| 高 | "Japanese Apartment Walls Are Thinner Than You Think" — 木造/軽量鉄骨/RCの構造別遮音解説と物件選び | japan-soundproof-housing | 賃貸契約前の外国人が最も知りたい実用情報。既存building-code記事と内部リンク |
| 中 | "The Unwritten Noise Rules of Living in Japan" — 時間帯・掃除機・洗濯機・足音の暗黙ルール集 | japan-noise-and-society | FAQ型の続編。文化解説はJapan lensの本領 |

### ja 新規（en戦略の逆輸入）

| 優先 | 想定タイトル軸 | カテゴリ | 根拠 |
| :--- | :--- | :--- | :--- |
| 中 | 海外生活で日本人が驚く「生活音」の常識｜煉瓦・コンクリ厚壁の国での音との付き合い方 | knowledge | en FAQ記事の裏返し。海外赴任・留学層向け。soundproof-culture-japan-vs-america と内部リンク |

### 統合・整理

| 優先 | 対象 | 方針 |
| :--- | :--- | :--- |
| 高 | 旧URL（/posts/・/ja/solutions/・/ja/use-case/ 等） | リダイレクト・canonical の総点検。加湿器ガイド等の実績が旧URLに流れている |
| 中 | local 15本（表示ゼロ） | 新規凍結。bouon-rental-market-guide をハブに導線集約し、リンク薄い都市ページは統合検討 |
| 中 | creator 表示ゼロ39本 | streamer-soundproof-room-comprehensive-guide への内部リンク集約とカニバリ確認 |
