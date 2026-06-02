// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mflavin.github.io/',
  integrations: [sitemap()],
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: 'Inter',
        cssVariable: '--font-inter',
        weights: [400, 500, 600, 700],
        styles: ['normal'],
        subsets: ['latin'],
        fallbacks: ['sans-serif'],
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
