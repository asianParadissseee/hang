/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,svelte}'],
  theme: {
    extend: {
      colors: {
        violet: "#965CFF",
        dark: "#2C313A",
        green: "#4CBD97",
        gray: "#545454"
      }
    },
  },
  plugins: [],
}

