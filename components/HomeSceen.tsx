import { useContext, useEffect } from 'react';
import { RootStackParamList } from '../App';
import { FloatActionBtn } from './FloatActionBtn';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';
import { ScrollsContext } from '../contexts/ScrollsContext';
import { getAllScrolls } from '../database/scrolls.dao';
import { useTheme } from '../theme/ThemeContext';
import { ScrollsList } from './ScrollsList';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

export const HomeScreen = (props: HomeScreenProps) => {
  const { theme } = useTheme()
  const { list, init } = useContext(ScrollsContext)

  async function getScrolls() {
    init(await getAllScrolls())
  }

  function goToCreate() {
    props.navigation.navigate('Create')
  }

  useEffect(() => {
    getScrolls()
  }, [])

  return (
    <View style={[styles.content, { 
      backgroundColor: theme.colors.background
    }]}>
      <ScrollsList 
        list={list}
        theme={theme} 
        navigation={props.navigation} 
      />
      <FloatActionBtn
        fabStyle={styles.buttonFab} 
        onClick={goToCreate}
        text='+' 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1
  },
  buttonFab: {
    right: 20,
    bottom: 60,
    position: 'absolute',
  }
});
