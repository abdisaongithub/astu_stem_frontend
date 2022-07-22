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
        'profile': "url('./images/profile.jpg')",
        'blog_header': "url('./images/blog_header.png')",
        'blog_header2': "url('./images/blog_header2.png')",
      }
    },
  },
  plugins: [],
}