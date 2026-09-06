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
  // ================================================
  // オーナー・配信者向け：環境整備グッズ (2026-04-04 追加)
  // ================================================

  // 【加湿器】防音室内向け（気化式推奨）
  'humidifier-vaporizer-daikin': {
    type: 'amazon',
    slug: 'humidifier-vaporizer-daikin',
    name: 'ダイキン 気化式加湿器 MCK70Y',
    description: '防音室の密閉空間に最適な気化式。結露しにくく、ギターや電子機器を湿度ダメージから保護。静音性も高く収録の邪魔をしない。',
    price: '¥40,000〜',
    image: 'https://m.media-amazon.com/images/I/41zyCyWr0aL._AC_SL1000_.jpg',
    badge: 'ROOM-SAFE',
    asin: 'B09J4RCV5J', 
    tag: 'sasisi344-22',
    variant: 'standard',
  },

  // 【音響パネル】吸音・拡散材（デザイン採用可）
  'acoustic-panel-felmenon': {
    type: 'amazon',
    slug: 'acoustic-panel-felmenon',
    name: 'FELMENON 吸音パネル 60×60cm',
    description: '壁に貼るだけで反響音を大幅にカット。デザイン性も高く「配信映え」する背景壁作りにも活用できる。',
    price: '¥6,000〜',
    image: 'https://m.media-amazon.com/images/I/21pqXxzXZ-L._AC_.jpg',
    badge: 'DESIGN-OK',
    asin: 'B07XG5CX8X', 
    tag: 'sasisi344-22',
    variant: 'standard',
  },

  // 【騒音測定器】施工後の性能確認に
  'sound-level-meter-pro': {
    type: 'amazon',
    slug: 'sound-level-meter-pro',
    name: 'デジタル騒音計（Class 2対応）',
    description: '防音リノベーション施工前後のdB計測に。オーナーが自ら性能を確認・証明するための必須ツール。',
    price: '¥3,000〜',
    image: 'https://m.media-amazon.com/images/I/71yC1SRHohL._SL1500_.jpg',
    badge: 'OWNER-TOOL',
    asin: 'B0D59P6Q9Q', 
    tag: 'sasisi344-22',
    variant: 'standard',
  },

  // 【アース線・グランドループ対策】配信者向け
  'ground-cable-mogami': {
    type: 'amazon',
    slug: 'ground-cable-mogami',
    name: 'MOGAMI 2534 マイクケーブル（グランドノイズ対策）',
    description: 'ハムノイズ・グランドループを根絶するプロ仕様のバランスケーブル。配信マイクの「ジー」音を物理的に解消。',
    price: '¥2,000〜',
    image: 'https://m.media-amazon.com/images/I/7138ct+UUbL._AC_SL1500_.jpg',
    badge: 'NOISE-FREE',
    asin: 'B07D738MM2', 
    tag: 'sasisi344-22',
    variant: 'standard',
  },

  // 【防振マット】グランドピアノ・ドラム向け
  'piano-vibration-mat': {
    type: 'amazon',
    slug: 'piano-vibration-mat',
    name: '防振インシュレーター（ピアノ・重量機材対応）',
    description: 'グランドピアノ設置時の床への振動を物理的に遮断。周囲への低周波ノイズを大幅に軽減。400kg超の重量物に対応。',
    price: '¥2,000〜',
    image: 'https://m.media-amazon.com/images/I/51481RxNHJL._SL1000_.jpg',
    badge: 'HEAVY-DUTY',
    asin: 'B00B58K61Y',
    tag: 'sasisi344-22',
    variant: 'standard',
  },

  // ================================================
  // streaming-pc-fan-noise-mic / streamer-pet-noise-balance 用 (2026-06-19 追加)
  // ================================================

  // 【防振インシュレーター】PC本体ノイズ対策
  'pc-fan-vibration-insulator': {
    type: 'amazon',
    slug: 'pc-fan-vibration-insulator',
    name: 'ワイドワーク 防振・防音インシュレーター（非反発ゴム）WW-THI-425',
    description: 'PCケース脚に挟み、ファン振動による共振音（ビビリ音）を抑制。天然ゴム比で約10倍の制振性。',
    price: '¥1,000〜2,000（4個入）',
    asin: 'B000FHIPD2',
    tag: 'sasisi344-22',
    variant: 'standard',
  },

  // 【静音ジェルパッド】PC本体ノイズ対策
  'silent-gel-pad-clamworks': {
    type: 'amazon',
    slug: 'silent-gel-pad-clamworks',
    name: 'ClamWorks NP4012GEL 静音ジェルパッド',
    description: 'HDD・SSD・ファン部に貼付し駆動音の共振を軽減。',
    price: '¥1,000〜（複数枚入）',
    asin: 'B009JYMVJ6',
    tag: 'sasisi344-22',
    variant: 'standard',
  },

  // 【防音ケージカバー】ペット同居配信者向け
  'soundproof-cage-cover-k4': {
    type: 'amazon',
    slug: 'soundproof-cage-cover-k4',
    name: '防音ケージカバーIV 犬小屋工房K',
    description: '室内ケージにかぶせて無駄吠え85dB→53dBの実測値。ロスナイ付きで酸欠対策済み、国産天然木フレーム。',
    price: '数千円〜',
    image: 'https://m.media-amazon.com/images/I/71NEMZ245pL._AC_SL1370_.jpg',
    asin: 'B0756RD44W',
    tag: 'sasisi344-22',
    variant: 'standard',
  },

  // 【隙間テープ】ペット同居配信者向け
  'gap-tape-meicyan': {
    type: 'amazon',
    slug: 'gap-tape-meicyan',
    name: 'Meicyan 隙間テープ 防音・断熱 25mm×6m',
    description: 'ドア下・窓枠の隙間を埋め、鳴き声の音漏れ・外音侵入を軽減。',
    price: '¥500〜1,500',
    image: 'https://m.media-amazon.com/images/I/51Js0Q2M4+L._AC_SL1500_.jpg',
    asin: 'B096M2T5Z4',
    tag: 'sasisi344-22',
    variant: 'standard',
  },
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
