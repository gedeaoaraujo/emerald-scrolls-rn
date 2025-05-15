import { ScrollModel } from '../model/ScrollModel';
import { StyleSheet, Text, View } from 'react-native';

type ScrollScreenProps = {
  route: { params: ScrollModel }
};

export const ScrollScreen = ({route}: ScrollScreenProps) => {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>{route.params.title}</Text>
      <Text style={styles.date}>{route.params.date}</Text>
      <Text style={styles.text}>{route.params.text}</Text>
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