// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/data/site';

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  integrations: [tailwind(), sitemap()],
});
