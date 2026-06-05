// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://bouon-lab.com',
  integrations: [
    starlight({
      title: '防音Lab',
      description: '住まい・予算・用途に合わせた防音の解決策をまとめたガイド',
      defaultLocale: 'root',
      locales: {
        root: { label: '日本語', lang: 'ja' },
      },
      sidebar: [
        { label: '防音室',           link: '/ja/soundproof-room/' },
        { label: '防音賃貸',         link: '/ja/soundproof-rental/' },
        { label: 'DIY防音',          link: '/ja/diy/' },
        { label: 'お金・補助金',      link: '/ja/money/' },
        { label: '配信・クリエイター', link: '/ja/creator/' },
        { label: '基礎知識',          link: '/ja/knowledge/' },
        { label: '地域ガイド',         link: '/ja/local/' },
        { label: '企業・法人向け',    link: '/ja/business/' },
      ],
      customCss: ['./src/styles/bouon-custom.css'],
      favicon: '/favicon.svg',
      components: {
        Head:          './src/components/starlight/Head.astro',
        PageTitle:     './src/components/starlight/PageTitle.astro',
        Footer:        './src/components/starlight/Footer.astro',
        ThemeProvider: './src/components/starlight/ThemeProvider.astro',
        ThemeSelect:   './src/components/starlight/ThemeSelect.astro',
      },
    }),
    mdx(),
    sitemap({
      filter(page) {
        // /ja/ 以外のページはすべて除外（Starlight docs ルート、en/ など）
        if (!page.includes('/ja/')) return false;
        // about / privacy はサイトマップから除外（noindex ページ）
        if (/\/(about|privacy)\/$/.test(page)) return false;
        return true;
      },
      serialize(item) {
        const url = item.url;
        // トップページ: /ja/
        if (/\/ja\/$/.test(url)) {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        // カテゴリ index: /ja/soundproof-room/ など（1セグメント）
        } else if (/\/ja\/[^/]+\/$/.test(url)) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        // 記事ページ: /ja/{category}/{slug}/（2セグメント）
        } else if (/\/ja\/[^/]+\/[^/]+\/$/.test(url)) {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        } else {
          item.priority = 0.5;
          item.changefreq = 'monthly';
        }
        return item;
      },
    }),
  ],
  redirects: {
    '/': { destination: '/ja/', status: 308 },

    // ── Phase 1 カテゴリ移行リダイレクト（2026-06-01）───────────────────────
    // 1-A: soundproof-room/others → soundproof-room
    '/ja/soundproof-room/others/bouon-osusume-hikaku/':                '/ja/soundproof-room/bouon-osusume-hikaku/',
    '/ja/soundproof-room/others/bouon-setti-checkpoint/':              '/ja/soundproof-room/bouon-setti-checkpoint/',
    '/ja/soundproof-room/others/kawai-nasal-soundproof-room-guide/':   '/ja/soundproof-room/kawai-nasal-soundproof-room-guide/',
    '/ja/soundproof-room/others/shimamura-music-soundproof-room-guide/': '/ja/soundproof-room/shimamura-music-soundproof-room-guide/',
    '/ja/soundproof-room/others/soundproof-room-size/':                '/ja/soundproof-room/soundproof-room-size/',
    // 1-A: soundproof-room/others → money
    '/ja/soundproof-room/others/rental-vs-purchase-soundproof-room/':              '/ja/money/rental-vs-purchase-soundproof-room/',
    '/ja/soundproof-room/others/report-japan-soundproof-unit-resale-value-simulation/': '/ja/money/report-japan-soundproof-unit-resale-value-simulation/',
    '/ja/soundproof-room/others/soundproof-room-buyback-guide/':                   '/ja/money/soundproof-room-buyback-guide/',
    '/ja/soundproof-room/others/soundproof-room-loan-guide/':                      '/ja/money/soundproof-room-loan-guide/',
    '/ja/soundproof-room/others/soundproof-room-price-market/':                    '/ja/money/soundproof-room-price-market/',
    '/ja/soundproof-room/others/soundproof-room-rental-cost/':                     '/ja/money/soundproof-room-rental-cost/',
    // 1-A: soundproof-room/others → knowledge
    '/ja/soundproof-room/others/noise-regulation-update-2025/':       '/ja/knowledge/noise-regulation-update-2025/',
    '/ja/soundproof-room/others/why-your-80-percent-rug-rule-fails/': '/ja/knowledge/why-your-80-percent-rug-rule-fails/',
    // 1-B: soundproof-rental/others → local
    '/ja/soundproof-rental/others/chiba-soundproof-rental-guide/':     '/ja/local/chiba-soundproof-rental-guide/',
    '/ja/soundproof-rental/others/hiroshima-soundproof-rental-guide/': '/ja/local/hiroshima-soundproof-rental-guide/',
    '/ja/soundproof-rental/others/kanagawa-soundproof-rental-guide/':  '/ja/local/kanagawa-soundproof-rental-guide/',
    '/ja/soundproof-rental/others/kobe-soundproof-rental-guide/':      '/ja/local/kobe-soundproof-rental-guide/',
    '/ja/soundproof-rental/others/kyoto-soundproof-rental-guide/':     '/ja/local/kyoto-soundproof-rental-guide/',
    '/ja/soundproof-rental/others/osaka-soundproof-rental-guide/':     '/ja/local/osaka-soundproof-rental-guide/',
    '/ja/soundproof-rental/others/saitama-soundproof-rental-guide/':   '/ja/local/saitama-soundproof-rental-guide/',
    '/ja/soundproof-rental/others/sapporo-soundproof-rental-guide/':   '/ja/local/sapporo-soundproof-rental-guide/',
    '/ja/soundproof-rental/others/sendai-soundproof-rental-guide/':    '/ja/local/sendai-soundproof-rental-guide/',
    '/ja/soundproof-rental/others/tokyo-soundproof-rental-summary/':   '/ja/local/tokyo-soundproof-rental-summary/',
    // 1-B: soundproof-rental/others → money / soundproof-rental
    '/ja/soundproof-rental/others/owner-renovation-roi-simulation-tool/':               '/ja/money/owner-renovation-roi-simulation-tool/',
    '/ja/soundproof-rental/others/owner-renovation-shibuya-shinjuku-vtuber-strategy/':  '/ja/soundproof-rental/owner-renovation-shibuya-shinjuku-vtuber-strategy/',
    // 1-C: column/company → business
    '/ja/column/company/bouonrental-areasec-newbusiness/':                      '/ja/business/bouonrental-areasec-newbusiness/',
    '/ja/column/company/datacenter-soundproof-technology-facts/':               '/ja/business/datacenter-soundproof-technology-facts/',
    '/ja/column/company/japan-bouonproof-marketnextasia/':                      '/ja/business/japan-bouonproof-marketnextasia/',
    '/ja/column/company/report-japan-asmr-vtuber-streaming-studio-standard/':   '/ja/business/report-japan-asmr-vtuber-streaming-studio-standard/',
    '/ja/column/company/soundproof-market-esg-trend/':                          '/ja/business/soundproof-market-esg-trend/',
    '/ja/column/company/soundproof-renovation-cost-outlook-2026/':              '/ja/business/soundproof-renovation-cost-outlook-2026/',
    // 1-D: column/news → business / knowledge / soundproof-room
    '/ja/column/news/global-soundproof-market-trends/':                    '/ja/business/global-soundproof-market-trends/',
    '/ja/column/news/shared-streaming-studio-growth-pricing-utilization/': '/ja/business/shared-streaming-studio-growth-pricing-utilization/',
    '/ja/column/news/future-ssi-silent-speech-interface-revolution/':      '/ja/knowledge/future-ssi-silent-speech-interface-revolution/',
    '/ja/column/news/proofroom-maker-2025productcheck/':                   '/ja/knowledge/proofroom-maker-2025productcheck/',
    '/ja/column/news/yamaha-tabisuru-bouon-room/':                         '/ja/soundproof-room/yamaha-tabisuru-bouon-room/',
    // 1-E: column/others → creator / knowledge / business / money
    '/ja/column/others/asmr-vtuber-booth-guide/':                '/ja/creator/asmr-vtuber-booth-guide/',
    '/ja/column/others/kominka-renovation-streaming-room/':      '/ja/creator/kominka-renovation-streaming-room/',
    '/ja/column/others/streaming-room-layout-guide/':            '/ja/creator/streaming-room-layout-guide/',
    '/ja/column/others/soundproof-culture-japan-vs-america/':    '/ja/knowledge/soundproof-culture-japan-vs-america/',
    '/ja/column/others/vibration-isolation-technology-trend/':   '/ja/knowledge/vibration-isolation-technology-trend/',
    '/ja/column/others/web-meeting-voice-soundleak-prevention/': '/ja/business/web-meeting-voice-soundleak-prevention/',
    '/ja/column/others/streamer-tax-strategy/':                  '/ja/money/streamer-tax-strategy/',

    // ── Phase 3 Tier1 フラット化リダイレクト（2026-06-01）───────────────────
    // soundproof-room/knowledge → soundproof-room
    '/ja/soundproof-room/knowledge/bouon-dchiseinou-meyasu/':                '/ja/soundproof-room/bouon-dchiseinou-meyasu/',
    '/ja/soundproof-room/knowledge/bouon-size-choice/':                       '/ja/soundproof-room/bouon-size-choice/',
    '/ja/soundproof-room/knowledge/daiwa-house-jiyuku-soundproof-review/':    '/ja/soundproof-room/daiwa-house-jiyuku-soundproof-review/',
    '/ja/soundproof-room/knowledge/hsp-soundproof-curtain-guide/':            '/ja/soundproof-room/hsp-soundproof-curtain-guide/',
    '/ja/soundproof-room/knowledge/million-yen-soundproof-room-professional/': '/ja/soundproof-room/million-yen-soundproof-room-professional/',
    '/ja/soundproof-room/knowledge/nitori-soundproof-acoustic-guide/':        '/ja/soundproof-room/nitori-soundproof-acoustic-guide/',
    '/ja/soundproof-room/knowledge/otodasu-voice-chat-test/':                 '/ja/soundproof-room/otodasu-voice-chat-test/',
    '/ja/soundproof-room/knowledge/soundproof-room-budget-selection-guide/':  '/ja/soundproof-room/soundproof-room-budget-selection-guide/',
    // soundproof-room/solution → soundproof-room
    '/ja/soundproof-room/solution/bouon-humidifier-comparison/':       '/ja/soundproof-room/bouon-humidifier-comparison/',
    '/ja/soundproof-room/solution/budget-soundproof-booth-comparison/': '/ja/soundproof-room/budget-soundproof-booth-comparison/',
    '/ja/soundproof-room/solution/night-practice-soundproof-guide/':   '/ja/soundproof-room/night-practice-soundproof-guide/',
    '/ja/soundproof-room/solution/proofroom-humidity-airconditionlist/': '/ja/soundproof-room/proofroom-humidity-airconditionlist/',
    '/ja/soundproof-room/solution/proofroom-soudmore-manual/':         '/ja/soundproof-room/proofroom-soudmore-manual/',
    '/ja/soundproof-room/solution/sleep-quality-soundproof-room/':     '/ja/soundproof-room/sleep-quality-soundproof-room/',
    '/ja/soundproof-room/solution/sound-reduction-simulation/':        '/ja/soundproof-room/sound-reduction-simulation/',
    '/ja/soundproof-room/solution/soundproof-performance-drum/':       '/ja/soundproof-room/soundproof-performance-drum/',
    '/ja/soundproof-room/solution/soundproof-room-demolition-guide/':  '/ja/soundproof-room/soundproof-room-demolition-guide/',
    '/ja/soundproof-room/solution/soundproof-room-large-size/':        '/ja/soundproof-room/soundproof-room-large-size/',
    '/ja/soundproof-room/solution/soundproof-room-pollen-protection/': '/ja/soundproof-room/soundproof-room-pollen-protection/',
    // soundproof-rental/knowledge → soundproof-rental
    '/ja/soundproof-rental/knowledge/bouon-rental-market-guide/':                  '/ja/soundproof-rental/bouon-rental-market-guide/',
    '/ja/soundproof-rental/knowledge/bouonrental-market-research2025/':            '/ja/soundproof-rental/bouonrental-market-research2025/',
    '/ja/soundproof-rental/knowledge/bourental-syaouseid-choiceindi/':             '/ja/soundproof-rental/bourental-syaouseid-choiceindi/',
    '/ja/soundproof-rental/knowledge/housing-builder-soundproof-comparison/':      '/ja/soundproof-rental/housing-builder-soundproof-comparison/',
    '/ja/soundproof-rental/knowledge/musision-comprehensive-guide/':               '/ja/soundproof-rental/musision-comprehensive-guide/',
    '/ja/soundproof-rental/knowledge/owner-renovation-musician-24h-practice-strategy/': '/ja/soundproof-rental/owner-renovation-musician-24h-practice-strategy/',
    '/ja/soundproof-rental/knowledge/pet-noise-soundproof-measures/':              '/ja/soundproof-rental/pet-noise-soundproof-measures/',
    '/ja/soundproof-rental/knowledge/rental-caution-cello/':                       '/ja/soundproof-rental/rental-caution-cello/',
    '/ja/soundproof-rental/knowledge/rental-price-index-13cities-soundproof/':     '/ja/soundproof-rental/rental-price-index-13cities-soundproof/',
    // soundproof-rental/solution → soundproof-rental
    '/ja/soundproof-rental/solution/apartment-weight-limit-500kg/':            '/ja/soundproof-rental/apartment-weight-limit-500kg/',
    '/ja/soundproof-rental/solution/child-rearing-soundproof-pillar/':         '/ja/soundproof-rental/child-rearing-soundproof-pillar/',
    '/ja/soundproof-rental/solution/home-theater-karaoke-soundproof-design/':  '/ja/soundproof-rental/home-theater-karaoke-soundproof-design/',
    '/ja/soundproof-rental/solution/noise-canceling-headphones-sleep/':        '/ja/soundproof-rental/noise-canceling-headphones-sleep/',
    '/ja/soundproof-rental/solution/noise-complaint-landlord-negotiation-guide/': '/ja/soundproof-rental/noise-complaint-landlord-negotiation-guide/',
    '/ja/soundproof-rental/solution/remote-work-family-harmony-soundproof/':   '/ja/soundproof-rental/remote-work-family-harmony-soundproof/',
    '/ja/soundproof-rental/solution/rental-permission-proposal-template/':     '/ja/soundproof-rental/rental-permission-proposal-template/',
    '/ja/soundproof-rental/solution/rental-proofroom-contractcheck/':          '/ja/soundproof-rental/rental-proofroom-contractcheck/',
    '/ja/soundproof-rental/solution/rental-unit-soundproof-room/':             '/ja/soundproof-rental/rental-unit-soundproof-room/',
    '/ja/soundproof-rental/solution/report-japan-soundproof-rental-market-needs/': '/ja/soundproof-rental/report-japan-soundproof-rental-market-needs/',
    '/ja/soundproof-rental/solution/soundproof-room-installation-conditions/': '/ja/soundproof-rental/soundproof-room-installation-conditions/',

    // ── Phase 2 カテゴリ移行リダイレクト（2026-06-01）───────────────────────
    // soundproof-room/diy → diy
    '/ja/soundproof-room/diy/bass-trap-installation-guide/':              '/ja/diy/bass-trap-installation-guide/',
    '/ja/soundproof-room/diy/bedroom-telework-layout-soundproof/':        '/ja/diy/bedroom-telework-layout-soundproof/',
    '/ja/soundproof-room/diy/closet-diy-soundproof-room/':                '/ja/diy/closet-diy-soundproof-room/',
    '/ja/soundproof-room/diy/danbotchi-diy-blueprints/':                  '/ja/diy/danbotchi-diy-blueprints/',
    '/ja/soundproof-room/diy/diy-led-acoustic-panels/':                   '/ja/diy/diy-led-acoustic-panels/',
    '/ja/soundproof-room/diy/diy-soundproof-room-cost-breakdown/':        '/ja/diy/diy-soundproof-room-cost-breakdown/',
    '/ja/soundproof-room/diy/diy-soundproof-room-failures-solutions/':    '/ja/diy/diy-soundproof-room-failures-solutions/',
    '/ja/soundproof-room/diy/diy-soundproofing-tips/':                    '/ja/diy/diy-soundproofing-tips/',
    '/ja/soundproof-room/diy/free-cardboard-soundproof-tech/':            '/ja/diy/free-cardboard-soundproof-tech/',
    '/ja/soundproof-room/diy/futon-cardboard-karaoke-booth/':             '/ja/diy/futon-cardboard-karaoke-booth/',
    '/ja/soundproof-room/diy/gamer-acoustic-placement/':                  '/ja/diy/gamer-acoustic-placement/',
    '/ja/soundproof-room/diy/outdoor-soundproof-curtain-market-guide/':   '/ja/diy/outdoor-soundproof-curtain-market-guide/',
    '/ja/soundproof-room/diy/soundproof-room-diy-cost/':                  '/ja/diy/soundproof-room-diy-cost/',
    '/ja/soundproof-room/diy/soundproof-sheet-heavy-diy-tips/':           '/ja/diy/soundproof-sheet-heavy-diy-tips/',
    // soundproof-room/diy → soundproof-room（製品選択系）
    '/ja/soundproof-room/diy/proofroom-aircondition-select/': '/ja/soundproof-room/proofroom-aircondition-select/',
    '/ja/soundproof-room/diy/shanon-vs-bouon-window/':        '/ja/soundproof-room/shanon-vs-bouon-window/',
    // soundproof-rental/diy → diy / creator
    '/ja/soundproof-rental/diy/renter-parent-house-soundproofing/': '/ja/diy/renter-parent-house-soundproofing/',
    '/ja/soundproof-rental/diy/soundproof-window-merit-demerit/':   '/ja/diy/soundproof-window-merit-demerit/',
    '/ja/soundproof-rental/diy/wooden-apartment-soundproof-guide/': '/ja/diy/wooden-apartment-soundproof-guide/',
    '/ja/soundproof-rental/diy/one-room-streaming-soundproof/':     '/ja/creator/one-room-streaming-soundproof/',
    // soundproof-room/knowledge → money
    '/ja/soundproof-room/knowledge/bouon-asset-value-analysis/':           '/ja/money/bouon-asset-value-analysis/',
    '/ja/soundproof-room/knowledge/small-business-soundproof-subsidy-guide/': '/ja/money/small-business-soundproof-subsidy-guide/',
    '/ja/soundproof-room/knowledge/soundproof-room-moving/':               '/ja/money/soundproof-room-moving/',
    '/ja/soundproof-room/knowledge/soundproof-room-rental-lease/':         '/ja/money/soundproof-room-rental-lease/',
    '/ja/soundproof-room/knowledge/soundproof-subsidy-check-guide/':       '/ja/money/soundproof-subsidy-check-guide/',
    '/ja/soundproof-room/knowledge/soundproof-subsidy-news-2025/':         '/ja/money/soundproof-subsidy-news-2025/',
    '/ja/soundproof-room/knowledge/soundproof-subsidy-tokyo-osaka/':       '/ja/money/soundproof-subsidy-tokyo-osaka/',
    '/ja/soundproof-room/knowledge/soundproof-window-subsidy-2025-guide/': '/ja/money/soundproof-window-subsidy-2025-guide/',
    // soundproof-room/knowledge → creator / business / diy / knowledge
    '/ja/soundproof-room/knowledge/vtuber-soundproof-environment-complete-guide/': '/ja/creator/vtuber-soundproof-environment-complete-guide/',
    '/ja/soundproof-room/knowledge/privacy-pod-market-growth/':            '/ja/business/privacy-pod-market-growth/',
    '/ja/soundproof-room/knowledge/danbocchi-floor-protection/':           '/ja/diy/danbocchi-floor-protection/',
    '/ja/soundproof-room/knowledge/diy-wall-soundproofing-room-guide/':    '/ja/diy/diy-wall-soundproofing-room-guide/',
    '/ja/soundproof-room/knowledge/biophilic-acoustics/':                           '/ja/knowledge/biophilic-acoustics/',
    '/ja/soundproof-room/knowledge/d-value-truth-and-myths/':                       '/ja/knowledge/d-value-truth-and-myths/',
    '/ja/soundproof-room/knowledge/diy-soundproof-truth/':                          '/ja/knowledge/diy-soundproof-truth/',
    '/ja/soundproof-room/knowledge/neighborhood-noise-seasonal-pattern-statistics/': '/ja/knowledge/neighborhood-noise-seasonal-pattern-statistics/',
    '/ja/soundproof-room/knowledge/noise-complaint-legal-precedent-manual/':        '/ja/knowledge/noise-complaint-legal-precedent-manual/',
    // soundproof-room/solution → diy / knowledge / money / business
    '/ja/soundproof-room/solution/diy-internal-window-road-noise-reduction/': '/ja/diy/diy-internal-window-road-noise-reduction/',
    '/ja/soundproof-room/solution/diy-refrigeration-noise-reduction/':        '/ja/diy/diy-refrigeration-noise-reduction/',
    '/ja/soundproof-room/solution/diy-soundproof-ventilation-heat-exhaust/':  '/ja/diy/diy-soundproof-ventilation-heat-exhaust/',
    '/ja/soundproof-room/solution/absorption-vs-soundproofing-materials/':    '/ja/knowledge/absorption-vs-soundproofing-materials/',
    '/ja/soundproof-room/solution/mental-health-benefits-of-silence/':        '/ja/knowledge/mental-health-benefits-of-silence/',
    '/ja/soundproof-room/solution/musician-soundproof-loan-strategy/':        '/ja/money/musician-soundproof-loan-strategy/',
    '/ja/soundproof-room/solution/telework-soundproof-loan-strategy/':        '/ja/money/telework-soundproof-loan-strategy/',
    '/ja/soundproof-room/solution/workbooth-office-soundproof-trend/':        '/ja/business/workbooth-office-soundproof-trend/',
    // soundproof-rental/knowledge → creator
    '/ja/soundproof-rental/knowledge/bourentakl-streamer-settingsetubi/': '/ja/creator/bourentakl-streamer-settingsetubi/',
    '/ja/soundproof-rental/knowledge/streamer-rental-selection-guide/':   '/ja/creator/streamer-rental-selection-guide/',
    // soundproof-rental/solution → knowledge / creator / diy / business
    '/ja/soundproof-rental/solution/vibration-reduction-science/':                    '/ja/knowledge/vibration-reduction-science/',
    '/ja/soundproof-rental/solution/soundproof-rental-life-streamer/':               '/ja/creator/soundproof-rental-life-streamer/',
    '/ja/soundproof-rental/solution/streamer-soundproof-room-comprehensive-guide/':   '/ja/creator/streamer-soundproof-room-comprehensive-guide/',
    '/ja/soundproof-rental/solution/treadmill-apartment-soundproofing-layering/':     '/ja/diy/treadmill-apartment-soundproofing-layering/',
    '/ja/soundproof-rental/solution/owner-soundproof-renovation-investment-strategy-2026/': '/ja/business/owner-soundproof-renovation-investment-strategy-2026/',

    // ── 統合済み記事のリダイレクト（2026-06-01）────────────────────────────
    // ビジネス活用3本 → soundproof-space-business-guide
    '/ja/soundproof-room/others/soundproof-asset-sharing/': '/ja/business/soundproof-space-business-guide/',
    '/ja/column/others/empty-tenant-soundproof-renovation-possibility/': '/ja/business/soundproof-space-business-guide/',
    '/ja/column/others/soundproof-booth-rental-business-feasibility/': '/ja/business/soundproof-space-business-guide/',
    // オーナーリノベ2本 → owner-soundproof-renovation-strategy
    '/ja/soundproof-rental/others/owner-soundproof-renovation-strategy/': '/ja/soundproof-rental/owner-soundproof-renovation-strategy/',
    '/ja/column/company/renovation-roi-strategy/': '/ja/soundproof-rental/owner-soundproof-renovation-strategy/',

    // ── 旧Hugo /posts/ → 現カテゴリ構造へ転送（存在しない記事は最近接カテゴリへ）
    // soundproof-room カテゴリ（記事が存在するもの）
    '/posts/soundproof-room-humidifier-guide/': '/ja/soundproof-room/bouon-humidifier-comparison/',
    '/posts/rental-proofroom-contractcheck/':   '/ja/soundproof-rental/rental-proofroom-contractcheck/',
    '/posts/bass-trap-installation-guide/':     '/ja/diy/bass-trap-installation-guide/',
    '/posts/closet-diy-soundproof-room/':       '/ja/diy/closet-diy-soundproof-room/',
    '/posts/diy-vocal-soundproof-mask/':        '/ja/diy/diy-vocal-soundproof-mask/',
    '/posts/bouon-osusume-hikaku/':             '/ja/soundproof-room/bouon-osusume-hikaku/',
    '/posts/sendai-soundproof-rental-guide/':   '/ja/local/sendai-soundproof-rental-guide/',
    '/posts/rental-unit-soundproof-room/':      '/ja/soundproof-rental/rental-unit-soundproof-room/',
    '/posts/musision-soundproof-rental-review/':'/ja/soundproof-rental/musision-comprehensive-guide/',
    '/posts/soundproof-room-rental-cost/':      '/ja/money/soundproof-room-rental-cost/',
    '/posts/soundproof-room-loan/':             '/ja/money/soundproof-room-loan-guide/',
    '/posts/osaka-soundproof-rental-guide/':    '/ja/local/osaka-soundproof-rental-guide/',
    '/posts/nitori-soundproof-acoustic-guide/': '/ja/soundproof-room/nitori-soundproof-acoustic-guide/',
    '/posts/soundproof-room-price-market/':     '/ja/money/soundproof-room-price-market/',
    '/posts/diy-soundproofing-tips/':           '/ja/diy/diy-soundproofing-tips/',
    '/posts/soundproof-subsidy-news-2025/':     '/ja/money/soundproof-subsidy-news-2025/',
    '/posts/rental-vs-purchase-soundproof-room/':'/ja/money/rental-vs-purchase-soundproof-room/',
    '/posts/gamer-acoustic-placement/':         '/ja/diy/gamer-acoustic-placement/',
    '/posts/cello-vibration-proof/':            '/ja/soundproof-rental/rental-caution-cello/',
    '/posts/drum-soundproof-room/':             '/ja/soundproof-room/soundproof-performance-drum/',
    '/posts/streaming-room-layout-examples/':   '/ja/creator/streaming-room-layout-guide/',
    '/posts/noise-regulation-update-2025/':     '/ja/knowledge/noise-regulation-update-2025/',
    '/posts/soundproof-culture-japan-vs-america/':'/ja/knowledge/soundproof-culture-japan-vs-america/',
    '/posts/workbooth-office-soundproof-trend/':'/ja/business/workbooth-office-soundproof-trend/',
    '/posts/hsp-soundproof-room-guide/':        '/ja/soundproof-room/hsp-soundproof-room-guide/',
    // 記事が存在しない → 最近接カテゴリへ転送
    '/posts/soundproof-room-wifi-guide/':               '/ja/soundproof-room/',
    '/posts/rt60-reverberation-measurement-guide/':     '/ja/knowledge/d-value-truth-and-myths/',
    '/posts/soundproof-room-internet-lan-guide/':       '/ja/soundproof-room/',
    '/posts/soundproof-room-cheapest/':                 '/ja/soundproof-room/',
    '/posts/soundproof-room-gap-caulking/':             '/ja/soundproof-room/',
    '/posts/soundproof-performance-dr-standard/':       '/ja/knowledge/d-value-truth-and-myths/',
    '/posts/acoustic-panel-placement/':                 '/ja/diy/bass-trap-installation-guide/',
    '/posts/soundproof-room-tax-guide/':                '/ja/money/',
    '/posts/soundproof-room-standard-size/':            '/ja/soundproof-room/',
    '/posts/bourental-music-ensoutaime/':               '/ja/soundproof-rental/',
    '/posts/soundproof-room-effectiveness/':            '/ja/soundproof-room/',
    '/posts/airport-soundproof-subsidy/':               '/ja/money/soundproof-subsidy-check-guide/',
    '/posts/soundproof-room-diy-complete-manual/':      '/ja/diy/',
    '/posts/bouon-rental-yatinsouba/':                  '/ja/soundproof-rental/',
    '/posts/building-code-reform-2025-soundproof/':     '/ja/knowledge/',
    '/posts/soundproof-room-types/':                    '/ja/soundproof-room/',
    '/posts/yamaha-avitecs-cefine-ns-guide/':           '/ja/soundproof-room/kawai-nasal-soundproof-room-guide/',
    '/posts/asmr-proofroom-guide/':                     '/ja/creator/',
    '/posts/keyboard-sound-streaming-soundproof-guide/':'/ja/creator/',
    '/posts/streamer-proofroom-choicetech/':            '/ja/creator/',
    '/posts/streamer-trouble-rule/':                    '/ja/soundproof-rental/',
    '/posts/rental-game-soundproof-booth-3man/':        '/ja/soundproof-rental/',
    '/posts/cable-noise-ground-loop-prevention/':       '/ja/diy/',
    '/posts/gamer-bouon-room-select/':                  '/ja/soundproof-room/',
    '/posts/gaming-streaming-floor-noise-control/':     '/ja/creator/',
    '/posts/thunder-bouon-stopnoise-knowlkefge/':       '/ja/knowledge/noise-regulation-update-2025/',
    '/posts/vtuber-heat-noise-management/':             '/ja/creator/',
    '/posts/bouon-kujyou-taisaku/':                     '/ja/soundproof-rental/',
    '/posts/soundproof-room-price-complete-guide-2025/':'/ja/money/soundproof-room-price-market/',
    '/posts/bouoproof-maintnace/':                      '/ja/soundproof-room/',
    '/posts/piano-proofroom-select-guide/':             '/ja/soundproof-room/',

    // ── 旧Hugo /en/posts/ → /ja/ へ転送（英語ページ一時停止中） ──────────
    '/en/posts/budget-soundproof-booth-comparison/': '/ja/',
    '/en/posts/vtuber-soundproof-environment-complete-guide/': '/ja/',
    '/en/posts/soundproof-room-price-complete-guide-2025/': '/ja/',
    '/en/posts/yamaha-avitecs-cefine-ns-guide/': '/ja/',
    '/en/posts/soundproof-performance-dr-standard/': '/ja/',
    '/en/posts/bouon-osusume-hikaku/': '/ja/',
    '/en/posts/noise-regulation-update-2025/': '/ja/',
    '/en/posts/soundproof-room-cheapest/': '/ja/',
    '/en/posts/diy-vocal-soundproof-mask/': '/ja/',
    '/en/posts/hsp-soundproof-room-guide/': '/ja/',
    '/en/posts/nitori-soundproof-acoustic-guide/': '/ja/',
    '/en/posts/soundproof-room-rental-cost/': '/ja/',
    '/en/posts/bouon-kujyou-taisaku/': '/ja/',
    '/en/posts/soundproof-room-humidifier-guide/': '/ja/',
    '/en/posts/musision-soundproof-rental-review/': '/ja/',
    '/en/posts/sendai-soundproof-rental-guide/': '/ja/',

    // ── 旧Astro パス変更（slug frontmatter追加によるURL変更） ─────────────
    '/ja/knowledge/diy-vocal-soundproof-mask/': '/ja/diy/diy-vocal-soundproof-mask/',
    '/ja/solutions/unit-rooms/bouon-osusume-hikaku/': '/ja/soundproof-room/bouon-osusume-hikaku/',
    '/en/knowledge/soundproof-room-rental-cost/': '/ja/',
    '/en/knowledge/acoustic-panel-placement/': '/ja/',
    '/ja/knowledge/soundproof-subsidy-zero-cost/': '/ja/money/soundproof-subsidy-check-guide/',
    '/en/knowledge/soundproof-subsidy-zero-cost/': '/ja/',
  },
  image: {
    domains: ['m.media-amazon.com', 'ir-jp.amazon-adsystem.com'],
  },
});
