import { Colors } from './colors.js';
import { ScrollModel } from './model/ScrollModel.js';
import { HomeScreen } from './components/HomeSceen';
import { ScrollScreen } from './components/ScrollScreen';
import { NavigationContainer } from '@react-navigation/native';
import { CreateScrollScreen } from './components/CreateScroll';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Scroll: ScrollModel;
  Create: undefined;
};

const Screens = {
  home: {
    name: "Home",
    title: "Emerald Scrolls"
  },
  scroll: {
    name: "Scroll",
    title: "View Scroll"
  },
  create: {
    name: "Create",
    title: "Create Scroll"
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
        <Stack.Screen
          name={Screens.create.name}
          component={CreateScrollScreen}
          options={{
            title: Screens.create.title,
            headerTintColor: Colors.white,
            headerStyle: { backgroundColor: Colors.primary },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
