---
title: "重要クエリ×既存記事 突合せ（前期データ基準）"
date: 2026-07-02
source_period: "zenki 2025/10/12-2026/03/05"
---

# 重要クエリ×既存記事 突合せ（2026-07-02）

前期（崩壊前）のGSCクエリのうち、クリック2以上 or 表示回数100以上を「重要クエリ」として抽出（32件、ブランドクエリ除外）。各クエリを既存記事177本のtitle/slug/tagsとキーワード一致でマッチングし、最適化アクションを仮判定した。

**この突合せは自動化した一次選定（キーワード重複ベース）。目視での最終確認が必要**、特に一致率が低いものや`bass-trap-installation-guide`のような部分一致は要検証。

生データ: `query-article-match-20260702.csv`

## A. 既存記事でカバー済み → リライト/強化対象

| クエリ | 前期clicks | 前期impr | 前期順位 | 対象記事 |
|---|---|---|---|---|
| 防音室 加湿器 | 20 | 219 | 6.63 | `/ja/soundproof-room/bouon-humidifier-comparison/` |
| 防音室 値段 | 4 | 189 | 56.25 | `/ja/money/soundproof-room-price-market/` |
| 防音室 100万 | 2 | 147 | 14.46 | `/ja/soundproof-room/million-yen-soundproof-room-professional/` |
| 防音室 自作 | 2 | 27 | 47.67 | `/ja/diy/closet-diy-soundproof-room/`（★検証済み・修正: `bass-trap-installation-guide`はベーストラップ記事で無関係。`interlink-postlist.md`で確認し、正しい対象記事を`closet-diy-soundproof-room`に訂正。title/description/tagsに「自作」キーワードを追加済み） |
| 防音室 1.5畳 | 2 | 2 | 42.5 | `/ja/soundproof-room/soundproof-room-size/` |
| 防音室 湿度 | 1 | 130 | 15.02 | `/ja/soundproof-room/proofroom-humidity-airconditionlist/` |
| 賃貸 防音室 許可 / 防音室 賃貸 許可 / 防音室 許可 | 1+0+0 | 118+110+108 | 18-24位 | `/ja/soundproof-rental/rental-permission-proposal-template/`（対応済み: description・導入文に「防音室」「賃貸」「許可」の網羅性を強化） |
| bouon | 0 | 112 | 6.68 | `/ja/business/bouonrental-areasec-newbusiness/`（指名寄りクエリ、要検証） |

→ **優先度が高いのは「防音室 値段」（前期順位56.25位＝ほぼ圏外）と「防音室 自作」（47.67位）**。既存記事はあるのに順位が壊滅的に悪い＝崩壊の影響を最も強く受けている記事群。トラックB（根本原因調査）が解決すれば回復余地が大きい。

## A'. 部分カバー → 加筆・セクション追加候補

| クエリ | 前期impr | 対象記事 | メモ |
|---|---|---|---|
| vtuber 防音対策 | 152 | `/ja/business/report-japan-asmr-vtuber-streaming-studio-standard/`（対応済み） | 「個人勢VTuberが今日から始められる防音対策」セクションを新設（予算別対策表＋DIY記事への内部リンク）を追加 |
| アビテックス 賃貸 許可 | 39 | `/ja/soundproof-rental/rental-permission-proposal-template/`（対応済み） | 本文に既存のアビテックス言及箇所へ`<CtaBox slug="yamaha-avitex">`を設置済み |
| 防音室 自作 クローゼット | 8 | `/ja/diy/closet-diy-soundproof-room/`（対応済み） | 「防音室 自作」と同一記事に統合。上記で対応済み |
| livestream soundproof | 1493（大） | `/ja/business/datacenter-soundproof-technology-facts/` | 表示回数最大だが記事はデータセンター向け。配信者向けに再構成した記事の方が本来の受け皿 |
| 防音室 ハウスメーカー おすすめ | 297 | `/ja/soundproof-room/bouon-osusume-hikaku/`（対応済み） | 専用記事`housing-builder-soundproof-comparison`が既存と判明。ハウスメーカー標準仕様とユニット型の違いを説明するセクション＋同記事への内部リンクを追加 |
| 一戸建て 騒音苦情 | 112 | `/ja/creator/streamer-noise-complaint-response/`（対応済み） | 「一戸建てで苦情を受けた場合の違い」セクションを新設（管理会社不在時の対応・行政窓口の紹介） |
| japan renovation subsidy news / japan noise regulation news | 144 / 101 | `/ja/money/soundproof-subsidy-news-2025/` `/ja/knowledge/noise-regulation-update-2025/` | 英語ニュース系クエリ、下記クラスター参照 |

## B. 新規記事 or 大幅拡充候補

### B-1. 「Japan building code news」英語クラスター（要注目）
以下10クエリはすべて似た意図（日本の建築基準法/騒音規制の英語ニュース）で、**合計表示回数 約2,142、クリック0**。既存記事は`soundproof-subsidy-news-2025`や`japan-bouonproof-marketnextasia`に部分一致するのみで、専用の受け皿記事が無い。

- `japan building code news december 2025`（761）
- `japan building code news`（279）
- `japan building code news today 2025`（183）
- `japan building code news 2025 november`（163）
- `japan building code news november 2025`（154）
- `japan building code updates`（149）
- `japan building code updates today`（118）
- `japan building code news 2025`（114）
- `japan building code update 2025 news`（113）
- `japan building code news 2025 december`（108）

→ **クリック0だが表示回数が大きい＝Googleは関連性を認識しているが、記事がそのものズバリの受け皿になっていない**。`CLAUDE.md`に既述の英語記事戦略（Japan lens: `japan-noise-and-society`）に沿って、「日本の建築基準法・防音規制ニュース」を扱う英語記事を新規作成する強い候補。QFOのメインKW候補として最優先。

→ **対応済み（2026-07-02）**: `/en/japan-noise-and-society/building-code-reform-2025-noise-insulation/`を新規作成。速報ニュースではなくevergreen解説記事として、2025年4月施行の建築基準法改正（省エネ基準適合義務化・4号特例縮小）が「防音規制ではない」ことを明確にした上で、なぜ防音性能の底上げにつながるかを解説。`noise-regulation-update-2025`（ja）で確立済みの事実（省エネ適合義務化2025年4月・受忍限度dB基準）と整合させ、事実未確認の統計・法令条文番号の断定は避けた。`astro check`・`astro build`で0エラー、ページ生成を確認済み。`en`記事は`task-list.md`記載の既存方針（需要データ起点のみ着手）に基づく例外対応（ユーザー承認済み）

### B-2. その他
| クエリ | 前期impr | メモ |
|---|---|---|
| 伊丹 空港 騒音 補助金 いくら | 54 | （対応済み）実は`soundproof-subsidy-tokyo-osaka`が既に伊丹空港エリアをカバー済みと判明。「結局いくらもらえるのか」に直接答える区域区分別の解説セクションを追加（具体的な金額は区域により変動するため、公式窓口への誘導を明記し断定的な数値の記載は回避） |
| how much does it cost to soundproof a room | 110 | （対応済み）`en/japan-quiet-spaces/cost-to-soundproof-a-room-in-japan/`を新規作成。DIY〜レンタル〜購入〜住宅補助金まで4段階の費用帯を整理し、「畳」単位表記や賃貸文化ゆえのプレハブ防音室文化などJapan lensの文脈を追加 |
| soundproofing technology news | 212 | 技術ニュース系、B-1と統合可能 |
| rt60 rew | 3 | ニッチ（REW測定ソフト特化）、優先度低 |

## 次の一手

1. **B-1クラスター向けに「Japan building code / noise regulation news」の英語記事を新規作成**（`en`のJapan lens戦略に合致、需要が明確に可視化されている）— 未着手
2. ~~A群のうち順位が特に悪い「防音室 値段」「防音室 自作」を優先リライト~~ → **対応済み（2026-07-02）**: `防音室 値段`は既に最適化済みと確認（title/descriptionが一致、lastmod直近のため変更不要）。`防音室 自作`は対象記事を`bass-trap-installation-guide`から`closet-diy-soundproof-room`に訂正し、title/description/tagsにキーワードを追加
3. ~~賃貸許可系の表記ゆれ3クエリ~~ → **対応済み（2026-07-02）**: `rental-permission-proposal-template`のdescription・導入文のキーワード網羅性を強化、アビテックス言及箇所に`<CtaBox slug="yamaha-avitex">`を追加
4. ~~vtuber向けセクション追加~~ → **対応済み（2026-07-02）**: `report-japan-asmr-vtuber-streaming-studio-standard`に個人勢向け予算別対策セクションを新設
5. ~~一戸建て向け苦情対応セクション~~ → **対応済み（2026-07-02）**: `streamer-noise-complaint-response`に一戸建て特有の対応セクションを新設
6. ~~ハウスメーカー比較の章追加~~ → **対応済み（2026-07-02）**: 専用記事`housing-builder-soundproof-comparison`が既存と判明、`bouon-osusume-hikaku`から内部リンク＋違いの説明セクションを追加
7. ~~伊丹空港補助金「いくら」～英語防音費用記事（B-2）~~ → **対応済み（2026-07-02）**
8. ~~QFO拡張~~ → **対応済み（2026-07-02）**: `.workspace/strategies/qfo-20260702.md`
9. ~~リダイレクト修正（AUTO_MATCH15件→全件監査138件に拡大）~~ → **対応済み（2026-07-02）**: `astro.config.mjs`に追記、ビルド確認済み。詳細は`redirect-gap-full-audit-20260702.md`
10. ~~`missing-redirects`のNEEDS_MANUAL_REVIEW17件~~ → **対応済み（2026-07-02）**: 上記138件監査で全件解消済みと確認
11. ~~`livestream soundproof`の配信者向け対応~~ → **対応済み（2026-07-03）**: 英語クエリが日本語B2B記事にミスマッチ着地していたと判明。既存記事の骨格変更は避け、`en`3件目`japan-quiet-spaces/how-japanese-streamers-soundproof/`を新規作成
12. **未着手（保留・実需データ待ち）**: 一戸建て騒音源別記事（ピアノ／室外機／ペット）、`japan-soundproof-housing`カテゴリの賃貸文化記事
13. 一致率が低い/要検証マークの項目は、`interlink-postlist.md`で類似記事がないか再確認してから最終判定する（防音室自作は本セッションで確認済み）
