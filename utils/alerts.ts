import { Alert } from "react-native";

function Dialog() {

  const discartChanges = (t: any, onYesPress: ()=> void) => {
    Alert.alert(
      t('dialog.discart.title'),
      t('dialog.discart.message'),
      [{
        text: t('yes'),
        onPress: () => onYesPress()
      }, {
        text: t('no'),
        style: 'cancel',
        onPress: () => { }
      }]
    )
  }

  return {
    discartChanges
  }

}

export default Dialog()