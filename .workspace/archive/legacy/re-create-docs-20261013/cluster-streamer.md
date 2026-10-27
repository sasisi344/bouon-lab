# 配信者クラスタの再考（v2）

作成: 2026-10-13 / 状態: ユーザー承認済み（2026-10-13。§8に決定と未決を記録）。実施した変更は§9/ 前版（2026-10-11、S1/S2/S3の段階案）は [cluster-streamer-v1-20261011.md](./cluster-streamer-v1-20261011.md) に保存
関連: [entrance-design.md](./entrance-design.md)（打鍵・打撃音の入口、確定）、`../task-list.md` T-24〜T-26、`../weekly-task.md` W-28、実データは [../query-check/analysis_実データ.md](../query-check/analysis_実データ.md)

## 1. 結論

1. <strong>段階（これから／不満／安定）で分ける案は取り下げる</strong>。実データでは、需要は段階ではなく「話題の固有さ」で分かれていた。代わりに<strong>疑問の型</strong>（症状／状況／選択／ブース運用／ジャンル）で見る
2. 配信者向けの記事は、検索の<strong>入口ではなく、一般クラスタの読者別の変種</strong>として扱う（10/11の確定どおり）。柱にするのは3本だけ（台パン、防音室の総合ガイド、賃貸選び）
3. 統合・301は、W-28の判定（11/16前後）まで実施しない。ただし<strong>統合候補のうち未登録の8本は、個別に作り直さない</strong>（作り直してから統合すると手戻りになる）
4. 配信者の整理より先に、<strong>noindexの5本が、サイト全体のクリックの12.5%を止めている</strong>。最優先の判断は §6

## 2. 10/11版から変わった点（根拠）

| 10/11版の前提 | 実データで分かったこと | 改める点 |
|---|---|---|
| 読者を3段階（S1・S2・S3）に分け、段階ごとに記事を割り当てる | 現行URLで表示が出ている記事は、固有の症状・状況に集中する（台パン335、農地プレハブ95、PCファン68、匂い49、身バレ48、実家47など）。「総合ガイド」「予算別」「買うタイミング」型は一桁〜十数 | 段階の区分をやめ、<strong>疑問の型</strong>で整理する |
| 表示0の記事は、需要が薄い | 未登録19本は、検索に出られないため、表示が出にくい。`creator/` 42本の現行URLの表示995のうち、登録済み15本が828、未登録19本が165 | <strong>未登録の記事の「表示0」を、需要なしと読まない</strong>。登録状態を必ず併記する |
| 配信者向けの入口を作る | 配信者の語は、Bingのクリックの6%、Googleは16か月でクリック17。`creator/` 全体でも、現行URLの表示995・クリック18（サイト全体の1.5%・1.8%） | 配信者は受け皿にしない（確定）。一般クラスタへ送る |
| 旧URLの問題は、キーボード記事が中心 | 配信系の旧URL19本は、表示約1,860・クリック約65を持ち、多くが記事ではなくカテゴリ一覧に転送されている（§5） | T-24の3本に加え、<strong>配信系の旧URLの転送先を見直す</strong>案を出す |
| noindexは、ニッチ化の整理 | noindexにした5本は、16か月でクリック127（12.5%）。最大のクリック源の転送先も含む | noindexの継続を、再判断する（§6） |
| トップのハブカードは、現状のまま | 「配信・楽器・在宅の音漏れ」カードの所属記事は4本（配信2・楽器1・在宅1）だが、ボタンの先（`/ja/creator/`）には配信者の記事しか載らない | カードの中身を、T-25（打鍵・打撃音）と合わせて見直す（§7） |

注意: 16か月の数字には、2026-09のGoogle低迷より前の実績が含まれる。現在の順位ではなく、<strong>需要があった証拠</strong>として使う。

## 3. 疑問の型で見直した全体像

| 疑問の型 | 例 | 一般クラスタとの関係 | 方針 |
|---|---|---|---|
| A 症状（音の悩みを直す） | 台パン、PCファン音、マイクの反響、声の音漏れ、防音マスク | 賃貸・DIY・知識クラスタの変種。症状の語が強い | <strong>残す・強化する。一番伸びる型</strong> |
| B 状況（この条件で配信できるか） | 実家、同居人、農地、ワンルーム、身バレ | 防音賃貸・補助金・法律の変種 | 固有の話題は残す。似た状況は役割を分ける |
| C 選択（何を買う・借りる・選ぶ） | 防音室の総合ガイド、予算別、賃貸選び、内見 | <strong>一般クラスタ（価格・賃貸・DIY）が既に強い</strong> | 柱を2本に絞り、残りは節として吸収する案 |
| D ブース運用 | 匂い、チェア、配線 | 防音室ユニットを持つ人の悩み | 残す。少数 |
| E ジャンル | ASMR、歌い手、ポッドキャスト | ジャンル固有。ASMRは旧URLの実績が大きい | ASMRは1本の柱に。他は統合候補 |

### 記事ごとの判定（46本）

`creator/` 42本に、`re-create` 対象のうち `creator/` の外にある4本（`diy-refrigeration-noise-reduction`、`diy-vocal-soundproof-mask`、`bouon-humidifier-comparison`、`report-japan-asmr-vtuber-streaming-studio-standard`）を加えた。「16か月の表示/クリック」は、旧URLの実績を含む（`/en/` は除く）。「状態」は、2026-10-12のGSCエクスポートで、<strong>未登録</strong>は「クロール済み - インデックス未登録」、<strong>不明</strong>は未登録にも10/6の登録済みにも載っていない記事。

| 疑問の型 | 記事 | re-create | 16か月の表示/クリック | 状態 | 推奨 | 一言 |
|---|---|---|---|---|---|---|
| A 症状 | creator/gaming-floor-impact-noise-fix | #50 | 335 / 5 | 登録済み | 柱（強化） | 台パン。335表示・5クリック・8.9位。T-25の橋渡し。足音は賃貸クラスタへ |
| A 症状 | creator/streaming-pc-fan-noise-mic | - | 68 / 1 | 未登録 | 再構築（W-28） | 68表示。PC本体のファン音という1つの疑問に絞る |
| A 症状 | creator/streaming-mic-noise-room | - | 0 / 0 | 未登録 | 再構築（順位を上げる案） | Bingの「反響」の束（マイク 部屋の反響抑えたい ほか）が受け皿。まだ未登録 |
| A 症状 | creator/streamer-noise-quick-fix | - | 58 / 1 | 登録済み | 残す | 58表示。「防音より先に」の振り分け記事として、症状A群の入口にする |
| A 症状 | creator/game-streamer-sound-types | #17 | 2 / 0 | 未登録 | 再構築（役割変更） | 打鍵音はT-25の枝Aへ。本記事は音の種類を振り分ける記事にする |
| A 症状 | creator/voice-chat-soundleak-fix | - | 28 / 1 | 未登録 | 再構築（W-28） | 28表示。声の音漏れ（空気音）に絞る。night-streaming-neighbor-tipsと重なる |
| A 症状 | creator/horror-game-scream-soundproof-mic | #41 | 4 / 0 | 登録済み | 残す（統合しない） | 登録済み・20.8位。game-streamer-sound-types を振り分け記事にし、絶叫の詳細記事として残す（2026-10-13決定） |
| A 症状 | diy/diy-refrigeration-noise-reduction | #32 | 3 / 0 | - | 別クラスタへ移す案 | 3表示。家電の音で配信者に限らない。DIYクラスタの変種 |
| A 症状 | creator/streamer-pet-noise-balance | #28 | 26 / 0 | 登録済み | 残す | 26表示。ペット騒音の一般記事（pet-noise-soundproof-measures）の変種 |
| A 症状 | creator/dance-fitness-streamer-soundproof | #27 | 0 / 0 | 不明 | 統合済み（2026-10-13） | → diy/treadmill-apartment-soundproofing-layering に吸収し301 |
| A 症状 | diy/diy-vocal-soundproof-mask | #68 | 160 / 22 | - | 残す（noindex解除済み） | 旧URLを含め160表示・22クリック。配信系で最もクリックが出た記事。2026-10-13にnoindexを解除し、出典のないdB値を直した |
| A 症状 | soundproof-room/bouon-humidifier-comparison | #71 | 0 / 0 | - | 書き直し済み（noindex解除） | 加湿器。旧URL経由でサイト最大のクリック源。2026-10-13に汎用の記事へ書き直し、noindexを解除 |
| B 状況 | creator/parenting-streamer-soundproof | - | 12 / 2 | 未登録 | 再構築（W-28） | 12表示・2クリック。同居人・子どもがいる家という状況に絞る |
| B 状況 | creator/family-home-soundproof-reno-negotiation | - | 47 / 1 | 登録済み | 残す | 47表示・1クリック。実家で費用を出してもらう交渉という固有の疑問 |
| B 状況 | creator/sleeping-parent-game-streaming-guide | - | 0 / 0 | 不明 | 待つ（公開4週未満） | 9/18公開。実家系の3本目。登録後に family-home 等と役割を比べる |
| B 状況 | creator/vtuber-family-privacy-rules | - | 155 / 9 | 不明 | 待つ（登録状態の確認） | 旧URL経由で155表示・9クリック。現行URLが未登録の可能性あり |
| B 状況 | creator/female-streamer-privacy-soundproof | - | 48 / 0 | 登録済み | 残す | 48表示。身バレ対策という固有の疑問 |
| B 状況 | creator/farmland-prefab-streaming-room-legal | - | 95 / 2 | 登録済み | 残す | 95表示・2クリック・11.2位。話題が固有で、需要が出ている |
| B 状況 | creator/kominka-renovation-streaming-room | - | 3 / 0 | 未登録 | 統合済み（2026-10-13） | → streamer-regional-studio-move に吸収し301 |
| B 状況 | creator/streamer-regional-studio-move | #19 | 8 / 0 | 未登録 | 書き直し済み（古民家を吸収） | 2026-10-13に古民家の落とし穴を追加し、題を拡張。登録待ち |
| B 状況 | creator/one-room-streaming-soundproof | - | 238 / 4 | 未登録 | 再構築（W-28・優先） | 旧URL含め238表示・4クリック。トップのハブカード所属なのに未登録 |
| B 状況 | creator/night-streaming-neighbor-tips | - | 0 / 0 | 不明 | 待つ（登録状態の確認） | 0表示。voice-chat-soundleak-fix と疑問が近い |
| B 状況 | creator/streamer-noise-complaint-response | #51 | 22 / 2 | 登録済み | 残す | 22表示・2クリック・25位。旧URL streamer-trouble-rule（241表示・7クリック）の受け皿候補 |
| B 状況 | creator/young-streamer-smartphone-monetization-roadmap | #31 | 48 / 0 | 登録済み | 残す | 48表示・9.4位。防音室なしで始める層という固有の疑問 |
| B 状況 | creator/collab-streaming-soundproof-space | - | 2 / 0 | 不明 | 待つ（登録状態の確認） | 2表示。2人配信という固有の状況。登録状態を確認する |
| C 選択 | creator/streamer-soundproof-room-comprehensive-guide | #42 | 17 / 1 | 登録済み | 柱（強化） | 入口①。ハブカード所属。被リンク8。17表示・順位12.8 |
| C 選択 | creator/streamer-rental-selection-guide | #52 | 50 / 0 | 登録済み | 柱（強化） | 入口②。Bingで住居が最大のクリック（10）。Google 18位から引き上げ |
| C 選択 | creator/vtuber-soundproof-environment-complete-guide | #43 | 128 / 1 | 未登録 | 再構築（W-28） | 旧URL含め128表示。「買う判断の資金計画・節税」に絞り、timing・budgetを吸収する案 |
| C 選択 | creator/streamer-soundproof-budget-roadmap | - | 4 / 0 | 未登録 | 統合済み（2026-10-13） | → streamer-soundproof-room-comprehensive-guide に吸収し301 |
| C 選択 | creator/streamer-soundproof-timing | - | 0 / 0 | 未登録 | 統合済み（2026-10-13） | → vtuber-soundproof-environment-complete-guide に吸収し301 |
| C 選択 | creator/asmr-vtuber-booth-guide | - | 5 / 1 | 未登録 | 再構築（W-28） | 5表示。ASMR固有のブース選び（静音換気・反響）に絞る |
| C 選択 | creator/streamer-soundproof-rental-share | - | 2 / 1 | 未登録 | 統合済み（2026-10-13） | → money/soundproof-room-rental-cost に吸収し301 |
| C 選択 | creator/soundproof-rental-vs-diy-streamer | #18 | 2 / 0 | 未登録 | 統合済み（2026-10-13） | → streamer-rental-selection-guide に吸収し301 |
| C 選択 | creator/streamer-rental-preview-checklist | #20 | 1 / 0 | 未登録 | 統合済み（2026-10-13） | → streamer-rental-selection-guide に吸収し301 |
| C 選択 | creator/bourentakl-streamer-settingsetubi | #49 | 114 / 3 | 未登録 | 再構築（W-28） | 旧URL含め114表示・3クリック。18,000字は1つの疑問を超える。回線・電源に絞る |
| C 選択 | creator/soundproof-rental-life-streamer | #3 | 47 / 0 | 未登録 | 再構築（W-28） | 13表示＋旧URL34。体験談として、rental-selection-guide の裏付けにする |
| C 選択 | creator/streaming-room-layout-guide | #4 | 54 / 1 | 登録済み | 残す（入口⑤は作らない） | 旧URL含め54表示。レイアウトは①か②の節にする案 |
| D ブース運用 | creator/cramped-booth-gaming-chair-health | - | 27 / 0 | 登録済み | 残す | 27表示。ブース内の体の悩み |
| D ブース運用 | creator/soundproof-booth-food-odor-management | - | 49 / 0 | 登録済み | 残す | 49表示。ブース内の匂い |
| D ブース運用 | creator/soundproof-booth-cable-management | - | 0 / 0 | 不明 | 待つ（公開4週未満） | 10/10公開 |
| E ジャンル | creator/asmr-external-noise-elimination | - | 10 / 0 | 未登録 | 再構築（W-28） | 10表示。旧URL2本（241表示・16クリック）の受け皿にする |
| E ジャンル | creator/utaite-vs-streamer-soundproof | - | 1 / 0 | 未登録 | 統合済み（2026-10-13） | → singer-instrumentalist-stream-soundproof に吸収し301 |
| E ジャンル | creator/singer-instrumentalist-stream-soundproof | - | 0 / 0 | 不明 | 待つ（登録状態の確認） | 0表示。同上 |
| E ジャンル | creator/podcast-collab-recording-acoustics | - | 0 / 0 | 不明 | 待つ（登録状態の確認） | 0表示。collab-streaming と近い |
| E ジャンル | creator/streaming-audio-first-low-budget | #30 | 31 / 0 | 登録済み | 残す | 31表示・18.3位。初心者が音質から直す優先順位 |
| E ジャンル | business/report-japan-asmr-vtuber-streaming-studio-standard | #40 | 6 / 0 | - | 別クラスタへ移す案 | 6表示。事業者向けの技術解説で、配信者の記事ではない |

| 推奨・状態 | 本数 |
|---|---|
| 柱（強化） | 3 |
| 残す | 13 |
| 再構築（W-28）・役割変更 | 11 |
| 統合済み（2026-10-13） | 8 |
| 書き直し済み（noindex解除・古民家の吸収） | 2 |
| 別クラスタへ移す案 | 2 |
| 待つ（公開4週未満・登録状態の確認） | 7 |
| 合計 | 46 |

## 4. W-28の19本を「11本＋8本」に分ける案

W-28は未登録19本を表示順に1本ずつ作り直す計画。<strong>統合候補の8本まで個別に作り直すと、統合したときに手戻りになる</strong>。先に11本を作り直し、結果を見てから8本を決める。

### 今すぐ作り直す11本（疑問の案）

W-28の「1本ごとに、答える疑問を1行で決める」の案。作業順は、需要とハブカードを優先した案。

| 順 | 記事 | 答える疑問（案） | 優先の根拠 |
|---|---|---|---|
| 1 | one-room-streaming-soundproof | ワンルームで配信する。1万円以下で、隣人に気づかれない対策は何か | 旧URL含め238表示・4クリック。トップのハブカード所属なのに未登録 |
| 2 | streaming-pc-fan-noise-mic | 配信のマイクにPCのファン音が入る。PC本体の何を直せばいいか | 68表示。W-28の最優先のまま |
| 3 | streaming-mic-noise-room | マイクに部屋の反響が入る。吸音と遮音のどちらを先にするか | Bingの「反響」の束（マイク 部屋の反響抑えたい ほか）。表示は0だが、需要は別のデータで確認できる |
| 4 | vtuber-soundproof-environment-complete-guide | 防音室を買う判断を、資金計画と節税でどう下すか | 旧URL含め128表示。timing・budgetを吸収する前提 |
| 5 | voice-chat-soundleak-fix | ボイスチャットの声が家族や隣に漏れる。今日できる対策は何か | 28表示 |
| 6 | parenting-streamer-soundproof | 子どもや同居人がいる家で配信する。音をどう調整するか | 12表示・2クリック（クリック率が高い） |
| 7 | bourentakl-streamer-settingsetubi | 配信者が賃貸を選ぶ。回線・電源は何を確認するか | 旧URL含め114表示・3クリック。18,000字を、回線・電源に絞る |
| 8 | asmr-external-noise-elimination | ASMR収録で、外の車・隣室の音を入れない部屋はどう作るか | 旧URL2本（241表示・16クリック）の受け皿 |
| 9 | asmr-vtuber-booth-guide | ASMR・VTuber用のブースを、何で選ぶか | 旧URL asmr-proofroom-guide の受け皿 |
| 10 | soundproof-rental-life-streamer | 防音賃貸に住んでみて、実際どうだったか | 体験談として、rental-selection-guide の裏付けにする |
| 11 | game-streamer-sound-types | ゲーム実況の音は、種類ごとにどの記事を読めばいいか | 打鍵音はT-25の枝Aへ移す。役割を振り分け記事に変える |

### 作り直さない8本（11/16の判定まで保留）

`streamer-soundproof-budget-roadmap`、`streamer-soundproof-timing`、`streamer-soundproof-rental-share`、`soundproof-rental-vs-diy-streamer`、`streamer-rental-preview-checklist`、`kominka-renovation-streaming-room`、`streamer-regional-studio-move`、`utaite-vs-streamer-soundproof`。

- 統合先の案: 予算別・タイミング → `vtuber-soundproof-environment-complete-guide` か総合ガイド／レンタル・DIY比較・内見 → `streamer-rental-selection-guide`／古民家・地方 → `farmland-prefab-streaming-room-legal` を土台にした「広い物件の配信部屋」／歌い手 → `singer-instrumentalist-stream-soundproof`
- 判定: 11本の結果（登録されたか、表示が出たか）を見て、統合するか、1本ずつ作り直すかを決める。**統合・301はこのとき、ユーザー判断で実施**する

## 5. 配信系の旧URLの転送先の見直し案（承認が必要）

旧URLの転送先がカテゴリ一覧のままだと、検索の意図を引き継げない。T-24（ドラム・ピアノの3本）に加えて、次を見直す案。転送先は旧記事の主題（slug）からの推定で、<strong>確定前に旧記事の内容を確認する</strong>。

| 旧URL | 16か月の表示/クリック/順位 | 現在の転送先 | 転送先の候補 | 条件 |
|---|---|---|---|---|
| `/posts/keyboard-sound-streaming-soundproof-guide/` | 646 / 16 / 10.3 | `/ja/creator/` | T-25の枝A（キーボード打鍵音） | 新記事の公開と同時（T-24の既存方針） |
| `/posts/streamer-proofroom-choicetech/` | 363 / 7 / 26.0 | `/ja/creator/` | `creator/streamer-soundproof-room-comprehensive-guide` | 登録済みの受け皿 |
| `/posts/streamer-trouble-rule/` | 241 / 7 / 8.9 | `/ja/soundproof-rental/` | `creator/streamer-noise-complaint-response` | 登録済みの受け皿 |
| `/posts/asmr-soundproof-environment-guide/` | 121 / 8 / 7.3 | `/ja/creator/` | `creator/asmr-external-noise-elimination` | 作り直して登録された後 |
| `/posts/asmr-proofroom-guide/` | 120 / 8 / 8.2 | `/ja/creator/` | `creator/asmr-vtuber-booth-guide` | 同上 |
| `/posts/gamer-bouon-room-select/` | 73 / 3 / 20.3 | `/ja/soundproof-room/` | `creator/streamer-soundproof-room-comprehensive-guide` | 登録済みの受け皿 |
| `/posts/rental-game-soundproof-booth-3man/` | 70 / 7 / 16.8 | `/ja/soundproof-rental/` | 要確認（`collab-streaming-soundproof-space` か `soundproof-rental-vs-diy-streamer`） | 旧記事の内容を確認 |
| `/posts/vtuber-heat-noise-management/` | 56 / 6 / 10.1 | `/ja/creator/` | `soundproof-room/proofroom-aircondition-select` | 熱と空調の悩みのため |
| `/posts/voice-only-streaming-optimization/` | 54 / 1 / 13.7 | `/ja/creator/` | `creator/streaming-audio-first-low-budget` | 登録済みの受け皿 |

- 合計: 表示1,744・クリック63（上の9本）。変更は `public/.htaccess` と `astro.config.mjs` を同時に直し、二重の301が無いことを確認する
- 登録済みの受け皿に向ける5本は、すぐ実施できる。作り直しを待つ3本は、受け皿が登録されてから

## 6. noindexの再評価（2026-10-13に4本を解除。仙台のみ維持）

2026-07-20〜21の「ニッチ化リライト」で、次の記事をnoindexにし、サイトマップからも除外した（`astro.config.mjs` のコメントでは「ニッチ化リライト6記事」。うち1本の `budget-soundproof-booth-comparison` は9/5に解除済み）。判断の材料は、当時の3か月データ（表示がほぼ0）だった。<strong>16か月の旧URLの実績を含めると、サイトのクリックの12.5%を持つ</strong>。

| 記事 | 16か月の表示/クリック | 内訳 | 当時の状態（解除は§8） |
|---|---|---|---|
| 加湿器（旧URL `/posts/soundproof-room-humidifier-guide/` → `bouon-humidifier-comparison`） | 425 / 53 | **サイト全体で最大のクリック源**。クエリ「防音室 加湿器」は227表示・23クリック・6.47位 | 転送先がnoindex。中身は7月に「配信ブースの結露」へ変えた |
| `rental-proofroom-contractcheck`（退去時費用） | 1,592 / 34 | 順位11.5位。10/13にリライト済み | noindex |
| `diy-vocal-soundproof-mask`（防音マスク） | 160 / 22 | 「防音マスク ゲーム 自作」だけでクリック7 | noindex |
| `sendai-soundproof-rental-guide` | 76 / 10 | 仙台の防音賃貸 | noindex（9/5の解除対象から外れた記事） |
| `soundproof-culture-japan-vs-america` | 450 / 8 | 3.9位。10/13にリライト済み | noindex |
| 合計 | 2,703 / 127 | サイト全体のクリック1,018の12.5% | |

- noindexのページに転送しているため、旧URLの評価を、転送先に引き継ぎにくい（転送先がインデックスされないと、旧URLの表示も落ちていく）
- 「配信者」の整理とは別の論点。ただし、配信系で最もクリックが出た記事（防音マスク）と、サイト最大のクリック源（加湿器）が含まれる

### 加湿器の選択肢

| 案 | 内容 | 利点 | 注意 |
|---|---|---|---|
| (a) 301の転送先を変える | `/posts/soundproof-room-humidifier-guide/` の転送先を `soundproof-room/proofroom-humidity-airconditionlist` にする。10/13に、加湿の要否・温湿度計・結露の時期を加筆済み（W-27） | 新しい記事を作らずに、すぐできる | 「防音室 加湿器」の比較・選び方の要素は、W-27の加筆だけでは薄い |
| (b) noindexを解除して書き直す | `bouon-humidifier-comparison` のnoindexを外し、配信ブース限定から「防音室の加湿器の選び方」へ戻す | 最大のクリック源の検索意図に、直接答えられる | 書き直しが必要。サイトマップの除外も外す |

(b) を推奨。(a) は、(b) の書き直しが終わるまでの暫定にもできる。

## 7. トップのハブカード「配信・楽器・在宅の音漏れ」

- カード（`src/data/hubClusters.ts` の `sound-leak`）は、対象を「配信者・楽器演奏者・在宅ワーカー」とし、ボタンは `/ja/creator/`（配信・クリエイターのカテゴリ一覧）に直結する
- `hub: sound-leak` を持つ記事は4本。配信者向け2本（`streamer-soundproof-room-comprehensive-guide`、`one-room-streaming-soundproof`）、楽器1本（`guitar-apartment-practice-guide`）、在宅1本（`remote-work-family-harmony-soundproof`）。後ろの2本は `soundproof-rental/` の記事で、ボタンの先（`/ja/creator/`）には載らない
- つまり、カードの約束（楽器・在宅）と、ボタンの先（配信者の記事のみ）が合っていない。しかも、カード所属の配信者向け1本（`one-room-streaming-soundproof`）は未登録
- T-25で打鍵音・鍵盤音・打楽器の入口ができると、楽器の記事が増える。カードの中身とリンク先の見直しは、入口カード再設計の要件定義（T-21）と一緒に行うのが自然
- 先に決めること: ボタンの先を `/ja/creator/` のままにするか、音の発生源のハブ記事（T-25のW5）にするか

## 8. 判断と実施状況（2026-10-13）

| # | 論点 | 決定 | 状態 |
|---|---|---|---|
| 1 | noindexの5本（§6）を解除するか | ユーザー承認。加湿器・退去時費用・防音マスク・日米管理規約の4本を解除。<strong>仙台の1本は、出典不明の主張が多いため解除せず</strong>（T-28） | 実施済み |
| 2 | 加湿器の301 | (b) noindex解除と書き直し。汎用の「防音室の加湿器の選び方」に書き直した | 実施済み |
| 3 | W-28を「11本＋8本」に分ける案（§4） | ユーザー承認。W-28に反映 | 記録済み。作り直しは未着手 |
| 4 | 配信系の旧URLの転送先（§5）。登録済みの受け皿に向ける5本 | ユーザー承認 | 実施済み。作り直しを待つ3本（キーボード・ASMR×2）と、要確認の1本は未実施 |
| 5 | チェロ記事の統合 | ユーザーが個別に対応 | T-27に登録 |
| 6 | 統合候補の実行時期 | ユーザー判断で、11/16の判定を待たず2026-10-13に実行。8本を統合し、`horror-game-scream-soundproof-mic`は統合せず残す | 実施済み（§10） |
| 7 | ハブカード（§7）をT-21の中で扱うか | 未決 | 回答待ち |

## 9. 実施した変更（2026-10-13）

- **noindex解除4本**: `bouon-humidifier-comparison`・`rental-proofroom-contractcheck`・`diy-vocal-soundproof-mask`・`soundproof-culture-japan-vs-america`の`noindex: true`を削除し、`astro.config.mjs`のサイトマップ除外からも外した。ビルドで、サイトマップに4本が入り、仙台だけが除外されていることを確認
- **加湿器の書き直し**: 配信ブース限定から汎用へ。容積から必要な水分量を試算し（5m³で約17g。加湿器の出力は1時間に数百mL）、方式の比較・選び方・置き場所を整理。機種はシャープ公式の仕様比較表とダイニチの掲載で確認できたもののみ
- **防音マスク記事**: 出典のないdB値を「相対評価」に直した
- **旧URL5本の転送先**: `public/.htaccess`・`astro.config.mjs`を同時に変更（§5の「登録済みの受け皿に向ける5本」）。ビルドで、転送先が意図どおりであることを確認
- **記録**: `weekly-task.md` W-28（見直し）・W-31（効果測定）、`task-list.md` T-27（チェロ）・T-28（仙台）
- 変えていないもの: 10/11の確定事項（配信者を受け皿にしない、足音・床衝撃は含めない、入口は音の発生源）、画像生成（実行していない）

### 要確認：アフィリエイトカード `humidifier-vaporizer-daikin`

`src/data/affiliates.ts`のこのカードは、商品名が「ダイキン 気化式加湿器 MCK70Y」で、「防音室の密閉空間に最適」と説明している。MCK70Yは、検索で確認できた範囲では、加湿ストリーマ空気清浄機（加湿は最大700mL/h・最大19畳）で、約5m³の防音室には加湿量が大きすぎる。カードの商品と説明の見直しは、ユーザー判断（今回はデータを変更していない。加湿器の記事からは外した）。

## 10. 統合の実施（2026-10-13、ユーザー承認）

§3の統合候補のうち、次の8本を統合した（旧記事を削除し、301に切り替え、被リンクを付け替え）。`horror-game-scream-soundproof-mic`は、`game-streamer-sound-types`を音の種類の振り分け記事にする方針と合わせて、<strong>統合せず残す</strong>ことにした（登録済み・20.8位）。

| 廃止した記事 | 統合先 | 吸収した内容 | 落とした内容 |
|---|---|---|---|
| `soundproof-rental-vs-diy-streamer` | `streamer-rental-selection-guide` | 賃貸かDIYかの判断基準（比較表と状況別の目安） | 5年間コスト試算（出典なし） |
| `streamer-rental-preview-checklist` | 同上 | 内見チェックリストを1つの表に統合（既存の壊れた強調記法も解消） | D値の等級表（物件のD値の目安は別記事へリンク）、搬入経路の数値（出典なし） |
| `streamer-soundproof-budget-roadmap` | `streamer-soundproof-room-comprehensive-guide` | 「次の段階に進む条件」の表 | Dr値×費用表、機種の価格帯（根拠なし） |
| `streamer-soundproof-timing` | `vtuber-soundproof-environment-complete-guide` | 購入タイミングを判断する3つの指標 | 月収別の目安表（出典なし。回収期間は「本サイトの目安」と明記） |
| `streamer-soundproof-rental-share` | `money/soundproof-room-rental-cost` | 時間貸し・コワーキング・月額シェアの3形態（数値なし） | 「ヤマハ・カワイ月額1.5〜5万円」など（音レント公式と不一致） |
| `kominka-renovation-streaming-room` | `streamer-regional-studio-move`（題を「地方移住・古民家」に拡張） | 古民家の落とし穴3つ（気密・床の耐荷重・換気）と窓の補助金 | 費用シミュレーション（裏取り不可） |
| `dance-fitness-streamer-soundproof` | `diy/treadmill-apartment-soundproofing-layering` | 軽量／重量床衝撃音の違い、動き方、部屋選び | 「最上階なら階下への配慮が不要」（誤り。訂正して反映） |
| `utaite-vs-streamer-soundproof` | `singer-instrumentalist-stream-soundproof`（題を拡張） | 歌い手・宅録とゲーム配信の基準の違い、吸音の強さ | 吸音の面積比の数値、特定ソフト名 |

- 廃止した8本のうち、7本は「クロール済み - インデックス未登録」、1本（ダンス）は登録の記録なし。順位を失うリスクはなかった
- 既存の旧URLの転送4本（`/posts/bourenatal-naikencheck/`・`/posts/streamer-lowbudget-simula/`・`/ja/creator/streamer-soundproof-evolution-story/`・`/ja/column/others/kominka-renovation-streaming-room/`）は、二重の301にならないよう、最終の統合先に付け替えた。前の2本（96表示・85表示）は、登録済みの賃貸選びガイドと総合ガイドに向かう
- 統合先に残る課題: `vtuber-soundproof-environment-complete-guide`の「税金負担を30%程度軽減」「5年後40〜50%で売却」などの出典。W-28の作り直しで確認する
- 柱2本の出典の修正（2026-10-13、P1の残り。順位・構成は変えていない）:
  - `streamer-rental-selection-guide`: 都市別の家賃表（出典なし）を、ミュージション1Kの掲載家賃（本サイト調査2026-06-24、26棟）の首都圏クラスタ表に置き換え。LEOPALACE21・ビレッジハウス（「UR賃貸系」は誤り）を外し、ミュージション・ラシクラス・音楽マンションの表に。出典のない3つの「事例」は「想定ケース」の表に。上り速度「5Mbps必須」は、確認できず削除
  - `streamer-soundproof-room-comprehensive-guide`: 節税の計算ミスを訂正（100−60−6.7は実質約33万円であり、約6.7万円ではない）。少額減価償却資産の特例は、国税庁の案内に合わせて40万円未満（2026-04-01以降の取得）に更新。OTODASUは「Dr-15程度」「約12万円」（島村楽器の販売ページ）に直した。「窓から50〜70%」「苦情リスクゼロ」「物的証拠」などの断定を削除
  - 確認できなかったもの: YouTube公式のビットレート表（取得結果が検索要約と食い違ったため数値は載せていない）、防音室の耐用年数の区分（税理士確認を促す書き方にした）

## 11. 方針の縮小：「1本ずつ作り直す」から「近い話題を統合して作り直す」へ（2026-10-13、ユーザー承認。実施状況は§12）

ユーザー判断（2026-10-13）: 配信者の記事はもともとの需要が高くない。分散している似た話題を統合して再構築するくらいでよい。§4の「作り直す11本」を1本ずつ作り直す計画は、これで置き換える案。`creator/` は現在36本。

### 統合の案（9グループ、36本 → 26本）

| # | 統合後の疑問 | 土台にする記事 | 吸収して301にする記事 | 土台の根拠 |
|---|---|---|---|---|
| 1 | ワンルームで夜に配信する。声はどこまで漏れ、何をすればいいか | one-room-streaming-soundproof | voice-chat-soundleak-fix、night-streaming-neighbor-tips | 旧URL含め238表示。ハブカード所属。他の2本は28表示と0表示で疑問が重なる |
| 2 | マイクにノイズが入る。PC本体・反響・部屋のどれが原因か | streaming-pc-fan-noise-mic | streaming-mic-noise-room | 68表示（ファン音）。反響はBingの束に答える節にする |
| 3 | 同居人（親・子ども）を起こさずに配信する | parenting-streamer-soundproof | sleeping-parent-game-streaming-guide | 疑問は「同居人の睡眠・生活を妨げない」で共通 |
| 4 | 身バレ・親フラを防ぐ | female-streamer-privacy-soundproof | vtuber-family-privacy-rules | 土台は登録済み。後者は旧URL経由155表示なので、現行URLの登録状態を確認してから決める |
| 5 | ASMR収録の部屋とブース | asmr-external-noise-elimination | asmr-vtuber-booth-guide | 旧URL4本（約360表示・約24クリック）の受け皿を1本にする |
| 6 | 2人以上で収録・配信する部屋と音 | collab-streaming-soundproof-space | podcast-collab-recording-acoustics | どちらも0〜2表示で、疑問が同じ |
| 7 | 配信者の賃貸選び（物件・回線・電源・住み心地） | streamer-rental-selection-guide（登録済みの柱） | bourentakl-streamer-settingsetubi、soundproof-rental-life-streamer | 18,000字の回線・電源は節に絞る。住み心地は体験の節に |
| 8 | 防音室を買う判断（資金・節税・設計） | streamer-soundproof-room-comprehensive-guide（登録済みの柱） | vtuber-soundproof-environment-complete-guide | 「完全ガイド」が2本ある状態をやめる。旧URL含め128表示を引き継ぐ |
| 9 | 地方・広い物件で配信部屋を作る | farmland-prefab-streaming-room-legal（95表示・登録済み） | streamer-regional-studio-move | 古民家・地方は農地と同じ「広い物件」の疑問 |

### 統合しない記事（判断済み・または登録済みで固有）

gaming-floor-impact-noise-fix、game-streamer-sound-types（振り分け記事に変更）、horror-game-scream-soundproof-mic、streamer-noise-quick-fix、streamer-noise-complaint-response、streamer-pet-noise-balance、family-home-soundproof-reno-negotiation、young-streamer-smartphone-monetization-roadmap、streaming-audio-first-low-budget、singer-instrumentalist-stream-soundproof、streaming-room-layout-guide、ブース運用3本（cramped-booth-gaming-chair-health・soundproof-booth-food-odor-management・soundproof-booth-cable-management）

- ブース運用3本は「防音ブースの困りごと」に統合する案もあるが、登録済みで表示が出ているため、今回は対象外
- 統合後は、W-28の対象が「11本の作り直し」から「統合後の土台9本の作り直し」になる

### 進め方（承認後）

1. 1グループずつ、土台に吸収する内容を決める（出典のない数値は §10 と同じく落とす）
2. 旧記事を削除し、`public/.htaccess` と `astro.config.mjs` を同時に301へ。被リンクを付け替え、二重の301が無いことを確認
3. グループ4・9は、現行URLの登録状態を確認してから実施
4. 優先順: グループ1 → 2 → 8 → 7 → 5 → 3 → 6 → 9 → 4
5. 実施後に W-28 を書き換える

### 判断してほしいこと

- 9グループの組み合わせでよいか（特に 7・8 は登録済みの柱に吸収するので、柱が長くなる）
- 実施は一度にまとめるか、グループ1・2・8から先に進めるか

## 12. 統合・第2弾の実施（グループ1・2・8、2026-10-13）

§11のうち、グループ1・2・8を実施した。旧記事4本を削除し、301に切り替え、被リンクを付け替えた。効果測定は `weekly-task.md` W-33。

| グループ | 土台 | 廃止した記事 | 吸収した内容 | 落とした内容 |
|---|---|---|---|---|
| 1 | `one-room-streaming-soundproof`（題を「夜の声漏れと隣人の壁ドンを防ぐ」に拡張） | `voice-chat-soundleak-fix`、`night-streaming-neighbor-tips` | 夜の声量ルール、ジャンル別の声のピーク表、家族への声漏れ（ドア内側の遮音カーテン）、状況別の最初の一手、管理会社への事前申告の例文、簡易ブース・防音賃貸への次の手 | ボイチャの声量「70〜80dB」、環境省の夜間基準の引用（環境基準を近隣苦情の基準として使うのは不正確）、吸音パネルや簡易ブースの価格（出典なし） |
| 2 | `streaming-pc-fan-noise-mic`（題を「ファン音・反響・外音の切り分けと直し方」に拡張） | `streaming-mic-noise-room` | 原因3種類の切り分け表と見分け方、吸音から始める理由、吸音パネルの配置表、予算別プラン、遮音が必要になる判断基準 | 「厚手10mm以上」の目安、「視聴者から音質が上がったと言われる水準」、内窓の費用「5万円〜」 |
| 8 | `streamer-soundproof-room-comprehensive-guide`（段階3の節を拡張） | `vtuber-soundproof-environment-complete-guide` | 購入タイミングの3指標と「今じゃない／今が買い時」の表、コラボ収録の広さ、PC本体を室外に置く方法、床の振動対策、売却の考え方（買取ガイドへ） | 「30万円台の中堅モデル」のSNSトレンド、「5年後40〜50%で売却」「税金負担を30%程度軽減」「約2.4年で有利」（いずれも出典なし。総合ガイドの検算済みの計算に置き換え）、配信タイプ別の最大音量dB |

- 転送の付け替え: 旧URLの転送5本（`/ja/soundproof-room/knowledge/vtuber-soundproof-environment-complete-guide/`・`/posts/vtuber-soundproof-environment-complete-guide/`・`/ja/creator/streamer-discord-noise-cancel-vs-physical/`・`/posts/gamesteram-proofroom-soudflash/`・`/ja/use-case/streaming-mic-soundproof-guide/`）と、先の統合の `/ja/creator/streamer-soundproof-timing/` を、最終の統合先に向け直した（二重の301なし）
- 被リンク: 12記事（creator 9本・knowledge 3本）の旧URLへのリンクを、統合先のURLと題に付け替えた。サイト内の旧URLへのリンクは0（ビルド後の `dist` で確認）
- その他: `public/llms.txt` から旧ガイドの行を削除、`interlink-postlist.md`・`interlink-tag-clusters.md` を再生成
- 確認: `pnpm build` 成功。旧4URLはサイトマップに無く、転送先は意図どおり
- 次: グループ7（賃貸選び）→ 5 → 3 → 6 → 9 → 4（`task-list.md` T-26の表）

## 13. 統合・第3弾の実施（グループ7・5・3・6・9・4、2026-10-13）

§11の残り6グループを実施した（ユーザー承認の「計画どおり」）。旧記事8本を削除し、301に切り替え、被リンクを付け替えた。これで9グループが完了し、`creator/` は36本から26本になった。効果測定は `weekly-task.md` W-34。

| グループ | 土台 | 廃止した記事 | 吸収した内容 | 落とした内容 |
|---|---|---|---|---|
| 7 | `streamer-rental-selection-guide`（題に「回線・電源」を追加） | `bourentakl-streamer-settingsetubi`（19,000字）、`soundproof-rental-life-streamer` | 回線の配線方式と共用の確認表、電源の回路容量（1回路1,500W）と口数、UPS、電気代の計算式、近隣の配信者との音の干渉、防音賃貸のデメリットと探し方のコツ | 仮名の体験談の数字（「月収1.5倍」「287件」「待機6,000人」。検証不能）、回線速度の機種別表・事業者の速度、機材別の消費電力表、D値別の遮断量dB、収益化・経費計上の節 |
| 5 | `asmr-external-noise-elimination`（題を「ASMR収録の部屋づくり｜外音の消し方と防音ブースの選び方」に拡張） | `asmr-vtuber-booth-guide` | ブースのクラス分け（簡易／標準／高遮音）、ブース自身の騒音（換気扇・床・熱と配線）、接続経路のノイズ（インターフェース・XLR・ゲイン）、購入とレンタルの考え方 | 機種別の価格・Dr値（出典なし）、「5dB以下のファン」、レンタル「月額3万円程度」、「登録者が飛躍的に伸びた」 |
| 3 | `parenting-streamer-soundproof`（題を「同居人がいる家で配信する」に拡張） | `sleeping-parent-game-streaming-guide`（9/18公開） | 寝室との位置関係、壁を叩く体感診断、声量以外の音、家族との話し合い方、時間帯の見直し | 「日本の木造は音が響く」の断定 |
| 6 | `collab-streaming-soundproof-space`（題を「2人以上の収録・コラボ配信」に拡張） | `podcast-collab-recording-acoustics` | マイクの本数（1本共有／1人1本）、距離と角度、チャンネル管理、マイクブリード、マルチトラック収録 | 防音室サイズ別の価格・内寸（出典なし）、「D-50以上」の断定 |
| 9 | `farmland-prefab-streaming-room-legal`（題に「古民家・地方移住の選択肢」を追加。農地の語は残した） | `streamer-regional-studio-move`（古民家を吸収済み） | 回線の確認、古民家の落とし穴3つ（隙間・床の耐荷重・換気）、窓の補助金、移住の手順 | 家賃の比較表、5年間の費用シミュレーション（編集上の試算で出典なし） |
| 4 | `female-streamer-privacy-soundproof`（題を「配信者の身バレ・親フラ対策」に拡張。カバー画像を旧記事から移した） | `vtuber-family-privacy-rules` | 親フラ防止（鍵・目印・家族との取り決め）、ドアの隙間と家具、深夜の小声の機材面の工夫、環境音からの特定 | 「音漏れは3割減る」、「男性の低い声は遠くまで届く」（根拠なし） |

- 転送: 旧URLの転送先（`/posts/bourentakl-streamer-settingsetubi/`・`/posts/vtuber-rental-apartment-guide/`・`/posts/bourental-musicacespt-choice/`・`/ja/solutions/...`・`/ja/soundproof-rental/knowledge/...` など10本以上）を最終の統合先に向け直した。二重の301なし
- 被リンク: 旧URLへのリンクを統合先に付け替え（`dist` で旧URLへのリンクは0）。`soundproof-rental-cost-performance-guide` の文は、体験談の削除に合わせて「物件選び（回線・電源・内見）」に書き換えた。総合ガイドのASMR節の重複するSmartLinkを1本にした
- その他: `interlink-postlist.md`・`interlink-tag-clusters.md` を再生成。`pnpm build` 成功。旧URLはサイトマップに無く、転送先は意図どおり
- グループ9・4の登録状態の確認（2026-10-12のエクスポート）: 土台（農地・女性配信者）は10/6の登録済み。吸収側の `streamer-regional-studio-move` は未登録、`vtuber-family-privacy-rules` は未登録の一覧にも登録済みにも載っていない。順位を失うリスクは小さいと判断した
- 判断した点: 仮名の体験談（`soundproof-rental-life-streamer`）は、数字が検証できないため、吸収せず削除した
- 次: デプロイ後の再クロール申請（W-34）。個別に残る作り直しは `game-streamer-sound-types`（振り分け記事への役割変更。T-25と調整）。ブース運用3本（チェア・匂い・配線）は今回対象外のまま
