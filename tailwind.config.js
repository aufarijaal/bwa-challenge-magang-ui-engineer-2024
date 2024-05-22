/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [require('tailwindcss-animate')],
}
