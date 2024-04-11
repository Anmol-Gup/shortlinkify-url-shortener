/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        teal:'#03A680',
        gunmetal:"#263238",
        lightgray:"#FFFFFFB3" 
      },
      backgroundColor:{
        'custom-color': '#D5F3ED'
      }
    },
  },
  plugins: [],
}