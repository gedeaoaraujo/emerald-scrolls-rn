import { useLocalization } from "../contexts/LocalizationContext"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useTheme } from "../theme/ThemeContext"
import { LightTheme } from "../theme/LightTheme"
import { DarkTheme } from "../theme/DarkTheme"
import { RadioButton } from "./RadioButton"
import { useTranslation } from "react-i18next"
import { usePasswordViewModel } from "../viewmodels/PasswordViewModel"
import { PasswordDialog } from "./PasswordDialog"
import { useState } from "react"

export const SettingsScreen = () => {
  const { t } = useTranslation()
  const { theme, selectTheme } = useTheme()
  const { savePassword } = usePasswordViewModel()
  const { language, selectLang } = useLocalization()
  
  const [visible, setVisibility] = useState(false)

  const onOkDialogPressed = () => {
    setVisibility(false)
    savePassword('123')
  }

  return (
    <View style={[styles.container, {
      backgroundColor: theme.colors.background
    }]}>
      <>
        <Text style={[styles.title, {
          color: theme.colors.title
        }]}>{t('settings.theme')}</Text>
        <RadioButton
          label={t('settings.theme.light')}
          style={[styles.text, {
            color: theme.colors.text
          }]}
          onPress={() => selectTheme(LightTheme)}
          selected={theme === LightTheme}
          />
        <RadioButton
          label={t('settings.theme.dark')}
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
        }]}>{t('settings.lang')}</Text>
        <RadioButton
          label={t('settings.lang.english')}
          style={[styles.text, {
            color: theme.colors.text
          }]}
          onPress={() => selectLang('enUS')}
          selected={language === 'enUS'}
          />
        <RadioButton
          label={t('settings.lang.portuguese')}
          style={[styles.text, {
            color: theme.colors.text
          }]}
          onPress={() => selectLang('ptBR')}
          selected={language === 'ptBR'}
          />
        <View style={styles.divider}/>
      </>
      <>
        <Text style={[styles.title, {
          color: theme.colors.title
        }]}>{t('settings.password')}</Text>
        <TouchableOpacity
          onPress={() => setVisibility(true)}>
          <Text style={[styles.text, {
            color: theme.colors.text
          }]}>{t('settings.password.modify')}</Text>
        </TouchableOpacity>
      </>
      <PasswordDialog 
        visible={visible}
        onCancel={setVisibility}
        onOk={() => onOkDialogPressed()}
        />
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