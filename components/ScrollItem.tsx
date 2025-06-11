import { ScrollModel } from "../model/ScrollModel";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { dateTimePtBr } from "../utils/date";

type ScrollItemProps = {
  item: ScrollModel,
  goToScroll: (scroll: ScrollModel) => void
};

export const ScrollItem = (props: ScrollItemProps) => {
  const date = dateTimePtBr(props.item.date)
  return (
    <TouchableOpacity
      onPress={() => props.goToScroll(props.item)}>
        <View style={styles.container}>
          <Text numberOfLines={1} style={styles.title}>{props.item.title}</Text>
          <Text numberOfLines={1} style={styles.date}>{date}</Text>
          <Text numberOfLines={3} style={styles.text}>{props.item.text}</Text>
        </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
  },
  title: {
    fontSize: 18,
    minWidth: '100%',
  },
  date: {
    paddingVertical: 8,
  },
  text: {}
});