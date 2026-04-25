// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://bouon-lab.com',
  integrations: [mdx(), sitemap()],
  redirects: {
    '/': { destination: '/ja/', status: 308 },

    // ── 旧Hugo /posts/ → 新Astro URL (301) ──────────────────────────────
    // solutions
    '/posts/soundproof-room-humidifier-guide/': '/ja/solutions/soundproof-room-humidifier-guide/',
    '/posts/rental-proofroom-contractcheck/': '/ja/solutions/rental-proofroom-contractcheck/',
    '/posts/bass-trap-installation-guide/': '/ja/solutions/bass-trap-installation-guide/',
    '/posts/closet-diy-soundproof-room/': '/ja/solutions/closet-diy-soundproof-room/',
    '/posts/diy-vocal-soundproof-mask/': '/ja/solutions/diy-vocal-soundproof-mask/',
    '/posts/soundproof-room-wifi-guide/': '/ja/solutions/soundproof-room-wifi-guide/',
    '/posts/rt60-reverberation-measurement-guide/': '/ja/solutions/rt60-reverberation-measurement-guide/',
    '/posts/soundproof-room-internet-lan-guide/': '/ja/solutions/soundproof-room-internet-lan-guide/',
    '/posts/soundproof-room-cheapest/': '/ja/solutions/soundproof-room-cheapest/',
    '/posts/bouon-osusume-hikaku/': '/ja/solutions/bouon-osusume-hikaku/',
    '/posts/soundproof-room-gap-caulking/': '/ja/solutions/soundproof-room-gap-caulking/',
    '/posts/sendai-soundproof-rental-guide/': '/ja/solutions/sendai-soundproof-rental-guide/',
    '/posts/rental-unit-soundproof-room/': '/ja/solutions/rental-unit-soundproof-room/',
    '/posts/soundproof-performance-dr-standard/': '/ja/solutions/soundproof-performance-dr-standard/',
    '/posts/musision-soundproof-rental-review/': '/ja/solutions/musision-soundproof-rental-review/',
    '/posts/acoustic-panel-placement/': '/ja/solutions/acoustic-panel-placement/',
    '/posts/soundproof-room-rental-cost/': '/ja/solutions/soundproof-room-rental-cost/',
    '/posts/soundproof-room-tax-guide/': '/ja/solutions/soundproof-room-tax-guide/',
    '/posts/soundproof-room-loan/': '/ja/solutions/soundproof-room-loan/',
    '/posts/soundproof-room-standard-size/': '/ja/solutions/soundproof-room-standard-size/',
    '/posts/bourental-music-ensoutaime/': '/ja/solutions/bourental-music-ensoutaime/',
    '/posts/osaka-soundproof-rental-guide/': '/ja/solutions/osaka-soundproof-rental-guide/',
    '/posts/soundproof-room-effectiveness/': '/ja/solutions/soundproof-room-effectiveness/',
    '/posts/nitori-soundproof-acoustic-guide/': '/ja/solutions/nitori-soundproof-acoustic-guide/',
    '/posts/airport-soundproof-subsidy/': '/ja/solutions/airport-soundproof-subsidy/',
    '/posts/soundproof-room-diy-complete-manual/': '/ja/solutions/soundproof-room-diy-complete-manual/',
    '/posts/soundproof-room-price-market/': '/ja/solutions/soundproof-room-price-market/',
    '/posts/bouon-rental-yatinsouba/': '/ja/solutions/bouon-rental-yatinsouba/',
    '/posts/building-code-reform-2025-soundproof/': '/ja/solutions/building-code-reform-2025-soundproof/',
    '/posts/diy-soundproofing-tips/': '/ja/solutions/diy-soundproofing-tips/',
    '/posts/soundproof-room-types/': '/ja/solutions/soundproof-room-types/',
    '/posts/soundproof-subsidy-news-2025/': '/ja/solutions/soundproof-subsidy-news-2025/',
    '/posts/yamaha-avitecs-cefine-ns-guide/': '/ja/solutions/yamaha-avitecs-cefine-ns-guide/',
    '/posts/rental-vs-purchase-soundproof-room/': '/ja/solutions/rental-vs-purchase-soundproof-room/',
    // use-case
    '/posts/streaming-room-layout-examples/': '/ja/use-case/streaming-room-layout-examples/',
    '/posts/asmr-proofroom-guide/': '/ja/use-case/asmr-proofroom-guide/',
    '/posts/keyboard-sound-streaming-soundproof-guide/': '/ja/use-case/keyboard-sound-streaming-soundproof-guide/',
    '/posts/streamer-proofroom-choicetech/': '/ja/use-case/streamer-proofroom-choicetech/',
    '/posts/streamer-trouble-rule/': '/ja/use-case/streamer-trouble-rule/',
    '/posts/rental-game-soundproof-booth-3man/': '/ja/use-case/rental-game-soundproof-booth-3man/',
    '/posts/cello-vibration-proof/': '/ja/use-case/cello-vibration-proof/',
    '/posts/cable-noise-ground-loop-prevention/': '/ja/use-case/cable-noise-ground-loop-prevention/',
    '/posts/drum-soundproof-room/': '/ja/use-case/drum-soundproof-room/',
    '/posts/gamer-acoustic-placement/': '/ja/use-case/gamer-acoustic-placement/',
    '/posts/gamer-bouon-room-select/': '/ja/use-case/gamer-bouon-room-select/',
    // knowledge
    '/posts/noise-regulation-update-2025/': '/ja/knowledge/noise-regulation-update-2025/',
    '/posts/soundproof-culture-japan-vs-america/': '/ja/knowledge/soundproof-culture-japan-vs-america/',
    '/posts/workbooth-office-soundproof-trend/': '/ja/knowledge/workbooth-office-soundproof-trend/',
    // column (traffic確認済み記事のみ)
    '/posts/hsp-soundproof-room-guide/': '/ja/column/hsp-soundproof-room-guide/',
    // 近接記事へのリダイレクト（元記事がアーカイブ済み or 削除）
    '/posts/gaming-streaming-floor-noise-control/': '/ja/use-case/streaming-room-layout-examples/',
    '/posts/thunder-bouon-stopnoise-knowlkefge/': '/ja/knowledge/noise-regulation-update-2025/',
    '/posts/vtuber-heat-noise-management/': '/ja/use-case/streamer-proofroom-choicetech/',
    '/posts/bouon-kujyou-taisaku/': '/ja/knowledge/noise-regulation-update-2025/',
    '/posts/soundproof-room-price-complete-guide-2025/': '/ja/solutions/soundproof-room-price-market/',
    '/posts/bouoproof-maintnace/': '/ja/solutions/soundproof-room-effectiveness/',
    '/posts/piano-proofroom-select-guide/': '/ja/use-case/cello-vibration-proof/',

    // ── 旧Hugo /en/posts/ → 新Astro /en/ URL ────────────────────────────
    '/en/posts/budget-soundproof-booth-comparison/': '/en/solutions/budget-soundproof-booth-comparison/',
    '/en/posts/vtuber-soundproof-environment-complete-guide/': '/en/use-case/vtuber-soundproof-environment-complete-guide/',
    '/en/posts/soundproof-room-price-complete-guide-2025/': '/en/solutions/soundproof-room-price-complete-guide-2025/',
    '/en/posts/yamaha-avitecs-cefine-ns-guide/': '/en/solutions/yamaha-avitecs-cefine-ns-guide/',
    '/en/posts/soundproof-performance-dr-standard/': '/en/solutions/soundproof-performance-dr-standard/',
    '/en/posts/bouon-osusume-hikaku/': '/en/solutions/bouon-osusume-hikaku/',
    '/en/posts/noise-regulation-update-2025/': '/en/knowledge/noise-regulation-update-2025/',
    '/en/posts/soundproof-room-cheapest/': '/en/solutions/soundproof-room-cheapest/',
    '/en/posts/diy-vocal-soundproof-mask/': '/en/solutions/diy-vocal-soundproof-mask/',
    '/en/posts/hsp-soundproof-room-guide/': '/en/use-case/hsp-soundproof-room-guide/',
    '/en/posts/nitori-soundproof-acoustic-guide/': '/en/solutions/nitori-soundproof-acoustic-guide/',
    '/en/posts/soundproof-room-rental-cost/': '/en/solutions/soundproof-room-rental-cost/',
    '/en/posts/bouon-kujyou-taisaku/': '/en/solutions/soundproof-room-effectiveness/',
    '/en/posts/soundproof-room-humidifier-guide/': '/en/solutions/soundproof-room-humidifier-guide/',
    '/en/posts/musision-soundproof-rental-review/': '/en/solutions/musision-soundproof-rental-review/',
    '/en/posts/sendai-soundproof-rental-guide/': '/en/solutions/sendai-soundproof-rental-guide/',

    // ── 旧Astro パス変更（slug frontmatter追加によるURL変更） ─────────────
    '/ja/knowledge/diy-vocal-soundproof-mask/': '/ja/solutions/diy-vocal-soundproof-mask/',
    '/ja/solutions/unit-rooms/bouon-osusume-hikaku/': '/ja/solutions/bouon-osusume-hikaku/',
    '/en/knowledge/soundproof-room-rental-cost/': '/en/solutions/soundproof-room-rental-cost/',
    '/en/knowledge/acoustic-panel-placement/': '/en/solutions/acoustic-panel-placement/',
    '/ja/knowledge/absorption-vs-soundproofing-materials/': '/ja/solutions/soundproof-room-effectiveness/',
    '/ja/knowledge/soundproof-subsidy-zero-cost/': '/ja/solutions/airport-soundproof-subsidy/',
    '/en/knowledge/soundproof-subsidy-zero-cost/': '/en/solutions/soundproof-room-effectiveness/',
  },
  image: {
    domains: ['m.media-amazon.com', 'ir-jp.amazon-adsystem.com'],
  },
});