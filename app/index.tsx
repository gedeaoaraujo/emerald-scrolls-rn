import { View, Text, StyleSheet, Animated } from 'react-native'
import { FontAwesome6 } from '@expo/vector-icons'
import { useTheme } from '../theme/ThemeContext'
import { useTranslation } from 'react-i18next'
import { useEffect, useRef, useState } from 'react'
import { usePasswordViewModel } from '../viewmodels/PasswordViewModel'
import { useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function SplashScreen() {
  const { 
    checkPassword,
  } = usePasswordViewModel()

  const router = useRouter()
  const { theme } = useTheme()
  const { t } = useTranslation()

  const [dots, setDots] = useState('')
  const translateY = useRef(new Animated.Value(0)).current

  const startChecking = async () => {
    if (await checkPassword()) {
      router.replace('/HomeScreen')
    } else {
      router.replace('/PasswordScreen')
    }
  }

  useEffect(() => {
    const animacao = Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: -30,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    )

    animacao.start()

    const interval = setInterval(() => {
      setDots(prev => {
        if (prev.length >= 3) return ''
        return prev + '.'
      })
    }, 400)

    startChecking()

    return () => {
      animacao.stop()
      clearInterval(interval)
    }
  }, [translateY])

  return (
    <View style={[styles.container, {
      backgroundColor: theme.colors.primary
    }]}>
      <Animated.View style={{ transform: [{ translateY }] }}>
        <FontAwesome6 name='scroll' size={50} 
          color={theme.colors.textOnPrimary}
          style={{ marginBottom: 20 }}/>
      </Animated.View>

      <Text style={[styles.title, {
        color: theme.colors.textOnPrimary
      }]}>{t('app.name')}</Text>

      <View style={{ width: '60%', flexDirection: 'row' }}>
        <Text style={[styles.text, {
          color: theme.colors.textOnPrimary
        }]}>Loading configurations</Text>
        <Text style={[styles.text, {
          padding: 0,
          paddingTop: 10,
          color: theme.colors.textOnPrimary
        }]}>{dots}</Text>
      </View>
      <StatusBar style='light' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
  },
  text: {
    padding: 10,
    fontSize: 18,
    marginBottom: 200,
  },
})
