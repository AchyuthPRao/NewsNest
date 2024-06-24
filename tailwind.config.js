/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('./src/images/news.jpg')",
      },
    },
  },
  plugins: [
  ],
}