// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  image: {
    domains: ['m.media-amazon.com', 'ir-jp.amazon-adsystem.com'],
  },
});