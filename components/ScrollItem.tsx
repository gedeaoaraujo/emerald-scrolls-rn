import { ScrollModel } from "../model/ScrollModel";
import { localizeDateTime } from "../utils/date";
import { useTheme } from "../theme/ThemeContext";
import { FontAwesome6 } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
          <View style={[styles.row]}>
            <FontAwesome6 style={styles.scroll} 
              name='scroll' size={15} color='green'/>
            <Text numberOfLines={1} style={[styles.title, {
              color: theme.colors.text
            }]}>{props.item.title}</Text>
          </View>

          <View style={styles.row}>
            <FontAwesome6 style={styles.clock} 
              name='clock' size={15} color='green'/>
            <Text numberOfLines={1} style={[styles.date, {
              color: theme.colors.text
            }]}>{localizeDateTime(props.item.date)}</Text>
          </View>
          
          <View style={{ marginEnd: 20 }}>
            <Text numberOfLines={3} style={[styles.text, {
              color: theme.colors.text
            }]}>{props.item.text}</Text>
          </View>
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
    marginEnd: 25,
    fontWeight: 'bold',
  },
  date: {
    paddingVertical: 8,
  },
  text: {
    fontSize: 16
  },
  row: {
    paddingEnd: 20,
    flexDirection: 'row',
  },
  scroll: {
    marginEnd: 8,
    textAlignVertical: 'center'
  },
  clock: { 
    marginEnd: 10,
    textAlignVertical: 'center'
  }
});