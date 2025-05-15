import { ScrollItem } from './ScrollItem';
import { RootStackParamList } from '../App';
import { FloatActionBtn } from './FloatActionBtn';
import { ScrollModel } from '../model/ScrollModel';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, View, FlatList } from 'react-native';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

export const HomeScreen = (props: HomeScreenProps) => {
  function goToScroll(item: ScrollModel) {
    props.navigation.navigate('View', item)
  }

  function goToCreate() {
    props.navigation.navigate('Create')
  }

  const mockItens = () => {
    return Array
      .from(Array(3).keys())
      .map(val => {
        return {
          id: val,
          title: 'Title ' + val,
          date: '05/02/25 14:00',
          text: 'Something here...'
        }
      });
  }

  return (
    <View style={styles.content}>
      <View style={styles.list}>
        <FlatList
          data={mockItens()}
          renderItem={({item}) =>
            <ScrollItem
              item={item}
              goToScroll={goToScroll}
            />
          }
        />
      </View>
      <FloatActionBtn onClick={goToCreate}/>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1
  },
  list: {
    alignItems: 'center',
    justifyContent: 'center'
  },
});
