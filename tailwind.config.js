/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
}