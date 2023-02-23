import React, {useState} from 'react'
import { format } from "date-fns";
import { Calendar } from 'react-native-calendars';
import { StyleSheet, View } from 'react-native'

export default function CalendarComponent(data) {
  const posts = data.data
  let markedSelectedDates
  if(posts != null){
    const markedDates = posts.reduce((acc, current) => {
    const formattedDate = format(new Date(current.date), 'yyyy-MM-dd');
    acc[formattedDate] = {marked: true};
    return acc;
  }, {});
  
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), "yyyy-MM-dd"),
  );
  const markedSelectedDate = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      marked: markedDates[selectedDate]?.marked,
    }
  }
  markedSelectedDates = markedSelectedDate
  }
  console.log(markedSelectedDates)
  
  return (
  <Calendar 
  style={styles.calendar} 
  markedDates={markedSelectedDates? markedSelectedDates:null}
  theme= {{
    selectedDayBackgroundColor: '#6A7759',
    arrowColor : '#6A7759',
    todayTextColor : '#6A7759',
    dotColor : '#6A7759'
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