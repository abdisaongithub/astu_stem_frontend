/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./images/hero.svg')",
        'footer': "url('./images/footer.svg')",
      }
    },
  },
  plugins: [],
}