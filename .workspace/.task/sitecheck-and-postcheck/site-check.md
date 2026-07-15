# 防音Labをより強固なサイトにするために

コンテンツの拡充を進める。
現在はjaディレクトリはあるけどenがないので、英語記事も拡充したい。

## 概要と設計思考

### 関連キーワードの取得

ラッコキーワードで「関連キーワード」を取得した。

- 防音室: .workspace\.task\sitecheck-and-postcheck\suggest-word\rakkokeyword_suggestKeywords_防音室_2026-07-15_12-29-51.csv
- 防音賃貸: C:\Users\sasis\344dev\bouon-lab\.workspace\.task\sitecheck-and-postcheck\suggest-word\rakkokeyword_suggestKeywords_防音賃貸_2026-07-15_12-30-15.csv

現在のサイトコンテンツに足りてない記事をここから発掘する。

### サイトコンテンツの洗い出し

現在公開されている記事（jaから）をリストアップ。
サジェストワードと一致するKWの記事はそのまま継続するが、見込みアクセスが少ないようならリライト対象にする。コンテンツが弱いと感じたら、複数のKWを融合する感じにロングテールを施策にするため、複数の記事を結合したまとめ記事にする。

## 結果表示
作成する記事など、サジェストからプランしたものは「suggest-task.md」に書き出す。
[C:\Users\sasis\344dev\bouon-lab\.workspace\.task\sitecheck-and-postcheck\suggest-task.md]

---

## 作業工程（整理版 2026-07-15）

### 前提となる現状把握

- サジェストCSVは <strong>防音室 731KW / 防音賃貸 160KW</strong>。ただし月間検索数・SEO難易度・CPCは<strong>すべて null</strong>（サジェスト取得のみで指標未取得）。「見込みアクセス」の判断はCSV単体では不可能。
- CSVは <strong>UTF-16LE・タブ区切り</strong>。分析前にUTF-8変換が必要。
- 既存コンテンツは <strong>ja 約210記事</strong>（business / creator / diy / knowledge / local / money / soundproof-rental / soundproof-room）。防音室・防音賃貸のど真ん中KWはかなりカバー済みで、実態は「ゼロから発掘」ではなく<strong>ギャップ分析＋弱い記事の特定</strong>。
- <strong>en は3記事既存</strong>（Japan lens 3カテゴリ）。「enがない」ではなく「拡充が止まっている」が正しい。旧翻訳記事は意図的に非公開化済みで、単純翻訳には戻さない方針。

### Phase 0: データ整備（所要 ~30分）

1. CSV 2本を UTF-8 に変換し、`suggest-word/` に `*_utf8.csv` として保存
2. `node .workspace/scripts/build-interlink-postlist.mjs` で記事一覧を最新化

### Phase 1: KW × 既存記事マッピング（所要 半日）

1. サジェストKWをテーマ単位にグルーピング（例: 組み立て式 / 中古 / 畳数別 / 楽器別 / エアコン / 地域名 / 値段…）
2. 各グループを既存記事と突き合わせ、<strong>①完全カバー / ②部分カバー / ③未カバー</strong> に分類
3. 結果を `suggest-task.md` にマッピング表として書き出す（このフェーズの成果物）

初見での未カバー候補: 「組み立て式防音室」「中古防音室の探し方・相場」「防音室付き物件（賃貸検索軸）」「畳数別（4畳半・6畳）」「未執筆の地域KW（池袋・所沢・沖縄など駅・区レベル）」

### Phase 2: 需要データの補完（所要 半日・Phase 1と並行可）

サジェストCSVに検索数がないため、優先度判断は<strong>手元のアクセスデータを正</strong>とする:

1. <strong>週次データ（`.workspace/access-data/2026/W26〜W28/`）</strong> の `bouon-gsc-wNN.csv`（ランディングページ×クリック・表示回数・CTR・平均掲載順位）を集計し、②部分カバー記事の強弱を判定
   - 週あたり掲載ページは22〜48行のみ → <strong>3週分に一度も現れない記事＝表示ほぼゼロ</strong>として需要ミスマッチ判定（リライトより統合・方針転換を検討）
   - ※W29はまだ未取得。取得され次第 `2026/W29/` に追加して同様に集計
2. 週次だけでは母数が小さいため、<strong>1年分データ（`2026/gsc-query-data-0702-1year/zenki・kouki/ページ.csv`・`クエリ.csv`）</strong>で長期トレンドとクエリの取りこぼしを補完
3. 未カバーKWのうち記事化候補は、ラッコキーワードで<strong>月間検索数を再取得</strong>（サジェスト取得だけでは足りない）

### Phase 3: 施策決定 → suggest-task.md 確定（所要 半日）

Phase 1×2 の結果を突き合わせ、KWグループごとに施策を割り当てる:

- <strong>方針（2026-07-15確定）: リライト案は廃止し、新規記事メイン</strong>
- <strong>③未カバー × 検索数あり</strong> : 新規記事（`_draft/` → `/draft-plan` → `/publish-draft` の標準フロー）
- <strong>②部分カバー × GSC実績弱い</strong> : 既存記事の改稿ではなく、KWを受け直す新規まとめ記事で対応
- <strong>弱い記事が複数近接</strong> : ロングテール統合のまとめ記事化（creatorカニバリ解消の前例に倣い、吸収元の扱い＝リダイレクト or 導線集約を明記）
- 優先度（高/中/低）と想定カテゴリ・slugを付けて `suggest-task.md` を確定版にする

### Phase 4: 実行（weekly-task.md に組み込み・継続）

1. `suggest-task.md` の高優先から週次本数を `weekly-task.md` に割り当て（目安: 新規2本 or リライト3本/週）
2. 公開ごとに内部リンク追加 → `build-interlink-postlist.mjs` 再生成
3. 月1回 GSC で効果測定し、Phase 3 の優先度を見直す

### Phase 5: en 拡充（別トラック・Phase 4 と並行・方針確定 2026-07-15）

- 日本語記事の流用・翻訳はしない。<strong>FAQ型・文化文脈コンテンツ</strong>で作る
- 切り口: 煉瓦造・コンクリ厚壁が標準の英語文化圏では、日本のRC・木造ほど防音はセンシティブではない。この遮音格差を踏まえ、<strong>「日本に来たら音がうるさいと言われまくるんだけど？」型のFAQ</strong>で移住者・日本生活に関心のある層にリーチする
- 逆方向の展開: 欧米生活で日本人が生活音とどう向き合うべきか、を ja 記事化（knowledge、海外赴任・留学層向け）
- Japan lens 3カテゴリ（japan-noise-and-society / japan-soundproof-housing / japan-quiet-spaces）に配置、月1〜2本ペース
- 既存en記事は表示6,000超（CTR 0.05%）＝英語圏の露出土壌は既にある