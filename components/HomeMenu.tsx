import { StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome6 } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeContext';
import { useState } from 'react';
import { useRouter } from "expo-router";

const HomeMenu = () => {
  const router = useRouter()
  const { theme, toggleTheme } = useTheme()
  const [themeIcon, setThemeIcon] = useState('moon')

  const onPress = () => {
    setThemeIcon(themeIcon === 'moon' ? 'sun' : 'moon')
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