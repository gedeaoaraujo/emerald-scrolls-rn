import { useContext } from "react";
import { FontAwesome6 } from '@expo/vector-icons';
import { ScrollsContext } from "../contexts/ScrollsContext"
import { StyleSheet, TouchableOpacity } from "react-native"

export function CreateScrollMenu({ navigation }) {
  const { createScroll } = useContext(ScrollsContext)

  const createNew = () => {
    createScroll()
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