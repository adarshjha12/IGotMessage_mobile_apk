module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
    // other plugins...
    'react-native-reanimated/plugin', // <- this must be last
  ],
};
