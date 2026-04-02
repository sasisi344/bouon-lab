/**
 * アフィリエイト商品マスターデータ
 *
 * type の種類:
 *   "link"   : もしも・直接URL等 シンプルな転送リンク
 *   "amazon" : Amazon Associates (ASIN + タグIDで自動URL生成)
 *   "html"   : バリューコマース等のバナーHTMLタグをそのまま埋め込む
 *
 * variant の種類:
 *   "standard"    : 防音グッズ・資材・書籍など低〜中単価
 *   "premium"     : ユニット防音室など中〜高単価
 *   "high-ticket" : 防音賃貸・施工相談など高単価成果型
 */

export type AffiliateItem =
  | {
      type: 'link';
      slug: string;
      name: string;
      description: string;
      price?: string;
      image?: string;
      badge?: string;
      program: 'moshimo' | 'valuecommerce' | 'direct';
      url: string;
      pixelTag?: string; // 計測用imgタグ（HTML文字列）
      variant?: 'standard' | 'premium' | 'high-ticket';
    }
  | {
      type: 'amazon';
      slug: string;
      name: string;
      description: string;
      price?: string;
      image?: string;
      badge?: string;
      asin: string;
      tag: string; // Amazon Associates タグID (例: bouonlab-22)
      variant?: 'standard' | 'premium' | 'high-ticket';
    }
  | {
      type: 'html';
      slug: string;
      name: string;
      description?: string;
      program: 'valuecommerce' | 'moshimo' | 'a8' | 'direct';
      htmlTag: string; // ASPから取得したバナーHTMLをそのまま貼る
      variant?: 'standard' | 'premium' | 'high-ticket';
    };

/**
 * 商品スラッグをキーにした登録テーブル
 * ここを編集するだけで全記事の広告リンクが更新される
 */
export const affiliates: Record<string, AffiliateItem> = {
  // ================================================
  // サンプル: もしも（シンプルリンク型）
  // ================================================
  /*
  'yamaha-avitex': {
    type: 'link',
    slug: 'yamaha-avitex',
    name: 'ヤマハ アビテックス セフィーネNS',
    description: '歌枠・ASMRに最適なヤマハ公式ユニット防音室。0.8〜1.2畳サイズ対応。',
    price: '¥350,000〜',
    image: '/affiliates/yamaha-avitex.jpg',
    badge: 'RECOMMENDED',
    program: 'moshimo',
    url: 'https://af.moshimo.com/af/c/click?a_id=XXXXX&p_id=XXXXX', // ← 実際のURLに変更
    variant: 'premium',
  },
  */

  // ================================================
  // サンプル: Amazon Associates（ASIN型）
  // ================================================
  /*
  'danbocchi-grande': {
    type: 'amazon',
    slug: 'danbocchi-grande',
    name: 'だんぼっち グランデ',
    description: '組立式ダンボール防音室。手軽にVTuber環境を実現。',
    price: '¥75,000〜',
    image: '/affiliates/danbocchi-grande.jpg',
    badge: 'POPULAR',
    asin: 'B0XXXXXXXXX', // ← 実際のASINに変更
    tag: 'bouonlab-22',  // ← Amazon タグIDに変更
    variant: 'standard',
  },
  */

  'danbocchi-wide': {
    type: 'amazon',
    slug: 'danbocchi-wide',
    name: 'だんぼっち ワイド',
    description: '幅110cmのワイドモデル。キーボードやマウス操作も快適な広々設計。',
    price: '¥98,000〜',
    image: 'images/I/71sO5h+SbHL._AC_SL1440_.jpg',
    badge: 'WIDE-MODEL',
    asin: 'B0CYCH38BZ',
    tag: 'sasisi344-22',
    variant: 'standard',
  },

  'booth-workspace': {
    type: 'amazon',
    slug: 'booth-workspace',
    name: '個室ワークスペース（簡易個室ブース）',
    description: '日本製ダンボールボードを使用した、集中できるデスク環境。テレワークの騒音対策に。',
    price: '¥25,000〜',
    image: 'images/I/61RIsp3UyDL._AC_SL1500_.jpg',
    badge: 'FOR-REMOTE',
    asin: 'B09127YTHQ',
    tag: 'sasisi344-22',
    variant: 'standard',
  },

  'desktop-absorber': {
    type: 'amazon',
    slug: 'desktop-absorber',
    name: '卓上簡易吸音ブース',
    description: '机の上に置くだけで反響音をカット。WEB会議や動画配信の音質向上に。',
    price: '¥8,000〜',
    image: 'images/I/71Oo5d7ZzyL._AC_SL1500_.jpg',
    badge: 'ISO-BOOTH',
    asin: 'B0DSW4WY71',
    tag: 'sasisi344-22',
    variant: 'standard',
  },

  'otodasu-dx-pro': {
    type: 'amazon',
    slug: 'otodasu-dx-pro',
    name: 'OTODASU DX Pro',
    description: '吸遮音材36枚付属のプロ仕様。圧倒的な遮音性能で本格的な録音・練習に対応。',
    price: '¥149,000〜',
    image: 'images/I/311SKeCJAvL.jpg',
    badge: 'PRO-SPEC',
    asin: 'B0F3NVRDFH',
    tag: 'sasisi344-22',
    variant: 'standard',
  },

  'danbocchi-standard': {
    type: 'amazon',
    slug: 'danbocchi-standard',
    name: 'だんぼっち スタンダード',
    description: '幅80cmのスタンダードモデル。配信者・歌い手に愛される定番の防音室。',
    price: '¥75,000〜',
    image: 'images/I/517ZrzwPZIL._AC_SL1080_.jpg',
    badge: 'STANDARD',
    asin: 'B0CYCDKBY4',
    tag: 'sasisi344-22',
    variant: 'standard',
  },

  'reflection-filter': {
    type: 'amazon',
    slug: 'reflection-filter',
    name: '吸音リフレクションフィルター',
    description: 'マイクの後ろに設置して不要な反射音を除去。宅録のクオリティを劇的に改善。',
    price: '¥5,000〜',
    image: 'images/I/61sal5skbzL._AC_SL1150_.jpg',
    badge: 'REC-MUST-ITEM',
    asin: 'B0B3T6LJGM',
    tag: 'sasisi344-22',
    variant: 'standard',
  },

  'yamaha-avitex': {
    type: 'link',
    slug: 'yamaha-avitex',
    name: 'ヤマハ アビテックス セフィーネNS',
    description: '防音室の王道。優れた遮音性能と音響特性を両立し、ピアノやバイオリン演奏に最適。資産価値も高く、一生モノの投資として。',
    price: '¥650,000〜',
    image: 'images/affiliates/yamaha-avitex.jpg',
    badge: 'PREMIUM-CHOICE',
    program: 'direct',
    url: 'https://jp.yamaha.com/products/contents/soundproofing/avitex/index.html',
    variant: 'premium',
  },

  'kawai-nasal': {
    type: 'link',
    slug: 'kawai-nasal',
    name: 'カワイ 防音室 ナサール',
    description: 'オーダーメイド感覚で理想の空間を実現。用途に応じた細かな遮音性能の選択が可能で、プロのスタジオ構築にも。',
    price: '¥800,000〜',
    image: 'images/affiliates/kawai-nasal.jpg',
    badge: 'CUSTOM-PRO',
    program: 'direct',
    url: 'https://www.kawai.jp/product/nasal/',
    variant: 'high-ticket',
  },
  // ================================================
  // サンプル: バリューコマース（HTMLタグ型）
  // ================================================
  /*
  'bouon-mansion-tokyo': {
    type: 'html',
    slug: 'bouon-mansion-tokyo',
    name: '防音賃貸 東京・ミュージション',
    description: undefined,
    program: 'valuecommerce',
    // ↓ バリューコマースの管理画面から取得したHTMLタグをここに貼る
    htmlTag: `<a href="https://ck.jp.ap.valuecommerce.com/servlet/referral?sid=XXXXX&pid=XXXXX" rel="nofollow sponsored" target="_blank">
      <img src="https://ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=XXXXX&pid=XXXXX" width="300" height="250" border="0" alt="防音賃貸" />
    </a>`,
    variant: 'high-ticket',
  },
  */
};

/**
 * スラッグから商品情報を取得するユーティリティ
 */
export function getAffiliate(slug: string): AffiliateItem | undefined {
  return affiliates[slug];
}

/**
 * Amazon アソシエイトリンクを生成
 */
export function buildAmazonUrl(asin: string, tag: string): string {
  return `https://www.amazon.co.jp/dp/${asin}?tag=${tag}&linkCode=ogi&th=1&psc=1`;
}
