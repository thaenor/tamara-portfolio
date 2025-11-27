/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        italiana: ['Italiana', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        abhaya: ['Abhaya Libre', 'serif'],
        helvetica: ['Helvetica Neue', 'sans-serif'],
      },
      colors: {
        yellow: {
          300: '#faeb99',
        },
      },
      borderRadius: {
        full: '999px',
      },
    },
  },
  plugins: [],
}
