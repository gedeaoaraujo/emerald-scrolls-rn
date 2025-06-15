import { ScrollModel } from '../model/ScrollModel';
import { StyleSheet, Text, View } from 'react-native';
import { DateHeader } from './DateHeader';
import { useTheme } from '../theme/ThemeContext';

type ViewScrollScreenProps = {
  route: { params: ScrollModel }
};

export const ViewScrollScreen = ({route}: ViewScrollScreenProps) => {
  const { theme } = useTheme()
  return (
    <View style={[styles.content, {
      backgroundColor: theme.colors.background
    }]}>
      <DateHeader readOnly dateStr={route.params.date} />      
      <Text style={[styles.title, {
        color: theme.colors.text
      }]}>{route.params.title}</Text>
      <Text style={[styles.text, {
        color: theme.colors.text
      }]}>{route.params.text}</Text>
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
    fontWeight: 'bold',
    paddingVertical: 18,
  },
  text: {
    fontSize: 16
  }
});