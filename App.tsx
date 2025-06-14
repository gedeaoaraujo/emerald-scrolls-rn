import { Colors } from './colors.js';
import { ScrollModel } from './model/ScrollModel.js';
import { HomeScreen } from './components/HomeSceen';
import { NavigationContainer } from '@react-navigation/native';
import { CreateScrollScreen } from './components/CreateScrollScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { ViewScrollScreen } from './components/ViewScrollScreen';
import { ScrollsProvider } from './contexts/ScrollsContext';
import { ViewScrollMenu } from './components/ViewScrollMenu';
import { CreateScrollMenu } from './components/CreateScrollMenu';
import { EditScrollScreen } from './components/EditScrollScreen';
import { EditScrollMenu } from './components/EditScrollMenu';
import { SplashScreen } from './components/SplashScreen';
import { useTranslation } from 'react-i18next'
import './locales/i18n'

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  View: ScrollModel;
  Create: undefined;
  Edit: undefined;
};

const Stack = createStackNavigator();

export default function App() {
  const { t } = useTranslation();

  return (
    <ScrollsProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{
            headerShown: false,
            title: "Splash Screen",
            headerTintColor: Colors.white,
            headerStyle: { backgroundColor: Colors.primary },
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: t('app.name'),
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
          options={({ route, navigation }) => ({
            title: "Create Scroll",
            headerTintColor: Colors.white,
            headerStyle: { backgroundColor: Colors.primary },
            headerRight: () => (
              <CreateScrollMenu 
                navigation={navigation}/>
            )
          })}
        />
        <Stack.Screen
          name="Edit"
          component={EditScrollScreen}
          options={({ route, navigation }) => ({
            title: "Edit Scroll",
            headerTintColor: Colors.white,
            headerStyle: { backgroundColor: Colors.primary },
            headerRight: () => (
              <EditScrollMenu
                scroll={route.params} 
                navigation={navigation}/>
            )
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </ScrollsProvider>
  );
}