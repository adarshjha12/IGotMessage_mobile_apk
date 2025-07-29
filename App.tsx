import { HourglassMediumIcon, HouseIcon } from 'phosphor-react-native';
import React from 'react';
import './global.css';

import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
  TouchableOpacity,
  SafeAreaView,
  Touchable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

// Wrap LinearGradient with NativeWind support

export default function FullScreenPage() {
  return (
    <View className="flex-1">
      <LinearGradient
        className="flex-1  justify-center items-center"
        colors={['#025bf4', '#0802b8']}
      >
        <StatusBar translucent backgroundColor={'transparent'}></StatusBar>
        <View className="bg-red-500 ">
          <Text style={{fontFamily: 'Montez-Regular', fontSize: 50, color: '#fff', fontWeight: '600'}} className="text-white text-3xl font-extrabold ">
            hello world
          </Text>
          <Text style={{fontFamily: 'PlaywriteHU-Light', fontSize: 50, color: '#fff', fontWeight: '500'}} className="text-white  text-3xl font-extrabold ">
            IGotMessage App
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const style = StyleSheet.create({
  color: {
    color: '#000',
  },
});
