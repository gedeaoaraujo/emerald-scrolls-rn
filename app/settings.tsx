import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useTheme } from "../theme/ThemeContext"
import { LightTheme } from "../theme/LightTheme"
import { DarkTheme } from "../theme/DarkTheme"
import { RadioButton } from "../components/RadioButton"
import { useTranslation } from "react-i18next"
import { usePasswordViewModel } from "../viewmodels/PasswordViewModel"
import { generateCsvZipped, pickDocument } from "../utils/export-compact"
import { LanguagesModal } from "../components/LanguagesModal"
import PasswordDialog from "../components/PasswordDialog"
import { requestReadPermission, requestWritePermission } from "../utils/permissions"
import { useEffect, useState } from "react"
import { 
  AdEventType, InterstitialAd, TestIds, BannerAd, BannerAdSize
} from "react-native-google-mobile-ads"

const adBannerId = __DEV__ ? TestIds.BANNER : "ca-app-pub-1882283420515970/3105467416"
const adInterstitialId = __DEV__ ? TestIds.INTERSTITIAL : "ca-app-pub-1882283420515970/1792385746"

const interstitial = InterstitialAd.createForAdRequest(adInterstitialId, {
  requestNonPersonalizedAdsOnly: true
})

export default function SettingsScreen() {
  const { t } = useTranslation()
  const { theme, selectTheme } = useTheme()
  const { savePassword } = usePasswordViewModel()
  const [viewModal, setViewModal] = useState(false)
  const [viewPassword, setViewPassword] = useState(false)

  const onOkDialogPressed = (pass: string) => {
    setViewPassword(false)
    savePassword(pass)
  }

  const exportScrolls = async () => {
    const granted = await requestWritePermission()
    if (granted) await generateCsvZipped(t, () => {
      interstitial.show()
    })
  }

  const importScrolls = async () => {
    const granted = await requestReadPermission()
    if (granted) await pickDocument(t, ()=>{
      interstitial.show()
    })
  }

  const loadInterstitial = () => {
    const onCloseAd = interstitial.addAdEventListener(
      AdEventType.CLOSED, ()=>{ interstitial.load() }
    )
    interstitial.load()
    return () => { onCloseAd() }
  }

  useEffect(()=>{
    const onUnsub = loadInterstitial()
    return onUnsub
  }, [])

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
        <TouchableOpacity
          onPress={() => setViewModal(true)}>
          <Text style={[styles.text, {
            color: theme.colors.text
          }]}>
            {t('settings.lang.text')}
          </Text>
          <LanguagesModal 
            visibility={viewModal}
            closeModal={() => setViewModal(false)}/>
        </TouchableOpacity>
        <View style={styles.divider}/>
      </>

      <>
        <Text style={[styles.title, {
          color: theme.colors.title
        }]}>{t('settings.password')}</Text>
        <TouchableOpacity
          onPress={() => setViewPassword(true)}>
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
        visible={viewPassword}
        onCancel={setViewPassword}
        onOk={(pass) => onOkDialogPressed(pass)}
        />

      <View style={{ width: '100%', padding: 20 }}>
        <View style={{ height: 20 }}/>
        <BannerAd
          unitId={adBannerId}
          size={BannerAdSize.LARGE_BANNER}
          requestOptions={{
            networkExtras: {
              collapsible: 'top',
            },
          }}
        />
      </View>

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
