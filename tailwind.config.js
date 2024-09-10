/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'exo': ['Exo', 'sans-serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '50px',
        sm: '20px',
        lg: '40px',
        xl: '30px',
        '2xl': '60px',
      },
    },
    extend: {
      colors: {
        oq: '#FFFFFF',
        gren: "#009494",
        qora: "#000000",
        dakr: "#17252a",
      }
    },
  },
  plugins: [],
})