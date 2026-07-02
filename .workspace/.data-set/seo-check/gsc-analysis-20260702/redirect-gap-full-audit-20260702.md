---
title: "旧URL構造リダイレクト漏れ 全件監査レポート"
date: 2026-07-02
period_zenki: "2025/10/12-2026/03/05"
status: "138件のリダイレクト漏れを特定・全件修正済み"
---

# 旧URL構造リダイレクト漏れ 全件監査レポート（2026-07-02）

## 背景・ユーザー仮説

前回の`ranking-collapse-root-cause-20260702.md`では`astro.config.mjs`の`site`ドメイン誤記（`bouon-lab.online`、2026-04-13〜04-25）を技術要因として提示したが、**ユーザーからの指摘**により見直した：

> 「コード自体のエラーはないはず。そもそも全体のURL構造が切り替わってしまったのと、記事を整理して省力化したから以前あったクエリへのアクセスが404になりインデックス評価が下がったのが主な要因」

この仮説を検証するため、**前回は「重要クエリ32件」に絞っていた調査を、zenki期間の生データ全件（クエリ920件・ページ521件）に対象を広げて再監査**した。結論から言うと、**この仮説は数字で裏付けられた**。前回把握していた「リダイレクト漏れ32件」は氷山の一角で、実際には**207件の旧Hugo `/posts/` URLがzenki期間にアクセスを持っており、そのうち138件（67%）がリダイレクト未登録で404だった**。

## 調査方法

1. `zenki/ページ.csv`（GSC生データ、521行）から`/posts/xxx/`形式の旧Hugo URLを抽出 → ユニーク207件（`/en/posts/`を除くja記事のみ）
2. `astro.config.mjs`の`redirects`に登録済みの`/posts/`キーと突合し、**未登録のもの138件**を特定
3. 138件それぞれについて、`src/content/ja/`配下の全177記事スラッグと完全一致するか照合
   - **完全一致44件** → 該当記事へ直接リダイレクト
   - **不一致94件** → タイトル・キーワードの類似性を`interlink-postlist.md`で個別調査
     - **内容類似が明確な27件** → 最も近い既存記事へリダイレクト
     - **統合先が特定できない67件**（表示回数はいずれも45未満のロングテール） → 記事単位の断定を避け、キーワードから推定したカテゴリindexへの安全側フォールバック（既存の一部旧URLで同じ方式が採用済みだったため、サイトの既存運用パターンを踏襲）

## 結果

| 区分 | 件数 | 対応 |
|---|---|---|
| 完全一致（スラッグ同一） | 44件 | 直接リダイレクト追加 |
| 内容類似・個別マッチング | 27件 | 最類似記事へリダイレクト追加 |
| 統合先不特定（ロングテール） | 67件 | カテゴリindexへのフォールバックリダイレクト追加 |
| **合計** | **138件** | **全件`astro.config.mjs`に追記・`astro build`で動作確認済み** |

**この138件だけでzenki期間の合計表示回数 約6,986**。前回発見済みの32件（合計約6,359）と合わせると、**旧URL構造のリダイレクト漏れによって失われていた表示回数は合計 約13,345**——これはzenki期間のページ単位合計表示回数（50,572）の**約26%**に相当する。

## この結果が示すこと

- **ユーザーの仮説を支持する数字**: サイト全体の表示回数-74%（348.8→89.5/日）のうち、相当割合が「URL構造変更＋記事整理による404化」で直接説明できる規模だった
- 前回提示した`site`ドメイン誤記（2026-04-13〜04-25の約2週間）は、この構造的なリダイレクト漏れに**輪をかけて追い打ちをかけた副次的要因**という位置づけが妥当。主因は「URL構造の切り替えと記事整理が、大量の旧URLを未処理のまま404化させたこと」であり、ユーザーの見立てが的確だった
- 「記事を整理して省力化した」際に、統合・削除された記事の受け皿（リダイレクト先）を都度登録する運用が徹底されていなかったことが、今回138件という規模に表れている

## 個別マッチングした27件の内訳（表示回数上位）

| 旧URL | zenki表示回数 | リダイレクト先 | マッチ根拠 |
|---|---|---|---|
| `/posts/bouon-price-souba/` | 819 | `/ja/money/soundproof-room-price-market/` | 「防音 価格 相場」で完全一致するタイトルの既存記事 |
| `/posts/streamer-proofroom-setting/` | 604 | `/ja/creator/streamer-soundproof-room-comprehensive-guide/` | 配信者向け防音室セッティングの包括ガイドに統合済みと判断 |
| `/posts/vtuber-proofroom-knowledge/` | 577 | `/ja/creator/streamer-soundproof-room-comprehensive-guide/` | 同上 |
| `/posts/gamesteram-proofroom-soudflash/` | 279 | `/ja/creator/voice-chat-soundleak-fix/` | 「音漏れ（soudflash）」対策の配信者向け記事 |
| `/posts/bouon-kanki-taisaku/` | 274 | `/ja/diy/diy-soundproof-ventilation-heat-exhaust/` | 「換気対策」で内容一致 |
| `/posts/bouonroom-tettei-kaisetsu/` | 263 | `/ja/soundproof-room/bouon-osusume-hikaku/` | 「防音室徹底解説」→比較ハブ記事 |
| `/posts/grobal-soundproof-marketcheck/` | 157 | `/ja/business/global-soundproof-market-trends/` | 「世界の防音市場」で完全一致するタイトル |
| `/posts/proofroom-lowsound-windsoundnone/` | 146 | `/ja/soundproof-room/proofroom-aircondition-select/` | 空調・風切り音関連 |
| `/posts/steram-soudncondition-check/` | 119 | `/ja/creator/streamer-soundproof-room-comprehensive-guide/` | 配信音響チェック |
| `/posts/apartment-soundproof-room-floor-weight/` | 107 | `/ja/soundproof-rental/apartment-weight-limit-500kg/` | 「床荷重」で完全一致するテーマ |
| `/posts/bourental-ippanrantal/` | 100 | `/ja/soundproof-rental/bouon-rental-market-guide/` | 防音賃貸 vs 一般賃貸の比較文脈 |
| `/posts/bourenatal-naikencheck/` | 90 | `/ja/creator/streamer-rental-preview-checklist/` | 「内見チェック」で完全一致するテーマ |
| （以下15件は表示回数88以下、詳細は`astro.config.mjs`のコメントブロック参照） | | | |

残り67件（統合先不特定・ロングテール）は`astro.config.mjs`内のコメント「第4弾」ブロックにまとめて記載。個別の統合先特定は表示回数が小さく費用対効果が低いため、カテゴリindexへの安全側フォールバックに留めた。将来これらのクエリで再度アクセスが確認された場合に、個別記事化を検討する。

## 対応状況

- [x] 138件全てを`astro.config.mjs`の`redirects`に追記
- [x] `astro build`で全件のリダイレクト動作を確認（191ページ→リダイレクトスタブ込みで569ファイル生成、ビルドエラーなし、重複キーなし）
- [x] 個別マッチング27件はタイトル・キーワードの類似性を`interlink-postlist.md`で確認した上で選定
- [ ] 効果測定は次回GSCエクスポート（`.workspace/strategies/qfo-20260702.md`と同じく2026-07-30〜08-27目安）で実施。特にこの138件のURLに対応する旧クエリが再度表示回数を獲得するかを最優先で確認する

## 関連ファイル

- `astro.config.mjs`（"旧Hugo /posts/ 未登録分・第2〜4弾" コメントブロック）
- `.workspace/.data-set/seo-check/gsc-analysis-20260702/ranking-collapse-root-cause-20260702.md`（前回の`site`ドメイン誤記レポート、本レポートで主因/副次要因の位置づけを更新）
- `.workspace/.data-set/seo-check/gsc-analysis-20260702/missing-redirects-20260702.csv`（前回の32件、本レポートで対象を全件に拡大）
