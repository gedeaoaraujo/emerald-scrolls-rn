import { Colors } from './colors.js';
import { HomeScreen } from './components/HomeSceen';
import { ScrollScreen } from './components/ScrollScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Scroll: undefined;
};

const Screens = {
  home: {
    name: "Home",
    title: "Emerald Scrolls"
  },
  scroll: {
    name: "Scroll",
    title: "Scroll"
  }
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Screens.home.name}
          component={HomeScreen}
          options={{
            title: Screens.home.title,
            headerTintColor: Colors.white,
            headerStyle: { backgroundColor: Colors.primary },
          }}
        />
        <Stack.Screen
          name={Screens.scroll.name}
          component={ScrollScreen}
          options={{
            title: Screens.scroll.title,
            headerTintColor: Colors.white,
            headerStyle: { backgroundColor: Colors.primary }, 
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
