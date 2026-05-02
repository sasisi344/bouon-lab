/**
 * frontmatter に image がない記事用のカテゴリ共通カバー。
 * 差し替えは src/assets/images/category-default/{カテゴリキー}.png を置き換える。
 */
import type { ImageMetadata } from 'astro';

import columnCover from '../assets/images/category-default/column.png';
import japanNoiseCover from '../assets/images/category-default/japan-noise-and-society.png';
import japanHousingCover from '../assets/images/category-default/japan-soundproof-housing.png';
import japanQuietCover from '../assets/images/category-default/japan-quiet-spaces.png';
import soundproofRentalCover from '../assets/images/category-default/soundproof-rental.png';
import soundproofRoomCover from '../assets/images/category-default/soundproof-room.png';
import fallbackCover from '../assets/images/report-common-cover.png';

const DEFAULT_BY_CATEGORY: Record<string, ImageMetadata> = {
  'soundproof-room': soundproofRoomCover,
  'soundproof-rental': soundproofRentalCover,
  column: columnCover,
  'japan-noise-and-society': japanNoiseCover,
  'japan-soundproof-housing': japanHousingCover,
  'japan-quiet-spaces': japanQuietCover,
};

export function getDefaultCoverForCategory(category: string): ImageMetadata {
  return DEFAULT_BY_CATEGORY[category] ?? fallbackCover;
}

type PostLike = { data: { image?: ImageMetadata; category: string } };

/** 記事のカバー画像（未設定時はカテゴリ共通 → 不明カテゴリはフォールバック） */
export function resolvePostCover(post: PostLike): ImageMetadata {
  return post.data.image ?? getDefaultCoverForCategory(post.data.category);
}
