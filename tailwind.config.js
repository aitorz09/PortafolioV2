/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bright-gray': {  DEFAULT: '#323943',  50: '#4F676B',  100: '#4C6267',  200: '#45575E',  300: '#3F4C55',  400: '#38434C',  500: '#323943',  600: '#252932',  700: '#181A20',  800: '#0B0B0F',  900: '#000000'},
      }
    },
    screens: {
      'custom': '650px',
    },
    gridTemplateRows:{
      'grid-row-1f5fr':'1fr 5fr 5fr',
      'grid-cuadrado':'1fr 1fr'
    }
  },
  plugins: [],
}

