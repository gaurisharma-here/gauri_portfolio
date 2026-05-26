import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
      colors: {
        background: "#050505",
        foreground: "#f3f4f6",
        accent: {
          DEFAULT: "#00d9a5",
          muted: "rgba(0, 217, 165, 0.18)",
          glow: "rgba(0, 217, 165, 0.35)",
          dark: "#009e76",
        },
        card: {
          bg: "rgba(10, 10, 10, 0.7)",
          border: "rgba(255, 255, 255, 0.05)",
          borderHover: "rgba(0, 255, 157, 0.25)",
        },
      },
      boxShadow: {
        "glow-sm": "0 0 10px rgba(0, 255, 157, 0.1)",
        glow: "0 0 20px rgba(0, 255, 157, 0.25)",
        "glow-lg": "0 0 35px rgba(0, 255, 157, 0.4)",
        "card-glow": "0 10px 30px -10px rgba(0, 255, 157, 0.15)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
