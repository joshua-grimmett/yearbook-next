/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colman:  '#EE1E23',
        pedley:  '#FECA0C',
        signato: '#01A44F',
        foxwell: '#0054A6'
      }
    },
  },
  plugins: [],
}