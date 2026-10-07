# トップの入口カード（hubClusters）再設計 要件定義

- 作成日: 2026-10-07
- 状態: 要件定義済み・未着手（実装はこの文書に沿って行う）
- 関連: T-21（`task-list.md`）、S-10（在宅ワーク統合の効果測定）、T-14（スマホ表示の確認）、T-04（direct流入のbot疑い）
- 担当: Claude（実装）。選定・文言の判断はユーザー

## 1. 目的

トップの「課題別ハブ」カードを、**読者の流入経路ごとの用事（何を調べに来るか）に合わせた6枚**に組み替える。あわせて、関連性の薄い記事が出る原因だった「キーワードの部分一致＋新着順」をやめ、**記事ごとのパラメータで、表示する記事と順番を管理**できるようにする。

## 2. 現状（コードで確認）

- 定義: `src/data/hubClusters.ts`（6つ: 在宅ワーク・楽器練習・配信・補助金費用・騒音トラブル・地域）
- トップ（`src/pages/[lang]/index.astro`）
  - 記事のタイトル・説明文・タグをつなげた文字列に、`matchKeywords`が**部分一致**する記事を候補にする
  - 日付の新しい順に並べ、先頭3本（`HUB_POSTS_COUNT = 3`）を表示する
  - 3本に満たないときは、`categoryHint`のカテゴリの新着で埋める
  - カードに「N件」を出す（`count`はマッチ数。マッチ0ならカテゴリの記事数）
  - 見出しのリンク先は`categoryHint`のカテゴリ（`/ja/{category}/`）
- 記事ページ（`src/pages/[lang]/[category]/[...slug].astro`の`hubMatch`）
  - 同じ部分一致で、配列の**先頭に近いクラスター**を1つ選ぶ
  - 「次のステップ」の手動指定がないときのフォールバック（タイトルとリンク先）に使う
- スキーマ（`src/content.config.ts`）に、トップのカード用の項目はない。手動の編集項目には`nextSteps`・`starterSet`がある（今回の項目もこの流儀に合わせる）
- `en`は廃止済みだが、`labels.en`・`categoryHintEn`・`lang === 'en'`の分岐が残っている

### 2.1 問題（`ja`196本で同じロジックを再現）

- 在宅ワークのカードは、マッチが8本。表示されるのは`tokyo-bouon-whitekyuon-okudake-review`（説明文の「在宅」）、`parenting-generation-quiet-corner-diy`（同）、`japan-soundproof-market-size`（「テレワーク」）。中核の`remote-work-family-harmony-soundproof`は日付が古く、8本中8位のため出ない
- キーワードが広すぎる。マッチ数は、配信70本、地域60本（「ガイド」が主因）、補助金費用56本、騒音トラブル42本
- 196本中83本が2つ以上のクラスターにマッチする。記事ページ側は配列順の先頭が選ばれる

### 2.2 変更前ベースライン（再現結果。変更後の比較用）

| カード | トップに出る3本（日付の新しい順） |
|---|---|
| 在宅ワーク | `knowledge/tokyo-bouon-whitekyuon-okudake-review`、`diy/parenting-generation-quiet-corner-diy`、`business/japan-soundproof-market-size` |
| 楽器練習 | `soundproof-rental/guitar-apartment-practice-guide`、`soundproof-room/assembly-type-comparison`、`soundproof-room/piano-room-guide` |
| 配信 | `creator/sleeping-parent-game-streaming-guide`、`soundproof-room/assembly-type-comparison`、`creator/farmland-prefab-streaming-room-legal` |
| 補助金・費用 | `soundproof-room/custom-home-soundproof-consultation-prep`、`soundproof-room/noise-solutions-relocate-retrofit-custom-home`、`money/used-soundproof-room-buying-guide` |
| 騒音トラブル | `soundproof-rental/bedroom-noise-type-solution-guide`、`soundproof-rental/guitar-apartment-practice-guide`、`knowledge/db-reduction-familiar-sound-scale` |
| 地域 | `local/regional-city-soundproof-rental-guide`、`creator/sleeping-parent-game-streaming-guide`、`money/used-soundproof-room-buying-guide` |

着手前に、本番のトップでも実際の表示を確認し、差があればここに追記する。

## 3. 設計の根拠｜読者のチャネル（2026-10-07、GA4 W39〜W41の3週間・GSC 3か月）

| チャネル | 割合 | 主な着地先・検索語 | 読者の用事 |
|---|---|---|---|
| Bing | 約48% | `soundproof-material-spec-chart`（75）、`ground-loop-noise-basics`（37）、`soundproof-room-price-market`、`report-japan-soundproof-rental-market-needs`、`osaka-soundproof-rental-guide` | 数値・仕組み・相場を調べる |
| direct | 約32% | トップ（51）、`/ja/soundproof-rental`・`/ja/soundproof-room`・`/ja/diy`・`/ja/local`の一覧 | カテゴリを自分で選びに来る |
| Google | 約7% | `child-rearing-soundproof-pillar`、`d-value-vs-rw-value-confusion`、`bass-trap-installation-guide` | 悩みから探す |
| AI系 | 約3% | `diy-internal-window-road-noise-reduction`、`soundproof-room-diy-cost`、`ground-loop-noise-basics` | 実践の手順 |
| その他（SNS等とみられる） | 約10% | `one-room-streaming-soundproof`、`used-soundproof-room-buying-guide`、`piano-room-guide` | 配信・楽器の具体策 |

- カテゴリ別セッションは、knowledge 28%、soundproof-room 13%、soundproof-rental 11%、creator 10%、diy 9.5%、money 5%、local 3.6%、business 0.3%
- GSC 3か月の上位クエリは、「ピアノ 住宅ローン」「防音 坪単価」「日本の防音市場」「ノイズ アース」「グランドループ」「ワンタッチ防音壁」「音大生 シェアハウス」「ベーストラップ 自作」
- 注意: 3週間・約640セッションで、Bingに偏っている。傾向は読めるが断定はできない。directはbot疑いの確認（T-04）が未了で、割り引いて見る
- 睡眠・在宅の新しい記事（`bedroom-noise-type-solution-guide`、`remote-work-family-harmony-soundproof`）は流入がまだない。独立カードにはせず、流入が出たら見直す

## 4. 要件

### 4.1 クラスター（6枚・この順に表示）

トップのカードは2列のグリッドで、上から順に並べる（スマホは1列で同じ順）。

| 行 | key | 見出し（ja） | 対象（audience） | 悩み（pain） | ボタン文言 | ボタンのリンク先 |
|---|---|---|---|---|---|---|
| 1・左 | `soundproof-room` | 防音室を選ぶ | 防音室の導入を考えている方 | どの防音室が、自分の部屋と用途に合うか分からない悩み | 防音室の記事を見る | `/ja/soundproof-room/` |
| 1・右 | `soundproof-rental` | 防音賃貸・住まい探し | 引っ越し・物件探しを検討する方 | 音を気にせず住める部屋の探し方が分からない悩み | 防音賃貸の記事を見る | `/ja/soundproof-rental/` |
| 2・左 | `sound-basics` | 音の仕組み・原因から調べる | 数値や原因から納得して対策したい方 | 何が原因で、どの対策が効くのか分からない悩み | 仕組みの記事を見る | `/ja/knowledge/` |
| 2・右 | `diy` | 自分で試す（DIY） | 費用を抑えて自分で対策したい方 | どこまで自分でできるか分からない悩み | DIYの記事を見る | `/ja/diy/` |
| 3・左 | `money-market` | 費用・相場・補助金・市場データ | 予算や相場を把握したい方 | いくらかかるか、補助金は使えるかが分からない悩み | 費用・相場の記事を見る | `/ja/money/` |
| 3・右 | `sound-leak` | 配信・楽器・在宅の音漏れ | 配信者・楽器演奏者・在宅ワーカー | 音を出したいが、近隣や家族への音漏れが不安な悩み | 音漏れ対策の記事を見る | `/ja/creator/` |

- 文言は案。ユーザーが確認して確定する（トーンは既存カードに合わせる）
- 「ビジネス」のカードは作らない。ビジネスカテゴリの流入は0.3%で、「日本の防音市場」の検索と賃貸の市場レポートへの流入は、`money-market`と`soundproof-rental`で受ける。ビジネスを残す場合は、`sound-leak`と入れ替える
- 睡眠・騒音トラブル・在宅ワークの記事は、独立カードにせず、記事ごとに`sound-basics`または`sound-leak`に入れる
- 1つの記事が複数のクラスターに入れる

### 4.2 データモデル（記事のfrontmatter）

```yaml
hub:
  sound-basics: 1    # クラスターのkey: 表示順（1が最上位）
  sound-leak: 2      # 複数のクラスターに入れられる
```

- `src/content.config.ts`のスキーマに、任意項目`hub`を追加する
- zodは4.3.6なので、`z.partialRecord(z.enum([...key]), z.number().int().min(1).max(9))`を使う（`z.record`だと全キーが必須になる）
- keyのenumは、`hubClusters.ts`のkeyと同期させる（共通の定数から作る）。タイプミスはビルドで失敗させる
- `hub`のない記事は、どのカードにも出ない
- 既存の`nextSteps`・`starterSet`は変更しない

### 4.3 トップの選定ロジック（`src/pages/[lang]/index.astro`）

1. 下書きでない`ja`記事のうち、そのクラスターのkeyを`hub`に持つ記事だけを候補にする
2. 並びは、表示順の昇順、同順位なら日付の新しい順
3. 先頭3本を表示する。3本に満たないときは、**あるものだけ**出す（カテゴリの新着で埋めない）。0本のカードは出さない
4. キーワードの部分一致（`matchKeywords`）の判定は削除する
5. カードのボタンのリンク先は、クラスターごとの`href`（4.1の表）にする
6. 「N件」は、**リンク先カテゴリの記事数**を出す（マッチ数ではない）。出さない案もある（4.8）
7. 計測属性（`data-track-event="hub_click"`、`data-track-source`、`data-track-label`）は、今のまま維持する

### 4.4 記事ページ（`[category]/[...slug].astro`の`hubMatch`）

- 記事自身の`hub`のうち、**表示順が最小のクラスター**を使う
- `hub`のない記事は、ハブのフォールバックを出さず、記事のカテゴリへのリンクにする
- 「次のステップ」の手動指定（`nextSteps`）がある記事の動作は変えない

### 4.5 `src/data/hubClusters.ts`

- `HubClusterKey`を新しい6つのkeyにする
- 各クラスターに`href`（ボタンのリンク先）を持たせる
- `matchKeywords`・`categoryHint`・`categoryHintEn`は削除する
- `en`用の`labels.en`と、コード側の`lang === 'en'`の分岐は、**この変更で触る範囲で整理する**（`en`は廃止済みのため。触らない範囲は残してよい）

### 4.6 運用ツール

- クラスター別の所属記事（key・表示順・slug・タイトル・カテゴリ）を一覧にするスクリプトを作る（`build-interlink-postlist.mjs`と同じ方式）。出力先は`.workspace/.data-set/`の新規ファイル
- ビルド時に、次の場合は警告する
  - `draft: true`の記事に`hub`が付いている
  - あるクラスターの所属が3本未満
  - 同じクラスターで、表示順が重複している

### 4.7 中核記事の初期割り当て（案。着手時に再確認する）

表示順の1〜3を表示し、予備は4以降（将来の入れ替え用）。

| key | 1 | 2 | 3 | 予備 |
|---|---|---|---|---|
| `soundproof-room` | `soundproof-room/bouon-osusume-hikaku` | `soundproof-room/piano-room-guide` | `soundproof-room/soundproof-room-size` | `soundproof-room/assembly-type-comparison` |
| `soundproof-rental` | `soundproof-rental/bouon-rental-market-guide` | `soundproof-rental/report-japan-soundproof-rental-market-needs` | `local/osaka-soundproof-rental-guide` | `local/regional-city-soundproof-rental-guide` |
| `sound-basics` | `knowledge/soundproof-material-spec-chart` | `knowledge/ground-loop-noise-basics` | `soundproof-room/bouon-dchiseinou-meyasu` | `soundproof-rental/bedroom-noise-type-solution-guide`、`knowledge/d-value-vs-rw-value-confusion` |
| `diy` | `diy/diy-internal-window-road-noise-reduction` | `diy/bass-trap-installation-guide` | `diy/soundproof-room-diy-cost` | `diy/renter-parent-house-soundproofing` |
| `money-market` | `money/soundproof-room-price-market` | `money/piano-soundproof-mortgage-tax-guide` | `business/japan-soundproof-market-size` | `money/soundproof-subsidy-check-guide` |
| `sound-leak` | `creator/streamer-soundproof-room-comprehensive-guide` | `creator/one-room-streaming-soundproof` | `soundproof-rental/remote-work-family-harmony-soundproof` | `soundproof-rental/guitar-apartment-practice-guide` |

- 上の記事は、すべて実在することを確認済み（2026-10-07）
- 付与するのは、まず上の約20本。ほかの記事には付けない

### 4.8 非機能・注意

- スマホ幅（390px）で、1列表示・カードの高さ・タップ領域を確認する（T-14と同じ手順）
- 「N件」の表示は、カテゴリの記事数を出す案を既定とする。出さないほうがよければ、実装前にユーザーが指示する
- 記事を統合・削除したときは、その記事の`hub`も一緒に消えるため、`hubClusters.ts`側の修正は不要（今回のslug列挙案との違い）
- 広告（`AdUnit`）の位置と、「最新記事」セクションは変更しない

## 5. 受け入れ条件

1. `pnpm build`が通る
2. トップに、6枚のカードが4.1の順で表示される
3. 各カードの3本が、4.7の表示順1〜3と一致する
4. `hub`のない記事が、どのカードにも出ない
5. `hub`のkeyを間違えると、ビルドが失敗する（一時的に誤字を入れて確認し、元に戻す）
6. 記事ページの「次のステップ」のフォールバックが、記事自身の`hub`で決まる。`hub`のない記事はカテゴリへのリンクになる
7. `matchKeywords`による部分一致のコードが残っていない
8. 4.6のスクリプトで、クラスター別の一覧が出る。警告が想定どおりに出る
9. スマホ幅390pxで、レイアウトの崩れや横はみ出しがない
10. 計測属性が、変更前と同じ形で残っている

## 6. 実施手順

1. 事前確認: 本番のトップの表示記事を確認し、2.2のベースラインとの差を記録する
2. `hubClusters.ts`を新しい6クラスターにし、`content.config.ts`に`hub`を追加する
3. トップ（`index.astro`）の選定ロジックを書き換える
4. 記事ページ（`[...slug].astro`）の`hubMatch`を書き換える
5. 4.7の約20本に`hub`を付ける（記事の本文は触らない。`lastmod`は更新しない）
6. 一覧スクリプトを作り、警告を確認する
7. `pnpm build`と、`pnpm preview`でのスマホ幅確認
8. デプロイ後、トップ・記事ページを確認し、実施日を記録する（S-10との前後関係。下記）

## 7. 決まっていること・決まっていないこと

- 決定（2026-10-07 ユーザー）
  - 記事ごとのパラメータで管理する
  - カードは6枚。上段に防音室・防音賃貸を置く
  - 読者のチャネルに合わせた構成にする
- 未決定（実装前にユーザーが判断）
  - 4.1の文言（見出し・対象・悩み・ボタン）
  - 「ビジネス」のカードを作らない扱いでよいか
  - 「N件」の表示（カテゴリの記事数にするか、出さないか）
  - 4.7の中核記事の最終確認（特に`sound-basics`・`sound-leak`の3本目）

## 8. リスク・注意

- S-10（在宅ワーク統合の効果測定、W42基準→W44比較）の前後で、トップに出る記事が入れ替わる。**実施日を記録し**、S-10の判定に影響する場合は結果に書く
- directの流入（トップ直行）はbot疑い（T-04）が未了。カードのクリック数（`hub_click`）の評価は、T-04の結果を見てから行う
- zodのバージョンによって、`record`と`partialRecord`の動作が違う。`astro check`とビルドで確認する
- `content.config.ts`から`hubClusters.ts`を読み込む場合、読み込み順の問題が出たら、keyの定数を別ファイルに切り出す
- トップは重要な内部リンク元。表示される記事が約20本に絞られ、リンクの集中先が変わる。変更後のGSC・GA4は、W43以降の週次確認で見る（`weekly-task.md`）

## 9. 関連ファイル

- `src/data/hubClusters.ts`
- `src/pages/[lang]/index.astro`
- `src/pages/[lang]/[category]/[...slug].astro`
- `src/content.config.ts`
- `.workspace/scripts/build-interlink-postlist.mjs`（一覧スクリプトの手本）
- `.workspace/.task/task-list.md`（T-21）
