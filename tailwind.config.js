/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        playwriteLight: ['PlaywriteHU-Light'],
        montez: ['Montez-Regular', 'cursive'],
        exo2ExtraBold: ['Exo2-ExtraBold'],
        exo2SemiBold: ['Exo2-SemiBold'],
        exo2Medium: ['Exo2-Medium'],
        audiowide: ['Audiowide-Regular'],
      },
      colors: {
        bg: {
          light: '#fff',
          DEFAULT: '#219ebc',
          dark: '#000',
        },
        fg: {
          light: '#000',
          DEFAULT: '#219ebc',
          dark: '#fff',
        },
        secondary: '#ffb703',
        danger: '#fb8500',
        darkButton: '#0378ff',
      },
    },
    plugins: [],
  },
};
