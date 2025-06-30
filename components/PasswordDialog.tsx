import { useTheme } from "../theme/ThemeContext"
import { useTranslation } from "react-i18next"
import { useState } from "react"
import Dialog from "../utils/alerts";
import { 
  StyleSheet, Text, TouchableOpacity, View, TextInput 
} from "react-native"

export default function PasswordDialog({
  visible = false,
  onOk = (_: string)=>{},
  onCancel = (_: boolean)=>{},
}){
  const { theme } = useTheme()
  const { t } = useTranslation()
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')

  const onOkPressed = () => {
    if (password !== confirmPass){
      Dialog.notify(t, 'settings.password.wrong')
    } else {
      onOk(password)
      setPassword('')
      setConfirmPass('')
      Dialog.notify(t, 'settings.password.changed')
    }
  }

  const onCancelPressed = () => {
    setPassword('')
    setConfirmPass('')
    onCancel(false)
  }

  return (
    <>{!visible ? <></> :
      <View style={styles.background}>
        <View style={[styles.card, {
          backgroundColor: theme.colors.primary
        }]}>
          <Text style={[styles.title, {
            color: theme.colors.textOnPrimary 
          }]}>
            {t('dialog.title')}
          </Text>

          <Text style={{
            width: '100%',
            color: theme.colors.textOnPrimary
          }}>
            {t('dialog.first.password')}
          </Text>
          <TextInput
            editable
            value={password}
            keyboardType="numeric"
            secureTextEntry={true}
            style={styles.password}
            onChangeText={setPassword}
          />

          <Text style={{
            width: '100%',
            marginTop: 20,
            color: theme.colors.textOnPrimary 
          }}>
            {t('dialog.second.password')}
          </Text>
          <TextInput
            editable
            value={confirmPass}
            secureTextEntry={true}
            keyboardType="numeric"
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
            }} onPress={() => onCancelPressed()}>
              <Text style={{
                textAlign: 'center',
                color: theme.colors.textOnPrimary
              }}>{t('dialog.cancel')}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={{
              padding: 8,
              marginTop: 16,
              borderRadius: 10
            }} onPress={() => onOkPressed()}>
              <Text style={{
                textAlign: 'center',
                color: theme.colors.textOnPrimary
              }}>{t('dialog.ok')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View> }
    </>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '120%',
    height: '120%',
    position: 'absolute',
    backgroundColor: '#000000aa',
  },
  card: {
    top: '15%',
    start: '13%',
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