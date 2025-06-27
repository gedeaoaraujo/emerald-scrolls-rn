import { useEffect, useState } from 'react';
import { useScrolls } from '../contexts/ScrollsContext';
import { DateHeader } from '../components/DateHeader';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../theme/ThemeContext';
import Dialog from '../utils/alerts';
import { 
  BackHandler, StyleSheet, TextInput, View,
  KeyboardAvoidingView, Platform, SafeAreaView, Keyboard 
} from 'react-native';
import { useRouter } from 'expo-router';

export default function CreateScrollScreen() {
  const {
    title, 
    text,
    onChageText,
    onChageTitle,
    onChageDate,
    updateDate
  } = useScrolls()

  const router = useRouter()
  const { theme } = useTheme()
  const { t } = useTranslation()
  const date = new Date().toISOString() 
  const [keyboardOffset, setKeyboardOffset] = useState(0);
  
  useEffect(() => {
    onChageDate(date)
    onChageText('')
    onChageTitle('')
  
    const handler = BackHandler.addEventListener('hardwareBackPress', () => {
      Dialog.discartChanges(t, router.back)
      return true
    });

    const show = Keyboard.addListener('keyboardDidShow', () => setKeyboardOffset(50));
    const hide = Keyboard.addListener('keyboardDidHide', () => setKeyboardOffset(0));

    return () => {
      handler.remove()
      show.remove();
      hide.remove();
    }
  }, [])

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
