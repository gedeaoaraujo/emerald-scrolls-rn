import { StyleSheet, Text, View } from "react-native"
import { useTheme } from "../theme/ThemeContext"
import { RadioButton } from "./RadioButton"
import { useState } from "react"

export const SettingsScreen = () => {
  const { theme } = useTheme()
  const [themeSelected, setThemeSelected] = useState(1)
  const [languageSelected, setLanguageSelected] = useState(1)

  return (
    <View style={[styles.container, {
      backgroundColor: theme.colors.background
    }]}>
      <>
        <Text style={[styles.title, {
          color: theme.colors.title
        }]}>Theme</Text>
        <RadioButton
          label='Light'
          style={[styles.text, {
            color: theme.colors.text
          }]}
          onPress={() => setThemeSelected(1)}
          selected={themeSelected === 1}
          />
        <RadioButton
          label='Dark'
          style={[styles.text, {
            color: theme.colors.text
          }]}
          onPress={() => setThemeSelected(2)}
          selected={themeSelected === 2}
          />
        <View style={styles.divider}/>
      </>

      <>
        <Text style={[styles.title, {
          color: theme.colors.title
        }]}>Language</Text>
        <RadioButton
          label='English'
          style={[styles.text, {
            color: theme.colors.text
          }]}
          onPress={() => setLanguageSelected(1)}
          selected={languageSelected === 1}
          />
        <RadioButton
          label='Portuguese (Brazilian)'
          style={[styles.text, {
            color: theme.colors.text
          }]}
          onPress={() => setLanguageSelected(2)}
          selected={languageSelected === 2}
          />
      </>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
    paddingVertical: 4,
  },
  divider: {
    height: 0.5,
    marginVertical: 8,
    backgroundColor: 'gray' 
  }
})