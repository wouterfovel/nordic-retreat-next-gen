module.exports = {
  mode: 'jit',
  content: ['storyblok/**/*.{vue,js}', 'components/**/*.{vue,js}', 'pages/**/*.vue'],
  theme: {
    extend: {},
    fontFamily: {
      sans: 'Roboto, sans-serif',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
