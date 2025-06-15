import { useContext, useEffect } from 'react';
import { ScrollsContext } from '../contexts/ScrollsContext';
import { StyleSheet, TextInput, View } from 'react-native';
import { DateHeader } from './DateHeader';
import { useTranslation } from 'react-i18next';

export const CreateScrollScreen = () => {
  const {
    title, 
    text,
    onChageText,
    onChageTitle,
    onChageDate,
    updateDate
  } = useContext(ScrollsContext)

  const { t } = useTranslation()
  const date = new Date().toISOString() 
  
  useEffect(() => {
    onChageDate(date)
    onChageText('')
    onChageTitle('')
  }, [])

  return (
    <View style={styles.content}>
      <DateHeader
        dateStr={date} 
        updateDate={updateDate} 
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
        numberOfLines={30}
        value={text}
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
    fontSize: 16
  }
});
