/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        first_grad: "#CD36FF",
        second_grad: "#5C0BD8",
        third_grad: "#1F0453",
        black: "#000",
        main:"#5C0BD8"
      },
      fontFamily:{
        intro: ["intro", "sans-serif"],
        monoton: ["monoton", "sans-serif"],
        patua: ["patua", "sans-serif"],
        rubik: ["rubik", "sans-serif"],
        rubikOne: ["rubikOne", "sans-serif"],
      }
    },
  },
  plugins: [],
}

