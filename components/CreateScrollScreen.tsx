import { useContext, useEffect } from 'react';
import { ScrollsContext } from '../contexts/ScrollsContext';
import { StyleSheet, TextInput, View } from 'react-native';
import { DateHeader } from './DateHeader';

export const CreateScrollScreen = () => {
  const {
    title, 
    text,
    onChageText,
    onChageTitle,
    onChageDate
  } = useContext(ScrollsContext)

  const date = new Date().toISOString() 
  
  useEffect(() => {
    onChageDate(date)
  }, [])

  return (
    <View style={styles.content}>
      <DateHeader dateStr={date} />
      <TextInput 
        value={title}
        placeholder="Title"
        style={styles.title}
        onChangeText={onChageTitle}
      />
      <TextInput
        editable
        multiline
        numberOfLines={30}
        value={text}
        style={styles.text}
        placeholder="Write here.."
        onChangeText={onChageText}
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
    fontWeight: 'bold'
  },
  text: {
    fontSize: 16,
    paddingHorizontal: 8
  }
});