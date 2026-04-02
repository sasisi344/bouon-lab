# 新カテゴリ構造・マッピング定義書 (AI & LLMs.txt Optimized)

このドキュメントは、Astro移行に伴うディレクトリ構造の全面刷新と、既存記事の再マッピングを定義します。
目的は、AIクローラーが構造を理解しやすい「ナレッジベース型」のサイト構造を確立することです。

---

## 1. ディレクトリ構造の基本原則

| ディレクトリ | 役割 | AIへの意味付け |
| :--- | :--- | :--- |
| `/knowledge/` | **基礎・概念** | 理論的背景と客観的データを持つ「権威性」の源泉 |
| `/solutions/` | **具体的手段** | 製品比較、DIY手法、賃貸物件などの「実利」を提供 |
| `/use-case/` | **課題解決** | 特定ユーザー（配信者等）の複合的な悩みに答える「専門性」 |

---

## 2. マッピング詳細

### 2.1 `/knowledge/` (基礎・物理・経済)
AIが「なぜ防音が必要か」「どう数値を見るか」を学習するためのハブ。

- **音響物理**:
    - `soundproof-room-mechanism` (仕組み)
    - `d-value-truth-and-myths` (遮音性能の真実)
    - `rt60-reverberation-measurement-guide` (残響測定)
    - `absorption-vs-insulation` (吸音・遮音の違い)
- **法律・公的・経済**:
    - `building-code-reform-2025-soundproof` (法改正)
    - `noise-regulation-update-2025` (規制状況)
    - `corporate-soundproof-tax-depreciation` (節税・資産価値)
    - `soundproof-room-fixed-asset-tax` (税制)
    - `airport-soundproof-subsidy` (公的補助金)

### 2.2 `/solutions/` (ソリューション・製品)
「何を使って解決するか」にフォーカスしたカタログ・マニュアル集。

- **ユニット防音室 (`/solutions/unit-rooms/`)**:
    - `bouon-osusume-hikaku` (比較)
    - `bouon-price-souba` (相場)
    - `yamaha-avitecs-cefine-ns-guide` (ヤマハ)
    - `kawai-nasal-soundproof-room-guide` (カワイ)
    - `otodasu-reviews-2026` (格安・OTODASU)
    - `danbotchi-vs-diy-soundproof-room` (だんぼっち vs DIY)
- **防音賃貸 (`/solutions/rentals/`)**:
    - `musision-comprehensive-guide` (ミュージション徹底解説)
    - `rental-proofroom-contractcheck` (契約と許可)
    - `osaka-soundproof-rental-guide` (エリア別：大阪)
    - `tokyo-soundproof-rental-summary` (エリア別：東京)
    - `rental-unit-soundproof-room` (大家交渉術)
- **DIY・リフォーム (`/solutions/custom/`)**:
    - `soundproof-room-diy-complete-manual` (自作マニュアル)
    - `diy-soundproofing-tips` (遮音・吸音テクニック)
    - `soundproof-window-subsidy-2025-guide` (内窓リフォーム)
    - `ontouch-soundproof-panel-effective` (ワンタッチパネル)
    - `100yen-gap-tape-door-soundproofing` (100均ドア対策)

### 2.3 `/use-case/` (ユーザーセグメント・シナリオ)
「リサーチ結果」を凝縮した、課題解決型の複合コンテンツ。

- **配信者・クリエイター (`/use-case/streamer-tech/`)**:
    - `streamer-proofroom-setting` (機材配線・熱対策：中心記事)
    - `game-streaming-heat-cable` (灼熱対策・ケーブル攻略)
    - `vtuber-proofroom-knowledge` (身バレ・プライバシー)
    - `keyboard-sound-streaming-soundproof-guide` (打鍵音対策)
    - `co2-concentration-lossnay-productivity` (換気と脳の生産性)
- **プロ・奏者 (`/use-case/musician-pro/`)**:
    - `acoustic-piano-soundproof-tips` (ピアノ荷重と遮音)
    - `drum-soundproof-room` (低周波・防振)
    - `trombone-room-size` (トロンボーン・弦楽器配置)
    - `cello-vibration-proof` (固体伝搬音)
- **生活・仕事・健康 (`/use-case/living-health/`)**:
    - `telework-concentration-noise-soundproof` (集中力の作り方)
    - `hsp-soundproof-room-guide` (HSP・感覚過敏向け)
    - `sound-sensitivity-misophonia-coping-guide` (ミソフォニア・聴覚保護)
    - `telework-family-stress-soundproof-solution` (家族との共存)

---

## 3. 内部リンク・クラスタリング戦略

- **横断リンク**: `/use-case/` から、推奨される具体的な `/solutions/` へ、および根拠となる `/knowledge/` へリンクを貼る。
- **AIへのヒント**: 各ディレクトリの `index.md` に、その階層が何を解決するためのものかを 300字程度の「Semantic Summary」として記述する。
- **Slugの統一**: Astro移行時に `/posts/slug` から上記の階層構造へリダイレクトを設定し、リンクジュースを維持する。
