/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: "#060606",
        background: "#E0E0E0",
        disable: "#D9D9D9",
      }
    },
  },
  plugins: [],
}