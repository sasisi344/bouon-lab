---
week: 2026-W30
source: 01_diary/weekly/2026/07-W30.md
---

# 週報PPDCAタスク（2026-W30）

## タスク

- [x] 表示回数の多い未クリックページのタイトル・メタディスクリプションを改善する → 2026-07-29実施（下記）

## 根拠

- 📊 サイト全体CTR2.61%・平均掲載順位15.7と、掲載順位のわりにCTRが低く伸び代が大きい
- 📊 表示回数1,303に対しクリックが34件にとどまっている

## 参照

- 週報ノート: `01_diary/weekly/2026/07-W30.md`（🔇防音Lab セクション「5. ⚠️ 異常値・技術アラート」「Act候補」）
- データ: `.workspace/access-data/2026/W30/w30-gsc-bouonlab/`（GSC ページ.csv・クエリ.csv、過去3か月2期間比較 / GA4 07-11〜07-18）

---

## 実施内容（2026-07-29）

### 分析の前提整理

W29時点（`weekly-task.md` line 110）では「未クリック上位15ページのうち13件が旧`/posts/`URL」のためタイトル修正は保留と判断していた。今回はW30データで<strong>旧URL（`/posts/`・`/en/`）を除外した現行URLのみ</strong>を再集計し、CTR施策が効く対象を切り分けた。

- 現行URL（`/posts/`・`/en/`除外）合計: 表示2,075・クリック63（CTR約3.0%）
- そのうち<strong>クリック0のページが上位25件で表示計約570件</strong>あり、旧URL問題とは別に現行URL側にも明確な取りこぼしが存在すると確認

さらに<strong>掲載順位で層別</strong>し、施策を分けた。

- <strong>順位10位以内 × クリック0</strong> : 純粋なCTR問題 → 今回のtitle/description改善対象
- <strong>順位20位以下 × 表示多数</strong> : 順位の問題であり文言では解決しない → 別タスクとして記録（下記「浮かんだタスク」）

### 修正した10記事

いずれも「結論先出し・主要KWを左」の原則で書き換え、`lastmod`を`2026-07-29`に更新した。

| 記事 | W30表示/順位 | 修正の狙い |
|---|---|---|
| `/ja/soundproof-room/wifi-connection-guide/` | 25 / 7.04 | W28修正でもCTR0のまま。「理由と解決策」という抽象表現をやめ、原因（遮音材）を左側に明示 |
| `/ja/knowledge/soundproof-material-spec-chart/` | 20 / 9.00 | descriptionが121字で末尾切れ。短縮し「数値で判断できる」価値を明記 |
| `/ja/knowledge/mansion-instrument-practice-time-rules/` | 18 / 8.78 | 疑問形のまま答えがなかった。本文の規約典型例「9〜21時」をタイトルに出して回答提示 |
| `/ja/soundproof-room/nitori-soundproof-acoustic-guide/` | 17 / 7.53 | 「実測検証」だけでは結論不明。本文の結論「反響は減るが音漏れは止まらない」を提示 |
| `/ja/diy/gamer-acoustic-placement/` | 14 / 8.64 | 疑問形→断定形。本文の核である「一次反射面が最優先」を左側へ |
| `/ja/business/soundproof-renovation-cost-outlook-2026/` | 13 / 3.62 | 順位3.6でクリック0＝最も惜しい。本文の結論「2027年夏まで高止まり」を数値付きで提示 |
| `/ja/knowledge/d-value-vs-rw-value-confusion/` | 12 / 5.75 | タイトルは既に結論先出しで良好のため据え置き。130字超のdescriptionのみ短縮 |
| `/ja/money/piano-soundproof-mortgage-tax-guide/` | 10 / 9.90 | タイトル44字で末尾切れ＋疑問形。本文の結論「組み込める」を断定して35字に短縮 |
| `/ja/soundproof-rental/pet-noise-soundproof-measures/` | 10 / 10.10 | 疑問形→「防音だけでは解決しない」と結論提示 |
| `/ja/soundproof-rental/music-student-property-search-guide/` | 152 / 28.14 | 順位問題が主だが「シェアハウス 天王寺 音大生」が順位2.92でクリック0。KW「防音シェアハウス」を左側へ移動 |

<strong>修正しなかった記事</strong> : `/ja/money/streamer-tax-strategy/`（14表示・順位8.00）は既に「配信者の防音室は経費にできる｜30万円特例で節税」と結論先出し＋具体数値が揃っており、文言改善の余地が小さいため据え置いた。順位・表示が変わらずクリック0が続く場合は検索意図のズレを疑う。

### 検証

`pnpm build` 成功（227ページ、修正前と同数）。

### 効果測定（W32以降）

- 対象10記事のCTR・クリック推移。特に`soundproof-renovation-cost-outlook-2026`（順位3.62）と`wifi-connection-guide`（2回目の修正）は施策の当たり外れが判別しやすい
- 3か月集計データのため、1週分では変化が埋もれる。<strong>W32〜W33で判断</strong>する

---

## 解析中に浮かんだタスク（W31以降）

### 🔴 優先度高

- [ ] <strong>「シェアハウス ○○ 音大生」クラスタの取りこぼし（表示152・クリック0）</strong> — エリア別クエリが20件以上発生（天王寺12/順位2.92、京都11/14.09、東京10/24.8、中央区9/15.11、渋谷9/19.67、二子玉川9/42.67、池袋・原宿・京都市・港区・武蔵野市・世田谷区・目黒区・秋葉原・大田区・三軒茶屋・江東区…）。`music-student-property-search-guide` 1本で全エリアを受けており、順位平均28.14と浅い。<strong>ユーザーが求めているのは「ガイド」ではなく「そのエリアの物件情報」</strong>である可能性が高く、記事の作り方から再設計が必要。今回のタイトル修正は暫定対応。※`weekly-task.md` line 111 の未着手タスクと同一。着手する場合は`_draft/`にメモを置いて`/draft-plan`から開始

- [ ] <strong>大阪・関西の防音賃貸クエリが全滅（順位40〜54位）</strong> — 「防音 賃貸 大阪」12表示/49.67、「防音室 賃貸 大阪」8/44.88、「賃貸 防音室 大阪」7/43.29、「防音 賃貸 関西」7/40.57、「賃貸 大阪 防音」5/54、「防音室 賃貸 関西」4/32。合計43表示・クリック0。受け皿の`/ja/soundproof-rental/others/osaka-soundproof-rental-guide/`が<strong>旧カテゴリパスのまま79表示・順位42.42</strong>で生存しており、正規URL`/ja/local/osaka-soundproof-rental-guide/`への評価移行が進んでいない。※`weekly-task.md` line 129 で「再クロール待ち」としていた件が<strong>W30でも未解消</strong>。リダイレクト設定は確認済みのため、内部リンクを正規URLに向け直す・sitemap経由での再送信など能動的な手を検討

- [ ] <strong>`/ja`トップのエンゲージメント率18.75%・平均滞在3.75秒（direct流入16セッション）</strong> — GA4 W30。GSC表示21・順位27.57でクリックも0。トップページは検索・直帰の両面で最悪値。persona-hub再配置（W28実施）の効果が出ていない可能性が高く、ファーストビューの再設計を検討

### 🟡 優先度中

- [ ] <strong>流入の主軸がGoogleではなくBing</strong> — GA4 W30のセッション参照元は`bing`が最多で、`google`は`onetouch-soundproof-wall-review`の2セッションのみ。GSCはGoogleのデータであり、<strong>GSC分析とGA4の実流入がほぼ別チャネルを見ている</strong>状態。Bing Webmaster Toolsのデータ取得を検討するか、Google側の評価回復（138件リダイレクト問題）を最優先課題として再認識する必要がある

- [ ] <strong>「防音ラボ」指名検索 34表示・順位7.29・クリック0</strong> — 表示数はサイト内クエリで2位。ただし同名の別事業者への指名検索の可能性が高く、<strong>取りに行くべきか自体が判断待ち</strong>。自社ブランドとして取るなら屋号表記の統一（防音Lab／防音ラボ）とトップページのブランド訴求が必要

- [ ] <strong>「東京 防音 工事 補助金」17表示・順位41.47でクリック0</strong> — W29（`archive/weekly-PPDCA-task-07W29.md`）で対応済みだが順位は深いまま。施策が順位に効いていない。W32でも改善しなければ記事の作り直しを検討

- [ ] <strong>順位40位台の高表示ページ2本</strong> — `/ja/knowledge/absorption-vs-soundproofing-materials/`（29表示・41.17）、`/ja/soundproof-room/construction-types-cost-comparison/`（18表示・41.89）。文言ではなく内容強化・内部リンク集約の対象。後者はW28で双方向リンク化済みだが順位改善せず

- [ ] <strong>「ベーストラップ 自作」系が表記ゆれで分散</strong> — 「ベース トラップ 自作」18表示/9.89、「ベーストラップ 自作」13/10.85（合計31表示・クリック0）。`bass-trap-installation-guide`はサイト唯一のクリック源（14クリック）だが「自作」意図では取れていない。DIY手順セクションの見出し強化を検討

### ⚪ データ取得の課題（継続）

- [ ] <strong>GA4エクスポートにデバイスセグメントが無い</strong> — W29に続きW30も「ページ×参照元」形式のため、モバイル直帰率（W28: 84.2%）の追跡が2週連続で不可能。次回から<strong>ランディングページ×デバイス</strong>のエクスポートを追加してもらう必要がある
