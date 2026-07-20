# 週報PDCA（W28: 2026-06-27〜07-04）

データ出典: `.workspace/access-data/2026/W27/`・`W28/`（GSCランディング+クエリ・GA4週次レポート）

---

### Plan（前週からの方針）

- ランキング崩壊後の回復モニタリング（138件リダイレクト・zenki基準との比較）
- `bass-trap-installation-guide`の内部導線強化効果の継続観測
- ニッチ化リライト6記事・新規creator6記事・local5記事の初回GSC効果測定
- `/ja/`トップの症状別導線・CTR改善の継続

### Act候補（データ由来ドラフト・このサイト単独の全候補）
- [x] 「台パン 衝撃吸収」（🔴後回し、表示8・順位9・CTR0%）はタイトル・メタディスクリプション改善でCTR獲得を狙う → 2026-07-14実施: `gaming-floor-impact-noise-fix`のtitle/descriptionに「衝撃吸収」を明示的に追加（結論先出しは維持）。CTR変化はW30以降で確認
- [x] `/ja/creator/gaming-floor-impact-noise-fix/`はCTR9.09%と改善傾向のため、関連記事からの内部リンクで露出を拡大 → 2026-07-14実施: `streamer-noise-quick-fix`・`diy-soundproofing-tips`・`dance-fitness-streamer-soundproof`の3記事から文脈に沿って内部リンクを追加
- [x] `/ja/diy/bass-trap-installation-guide/`はクリック12→2・表示105→30と大幅減のため、要因調査とリライトを検討 → 2026-07-14調査: W24〜W28のGSCエクスポート実データを確認したところ「クリック12→2・表示105→30」という数値はどの週にも一致せず、実際の推移はW24: 0/6 → W25: 3/23 → W26: 2/14 → W27: 2/28 → W28: 5/52と一貫して増加傾向。当初のAct候補は誤ったデータに基づいていたと判断し、リライトは不要と結論。`diy-led-acoustic-panels`からの内部リンク追加は施策として維持
- [x] 「東京 防音 工事 補助金」（🆕新規クエリ、表示8）は需要の芽として関連記事の作成・強化を検討 → 2026-07-14実施、詳細は`archive/weekly-PPDCA-task-07W29.md`参照。W30以降の効果測定は`task-list.md`に記録済み
- [x] (direct)流入の実態（SNS・ブックマーク・UTM未計測等）を確認し、流入経路の可視化を進める → 2026-07-14確認: 現行のGA4週次エクスポート（ランディングページ×セグメント）には参照元/メディアの内訳が含まれず分析不可。セッションのソース/メディアレポートの取得が必要なため`task-list.md`に追記済み（追加データ取得待ち）

---

### Do（W28期間中に実施済み）

- W27・W28のGSC/GA4エクスポート取り込み（`.workspace/access-data/2026/`）
- ランキング崩壊調査の結論整理（リダイレクト27件マッチング回復なし・zenki比1割未満）
- ニッチ化リライト6記事の効果測定記録更新（GSC表示0継続を確認）
- カテゴリ偏り是正・ペルソナH記事等（07-05実施分はW28期間直後のため、効果はW29以降で観測）

---

### Check（W27→W28の変化・要因仮説）

#### サイト全体（GSC）

| 指標 | W27 | W28 | 変化 |
|---|---|---|---|
| クリック | 5 | 7 | +40% |
| 表示回数 | 264 | 217 | -17.8% |
| CTR | 1.89% | 3.23% | +70.9% |
| 平均掲載順位 | 9.5 | 14.5 | +52.2%（悪化） |

zenki基準（348.8表示/日・21.1位）との比較: W28は31.0表示/日・14.5位で、**量的回復は未確認**。CTRとクリックは微増だが、順位悪化が全体を牽引。

#### サイト全体（GA4）

| 指標 | W27 | W28 | 変化 |
|---|---|---|---|
| 総ユーザー | 52 | 69 | +32.7% |
| オーガニックユーザー | 28 | 39 | +39.3% |
| 全体直帰率 | 54.0% | 56.2% | +2.2pt |
| オーガニック直帰率 | 45.9% | 34.9% | -11.0pt（改善） |
| モバイル直帰率 | 75.0% | 84.2% | +9.2pt（悪化） |

オーガニックの質（直帰・エンゲージ）は改善方向。一方でモバイル直帰率が突出しており、トップ・creator系LPのモバイル体験がボトルネックの可能性。

#### GSCページ別ハイライト

- <strong>勝ち</strong> : `/ja/diy/bass-trap-installation-guide/`（表示28→52・クリック2→5・CTR7.1%→9.6%）— サイト唯一のクリック獲得エンジン。内部導線施策が機能
- <strong>伸びたが取りこぼし</strong> : `/ja/creator/gaming-floor-impact-noise-fix/`（表示5→17・CTR0%・順位7.4）— インプレッション急増もクリックゼロ。GA4直帰率100%
- <strong>表示増・順位急落</strong> : `/ja/business/japan-soundproof-market-size/`（表示4→30・クリック0→1・順位7.5→22.7）— クエリ拡大と順位悪化が同時発生
- <strong>1ページ目圏内・CTR0%</strong> : `/ja/soundproof-room/wifi-connection-guide/`（表示10・順位7.3）・`/ja/business/datacenter-soundproof-technology-facts/`（表示17・順位10）
- <strong>順位崩壊</strong> : `/ja/creator/streamer-noise-quick-fix/`（表示18→4・順位11.7→33.8・クリック1→0）
- <strong>深い順位</strong> : `/ja/soundproof-room/construction-types-cost-comparison/`（表示12・順位44.1・CTR0%）

#### GA4 LP Top（ユーザー数・参考）

1. `/ja/`（14ユーザー・直帰85.7%）— 流入は多いが離脱が突出
2. `/ja/diy/bass-trap-installation-guide/`（7ユーザー・直帰42.9%・平均滞在97秒）
3. `/ja/knowledge/noise-regulation-update-2025/`（6ユーザー・直帰33.3%）
4. `/ja/knowledge/noise-complaint-legal-precedent-manual/`（4ユーザー・平均滞在197秒）

#### ニッチ化リライト6記事・新規creator6記事の効果測定

詳細は`.workspace/.task/task-list.md`側で一元管理（重複記載を避けるためここでは要点のみ）。W29・W30が両方出揃うまでは着手しない（下記Act参照）。

#### 推定要因

- 順位悪化（+52%）は特定ページの急落（`japan-soundproof-market-size`・`streamer-noise-quick-fix`）と、ロングテール全体の評価分散が重なった可能性
- `bass-trap`の成功は「順位10位前後×高CTR×内部リンク」の好循環。同パターンを他ページに横展開する余地あり
- `/ja/`はオーガニックCTR0%（GSC表示15）かつ直帰85.7%（GA4）と、検索・直接の両面で改善余地が最大

---

### Act（W29向け・次回アクセスデータ入手後に着手）

2026-07-08時点でW28分析からのタスクは実施済み（gaming-floor-impact-noise-fix・japan-soundproof-market-size・wifi-connection-guide・hsp-soundproof-room-guideのtitle/description改善、`/ja/`トップのpersona-hub再配置、`ctr-check-list.md`/`pagerank-list.md`再構築、カニバリ調査）。完了項目は削除し、次週データで確認すべき事項のみ残す。

#### W28施策の効果測定（W29データ入手後に確認）

- [x] `/ja/creator/gaming-floor-impact-noise-fix/` — title/description改善後のCTR・順位推移 → 2026-07-21確認（W29 GSC、07/04-07/11 vs 06/06-07/04）: CTR3.57%→9.09%・クリック1→2に改善、順位は7.29→8.36とやや後退したが表示は維持。施策は機能していると判断
- [x] `/ja/business/japan-soundproof-market-size/` — title/H2/リード文修正後、順位が22.7位から回復したか → 2026-07-21確認: 順位20.94→11.64に大幅回復、CTR2.94%→7.14%。施策成功
- [x] `/ja/soundproof-room/wifi-connection-guide/` — description結論先出し化後のCTR推移 → 2026-07-21確認: 順位6.88→6.56とわずかに改善するも表示16→9に減少、クリックは両期間とも0のままCTR改善は未達。継続観察
- [x] `/ja/soundproof-room/hsp-soundproof-room-guide/` — title修正後の順位（W28: 12.6位）の回復有無 → 2026-07-21確認: W29週（07/04-07/11）は表示0・クリック0で圏外扱い（前期間は表示7・順位10.43）。回復どころか一時的にインデックスから消えた可能性があり要注意。W30以降の推移を継続確認
- [x] `/ja/`トップページ — persona-hub再配置・CTAリンク修正後のモバイル直帰率（W28: 84.2%）改善有無 → 2026-07-21: W29 GSCでは表示60→7・順位12.47→8.71（順位改善だが表示急減、期間長の違いによる可能性あり）。GA4側は今回のエクスポート形式がページ×参照元の生ログでモバイル直帰率が算出不可のため未確認。次回はランディングページ×デバイスセグメントでのエクスポートを依頼
- [x] `/ja/creator/streamer-noise-quick-fix/` — 順位急落（11.7→33.8位）が一時的変動かカニバリか、W29推移で判断 → 2026-07-21確認: W29も順位15.63→18.75・CTR3.7%→0%とさらに悪化。一時的変動ではなく継続的な下落傾向と判断。カニバリ要因は未特定のため次週も追跡
- [x] `/ja/soundproof-room/construction-types-cost-comparison/` — `bouon-osusume-hikaku`からの内部リンク強化未実施。実施の上で順位推移（W28: 44.1位）を観察 → 2026-07-14確認: `bouon-osusume-hikaku`からのリンクは既存だった（未実施の記載は誤り）。逆方向（`construction-types-cost-comparison`→`bouon-osusume-hikaku`）が未設置だったため追加し、双方向リンクに強化。順位変化はW30以降で確認

5. ⚠️ 異常値・技術アラート
- 404エラーLP（GA4でError 404が計上されたランディングページ）: 検出なし
- 順位・CTRの急落（クエリ.csv・3か月間の2期間比較）:
  - 「musision」: 順位10.1→35.6と大幅後退
  - 「一戸建て 騒音苦情」: 順位31.2→48.2
- その他の異常値: サイト全体の掲載順位15.7・CTR2.61%と低め。表示回数1,303に対しクリックが34件にとどまり、タイトル・ディスクリプション改善の余地が大きい。「シェアハウス ○○ 音大生」系のローカルクエリが多数新規表示されており、地域別記事の需要の芽と考えられる
### Check（前週からの改善・要因仮説）
- 数値変化: セッション-22.6%・UU-29.5%と大きく減少した一方、エンゲージメント率は+17.7pt・平均エンゲージメント時間+68.2%と質は改善
- 推定要因（ページ/クエリのどれに起因？）: 流入量は減ったが残ったユーザーの質（滞在・エンゲージメント）は向上。`/ja/knowledge/tokyo-bouon-whitekyuon-okudake-review/`はCTR33.33%と高いが表示回数6件と少なく機会が小さい。逆に表示回数の多いページ（例:1000+表示のURL多数）はサイト全体で1桁クリックにとどまり、タイトル改善の余地あり

### Act候補（データ由来ドラフト・このサイト単独の全候補）
- [x] サイト全体CTR2.61%・平均掲載順位15.7と伸び代が大きいため、表示回数上位ながら未クリックのページのタイトル・メタディスクリプションを見直す → 2026-07-20調査: kouki期間の未クリック上位15ページのうち13件が`/posts/...`旧URL（`soundproof-room-price-complete-guide`表示178件・`bouon-rental-yatinsouba`表示164件等）。現行ページのタイトル修正では効果がなく、138件リダイレクトの再クロール待ちが根本原因（line 118と同一問題）。個別タイトル修正は保留し、リダイレクト評価移行の進捗待ちに一本化
- [ ] 「シェアハウス ○○ 音大生」系の地域別クエリが多数新規表示されている。音大生向けシェアハウス特集記事や地域別ページの新設を検討 → 2026-07-20: 新規記事作成が必要なため未着手。着手する場合は`_draft/`にメモを置いて`/draft-plan`から開始する運用（ユーザー判断待ち）
- [x] 「musision」クエリの順位急落（10.1→35.6）の原因調査 → 2026-07-20調査: サイト独自問題ではなく既存の138件リダイレクト未回収が原因と特定。正規URL`/ja/soundproof-rental/musision-comprehensive-guide/`（表示17件・順位9.94）に対し、旧URL`/posts/musision-soundproof-rental-review/`（表示57件・順位7.81）・`/en/solutions/musision-soundproof-rental-review/`（表示131件）等がGoogle上でなお生存しクエリ評価を分散。2026-07-21のW30データ（過去3か月集計）で再確認したところ`/posts/musision-soundproof-rental-review/`は表示0に減少しリダイレクトが効き始めている一方、`/en/solutions/musision-soundproof-rental-review/`（表示131件）・`/en/solutions/budget-soundproof-booth-comparison/`（表示44件）・`/en/solutions/soundproof-room-types/`（表示20件）は`astro.config.mjs`に`/en/solutions/`パスのリダイレクトが1件も存在しないことが判明（2026-07-15のG1監査は`/ja/solutions/`のみ対象で`/en/solutions/`が漏れていた）。既存の`/en/posts/...→/ja/`パターンに合わせて3件を追加し、ビルド検証済み（227ページ）。効果はW31以降で確認

#### 継続中

- [x] `/ja/diy/bass-trap-installation-guide/`（表示52・CTR9.6%・順位9.98）— 被リンク・内部導線強化で上位化を狙う。関連DIY記事からのハブ化を検討 → 2026-07-14: `diy-led-acoustic-panels`から低音域対策の文脈で内部リンクを追加（既存7本の被リンクに加えて8本目）。順位変化はW30以降で確認
- [x] `/ja/business/datacenter-soundproof-technology-facts/`（表示17・CTR0%・順位10.0）— リライト/内容刷新を検討 → 2026-07-14: title/descriptionをBtoB提案訴求から「なぜ静かなのか」の一般検索意図優先に修正（結論先出し）。本文は維持。CTR変化はW30以降で確認
- [x] 138件リダイレクトの評価移行 — W29 GSCで旧`/posts/`URL由来の表示・クリックが新URLに移ったか再確認（W27・W28とも未回復） → 2026-07-21確認: W30（過去3か月集計）で`/posts/`系URLの表示合計は486件、非`/posts/`系は2,442件（旧URL比率約16.6%）。代表例`bass-trap-installation-guide`は新URL166表示/14クリックが旧URL110表示/10クリックを上回り主従逆転。完全回収ではないが明確な移行進行を確認。`/en/solutions/`パス（3件・表示合計195件）はリダイレクト未設定だったため本日追加（`astro.config.mjs`）。今後は残存`/posts/`486表示の内訳精査が次のステップ

#### ニッチ化リライト6記事・新規creator6記事の効果測定（W29・W30が両方出揃ってから実行）

2026-07-08時点、W27・W28はどちらも施策日（2026-07-05）より前の期間のため、効果測定は未実施（詳細は`task-list.md`参照）。1週分だけでは新規記事のインデックス反映・遅延の影響を受けやすいため、<strong>W29とW30の両方のエクスポートが揃ってから</strong>まとめて実行する。

- [x] ニッチ化リライト6記事 — GSC表示0が解消するか、新設したニッチクエリでの表示が発生するかを確認。6週連続0件のままなら「統合・noindex・別クエリへの再設計」のいずれかを方針決定 → 2026-07-21確認（施策日2026-07-05コミット`d8f4d47`で修正対象を特定: `diy-vocal-soundproof-mask`・`soundproof-culture-japan-vs-america`・`sendai-soundproof-rental-guide`・`rental-proofroom-contractcheck`・`bouon-humidifier-comparison`・`budget-soundproof-booth-comparison`）。W30（過去3か月集計）を正規URLで確認したところ、6記事中5記事が表示0のまま（`sendai-soundproof-rental-guide`のみ表示1・クリック0）。**方針決定: ユーザー判断によりニッチ化失敗と結論し、2026-07-21に6記事全てへ`noindex: true`を適用**（`content.config.ts`に`noindex`フィールド追加・`[...slug].astro`でrobotsメタタグ出力・`astro.config.mjs`のsitemap filterで除外）。ビルド検証済み（227ページ、noindexタグ出力確認済み）。なお旧URL側（`/posts/soundproof-room-humidifier-guide/`前期間26クリック・`/ja/soundproof-rental/solution/rental-proofroom-contractcheck/`現在35表示等）に残存トラフィックがあり138件リダイレクト未回収の影響が混在している可能性は指摘済みの上でユーザーが実行を決定
- [x] 新規creator6記事 — 表示回数・クリックの発生状況を確認（W27・W28はデータ自体が存在せず、W29が実質初回計測になる） → 2026-07-21確認（対象6記事はコミット`d8f4d47`で新規追加: `cramped-booth-gaming-chair-health`・`family-home-soundproof-reno-negotiation`・`female-streamer-privacy-soundproof`・`horror-game-scream-soundproof-mic`・`soundproof-booth-food-odor-management`・`streamer-discord-noise-cancel-vs-physical`）。W30時点で`female-streamer-privacy-soundproof`のみ表示4件（クリック0・順位18.25）、他5記事は表示0。新規記事のインデックス反映は進んでいるが需要への到達はまだ弱い。W32以降も継続観察

#### 新規発見（確認済み・対応不要）

- [x] `/ja/soundproof-rental/others/osaka-soundproof-rental-guide/`がGSCに旧カテゴリパスのままインデックスされている件 → 2026-07-14確認: `astro.config.mjs`で旧パス（`/ja/soundproof-rental/others/...`・`/posts/...`の両方）から`/ja/local/osaka-soundproof-rental-guide/`への308リダイレクトは設定済み、canonicalタグも現URLから正しく生成されている。コード側の問題はなく、Googleの再クロール待ちと判断。W30以降もGSCで旧パスのままなら再調査
