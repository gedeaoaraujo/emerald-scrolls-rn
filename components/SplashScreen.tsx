import { Colors } from '../colors';
import { FontAwesome6 } from '@expo/vector-icons';
import { checkBiometry } from '../utils/biometry';
import { PasswordKeyboard } from './PasswordKeyboard';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { usePasswordViewModel } from '../viewmodels/PasswordViewModel';

const LogoFragment = () => (
  <View style={styles.logo}>
    <FontAwesome6 name='scroll' size={50} color='white'/>
    <Text style={styles.text}>Emerald Scrolls</Text>
  </View>
)

export const SplashScreen = ({ navigation }) => {
  const { 
    password,
    checkPassword,
    onChangePassword 
  } = usePasswordViewModel()

  const callBiometry = () => {
    checkBiometry(() => {
      navigation.navigate('Home')
    })
  }

  const startChecking = () => {
    const ok = checkPassword()
    if (ok) {
      navigation.replace('Home')
    } else {
      alert('Senha incorreta.')
    }
  }
 
  return (
    <View style={styles.container}>
      <LogoFragment />
      <PasswordKeyboard 
        password={password}
        onChangePassword={onChangePassword}
      />
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{ marginEnd: 40 }}
          onPress={callBiometry}>
          <FontAwesome6 name='fingerprint' size={50} color='white'/>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={startChecking}>
          <FontAwesome6 name='circle-check' size={50} color='white'/>
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
    backgroundColor: Colors.primary
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    padding: 10,
    fontSize: 30,
    color: Colors.white,
  }
})