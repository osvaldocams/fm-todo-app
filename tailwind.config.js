/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Josefin': ['Josefin Sans', 'sans-serif'],
      },
      colors: {
        VeryLightGray: 'hsl(0, 0%, 98%)',
        VeryLightGrayishBlue: 'hsl(236, 33%, 92%)',
        LightGrayishBlue: 'hsl(233, 11%, 84%)',
        DarkGrayishBlue: 'hsl(236, 9%, 61%)',
        VeryDarkGrayishBlue: 'hsl(235, 19%, 35%)',
        VeryDarkMains: 'hsl(233, 14%, 35%)',
        VeryDarkBg: 'hsl(237, 14%, 26%)',
        VeryDark:'hsl(235, 21%, 11%)'
      },
    },
  },
  plugins: [],
}

