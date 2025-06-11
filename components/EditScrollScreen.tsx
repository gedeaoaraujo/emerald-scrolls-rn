import { useContext, useEffect } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { ScrollsContext } from '../contexts/ScrollsContext';
import { DateHeader } from './DateHeader';

export const EditScrollScreen = ({ route }) => {
  const {
    title, text,
    onChageText,
    onChageTitle,
    onChageDate
  } = useContext(ScrollsContext)

  useEffect(() => {
    onChageDate(route.params.date)
    onChageText(route.params.text)
    onChageTitle(route.params.title)
  }, [])

  return (
    <View style={styles.content}>
      <DateHeader
        dateStr={route.params.date}
      />
      <TextInput 
        value={title}
        placeholder="Title"
        style={styles.title}
        onChangeText={onChageTitle}
      />
      <TextInput
        editable
        multiline
        value={text}
        numberOfLines={30}
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