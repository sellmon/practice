/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'brutal-lg': '8px 8px 0px 0px rgba(0, 0, 0, 1)',
        'brutal-md': '6px 6px 0px 0px rgba(0, 0, 0, 1)',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#581CCC',
        'midnight': '#110340',
        'tahiti': '#A1E0E7',
        'grass': '#21CC5E',
        'lemon': '#E4F439',
        'bubble-gum': '#E6B3EB',
        'bermuda': '#D4FEEF',
      },
    },
  },
  plugins: [],
}
