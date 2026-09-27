import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      colors: {
        bg: "#151515",
        card: "#1E1E1E",
        "card-badge": "#3E3E3E",
        accent: "#F5FC7B",
        muted: "#5E5E5E",
        slate: "#6A7583",
        soft: "#E5E5E5",
      },
    },
  },
  plugins: [],
};

export default config;
