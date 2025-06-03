/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'vaiche-azul': '#009FE3',
        'vaiche-azulOscuro': '#0077b6',
        'vaiche-amarillo': '#F4A300',
        'vaiche-acento': '#f0f9ff'
      },
      fontFamily: {
        vaiche: ['Fredoka', 'sans-serif']
      }
    }
  },
  plugins: []
}