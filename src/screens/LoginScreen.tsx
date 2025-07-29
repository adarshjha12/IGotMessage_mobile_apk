import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = () => {
  return (
    <View className="flex-1 bg-white px-6 justify-evenly items-center">
      <View className="items-center flex-1 justify-center gap-6 space-y-6">
        {/* Logo / Illustration (optional) */}
       

        {/* Headline */}
        <Text style={{fontFamily: 'Audiowide_Regular', fontWeight: '400'}} className="text-[50px] font-bold text-gray-900">Welcome to</Text>
         <Image
          source={require('../../assets/images/logo.png')} 
          className="border border-gray-400 rounded-[40px] mb-0 w-44 h-44"
          
        />
        <Text style={{fontFamily: 'DancingScript-Bold', fontWeight: '400'}} className="text-[40px] font-extrabold text-black ">
          IGotMessage
        </Text>

        {/* Buttons */}
        <View className="mt-10 w-full space-y-4">
          {/* Continue with Google */}
          <TouchableOpacity className="flex-row items-center justify-center bg-white border border-gray-300 px-16 py-3 rounded-xl shadow-md mb-6">
            <Image
              source={require('../../assets/images/google.png')}
              className="w-8 h-8 mr-3"
            />
            <Text style={{fontFamily: 'Audiowide_Regular', fontWeight: '400'}} className="text-xl tracking-widest font-medium text-gray-700">
              Continue with Google
            </Text>
          </TouchableOpacity>

          {/* Continue with Email */}
          <TouchableOpacity className="flex-row items-center justify-center bg-blue-600 px-16 py-3 rounded-xl">
            <Image
              source={require('../../assets/images/email.png')}
              className="w-6 h-6 mr-4"
            />
            <Text style={{fontFamily: 'Audiowide_Regular', fontWeight: '400'}} className="text-xl tracking-widest font-medium text-white">
              Continue with Email
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
