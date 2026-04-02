# Astro移行 & コンテンツ再構築実行ロードマップ (Action Plan)

このドキュメントは、防音LabのAstro移行および新しいAI最適化カテゴリ構造への移行手順を定義した実行計画書です。

---

## フェーズ1: テクニカル・ファンデーション (Technical Foundation)
**目標**: Astroの型定義とディレクトリ構造を新タクソノミーに適合させる。

1.  **[ ] Content Collectionsの定義**: `src/content/config.ts` に `knowledge`, `solutions`, `use-case`, `company`, `column` の定義を追加。
2.  **[ ] ディレクトリ配置の変更**: `src/content/posts` 内の記事を、`new-taxonomy-mapping.md` に基づいて各ディレクトリへ物理的に移動。
3.  **[ ] Frontmatterの正規化**: すべての記事のFrontmatter（date, description, weight等）をAstroの新しいスキーマに統一。

---

## フェーズ2: コンテンツ・リファイン (Content Refine)
**目標**: 既存記事を10x Content化し、AIクローラー向けの「ナレッジの核」を形成する。

1.  **[ ] 各ディレクトリのハブ記事(Index)の作成**:
    - `/knowledge/index.md`: 防音理論と経済的合理性のサマリー。
    - `/solutions/index.md`: 各種防音手段の比較とカタログ的価値。
    - `/use-case/index.md`: 特定課題（配信・奏者）への具体的解決アプローチ。
2.  **[ ] 最優先リライト(P1)の実行**:
    - `streamer-proofroom-setting` (配信者ハブ)
    - `bouon-osusume-hikaku` (比較ハブ)
    - `building-code-reform-2025-soundproof` (法改正・補助金ハブ)
3.  **[ ] リサーチ情報の統合**: 
    - 忍者ケーブル(Cat6A)、スポットクーラー設置、130%賃料ロジック等の独自知見を対象記事へ肉付け。

---

## フェーズ3: AI・SEO最適化 (AI & SEO Optimization)
**目標**: AIクローラーに対する「権威あるナレッジベース」としてのシグナルを最大化する。

1.  **[ ] LLMs.txt の生成**: 各階層のサマリーを抽出し、AI向けガイドファイルを作成。
2.  **[ ] 内部リンクの再構築**: Pillar記事からSpoke記事へ、およびSpoke記事から根拠となるKnowledgeへの相互リンク設置。
3.  **[ ] 301リダイレクト設定**: 旧URLから新ディレクトリ構造へのリダイレクトマップを `_redirects` 等に定義。

---

## フェーズ4: 検証とデプロイ (Verify & Deploy)
1.  **[ ] Build検証**: AstroのBuildが正常に通ることを確認（リンク切れ、画像パス）。
2.  **[ ] Lighthouse/AI Scraper テスト**: 読み込み速度とAIによる情報の取得しやすさを検証。
3.  **[ ] 本番デプロイとGSC監視**: インデックスの推移とエラーを追跡。
