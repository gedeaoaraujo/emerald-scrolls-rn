import { Alert } from "react-native";

function Dialog() {

  const discartChanges = (t: any, onYesPress: ()=> void) => {
    Alert.alert(
      t('dialog.discart.title'),
      t('dialog.discart.message'),
      [{
        text: t('no'),
        style: 'cancel',
        onPress: () => { }
      },{
        text: t('yes'),
        onPress: () => onYesPress()
      }]
    )
  }

  const deleteScroll = (t: any, onYesPress: ()=> void) => {
    Alert.alert(
      t('dialog.delete.title'),
      t('dialog.delete.message'),
      [{
        text: t('no'),
        style: 'cancel',
        onPress: () => { }
      },{
        text: t('yes'),
        onPress: () => onYesPress()
      }]
    )
  }

  return {
    discartChanges,
    deleteScroll
  }

}

export default Dialog()