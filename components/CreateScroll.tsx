import { useState } from 'react';
import { dateTimeNow } from '../utils/date';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export const CreateScrollScreen = () => {
  const [title, onChageTitle] = useState('')
  const [text, onChageText] = useState('')

  return (
    <View style={styles.content}>
      <TextInput 
        value={title}
        placeholder="Title"
        style={styles.title}
        onChangeText={onChageTitle}
      />
      <Text style={styles.date}>
          {dateTimeNow()}
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