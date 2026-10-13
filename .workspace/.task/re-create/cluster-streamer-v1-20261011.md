> **旧版（2026-10-11）の保存。** 現行の案は [cluster-streamer.md](./cluster-streamer.md)（2026-10-13の再考）。

# 配信者クラスタの再設計（案）

作成: 2026-10-11 / 状態: 案（クエリ未取得。段階の割り当ては記事タイトルからの仮置き）

## 方針（ユーザー指示 2026-10-11）

配信者向けの記事は「何本を何本に統合するか」ではなく、**読者の段階**で分けて考える。

| 段階 | 読者の状態 | 検索流入への期待 | 扱い |
|---|---|---|---|
| S1 これから始める | 配信を始める前後。部屋・賃貸・予算・近所への配慮が未決 | **高い**（検索で答えを探す層） | 最優先で作り込む |
| S2 機材・環境に不満 | 配信中。マイクのノイズ、音漏れ、苦情、台パンなど具体の困りごと | **次に高い** | S1の次に着手 |
| S3 すでに安定 | 環境が整っている。買い替え・節税・スタジオ・発信の拡張 | 低い（検索より指名・SNS経由） | 統合・縮小・現状維持の候補 |

これまでの「13本→1本」「5本→1本」の統合案は取り下げ、`priority-list.md` と各 `batch-NN.md` の該当18本を「配信者クラスタ再設計待ち」に変更した。再設計が終わるまで、該当記事の統合・排除・301は実施しない。

## 決定事項（2026-10-11、ユーザー判断）

- 入口は**3〜4本に絞る**：①防音室を検討する、②賃貸・マンション・アパートで防音する、③DIY・低予算、④苦情・ノイズ（後回し可）。根拠は `../query-check/analysis_配信-3シード.md`
- 「配信 マイク」系は、**音に関する話題は範囲に入れる**（「配信 マイク 音質」を取得）。機材選び（おすすめ・ブランド）は範囲外
- S2・S3の裏付け、統合・縮小・排除の判断は**実データ（Bing・GSC）で行う**。取得手順は `../query-check/next-data-request.md`
- 実データが入るまで、配信者クラスタの統合・排除・301は実施しない
- **入口を確定（2026-10-11）**：配信者を受け皿にせず、音の発生源で受ける（キーボード打鍵音／ピアノの鍵盤音／打楽器の音。台パンは橋渡し）。配信者向けの「防音室を検討／住居／DIY」は入口にしない（確定）。足音・床衝撃は賃�常クラスタで扱い含めない。設計は [entrance-design.md](./entrance-design.md)、作業は `task-list.md` の T-24〜T-26
- 実データの分析は `../query-check/analysis_実データ.md`（2026-10-11）。入口候補に「配信部屋・レイアウト」と、S2の中核「キーボード打鍵音」「台パン」が加わった。配信系の旧URL（キーボード記事ほか）がカテゴリ一覧へ301されている問題あり

## 対象範囲

`re-create/` の対象（lastmod 2026-08以前）は18本だけだが、配信者系は `creator/` 配下を中心に**約50本**ある。再設計は、2026-09に追加された記事も含めて行う。

## なぜクエリが先か

手元のGSCクエリでは、配信者系は33件、3か月の表示が合計25回ほど（W40の3か月累計）。順位は19〜75位で、段階を分けるには少なすぎる。記事タイトルだけで統合・排除を決めると、需要のある言い回しを捨てる恐れがある。

## 取得するクエリ

実データの取得に先立ち、検索ワードの予想を作る。設計は [cluster-streamer-query-design.md](./cluster-streamer-query-design.md)。
取得済みのサジェスト分析は `../query-check/`（`analysis_防音室-配信者.md`、`analysis_配信-3シード.md`）。入口を3〜4本に絞る案を含む。

| 取得元 | 見るもの | 目的 |
|---|---|---|
| Bing Webmaster Tools | 検索ワード（主力の流入元）。配信者系ページ別 | 実際に入ってきている言い回し。W42で案Iとして起票済み |
| Search Console | 直近16か月、ページ＝`/ja/creator/`で絞ったクエリ | 順位が低くても出ているクエリの拾い上げ |
| サジェスト／キーワードプランナー | 「配信 防音」「配信部屋」「ゲーム実況 防音」「配信 賃貸」などの共起語 | まだ記事が拾えていない需要 |
| GA4 | `creator/`のLP別セッション・エンゲージメント | 読まれ方（到達後に離脱していないか） |

出力は、クエリ1行ごとに「段階（S1/S2/S3）」「表示」「順位」「現在の着地記事」を付けた表にする。

## 記事の段階割り当て（仮）

タイトルからの仮置き。クエリを取得したあとに見直す。★は`re-create/`対象（再設計待ち）。

### S1 これから始める

| 記事 | lastmod | 備考 |
|---|---|---|
| creator/streamer-soundproof-room-comprehensive-guide ★ | 2026-07-05 | 入口候補。GA4 5セッション（W40〜42）、被リンク8、ハブ掲載 |
| creator/streamer-rental-selection-guide ★ | 2026-07-10 | 賃貸の入口候補。GA4 12セッション、被リンク9 |
| creator/one-room-streaming-soundproof | 2026-09-06 | ワンルーム。1万円以下の対策 |
| creator/streamer-soundproof-budget-roadmap | 2026-09-06 | 予算別ロードマップ |
| creator/streamer-soundproof-timing | 2026-09-05 | 防音室を買うタイミング（S1の終盤） |
| creator/streamer-noise-quick-fix | 2026-09-06 | 防音より先の対策 |
| creator/streaming-audio-first-low-budget ★ | 2026-06-24 | 初心者の音質優先順位 |
| creator/young-streamer-smartphone-monetization-roadmap ★ | 2026-06-24 | 順位6位（W42）、3か月表示47 |
| creator/night-streaming-neighbor-tips | 2026-09-06 | 深夜配信と近隣 |
| creator/voice-chat-soundleak-fix | 2026-09-06 | GA4 4セッション |
| creator/sleeping-parent-game-streaming-guide | 2026-09-18 | 実家暮らし |
| creator/family-home-soundproof-reno-negotiation | 2026-09-06 | 実家暮らし、順位9.0（W42） |
| creator/parenting-streamer-soundproof | 2026-09-05 | 同居人・子育て |
| creator/streamer-rental-preview-checklist ★ | 2026-06-05 | 内見チェックリスト |
| creator/soundproof-rental-vs-diy-streamer ★ | 2026-06-05 | 賃貸かDIYかの判断 |
| creator/bourentakl-streamer-settingsetubi ★ | 2026-07-10 | 賃貸の設備条件 |
| creator/streamer-soundproof-rental-share | 2026-09-05 | レンタル・シェア比較。GA4 2セッション |
| creator/streamer-regional-studio-move ★ | 2026-06-05 | 地方移住（S1後半〜S3の境界） |

### S2 機材・環境に不満

| 記事 | lastmod | 備考 |
|---|---|---|
| creator/gaming-floor-impact-noise-fix | 2026-07-10 | 台パン。3か月表示36、順位6.8（W42）。P1 |
| creator/game-streamer-sound-types ★ | 2026-06-05 | 打鍵音・マウス音・叫び声 |
| creator/streaming-mic-noise-room | 2026-09-05 | マイクの音割れ・ノイズ |
| creator/streaming-pc-fan-noise-mic | 2026-09-05 | PCファン音 |
| diy/gamer-acoustic-placement | 2026-09-06 | 吸音材の貼る位置。GA4 5セッション |
| creator/streamer-noise-complaint-response ★ | 2026-07-10 | 苦情対応。順位14.5（W42） |
| creator/streamer-pet-noise-balance ★ | 2026-06-12 | ペットの鳴き声 |
| creator/horror-game-scream-soundproof-mic ★ | 2026-07-05 | 叫び声 |
| creator/dance-fitness-streamer-soundproof ★ | 2026-06-12 | 足音・ジャンプ音 |
| creator/cramped-booth-gaming-chair-health | 2026-09-06 | 狭小ブース |
| creator/soundproof-booth-food-odor-management | 2026-09-06 | ブース内の匂い |
| creator/soundproof-booth-cable-management | 2026-10-10 | 配線（公開直後） |
| diy/diy-refrigeration-noise-reduction ★ | 2026-06-24 | 冷蔵庫・換気扇 |
| soundproof-room/bouon-humidifier-comparison ★ | 2026-07-21 | 加湿器（配信者限定でない） |
| diy/diy-vocal-soundproof-mask ★ | 2026-07-21 | 防音マスク |

### S3 すでに安定

| 記事 | lastmod | 備考 |
|---|---|---|
| creator/vtuber-soundproof-environment-complete-guide ★ | 2026-07-05 | 買い時・D値・節税 |
| creator/asmr-vtuber-booth-guide | 2026-09-06 | ブース選び |
| business/report-japan-asmr-vtuber-streaming-studio-standard ★ | 2026-07-02 | 技術解説 |
| business/shared-streaming-studio-growth-pricing-utilization | 2026-09-05 | 市場データ |
| creator/asmr-external-noise-elimination | 2026-09-05 | ASMR |
| creator/collab-streaming-soundproof-space | 2026-09-05 | 2人配信 |
| creator/podcast-collab-recording-acoustics | 2026-09-05 | ポッドキャスト |
| creator/singer-instrumentalist-stream-soundproof | 2026-09-05 | 弾き語り |
| creator/utaite-vs-streamer-soundproof | 2026-09-05 | 歌い手と配信の違い |
| creator/female-streamer-privacy-soundproof | 2026-09-06 | 身バレ対策 |
| creator/vtuber-family-privacy-rules | 2026-09-06 | 親フラ対策 |
| creator/kominka-renovation-streaming-room | 2026-09-05 | 古民家リノベ |
| creator/farmland-prefab-streaming-room-legal | 2026-09-05 | 休耕地プレハブ。順位10.3（W42） |
| money/streamer-tax-strategy | 2026-09-06 | 経費 |
| soundproof-rental/owner-renovation-shibuya-shinjuku-vtuber-strategy | 2026-09-06 | オーナー向け（読者が配信者ではない） |
| creator/streaming-room-layout-guide ★ | 2026-02-28 | レイアウト |
| creator/soundproof-rental-life-streamer ★ | 2026-02-28 | 体験談 |

## 作業の流れ（案）

1. クエリを取得する（上の表）。Bing Webmaster Toolsの検索ワードを最初に取る。
2. クエリに段階（S1/S2/S3）を付け、表示・順位・現在の着地記事と並べる。
3. 記事の段階割り当てを確定する。S1・S2は「需要のあるクエリに答える1記事」を決め、重複する記事は統合先を決める。
4. S3は、需要がなければ統合・縮小・現状維持を判断する。
5. 判断を `batch-NN.md` の方針欄と、このファイルに反映する。実施時は、301、サイトマップ、内部リンクを同時に確認する（`README.md`のルール）。

## 判断が必要な点

- 記事の段階割り当てで、迷う記事が多い（地方移住、実家暮らし、買い時など）。クエリの言い回し（「始め方」「うるさい」「買い替え」など）で決める。
- 配信者向けでない記事（加湿器、冷蔵庫、防音マスク、オーナー向けリノベ）は、配信者クラスタに入れず、別のクラスタに移す選択肢がある。
