import { defineCollection, z } from 'astro:content';
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
  
  // タグ
  tags: z.array(z.string()).min(1).max(10).default(['未分類']),
  
  // 画像アセット
  image: image().optional(),
  
  // メタデータ
  isHighPriority: z.boolean().optional(),
});

// 各コレクションの定義（AIクローラーが解釈しやすい階層構造）
const generateId = ({ entry }: { entry: string }) => entry.replace(/\.[^/.]+$/, '').replace(/\/index$/, '');

const knowledge = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/knowledge", generateId }),
  schema: baseSchema,
});

const solutions = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/solutions", generateId }),
  schema: baseSchema,
});

const useCase = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/use-case", generateId }),
  schema: baseSchema,
});

const company = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/company", generateId }),
  schema: baseSchema,
});

const column = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/column", generateId }),
  schema: baseSchema,
});

export const collections = { 
  knowledge, 
  solutions, 
  'use-case': useCase, 
  company, 
  column 
};
