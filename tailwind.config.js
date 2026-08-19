
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#DF6951',
          navy: '#181E4B',
          yellow: '#F1A501',
          lightOrange: '#FFF1DA',
          lightPurple: '#D5AEE4'
        },
        sand: {
          DEFAULT: '#F5E6D3',
          dark: '#E8D5C0'
        },
        ocean: {
          DEFAULT: '#1B3A5C',
          dark: '#0F2A44',
          darker: '#0F1419'
        },
        gold: {
          DEFAULT: '#C4A54A',
          hover: '#B39439'
        },
        offwhite: '#FAF7F2',
        darkbg: '#0F1419',
        darkcard: '#1A2332'
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
        serif: ['Volkhov', 'Playfair Display', 'serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
