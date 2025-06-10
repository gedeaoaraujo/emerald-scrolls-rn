import { useState } from "react"
import { Colors } from "../colors"
import { View, Text, StyleSheet, TextInput } from "react-native"
import { FloatActionBtn } from "./FloatActionBtn"

export const PasswordKeyboard = () => {
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Digite a sua senha</Text>
      <TextInput
        editable={false}
        value={password}
        secureTextEntry={true}
        style={styles.password}
        onChangeText={setPassword}
      />
      <View style={styles.row}>
        <FloatActionBtn text='1' onClick={()=>setPassword(password+1)} />
        <FloatActionBtn text='2' onClick={()=>setPassword(password+2)} />
        <FloatActionBtn text='3' onClick={()=>setPassword(password+3)} />
      </View>
      <View style={styles.row}>
        <FloatActionBtn text='4' onClick={()=>setPassword(password+4)} />
        <FloatActionBtn text='5' onClick={()=>setPassword(password+5)} />
        <FloatActionBtn text='6' onClick={()=>setPassword(password+6)} />
      </View>
      <View style={styles.row}>
        <FloatActionBtn text='7' onClick={()=>setPassword(password+7)} />
        <FloatActionBtn text='8' onClick={()=>setPassword(password+8)} />
        <FloatActionBtn text='9' onClick={()=>setPassword(password+9)} />
      </View>
      <View style={styles.row}>
        <FloatActionBtn text='#' onClick={()=>setPassword(password+'#')} />
        <FloatActionBtn text='0' onClick={()=>setPassword(password+0)} />
        <FloatActionBtn
          icon='delete-left'
          onClick={()=>{
            setPassword(password.substring(0, password.length-1))}
          }
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    maxHeight: 450,
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
  },
  password: {
    width: 200,
    padding: 6,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    borderColor: '#ccc',
    color: Colors.white,
    backgroundColor: Colors.primary
  },
})