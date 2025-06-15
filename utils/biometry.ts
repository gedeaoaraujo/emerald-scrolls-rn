import { useTranslation } from 'react-i18next';
import * as LocalAuthentication from 'expo-local-authentication';

export const checkBiometry = async (callback: () => void) => {
  const { t } = useTranslation()
  const compatible = await LocalAuthentication.hasHardwareAsync();

  if (compatible) {
    const biometricRecords = await LocalAuthentication.isEnrolledAsync();
    if (!biometricRecords) {
      alert(t('nobiometry'))
    } else {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: t('authenticate'),
        fallbackLabel: t('use.password'),
      })
      if (result.success) {
        callback()
      } else {
        alert(t('authentication.failed'))
        checkBiometry(callback)
      }
    }
  } else {
    alert(t('nobiometry.support'))
  }
}
