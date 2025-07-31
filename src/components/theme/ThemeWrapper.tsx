import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View } from 'react-native';
import { RootState } from '../../store/store';
import { setTheme } from '../../slices/authAndTheme';
import storage from '../../utils/mmkvStorage';
import { useColorScheme as useNWColorScheme } from 'nativewind';

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { colorScheme, setColorScheme } = useNWColorScheme();

  useEffect(() => {
    const savedTheme = storage.getString('theme');
    const nwTheme : "light" | "dark" | "system" = savedTheme as "light" | "dark" | "system";
    if (savedTheme) {
      dispatch(setTheme(savedTheme));
      setColorScheme(nwTheme);
    }
  }, []);

  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.authAndTheme.theme);

  return (
    <View className='flex-1'>
      {children}
    </View>
  );
}
