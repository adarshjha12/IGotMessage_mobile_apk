import React from 'react';
import { View, Text, TouchableOpacity, Image, useColorScheme, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = () => {

    const isDark = useColorScheme() === 'dark';

  return (
    <View className={`flex-1  px-6 justify-evenly items-center ${isDark? 'bg-black' : 'bg-white'}`}>
        <StatusBar backgroundColor={'#007bff'}>
            
        </StatusBar>
      <View className="items-center flex-1 justify-center gap-6 space-y-6">
        {/* Logo / Illustration (optional) */}
       
        {/* Headline */}
        <Text style={{fontFamily: 'Audiowide-Regular', fontWeight: '400'}} className={`text-[40px] font-bold text-gray-900 mb-6 ${isDark? 'text-white' : 'text-black'}`}>Welcome to,</Text>
         <Image
          source={require('../../assets/images/logo.png')} 
          className="border border-gray-400 rounded-[40px] mb-0 w-44 h-44"
          
        />
        <Text style={{fontFamily: 'Montez-Regular', fontWeight: '400'}}  className={`text-[40px] font-bold text-black ${isDark? 'text-white' : 'text-black'}`}>
          IGotMessage
        </Text>

        {/* Buttons */}
        <View className="mt-10 w-full space-y-4">
          {/* Continue with Google */}
          <TouchableOpacity className="flex-row items-center justify-center bg-white border border-gray-500 px-12 py-3 rounded-xl shadow-md mb-6">
            <Image
              source={require('../../assets/images/google.png')}
              className="w-10 h-10 mr-3"
            />
            <Text style={{fontFamily: 'Exo2-ExtraBold', fontWeight: '100'}} className="text-xl tracking-widest font-medium text-gray-700">
              Continue with Google
            </Text>
          </TouchableOpacity>

          {/* Continue with Email */}
          <TouchableOpacity className="flex-row items-center justify-center bg-blue-600 px-16 py-3 rounded-xl">
            <Image
              source={require('../../assets/images/email.png')}
              className="w-8 h-6 mr-4"
            />
            <Text style={{fontFamily: 'Exo2-ExtraBold', fontWeight: '100'}} className="text-xl tracking-widest font-medium text-white">
              Continue with Email
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
