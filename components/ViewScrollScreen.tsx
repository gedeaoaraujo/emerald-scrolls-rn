import { ScrollModel } from '../model/ScrollModel';
import { StyleSheet, Text, View } from 'react-native';
import { DateHeader } from './DateHeader';

type ViewScrollScreenProps = {
  route: { params: ScrollModel }
};

export const ViewScrollScreen = ({route}: ViewScrollScreenProps) => {
  return (
    <View style={styles.content}>
      <DateHeader dateStr={route.params.date} />      
      <Text style={styles.title}>{route.params.title}</Text>
      <Text style={styles.text}>{route.params.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    padding: 18,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 18,
  },
  text: {
    fontSize: 16
  }
});