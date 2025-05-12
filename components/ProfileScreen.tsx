import { RootStackParamList } from '../App';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type ProfileScreenProps = {
    route: { params: { name: '' } };
    navigation: StackNavigationProp<RootStackParamList, 'Profile'>;
};

export const ProfileScreen = (props: ProfileScreenProps) => { 
  return (
    <View style={styles.content}>
      <Text>This is {props.route.params.name}'s profile</Text>
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