# Astro Content Collections & i18n プロフェッショナル・ストラクチャ仕様

## 1. 物理ディレクトリ構造 (i18n重視型)
Astroの `src/content/posts/` 以下に、言語コードをトップレベルに配置した階層構造を厳守します。これにより、クローラーに対して論理的な言語分離を示し、構造化データの精度を最大化します。

```text
src/content/posts/
├── ja/                 # 日本語ディレクトリ
│   └── [category]/     # room, rent, reform, diy, knowledge
│       └── [slug]/
│           ├── index.mdx
│           └── cover.png (自動WebP変換対象)
├── en/                 # 英語ディレクトリ
│   └── [category]/
│       └── [slug]/
│           ├── index.mdx
│           └── cover.png (ローカライズ画像)
└── cn/                 # 中国語ディレクトリ（将来拡張）
```

---

## 2. Content Collections スキーマ定義 (src/content.config.ts)
Astro 6 の Content Layer API を使用し、厳格な型定義を行います。

```typescript
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/posts" }),
  schema: ({ image }) => z.object({
    title: z.string().max(60),
    description: z.string().max(160),
    date: z.date(),
    lang: z.enum(['ja', 'en', 'zh', 'ko']).default('ja'),
    category: z.enum(['room', 'rent', 'reform', 'diy', 'knowledge']),
    tags: z.array(z.string()).default([]),
    image: image().optional(), // Page Bundle内の画像
  }),
});
```

---

## 3. デザイン・アイデンティティ：Intellectual Dark Mocha
「博識な専門家による静寂のナレッジベース」を表現するため、以下のデザイン・コードを全ページに適用します。

- **Background**: `#0D0B0A` (Deep Espresso)
- **Primary Accent**: `#D4AF37` (Brass/Gold)
- **Concept**: 夜の私設図書館。照明を落とし、必要な情報にスポットライトを当てる演出。
- **Theme**: ダークモード固定。静寂と集中を促す。

---

## 4. 移行ルール (Hugo to Astro)

1. **言語判定**: 
   - `index.en.md` 等の拡張子を検知し、適切な `[lang]` フォルダへ振分。
   - フロントマターに `lang` フィールドを強制付与。
2. **画像アセット**: 
   - 言語ごとのフォルダ内に配置し、多言語対応画像を優先。
   - クローラーフレンドリーなAlt属性を必須とする。
3. **リンク解決**: 
   - `SmartLink.astro` を使用し、言語パスを含む `/ja/room/slug` 形式へ自動変換。

---
最終更新: 2026-03-13
策定: Antigravity (Gemini)
ステータス: プロジェクト標準ルールとして確定
