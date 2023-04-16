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
      backgroundImage: "url('../public/Bloodfen_Origami_Illustration_pattern_Adaptive_UI_system_in_spa_1b2cfb19-1814-4a98-9937-a04ed04de846.png')"
    },
  },
  plugins: [],
}
