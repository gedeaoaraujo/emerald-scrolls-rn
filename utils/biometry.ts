import * as LocalAuthentication from 'expo-local-authentication';

export const checkBiometry = async (callback: () => void) => {
  const compatible = await LocalAuthentication.hasHardwareAsync();
  if (compatible) {
    const biometricRecords = await LocalAuthentication.isEnrolledAsync();
    if (!biometricRecords) {
      alert('Nenhuma biometria cadastrada.');
    } else {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Autenticar com biometria',
        fallbackLabel: 'Usar senha',
      })
      if (result.success) {
        callback()
      } else {
        alert('Autenticação falhou')
        checkBiometry(callback)
      }
    }
  } else {
    alert('Seu dispositivo não suporta autenticação biométrica.');
  }
}