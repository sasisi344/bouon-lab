export type HubClusterKey =
  | 'remote-work'
  | 'instrument-practice'
  | 'streaming'
  | 'subsidy-cost'
  | 'noise-trouble'
  | 'regional';

type HubClusterDefinition = {
  key: HubClusterKey;
  /** `ja` 記事のフォールバック先カテゴリ */
  categoryHint: string;
  /** `en` 記事（Japan 文化発信カテゴリ）のフォールバック。未指定時は categoryHint を使う */
  categoryHintEn?: string;
  matchKeywords: string[];
  labels: {
    ja: {
      title: string;
      audience: string;
      pain: string;
      primaryCta: string;
    };
    en: {
      title: string;
      audience: string;
      pain: string;
      primaryCta: string;
    };
  };
};

export const HUB_CLUSTERS: HubClusterDefinition[] = [
  {
    key: 'remote-work',
    categoryHint: 'soundproof-rental',
    categoryHintEn: 'japan-soundproof-housing',
    matchKeywords: ['在宅', 'テレワーク', 'work', 'office', 'リモート'],
    labels: {
      ja: {
        title: '在宅ワークの騒音対策',
        audience: '在宅勤務・子育て世帯',
        pain: '生活音と仕事音が混在し、集中しづらい悩み',
        primaryCta: '在宅ワーク向け記事を見る',
      },
      en: {
        title: 'Remote Work Noise Control',
        audience: 'Remote workers and families',
        pain: 'Mixed household and work noise lowers focus',
        primaryCta: 'Open remote-work path',
      },
    },
  },
  {
    key: 'instrument-practice',
    categoryHint: 'soundproof-room',
    categoryHintEn: 'japan-quiet-spaces',
    matchKeywords: ['楽器', 'ピアノ', 'ギター', 'instrument', 'music', 'practice'],
    labels: {
      ja: {
        title: '楽器練習の防音設計',
        audience: '楽器演奏者・音楽学習者',
        pain: '音量と近隣配慮の両立が難しい悩み',
        primaryCta: '楽器練習向け記事を見る',
      },
      en: {
        title: 'Instrument Practice Setup',
        audience: 'Musicians and learners',
        pain: 'Balancing volume with neighbor comfort',
        primaryCta: 'Open instrument path',
      },
    },
  },
  {
    key: 'streaming',
    categoryHint: 'creator',
    categoryHintEn: 'japan-quiet-spaces',
    matchKeywords: ['配信', 'stream', 'vtuber', 'gaming', '実況', 'クリエイター'],
    labels: {
      ja: {
        title: '配信・収録の静音環境',
        audience: '配信者・クリエイター',
        pain: 'ノイズ混入や深夜配信の不安を減らしたい悩み',
        primaryCta: '配信向け記事を見る',
      },
      en: {
        title: 'Streaming Noise Setup',
        audience: 'Streamers and creators',
        pain: 'Reduce recording noise and night-stream concerns',
        primaryCta: 'Open streaming path',
      },
    },
  },
  {
    key: 'subsidy-cost',
    categoryHint: 'money',
    matchKeywords: ['補助金', 'ローン', '費用', '節税', 'コスト', '予算', '金額', '価格'],
    labels: {
      ja: {
        title: '補助金・費用の見通し',
        audience: '予算を抑えたい方・初めて検討する方',
        pain: 'いくらかかるか、補助金は使えるかが分からない悩み',
        primaryCta: '費用・補助金の記事を見る',
      },
      en: {
        title: 'Subsidies & Cost Planning',
        audience: 'Budget-conscious first-time buyers',
        pain: 'Unclear total cost and subsidy eligibility',
        primaryCta: 'Browse cost guides',
      },
    },
  },
  {
    key: 'noise-trouble',
    categoryHint: 'knowledge',
    matchKeywords: ['騒音', '苦情', 'トラブル', '近隣', '騒音トラブル', '騒音被害', '法的', 'complaint'],
    labels: {
      ja: {
        title: '騒音トラブルへの対処',
        audience: '近隣騒音に悩む方・苦情を受けた方',
        pain: 'どこまで我慢すべきか、どう動けばよいか分からない悩み',
        primaryCta: '騒音トラブルの記事を見る',
      },
      en: {
        title: 'Noise Complaint & Conflict',
        audience: 'Neighbors in dispute or receiving complaints',
        pain: 'Unsure what to tolerate or how to respond',
        primaryCta: 'Browse noise-trouble guides',
      },
    },
  },
  {
    key: 'regional',
    categoryHint: 'local',
    matchKeywords: [
      '東京',
      '大阪',
      '横浜',
      '名古屋',
      '福岡',
      '埼玉',
      '千葉',
      '神戸',
      '地域',
      'エリア',
      '都市',
      'ガイド',
    ],
    labels: {
      ja: {
        title: '地域別の防音情報',
        audience: '引っ越し・物件探しを検討する方',
        pain: '自分の住むエリアで何が選べるか分からない悩み',
        primaryCta: '地域ガイドを見る',
      },
      en: {
        title: 'Regional Soundproof Guides',
        audience: 'People moving or hunting for rentals',
        pain: 'Not sure what options exist in their area',
        primaryCta: 'Browse regional guides',
      },
    },
  },
];
