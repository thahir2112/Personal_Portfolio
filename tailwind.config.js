/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        surface: {
          DEFAULT: "#121212",
          subtle: "#161616",
          elevated: "#1A1A1A",
          border: "rgba(255, 255, 255, 0.08)",
          "border-hover": "rgba(245, 197, 24, 0.35)",
        },
        warm: {
          light: "#C9BFA8",
          DEFAULT: "#A89F88",
          dark: "#8A8168",
          glow: "#1A1508",
        },
        mustard: {
          light: "#FFE066",
          DEFAULT: "#F5C518",
          dark: "#D4A70D",
          amber: "#FFB800",
        },
        editorial: {
          white: "#FFFFFF",
          muted: "rgba(255, 255, 255, 0.65)",
          dim: "rgba(255, 255, 255, 0.42)",
          faint: "rgba(255, 255, 255, 0.18)",
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["JetBrains Mono", "Menlo", "Monaco", "Courier New", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        widest: "0.2em",
        mega: "0.3em",
      },
    },
  },
  plugins: [],
};
