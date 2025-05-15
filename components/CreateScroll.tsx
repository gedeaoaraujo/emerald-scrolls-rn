import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export const CreateScrollScreen = () => {
  const [title, onChageTitle] = useState('')
  const [date, onChageDate] = useState('')
  const [text, onChageText] = useState('')
  return (
    <View style={styles.content}>
      <TextInput 
        value={title}
        placeholder="Title"
        style={styles.title}
        onChangeText={onChageTitle}
      />
      <TextInput 
        value={date}
        placeholder="Date"
        style={styles.date}
        onChangeText={onChageDate}
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
  date: {
    paddingVertical: 8
  },
  text: {
    fontSize: 16
  }
});