/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: [
    'selector', '[class*="app-dark"]'
  ],
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  plugins: [
    require('tailwindcss-primeui')
  ],
  theme: {
      screens: {
          sm: '576px',
          md: '768px',
          lg: '992px',
          xl: '1200px',
          '2xl': '1920px'
      }
  }
};
