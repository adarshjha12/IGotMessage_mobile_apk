import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useColorScheme } from 'nativewind';
import {
  ArrowRightIcon,
  CaretLeftIcon,
  LogIcon,
  UserCircleIcon,
} from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import Ripple from 'react-native-material-ripple';

export default function EmailInputScreen() {
  const [email, setEmail] = useState('');
  const { colorScheme } = useColorScheme();

  type NavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'EmailInputScreen'
  >;

  const navigation = useNavigation<NavigationProp>();

  const handleNext = () => {
    navigation.navigate('OtpFieldsScreen', { email });
  };

  return (
    <SafeAreaView className="flex-1 gap- bg-white dark:bg-black px-2 justify-center relative pb-20">
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <Pressable
        className=" absolute active:bg-white/20 p-2 rounded-full bg-black top-6 left-2"
        onPress={() => navigation.goBack()}
        android_ripple={{ color: '#fff' }}
      >
        <CaretLeftIcon weight="bold" color="white" size={34} />
      </Pressable>
      {/* Title */}
      <View className="mb-10 py-2 px-2 items-center ">
        <Text
          className={` text-[50px] text-black  dark:text-white pb-6 font-montez`}
        >
          IGotMessage
        </Text>
        <Text
          className={`px-2 text-[10px] mb-6 text-black dark:text-white font-exo2Medium tracking-[7px] py-2   border-gray-400 `}
        >
          YOUR STORY BEGINS HERE
        </Text>
      </View>

      <View className="flex-row items-center justify-center gap-4 pb-16">
        <View className="pt-2 ">
          <UserCircleIcon weight="light" color="white" size={34} />
        </View>
        <Text className="text-3xl font-exo2SemiBold text-gray-600 dark:text-gray-300">
          Login to continue
        </Text>
      </View>

      {/* Email Input */}
      <View className="mb-6 px-2">
        <Text className="text-md text-gray-700 dark:text-gray-300 mb-4">
          Email Address
        </Text>
        <TextInput
          placeholder="you@example.com"
          placeholderTextColor="#9ca3af"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
        />
      </View>

      {/* Get OTP Button */}
      <Ripple
        rippleColor="#000"
        rippleOpacity={0.3}
        rippleContainerBorderRadius={16}
        onPress={() => handleNext()}
        className="w-full flex-row items-center justify-center gap-4 py-3 bg-darkButton rounded-xl px-4 shadow-md active:opacity-80"
      >
        <Text className="text-center text-white text-lg  font-exo2SemiBold tracking-wider">
          Get OTP
        </Text>
        <ArrowRightIcon color="white" size={24} weight="bold" />
      </Ripple>
    </SafeAreaView>
  );
}
