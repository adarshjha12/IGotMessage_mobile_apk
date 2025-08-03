import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const Loader = () => {
  return (
    <View className="items-center justify-center  px-4">
      <ActivityIndicator size="large" color="white" /> 
    </View>
  );
};

export default Loader;
