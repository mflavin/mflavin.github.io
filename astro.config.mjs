// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  experimental: {
    svg: true,
  },
  site: 'https://mflavin.github.io/',
  vite: {
    plugins: [tailwindcss()],
  },
});
