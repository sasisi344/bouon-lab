# 現在抱えているタスク

作成日：2026-06-10
最終整理：2026-06-24（サイト全体トピッククラスタ・カニバリ調査の結果を未整理セクションに追加）

---

## 未整理

### GSCクエリ分析（2026-06-24エクスポート）からの弱点・新規コンテンツ機会

出典: `.workspace/.task/202606-querty.md`（過去3か月のクエリ272件・ページ429件を分析。CTR改善余地のある記事7本、コンテンツギャップ3件、伸ばせば成果が出る記事群を特定し優先度別タスク化済み）。詳細・個別タスクは同ファイル参照。

### サイト全体のカテゴリ内・カテゴリ横断カニバリ対策

出典: `.workspace/.task/site-topic-clusters.md`（business・diy・knowledge・local・money・soundproof-rental・soundproof-room の7カテゴリ132記事）／`.workspace/.task/creator-topic-clusters.md`（creator38記事、2026-06-24に36→38記事へ更新済み）。

- [x] **最優先・クロスカテゴリA**: オーナー向け防音リノベROI・投資戦略が3カテゴリ4記事に分散（business`owner-soundproof-renovation-investment-strategy-2026`・business`soundproof-renovation-cost-outlook-2026`・soundproof-rental`owner-soundproof-renovation-strategy`・money`owner-renovation-roi-simulation-tool`）。読み比べて1本を総合ハブに据え、残り3本を明確な差別化軸（市場動向／コスト動向／個別シミュレーションツール）にピボットするか統合する → 2026-06-24対応：4記事それぞれ内容自体は元々差別化済み（ROI/出口戦略・建設コスト動向・ペルソナ別経営戦略・A4簡易シミュレーション）と判断し統合は見送り。各記事の冒頭に他3記事との違いを明示する一文を追加し、4記事相互の内部リンクを完全に張り直した（mesh化）。lastmodを全件2026-06-24に更新
- [x] **優先・money内**: 「防音室レンタル vs 購入」3本（`rental-vs-purchase-soundproof-room`・`soundproof-room-rental-cost`・`soundproof-room-rental-lease`）の損益分岐点訴求が重複 → 2026-06-24対応済み。役割分担を本文冒頭で明示（`rental-vs-purchase-soundproof-room`＝ヤマハMCプラン単体の総合比較／`soundproof-room-rental-cost`＝複数ブランドの料金相場・初期費用／`soundproof-room-rental-lease`＝法人リース・経費処理）し3本相互リンクを追加。損益分岐点の数字（5年・18ヶ月・3〜4年）が記事間で異なる理由（算出基準の違い）も各記事に注記。削除・統合は実施せず差別化で解消
- [x] **優先・soundproof-rental内**: 「導入・許可・原状回復・耐荷重」5本中、特に`rental-permission-proposal-template`・`rental-unit-soundproof-room`・`rental-proofroom-contractcheck`の3本が「導入前に確認すること」という同一検索意図に収斂。差別化または統合を検討する → 2026-06-24対応：5本（`rental-permission-proposal-template`・`rental-unit-soundproof-room`・`rental-proofroom-contractcheck`・`soundproof-room-installation-conditions`・`apartment-weight-limit-500kg`）を読み比べ、削除・統合は見送り役割分担で解消（テンプレート書式／交渉〜原状回復の総合ロードマップ／契約書・原状回復チェック／耐荷重・搬入・空調の技術基準／500kg超の荷重計算特化）。各記事冒頭に差別化文を追加し相互リンクをmesh化。`apartment-weight-limit-500kg`の汎用タグ（`["防音"]`）も具体化。lastmod全件2026-06-24に更新
- [x] **優先・soundproof-room内**: 「サイズ選び」2本（`bouon-size-choice`・`soundproof-room-size`）がタイトル・スコープともにほぼ同一。読み比べて統合かどちらかを別意図にピボットする → 2026-06-24対応：読み比べた結果、一字一句の同一ではなく統合は見送り。`bouon-size-choice`は予算・用途別の決定版（総合比較表＋購入前チェックリスト）、`soundproof-room-size`は楽器ごとの「内寸（外寸との差）」の当たり判定に軸を絞り、両記事冒頭に役割の違いを明示する一文を追加。`soundproof-room-large-size`（2畳以上特化）も含め3記事を相互リンクでmesh化。`soundproof-room-size`のdescriptionに混入していた文字化け（韓国語の「의」）も修正。lastmodを3記事とも2026-06-24に更新
- [x] **中優先・クロスカテゴリC**: 内窓・防音窓が3記事に分散（diy`diy-internal-window-road-noise-reduction`・diy`soundproof-window-merit-demerit`・soundproof-room`shanon-vs-bouon-window`）→ 2026-06-24対応：統合・カテゴリ移動はせず、3記事それぞれの導入部に他記事との違い（実測dB比較／賃貸の原状回復ハック／製品名・ブランド比較）を明示し、3記事相互の内部リンクを設置。`shanon-vs-bouon-window`の番号付き見出し（規約違反）も修正
- [x] **中優先・クロスカテゴリD**: D値（遮音等級）の解説がsoundproof-room`bouon-dchiseinou-meyasu`とsoundproof-rental`bourental-syaouseid-choiceindi`で重複気味 → 2026-06-24対応：`bourental-syaouseid-choiceindi`は元々`bouon-dchiseinou-meyasu`への片方向リンクと役割分担（賃貸物件選び基準）が明確だったため、`bouon-dchiseinou-meyasu`側に「防音室の性能観点」である旨と逆方向の内部リンクを追加して解消
- [x] **中優先・クロスカテゴリE**: 賃貸への防音室設置チェックがsoundproof-room`bouon-setti-checkpoint`（1本）とsoundproof-rental③クラスタ（5本）に分散。「設置条件」というテーマでどちらかのカテゴリに統一するか役割分担を明示する → 2026-06-24対応：上記soundproof-rental内タスクと一括対応。`bouon-setti-checkpoint`＝購入直前の個別搬入シナリオ（演奏フォーム・扉干渉・エレベーター死角）、`soundproof-room-installation-conditions`＝耐荷重・搬入・空調の体系的技術基準と役割分担を明示。両記事間・賃貸交渉クラスタとの相互リンクをmesh化しカテゴリ統一は見送り
- [x] **中優先・money内**: 資産価値・リセール系2本（`bouon-asset-value-analysis`・`report-japan-soundproof-unit-resale-value-simulation`）は視点の違い（不動産投資ROI vs 売却シミュレーション）があるが統合検討の余地あり → 2026-06-24対応：一字一句の重複ではなく統合は見送り。両記事冒頭に視点の違い（オーナーROI・賃料上乗せ vs 個人のスタジオ代比較シミュレーション）を明示する一文を追加し、相互リンクを設置。lastmodを2026-06-24に更新
- [ ] **運用ルール化**: 新規記事を作る際は該当カテゴリのクラスタ表（`site-topic-clusters.md`／`creator-topic-clusters.md`）に当てはめてから着手し、同クラスタ3本以上・クロスカテゴリで同テーマが既にある場合は差別化ポイントを一行で書き出すフローを全カテゴリに適用する。本表自体も新規記事追加のたびに更新する

en記事は作成しなくていい。

---

## 優先度B：W27〜W28アクセスデータ待ち

出典: `.workspace/.data-set/seo-check/seo-task.md` ZONE C ／ `.workspace/.task/query-analyize/seo-report-20260324.md`。
W24〜W26（3週連続）のGSCデータでは判断材料が不十分（サイト全体の週間表示が46〜65件と極小）なため、W27〜W28（2026-06-27頃以降）のエクスポートが揃ってから着手する。

- [ ] **最優先**: `/ja/soundproof-room/bouon-humidifier-comparison/`（旧記事比でサイト最多クリック）→ W24〜W26の3週連続でGSC表示回数0件（旧データ169表示/24クリックから未回復）。ページ自体は`draft:false`・リダイレクトチェーン（`/ja/soundproof-room/solution/bouon-humidifier-comparison/`→新URL、`/posts/soundproof-room-humidifier-guide/`→新URL）とも正常を確認済みのため、コンテンツ側の問題ではなく再インデックス待ちの可能性が高い。W27〜W28も表示0が続く場合は内部リンク強化・サイトマップ再送を検討
- [ ] ZONE A/B（`rental-proofroom-contractcheck`・`soundproof-culture-japan-vs-america`・`diy-vocal-soundproof-mask`・`hsp-soundproof-room-guide`・`budget-soundproof-booth-comparison`）の効果測定 → W24〜W26の3週とも5記事ともGSC表示回数0件（`rental-proofroom-contractcheck`は旧URL`/ja/soundproof-rental/solution/...`への残存表示13→3→0と減衰中で新URLへの移行はまだ確認できず）。W27〜W28も0が続く場合のみ個別調査に着手
- [ ] `/ja/local/sendai-soundproof-rental-guide/` のカテゴリ移転後の順位変動確認 → W24〜W26の3週ともGSC表示回数0件（旧データ52表示/6クリックから未回復）。W27以降も継続確認
- [ ] 次回GSCエクスポート（W27〜W28、2026-06-27頃以降）を`.workspace/access-data/2026/`に追加し、`ctr-check-list.md`/`pagerank-list.md`を新URLベースで作り直す（W26時点ではサイト全体の週間表示が65件程度と少なく、新URLベースの再構築には時期尚早）

---

<!--
### 2026-06-24棚卸し：未整理セクション（2026-06-21発見分）全件完了

`.workspace/.task/eeat-filecheck-list.md`の対象漏れ発見を起点に、169記事・全8カテゴリ調査で見つかったウィークポイント6件を全件完了。

- [x] **`local/kobe-soundproof-rental-guide`と`kyoto-soundproof-rental-guide`が定型文の重複**: 両記事ほぼ同一の抽象的な「対策」文言の繰り返しで独自データ・出典に乏しい（B評価） → 神戸（港町・震災後の建て替え・ジャズ文化）と京都（景観条例による高さ制限・音楽大学集積）の実在事実を軸に全面リライト。「対策」section も都市固有の助言に書き分け、一字一句一致する定型文を排除。両記事ともA評価へ格上げ（神戸約3,900字・京都約4,000字）。未確認の固有名詞「Quintet神戸」は削除
- [x] **2026-06-01のカテゴリフラット化で他記事にも同種の壊れた内部リンクが残っている可能性**: 全記事を`grep`で全件調査完了。新たに3件発見・修正（`creator/streamer-noise-complaint-response`1件、`creator/streamer-rental-preview-checklist`2件、いずれも旧サブ区分付きパス＋カテゴリ誤りを修正）。再調査で残存ゼロを確認、`npx astro check`も0エラー
- 結果：EEAT評価は最終的にA148(88%)/B21(12%)/C0(0%)

- [x] **CtaBox再構成**: `.workspace/.task/ctabox-task.md`で完了。提携実体なしを確認しrelのsponsored表記を削除、配置基準を「単独の決断ポイント」に絞り込んだ上で4記事5箇所（A類2記事＋B類2記事3箇所）に設置、残り44件の言及はC類（並列比較・一般論）と判定して非設置を維持
- [x] **AffiliateCard活用が薄い**: `.workspace/.task/link-check.md`で完了。未設置8商品中6商品・19箇所に設置（`danbocchi-standard`4・`reflection-filter`6・`防振-mat-piano`5・`booth-workspace`1・`sound-level-meter-pro`1・`humidifier-vaporizer-daikin`1）。`otodasu-dx-pro`は候補記事が安価な別モデル「OTODASU II」を指しており登録商品（プロ仕様¥149,000〜）と price/性能が不一致のため見送り、`affiliates.ts`側のSKU追加・説明見直しが今後の課題として残存
- [x] **内部リンクゼロ記事が169記事中76記事（45%）**: `.workspace/.task/link-check.md`で完了。76記事全件に文脈リンクを追加し、内部リンクゼロ件数0件を確認済み（既存の未リンク参照テキストの実リンク化・壊れたリンク修正も含む）
- [x] **EEAT評価の対象漏れ**: 2026-06-24：未評価68記事（旧記載の58件は集計漏れ）を全件評価し完了。全170行（A138/B23/C9）に更新済み。
  - [x] **C評価9記事（本文400〜700字で極端に短い）の重要度判定と対応**: 各記事が防音Labの核心トピックかを判定。`diy/diy-soundproof-room-cost-breakdown`は既存A評価記事`diy/soundproof-room-diy-cost`（タイトル・主題が実質同一）と重複と判定し**削除**（リダイレクト設定・内部リンク修正・`interlink-postlist.md`再生成済み）。残り8記事は重複なし・核心/差別化トピックと判定し**全件加筆完了、全てA評価へ格上げ**：
    - `soundproof-room/proofroom-aircondition-select`（防音室の空調・換気）→ 約4,200字
    - `soundproof-room/proofroom-humidity-airconditionlist`（温湿度管理・楽器保護）→ 約3,700字
    - `soundproof-room/proofroom-soudmore-manual`（音漏れ診断・段階的改善）→ 約3,000字
    - `diy/diy-refrigeration-noise-reduction`（配信者の家電ノイズ対策）→ 約2,188字
    - `diy/diy-soundproof-room-failures-solutions`（DIY失敗例・遮音吸音の混同分析）→ 約2,268字
    - `diy/diy-wall-soundproofing-room-guide`（部屋全体DIY防音の工法比較）→ 約2,541字
    - `diy/soundproof-sheet-heavy-diy-tips`（遮音シートの重量・フレーム補強）→ 約2,394字
    - `money/musician-soundproof-loan-strategy`（音楽家ペルソナの資金調達戦略）→ 約2,350字
    - 結果：EEAT評価は最終的にA146(86%)/B23(14%)/C0(0%)。`npx astro check`は0エラーを確認済み
  - [x] **`creator/night-streaming-neighbor-tips`の内部リンク2件が旧サブ区分付きパス（`/ja/soundproof-rental/solution/...`・`/ja/soundproof-rental/knowledge/...`）のまま**: 修正済み。`/ja/soundproof-rental/noise-complaint-landlord-negotiation-guide/`と`/ja/creator/streamer-rental-selection-guide/`（カテゴリ違いも修正）に更新
- [x] **`en`記事が0件**: `non_jpn_queries.md`等の需要データ起点の着手検討は対象外。**`task-list.md`本文に明記の通りen記事は作成しない方針のため対応不要**と確認
- [x] **`src/content/README-content.md`が陳腐化**: 現状の8カテゴリ・フラット構造（サブ区分フォルダ廃止）に合わせて全面修正。`en`は実記事0件・空フォルダのみであることも明記
- [x] **`creator`カテゴリの肥大化・カニバリリスク**: `.workspace/.task/creator-topic-clusters.md`に全36記事のトピッククラスタ表（8クラスタ）を作成。最大のカニバリ候補として`streamer-soundproof-room-comprehensive-guide`と`vtuber-soundproof-environment-complete-guide`（タイトル・スコープがほぼ同一）を特定し、次回リライト時の優先確認事項として提言

## 完了タスク（アーカイブ・2026-06-21整理）

前提：`rewrite-post.md`（P1〜P3 全10記事）/ `streamer-post.md`（creator新規21記事）/ `seo-task.md`（ZONE A〜C）が完了済み。
当時「次に着手するタスク」を ①権威性UP（残存記事の補強） ②内部リンク改善 ③不足コンテンツ追加 の3軸で棚卸しした記録。

### ストリーマー記事の商品アフィコンポーネント登録作業（完了）
`.workspace\.task\affi-item-list.md`
提示された商品は記事中で使う予定なので、Amazonなりで商品のASINを確認。確認後、affiliates.tsへの登録をして記事作成を円滑にする。
- [x] 2026-06-19：`affiliates.ts`への4商品登録（前述セクションA参照）に加え、`streaming-pc-fan-noise-mic`（`pc-fan-vibration-insulator`・`silent-gel-pad-clamworks`）、`streamer-pet-noise-balance`（`soundproof-cage-cover-k4`・`gap-tape-meicyan`）の本文該当箇所に`<AffiliateCard>`を設置済み

#### Check（前週からの改善・要因仮説）
- 数値変化: ユーザー数20→19（-5.0%）、PV 56→28（-50.0%）、CTR 約3.6%→約4.8%（+32.2%）、平均滞在時間 約44.0秒→約55.0秒（+25.0%）、直帰率 約50%→約37.5%（-25.0%）、掲載順位 約15.2→約14.5（-4.3%、改善）
- 推定要因（LP/ページのどれに起因？）: PVは前週56から28へ半減したが、W24は初回計測でPVが一時的に多かった可能性がある。一方で直帰率（-25.0%）・平均滞在時間（+25.0%）・CTR（+32.2%）・掲載順位（-4.3%、改善）はすべて改善方向であり、PV数は減少しつつも質的なエンゲージメントは向上している
- ⚠️ サイト全体のPVが28と小規模なため、LP Top5・4-Box分析ともにPV>5/表示5以上の基準を満たすページが少なく、参考値中心の掲載となった（[[ga4-weekly-import]]既知の制約：サンプルサイズが小さい点に注意）

#### Act（次週のToDo・優先度つき）
- [x] `/ja/diy/bass-trap-installation-guide/`（表示23・順位11.61・CTR13.0%）は内部リンク強化で順位5以内への押し上げを狙う → `gamer-acoustic-placement`・`diy-soundproofing-tips`・`streamer-soundproof-room-comprehensive-guide`（高優先度ハブ）から内部リンクを追加（2026-06-19確認：3記事とも本文中にリンク実在を確認済み）
- [x] `/ja/money/streamer-tax-strategy/`（表示11・順位9.09・CTR0%）はタイトル・meta descriptionを見直しクリック獲得を狙う → タイトルに「30万円特例」の具体的フックを追加し、descriptionも一括償却・中古2年償却を前面に出して再構成（2026-06-19確認：frontmatter反映済み）
- [x] AdSense計測が今週から正常稼働開始したため、来週は収益データの推移（PV14・クリック2・推定収益1からの変化）を追う（GA4/AdSenseの来週データが出てから対応）

### 2026-06-19 棚卸し：`.workspace`内の残タスク集約

`.workspace`配下の各タスクファイルを実記事・コードの現状と突き合わせ、未完了分のみ集約。完了済みと判断したものは各ファイル側に注記済み。

#### A. アフィリエイト商品登録（完了）
`.workspace/.task/affi-item-list.md`
- [x] ASIN実在・価格確認済（`B000FHIPD2`・`B009JYMVJ6`・`B0756RD44W`・`B096M2T5Z4`）
- [x] 防音ケージカバーはIV（`B0756RD44W`）を採用、III（`B0756RD2WX`）は不採用
- [x] 隙間テープはMeicyan（`B096M2T5Z4`）を採用、`B0BJK98HNH`は不採用
- [x] 採用4商品を`affiliates.ts`に追加済み（2026-06-19）：`pc-fan-vibration-insulator`・`silent-gel-pad-clamworks`・`soundproof-cage-cover-k4`・`gap-tape-meicyan`（PC用2点は画像URL未確定のため`image`省略）

#### B. creator新規記事の残り1本（完了）
`.workspace/.task/streamer-post.md`（第2弾・優先度C）
- [x] `podcast-collab-recording-acoustics`（2人以上のポッドキャスト・対談配信の音響セッティング）2026-06-19公開：`src/content/ja/creator/podcast-collab-recording-acoustics/index.mdx`。`collab-streaming-soundproof-space`は広さ・防音性能側、本記事はマイク構成・配置・チャンネル管理側で差別化

#### C. 新規記事候補（完了）
`.workspace/.task/query-analiize/seo-report-20260324.md`
- [x] 「ストリーマーを悩ませる『サー』音：グランドループとアース線の正しい処理方法」2026-06-19公開：`src/content/ja/creator/cable-noise-ground-loop-prevention/index.mdx`。`streaming-pc-fan-noise-mic`へ相互リンクし、既存の`ground-cable-mogami`アフィカードを本記事に集約
- 加湿器特化記事・ハウスメーカー比較記事は既存記事（`bouon-humidifier-comparison`／`housing-builder-soundproof-comparison`・`daiwa-house-jiyuku-soundproof-review`）でカバー済みのため対応不要

#### D完了分（2026-06-21棚卸し時点）
`.workspace/.data-set/seo-check/seo-task.md`（2026-06-10更新版。リライト自体は完了、GSC指標確認が残っている）

2026-06-21 棚卸し：W24〜W26（`.workspace/access-data/2026/W24〜W26`、20260530〜20260620）のGSC/GA4データで進捗確認

- [x] `/ja/diy/bass-trap-installation-guide/` カテゴリ移転後の順位悪化 → **回復を確認**（W24: 順位20.7・表示6・クリック0 → W25: 順位11.6・表示23・クリック3・CTR13.0% → W26: 順位10.6・表示14・クリック2・CTR14.3%）。3週連続で順位・CTRともに改善傾向のため移転の悪影響は解消したと判断
- [x] `/ja/money/soundproof-room-loan-guide/` → GSC確認：現URLは3週とも表示0件（W25に出現した`/ja/solutions/soundproof-room-loan-guide/`はリダイレクト未設定の死にURL＝404の残存インデックスで実体なし、対応不要）。コンテンツ側は対応済み：「住宅ローンに防音室費用を組み込む申請手順」セクション（5ステップ）を追加し、`streamer-tax-strategy`・`telework-soundproof-loan-strategy`と相互リンクを設置（2026-06-21、3記事すべてlastmod更新）

未完了分はW27〜W28アクセスデータ待ちのため「優先度B」セクションへ移動済み（本ファイル上部参照）。

#### E. 陳腐化バックログ（判断完了・以降はSection D に統合）
`.workspace/.task/query-analiize/kaizen.md`（旧URL `/posts/...` 形式のCTRレポート。2026-05-02のrevuildと2026-06-01のカテゴリフラット化で大半の対象記事が削除・移転済み）
- 30件中ほとんどが現存しない（`grobal-soundproof-marketcheck`・`soundproof-room-types`・`bouon-price-souba`等）→ 対応不要
- [x] 「現存するが旧タイトルのまま」とされた4記事（`japan-bouonproof-marketnextasia`・`soundproof-room-budget-selection-guide`・`million-yen-soundproof-room-professional`・`nitori-soundproof-acoustic-guide`）を実ファイルで確認 → 2026-06-19：4記事とも現在のtitle/descriptionはkaizen.md記載の旧タイトルと既に異なり、いずれも改善済みのタイトルに更新されていることを確認（再改稿は不要）
- 残作業は新タイトルでのCTR効果測定のみのため、Section D（W27以降のGSC確認）に統合し本セクションは終了
- `.workspace/.task/query-analiize/non_jpn_queries.md`は英語圏需要の生データ（`livestream soundproof`251表示等）。具体タスクではなく`en`記事戦略の参考資料として保持

#### F. E-E-A-T評価（完了確認のみ・ファイル側のステータス更新が必要）
`.workspace/.task/eeat-filecheck-list.md`（評価日2026-06-05、C評価2記事）
- [x] `knowledge/absorption-vs-soundproofing-materials`（評価時150字）→ 2026-06-19確認：本文約4,000字に拡充済み、再執筆完了
- [x] `business/report-japan-asmr-vtuber-streaming-studio-standard`（評価時1,000字）→ 2026-06-19確認：本文約4,000字に拡充済み、加筆完了
- [x] B評価トップ5（`night-practice-soundproof-guide`・`report-japan-soundproof-rental-market-needs`・`soundproof-market-esg-trend`・`workbooth-office-soundproof-trend`・`vibration-isolation-technology-trend`）を実読確認 → 2026-06-19：3件（night-practice/rental-market-needs/vibration-isolation）はA評価に格上げ、2件（esg-trend/workbooth）はB継続（実名企業データ・市場規模データの引用が依然不足）
- [x] `eeat-filecheck-list.md`自体の評価ステータス表を更新（この時点でB評価12件の集計漏れに気づき、最終的にF完了時点でA109/B2/C0に訂正）
- [x] 残るB評価10件（`bouon-humidifier-comparison`・`soundproof-room-pollen-protection`・`nitori-soundproof-acoustic-guide`・`free-cardboard-soundproof-tech`・`outdoor-soundproof-curtain-market-guide`・`future-ssi-silent-speech-interface-revolution`・`chiba-soundproof-rental-guide`・`sapporo-soundproof-rental-guide`・`japan-bouonproof-marketnextasia`・`privacy-pod-market-growth`）を実読確認 → 2026-06-19：全10件がlastmod 2026-06-10時点で既に具体データ・出典付きに拡充されていたためA評価へ格上げ（`eeat-filecheck-list.md`に反映済み）。残るB評価は`soundproof-market-esg-trend`・`workbooth-office-soundproof-trend`の2件のみ（実名企業事例の引用が次の課題）

F完了：セクションF全項目完了。最終結果 A109/B2/C0（全111記事）

### 2026-06-21：W26週次タスク（`.workspace/.task/w26-comp-weekly-task.md`に分離管理・全項目完了）
- [x] W25のAct実施（bass-trap内部リンク強化・streamer-tax-strategyタイトル改善・AdSense追跡継続）
- [x] `/ja/diy/bass-trap-installation-guide/`へ4記事目の内部リンク追加（`streaming-room-reverb-absorption`）
- [x] トップページ（`/ja/`）のtitle/description見直し（問いかけ・悩み別フレームに変更、ja/en個別設定バグも修正）
- [x] `bouon-rental-market-guide`と`bouonrental-market-research2025`のURL重複確認・相互リンク追加（カニバリ対策）
- [x] `vtuber-family-privacy-rules`の復元・リダイレクト追加（W26のGSCで需要実証、`/ja/creator/`へ移設）
- [x] `/ja/business/datacenter-soundproof-technology-facts/`のタイトル・description問いかけ型化
- [x] 監視のみ・優先度低: bass-trapへのGA4セッション1件で英語タイトル記録（n=1、対応不要と結論）
-->
