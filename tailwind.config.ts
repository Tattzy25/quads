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
        background: "#ffffff",
        foreground: "#000000",
        card: {
          DEFAULT: "#f8f8f8",
          foreground: "#000000",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#000000",
        },
        primary: {
          DEFAULT: "#000000",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#e5e5e5",
          foreground: "#000000",
        },
        muted: {
          DEFAULT: "#f5f5f5",
          foreground: "#666666",
        },
        accent: {
          DEFAULT: "#000000",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#dc2626",
          foreground: "#ffffff",
        },
        border: "#e5e5e5",
        input: "#f0f0f0",
        ring: "#000000",
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
