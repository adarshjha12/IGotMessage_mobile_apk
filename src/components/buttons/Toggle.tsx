import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Ripple from "react-native-material-ripple";


<View>
  <Text>switch to DARK</Text>
  <TouchableOpacity
    activeOpacity={0.9}
    // onPress={onToggle}
    className={`w-14 h-8 rounded-full p-1 transition-colors duration-300 `}
  >
    <View
      className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300`}
    />
  </TouchableOpacity>
  <Ripple
    onPress={() => console.log('Pressed!')}
    rippleColor="#94a3b8" // Tailwind's slate-400
    rippleContainerBorderRadius={12}
    style={{
      padding: 16,
      borderRadius: 12,
      backgroundColor: 'white',
    }}
  >
    <Text style={{ color: '#000' }}>Ripple Button</Text>
  </Ripple>
</View>;
