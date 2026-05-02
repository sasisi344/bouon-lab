/**
 * 言語別トップカテゴリ（URL 第2セグメント）。
 * - ja: 実務ハブ（防音室 / 防音賃貸 / コラム）
 * - en: 日本の防音・静寂を世界向けに説明する「Japan lens」軸
 */
export const JA_TOP_CATEGORIES = [
  'soundproof-room',
  'soundproof-rental',
  'column',
] as const;

export const EN_TOP_CATEGORIES = [
  'japan-noise-and-society',
  'japan-soundproof-housing',
  'japan-quiet-spaces',
] as const;

export type JaTopCategory = (typeof JA_TOP_CATEGORIES)[number];
export type EnTopCategory = (typeof EN_TOP_CATEGORIES)[number];

/** パンくず・カテゴリ一覧・ナビ用ラベル */
export const TOP_CATEGORY_LABELS: Record<
  JaTopCategory | EnTopCategory,
  { ja: string; en: string }
> = {
  'soundproof-room': { ja: '防音室', en: 'Soundproof Room' },
  'soundproof-rental': { ja: '防音賃貸', en: 'Soundproof Rental' },
  column: { ja: 'コラム', en: 'Column' },
  'japan-noise-and-society': {
    ja: '（en）騒音と社会',
    en: 'Noise & Society in Japan',
  },
  'japan-soundproof-housing': {
    ja: '（en）防音と住まい',
    en: 'Soundproof Housing in Japan',
  },
  'japan-quiet-spaces': {
    ja: '（en）静かな空間',
    en: 'Quiet Spaces & Booths in Japan',
  },
};

export function topCategoriesForLang(lang: string) {
  return lang === 'en' ? EN_TOP_CATEGORIES : JA_TOP_CATEGORIES;
}

export function labelForCategory(
  category: string,
  lang: 'ja' | 'en',
): string {
  const row = TOP_CATEGORY_LABELS[category as keyof typeof TOP_CATEGORY_LABELS];
  if (!row) return category.toUpperCase();
  return lang === 'ja' ? row.ja : row.en;
}
