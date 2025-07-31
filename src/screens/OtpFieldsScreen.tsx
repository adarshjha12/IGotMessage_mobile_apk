import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../types/navigation';

type ScreenBRouteProp = RouteProp<RootStackParamList, 'OtpFieldsScreen'>;


export default function OtpFieldsScreen() {

    const route = useRoute<ScreenBRouteProp>()
    const {email} = route.params
  return (
    <View>
      <Text>{email}</Text>
    </View>
  );
}
