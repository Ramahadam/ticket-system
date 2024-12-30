/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'color-text': '#062b4b',
        'color-primary': '#5e5bff',
        'color-mediumslateblue': '#8664FC',
        'color-secondary': '#007ace',
        'color-accent': '#dff0ff',
        'dark-green': '#0a9965',
        'light-lim': '#d0fdc8',
        'light-blue': '#38b6ff',
        'dark-red': '#ff3306',
        'color-orange': '#ff6838',
        'light-red': '#fdf1f1',
        'dark-gray': '#999999',
        'light-gray': '#bcbbbb',
        'bg-gray': '#e6e6e6',
        'bg-light-gray': '#f2f2f2',
        'bg-veryLight-gray': 'rgb(242, 242, 242)',
      },
      fontFamily: {
        sans: ['Fredoka', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        sans2: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        '2xs': '.625rem',
        '3xs': '.5rem',
      },
    },
  },
  plugins: [],
};
