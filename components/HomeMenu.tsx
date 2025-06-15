import { FontAwesome6 } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from '../theme/ThemeContext';
import { useState } from 'react';

export const HomeMenu = () => {
  const { theme, toggleTheme } = useTheme()
  const [icon, setIcon] = useState('moon')

  const onPress = () => {
    setIcon(icon === 'moon' ? 'sun' : 'moon')
    toggleTheme()
  }

  return (
    <TouchableOpacity
      style={styles.option}
      onPress={onPress}>
      <FontAwesome6 name={icon} size={20}
        color={theme.colors.textOnPrimary} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  option: {
    paddingHorizontal: 20
  }
})