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
        'gold-light': '#F4E4BC',
        'gold-dark': '#B8960C',
        'black-deep': '#0a0a0a',
        'black-light': '#1a1a1a',
      },
      fontFamily: {
        'display': ['Great Vibes', 'cursive'],
        'serif': ['Cormorant Garamond', 'serif'],
        'sans': ['Montserrat', 'sans-serif'],
        'numbers': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
