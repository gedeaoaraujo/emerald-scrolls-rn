import { Colors } from './colors.js';
import { HomeScreen } from './components/HomeSceen';
import { ScrollScreen } from './components/ScrollScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Scroll: undefined;
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Emerald Scrolls',
            headerTintColor: Colors.white,
            headerStyle: { backgroundColor: Colors.primary },
          }}
        />
        <Stack.Screen
          name="Scroll"
          component={ScrollScreen}
          options={{
            title: 'Scroll',
            headerTintColor: Colors.white,
            headerStyle: { backgroundColor: Colors.primary }, 
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
