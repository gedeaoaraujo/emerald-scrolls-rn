import { useContext } from "react";
import { FontAwesome6 } from '@expo/vector-icons';
import { ScrollsContext } from "../contexts/ScrollsContext"
import { StyleSheet, TouchableOpacity } from "react-native"
import { ScrollModel } from "../model/ScrollModel";

type EditScrollParams = {
  scroll: ScrollModel,
  navigation: any
}

export function EditScrollMenu({ scroll, navigation }: EditScrollParams) {
  const { editScroll } = useContext(ScrollsContext)

  const createNew = () => {
    editScroll(scroll.id)
    navigation.goBack()
  }

  return (
    <TouchableOpacity
      style={styles.option}
      onPress={() => createNew()}>
      <FontAwesome6 name='check' size={20} color='white' />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  option: {
    paddingHorizontal: 10
  }
})