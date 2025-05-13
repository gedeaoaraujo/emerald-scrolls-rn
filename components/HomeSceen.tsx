import { ScrollItem } from './ScrollItem';
import { RootStackParamList } from '../App';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, View, FlatList } from 'react-native';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

export const HomeScreen = (props: HomeScreenProps) => {
  function goToProfile() {
    props.navigation.navigate('Profile', { name: 'XXX' })
  }

  const mockItens = () => {
    return Array
      .from(Array(100).keys())
      .map(val => {
        return {
          key: val,
          props: {
            title: 'Title ' + val,
            date: '05/02/25 14:00',
            text: 'Something here...',
            goToProfile
          }}
      });
  }

  return (
    <View style={styles.content}>
      <FlatList
        data={mockItens()}
        renderItem={({item}) =>
          <ScrollItem props={item.props}/>
        }
      />
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
