/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gold': '#D4AF37',
        'black': '#121212',
        'gray-dark': '#1E1E1E',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'swan-gradient': 'linear-gradient(135deg, #121212 0%, #1E1E1E 100%)',
      }
    },
  },
  plugins: [],
}