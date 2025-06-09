import { Colors } from '../colors';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { checkBiometry } from '../utils/biometry';
import { useEffect } from 'react';
import { PasswordKeyboard } from './PasswordKeyboard';

export const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    checkBiometry(() => {
      navigation.navigate('Home')
    })
  }, [])

  return (
    <View style={styles.container}>
      <FontAwesome6 name='scroll' size={50} color='white'/>
      <Text style={styles.text}>Emerald Scrolls</Text>
      <PasswordKeyboard />
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
  text: {
    padding: 10,
    fontSize: 30,
    paddingBottom: 30,
    color: Colors.white,
  }
})