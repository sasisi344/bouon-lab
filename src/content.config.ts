import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

const baseSchema = ({ image }: any) => z.object({
  title: z.string().max(100),
  description: z.string().min(10).max(300),
  slug: z.string().optional(), // 手動スラッグ指定用
  date: z.coerce.date(),
  lastmod: z.coerce.date().optional(),
  draft: z.boolean().default(true),
  
  // i18n support
  lang: z.enum(['ja', 'en', 'zh', 'ko']).default('ja'),
  
  // カテゴリ・構造化データ用
  category: z.string(), // メインカテゴリ（フォルダ名と同期）
  subcategory: z.string().optional(),
  
  // タグ（過剰付与を防ぐため最大7個）
  tags: z.array(z.string()).min(1).max(7).default(['未分類']),
  
  // 画像アセット
  image: image().optional(),
  
  // メタデータ
  isHighPriority: z.boolean().optional(),

  // 検索エンジンにインデックスさせない（公開は維持しつつnoindex,follow）
  noindex: z.boolean().default(false),

  // 記事末尾の「次に読む」導線を手動指定
  nextSteps: z
    .array(
      z.object({
        stage: z.enum(['beginner', 'compare', 'action']),
        slug: z.string().optional(),
        url: z.string().optional(),
        title: z.string().optional(),
      })
    )
    .max(3)
    .optional(),

  // カテゴリ index 記事向けのスターター手動キュレーション
  starterSet: z.array(z.string()).max(3).optional(),
});

// 言語ファースト構造: src/content/{lang}/{category}/{subcategory}/{slug}/index.mdx
// ja の category は soundproof-room 等。en のみ japan-noise-and-society 等（src/data/contentCategories.ts）
const generateId = ({ entry }: { entry: string }) => entry.replace(/\.[^/.]+$/, '').replace(/\/index$/, '');

const posts = defineCollection({
  loader: glob({ pattern: "{ja,en,zh,ko}/**/*.{md,mdx}", base: "./src/content", generateId }),
  schema: baseSchema,
});

export const collections = { 
  posts,
};
