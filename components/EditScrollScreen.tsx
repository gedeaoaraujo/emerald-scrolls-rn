import { useContext, useEffect } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { ScrollsContext } from '../contexts/ScrollsContext';
import { useTranslation } from 'react-i18next'
import { DateHeader } from './DateHeader';
import { useTheme } from '../theme/ThemeContext';

export const EditScrollScreen = ({ route }) => {
  const {
    title, text,
    onChageText,
    onChageTitle,
    onChageDate,
    updateDate
  } = useContext(ScrollsContext)

  useEffect(() => {
    onChageDate(route.params.date)
    onChageText(route.params.text)
    onChageTitle(route.params.title)
  }, [])

  const { theme } = useTheme()
  const { t } = useTranslation()

  return (
    <View style={[styles.content, {
      backgroundColor: theme.colors.background
    }]}>
      <DateHeader
        updateDate={updateDate}
        dateStr={route.params.date}
      />
      <TextInput 
        value={title}
        placeholder={t('placeholder.title')}
        onChangeText={onChageTitle}
        style={[styles.title, {
          color: theme.colors.text,
          backgroundColor: theme.colors.background
        }]}
      />
      <TextInput
        editable
        multiline
        value={text}
        numberOfLines={30}
        placeholder={t('placeholder.text')}
        onChangeText={onChageText}
        style={[styles.text, {
          color: theme.colors.text,
          backgroundColor: theme.colors.background
        }]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 18,
  },
  title: {
    fontSize: 18,
    marginTop: 16,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 16,
  }
});
