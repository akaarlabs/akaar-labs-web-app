import type { Config } from "tailwindcss";

/**
 * Akaar Labs Design System
 * Primary theme is defined in src/app/globals.css via @theme (Tailwind v4).
 * This file documents the design tokens and supports tooling.
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        "primary-foreground": "#f8fafc",
        secondary: "#1e293b",
        "secondary-foreground": "#e2e8f0",
        accent: "#2563eb",
        "accent-foreground": "#ffffff",
        "accent-hover": "#1d4ed8",
        dark: "#0f172a",
        "dark-foreground": "#f8fafc",
        light: "#f8fafc",
        "light-foreground": "#0f172a",
        muted: "#64748b",
        "muted-foreground": "#94a3b8",
        border: "#e2e8f0",
        "border-muted": "#cbd5e1",
        background: "#ffffff",
        foreground: "#0f172a",
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      fontSize: {
        hero: ["3.5rem", { lineHeight: "1.1" }],
        "hero-sm": ["2.5rem", { lineHeight: "1.2" }],
        "hero-lg": ["4.5rem", { lineHeight: "1.1" }],
        "hero-xl": ["5rem", { lineHeight: "1.1" }],
        section: ["2.25rem", { lineHeight: "1.2" }],
        "section-sm": ["1.875rem", { lineHeight: "1.3" }],
        card: ["1.25rem", { lineHeight: "1.4" }],
      },
      maxWidth: {
        container: "1280px",
      },
      transitionDuration: {
        reveal: "700ms",
      },
    },
  },
  plugins: [],
};

export default config;
