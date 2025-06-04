import { Colors } from './colors.js';
import { FontAwesome6 } from '@expo/vector-icons';
import { ScrollModel } from './model/ScrollModel.js';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { HomeScreen } from './components/HomeSceen';
import { NavigationContainer } from '@react-navigation/native';
import { CreateScrollScreen } from './components/CreateScrollScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { ViewScrollScreen } from './components/ViewScrollScreen';

export type RootStackParamList = {
  Home: undefined;
  View: ScrollModel;
  Create: undefined;
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Emerald Scrolls",
            headerTintColor: Colors.white,
            headerStyle: { backgroundColor: Colors.primary },
          }}
        />
        <Stack.Screen
          name="View"
          component={ViewScrollScreen}
          options={{
            title: "View Scroll",
            headerTintColor: Colors.white,
            headerStyle: { backgroundColor: Colors.primary },
            headerRight: () => (
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => alert('Generating pdf file...')}>
                    <FontAwesome6 name='file-pdf' size={20} color='white'/>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => alert('Sharing text...')}>
                    <FontAwesome6 name='share-nodes' size={20} color='white'/>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => alert('Editing scroll...')}>
                    <FontAwesome6 name='pen' size={20} color='white'/>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => alert('Removing scroll...')}>
                    <FontAwesome6 name='trash' size={20} color='white'/>
                </TouchableOpacity>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="Create"
          component={CreateScrollScreen}
          options={{
            title: "Create Scroll",
            headerTintColor: Colors.white,
            headerStyle: { backgroundColor: Colors.primary },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  option: {
    paddingHorizontal: 10
  }
})