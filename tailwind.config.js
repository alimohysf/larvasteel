/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    //extend: {backgroundImage:{'hero':"url('img/hero.jpg')"}},
    extend:{
      fontFamily: {
        bodyFont: ['Montserrat']
      }
    }
  },
  plugins: [],
}

