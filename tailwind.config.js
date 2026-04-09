/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1a7a6e",
          dark: "#145f56",
          light: "#e6f5f3",
        },
        accent: "#2a9d8f",
        "text-dark": "#1a1a2e",
        "text-muted": "#4a4a5a",
        "bg-cream": "#fafaf8",
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
