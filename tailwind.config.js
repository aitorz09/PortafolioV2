/** @type {import('tailwindcss').Config} */
export default {
  mode:'jit',
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
      'sm':'640px',
      'custom': '650px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px'
    },
    gridTemplateRows:{
      'grid-row-1f5fr':'1fr 4fr 4fr',
      'grid-cuadrado':'1fr 1fr'
    },
    fontFamily:{
      'dosis':'Dosis, sans-serif'
    },
    minWidth:{
      'min-w-600px':'600px',
      'min-w-350px':'350px'
    }
  },
  plugins: [
  ],
}

