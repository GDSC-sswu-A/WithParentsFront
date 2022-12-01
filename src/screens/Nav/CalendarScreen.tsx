import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'

import CalendarComponent from '../../component/CalendarComponent';
import { AddButton } from '../../component/ButtonComponent';

export default function Calender({navigation}) {

  return (
    <View style={styles.container}>
      <CalendarComponent  style={styles.calendar}/>
      <TouchableOpacity
      style={styles.bottom}
      onPress={() => navigation.navigate('AddCalendar')}
      >
       <AddButton />
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : "white",
  },
  calendar : {
  },
  bottom : {
    flex : 1,
    height : 60,
    position : 'absolute',
    bottom: 0,
    right : 0,
    margin : 20
  }

});