import { StyleSheet, TouchableOpacity } from "react-native"
import { FontAwesome6 } from '@expo/vector-icons';

export function CreateScrollMenu() {
  return (
    <TouchableOpacity
      style={styles.option}
      onPress={() => alert('Saving file...')}>
      <FontAwesome6 name='check' size={20} color='white' />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  option: {
    paddingHorizontal: 10
  }
})