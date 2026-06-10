/**
 * AdSense 配置戦略（3種）
 *
 * 1. anchor          … 自動広告（Head スクリプト + 管理画面でアンカー ON）— スマホ主力
 * 2. rectangleList   … 一覧・トップの全幅レクタングル（手動ユニット）
 * 3. rectangleArticleEnd … 記事末尾レクタングル（手動ユニット）
 *
 * 手動ユニットは AdSense で「ディスプレイ広告 → レスポンシブ」を作成し、
 * 下記スロットIDを設定してください（同一ページに同じスロットは不可。
 * 一覧と記事末尾は別ページのため、ひとつのスロットを共用しても動作します）。
 */
export const ADSENSE_CLIENT = 'ca-pub-9798094072282530';

/** レスポンシブ・レクタングル用スロット（一覧・記事末尾で共用可） */
export const RECTANGLE_SLOT = '3778705007';

export type AdPlacementId = 'rectangleList' | 'rectangleArticleEnd';

export type AdPlacementConfig = {
  id: AdPlacementId;
  label: string;
  slot: string;
  format: 'auto';
  fullWidthResponsive: true;
};

/** 自動広告（コード側は Head.astro の adsbygoogle.js のみ） */
export const AD_ANCHOR = {
  label: 'アンカー（画面下部固定）',
  setup:
    'AdSense 管理画面 → 広告 → 自動広告 → アンカー広告 を ON（スマホ閲覧が多い場合に有効）',
} as const;

export const AD_PLACEMENTS: Record<AdPlacementId, AdPlacementConfig> = {
  rectangleList: {
    id: 'rectangleList',
    label: '一覧・全幅レクタングル',
    slot: RECTANGLE_SLOT,
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
