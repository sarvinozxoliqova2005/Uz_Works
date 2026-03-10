/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // MUHIM: 'media' emas, 'class' bo'lishi kerak!
  theme: {
    extend: {},
  },
  plugins: [],
}