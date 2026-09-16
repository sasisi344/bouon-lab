# 統廃合候補の洗い出し（2026-09-16）

## 経緯

- ユーザーが `.workspace/re-create/published-articles-list.md`（全203件の公開記事一覧）を改めて眺め、「多いだけでユーザーのことを考えていない」と指摘
- 既存の詳細カニバリ調査 `archive/site-topic-clusters.md`（2026-06-24作成・2026-07-10更新）で優先度1・2として挙げられていたクラスタが、**2ヶ月以上経った現在も未対応のまま**であることを本ファイルで確認した
- 本ファイルでは、その未対応クラスタを最新のGSC実データ（`access-data/2026/W36/GSC/ページ.csv`、過去3ヶ月＝2026-06-15〜09-05相当）と突き合わせ、統合候補として再提示する

**方針**：ここでは候補の洗い出しと「残す/畳む」の仮説提示までとし、実際のリライト・リダイレクト設定はユーザー確認後に別タスクとして着手する。

---

## クラスタA（最優先・サイト最大のクロスカテゴリカニバリ）— オーナー向け防音リノベ投資・ROI

4記事とも「マンションオーナーが防音リノベに投資する際のROI・回収戦略」が主題で対象読者もほぼ同一。カテゴリが3つ（business / soundproof-rental / money）に分散しているため内部リンクで気づきにくい。

| カテゴリ | slug | 主題 | 過去3ヶ月 表示回数 | クリック |
|---|---|---|---|---|
| business | `owner-soundproof-renovation-investment-strategy-2026` | 利回り・出口戦略 | 5 | 0 |
| business | `soundproof-renovation-cost-outlook-2026` | 建設コスト高騰・回収ライン | 4 | 0 |
| soundproof-rental | `owner-soundproof-renovation-strategy` | 空室解消の経営戦略・ROIシミュレーション | 1〜2 | 0 |
| money | `owner-renovation-roi-simulation-tool` | A4一枚のROIシミュレーション（5年回収） | 未計測（表示ほぼ0） | 0 |

**所見**：4記事合計でも表示回数が一桁〜10件程度、クリックは0。「分散させて網羅する」戦略が全く機能しておらず、Googleからも実質同一テーマの薄い重複として扱われている可能性が高い。

**提案**：`owner-renovation-roi-simulation-tool`（A4一枚・5年回収モデルという最も具体的なツール性）をハブ候補とし、残り3本を「市場動向（business）」「コスト動向（business）」「経営戦略の全体像（soundproof-rental）」として明確に差別化するか、内容が薄いものから統合・リダイレクトする。

---

## クラスタB（優先）— money「レンタル vs 購入」

「防音室はレンタルすべきか購入すべきか、損益分岐点はどこか」が3記事とも主題でほぼ同一。

| slug | 主題 | 過去3ヶ月 表示回数 | クリック |
|---|---|---|---|
| `rental-vs-purchase-soundproof-room` | ヤマハMCプラン軸、損益分岐5年 | 2 | 0 |
| `soundproof-room-rental-cost` | 初期費用・月額相場＋購入との損益分岐点 | 5 | 0 |
| `soundproof-room-rental-lease` | 個人レンタルと法人リースの違い・経費処理 | 6 | 0 |

**所見**：3記事合計でも表示回数13件・クリック0。法人リース軸（`soundproof-room-rental-lease`）だけは検索意図が明確に分かれるが、`rental-vs-purchase-soundproof-room`と`soundproof-room-rental-cost`は主題がほぼ重複。

**提案**：`soundproof-room-rental-cost`（費用相場+損益分岐点で最も具体的）を残し、`rental-vs-purchase-soundproof-room`を統合。`soundproof-room-rental-lease`は法人リース特化として維持。

---

## クラスタC（優先）— soundproof-rental「導入・許可・原状回復・耐荷重」

※`rental-proofroom-contractcheck`は2026-07-05に「アビテックス/ナサール退去費用」特化へニッチ化済みのため対象外。

| slug | 主題 | 過去3ヶ月 表示回数 | クリック |
|---|---|---|---|
| `rental-permission-proposal-template` | A4一枚の提案書テンプレート＋交渉フレーズ | 2 | 0 |
| `rental-unit-soundproof-room` | 大家交渉〜耐荷重〜原状回復の完全ロードマップ | 25 | 0 |
| `apartment-weight-limit-500kg` | 築20年マンション・500kg超ユニットの床荷重計算 | 12 | 0 |
| `soundproof-room-installation-conditions` | マンション・戸建の耐荷重を含む3チェックポイント | 2 | 0 |

**所見**：`rental-unit-soundproof-room`だけ表示25件とやや動きがあるが、それでもクリック0。4記事とも「導入前に確認すること」という同一検索意図に収斂している。

**提案**：`rental-unit-soundproof-room`（最も表示があり、範囲も一番広い）をハブとして残し、`rental-permission-proposal-template`（提案書テンプレ）は差別化が薄ければ統合。耐荷重2本（`apartment-weight-limit-500kg`・`soundproof-room-installation-conditions`）は「築古マンションの実例計算」と「一般的な3チェックポイント」で軸を分けられるなら維持、そうでなければ統合。

---

## クラスタD（優先）— soundproof-room「サイズ選び」

| slug | 主題 | 過去3ヶ月 表示回数 | クリック |
|---|---|---|---|
| `bouon-size-choice` | サイズ選びの決定版・0.8〜3畳 | 実質0（現行URLでの計測なし） | 0 |
| `soundproof-room-size` | ユニット防音室のサイズと選び方・内寸確認法・0.8畳〜3畳以上 | 10〜11 | 0 |

**所見**：タイトル・対象範囲がほぼ同一。`bouon-size-choice`は直近3ヶ月でGSC上に現行URLでの表示記録がほぼ見当たらない（＝実質失注状態）。`soundproof-room-large-size`（2畳以上特化）は差別化済みのため対象外。

**提案**：`soundproof-room-size`（内寸確認法まで踏み込んでおり範囲も広い）を残し、`bouon-size-choice`を統合・リダイレクト。

---

## 優先度まとめ

1. クラスタA（4記事→統合 or 明確差別化）
2. クラスタB（3記事→2記事)
3. クラスタC（4記事→2〜3記事）
4. クラスタD（2記事→1記事）

4クラスタ合計 13記事 → 最大で6〜7記事程度まで圧縮できる見込み。いずれも現状クリックがほぼ0のため、読者を減らすリスクは低く、統合によるページ品質・内部リンク濃度の改善が期待できる。

## 実施結果（2026-09-16完了）

ユーザーが「アクセスがほぼない記事は削除してもいい」と方針決定したため、上記4クラスタとも「本文統合」ではなく<strong>弱い方を削除＋301リダイレクト</strong>で処理した。

| クラスタ | 生存記事 | 削除した記事 |
|---|---|---|
| A | `money/owner-renovation-roi-simulation-tool` | `business/owner-soundproof-renovation-investment-strategy-2026`・`business/soundproof-renovation-cost-outlook-2026`・`soundproof-rental/owner-soundproof-renovation-strategy` |
| B | `money/soundproof-room-rental-cost` | `money/rental-vs-purchase-soundproof-room`（`soundproof-room-rental-lease`は法人リース特化のため維持） |
| C | `soundproof-rental/rental-unit-soundproof-room` | `soundproof-rental/rental-permission-proposal-template`・`soundproof-rental/soundproof-room-installation-conditions`（`apartment-weight-limit-500kg`は築古マンションの実例計算として差別化維持） |
| D | `soundproof-room/soundproof-room-size` | `soundproof-room/bouon-size-choice` |

- `astro.config.mjs`に新規301リダイレクト7件を追加し、既存の旧URLリダイレクト（削除記事を転送先にしていたもの）も生存記事へ付け替え済み
- 内部リンク26ファイルを生存記事のURL・実タイトルに修正済み（自己参照・重複リンクを解消）
- `pnpm build`で208ページ・エラー0を確認済み
- 詳細・実施ログは `archive/task-list-09.md`、効果測定は `task-list.md`「カニバリクラスタA〜D統合の効果測定」に記載
