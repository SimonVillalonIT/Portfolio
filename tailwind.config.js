/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      '2xl': '1920px'
    },
    colors: {
      blue: '#0081FE',
      purple: '#323859',
      pink: '#ff49db',
      orange: '#F2A766',
      green: '#13D682',
      yellow: '#ffc82c',
      'gray-dark': '#242D34',
      gray: '#8492a6',
      'gray-light': '#d3dce6',
      white: '#ffffff',
      black: '#000000'
    },
    fontFamily: {
      sans: ['Merriweather', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem'
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '4rem'
      }
    },
    plugins: []
  }
}
