import { useContext, useEffect } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { ScrollsContext } from '../contexts/ScrollsContext';
import { useTranslation } from 'react-i18next'
import { DateHeader } from './DateHeader';

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

  const { t } = useTranslation()

  return (
    <View style={styles.content}>
      <DateHeader
        updateDate={updateDate}
        dateStr={route.params.date}
      />
      <TextInput 
        value={title}
        placeholder={t('placeholder.title')}
        style={styles.title}
        onChangeText={onChageTitle}
      />
      <TextInput
        editable
        multiline
        value={text}
        numberOfLines={30}
        style={styles.text}
        placeholder={t('placeholder.text')}
        onChangeText={onChageText}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
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
