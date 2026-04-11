import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["var(--font-bebas)"],
        barlow: ["var(--font-barlow)"],
        space: ["var(--font-space)"],
      },
      colors: {
        "ts-black": "#0a0a0a",
        "ts-yellow": "#e8ff00",
        "ts-white": "#f5f5f5",
        "ts-gray": "#1a1a1a",
        "ts-gray2": "#2a2a2a",
        "ts-muted": "#888888",
      },
    },
  },
  plugins: [],
};

export default config;
