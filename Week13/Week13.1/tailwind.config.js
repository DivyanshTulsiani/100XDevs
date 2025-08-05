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
          300: "#002d58",
          400: "#18416a"
        },
        green: {
          300: "#7e96a6"
        },  
        gray: {
          300: "#18416a"
        }

      }
    },
  },
  plugins: [],
}

