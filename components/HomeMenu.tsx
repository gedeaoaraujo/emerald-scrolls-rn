import { StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome6 } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeContext';
import { useRouter } from "expo-router";
import { LightTheme } from "../theme/LightTheme";
import { ThemeType } from "../theme/ThemeType";
import { useEffect, useState } from 'react';

const icon = (theme: ThemeType|string) => (
  theme === LightTheme ? 'moon' : 'sun'
)

const HomeMenu = () => {
  const router = useRouter()
  const { theme, toggleTheme } = useTheme()
  const [themeIcon, setThemeIcon] = useState(icon(theme))

  useEffect(() => {
    setThemeIcon(icon(theme))
  }, [theme])

  const onPress = () => {
    toggleTheme()
  }

  const goToSettings = () => {
    router.navigate('/settings')
  }

  return (
    <>
      <TouchableOpacity
        style={[styles.option, {
          paddingHorizontal: 15
        }]}
        onPress={onPress}>
        <FontAwesome6 name={themeIcon} size={20}
          color={theme.colors.textOnPrimary} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.option, {
          paddingHorizontal: 10
        }]}
        onPress={goToSettings}>
        <FontAwesome6 name='ellipsis-vertical' size={20}
          color={theme.colors.textOnPrimary} />
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  option: {}
})

export default HomeMenu;