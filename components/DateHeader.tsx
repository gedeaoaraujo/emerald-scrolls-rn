import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import DateTimePicker from '@react-native-community/datetimepicker'
import { View, Text, StyleSheet, TouchableOpacity, Platform } from "react-native"

type DateHeaderProps = {
  dateStr: string,
  readOnly?: boolean,
  updateDate?: (date: Date) => {}
}

export const DateHeader = ({ 
  dateStr, readOnly, updateDate 
}: DateHeaderProps) => {
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(dateStr));
  const { t } = useTranslation()
  
  const getDayMonth = (): string => {
    const day = date.getDate()
    let month = date.toLocaleDateString(
      t('language'), { month: 'long' }
    )
    const firstUpper = month.charAt(0).toUpperCase()
    month = `${firstUpper}${month.slice(1)}`
    return `${day}, ${month}`
  }

  const getYearDay = (): string => {
    const year = date.getFullYear()
    const day = date.toLocaleDateString(
      t('language'), { weekday: 'long' }
    )
    return `${year}, ${day}`
  }

  const getHour = (): string => {
    const horas = date.getHours().toString().padStart(2, '0')
    const minutos = date.getMinutes().toString().padStart(2, '0')
    return `${horas}:${minutos}`
  }

  const onChange = (event: any, selectedDate?: Date) => {
    setShow(Platform.OS === 'ios') // No Android fecha após seleção
    if (selectedDate) {
      setDate(selectedDate)
      updateDate?.(selectedDate)
    }
  }

  const openPicker = (mode: string) => {
    if (readOnly) return
    setMode(mode)
    setShow(!show)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={readOnly}
        style={{ flex: 1 }}
        onPress={() => openPicker("date")}>
        <Text style={styles.dayMonth}>{getDayMonth()}</Text>
        <Text style={styles.yearDayWeek}>{getYearDay()}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={readOnly}
        style={{ flex: 1 }}
        onPress={() => openPicker("time")}>
        <Text style={styles.hour}>{getHour()}</Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          value={date}
          mode={mode} // pode ser 'date', 'time' ou 'datetime'
          display="default" // pode ser 'default', 'spinner', 'calendar', etc.
          onChange={onChange}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    flexWrap: 'wrap',
    paddingBottom: 18,
    flexDirection: 'row',
    alignContent: 'space-between',
  },
  dayMonth: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  yearDayWeek: {
    fontSize: 16
  },
  hour: {
    fontSize: 20,
    textAlign: 'right',
    fontWeight: 'bold',
    textAlignVertical: 'bottom',
  }
})
