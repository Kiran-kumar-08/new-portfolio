/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all JS, JSX, TS, TSX files in src/
    "./public/index.html",      // Also scan your public HTML file
  ],
  theme: {
    extend: {
      // You can extend Tailwind's default theme here
      // For example, custom colors, fonts, etc.
      colors: {
        primary: '#3B82F6', // Example primary blue
        secondary: '#6B7280', // Example secondary gray
        darkBg: '#1A202C', // Dark background for classic modern feel
        lightText: '#E2E8F0', // Light text on dark backgrounds
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Or any other modern sans-serif font
        serif: ['Merriweather', 'serif'], // Or a classic serif for body text
      },
    },
  },
  plugins: [],
}