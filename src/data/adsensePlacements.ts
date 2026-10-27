/**
 * AdSense 配置戦略（4種）
 *
 * 1. 自動広告        … 全画面（モバイル全画面広告）とアンカーのみ ON。記事内の自動広告は OFF
 * 2. rectangleList   … 一覧・トップの全幅レクタングル（手動ユニット）
 * 3. rectangleArticleMid … 記事中（2つ目の H2 の直前）のレスポンシブ（手動ユニット）
 * 4. rectangleArticleEnd … 記事末尾レクタングル（手動ユニット）
 *
 * 手動ユニットは AdSense で「ディスプレイ広告 → レスポンシブ」を作成し、
 * 下記スロットIDを設定してください。位置ごとの収益を見分けるため、記事中は専用ユニットを使います。
 */
export const ADSENSE_CLIENT = 'ca-pub-9798094072282530';

/** レスポンシブ・レクタングル用スロット（一覧・記事末尾で共用可） */
export const RECTANGLE_SLOT = '3778705007';

/** 記事中レスポンシブ用スロット（AdSense ユニット名「bouon」、2026-10-27作成） */
export const ARTICLE_MID_SLOT = '5976402243';

export type AdPlacementId = 'rectangleList' | 'rectangleArticleMid' | 'rectangleArticleEnd';

export type AdPlacementConfig = {
  id: AdPlacementId;
  label: string;
  slot: string;
  format: 'auto';
  fullWidthResponsive: true;
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
  rectangleArticleEnd: {
    id: 'rectangleArticleEnd',
    label: '記事末尾レクタングル',
    slot: RECTANGLE_SLOT,
    format: 'auto',
    fullWidthResponsive: true,
  },
};

export function getPlacement(id: AdPlacementId): AdPlacementConfig {
  return AD_PLACEMENTS[id];
}

export function isPlacementActive(id: AdPlacementId): boolean {
  return Boolean(AD_PLACEMENTS[id].slot);
}
