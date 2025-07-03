import { FontAwesome6 } from '@expo/vector-icons';
import { useScrolls } from "../contexts/ScrollsContext"
import { StyleSheet, TouchableOpacity } from "react-native"
import { useTheme } from "../theme/ThemeContext";
import { useRouter } from "expo-router"

export default function EditScrollMenu({ params }) {
  const router = useRouter()
  const { theme } = useTheme()
  const { editScroll } = useScrolls()

  const createNew = async () => {
    await editScroll(params.id)
    router.dismissTo('/home')
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