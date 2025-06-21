import { ScrollModel } from './model/ScrollModel.js';
import { HomeScreen } from './components/HomeSceen';
import { NavigationContainer } from '@react-navigation/native';
import { LocalizationProvider } from './contexts/LocalizationContext';
import { CreateScrollScreen } from './components/CreateScrollScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { ViewScrollScreen } from './components/ViewScrollScreen';
import { ScrollsProvider } from './contexts/ScrollsContext';
import { ViewScrollMenu } from './components/ViewScrollMenu';
import { CreateScrollMenu } from './components/CreateScrollMenu';
import { EditScrollScreen } from './components/EditScrollScreen';
import { useTheme, ThemeProvider } from './theme/ThemeContext';
import { HeaderBackButton } from '@react-navigation/elements';
import { EditScrollMenu } from './components/EditScrollMenu';
import { SplashScreen } from './components/SplashScreen';
import { migrateDbIfNeeded } from './database/migration';
import { HomeMenu } from './components/HomeMenu';
import { useTranslation } from 'react-i18next';
import { SQLiteProvider } from 'expo-sqlite';
import Dialog from './utils/alerts';
import './locales/i18n';

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  View: ScrollModel;
  Create: undefined;
  Edit: undefined;
};

const Stack = createStackNavigator();

function MainContent() {
  const { theme } = useTheme()
  const { t } = useTranslation()

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{
          headerShown: false,
          title: "Splash Screen",
          headerTintColor: theme.colors.textOnPrimary,
          headerStyle: { backgroundColor: theme.colors.primary },
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: t('app.name'),
          headerTintColor: theme.colors.textOnPrimary,
          headerStyle: { backgroundColor: theme.colors.primary },
          headerRight: () => <HomeMenu/>
        }}
      />
      <Stack.Screen
        name="View"
        component={ViewScrollScreen}
        options={({ route, navigation }) => ({
          title: t('view.scroll'),
          headerTintColor: theme.colors.textOnPrimary,
          headerStyle: { backgroundColor: theme.colors.primary },
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
          title: t('create.scroll'),
          headerTintColor: theme.colors.textOnPrimary,
          headerStyle: { backgroundColor: theme.colors.primary },
          headerLeft: () => (
            <HeaderBackButton
              tintColor={ theme.colors.textOnPrimary }
              onPress={() => Dialog.discartChanges(t, navigation.goBack)}
            />
          ),
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
          title: t('edit.scroll'),
          headerTintColor: theme.colors.textOnPrimary,
          headerStyle: { backgroundColor: theme.colors.primary },
          headerRight: () => (
            <EditScrollMenu
              scroll={route.params}
              navigation={navigation}/>
          )
        })}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  const DB_NAME = 'emerald.db'
  return (
    <SQLiteProvider 
      databaseName={DB_NAME}
      onInit={migrateDbIfNeeded}>
    <ThemeProvider>
    <ScrollsProvider>
    <LocalizationProvider>
      <MainContent />
    </LocalizationProvider>
    </ScrollsProvider>
    </ThemeProvider>
    </SQLiteProvider>
  )
}