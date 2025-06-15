import * as LocalAuthentication from 'expo-local-authentication';

export const checkBiometry = async (t: any, callback: () => void) => {
  const compatible = await LocalAuthentication.hasHardwareAsync();
  if (!compatible){
    alert(t('nobiometry.support'))
    return
  }

  const biometricRecords = await LocalAuthentication.isEnrolledAsync();
  if (!biometricRecords) {
    alert(t('nobiometry'))
    return
  }

  const result = await LocalAuthentication.authenticateAsync({
    promptMessage: t('authenticate'),
    fallbackLabel: t('use.password'),
  })

  if (result.success) {
    callback()
  }
}
