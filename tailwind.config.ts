import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: "#D4AF37",
          bronze: "#C59B27",
          dark: "#080A0E",
          surface: "#0F1218",
          card: "#141822",
          cardBorder: "#1E2536",
          textMain: "#F2F4F8",
          textMuted: "#8E95A5",
        },
      },
      fontFamily: {
        gq: ["var(--font-bodoni)", "Bodoni Moda", "Didot", "Georgia", "serif"],
        serif: ["var(--font-newsreader)", "Newsreader", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-.04em",
      },
    },
  },
  plugins: [],
};
export default config;
