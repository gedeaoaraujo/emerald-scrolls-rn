import { useContext, useEffect } from 'react';
import { ScrollItem } from './ScrollItem';
import { RootStackParamList } from '../App';
import { FloatActionBtn } from './FloatActionBtn';
import { ScrollModel } from '../model/ScrollModel';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, View, FlatList } from 'react-native';
import { ScrollsContext } from '../contexts/ScrollsContext';
import { getAllScrolls } from '../database/scrolls.dao';
import { useTheme } from '../theme/ThemeContext';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

export const HomeScreen = (props: HomeScreenProps) => {
  const { theme } = useTheme()
  const { list, init } = useContext(ScrollsContext)

  async function getScrolls() {
    init(await getAllScrolls())
  }

  function goToScroll(item: ScrollModel) {
    props.navigation.navigate('View', item)
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
      <View style={styles.list}>
          <FlatList
            data={list}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) =>
              <ScrollItem
                item={item}
                goToScroll={goToScroll}
              />
            }
          />
      </View>
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
  list: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonFab: {
    right: 20,
    bottom: 60,
    position: 'absolute',
  }
});
