// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://bouon-lab.online',
  integrations: [mdx(), sitemap()],
  redirects: {
    '/': {
      destination: '/ja/',
      status: 308,
    },
  },
  image: {
    domains: ['m.media-amazon.com', 'ir-jp.amazon-adsystem.com'],
  },
});