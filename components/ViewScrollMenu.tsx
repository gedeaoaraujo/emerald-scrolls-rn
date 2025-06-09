import { useContext } from "react"
import { FontAwesome6 } from '@expo/vector-icons'
import { ScrollModel } from "../model/ScrollModel"
import { ScrollsContext } from "../contexts/ScrollsContext"
import { StyleSheet, TouchableOpacity, View, Share } from "react-native"

type ScrollParams = {
  scroll: ScrollModel,
  navigation: any
}

export function ViewScrollMenu({ scroll, navigation }: ScrollParams) {
  const { shareScroll, removeScroll } = useContext(ScrollsContext)

  const deleteScroll = () => {
    removeScroll(scroll.id)
    navigation.goBack()
  }

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity
        style={styles.option}
        onPress={() => alert('Generating pdf file...')}>
        <FontAwesome6 name='file-pdf' size={20} color='white' />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.option}
        onPress={() => shareScroll(scroll)}>
        <FontAwesome6 name='share-nodes' size={20} color='white' />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.option}
        onPress={() => alert('Editing scroll...')}>
        <FontAwesome6 name='pen' size={20} color='white' />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.option}
        onPress={() => deleteScroll()}>
        <FontAwesome6 name='trash' size={20} color='white' />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  option: {
    paddingHorizontal: 10
  }
})