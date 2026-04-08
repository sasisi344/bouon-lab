Viewed slug*titles.txt:1-26
Ran command: `Get-ChildItem -Path src\content -Recurse -Include *.md, *.mdx | Select-Object FullName | Where-Object { $* -match "grobal|global|price-complete|kujyou" }`Ran command:`dir /s /b src\content\*.md\* | findstr /i "grobal global price-complete kujyou"`

GSCのデータに基づき、CTRが5%を下回る「表示回数はあるがクリックに繋がっていない」クエリとページのリストを作成しました。
特にインプレッション数が多いものを優先して抽出しています。

これらのページは、**検索結果に表示されているもののクリックされていない**ため、タイトル（Title）やディスクリプションを見直すことで、流入数を大幅に改善できる余地があります（「値段」「住宅ローン」「大阪・神戸などの地域名」を含むクエリが顕著です）。

### CTR改善が必要なクエリ・ページリスト (Top 30)

| 検索クエリ              | 対象ページのタイトル                                  | 表示回数 | クリック | CTR  | URL                                                                                                                         |
| :---------------------- | :---------------------------------------------------- | :------: | :------: | :--: | :-------------------------------------------------------------------------------------------------------------------------- |
| **ピアノ 住宅ローン**   | 防音室をローンで買える？種類と審査のポイント          |    41    |    0     | 0.0% | [/posts/soundproof-room-loan/](https://bouon-lab.com/posts/soundproof-room-loan/)                                           |
| **防音室 値段**         | 防音室の価格・相場ガイド｜サイズ・性能別の費用目安    |    38    |    0     | 0.0% | [/posts/soundproof-room-price/](https://bouon-lab.com/posts/soundproof-room-price/)                                         |
| **musision**            | ミュージションの評判と防音性能｜入居率99%の理由を解説 |    25    |    0     | 0.0% | [/en/posts/musision-soundproof-rental-review/](https://bouon-lab.com/en/posts/musision-soundproof-rental-review/)           |
| **防音室 種類**         | 防音室の種類と選び方｜ユニット型・組立式・工事の違い  |    24    |    0     | 0.0% | [/posts/soundproof-room-types/](https://bouon-lab.com/posts/soundproof-room-types/)                                         |
| **日本の防音市場**      | 世界の防音市場調査レポート｜2025年のトレンド          |    23    |    0     | 0.0% | [/posts/grobal-soundproof-marketcheck/](https://bouon-lab.com/posts/grobal-soundproof-marketcheck/)                         |
| **日本の防音市場**      | 2025年の音響材料トレンド｜新素材と市場動向            |    22    |    0     | 0.0% | [/posts/acoustic-material-new-trend-2025/](https://bouon-lab.com/posts/acoustic-material-new-trend-2025/)                   |
| **how much for...**     | DIY防音室の費用内訳｜材料費だけでいくらかかる？       |    21    |    0     | 0.0% | [/en/posts/soundproof-room-diy-cost/](https://bouon-lab.com/en/posts/soundproof-room-diy-cost/)                             |
| **日本の防音市場**      | 日本の防音市場が次に狙うべきアジア圏の需要            |    19    |    0     | 0.0% | [/posts/japan-bouonproof-marketnextasia/](https://bouon-lab.com/posts/japan-bouonproof-marketnextasia/)                     |
| **防音室 100万**        | 予算で選ぶ防音室ガイド｜50万・100万・200万の選択肢    |    16    |    0     | 0.0% | [/posts/soundproof-room-budget-selection-guide/](https://bouon-lab.com/posts/soundproof-room-budget-selection-guide/)       |
| **グランドループ 対策** | 配線と接地(アース)でノイズを消す新常識                |    15    |    0     | 0.0% | [/posts/cable-noise-ground-loop-prevention/](https://bouon-lab.com/posts/cable-noise-ground-loop-prevention/)               |
| **how much for...**     | 防音室レンタルの初期費用と相場｜購入との損得勘定      |    15    |    0     | 0.0% | [/en/posts/soundproof-room-rental-cost/](https://bouon-lab.com/en/posts/soundproof-room-rental-cost/)                       |
| **日本の防音市場**      | 週刊防音ニュース：2025年12月の市場動向                |    14    |    0     | 0.0% | [/posts/weekly-soundproof-news-20251202/](https://bouon-lab.com/posts/weekly-soundproof-news-20251202/)                     |
| **防音室 値段**         | 防音室の価格パーフェクトガイド 2025年最新版           |    13    |    0     | 0.0% | [/posts/soundproof-room-price-complete-guide-2025/](https://bouon-lab.com/posts/soundproof-room-price-complete-guide-2025/) |
| **賃貸 防音室 許可**    | 賃貸で防音室は隠せる？大家への交渉術と現状回復        |    11    |    0     | 0.0% | [/posts/rental-proofroom-contractcheck/](https://bouon-lab.com/posts/rental-proofroom-contractcheck/)                       |
| **防音室 価格**         | 部屋の防音工事にはいくらかかる？2026年版費用ガイド    |    11    |    0     | 0.0% | [/posts/bouon-price-souba/](https://bouon-lab.com/posts/bouon-price-souba/)                                                 |
| **防音室 100万**        | 100万円の防音室の境界線｜プロ基準と投資価値(ROI)      |    11    |    0     | 0.0% | [/posts/million-yen-soundproof-room-professional/](https://bouon-lab.com/posts/million-yen-soundproof-room-professional/)   |
| **ニトリ 防音壁 効果**  | ニトリの防音・吸音製品の検証｜本当に効くものと限界    |    11    |    0     | 0.0% | [/posts/nitori-soundproof-acoustic-guide/](https://bouon-lab.com/posts/nitori-soundproof-acoustic-guide/)                   |
| **千葉 防音室 物件**    | 防音室 賃貸 千葉の相場・人気エリア・選び方            |    11    |    0     | 0.0% | [/posts/chiba-soundproof-rental-guide/](https://bouon-lab.com/posts/chiba-soundproof-rental-guide/)                         |
| **一戸建て 騒音苦情**   | 一戸建ての騒音対策マニュアル｜苦情が来た時の対処法    |    11    |    0     | 0.0% | [/posts/bouon-kujyou-taisaku/](https://bouon-lab.com/posts/bouon-kujyou-taisaku/)                                           |
| **防音室 自作**         | DIY防音室完全マニュアル：プロが教える作り方           |    11    |    0     | 0.0% | [/posts/soundproof-room-diy-complete-manual/](https://bouon-lab.com/posts/soundproof-room-diy-complete-manual/)             |
| **防音室 買取**         | 使わなくなった防音室は高く売れる？中古相場と査定      |    10    |    0     | 0.0% | [/posts/soundproof-room-purchase-price/](https://bouon-lab.com/posts/soundproof-room-purchase-price/)                       |
| **賃貸 防音室 大阪**    | 大阪の防音賃貸市場 2026｜エリア別の家賃相場           |    10    |    0     | 0.0% | [/posts/osaka-soundproof-rental-guide/](https://bouon-lab.com/posts/osaka-soundproof-rental-guide/)                         |
| **防音室 賃貸 神戸**    | 防音室 賃貸 神戸の相場・人気エリア・選び方            |    10    |    0     | 0.0% | [/posts/kobe-soundproof-rental-guide/](https://bouon-lab.com/posts/kobe-soundproof-rental-guide/)                           |
| **ドラム 防音室**       | ドラム防音室の決定版：自宅で生ドラムを叩く方法        |    10    |    0     | 0.0% | [/posts/drum-soundproof-room/](https://bouon-lab.com/posts/drum-soundproof-room/)                                           |
| **ノイズ アース 線**    | 防音室のノイズ対策｜アース線一本で変わる録音環境      |    10    |    0     | 0.0% | [/posts/cable-noise-ground-loop-prevention/](https://bouon-lab.com/posts/cable-noise-ground-loop-prevention/)               |
| **防音室 相場**         | 防音室の価格相場｜0.5畳〜4.5畳の平均単価比較          |    9     |    0     | 0.0% | [/posts/soundproof-room-price-market/](https://bouon-lab.com/posts/soundproof-room-price-market/)                           |

### 考察と次のアクション案

- **「値段・価格」系の不振**: クエリ「防音室 値段」に対するCTRが0%です。タイトルに「2026年最新相場」や「〇〇万円〜」といった具体的な数値、または「失敗しない選び方」などのベネフィットを追加してクリックを誘発する必要があります。
- **地域別ガイドの類似性**: 千葉・大阪・神戸などの地域別ガイドが軒並み低めです。地域名だけでなく「防音室＋ペット可」や「〇〇駅周辺の即入居物件」など、もう一歩踏み込んだニーズにタイトルで応える工夫が有効かもしれません。
- **解決型（Solutions）の重要性**: 「住宅ローン」や「大家との交渉」などは専門性が高いテーマですが、現在クリックされていません。より「解決できること」を強調したタイトルへの変更を推奨します。
