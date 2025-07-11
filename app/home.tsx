import { useEffect } from 'react';
import { FloatActionBtn } from '../components/FloatActionBtn';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { useScrolls } from '../contexts/ScrollsContext';
import { getAllScrolls } from '../database/scrolls.dao';
import { useTheme } from '../theme/ThemeContext';
import { ScrollsList } from '../components/ScrollsList';
import { SearchBar } from '../components/SearchBar';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter()
  const { theme } = useTheme()
  const { list, init, searchable, onSearchText } = useScrolls()

  async function getScrolls() {
    init(await getAllScrolls())
  }

  function goToCreate() {
    router.navigate('/create')
  }

  useEffect(() => {
    searchable ? null : onSearchText('')
  }, [searchable])

  useEffect(() => {
    getScrolls()
  }, [])

  return (
    <SafeAreaView style={{
      flex: 1, paddingBottom: 50,
      backgroundColor: theme.colors.background
    }}>
    {!searchable ? null : <SearchBar/>}
    <View style={[styles.content, { 
      backgroundColor: theme.colors.background
    }]}>
      <ScrollsList 
        list={list}
        theme={theme} 
        router={router} 
        searchable={searchable}
      />
      <FloatActionBtn
        fabStyle={[styles.buttonFab, {
          bottom: searchable ? 80 : 20
        }]}
        onClick={goToCreate}
        text='+' 
      />
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingVertical: 16,
  },
  buttonFab: {
    right: 20,
    position: 'absolute',
  }}
);
