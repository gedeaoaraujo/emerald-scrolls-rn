import { Colors } from "../colors"
import { FloatActionBtn } from "./FloatActionBtn"
import { View, Text, StyleSheet, TextInput } from "react-native"

export const PasswordKeyboard = ({ password, onChangePassword }) => (
  <View style={styles.container}>
    <Text style={styles.text}>Digite a sua senha</Text>
    <TextInput
      editable={false}
      value={password}
      secureTextEntry={true}
      style={styles.password}
      onChangeText={onChangePassword}
    />
    <View style={styles.row}>
      <FloatActionBtn text='1' onClick={() => onChangePassword(password + 1)} />
      <FloatActionBtn text='2' onClick={() => onChangePassword(password + 2)} />
      <FloatActionBtn text='3' onClick={() => onChangePassword(password + 3)} />
    </View>
    <View style={styles.row}>
      <FloatActionBtn text='4' onClick={() => onChangePassword(password + 4)} />
      <FloatActionBtn text='5' onClick={() => onChangePassword(password + 5)} />
      <FloatActionBtn text='6' onClick={() => onChangePassword(password + 6)} />
    </View>
    <View style={styles.row}>
      <FloatActionBtn text='7' onClick={() => onChangePassword(password + 7)} />
      <FloatActionBtn text='8' onClick={() => onChangePassword(password + 8)} />
      <FloatActionBtn text='9' onClick={() => onChangePassword(password + 9)} />
    </View>
    <View style={styles.row}>
      <FloatActionBtn text='#' onClick={() => onChangePassword(password + '#')} />
      <FloatActionBtn text='0' onClick={() => onChangePassword(password + 0)} />
      <FloatActionBtn
        icon='delete-left'
        onClick={() => {
          onChangePassword(password.substring(0, password.length - 1))
        }}
      />
    </View>
  </View>
)

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
    textAlign: 'center',
    backgroundColor: Colors.primary
  },
})