// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bloomandgrow.blog',
  integrations: [
    tailwind(),
    sitemap()
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  prefetch: true,
  build: {
    format: 'file'
  }
});
