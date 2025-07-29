/** @type {import('tailwindcss').Config} */
export default {
  content: [
    " ./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  //these can be configured as our choice both for colors and breakpoints
  theme: {
    extend: {
      colors: {
        blue: {

        },
        green: {

        }
      }
    },
  },
  plugins: [],
}

