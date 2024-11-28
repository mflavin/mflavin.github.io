/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        xs: "420px",
      },
      colors: {
        background: {
          DEFAULT: "var(--color-background)",
          tint: "var(--color-background-tint)",
        },
        primary: {
          DEFAULT: "var(--color-primary)",
          tint: "var(--color-primary-tint)",
        },
        "on-primary": "var(--color-on-primary)",
        tertiary: {
          DEFAULT: "var(--color-tertiary)",
          tint: "var(--color-tertiary-tint)",
        },
        "on-tertiary": "var(--color-on-tertiary)",
        secondary: {
          DEFAULT: "var(--color-secondary)",
          tint: "var(--color-secondary-tint)",
        },
        "on-secondary": "var(--color-on-secondary)",
        outline: "var(--color-outline)",
        default: "var(--color-text)",
        muted: "var(--color-text-muted)",
      },
    },
  },
  plugins: [],
};
