export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Roboto', 'sans-serif']
      },
      gridTemplateCOulms :{
        '70/30' : '70% 28%',
      }
    },
  },
  plugins: [],
}