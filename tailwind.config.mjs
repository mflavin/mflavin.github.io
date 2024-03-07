/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        xs: '420px',
      },
      colors: {
        light: '#FBFCFE',
        dark: '#0F172A',
        toolbar: {
          DEFAULT: '#3867D60D',
          dark: '#88a4e60e',
        },
        primary: {
          DEFAULT: '#0C121E',
          dark: '#FBFCFE',
        },
        secondary: {
          DEFAULT: '#0C121ED9',
          dark: '#FBFCFED9',
        },
        accent: {
          DEFAULT: '#006877',
          dark: '#52d7f0',
        },
      },
    },
  },
  plugins: [],
};
