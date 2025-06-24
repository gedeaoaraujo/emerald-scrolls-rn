import { ScrollModel } from '../model/ScrollModel';
import { DateHeader } from './DateHeader';
import { useTheme } from '../theme/ThemeContext';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

type ViewScrollScreenProps = {
  route: { params: ScrollModel }
};

export const ViewScrollScreen = ({route}: ViewScrollScreenProps) => {
  const { theme } = useTheme()
  return (
    <SafeAreaView style={{ 
      flex: 1, paddingBottom: 50,
      backgroundColor: theme.colors.background
    }}>
    <ScrollView 
      contentContainerStyle={{ flexGrow: 1 }}>
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
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 18
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