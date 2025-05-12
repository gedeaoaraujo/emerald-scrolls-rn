import { RootStackParamList } from '../App';
import { StyleSheet, View, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

export const HomeScreen = (props: HomeScreenProps) => {
  function goToProfile() {
    props.navigation.navigate('Profile', { name: 'XXX' })
  }

  return (
    <View style={styles.content}>
      <Button
        title="Go to profile"
        onPress={ goToProfile }
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
