/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#6B7280',
        darkBg: '#1A202C',
        lightText: '#E2E8F0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],  
        serif: ['Merriweather', 'serif'],
      },
      animation: {
        gradient: "gradient 15s ease infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
      },
      backgroundSize: {
        animate: "400% 400%",
      },
    },
  },
  plugins: [],
}
