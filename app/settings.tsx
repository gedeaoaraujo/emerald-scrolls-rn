import { useLocalization } from "../contexts/LocalizationContext"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useTheme } from "../theme/ThemeContext"
import { LightTheme } from "../theme/LightTheme"
import { DarkTheme } from "../theme/DarkTheme"
import { RadioButton } from "../components/RadioButton"
import { useTranslation } from "react-i18next"
import { usePasswordViewModel } from "../viewmodels/PasswordViewModel"
import { generateCsvZipped, pickDocument } from "../utils/export-compact"
import PasswordDialog from "../components/PasswordDialog"
import { useState } from "react"

export default function SettingsScreen() {
  const { t } = useTranslation()
  const { theme, selectTheme } = useTheme()
  const { savePassword } = usePasswordViewModel()
  const { language, selectLang } = useLocalization()
  
  const [visible, setVisibility] = useState(false)

  const onOkDialogPressed = (pass: string) => {
    setVisibility(false)
    savePassword(pass)
  }

  const exportScrolls = async () => {
    await generateCsvZipped(t)
  }

  const importScrolls = async () => {
    await pickDocument(t)
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
          label={t('settings.lang.german')}
          style={[styles.text, {
            color: theme.colors.text
          }]}
          onPress={() => selectLang('deDE')}
          selected={language === 'deDE'}
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
        <View style={styles.divider}/>
      </>
      <>
        <Text style={[styles.title, {
          color: theme.colors.title
        }]}>{t('backup.title')}</Text>
        <TouchableOpacity
          onPress={() => exportScrolls()}>
          <Text style={[styles.text, {
            color: theme.colors.text
          }]}>{t('backup.export')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => importScrolls()}>
          <Text style={[styles.text, {
            color: theme.colors.text
          }]}>{t('backup.import')}</Text>
        </TouchableOpacity>
      </>
      <PasswordDialog 
        visible={visible}
        onCancel={setVisibility}
        onOk={(pass) => onOkDialogPressed(pass)}
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
