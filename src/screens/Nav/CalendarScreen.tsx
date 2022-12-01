import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import CalendarComponent from '../../component/CalendarComponent';

export default function Calender() {
  return (
    <View style={styles.container}>
      <CalendarComponent />
      
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : "white"
  }

});