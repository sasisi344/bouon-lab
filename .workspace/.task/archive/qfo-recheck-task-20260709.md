# QFO再調査（2026-07-09）改善タスクリスト（2026-07-10 実装全完了）

作成日：2026-07-09
完了日：2026-07-10 — A群（新規記事8本）・B群（既存記事改修7件）を全件完了。本文中に「カバー画像は未生成」とあるA-3〜A-8も、その後 `archieve/qfo-recheck-cover-images-20260709.md` にて全件生成・frontmatter整合確認済み。再チェック時に `npx astro build`（218ページ・0エラー）で全8記事の公開状態（`draft: false`）と画像リンクを確認した。残る効果測定（旧C節）は `task-list.md` の「QFO再調査 効果測定」項へ移管。
出典：`.workspace/strategies/qfo-recheck-20260709.md`（GSC 1年分クエリ × 全211記事の突合せで抽出した「隠れ見込み客」クラスター）

進め方の前提：

- 新規記事は `_draft/` → `/draft-plan` → `/publish-draft` の標準フローで作成する
- 既存記事の改修は<strong>URLスラッグ変更禁止</strong>（既存SEO評価の保護）
- 効果測定の答え合わせは 2026-08-06〜09-03 のGSCエクスポートで実施

---

## A. 新規記事の作成（優先度順）

### A-1. ワンタッチ防音壁 レビュー記事【最優先・商用】（2026-07-10 完了）

- [x] 「ワンタッチ防音壁は効果ある？評判と自作代用の可否を検証」を公開（`src/content/ja/soundproof-room/onetouch-soundproof-wall-review/`、category: soundproof-room）
- [x] 核クエリ: `ワンタッチ防音壁 効果`／`評判`／`賃貸`／`自作`／`買う前`に対応する見出し構成（効果の限界・賃貸での確認点・評判傾向・DIY代用比較・購入前チェックリスト）
- [x] `diy-soundproofing-tips`・`bouon-osusume-hikaku`・`nitori-soundproof-acoustic-guide`への内部リンクを設置。カバー画像生成済み

### A-2. アース・グランドループのノイズ対策（一般向け）【最大ボリューム】（2026-07-10 完了）

- [x] 「アース線とノイズの関係を基礎から解説｜グランドループの仕組みと対処」を公開（`src/content/ja/knowledge/ground-loop-noise-basics/`、category: knowledge）
- [x] 核クエリ: `アース ノイズ 対策`／`グランド ループ 対策`／`接地 ノイズ 対策`／`ハムノイズ`／`pa ノイズ 対策`に対応（原理・切り分け手順・対策優先順位・PA/電子工作特有の注意点を網羅）
- [x] カニバリ回避: 既存 `/ja/creator/cable-noise-ground-loop-prevention/`（配信環境特化）と新規（原理と一般対処）で相互リンクを設置し役割分担を明示。カバー画像生成済み

`npx astro check`（0エラー）・`npx astro build`（212ページ生成）で確認済み。

### A-3. 防音室・ピアノ室×住宅ローン【money系ギャップ】（2026-07-10 完了）

- [x] 記事案「防音室・ピアノ室は住宅ローンに組み込める？新築時の資金計画と固定資産税の扱い」を公開（`src/content/ja/money/piano-soundproof-mortgage-tax-guide/`、category: money）
- [x] 核クエリ: `ピアノ 住宅ローン`（41表示・33位）／`防音室 固定資産税`／`防音室 ローン`に対応。固定資産税・住宅ローンの個別助言はせず一般的な制度説明に限定
- [x] `soundproof-room-loan-guide`（防音室単体ローン）・`housing-builder-soundproof-comparison`（ハウスメーカー比較、前期297表示）と相互リンクし注文住宅クラスターを形成。カバー画像生成済み

### A-4. サックス×賃貸【楽器別の穴】（2026-07-10 完了）

- [x] 「サックスは賃貸で練習できる？アパートの現実解と防音室選び」を公開（`src/content/ja/soundproof-rental/saxophone-apartment-practice-guide/`、category: soundproof-rental）
- [x] 核クエリ: `サックス アパート`／`アルトサックス アパート`／`サックス 防音室`に対応（音量・周波数特性、時間帯・消音器・練習場所の使い分け、防音室検討の目安D-55〜60の順で構成）
- [x] アビテックス・ナサールは本文中で商品名として言及していないため `<CtaBox>` は設置せず（ルール通り）。`bourental-syaouseid-choiceindi`・`instrument-allowed-rental-research-method`・`rental-unit-soundproof-room`・`rental-permission-proposal-template`・`night-practice-soundproof-guide`・`rental-caution-cello`へ内部リンクを設置。カバー画像生成済み

### A-5. マンションで楽器は何時まで？【好順位×記事なし】（2026-07-10 完了）

- [x] 「マンションで楽器は何時まで？管理規約・条例・受忍限度の目安」を公開（`src/content/ja/knowledge/mansion-instrument-practice-time-rules/`、category: knowledge）
- [x] 核クエリ: `隣人 楽器 演奏 時間帯`／`マンション 楽器 何時まで`に対応（管理規約の規定例・自治体条例の目安・受忍限度の考え方・時間帯マナーの目安を整理。断定的な法的助言は避け一般的傾向として提示）
- [x] `night-practice-soundproof-guide`（防音室選び・Dr値軸）とスコープを分離し相互リンクを設置（本記事はルール・マナー軸、night-practice側は設備・防音性能軸として役割分担を明示）。カバー画像生成済み

### A-6. 音大生のシェアハウス・物件探し【地域×学生】（2026-07-10 完了）

- [x] 「音大生の物件探し完全ガイド｜防音シェアハウス・楽器可賃貸を比較」を公開（`src/content/ja/soundproof-rental/music-student-property-search-guide/`、category: soundproof-rental）
- [x] 核クエリ: `シェアハウス 天王寺 防音室`／`シェアハウス 中央区/京都/東京 音大生`に対応（楽器可賃貸・防音シェアハウス・大学練習室代替の3択フレームワーク＋天王寺・京都・東京・中央区の横断比較表）
- [x] `sendai-soundproof-rental-guide`（宮教大向けニッチ化の成功パターン）の横展開として設計。「住居＋学内外の練習場所」の発想を引用し相互リンク（sendai記事の関連リンク欄にも新記事を追加、lastmod更新）。`osaka-soundproof-rental-guide`・`kyoto-soundproof-rental-guide`・`tokyo-soundproof-rental-summary`・`instrument-allowed-rental-research-method`・`rental-price-index-13cities-soundproof`へも内部リンク設置。カバー画像生成済み

### A-7. 電子ドラム・電子ピアノの振動対策【ニッチ・独占可能】（2026-07-10 完了）

- [x] 「電子ドラムの振動対策｜ふにゃふにゃシステムの効果と限界」を公開（`src/content/ja/diy/electronic-drum-vibration-fuwafuwa-system/`、category: diy、medium）
- [x] 核クエリ: `ディスク ふにゃふにゃシステム 苦情`（6表示・16位）／`電子ドラム 騒音`／`電子ピアノ カタカタ音`に対応（固体伝搬音の仕組み・ふにゃふにゃシステムの効果と限界・電子ピアノのペダル異音対策・防振ボード等の確実な選択肢を網羅）
- [x] `vibration-reduction-science`・`gaming-floor-impact-noise-fix` へ内部リンクを設置し、両記事からも新記事への相互リンクを追記済み（lastmod更新済み）。カバー画像生成済み

### A-8. 音過敏・聴覚過敏・ミソフォニア【健康系・慎重に】（2026-07-10 完了）

- [x] 「音に過敏でつらい人の環境調整ガイド｜聴覚過敏・ミソフォニアと防音の付き合い方」を公開（`src/content/ja/knowledge/sound-sensitivity-misophonia-environment-guide/`、category: knowledge）
- [x] YMYL配慮: 「治る」「治療」「改善する」等の断定表現を使わず<strong>環境調整（遮音・吸音・マスキング・距離や時間帯）</strong>の枠組みに限定。「受診の目安」セクションで耳鼻咽喉科・心療内科等への相談導線を明記
- [x] HSP記事2本（`hsp-soundproof-room-guide`・`hsp-soundproof-curtain-guide`）と相互リンク（双方から新記事へもリンクを追記、lastmod更新済み）。カバー画像生成済み

---

## B. 既存記事の改修・加筆（2026-07-10 全件完了）

- [x] <strong>B-1. ニトリ記事のCTR改善</strong>: `nitori-soundproof-acoustic-guide` のtitle/descriptionを「壁に効果ある？」への直答型に改善（`ニトリ 防音 壁 効果` 等のクエリに直接応答する形へ変更）
- [x] B-2. `housing-builder-soundproof-comparison` のtitle/descriptionを「防音室が作れるハウスメーカーおすすめ5社」に改善（`防音室 ハウスメーカー おすすめ` 297表示・21位に対応。A-3新記事`piano-soundproof-mortgage-tax-guide`への内部リンク受け設置済み）
- [x] B-3. `soundproof-room-buyback-guide` に「地域別の買取事情（東京・関東／兵庫・関西／九州）」セクションを加筆
- [x] B-4. `treadmill-apartment-soundproofing-layering` に「リングフィット・フィットネスゲームの足音振動」セクションを加筆（ランニングマシーンと同じ固体伝搬音の原理を横展開）
- [x] B-5. `renter-parent-house-soundproofing` のドア対策節に「バタン」閉扉音対策（戸当たりクッション等100均アイテム）のサブセクションを加筆
- [x] B-6. `bass-trap-installation-guide` への内部リンクを2件追加（`closet-diy-soundproof-room`・`diy-wall-soundproofing-room-guide`から低音処理の文脈でリンク。既存5記事と合わせて計7記事から被リンク）
- [x] B-7. `construction-types-cost-comparison` に「坪単価で比較するといくらになるか」セクションを加筆（壁・床工法を6畳=3坪基準で坪単価換算）

全7件、`npx astro check`（0エラー）・`npx astro build`（210ページ生成、エラーなし）で確認済み。lastmodも全記事更新済み。

---

## C. 効果測定（→ `task-list.md` へ移管済み・2026-07-10）

以下2項目は未完了だが実行日が2026-08-06以降のため、`.workspace/.task/task-list.md` の「QFO再調査（2026-07-09）の効果測定」項で管理する（本ファイルはアーカイブ）。

- 2026-08-06以降のGSCエクスポートで、A-1〜A-8の核クエリに表示・クリックが付いたか答え合わせ（特にA-1・A-2は表示ベースが既にあるため公開4週間で観測可能）
- B-1（ニトリ）・B-2（ハウスメーカー）はCTRの変化を確認
