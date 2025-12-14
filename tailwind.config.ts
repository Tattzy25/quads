import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "light-dark(#ffffff, #0a0a0a)",
        foreground: "light-dark(#000000, #ffffff)",
        card: {
          DEFAULT: "light-dark(#f8f8f8, #1a1a1a)",
          foreground: "light-dark(#000000, #ffffff)",
        },
        popover: {
          DEFAULT: "light-dark(#ffffff, #1a1a1a)",
          foreground: "light-dark(#000000, #ffffff)",
        },
        primary: {
          DEFAULT: "light-dark(#000000, #ffffff)",
          foreground: "light-dark(#ffffff, #000000)",
        },
        secondary: {
          DEFAULT: "light-dark(#e5e5e5, #333333)",
          foreground: "light-dark(#000000, #ffffff)",
        },
        muted: {
          DEFAULT: "light-dark(#f5f5f5, #333333)",
          foreground: "light-dark(#666666, #999999)",
        },
        accent: {
          DEFAULT: "light-dark(#000000, #ffffff)",
          foreground: "light-dark(#ffffff, #000000)",
        },
        destructive: {
          DEFAULT: "light-dark(#dc2626, #ef4444)",
          foreground: "#ffffff",
        },
        border: "light-dark(#e5e5e5, #333333)",
        input: "light-dark(#f0f0f0, #1a1a1a)",
        ring: "light-dark(#000000, #ffffff)",
        chart: {
          "1": "#3b82f6",
          "2": "#8b5cf6",
          "3": "#ec4899",
          "4": "#f59e0b",
          "5": "#10b981",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;
