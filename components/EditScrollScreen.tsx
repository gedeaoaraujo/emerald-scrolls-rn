import { useContext, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { ScrollsContext } from '../contexts/ScrollsContext';

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
      <TextInput 
        value={title}
        placeholder="Title"
        style={styles.title}
        onChangeText={onChageTitle}
      />
      <Text style={styles.date}>
          {route.params.date}
      </Text>
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
  date: {
    paddingVertical: 8,
    paddingHorizontal: 4
  },
  text: {
    fontSize: 16,
    paddingHorizontal: 8
  }
});