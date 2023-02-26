/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {'neutral-100': '#20252B',
    'greenlight': '#2BC20E'},
      fontFamily: {
          CoralColour: ['Coral Colour'],
          Montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
