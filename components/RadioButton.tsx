import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export const RadioButton = ({ label, selected, onPress, style = {} }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.radioContainer}>
      <View style={[
        styles.outerCircle,
        selected && styles.outerCircleSelected
      ]}>
        {selected && <View style={styles.innerCircle} />}
      </View>
      <Text style={[styles.label, style]}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  radioContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  outerCircle: {
    width: 15,
    height: 15,
    marginRight: 8,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#555',
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerCircleSelected: {
    borderColor: '#007AFF'
  },
  innerCircle: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: '#007AFF'
  },
  label: {
    fontSize: 16
  }
})