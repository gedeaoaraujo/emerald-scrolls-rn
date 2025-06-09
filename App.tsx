import { Colors } from './colors.js';
import { ScrollModel } from './model/ScrollModel.js';
import { HomeScreen } from './components/HomeSceen';
import { NavigationContainer } from '@react-navigation/native';
import { CreateScrollScreen } from './components/CreateScrollScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { ViewScrollScreen } from './components/ViewScrollScreen';
import { ScrollsProvider } from './contexts/ScrollsContext';
import { ViewScrollMenu } from './components/ViewScrollMenu.js';

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