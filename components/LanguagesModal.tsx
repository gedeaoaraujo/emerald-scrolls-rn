import { RadioButton } from './RadioButton';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../theme/ThemeContext';
import { Modal, StyleSheet, View, Text } from 'react-native';
import { useLocalization } from '../contexts/LocalizationContext';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export const LanguagesModal = ({
  visibility = false,
  closeModal = () => {}
}) => {
  const { theme } = useTheme()
  const { t } = useTranslation()
  const { language, selectLang } = useLocalization()

  const setLanguage = (lang: string) => {
    selectLang(lang)
    closeModal()
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
        <Modal
          transparent={true}
          visible={visibility}
          animationType="slide"
          onRequestClose={() => closeModal()}>

          <View style={styles.centeredView}>
            <View style={[styles.modalView, {
              shadowColor: theme.colors.text,
              backgroundColor: theme.colors.background,
            }]}>
              <Text style={[styles.text, {
                fontWeight: 'bold',
                color: theme.colors.title
              }]}>
                Select an language:
              </Text>
              <RadioButton
                label={t('settings.lang.hindi')}
                style={[styles.text, {
                  color: theme.colors.text
                }]}
                onPress={() => setLanguage('hiIN')}
                selected={language === 'hiIN'}
              />
              <RadioButton
                label={t('settings.lang.english')}
                style={[styles.text, {
                  color: theme.colors.text
                }]}
                onPress={() => setLanguage('enUS')}
                selected={language === 'enUS'}
              />
              <RadioButton
                label={t('settings.lang.german')}
                style={[styles.text, {
                  color: theme.colors.text
                }]}
                onPress={() => setLanguage('deDE')}
                selected={language === 'deDE'}
              />
              <RadioButton
                label={t('settings.lang.mandarin')}
                style={[styles.text, {
                  color: theme.colors.text
                }]}
                onPress={() => setLanguage('zhCN')}
                selected={language === 'zhCN'}
              />
              <RadioButton
                label={t('settings.lang.arabic')}
                style={[styles.text, {
                  color: theme.colors.text
                }]}
                onPress={() => setLanguage('arAR')}
                selected={language === 'arAR'}
              />
              <RadioButton
                label={t('settings.lang.spanish')}
                style={[styles.text, {
                  color: theme.colors.text
                }]}
                onPress={() => setLanguage('esES')}
                selected={language === 'esES'}
              />
              <RadioButton
                label={t('settings.lang.russian')}
                style={[styles.text, {
                  color: theme.colors.text
                }]}
                onPress={() => setLanguage('ruRU')}
                selected={language === 'ruRU'}
              />
              <RadioButton
                label={t('settings.lang.portuguese')}
                style={[styles.text, {
                  color: theme.colors.text
                }]}
                onPress={() => setLanguage('ptBR')}
                selected={language === 'ptBR'}
              />
            </View>
          </View>
        </Modal>

      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  modalView: {
    padding: 50,
    marginTop: 100,
    borderRadius: 20,
    marginHorizontal: 20,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    height: 50,
    padding: 10,
    elevation: 2,
    borderRadius: 20,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
    paddingVertical: 4,
  },
});
