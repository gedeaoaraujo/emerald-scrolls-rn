import { useContext } from 'react';
import { Colors } from './colors.js';
import { FontAwesome6 } from '@expo/vector-icons';
import { ScrollModel } from './model/ScrollModel.js';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { HomeScreen } from './components/HomeSceen';
import { NavigationContainer } from '@react-navigation/native';
import { CreateScrollScreen } from './components/CreateScrollScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { ViewScrollScreen } from './components/ViewScrollScreen';
import { ScrollsContext, ScrollsProvider } from './contexts/ScrollsContext';

export type RootStackParamList = {
  Home: undefined;
  View: ScrollModel;
  Create: undefined;
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <ScrollsProvider>
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
          options={({ route, navigation }) => ({
            title: "View Scroll",
            headerTintColor: Colors.white,
            headerStyle: { backgroundColor: Colors.primary },
            headerRight: () => (
              <ViewScrollMenu
                scroll={route.params} 
                navigation={navigation}/>
            ),
          })}
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
    </ScrollsProvider>
  );
}

type ScrollParams = {
  scroll: ScrollModel,
  navigation: any
}

function ViewScrollMenu({scroll, navigation}: ScrollParams) {
  const { removeItem } = useContext(ScrollsContext)
  
  function deleteScroll() {
    removeItem(scroll.id)
    navigation.goBack()
  }

  return (
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
        onPress={() => deleteScroll()}>
          <FontAwesome6 name='trash' size={20} color='white'/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  option: {
    paddingHorizontal: 10
  }
})