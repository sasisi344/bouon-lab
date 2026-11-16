/**
 * AdSense 配置戦略（4種）
 *
 * 1. 自動広告        … 全画面（モバイル全画面広告）とアンカーのみ ON。記事内の自動広告は OFF
 * 2. rectangleList   … 一覧・トップの全幅レクタングル（手動ユニット）
 * 3. rectangleArticleMid(2/3) … 記事中（2つ目・5つ目・8つ目の H2 の直前、最大3枠）のレスポンシブ（手動ユニット）
 * 4. rectangleArticleEnd … 記事末尾レクタングル（手動ユニット）
 * 5. multiplexArticleEnd … 記事末尾の関連記事の下の Multiplex（手動ユニット）
 *
 * 手動ユニットは AdSense で「ディスプレイ広告 → レスポンシブ」を作成し、
 * 下記スロットIDを設定してください。位置ごとの収益を見分けるため、記事中は専用ユニットを使います。
 */
export const ADSENSE_CLIENT = 'ca-pub-9798094072282530';

/** レスポンシブ・レクタングル用スロット（一覧・記事末尾で共用可） */
export const RECTANGLE_SLOT = '3778705007';

/** 記事中レスポンシブ用スロット（AdSense ユニット名「bouon」、2026-10-27作成） */
export const ARTICLE_MID_SLOT = '5976402243';

/** 記事中2つ目（5つ目の H2 の直前）用スロット（AdSense ユニット名「bouon2」、2026-11-16作成） */
export const ARTICLE_MID2_SLOT = '4978891635';

/** 記事中3つ目（8つ目の H2 の直前）用スロット（AdSense ユニット名「bouon3」、2026-11-16作成） */
export const ARTICLE_MID3_SLOT = '8303893125';

/** 記事末尾・関連記事の下の Multiplex スロット（2026-11-16作成） */
export const MULTIPLEX_SLOT = '2950834957';

export type AdPlacementId =
  | 'rectangleList'
  | 'rectangleArticleMid'
  | 'rectangleArticleMid2'
  | 'rectangleArticleMid3'
  | 'rectangleArticleEnd'
  | 'multiplexArticleEnd';

export type AdPlacementConfig = {
  id: AdPlacementId;
  label: string;
  slot: string;
  /** 'autorelaxed' は Multiplex */
  format: 'auto' | 'autorelaxed';
  fullWidthResponsive: boolean;
};

/** 自動広告（コード側は Head.astro の adsbygoogle.js のみ） */
export const AD_ANCHOR = {
  label: 'アンカー（画面下部固定）＋全画面',
  setup:
    'AdSense 管理画面 → 広告 → サイト → 編集 → 自動広告 ON。広告フォーマットはアンカーと全画面のみ ON、記事内・バナー等の自動挿入は OFF（記事中は手動ユニットで出す）',
} as const;

export const AD_PLACEMENTS: Record<AdPlacementId, AdPlacementConfig> = {
  rectangleList: {
    id: 'rectangleList',
    label: '一覧・全幅レクタングル',
    slot: RECTANGLE_SLOT,
    format: 'auto',
    fullWidthResponsive: true,
  },
  rectangleArticleMid: {
    id: 'rectangleArticleMid',
    label: '記事中レスポンシブ',
    slot: ARTICLE_MID_SLOT,
    format: 'auto',
    fullWidthResponsive: true,
  },
  rectangleArticleMid2: {
    id: 'rectangleArticleMid2',
    label: '記事中レスポンシブ（2つ目）',
    slot: ARTICLE_MID2_SLOT,
    format: 'auto',
    fullWidthResponsive: true,
  },
  rectangleArticleMid3: {
    id: 'rectangleArticleMid3',
    label: '記事中レスポンシブ（3つ目）',
    slot: ARTICLE_MID3_SLOT,
    format: 'auto',
    fullWidthResponsive: true,
  },
  rectangleArticleEnd: {
    id: 'rectangleArticleEnd',
    label: '記事末尾レクタングル',
    slot: RECTANGLE_SLOT,
    format: 'auto',
    fullWidthResponsive: true,
  },
  multiplexArticleEnd: {
    id: 'multiplexArticleEnd',
    label: '記事末尾 Multiplex（関連記事の下）',
    slot: MULTIPLEX_SLOT,
    format: 'autorelaxed',
    fullWidthResponsive: false,
  },
};

export function getPlacement(id: AdPlacementId): AdPlacementConfig {
  return AD_PLACEMENTS[id];
}

export function isPlacementActive(id: AdPlacementId): boolean {
  return Boolean(AD_PLACEMENTS[id].slot);
}
