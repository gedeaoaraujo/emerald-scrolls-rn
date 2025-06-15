import { ScrollModel } from "../model/ScrollModel";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { localizeDateTime } from "../utils/date";
import { useTheme } from "../theme/ThemeContext";

type ScrollItemProps = {
  item: ScrollModel,
  goToScroll: (scroll: ScrollModel) => void
};

export const ScrollItem = (props: ScrollItemProps) => {
  const { theme } = useTheme()
  return (
    <TouchableOpacity
      onPress={() => props.goToScroll(props.item)}>
        <View style={styles.container}>
          <Text numberOfLines={1} style={[styles.title, {
            color: theme.colors.text
          }]}>{props.item.title}</Text>
          <Text numberOfLines={1} style={[styles.date, {
            color: theme.colors.text
          }]}>{localizeDateTime(props.item.date)}</Text>
          <Text numberOfLines={3} style={[styles.text, {
            color: theme.colors.text
          }]}>{props.item.text}</Text>
        </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    minWidth: '100%',
    fontWeight: 'bold',
  },
  date: {
    paddingVertical: 8,
  },
  text: {
    fontSize: 16
  }
});