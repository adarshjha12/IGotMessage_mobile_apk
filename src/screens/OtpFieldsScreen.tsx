import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Image,
  Linking,
  Alert,
} from 'react-native';
import { useColorScheme } from 'nativewind';
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CaretLeftIcon,
} from 'phosphor-react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Ripple from 'react-native-material-ripple';
import Loader from '../components/Loader';
import cookie from '@react-native-cookies/cookies';
import SendIntentAndroid from 'react-native-send-intent';

// const checkCookies = async () => {
//   const cookies = await cookie.get('https://your-api.com');
//   console.log(cookies);
// };

interface functionProps {
  email: string;
}

const OtpScreen = () => {
  const { colorScheme } = useColorScheme();
  const params = useRoute().params as { email: string };
  const navigation = useNavigation();

  const [resendTimer, setResendTimer] = useState(30);
  const [loading, setLoading] = useState(false);
  const [inputError, setInputError] = useState('');
  const inputRefs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];

  const [otpContainer, setOtpContainer] = useState<string[]>(['', '', '', '']);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setResendTimer(prev => prev - 1);
    }, 1000);

    if (resendTimer === 0) {
      clearTimeout(timeout);
    }
  }, [resendTimer]);

  useEffect(() => {
    const otp = otpContainer.join('');
    if (otp.length < 4) {
      setInputError('');
    }
  }, [otpContainer]);

  function handleSubmit() {
    const otp = otpContainer.join('');
    if (otp.length < 4) {
      setInputError('Please enter OTP');
      return;
    }
  }

  const openGmailApp = async () => {
  const success = await SendIntentAndroid.openApp('com.google.android.gm', {});
  if (!success) {
    console.warn('Gmail app not found! Opening Play Store...');
    Linking.openURL('https://play.google.com/store/apps/details?id=com.google.android.gm');
  }
};

  function handleInputChange(text: string, i: number) {
    if (text && i < 3) {
      inputRefs[i + 1].current?.focus();
    } else if (text && i === 3) {
      inputRefs[i].current?.blur();
    }
  }

  function handleMoveBack(i: number) {
    inputRefs[i].current?.clear();
    otpContainer[i] = '';

    if (i > 0) {
      inputRefs[i - 1].current?.focus();
    }
  }

  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black relative px-6">
      <Pressable
        className=" absolute active:bg-white/20 p-2 rounded-full bg-black top-6 left-2"
        onPress={() => navigation.goBack()}
        android_ripple={{ color: '#fff' }}
      >
        <CaretLeftIcon weight="bold" color="white" size={34} />
      </Pressable>

      <Ripple
        onPress={openGmailApp}
        rippleColor="#fff"
        rippleOpacity={0.3}
        rippleContainerBorderRadius={999}
        className="my-6 px-6 py-4 rounded-2xl shadow-lg shadow-blue-400/30 flex-row items-center justify-center gap-3"
      >
        <Image
          source={require('../../assets/images/email.png')}
          style={{ width: 34, height: 34 }}
          resizeMode="contain"
        />

        <Text className="text-gray-900 dark:text-gray-100 font-semibold text-2xl">Open Gmail</Text>

        <ArrowUpRightIcon size={20} color="white" weight="bold" />
      </Ripple>

      <Text className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
        Enter OTP
      </Text>

      <Text className="text-md text-gray-500 dark:text-gray-400 text-center mb-8">
        We've sent a 4-digit code to {params.email}
      </Text>

      {/* OTP Input Boxes */}
      <View className="flex-row gap-4 mb-6">
        {inputRefs.map((ref, index) => (
          <TextInput
            key={index}
            ref={ref}
            className="w-14 h-14 rounded-xl border-2 text-center text-xl font-semibold text-gray-900 dark:text-white border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
            maxLength={1}
            autoFocus={index === 0}
            keyboardType="numeric"
            onChangeText={text => {
              const newOtpContainer = [...otpContainer];
              newOtpContainer[index] = text;
              setOtpContainer(newOtpContainer);
              handleInputChange(text, index);
            }}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === 'Backspace') {
                handleMoveBack(index);
              }
            }}
            placeholder="-"
            placeholderTextColor={colorScheme === 'dark' ? '#777' : '#ccc'}
          />
        ))}
      </View>

      {/* Submit Button */}
      <Ripple
        onPress={handleSubmit}
        rippleColor="#000"
        rippleOpacity={0.3}
        rippleContainerBorderRadius={16}
        className="w-full bg-darkButton py-3 rounded-xl flex-row gap-2 items-center justify-center mb-4 "
      >
        {loading ? (
          <Loader />
        ) : (
          <View className="flex-row items-center gap-4">
            <Text className="text-white font-semibold text-xl">Submit</Text>
            <ArrowRightIcon size={24} color="white" weight="bold" />
          </View>
        )}
      </Ripple>

      <Text
        className={`text-red-600 ${
          inputError === '' && 'hidden'
        } font-semibold text-xl`}
      >
        {inputError}
      </Text>

      {/* Resend with timer */}
      <View className="flex-row items-center gap-3">
        <Text className="text-gray-500 text-lg dark:text-gray-400">
          Didn't receive code?
        </Text>
        <TouchableOpacity activeOpacity={0.6}>
          <Text className="text-green-500 text-xl  font-medium">
            Resend{' '}
            {resendTimer > 0 && (
              <Text className="text-white">00:{resendTimer}</Text>
            )}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OtpScreen;
