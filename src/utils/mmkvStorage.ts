import { MMKV } from 'react-native-mmkv';

const storage = new MMKV({
  id: 'secure-storage',
});

export default storage;
