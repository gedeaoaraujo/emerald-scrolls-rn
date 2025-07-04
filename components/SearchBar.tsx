import { useState } from "react"
import { useTranslation } from "react-i18next";
import { useTheme } from "../theme/ThemeContext"
import { FontAwesome6 } from '@expo/vector-icons';
import { useScrolls } from "../contexts/ScrollsContext";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native"

export const SearchBar = () => {
  const { theme } = useTheme()
  const { t } = useTranslation()
  const { onSearchText } = useScrolls()
  const [searchText, setSearchText] = useState('')

  const onCheckPress = () => {
    onSearchText(searchText)
  }

  const onClearText = () => {
    onSearchText('')
    setSearchText('')
  }

  return (
    <View style={[styles.container, {
      backgroundColor: theme.colors.primary
    }]}>
      <TextInput
        textAlign='center'
        value={searchText}
        style={styles.search}
        placeholderTextColor='black'
        cursorColor={theme.colors.primary}
        placeholder={t('search.placeholder')}
        onSubmitEditing={() => onCheckPress()}
        onChangeText={text => setSearchText(text)}
      />
      <TouchableOpacity
        onPress={() => onClearText()}
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
