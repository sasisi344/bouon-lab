# task-list-30

- **完了日**: 2026-10-17
- **概要**: T-26 配信者向け記事の方針決定を完了扱いで閉じた。9グループの統合（`creator/` 36本→26本、2026-10-13）と、`creator/`の事実確認（2026年10月時点。建築確認の10平米ルール・農地法の罰則・だんぼっち/OTODASUの現行価格・ペット記事の再構成）を実施済み
- 閉じた時点で未チェックのまま残った項目（`remaining.md`の方針欄、19本の「答える疑問」の1行化、統合・301の判断）は、必要になったら新しいT-NNで起票する。効果測定はS-11・S-12（旧W-28・W-32〜W-34）で継続
- 残り: `soundproof-room/shimamura-music-soundproof-room-guide`の「Dr-15程度」（OTODASU）は未修正

### T-26 配信者向け記事の方針を決める（2026-10-11 追加）

> 2026-10-13: 配信者クラスタを「疑問の型」で再考した案が `archive/re-create-docs-20261013/cluster-streamer.md`（旧版は `cluster-streamer-v1-20261011.md`）。W-28の19本を「11本＋8本」に分ける案、配信系の旧URLの転送先、noindex5本の再評価（クリックの12.5%）を含む。ユーザー判断待ちは同ファイルの§8。**2026-10-13に、統合候補の8本を実行**（§10。`horror-game-scream-soundproof-mic`は統合せず残す）。効果測定はS-11・S-12（旧W-32）。

`re-create/remaining.md` §2の配信者クラスタ（19本。2026-10-13にbatch-01〜08から統合）と、2026-09以降に公開した`creator/`配下の記事について、入口確定（T-25）を受けて、残す／統合／縮小を決める。

- [ ] 方針の読み: 配信者向けの需要は一般のクラスタ（防音室の価格、防音賃貸、DIY防音）が受ける。配信者向け記事は、読者別の変種として残すか、一般の記事に統合する。個別の判断はユーザーが`remaining.md`の「方針」欄に書く
- [ ] 実績があり残す記事（16か月）: `diy/diy-vocal-soundproof-mask`（22クリック）、`creator/one-room-streaming-soundproof`、`creator/vtuber-family-privacy-rules`、`creator/farmland-prefab-streaming-room-legal`、`creator/gaming-floor-impact-noise-fix`、`creator/streaming-pc-fan-noise-mic`
- [ ] 2026-09以降に公開した記事は、公開から4週間以上たってから判断する
- [ ] 統合・排除・301は、`bouon-internal-link-ops`で被リンクを確認し、301と`astro.config.mjs`を同時に変更する。`re-create/README.md`のルールに従う
- 参考: Bingのページ別の表（どの記事に着地したか）は未取得。取得できれば、方針決定の材料になる
- [x] 2026-10-17 `creator/`の事実確認（2026年10月時点）: `farmland-prefab-streaming-room-legal`（建築確認の10平米ルールは増築等のみ・2025年4月改正、農地法の罰則を拘禁刑に）、`streamer-soundproof-room-comprehensive-guide`（だんぼっち・OTODASUを公式の現行価格に）、`streamer-pet-noise-balance`（配信場所別に再構成: 防音室で配信→遮光ケージカバー`pet-cage-cover-astrazen`、リビング→ペット防音室`pet-soundproof-room-luminairelife`、ペット出演のライブ→周囲への配慮。20万円台の`soundproof-cage-cover-k4`カードは外し、登録は残置）を修正し`lastmod`更新。`affiliates.ts`のだんぼっち2件の価格を更新し、ペット用2件を新規登録。残り: `soundproof-room/shimamura-music-soundproof-room-guide`の「Dr-15程度」（creator外のため未修正）

**優先方針（2026-10-13、ユーザー判断）**: 再構築は`creator/`を最優先にする。初期に作った記事で、設計と内容が噛み合っていない。**インデックス未登録（クロール済み）のものだけ**を優先して作り直す（登録済みは後回し）。未登録は`.workspace/.data-set/seo-check/index-none/表.csv`（2026-10-13取込）の19本。slugは変えない。統合・排除・301は、上の実データ後の判断のまま実施しない。

- 対象19本（16か月の表示順。GSC `ページ.csv`）: `streaming-pc-fan-noise-mic`（68）、`voice-chat-soundleak-fix`（28）、`soundproof-rental-life-streamer`（13）、`parenting-streamer-soundproof`（12）、`asmr-external-noise-elimination`（10）、`streamer-regional-studio-move`（8）、`asmr-vtuber-booth-guide`（5）、`one-room-streaming-soundproof`（4）、`vtuber-soundproof-environment-complete-guide`（4）、`streamer-soundproof-budget-roadmap`（4）、`soundproof-rental-vs-diy-streamer`（2）、`streamer-soundproof-rental-share`（2）、`game-streamer-sound-types`（2）、`kominka-renovation-streaming-room`（1）、`streamer-rental-preview-checklist`（1）、`utaite-vs-streamer-soundproof`（1）、`streamer-soundproof-timing`（0）、`streaming-mic-noise-room`（0）、`bourentakl-streamer-settingsetubi`（0、18,000字）
- 見立て（未検証）: 9/5〜9/6に加筆した記事も未登録のまま。長さ・被リンク（2〜5本）では登録済みと差がなく、公開時期（2026年1〜6月）とテーマの広さで分かれている。7月公開の「一つの疑問に答える」型は27本すべて登録済み
- [ ] 19本を、1本ごとに「どの疑問に答える記事か」を1行で決める（答えが1つに絞れない記事は、疑問を絞って構成を作り直す）。T-25の入口（打鍵音・鍵盤音・打楽器）とぶつかるものは役割分担を決める（`streaming-mic-noise-room`・`game-streamer-sound-types`・`streaming-pc-fan-noise-mic` など）
- [ ] 最終クロールが9/26より前の記事は、再クロールが済むまで評価できない。再申請は作り直した後に限る（作り直し前は行わない）。進捗と確認はS-11・S-12（旧W-28）

**方針の縮小（2026-10-13、ユーザー承認）**: 配信者の記事はもともとの需要が高くない。1本ずつ作り直さず、似た話題を統合して土台を作り直す。9グループ（`creator/` 36本 → 26本）の案は `archive/re-create-docs-20261013/cluster-streamer.md` §11。実施は「グループ1・2・8」から（順: 1 → 2 → 8 → 7 → 5 → 3 → 6 → 9 → 4。4・9は現行URLの登録状態を確認してから）。1グループ実施するごとに、下の表に結果を1行追記する。全9グループを2026-10-13に実施（内容は `archive/re-create-docs-20261013/cluster-streamer.md` §12・§13、効果測定はS-11・S-12（旧W-33・W-34））。`creator/` は36本 → 26本。

| グループ | 土台 ← 吸収 | 状態 |
|---|---|---|
| 1 | one-room-streaming-soundproof ← voice-chat-soundleak-fix、night-streaming-neighbor-tips | 実施済み（2026-10-13） |
| 2 | streaming-pc-fan-noise-mic ← streaming-mic-noise-room | 実施済み（2026-10-13） |
| 8 | streamer-soundproof-room-comprehensive-guide ← vtuber-soundproof-environment-complete-guide | 実施済み（2026-10-13） |
| 7 | streamer-rental-selection-guide ← bourentakl-streamer-settingsetubi、soundproof-rental-life-streamer | 実施済み（2026-10-13） |
| 5 | asmr-external-noise-elimination ← asmr-vtuber-booth-guide | 実施済み（2026-10-13） |
| 3 | parenting-streamer-soundproof ← sleeping-parent-game-streaming-guide | 実施済み（2026-10-13） |
| 6 | collab-streaming-soundproof-space ← podcast-collab-recording-acoustics | 実施済み（2026-10-13） |
| 9 | farmland-prefab-streaming-room-legal ← streamer-regional-studio-move | 実施済み（2026-10-13。土台は登録済み、吸収側は未登録を確認） |
| 4 | female-streamer-privacy-soundproof ← vtuber-family-privacy-rules | 実施済み（2026-10-13。土台は登録済み、吸収側は未登録の一覧に無く登録の記録も無いことを確認） |
