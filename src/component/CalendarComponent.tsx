import React from 'react'
import { Calendar } from 'react-native-calendars';
import { StyleSheet } from 'react-native'

export default function CalendarComponent() {

  return (
  <Calendar 
  style={styles.calendar} 
  theme= {{
    selectedDayBackgroundColor: '#6A7759',
    arrowColor : '#6A7759',
    todayTextColor : '#6A7759',
    // dotColor : 'green'
  }}
  />
  )
}

const styles = StyleSheet.create({
    Calendar : {
        borderBottomWidth : 1,
        borderBottomColor : '#e0e0e0'
    }
})