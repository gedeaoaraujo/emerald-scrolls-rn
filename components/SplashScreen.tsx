import { FontAwesome6 } from '@expo/vector-icons';
import { checkBiometry } from '../utils/biometry';
import { PasswordKeyboard } from './PasswordKeyboard';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { usePasswordViewModel } from '../viewmodels/PasswordViewModel';
import { useTheme } from '../theme/ThemeContext';
import { useTranslation } from 'react-i18next';

export const SplashScreen = ({ navigation }) => {
  const { 
    password,
    checkPassword,
    onChangePassword 
  } = usePasswordViewModel()
  
  const { theme } = useTheme()
  const { t } = useTranslation()

  const callBiometry = () => {
    checkBiometry(t, () => {
      navigation.replace('Home')
    })
  }

  const startChecking = () => {
    const ok = checkPassword()
    if (ok) {
      navigation.replace('Home')
    } else {
      alert(t('wrong.password'))
    }
  }

  const LogoFragment = () => (
    <View style={styles.logo}>
      <FontAwesome6 name='scroll' size={50} 
        color={theme.colors.textOnPrimary}/>
      <Text style={[styles.text, {
        color: theme.colors.textOnPrimary
      }]}>{t('app.name')}</Text>
    </View>
  )

  return (
    <View style={[styles.container, {
      backgroundColor: theme.colors.primary
    }]}>
      <LogoFragment />
      <PasswordKeyboard 
        password={password}
        onChangePassword={onChangePassword}
      />
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{ marginEnd: 40 }}
          onPress={callBiometry}>
          <FontAwesome6 name='fingerprint' size={50} 
            color={theme.colors.textOnPrimary}/>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={startChecking}>
          <FontAwesome6 name='circle-check' size={50} 
            color={theme.colors.textOnPrimary}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    padding: 10,
    fontSize: 30,
  }
})
