import { useContext, useEffect } from 'react';
import { ScrollsContext } from '../contexts/ScrollsContext';
import { StyleSheet, TextInput, View } from 'react-native';
import { DateHeader } from './DateHeader';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../theme/ThemeContext';

export const CreateScrollScreen = () => {
  const {
    title, 
    text,
    onChageText,
    onChageTitle,
    onChageDate,
    updateDate
  } = useContext(ScrollsContext)

  const { theme } = useTheme()
  const { t } = useTranslation()
  const date = new Date().toISOString() 
  
  useEffect(() => {
    onChageDate(date)
    onChageText('')
    onChageTitle('')
  }, [])

  return (
    <View style={[styles.content, {
        backgroundColor: theme.colors.background
    }]}>
      <DateHeader
        dateStr={date} 
        updateDate={updateDate} 
      />
      <TextInput 
        value={title}
        placeholder={t('placeholder.title')}
        onChangeText={onChageTitle}
        placeholderTextColor={theme.colors.text}
        style={[styles.title, {
          color: theme.colors.text,
          backgroundColor: theme.colors.background
        }]}
      />
      <TextInput
        editable
        multiline
        numberOfLines={30}
        value={text}
        placeholder={t('placeholder.text')}
        onChangeText={onChageText}
        placeholderTextColor={theme.colors.text}
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
    fontSize: 16
  }
});
