/* eslint-disable global-require */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    container: false,
  },
  theme: {
    // TODO: Uncomment this part of the code and the import of "defaultTheme" above, and complete TODOs
    // fontFamily: {
    //   // TODO: Add font families
    //   //       Delete "mono" if it isn't needed
    //   sans: ['', ...defaultTheme.fontFamily.sans],
    //   mono: ['', ...defaultTheme.fontFamily.mono],
    // },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: '#000000',
      'opacity-black': 'rgba(0, 0, 0, 0.3)',
      white: '#FFFFFF',
      green: '#00E599',
      purple: '#E300BD',
      gray: {
        1: '#0D0D0D',
        2: '#1A1A1A',
        3: '#262626',
        4: '#333333',
        5: '#4D4D4D',
        6: '#666666',
        7: '#808080',
        8: '#999999',
        9: '#CCCCCC',
        10: '#E6E6E6',
      },
    }),
    backgroundImage: {
      'pink-yellow-gradient':
        'linear-gradient(257.22deg, #FFBB33 21.09%, #E300BD 55.18%, #FF006A 92.64%)',
      ...defaultTheme.backgroundImage,
    },
    screens: {
      '2xl': { max: '1919px' },
      xl: { max: '1380px' },
      lg: { max: '1279px' },
      md: { max: '1023px' },
      sm: { max: '767px' },
      xs: { max: '359px' },
    },
  },
  plugins: [require('tailwindcss-safe-area')],
};
