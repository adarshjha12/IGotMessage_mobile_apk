import React from 'react';
import { Image, Text, ViewStyle } from 'react-native';
import Ripple from 'react-native-material-ripple';

type RippleButtonProps = {
  text: string;
  icon?: any; // require(...) image
  onPress: () => void;
  className?: string;
  rippleColor?: string;
  textColor?: string;
  fontFamily?: string;
  iconSize?: { width: number; height: number };
  iconMargin?: string;
  borderRadius?: number;
};

const RippleButton: React.FC<RippleButtonProps> = ({
  text,
  icon,
  onPress,
  className = '',
  rippleColor = '#e5e7eb', // default: gray-200
  textColor = 'text-white',
  fontFamily = 'Exo2-ExtraBold',
  iconSize = { width: 24, height: 24 },
  iconMargin = 'mr-3',
  borderRadius = 16,
}) => {
  return (
    <Ripple
      onPress={onPress}
      rippleColor={rippleColor}
      rippleContainerBorderRadius={borderRadius}
      className={`
        "flex-row items-center justify-center py-3 px-6 rounded-xl"${className}`}
    >
      {icon && (
        <Image
          source={icon}
          className={`${iconMargin}`}
          style={{ width: iconSize.width, height: iconSize.height }}
        />
      )}
      <Text
        style={{
          fontFamily,
          fontWeight: '100',
        }}
        className={`text-xl tracking-widest font-medium ${textColor}`}
      >
        {text}
      </Text>
    </Ripple>
  );
};

export default RippleButton;
