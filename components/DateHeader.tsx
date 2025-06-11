import { View, Text, StyleSheet } from "react-native"

export const DateHeader = ({ dateStr }) => {
  const date = new Date(dateStr)
  
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

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.dayMonth}>{getDayMonth()}</Text>
        <Text style={styles.yearDayWeek}>{getYearDay()}</Text>
      </View>
      <Text style={styles.hour}>{getHour()}</Text>
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
    flex: 1,
    fontSize: 20,
    textAlign: 'right',
    fontWeight: 'bold',
    textAlignVertical: 'bottom',
  }
})