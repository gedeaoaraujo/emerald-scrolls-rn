import { dateTimePtBr } from '../utils/date';
import { useContext, useEffect } from 'react';
import { ScrollsContext } from '../contexts/ScrollsContext';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export const CreateScrollScreen = () => {
  const {
    title, 
    text,
    date,
    onChageText,
    onChageTitle,
    onChageDate
  } = useContext(ScrollsContext)
  
  useEffect(() => {
    onChageDate(new Date().toISOString())
  }, [])

  return (
    <View style={styles.content}>
      <TextInput 
        value={title}
        placeholder="Title"
        style={styles.title}
        onChangeText={onChageTitle}
      />
      <Text style={styles.date}>
          {dateTimePtBr(date)}
      </Text>
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
  date: {
    paddingVertical: 8,
    paddingHorizontal: 4
  },
  text: {
    fontSize: 16,
    paddingHorizontal: 8
  }
});