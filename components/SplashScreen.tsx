import { Colors } from '../colors';
import { FontAwesome6 } from '@expo/vector-icons';
import { checkBiometry } from '../utils/biometry';
import { PasswordKeyboard } from './PasswordKeyboard';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LogoFragment = () => (
  <View style={styles.logo}>
    <FontAwesome6 name='scroll' size={50} color='white'/>
    <Text style={styles.text}>Emerald Scrolls</Text>
  </View>
)

export const SplashScreen = ({ navigation }) => {
  const callBiometry = () => {
    checkBiometry(() => {
      navigation.navigate('Home')
    })
  }
 
  return (
    <View style={styles.container}>
      <LogoFragment />
      <PasswordKeyboard />
      <TouchableOpacity
        onPress={callBiometry}>
        <FontAwesome6 name='fingerprint' size={50} color='white'/>
      </TouchableOpacity>
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
    paddingBottom: 30,
    color: Colors.white,
  }
})