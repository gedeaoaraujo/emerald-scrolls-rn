import { useContext, useEffect, useState } from 'react';
import { ScrollsContext } from '../contexts/ScrollsContext';
import { useTranslation } from 'react-i18next'
import { DateHeader } from './DateHeader';
import { useTheme } from '../theme/ThemeContext';
import { 
  Keyboard, KeyboardAvoidingView, Platform, 
  SafeAreaView, StyleSheet, TextInput, View 
} from 'react-native';

export const EditScrollScreen = ({ route }) => {
  const {
    title, text,
    onChageText,
    onChageTitle,
    onChageDate,
    updateDate
  } = useContext(ScrollsContext)

  const [keyboardOffset, setKeyboardOffset] = useState(0);

  useEffect(() => {
    onChageDate(route.params.date)
    onChageText(route.params.text)
    onChageTitle(route.params.title)

    const show = Keyboard.addListener('keyboardDidShow', () => setKeyboardOffset(50));
    const hide = Keyboard.addListener('keyboardDidHide', () => setKeyboardOffset(0));

    return () => {
      show.remove();
      hide.remove();
    }
  }, [])

  const { theme } = useTheme()
  const { t } = useTranslation()

  return (
    <SafeAreaView style={{ 
      flex: 1, backgroundColor: theme.colors.background,
    }}>
    <KeyboardAvoidingView
      style={{ flex: 1, paddingBottom: keyboardOffset }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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
    </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 18,
    paddingBottom: 50
  },
  title: {
    fontSize: 18,
    marginTop: 16,
    fontWeight: 'bold'
  },
  text: {
    flex: 1,
    fontSize: 16,
    textAlignVertical: 'top'
  }
});
