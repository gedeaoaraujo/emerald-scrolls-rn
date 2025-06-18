import { LocalizationContext } from "../contexts/LocalizationContext";
import { StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome6 } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeContext';
import { useContext, useState } from 'react';

export const HomeMenu = () => {
  const { theme, toggleTheme } = useTheme()
  const [themeIcon, setThemeIcon] = useState('moon')
  const { toggleLang } = useContext(LocalizationContext)

  const onPress = () => {
    setThemeIcon(themeIcon === 'moon' ? 'sun' : 'moon')
    toggleTheme()
  }

  return (
    <>
      <TouchableOpacity
        style={styles.option}
        onPress={toggleLang}>
        <FontAwesome6 name='closed-captioning' size={20}
          color={theme.colors.textOnPrimary} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.option}
        onPress={onPress}>
        <FontAwesome6 name={themeIcon} size={20}
          color={theme.colors.textOnPrimary} />
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  option: {
    marginRight: 20
  }
})