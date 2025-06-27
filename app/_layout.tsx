import { LocalizationProvider, useLocalization } from '../contexts/LocalizationContext';
import { useTheme, ThemeProvider } from '../theme/ThemeContext';
import CreateScrollMenu from '../components/CreateScrollMenu';
import { HeaderBackButton } from '@react-navigation/elements';
import { ScrollsProvider } from '../contexts/ScrollsContext';
import EditScrollMenu from '../components/EditScrollMenu';
import { migrateDbIfNeeded } from '../database/migration';
import ViewScrollMenu from '../components/ViewScrollMenu';
import { ScrollModel } from '../model/ScrollModel';
import HomeMenu from '../components/HomeMenu';
import { useTranslation } from 'react-i18next';
import { SQLiteProvider } from 'expo-sqlite';
import Dialog from '../utils/alerts';
import { Stack } from 'expo-router';
import { useEffect } from 'react';
import '../locales/i18n';

export type RootStackParamList = {
  Splash: undefined;
  Password: undefined;
  Home: undefined;
  View: ScrollModel;
  Create: undefined;
  Edit: undefined;
  Settings: undefined;
};


function MainContent() {
  const { t } = useTranslation()
  const { theme, initTheme } = useTheme()
  const { initLanguage } = useLocalization()

  useEffect(() => { 
    initLanguage()
    initTheme() 
  }, [])

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Splash Screen",
          headerTintColor: theme.colors.textOnPrimary,
          headerStyle: { backgroundColor: theme.colors.primary },
        }}
      />
      <Stack.Screen
        name="password"
        options={{
          headerShown: false,
          title: "Password Screen",
          headerTintColor: theme.colors.textOnPrimary,
          headerStyle: { backgroundColor: theme.colors.primary },
        }}
      />
      <Stack.Screen
        name="home"
        options={() => ({
          title: t('app.name'),
          headerTintColor: theme.colors.textOnPrimary,
          headerStyle: { backgroundColor: theme.colors.primary },
          headerRight: () => <HomeMenu />
        })}
      />
      <Stack.Screen
        name="view"
        options={({ route: { params } }) => ({
          title: t('view.scroll'),
          headerTintColor: theme.colors.textOnPrimary,
          headerStyle: { backgroundColor: theme.colors.primary },
          headerRight: () => <ViewScrollMenu params={params} />
        })}
      />
      <Stack.Screen
        name="create"
        options={({ navigation }) => ({
          title: t('create.scroll'),
          headerTintColor: theme.colors.textOnPrimary,
          headerStyle: { backgroundColor: theme.colors.primary },
          headerLeft: () => (
            <HeaderBackButton
              tintColor={ theme.colors.textOnPrimary }
              onPress={() => Dialog.discartChanges(t, navigation.goBack)}
            />
          ),
          headerRight: () => <CreateScrollMenu />
        })}
      />
      <Stack.Screen
        name="edit"
        options={({ route: { params } }) => ({
          title: t('edit.scroll'),
          headerTintColor: theme.colors.textOnPrimary,
          headerStyle: { backgroundColor: theme.colors.primary },
          headerRight: () => <EditScrollMenu params={params} />
        })}
      />
      <Stack.Screen
        name="settings"
        options={{
          title: t('settings'),
          headerTintColor: theme.colors.textOnPrimary,
          headerStyle: { backgroundColor: theme.colors.primary },
        }}
      />
    </Stack>
  );
}

export default function App() {
  const DB_NAME = 'emerald.db'
  return (
    <LocalizationProvider>
    <SQLiteProvider 
      databaseName={DB_NAME}
      onInit={migrateDbIfNeeded}>
    <ThemeProvider>
    <ScrollsProvider>
      <MainContent />
    </ScrollsProvider>
    </ThemeProvider>
    </SQLiteProvider>
    </LocalizationProvider>
  )
}