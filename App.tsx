import 'react-native-reanimated';
import React from 'react';
import './global.css';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

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
import ThemeWrapper from './src/components/theme/ThemeWrapper';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import LoginScreen from './src/screens/LoginScreen';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import DashScreen from './src/screens/EmailInputScreen';
import EmailInputScreen from './src/screens/EmailInputScreen';
import OtpFieldsScreen from './src/screens/OtpFieldsScreen';

const Stack = createNativeStackNavigator();

export default function FullScreenPage() {
  return (
    <Provider store={store}>
      <ThemeWrapper>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{ headerShown: false }}
              initialRouteName="LoginScreen"
            >
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen
                name="EmailInputScreen"
                component={EmailInputScreen}
                options={{ animation: 'none' }}
              />
              <Stack.Screen name="OtpFieldsScreen" component={OtpFieldsScreen} options={{ animation: 'none' }}/>

              <Stack.Screen
                name="DashScreen"
                component={DashScreen}
                options={{
                  headerShown: true,
                  animation: 'none',
                  title: 'Dashboard',
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </GestureHandlerRootView>
      </ThemeWrapper>
    </Provider>
  );
}

const style = StyleSheet.create({
  color: {
    color: '#000',
  },
});
