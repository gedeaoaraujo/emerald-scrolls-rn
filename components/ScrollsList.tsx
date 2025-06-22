import { FlatList, StyleSheet, Text, View } from "react-native"
import { ScrollModel } from "../model/ScrollModel"
import { FontAwesome6 } from '@expo/vector-icons'
import { ThemeType } from "../theme/ThemeType"
import { ScrollItem } from './ScrollItem'
import { isEmpty } from "../utils/arrays"

type ScrollsListProps = {
  list: ScrollModel[],
  theme: ThemeType
  navigation: any,
}

export const ScrollsList = ({ 
  list, navigation, theme 
}: ScrollsListProps) => {

  function goToScroll(item: ScrollModel) {
    navigation.navigate('View', item)
  }

  const EmptyList = () => (
    <View style={[styles.card, {
      backgroundColor: theme.colors.primary
    }]}>
      <FontAwesome6 
        size={100} 
        name='not-equal'
        style={styles.icon} 
        color={theme.colors.textOnPrimary} />
      <Text style={[styles.title, {
        color: theme.colors.textOnPrimary
      }]}>
        Nenhum pergaminho foi escrito
      </Text>
      <Text style={[styles.text, {
        color: theme.colors.textOnPrimary
      }]}>
        Aperte o botão '+' para escrever um pergaminho novo.
      </Text>
    </View >
  )

  const FilledList = () => (
    <FlatList
      data={list}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <ScrollItem
          item={item}
          goToScroll={goToScroll}
        />
      )}
    />
  )

  return (
    <View style={styles.container}>
      {isEmpty(list) ? <EmptyList /> : <FilledList />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    padding: 32,
    width: '90%',
    elevation: 6,
    borderRadius: 10,
    shadowColor: '#000',
    shadowRadius: 3.84,
    shadowOpacity: 0.25,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#fff',
    shadowOffset: { width: 0, height: 2 },
  },
  icon: {
    marginBottom: 18
  },
  title: {
    fontSize: 16,
    maxWidth: '80%',
    marginBottom: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    maxWidth: '80%',
    textAlign: 'center',
  }
})
