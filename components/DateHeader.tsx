import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import DateTimePicker from '@react-native-community/datetimepicker'
import { View, Text, StyleSheet, TouchableOpacity, Platform } from "react-native"
import { useTheme } from '../theme/ThemeContext'

type DateHeaderProps = {
  dateStr: string,
  readOnly?: boolean,
  updateDate?: (date: Date) => void
}

type AndroidMode = 'date'|'time'|undefined

export const DateHeader = ({ 
  dateStr, readOnly, updateDate 
}: DateHeaderProps) => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(dateStr));
  const [mode, setMode] = useState<AndroidMode>("date");
  
  const { theme } = useTheme()
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
    const language = t('language')
    return date.toLocaleTimeString(
      language, { hour12: isHour12(),  hour: '2-digit', minute: '2-digit' }
    )
  }

  const isHour12 = (): boolean => {
    const language = t('language')
    return language === 'pt-BR' ? false : true
  }

  const onChange = (event: any, selectedDate?: Date) => {
    setShow(Platform.OS === 'ios')
    if (selectedDate) {
      setDate(selectedDate)
      updateDate?.(selectedDate)
    }
  }

  const openPicker = (mode: AndroidMode) => {
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
        <Text style={[styles.dayMonth, {
          color: theme.colors.text
        }]}>{getDayMonth()}</Text>
        <Text style={[styles.yearDayWeek, {
          color: theme.colors.text
        }]}>{getYearDay()}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={readOnly}
        style={{ flex: 1 }}
        onPress={() => openPicker("time")}>
        <Text style={[styles.hour, {
          color: theme.colors.text
        }]}>{getHour()}</Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          value={date}
          mode={mode}
          display="default"
          onChange={onChange}
          is24Hour={!isHour12()}
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
