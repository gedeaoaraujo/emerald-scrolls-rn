import { Colors } from './colors.js';
import { HomeScreen } from './components/HomeSceen';
import { ProfileScreen } from './components/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Profile: { name: string };
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
            title: 'Home',
            headerTintColor: Colors.white,
            headerStyle: { backgroundColor: Colors.primary },
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: 'Profile',
            headerTintColor: Colors.white,
            headerStyle: { backgroundColor: Colors.primary }, 
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
