module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#f3c614',
        secondary: '#353535',
      },
      spacing: {
        80: '20rem',
        100: '25rem',
      },
    },
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'disabled'],
    fontSize: ['responsive', 'hover', 'focus'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    boxShadow: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
};
