/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0F1519',
        grey: '#2B2C2F',
        lightgrey: '#4D5356',
        white: '#F5F5F5',
        red: '#D62C40',
      },
      backgroundImage: {
        pc: "url('./public/top-view-workspace-with-sheet-paper-laptop.jpg')",
      },
    },
  },
  plugins: [],
}
