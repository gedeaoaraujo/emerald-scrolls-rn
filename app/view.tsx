import { useTheme } from '../theme/ThemeContext';
import { ScrollModel } from '../model/ScrollModel';
import { useLocalSearchParams } from 'expo-router';
import { DateHeader } from '../components/DateHeader';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ViewScrollScreen() {
  const { theme } = useTheme()
  const params = useLocalSearchParams<ScrollModel>()
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
      <DateHeader readOnly dateStr={params.date} />      
      <Text style={[styles.title, {
        color: theme.colors.text
      }]}>{params.title}</Text>
      <Text style={[styles.text, {
        color: theme.colors.text
      }]}>{params.text}</Text>
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
