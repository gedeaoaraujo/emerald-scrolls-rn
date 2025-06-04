import { Colors } from './colors.js';
import { ScrollModel } from './model/ScrollModel.js';
import { HomeScreen } from './components/HomeSceen';
import { NavigationContainer } from '@react-navigation/native';
import { CreateScrollScreen } from './components/CreateScroll';
import { createStackNavigator } from '@react-navigation/stack';
import { ViewScrollScreen as ViewScrollScreen } from './components/ScrollScreen';

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
