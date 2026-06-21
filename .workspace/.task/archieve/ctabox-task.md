# CtaBox 再構成タスク

作成日：2026-06-21
背景：記事構成調査（[[task-list]]未整理セクション参照）で「`<CtaBox>`使用が全169記事中0件」が判明。`yamaha-avitex`言及26記事・`kawai-nasal`言及22記事に対し設置ゼロという指摘から、機械的な「設置数を増やす」対応ではなく、**そもそもCtaBoxを置く意義は何か**から再設計する。

---

## 1. 現行ルール（CLAUDE.md）の確認

```
**`<CtaBox>` の使用ルール（当面）**:
- `slug` は必須。省略すると記事内にエラーが表示される
- 使用できる slug は `yamaha-avitex`（アビテックス）と `kawai-nasal`（ナサール）の2つのみ
- **記事本文でその商品名に言及している場合のみ**配置する
- 商品名が登場しない記事には置かない
```

このルールは「置いてはいけない条件（言及なし記事への設置禁止）」は明確だが、「言及がある記事に必ず置くべきか」「言及の深さをどう判断するか」には触れていない。**当面ルールはガードレールであって、配置基準そのものではない**と読むべき。

---

## 2. CtaBoxコンポーネントの実体確認

`src/components/CtaBox.astro`:
- コメントに「高級防音室や高単価案件向けの、よりリッチなコンバージョン用コンポーネント」と明記
- `AffiliateCard`より装飾的（ゴールド装飾・SPECIAL OFFERラベル・価格行・ベネフィット箇条書き・ROIフックコピー）→ **本文の流れを止めて読者の意思決定を促す「決断ポイント」用コンポーネント**であり、`AffiliateCard`（商品紹介の一部）とは役割が違う
- `variant: 'high-ticket'`か`'premium'`かでCTAコピー・訴求内容が分岐（無料相談・ローン案内 vs 遮音性能・資産価値訴求）

### 重大な発見：収益導線が実は存在しない
`src/data/affiliates.ts`の該当2件は両方`program: 'direct'`、URLはヤマハ・カワイの**公式サイトへの直リンク**（`jp.yamaha.com`・`kawai.jp`）。アフィリエイトID・トラッキングパラメータなし。
- つまり現状、CtaBoxを設置してもクリックは**1円も収益化されない**
- にもかかわらず`rel="nofollow sponsored noopener"`が付与されている（実体のないスポンサードリンクの表記）→ SEO上も実態と矛盾した属性

**→ CtaBoxの意義を「収益導線」と定義するなら、土台（実アフィリエイト提携）が無いまま設置数だけ増やすのは本末転倒。**

---

## 3. 「言及記事」26/22件の実態調査

サンプル確認の結果、言及には明確に2種類ある：

| パターン | 例 | 特徴 |
|---|---|---|
| **A. 専用レビュー記事** | `kawai-nasal-soundproof-room-guide`（「カワイ防音室ナサール完全ガイド」）、`yamaha-tabisuru-bouon-room` | その商品単体を主題として深掘り。決断ポイントが明確 |
| **B. 比較表中の1ブランドとしての言及** | `bouon-osusume-hikaku`内「推奨機材：カワイ ナサール（オーダータイプ）」、知識記事内のDr値比較表など | 他ブランド（だんぼっち・OTODASU等）と並列で名前が出るのみ、または用途別おすすめの1つとして言及 |
| **C. 文脈的な軽い言及** | 「ヤマハ・カワイ等の大手ブランドなら〜」のような一般論への引用 | 当該商品が記事の主題でも推奨でもない |

26/22記事すべてに置くのは**C類を含めて機械的に置くことになり、読者体験を損なう**（記事の主題と関係ない高額CTAが挿入される）。一方で**A類（専用レビュー記事）はCtaBox未設置のまま放置されている**のが本来最優先で直すべき欠落。

---

## 4. CtaBoxを置く意義（再定義）

以下3点を満たす記事にのみ設置する、という基準に変更する：

1. **読者が「次にこの商品を検討してよいか」を判断できる文脈にいる**（記事内でその商品が単独の主題、または明確な一番のおすすめとして名指しされている）
2. **記事の購入検討ステージが「比較・決断」フェーズである**（情報収集の初期段階の記事ではAffiliateCard/本文リンクで十分、CtaBoxの重い装飾は不要）
3. **収益化の実体（提携プログラム）が伴っているか、伴う予定があるか**（現状は実体なし＝要対応、下記5参照）

→ 「言及している場合のみ配置する」は**設置してよい条件の下限**であり、**設置すべき条件の上限**（A類・主題一致）まで絞り込む。

---

## 5. 先行して確認・対応すべき事項

- [x] **ヤマハ「アビテックス」・カワイ「ナサール」の正式アフィリエイト提携の有無を確認する**（2026-06-21調査）：A8.net・もしもアフィリエイト・バリューコマースのいずれにもヤマハアビテックス・カワイナサールの提携プログラムは見当たらず。両モデルは販売店・ショールーム経由の直接契約（受注生産・現地施工含む）商材であり、ASP経由のアフィリエイト化は構造的に難しいと判断。**→ CtaBoxは「収益導線」ではなく「権威性・信頼性訴求のための無償リンク（権威リンク）」と位置づけを確定する**
- [x] 提携が見つからなかったため、`src/components/CtaBox.astro`の`rel="nofollow sponsored noopener"`から`sponsored`を外し`rel="nofollow noopener"`に修正済み（実体のないスポンサード表記を解消）
- [x] `affiliates.ts`内のコメントアウトされた旧`yamaha-avitex`サンプルエントリ（59-72行）を削除済み（実エントリ（170行以降）と同名で混乱を招くため）

---

## 6. 設置候補の再分類（次のアクション）

### 最優先：専用レビュー記事（A類）
- [x] `src/content/ja/soundproof-room/kawai-nasal-soundproof-room-guide/index.mdx` → 「まとめ：カワイ・ナサールを選ぶべき人」の決断ポイント直後に`<CtaBox slug="kawai-nasal" />`を設置済み
- [x] `src/content/ja/soundproof-room/yamaha-tabisuru-bouon-room/index.mdx` → **設置見送りで確定**。主題は「旅する防音室（体験プログラム）」であり、読者は認知・体験フェーズにいて比較・決断フェーズではない（基準2に不適合）。本文中のアビテックス言及も体験プログラムの文脈紹介で単独推奨ではない

### 次点：明確な単独推奨が本文にある記事（B類）
- [x] `src/content/ja/soundproof-room/bouon-osusume-hikaku/index.mdx` → 実際には用途別おすすめでヤマハ・カワイ**両方**が単独推奨されていた（A:ゲーム実況・VTuber→ヤマハ、B:楽器演奏・プロ録音→カワイ）。両方の直後に`<CtaBox slug="yamaha-avitex" />` / `<CtaBox slug="kawai-nasal" />`を設置済み
- [x] 残るB類候補（アビテックス言及24件・ナサール言及20件、重複含む計32件）は1記事ずつ「単独の一番のおすすめとして名指ししているか」を判定するレビューを実施済み。判定結果は下記7参照

### 対象外：C類（文脈的な軽い言及のみ）
設置しない。現状の「言及していれば置く」運用に戻さないよう、本ファイルに非設置の理由として記録する。

---

## 7. B類候補32件（重複言及含む）の全件判定結果（2026-06-21実施）

A類2件・bouon-osusume-hikaku（ヤマハ・カワイ両方）を除く残り32件の言及を1件ずつ確認した結果、**機械的なB類判定基準に合致したのは1件のみ**。残り31件は「比較表・目的別おすすめの中で複数ブランドを並列提示」「性能値・価格の例示」「一般論への軽い言及」のいずれかであり、単独の一番のおすすめとして名指ししている箇所はなかった。

| ファイルパス | 言及商品 | 分類 | 判定理由 | CtaBox設置 |
|---|---|---|---|---|
| money/streamer-tax-strategy | ヤマハ・カワイ（中古アビテックス） | C | 税務解説の一般例として両ブランドを併記、単独推奨なし | 無 |
| knowledge/d-value-truth-and-myths | ヤマハ セフィーネNS・カワイ ナサール・ヤマハ アビテックス | C | 価格帯テーブルの例示として両ブランド併記 | 無 |
| knowledge/soundproof-culture-japan-vs-america | ヤマハ・カワイ | C | 日米比較の一般論としてユニット型の代表例に言及するのみ | 無 |
| soundproof-rental/rental-proofroom-contractcheck | ヤマハ（アビテックス）・カワイ（ナサール） | C | 賃貸交渉ガイドでユニット型全般の例として両ブランド併記 | 無 |
| soundproof-room/hsp-soundproof-room-guide | ヤマハ アビテックス・カワイ ナサール | C | 「D-45以上はヤマハ アビテックスやカワイ ナサールのハイグレードモデルが対応」と両ブランド併記 | 無 |
| business/report-japan-asmr-vtuber-streaming-studio-standard | ヤマハ・カワイ／ヤマハのアビテックス（セフィーネNS） | C | 排熱対策の一般例・サイズアップ価格例として言及、単独推奨なし | 無 |
| creator/streamer-soundproof-rental-share | ヤマハ（アビテックス）・カワイ（ナサール） | C | 月額レンタルの選択肢として両ブランド併記 | 無 |
| creator/streamer-soundproof-evolution-story | ヤマハ アビテックス（1畳タイプ） | C | 体験談として購入した事実を記すのみで、決断フェーズの推奨提示ではない | 無 |
| creator/soundproof-room-fatigue-ventilation | ヤマハ・カワイ | C | 換気オプションの一般説明で両ブランド併記 | 無 |
| creator/streamer-soundproof-budget-roadmap | ヤマハ・カワイ | C | Phase3の例示テーブルで両ブランド併記、比較対象として提示 | 無 |
| soundproof-room/shimamura-music-soundproof-room-guide | ヤマハ アビテックス・カワイ ナサール | C | 記事の主旨自体が「両者を乗り比べる」島村楽器の紹介で、単独推奨ではない | 無 |
| soundproof-room/million-yen-soundproof-room-professional | ヤマハ・アビテックス・カワイ・ナサール | C | 100万円クラス全般の説明として両ブランド併記 | 無 |
| money/soundproof-room-buyback-guide | ヤマハ（アビテックス）・カワイ（ナサール） | C | 買取・資産価値の一般例として両ブランド併記 | 無 |
| soundproof-rental/rental-permission-proposal-template | ヤマハのアビテックス（セフィーネNS）・カワイ | C | 提案書テンプレートの計算例として例示、単独推奨ではない | 無 |
| soundproof-rental/rental-unit-soundproof-room | ヤマハ Cefine NS・カワイ Nassale | C | RC造向け推奨モデルとして両ブランドを並列提示 | 無 |
| creator/kominka-renovation-streaming-room | YAMAHAアビテックス | C | コスト試算の例示としての言及で、ブランド間の決断推奨ではない | 無 |
| soundproof-rental/soundproof-room-installation-conditions | ヤマハ Cefine NS・ヤマハ（アビテックス） | C | 重量計算・搬入経路の一般例としての言及 | 無 |
| money/soundproof-subsidy-news-2025 | ヤマハのアビテックス | C | 補助金活用例としての一般的言及、単独推奨ではない | 無 |
| money/small-business-soundproof-subsidy-guide | アビテックス等・ヤマハやカワイ | C | 補助金活用例・まとめの一般論として両ブランドに言及 | 無 |
| money/report-japan-soundproof-unit-resale-value-simulation | ヤマハ（アビテックス）・カワイ（ナサール）・ヤマハ セフィーネNS | C | リセールシミュレーションで両ブランドを比較表に並列提示 | 無 |
| soundproof-rental/apartment-weight-limit-500kg | ヤマハ アビテックス（セフィーネNS） | C | 荷重計算の例示としての言及、単独推奨ではない | 無 |
| soundproof-room/soundproof-room-demolition-guide | ヤマハのアビテックス・カワイのナサール | C | 買取可能ブランドの一般例として両ブランド併記 | 無 |
| business/web-meeting-voice-soundleak-prevention | ヤマハ・アビテックス等 | C | 防音室一般の例示としての言及、単独推奨ではない | 無 |
| money/rental-vs-purchase-soundproof-room | ヤマハ アビテックス（セフィーネNS／MCプラン） | **B** | 記事全体がヤマハ単独製品の「買うか借りるか」決断フェーズで構成され、カワイ等の比較は皆無。購入/レンタルの推奨基準を提示する決断ポイント | **有（yamaha-avitex）** |
| money/telework-soundproof-loan-strategy | （本文に直接言及なし、末尾リンクのみ） | C | 本文中に商品名への言及がなく、関連記事リンクのみ | 無 |
| soundproof-room/bouon-dchiseinou-meyasu | ヤマハ (Cefine NS)・カワイ (ナサール) | C | メーカー別性能比較として両ブランド並列提示 | 無 |
| local/sendai-soundproof-rental-guide | ナサールショールーム仙台 | C | 地域業者一覧の1項目として記載、購入決断の単独推奨ではない | 無 |
| soundproof-room/night-practice-soundproof-guide | ヤマハ（Cefine NS）・カワイ（ナサール） | C | 夜間練習対応モデルの例として両ブランド並列提示 | 無 |
| money/soundproof-room-rental-lease | ヤマハ「音レント」・カワイ「ナサール」（ワルツ経由） | C | レンタル選択肢としてヤマハとカワイ系列の両方を比較提示 | 無 |
| soundproof-room/soundproof-room-budget-selection-guide | カワイナサール・ヤマハセフィーネNS | C | 予算別の製品比較として両ブランド並列提示（「メーカーを比較」と明記） | 無 |
| knowledge/proofroom-maker-2025productcheck | ヤマハ（セフィーネNS）・カワイ（ナサール UWS） | C | 業界ニュース・メーカー比較記事で両ブランドを完全に並列評価 | 無 |
| money/bouon-asset-value-analysis | ヤマハ セフィーネNS・カワイ ナサール | C | AssetValueTableで両ブランドを並列の最高評価（★5）として提示、単独推奨ではない | 無 |

**最終結果**：B類1件・設置1件（`money/rental-vs-purchase-soundproof-room`に`<CtaBox slug="yamaha-avitex" />`）。

## 8. 最終設置サマリー

「言及していれば置く」（26/22件）から「単独の決断ポイントにのみ置く」基準に絞り込んだ結果、設置総数は**4記事・5箇所**:

| 記事 | 設置slug | 区分 |
|---|---|---|
| kawai-nasal-soundproof-room-guide | kawai-nasal | A類（専用レビュー） |
| bouon-osusume-hikaku | yamaha-avitex + kawai-nasal | B類（用途別おすすめ、2箇所） |
| rental-vs-purchase-soundproof-room | yamaha-avitex | B類（買うか借りるかの決断記事） |
| yamaha-tabisuru-bouon-room | （設置見送り） | 体験プログラム記事のため対象外で確定 |

残る44記事（26+22-設置済み重複調整後）の言及はすべてC類（並列比較・一般論的言及）と判定し、現状の方針通り非設置を維持する。

## 9. 残タスク

- [x] 5の提携確認結果を本ファイルに追記し、`rel`属性の方針を確定
- [x] B類26/22記事を1件ずつ「単独推奨か否か」で判定し、本ファイルに表で記録
- [x] 判定後、対象記事へ`<CtaBox>`を設置（A類2件・B類2記事3箇所、計4記事5箇所）
- [x] 設置完了後、`task-list.md`未整理セクションの「CtaBox未使用」項目をこのファイルへの参照に置き換えてクローズ
