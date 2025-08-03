import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  useColorScheme,
  StatusBar,
  Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setTheme, toggleTheme } from '../slices/authAndTheme';
import storage from '../utils/mmkvStorage';
import { useColorScheme as useNWColorScheme } from 'nativewind';
import { Pressable } from 'react-native';
import Ripple from 'react-native-material-ripple';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ArrowRightIcon } from 'phosphor-react-native';

// import Animated from 'react-native-reanimated';
// import { BounceIn, BounceOut } from 'react-native-reanimated';

const LoginScreen = () => {
  const { colorScheme, setColorScheme } = useNWColorScheme();
  const theme = useSelector((state: RootState) => state.authAndTheme.theme);
  const dispatch = useDispatch();

  const onToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setColorScheme(newTheme);
    dispatch(setTheme(newTheme));
    storage.set('theme', newTheme);
  };

  type NavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'LoginScreen'
  >;

  const navigation = useNavigation<NavigationProp>();

  return (
    <View
      className={`flex-1  px-2 justify-evenly items-center bg-white dark:bg-black`}
    >
      {/* <StatusBar backgroundColor={'#0378ff'}></StatusBar> */}
      <View className="items-center  flex-1 justify-center gap-6 space-y-6">
        {/* Logo / Illustration (optional) */}

        {/* Headline */}
        <Text
          style={{ fontFamily: 'Audiowide-Regular', fontWeight: '400' }}
          className={`text-[40px] font-bold text-gray-900 mb-6 dark:text-white animate-pulse`}
        >
          Welcome to,
        </Text>
        <Image
          source={require('../../assets/images/logo.png')}
          className="border border-gray-400 rounded-[15px] mb-0 w-44 h-44"
        />
        <Text
          className={` text-[40px] text-black  dark:text-white font-montez`}
        >
          IGotMessage
        </Text>
        <Text
          className={`px-2 text-[10px] mb-6 text-black dark:text-white font-exo2Medium tracking-[7px] py-2  `}
        >
          YOUR STORY BEGINS HERE
        </Text>

        {/* Buttons */}
        <View className="mt-10 w-full space-y-4">
          {/* Continue with Google */}

          <Ripple
            onPress={() => console.log('Google Sign-In')}
            rippleColor="#000"
            rippleOpacity={0.3}
            rippleContainerBorderRadius={16}
            className="flex-row items-center justify-center bg-white border border-gray-500 gap-4 px-6 py-3 rounded-xl shadow-md mb-6"
          >
            <Image
              source={require('../../assets/images/google.png')}
              className="w-10 h-10"
            />
            <Text className="text-xl font-exo2SemiBold tracking-widest font-medium text-black">
              Continue with Google
            </Text>
            <ArrowRightIcon color="black" size={24} weight="bold" />
          </Ripple>

          <Ripple
            onPress={() => navigation.navigate('EmailInputScreen')}
            rippleColor="#fff"
            rippleOpacity={0.3}
            rippleContainerBorderRadius={16}
            className="flex-row items-center justify-center bg- gap-4 px-6 py-3 rounded-xl"
          >
            <Image
              source={require('../../assets/images/email.png')}
              className="w-8 h-6 "
            />
            <Text className="text-xl font-exo2SemiBold tracking-widest font-medium text-white">
              Continue with Email
            </Text>
            <ArrowRightIcon color="white" size={24} weight="bold" />
          </Ripple>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
