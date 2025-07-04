import { useState } from "react"
import { useTheme } from "../theme/ThemeContext"
import { FontAwesome6 } from '@expo/vector-icons';
import { useScrolls } from "../contexts/ScrollsContext";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native"

export const SearchBar = () => {
  const { theme } = useTheme()
  const { onSearchText } = useScrolls()
  const [searchText, setSearchText] = useState('')

  const onCheckPress = () => {
    onSearchText(searchText)
  }

  return (
    <View style={[styles.container, {
      backgroundColor: theme.colors.primary
    }]}>
      <TextInput
        textAlign='center'
        value={searchText}
        style={styles.search}
        onSubmitEditing={() => onCheckPress()}
        cursorColor={theme.colors.primary}
        onChangeText={text => setSearchText(text)}
        placeholder='Search for: title, date or text'
      />
      <TouchableOpacity
        onPress={() => setSearchText('')}
        style={{ marginStart: 10 }}>
        <FontAwesome6
          size={20}
          name='delete-left' 
          color={theme.colors.textOnPrimary}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    width: '90%',
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  }
})
