import { useLocalization } from "../contexts/LocalizationContext"
import { StyleSheet, Text, View } from "react-native"
import { useTheme } from "../theme/ThemeContext"
import { LightTheme } from "../theme/LightTheme"
import { DarkTheme } from "../theme/DarkTheme"
import { RadioButton } from "./RadioButton"

export const SettingsScreen = () => {
  const { theme, selectTheme } = useTheme()
  const { language, selectLang } = useLocalization()

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
          onPress={() => selectTheme(LightTheme)}
          selected={theme === LightTheme}
          />
        <RadioButton
          label='Dark'
          style={[styles.text, {
            color: theme.colors.text
          }]}
          onPress={() => selectTheme(DarkTheme)}
          selected={theme === DarkTheme}
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
          onPress={() => selectLang('enUS')}
          selected={language === 'enUS'}
          />
        <RadioButton
          label='Portuguese (Brazilian)'
          style={[styles.text, {
            color: theme.colors.text
          }]}
          onPress={() => selectLang('ptBR')}
          selected={language === 'ptBR'}
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