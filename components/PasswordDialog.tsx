import { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { useTheme } from "../theme/ThemeContext"

export const PasswordDialog = ({
  onOk = ()=>{},
  visible = false,
  onCancel = (_: boolean)=>{},
}) => {
  const { theme } = useTheme()
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')

  return (
    <>
      {!visible ? <></> : <View style={[styles.card, {
        backgroundColor: theme.colors.primary
      }]}>
        <Text style={[styles.title, {
          color: theme.colors.textOnPrimary 
        }]}>
          Mudar senha
        </Text>

        <Text style={{
          width: '100%',
          color: theme.colors.textOnPrimary
        }}>
          Digite sua senha:
        </Text>
        <TextInput
          editable
          value={password}
          style={styles.password}
          onChangeText={setPassword}
        />

        <Text style={{
          width: '100%',
          marginTop: 20,
          color: theme.colors.textOnPrimary 
        }}>
          Confirme sua senha:
        </Text>
        <TextInput
          editable
          value={confirmPass}
          style={styles.password}
          onChangeText={setConfirmPass}
        />

        <View style={{
          minWidth: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <TouchableOpacity style={{
            padding: 10,
            marginTop: 16,
            borderRadius: 10,
          }} onPress={() => onCancel(false)}>
            <Text style={{
              textAlign: 'center',
              color: theme.colors.textOnPrimary
            }}>Cancelar</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={{
            padding: 8,
            marginTop: 16,
            borderRadius: 10
          }} onPress={() => onOk()}>
            <Text style={{
              textAlign: 'center',
              color: theme.colors.textOnPrimary
            }}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>}
    </>
  )
}

const styles = StyleSheet.create({
  card: {
    top: '15%',
    start: '15%',
    width: 300,
    height: 300,
    padding: 30,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: 'gray',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 18,
    fontWeight: 'bold',
  },
  password: {
    marginTop: 8,
    width: '100%',
    borderRadius: 10,
    backgroundColor: 'white'
  }
})