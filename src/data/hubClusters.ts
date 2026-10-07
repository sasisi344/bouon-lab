/** 記事の frontmatter `hub` のキーと同期する。追加・変更時は content.config.ts のスキーマも自動で追従する */
export const HUB_CLUSTER_KEYS = [
  'soundproof-room',
  'soundproof-rental',
  'sound-leak',
  'diy',
  'sound-basics',
  'money-market',
] as const;

export type HubClusterKey = (typeof HUB_CLUSTER_KEYS)[number];

type HubClusterDefinition = {
  key: HubClusterKey;
  /** カードのボタンのリンク先（`ja`） */
  href: string;
  /** 件数表示に使うカテゴリ（href のカテゴリと同じ） */
  category: string;
  labels: {
    ja: {
      title: string;
      audience: string;
      pain: string;
      primaryCta: string;
    };
  };
};

/** トップのカード表示順（配列の順）。記事は frontmatter `hub: { <key>: <表示順> }` で所属・順番を指定する */
export const HUB_CLUSTERS: HubClusterDefinition[] = [
  {
    key: 'soundproof-room',
    href: '/ja/soundproof-room/',
    category: 'soundproof-room',
    labels: {
      ja: {
        title: '防音室を選ぶ',
        audience: '防音室の導入を考えている方',
        pain: 'どの防音室が、自分の部屋と用途に合うか分からない悩み',
        primaryCta: '防音室の記事を見る',
      },
    },
  },
  {
    key: 'soundproof-rental',
    href: '/ja/soundproof-rental/',
    category: 'soundproof-rental',
    labels: {
      ja: {
        title: '防音賃貸・住まい探し',
        audience: '引っ越し・物件探しを検討する方',
        pain: '音を気にせず住める部屋の探し方が分からない悩み',
        primaryCta: '防音賃貸の記事を見る',
      },
    },
  },
  {
    key: 'sound-leak',
    href: '/ja/creator/',
    category: 'creator',
    labels: {
      ja: {
        title: '配信・楽器・在宅の音漏れ',
        audience: '配信者・楽器演奏者・在宅ワーカー',
        pain: '音を出したいが、近隣や家族への音漏れが不安な悩み',
        primaryCta: '音漏れ対策の記事を見る',
      },
    },
  },
  {
    key: 'diy',
    href: '/ja/diy/',
    category: 'diy',
    labels: {
      ja: {
        title: '自分で試す（DIY）',
        audience: '費用を抑えて自分で対策したい方',
        pain: 'どこまで自分でできるか分からない悩み',
        primaryCta: 'DIYの記事を見る',
      },
    },
  },
  {
    key: 'sound-basics',
    href: '/ja/knowledge/',
    category: 'knowledge',
    labels: {
      ja: {
        title: '音の仕組み・原因から調べる',
        audience: '数値や原因から納得して対策したい方',
        pain: '何が原因で、どの対策が効くのか分からない悩み',
        primaryCta: '仕組みの記事を見る',
      },
    },
  },
  {
    key: 'money-market',
    href: '/ja/money/',
    category: 'money',
    labels: {
      ja: {
        title: '費用・相場・補助金・市場データ',
        audience: '予算や相場を把握したい方',
        pain: 'いくらかかるか、補助金は使えるかが分からない悩み',
        primaryCta: '費用・相場の記事を見る',
      },
    },
  },
];

/** 記事の `hub` から、表示順が最小のクラスターを返す。`hub` がなければ undefined */
export function primaryHubCluster(
  hub: Partial<Record<HubClusterKey, number>> | undefined,
): HubClusterDefinition | undefined {
  if (!hub) return undefined;
  const entries = Object.entries(hub) as [HubClusterKey, number][];
  if (entries.length === 0) return undefined;
  const [key] = entries.sort((a, b) => a[1] - b[1])[0];
  return HUB_CLUSTERS.find((cluster) => cluster.key === key);
}
