import { View, Text, StyleSheet } from "react-native"
import { FloatActionBtn } from "./FloatActionBtn"

export const PasswordKeyboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Digite a sua senha</Text>
      <View style={styles.row}>
        <FloatActionBtn text='1' onClick={()=>{}} />
        <FloatActionBtn text='2' onClick={()=>{}} />
        <FloatActionBtn text='3' onClick={()=>{}} />
      </View>
      <View style={styles.row}>
        <FloatActionBtn text='4' onClick={()=>{}} />
        <FloatActionBtn text='5' onClick={()=>{}} />
        <FloatActionBtn text='6' onClick={()=>{}} />
      </View>
      <View style={styles.row}>
        <FloatActionBtn text='7' onClick={()=>{}} />
        <FloatActionBtn text='8' onClick={()=>{}} />
        <FloatActionBtn text='9' onClick={()=>{}} />
      </View>
      <View style={styles.row}>
        <FloatActionBtn text='0' onClick={()=>{}} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300,
    maxHeight: 300,
    paddingTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
    paddingBottom: 16
  },
  row: {
    padding: 10,
    flexDirection: 'row'
  },
  button: {
    padding: 20,
    fontSize: 20,
  }
})