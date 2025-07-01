import { LocalizationProvider, useLocalization } from '../contexts/LocalizationContext';
import { useTheme, ThemeProvider } from '../theme/ThemeContext';
import CreateScrollMenu from '../components/CreateScrollMenu';
import { HeaderBackButton } from '@react-navigation/elements';
import { ScrollsProvider } from '../contexts/ScrollsContext';
import EditScrollMenu from '../components/EditScrollMenu';
import { migrateDbIfNeeded } from '../database/migration';
import ViewScrollMenu from '../components/ViewScrollMenu';
import HomeMenu from '../components/HomeMenu';
import { useTranslation } from 'react-i18next';
import { SQLiteProvider } from 'expo-sqlite';
import Dialog from '../utils/alerts';
import { Stack } from 'expo-router';
import { useEffect } from 'react';
import '../locales/i18n';

function MainContent() {
  const { t } = useTranslation()
  const { theme, initTheme } = useTheme()
  const { initLanguage } = useLocalization()

  useEffect(() => { 
    initLanguage()
    initTheme() 
  }, [])

  return (
    <Stack
      screenOptions={{
        headerTintColor: theme.colors.textOnPrimary,
        headerStyle: { backgroundColor: theme.colors.primary },
    }}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Splash Screen",
        }}
      />
      <Stack.Screen
        name="password"
        options={{
          headerShown: false,
          title: "Password Screen",
        }}
      />
      <Stack.Screen
        name="home"
        options={() => ({
          title: t('app.name'),
          headerRight: () => <HomeMenu />
        })}
      />
      <Stack.Screen
        name="view"
        options={({ route: { params }, navigation }) => ({
          title: t('view.scroll'),
          headerLeft: () => (
            <HeaderBackButton
              style={{ marginStart: 0, marginEnd: 15 }}
              tintColor={ theme.colors.textOnPrimary }
              onPress={() => navigation.goBack()}
            />
          ),
          headerRight: () => <ViewScrollMenu params={params} />
        })}
      />
      <Stack.Screen
        name="create"
        options={({ navigation }) => ({
          title: t('create.scroll'),
          headerLeft: () => (
            <HeaderBackButton
              style={{ marginStart: 0, marginEnd: 15 }}
              tintColor={ theme.colors.textOnPrimary }
              onPress={() => Dialog.discartChanges(t, navigation.goBack)}
            />
          ),
          headerRight: () => <CreateScrollMenu />
        })}
      />
      <Stack.Screen
        name="edit"
        options={({ route: { params }, navigation }) => ({
          title: t('edit.scroll'),
          headerLeft: () => (
            <HeaderBackButton
              style={{ marginStart: 0, marginEnd: 15 }}
              tintColor={ theme.colors.textOnPrimary }
              onPress={() => navigation.goBack()}
            />
          ),
          headerRight: () => <EditScrollMenu params={params} />
        })}
      />
      <Stack.Screen
        name="settings"
        options={{
          title: t('settings'),
        }}
      />
    </Stack>
  );
}

export default function App() {
  const DB_NAME = 'emerald.db'
  return (
    <SQLiteProvider 
      databaseName={DB_NAME}
      onInit={migrateDbIfNeeded}>
    <ThemeProvider>
    <LocalizationProvider>
    <ScrollsProvider>
      <MainContent />
    </ScrollsProvider>
    </LocalizationProvider>
    </ThemeProvider>
    </SQLiteProvider>
  )
}