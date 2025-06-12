import { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'
import { View, Text, StyleSheet, TouchableOpacity, Platform } from "react-native"

export const DateHeader = ({ dateStr }) => {
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(dateStr));
  
  const getDayMonth = (): string => {
    const day = date.getDate()
    let month = date.toLocaleDateString('pt-BR', { month: 'long' })
    month = `${month.charAt(0).toUpperCase()}${month.slice(1)}`
    return `${day}, ${month}`
  }

  const getYearDay = (): string => {
    const year = date.getFullYear()
    const day = date.toLocaleDateString('pt-BR', { weekday: 'long' })
    return `${year}, ${day}`
  }

  const getHour = (): string => {
    const horas = date.getHours().toString().padStart(2, '0')
    const minutos = date.getMinutes().toString().padStart(2, '0')
    return `${horas}:${minutos}`
  }

  const onChange = (event: any, selectedDate?: Date) => {
    setShow(Platform.OS === 'ios') // No Android fecha após seleção
    if (selectedDate) setDate(selectedDate)
  }

  const openPicker = (mode: string) => {
    setMode(mode)
    setShow(!show)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => openPicker("date")}>
        <Text style={styles.dayMonth}>{getDayMonth()}</Text>
        <Text style={styles.yearDayWeek}>{getYearDay()}</Text>
      </TouchableOpacity>
      <TouchableOpacity
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