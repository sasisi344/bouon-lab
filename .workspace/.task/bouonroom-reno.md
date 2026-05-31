# 防音室カテゴリの再構築プラン

**主軸**: ユーザーの検索意図を読み取り、最適な答えを提供するコンテンツサイトへの転換  
**前提診断**: 既存74本の公開記事でアクセスが集まっていない＝コンテンツパワー不足。記事数は十分だが、「書きたいこと」軸で作られており、「ユーザーが検索している問い」に正面から答えていない記事が多い。

関連リスト: [`防音室カテゴリ再構築list.md`](./防音室カテゴリ再構築list.md)

---

## 診断：なぜ今のコンテンツはパワー不足か

| 問題 | 具体例 |
|---|---|
| トピック軸で書かれており、検索クエリ軸になっていない | `biophilic-acoustics`（バイオフィリック）、`privacy-pod-market-growth`（市場動向）など、一般ユーザーが打ち込む検索語と乖離 |
| 「何ができるか」ではなく「どう選ぶか・何をすればいいか」が弱い | ハブ記事がなく、関連記事への導線が分散している |
| 期待値の調整がない | 防音室の限界・用途別の到達ラインを示す記事が薄い → 購入後後悔 → 信頼失墜 |
| draft記事が7本止まったまま | 公開できない完成度＝コンテンツパワーがゼロ |

---

## 戦略方針

1. **検索意図ファースト**: 記事は「特定のクエリ群に対する最良の答え」として設計する
2. **ハブ→ディープの導線設計**: 入口（ハブ）記事が検索意図で流入し、深掘り記事へルーティングする
3. **既存記事はリライト優先**: 新規より既存の改善がROI高い。意図ズレ記事は書き直すか統合する
4. **draft記事は意図評価してから公開**: 需要のない意図で書かれたdraftはそのまま公開しない

---

## Phase 0｜先行処理（土台を整える）

### 0-1｜draft記事の意図評価と公開判断

| slug | サブ | 検索意図が成立するか | 処置 |
|---|---|---|---|
| `sleep-quality-soundproof-room` | solution | ◎「防音室 睡眠」「静かな部屋 眠れる」意図あり | A4と統合して公開 |
| `bouon-humidifier-comparison` | solution | ◎「防音室 加湿器」「防音室 湿気対策」意図あり | B5メンテ記事と連携して公開 |
| `mental-health-benefits-of-silence` | solution | △「防音室 メンタル」は流入量小。S4の補強材として活用 | S4新規記事と紐づけて公開 |
| `noise-complaint-legal-precedent-manual` | knowledge | ◎「騒音 苦情 法律」「騒音 受忍限度」意図あり | B3と連携して公開 |
| `neighborhood-noise-seasonal-pattern-statistics` | knowledge | △ 統計情報系は流入弱。B3の文脈補強に限定使用 | B3記事内の参照先として公開 |
| `report-japan-soundproof-unit-resale-value-simulation` | others | △「防音室 売却」「防音室 資産価値」意図はあるが薄い | `soundproof-room-buyback-guide` と統合検討 |
| `outdoor-soundproof-curtain-market-guide` | diy | △ BtoB視点が強い。一般ユーザー向けに書き直してから公開 | リライト後に公開 |

### 0-2｜カニバ記事の統合

| 残す | 統合・削除 | 理由 |
|---|---|---|
| `diy/diy-soundproof-room-cost-breakdown` | `diy/soundproof-room-diy-cost` を削除 | タイトル・意図が完全重複 |

### 0-3｜意図ズレ記事のリライト候補（既存公開記事）

検索流入が見込みにくいと判断する記事。スタッツ確認後にリライトまたは統合を検討。

| slug | サブ | 問題 | 対処案 |
|---|---|---|---|
| `biophilic-acoustics` | knowledge | 「バイオフィリック」は検索されない。ニッチすぎる | B1（音響調整記事）の一セクションに格下げ or 削除 |
| `privacy-pod-market-growth` | knowledge | 法人・市場動向系。一般ユーザーの意図と乖離 | `workbooth-office-soundproof-trend` と統合か削除 |
| `free-cardboard-soundproof-tech` | diy | 「段ボール 防音」は検索あり。ただしタイトルが弱い | タイトルリライト＋意図再設計 |
| `futon-cardboard-karaoke-booth` | diy | ニッチユーモア系。SEO流入は期待薄 | SNS流入専用コンテンツとして位置づけ直す |
| `diy-led-acoustic-panels` | diy | 「LED 吸音パネル DIY」は流入量小 | A1ゲーム配信記事の関連コンテンツとして位置づけ |

---

## Phase 1｜ハブ記事の新規作成（最優先）

検索の「入口」になる記事。ここが成立しないと以降の記事も流入しない。

### `knowledge` サブカテゴリに配置

**S1｜防音室の種類と選び方ガイド（入門ハブ）**
- slug案: `soundproof-room-types-guide`
- ターゲット検索意図: 「防音室 種類」「防音室 選び方」「防音室 初心者」「防音室 何がある」
- 構成の核: ユニット／簡易ブース／DIYボックス／工事の4類型を一画面で比較 → 用途・予算・住環境で分岐するフロー → 各深掘り記事へのリンク
- 接続先: `bouon-osusume-hikaku` / `budget-soundproof-booth-comparison` / `diy-wall-soundproofing-room-guide` / `million-yen-soundproof-room-professional`

**S3｜防音室でどこまで静かになるか（期待値ガイド）**
- slug案: `soundproof-expectation-guide`
- ターゲット検索意図: 「防音室 効果」「防音室 何db」「防音室 声 聞こえる」「防音室 限界」
- 構成の核: 話し声・ゲーム音・楽器・サイレンで減衰量を実例提示 → 「それでも聞こえるケース」を正直に提示 → 購入後後悔を防ぐ期待値調整
- 接続先: `sound-reduction-simulation` / `bouon-dchiseinou-meyasu` / `d-value-truth-and-myths`

**S4｜高性能防音室でも無音にならない理由（限界と生活設計）**
- slug案: `soundproof-limits-and-life-design`
- ターゲット検索意図: 「防音室 音漏れ する」「防音室 声 消えない」「防音室 低音 聞こえる」
- 構成の核: 振動・低音・マイクゲインの3つの限界を解説 → 防音室導入後に必要な行動変容 → 過度な期待で購入失敗するパターンを事前に防ぐ
- 接続先: `proofroom-soudmore-manual` / `soundproof-performance-drum` / `diy-soundproof-truth` / `mental-health-benefits-of-silence`

### `solution` サブカテゴリに配置

**S2｜用途別フローチャート（ルーティングハブ）**
- slug案: `soundproof-room-use-case-flowchart`
- ターゲット検索意図: 「防音室 何に使う」「防音室 楽器 配信 どっち」「防音室 自分に合った」
- 構成の核: 「あなたの主な目的は？」から始まるフロー → 楽器・ボイス配信・睡眠・ホームシアターで分岐 → それぞれ最適な記事への誘導
- 接続先: `soundproof-room-budget-selection-guide` / `bouon-size-choice` / `vtuber-soundproof-environment-complete-guide` / `night-practice-soundproof-guide` / `soundproof-room-large-size`

---

## Phase 2｜検索意図別の柱記事（A系）

### `solution` に配置

**A1｜ゲーム実況・ボイスチャット専用の防音対策**
- slug案: `game-streaming-soundproof-guide`
- 意図: 「ゲーム実況 防音」「ボイスチャット 声漏れ」「配信 防音室 いらない」
- 核: 吸音配置だけでは足りない理由 → 声の出し方・時間帯・機材（マイクゲイン）の順番 → 簡易ブースで足りるケースとユニット必須ケースの分岐
- 接続: `gamer-acoustic-placement` / `otodasu-voice-chat-test` / `diy-led-acoustic-panels`

**A2｜カラオケ配信・歌ってみたの防音対策**
- slug案: `karaoke-streaming-soundproof-guide`
- 意図: 「歌ってみた 防音室」「カラオケ配信 防音」「歌声 防音 賃貸」
- 核: 音圧の大きさがゲーム配信と根本的に違う → ブース型では足りないケース → ユニット防音室（ヤマハ・カワイ）が必要な基準
- 接続: `budget-soundproof-booth-comparison` / `otodasu-voice-chat-test` / `kawai-nasal-soundproof-room-guide`

**A3｜ピアノ・電子ピアノ・キーボードの防音対策**
- slug案: `piano-keyboard-soundproof-guide`
- 意図: 「ピアノ 防音室」「電子ピアノ 防音 賃貸」「キーボード 打鍵音 対策」
- 核: 打鍵音（固体音）・スピーカー音・ペダル振動の3種類を分けて解説 → ドラム記事の兄弟として位置づけ
- 接続: `soundproof-performance-drum` / `danbocchi-floor-protection` / `why-your-80-percent-rug-rule-fails`

**A4｜寝室の防音：外の音をシャットアウトしたい**
- slug案: `bedroom-soundproof-priority-guide`
- 意図: 「寝室 防音」「外の音 うるさい 眠れない」「防音 窓 カーテン どっち」
- 核: 睡眠への影響を軸に → 窓・カーテン・防音室の費用対効果比較 → 賃貸か持ち家かで分岐
- 統合: `sleep-quality-soundproof-room`（draft）の内容を吸収して公開
- 接続: `diy-internal-window-road-noise-reduction` / `hsp-soundproof-curtain-guide` / `shanon-vs-bouon-window`

### `others` に配置

**A5｜賃貸でユニット防音室を置く前の確認リスト**
- slug案: `rental-soundproof-room-checklist`
- 意図: 「賃貸 防音室 置ける」「賃貸 ユニット防音室 許可」「防音室 搬入 できない」
- 核: 荷重・搬入経路・原状回復・管理会社交渉の4ステップ → 賃貸特有の落とし穴
- 接続: `bouon-setti-checkpoint` / `danbocchi-floor-protection` / `soundproof-room-moving`

---

## Phase 3｜差別化・中長期記事（B系）

いずれも `solution` に配置。Phase 1・2 の完成後に着手。

| # | slug案 | 検索意図 | 対応する悩み |
|---|---|---|---|
| B1 | `soundproof-room-acoustic-tuning` | 「防音室 音 こもる」「防音室 吸音 やりすぎ」 | 防音室内の音響調整 |
| B2 | `home-theater-soundproof-guide` | 「ホームシアター 防音」「低音 近隣 対策」 | 低音・振動の近隣への影響 |
| B3 | `noise-complaint-response-flow` | 「騒音 クレーム 来た 対処」「騒音苦情 何から始める」 | クレーム後の優先順位 |
| B4 | `pet-noise-soundproof-guide` | 「犬 吠え 防音」「ペット 騒音 対策」 | ペットの鳴き声と防音室の限界 |
| B5 | `soundproof-room-maintenance-guide` | 「防音室 カビ」「防音室 臭い 対策」「防音室 掃除」 | メンテナンス総覧 |

---

## 記事数の見通し

| サブ | 現在（公開） | Phase 0後 | Phase 1+2後 | Phase 3後 |
|---|---|---|---|---|
| `knowledge` | 23 | 25 | 28 | 28 |
| `solution` | 15 | 17 | 23 | 28 |
| `diy` | 15 | 15 | 15 | 15 |
| `others` | 13 | 13 | 14 | 14 |
| **合計** | **66** | **70** | **80** | **85** |

※ draft7本のうち意図評価で2〜3本が統合・削除になる前提で試算。カニバ1本削除も含む。

---

## 個人の悩み（想定クエリ群）

- 「防音室 種類 違い」「防音室 何がある 初心者」
- 「防音室 どこまで静かになる」「防音室 効果 声」
- 「ゲーム実況 防音 賃貸」「歌ってみた 防音室 いくら」
- 「外の音 うるさい 眠れない 対策」「寝室 防音 窓 カーテン」
- 「賃貸 ユニット防音室 許可 取り方」「防音室 搬入 4畳半」
- 「騒音 クレーム 来た 何をすべきか」「ペット 吠え 防音室 効果」
