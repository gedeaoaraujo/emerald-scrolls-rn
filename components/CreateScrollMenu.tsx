import { FontAwesome6 } from '@expo/vector-icons';
import { useScrolls } from "../contexts/ScrollsContext"
import { StyleSheet, TouchableOpacity } from "react-native"
import { useTheme } from "../theme/ThemeContext";
import { useRouter } from "expo-router";

export default function CreateScrollMenu() {
  const router = useRouter()
  const { theme } = useTheme()
  const { createScroll } = useScrolls()

  const createNew = () => {
    if (createScroll())
      router.back()
  }

  return (
    <TouchableOpacity
      style={styles.option}
      onPress={() => createNew()}>
      <FontAwesome6 name='check' size={20} 
        color={theme.colors.textOnPrimary} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  option: {
    paddingHorizontal: 10
  }
})