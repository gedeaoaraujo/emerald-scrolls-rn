import { RootStackParamList } from '../App';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type ScrollScreenProps = {
  title: string,
  date: string,
  text: string,
  navigation: StackNavigationProp<RootStackParamList, 'Scroll'>;
};

export const ScrollScreen = (props: ScrollScreenProps) => { 
  return (
    <View style={styles.content}>
      <Text>{props.title}</Text>
      <Text>{props.date}</Text>
      <Text>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});