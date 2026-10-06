# T-09 サイトデザインの見やすさ改善（2026-10-06完了）

スマホ表示を優先して、記事ページの本文幅・表・見出しを改善した。全画面広告（AdSense vignette）は収益のため維持（ユーザー判断、2026-10-06）。

## 課題の洗い出しと改善案（T-09本文）

リッチさはあるが、見やすさ（可読性・視認性）にまだ改善の余地がある。Astroのテーマ変更ではなく、現行テーマ上でデザインを改善する方針。
- [x] 現状の課題を洗い出す（2026-10-06、ローカルの`pnpm preview`でPC幅1278px・スマホ幅390px（iframe）を計測。対象は記事ページ`soundproof-material-spec-chart`とトップ。本番は全画面広告（vignette）が出て画面を覆うため、広告の誤クリックを避けてローカルで確認した）
  - **課題1（高）スマホの本文幅が狭い**: 画面375pxのうち本文の列は245px（約65%）で、1行が約12〜13文字。内訳はStarlightの`.content-panel`余白16px×2、`.article-wrapper`余白16px×2、`.article-content`余白32px×2（`src/pages/[lang]/[category]/[...slug].astro`、768px以下で`padding: 2rem`）
  - **課題2（高）表が潰れる・はみ出す**: 131/198記事に表がある。スマホでは表（幅564px）が245pxの列からはみ出し、ページ全体が横スクロールする（`scrollWidth` 419 > 390）。PC幅でも本文列が558pxしかなく、「材料」列が1文字ずつ縦に折り返されている（石膏ボードが縦書きのように並ぶ）。`bouon-custom.css`の表には横スクロール指定がない
  - **課題3（中）PCの本文幅が狭い**: 本文は558px。Starlightの本文幅720pxに、`.article-wrapper`余白と`.article-content`の`padding: 4rem`が重なり、左サイドバー・右の目次と合わせても画面に余裕があるのに使い切れていない
  - **課題4（中）タイトルの折り返し**: スマホの狭い列で`h1`（2.2rem）が「一覧で比較で／きる資料」のように語の途中で折れる。`h2`は約30px、`h3`は約21pxと見出しが大きく、狭い列では1行8文字前後になる
  - **課題5（参考、本番のみ）広告**: トップの読み込み直後にAdSenseの全画面広告（`#google_vignette`）が出て、コンテンツが見えなくなる。右下にもアンカー広告が出る。CSSでは直せず、AdSenseの自動広告設定の話になる（収益とのトレードオフ。ユーザー判断）
  - 問題なし: トップのヒーロー・「課題別ハブ」カードはPC・スマホとも読みやすい。本文の文字サイズ（18px、行間1.9）は適切。リンク色（ゴールド）の視認性も問題なし
  - 未確認: 記事一覧ページ、`CtaBox`・`AffiliateCard`のスマホ表示、検索、`about`ページ
- [ ] 改善案を優先度付きでまとめ、ユーザー承認後に実装する（`bouon-writing`のスマホ優先の段落ルールと整合させる）
  - 2026-10-06 改善案（承認待ち。変更は`[...slug].astro`のスタイルと`bouon-custom.css`のみ、記事MDXは触らない）:
    1. 【高】スマホで本文幅を広げる: 768px以下で`.article-content`の余白を2rem→1.1rem、`.article-wrapper`の左右余白を0にする。本文が約245px→約310px（+25%）になる見込み
    2. 【高】表を横スクロール化: 本文内の`table`を`display:block; overflow-x:auto`にし、1列目は折り返さない（`white-space:nowrap`）。131記事に自動で効く。ページ全体の横スクロールも解消する
    3. 【中】PCの本文幅: `--sl-content-width`を45rem→約52rem、`.article-content`の余白を4rem→2.5remにして、本文を558px→約700pxにする
    4. 【中】見出しの折り返し: `h1`・見出しに`word-break: auto-phrase`（日本語の文節で改行）と`text-wrap: balance`、スマホのh1を2.2rem→1.7rem、h2を1.85rem→1.45rem
    5. 【参考】AdSenseの全画面広告の扱いは、ユーザーが収益への影響を見て判断する
    - 実装後はlocalhostでPC・スマホ幅を再計測し、本文幅・横スクロールの有無を確認する。`pnpm build`も通す
- [ ] 改善後、GA4の読了率・直帰率の変化を`weekly-task.md`で追う（新規項目として索引に登録）

## 実施内容（2026-10-06、記事MDXは変更していない）

- `src/pages/[lang]/[category]/[...slug].astro`
  - `.article-content`の余白をPC 4rem→2.75rem、768px以下は2rem→`1.5rem 1rem`。768px以下は`.article-wrapper`の左右余白を0にし、段落・見出し・説明文のサイズと余白を縮小（h1 1.7rem、h2 1.45rem、h3 1.15rem）
  - `h1`・`h2`・`h3`に`word-break: auto-phrase`と`text-wrap: balance`（日本語を文節で改行）
  - スマホで区切り見出し（`.divider-text`、「こちらの研究成果もおすすめ」等）の`nowrap`を解除して8pxの横はみ出しを解消
- `src/styles/bouon-custom.css`
  - `--sl-content-width`を45rem→50rem（PC本文幅の拡大）、50rem以下で`--sl-content-pad-x`を0.75rem
  - 記事本文の表（`.asset-table`を除く）を`display:block; overflow-x:auto`にして横スクロール化。セルに`min-width: 5em`、1列目に`7em`、スマホで文字0.85rem・余白縮小
- `src/pages/[lang]/about.astro`: `.author-links`に`flex-wrap: wrap`（スマホで14px横にはみ出していた、今回の変更前からの不具合）

## 検証（ローカルの`pnpm preview`、iframeで幅390px・1100px・1278pxを計測）

| 指標 | 変更前 | 変更後 |
|---|---|---|
| スマホの本文幅（390px） | 245px（約63%） | 317px（81%） |
| PCの本文幅（1278px） | 558px | 678px |
| スマホのページ全体の横スクロール | あり（scrollWidth 419） | なし |
| 表（`spec-chart`のPC幅） | 材料列が1文字ずつ縦に折返し | 全列が収まる（1列目129px） |
| 表（スマホ） | 564pxがはみ出し、ページごと横スクロール | 表の中だけ横スクロール、1列目は1行 |

- 無作為25記事＋`spec-chart`の計26記事（スマホ幅）: ページ全体の横はみ出し0件、本文幅は全記事317px、表54個のうち7個が表内スクロール（残りは収まる）
- トップ・`/ja/diy/`・`/ja/soundproof-room/`・`/ja/local/`・`/ja/about/`: 横はみ出し0件（aboutは修正後）
- `pnpm build`成功（210ページ）。実機のスマホ・本番での確認は未実施（デプロイ後に確認）

## 後続

- 改善後のGA4確認は `weekly-task.md` W-22
- 未確認だったスマホ表示（記事一覧ページ、`CtaBox`・`AffiliateCard`、検索など）は `task-list.md` T-14
