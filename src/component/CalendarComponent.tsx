import React from 'react'
import { Calendar } from 'react-native-calendars';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native'
import { getScheduleList } from '../common/CalendarApi';
import ModalComponent from './ModalComponent';

function ScheduleList(data) {
  const listDate = data.data.date.split('-');
  // console.log(listDate)
  return(
      <View style = {styles.list}>
        <View>
          <Text style={styles.listDate}>Day {listDate[2]} | {data.data.nickname}</Text>
          <Text style={styles.title}>{data.data.title}</Text> 
        </View>
        <ModalComponent data={data.data}/>
      </View>
  )
}

export default function CalendarComponent() {
  var today = new Date();
  var initmonth = format(new Date(), "M")
  var  inityear= format(new Date(), "yyyy")
  console.log(initmonth, inityear)

  const [change, setChange] = useState(false);
  const [schedule, setSchedule] = useState(null)
  const [month, setMonth] = useState(initmonth);
  const [year, setYear] = useState(inityear);

  useEffect (() => {
    const getList = async () => {
      console.log("#####222222", year, month)
        const result = await getScheduleList(year, month);
        setSchedule(result);
    };
    getList();
}, [year, month, change]);

  // console.log('hi', schedule)
  let markedSelectedDates
  // if(schedule != 'undefined'){
  //   const markedDates = schedule.reduce((acc, current) => {
  //   const formattedDate = format(new Date(current.date), 'yyyy-MM-dd');
  //   acc[formattedDate] = {marked: true};
  //   return acc;
  // }, {});
  
  // markedSelectedDates = markedDates
  // }
  // console.log(markedSelectedDates)
  
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