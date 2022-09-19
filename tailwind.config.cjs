/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      backgroundImage: {
        'desktop': "url('/src/assets/bg-simplify-section-desktop.svg')"
      },
      colors: {
        primary: '#f25f3a',
        secondary: '#242d52',
        gray: '#9095a7',
        darkBlue: '#1d1e25',
        paleRed: '#ffefeb',
        lightGray: '#fafafa'

      },
      fontFamily: {
        primary: ['Be Vietnam Pro', 'sans-serif']
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
}
