import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type ScrollItemProps = {
  props: {
    title: string,
    date: string,
    text: string,
    goToProfile: ()=>void
  },
};

export const ScrollItem = ({props}: ScrollItemProps) => {
  return (
    <TouchableOpacity
      onPress={props.goToProfile}>
        <View style={styles.container}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.date}>{props.date}</Text>
          <Text style={styles.text}>{props.text}</Text>
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