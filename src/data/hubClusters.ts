export type HubClusterKey = 'remote-work' | 'instrument-practice' | 'streaming';

type HubClusterDefinition = {
  key: HubClusterKey;
  categoryHint: string;
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
    categoryHint: 'knowledge',
    matchKeywords: ['在宅', 'テレワーク', 'work', 'office', 'リモート'],
    labels: {
      ja: {
        title: '在宅ワークの騒音対策',
        audience: '在宅勤務・子育て世帯',
        pain: '生活音と仕事音が混在し、集中しづらい悩み',
        primaryCta: '在宅ワーク向け導線を見る',
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
    categoryHint: 'solutions',
    matchKeywords: ['楽器', 'ピアノ', 'ギター', 'instrument', 'music', 'practice'],
    labels: {
      ja: {
        title: '楽器練習の防音設計',
        audience: '楽器演奏者・音楽学習者',
        pain: '音量と近隣配慮の両立が難しい悩み',
        primaryCta: '楽器練習向け導線を見る',
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
    categoryHint: 'use-case',
    matchKeywords: ['配信', 'stream', 'vtuber', 'gaming', '実況'],
    labels: {
      ja: {
        title: '配信・収録の静音環境',
        audience: '配信者・クリエイター',
        pain: 'ノイズ混入や深夜配信の不安を減らしたい悩み',
        primaryCta: '配信向け導線を見る',
      },
      en: {
        title: 'Streaming Noise Setup',
        audience: 'Streamers and creators',
        pain: 'Reduce recording noise and night-stream concerns',
        primaryCta: 'Open streaming path',
      },
    },
  },
];
