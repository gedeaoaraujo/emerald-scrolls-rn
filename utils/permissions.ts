import { Platform } from 'react-native';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const ANDROID = 'android'

export async function requestReadPermission(): Promise<boolean> {
  if (Platform.OS === ANDROID) {
    const readPermission = Platform.Version >= 30 
      ? RESULTS.GRANTED 
      : await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);

    return readPermission === RESULTS.GRANTED
  }
  return true
}

export async function requestWritePermission(): Promise<boolean> {
  if (Platform.OS === ANDROID) {
    const writePermission = Platform.Version >= 30 ? RESULTS.GRANTED 
      : await request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);

    return writePermission === RESULTS.GRANTED
  }
  return true
}
