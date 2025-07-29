/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ['./App.tsx', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      // fontFamily: {
      //   playwriteLight: ['PlaywriteHU-Light'],
      //   playwriteRegular: ['PlaywriteHU-Regular'],
      //   playwriteBold: ['PlaywriteHU-Bold'],
      //   montez: ['Montez'],
      // },
    },
  },
  plugins: [],
};
