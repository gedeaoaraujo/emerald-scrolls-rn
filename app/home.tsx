import { useContext, useEffect } from 'react';
import { FloatActionBtn } from '../components/FloatActionBtn';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { ScrollsContext } from '../contexts/ScrollsContext';
import { getAllScrolls } from '../database/scrolls.dao';
import { useTheme } from '../theme/ThemeContext';
import { ScrollsList } from '../components/ScrollsList';
import { useRouter } from 'expo-router';


export default function HomeScreen() {
  const router = useRouter()
  const { theme } = useTheme()
  const { list, init } = useContext(ScrollsContext)

  async function getScrolls() {
    init(await getAllScrolls())
  }

  function goToCreate() {
    router.navigate('/create')
  }

  useEffect(() => {
    getScrolls()
  }, [])

  return (
    <SafeAreaView style={{
      flex: 1, paddingBottom: 50,
      backgroundColor: theme.colors.background
    }}>
    <View style={[styles.content, { 
      backgroundColor: theme.colors.background
    }]}>
      <ScrollsList 
        list={list}
        theme={theme} 
        router={router} 
      />
      <FloatActionBtn
        fabStyle={styles.buttonFab} 
        onClick={goToCreate}
        text='+' 
      />
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1
  },
  buttonFab: {
    right: 20,
    bottom: 20,
    position: 'absolute',
  }
});
