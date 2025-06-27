import { FontAwesome6 } from '@expo/vector-icons'
import { useScrolls } from "../contexts/ScrollsContext"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { useTranslation } from "react-i18next"
import Dialog from '../utils/alerts'
import { useRouter } from "expo-router"

export default function ViewScrollMenu({ params }) {
  const router = useRouter()
  const { t } = useTranslation()
  const { shareScroll, removeScroll } = useScrolls()

  const deleteScroll = () => {
    Dialog.deleteScroll(t, ()=>{
      removeScroll(params.id)
      router.back()
    })
  }

  const editScroll = () => {
    router.navigate({ pathname: '/edit', params })
  }

  return (
    <View style={{ flexDirection: 'row' }}>
      {/* <TouchableOpacity
        style={styles.option}
        onPress={() => alert('Generating pdf file...')}>
        <FontAwesome6 name='file-pdf' size={20} color='white' />
      </TouchableOpacity> */}
      <TouchableOpacity
        style={styles.option}
        onPress={() => shareScroll(params)}>
        <FontAwesome6 name='share-nodes' size={20} color='white' />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.option}
        onPress={() => editScroll()}>
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