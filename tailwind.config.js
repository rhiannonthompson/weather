module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '104': '26rem',
        '112': '28rem',
        '130': '30rem',
        '138': '32rem',
        '154': '36rem',
        '172': '40rem',
        '190': '48rem',
        '206': '58rem',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/Cloud-background.png')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
