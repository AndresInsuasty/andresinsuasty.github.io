/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'curso_knime':"url('../img/curso_knime.png)",
      },
      colors: {
        'primario':'#4435BB',
        'secundario':"#A435F0",
        'terciario':"#72D8BA",
      },
      fontFamily:{
        Ubuntu:['Ubuntu','sans-serif'],
      }
    },
    variants: {
      width: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [],
}

