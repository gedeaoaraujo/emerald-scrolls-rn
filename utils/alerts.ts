import { useTranslation } from "react-i18next";
import { Alert } from "react-native";

export default function Dialog() {
  const { t } = useTranslation()

  const discartChanges = (onYesPress: ()=>void) => {
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