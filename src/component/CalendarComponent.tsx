import React, {useState, useEffect} from 'react'
import { format } from "date-fns";
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
  const [change, setChange] = useState(false);
  const [schedule, setSchedule] = useState(null)
  const [month, setMonth] = useState(2);
  const [year, setYear] = useState(2023);

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
    <>
    <Calendar 
    style={styles.calendar} 
    onMonthChange={month => {
      setMonth(month.month)
      setYear(month.year)
    }}
    markedDates={markedSelectedDates? markedSelectedDates:null}
    theme= {{
      selectedDayBackgroundColor: '#6A7759',
      arrowColor : '#6A7759',
      todayTextColor : 'red',
      dotColor : '#6A7759',
      textMonthFontWeight: 'bold',
      textDayFontSize: 18,
      textMonthFontSize: 16,
      textDayHeaderFontSize: 16
    }}
    />
        <TouchableOpacity
      style={styles.change}
      onPress={()=>setChange(!change)}>
        <Text style={{textAlign : 'center', color: 'white'}}>Refresh</Text>
    </TouchableOpacity>
    <ScrollView>
        {schedule && schedule.map((d,i)=>{
        return(
          <ScheduleList key={i} data={d}/>
        )
      })}
      </ScrollView>
    </>
  
  )
}

const styles = StyleSheet.create({
    Calendar : {
        borderBottomWidth : 1,
        borderBottomColor : '#e0e0e0',
    },
    change: {
      backgroundColor: '#6A7759',
      width: 60,
      height: 30,
      borderRadius: 20,
      justifyContent: 'center',
      margin: 10,
    },  
    list : {
      padding: 15,
      margin: 1,
      flexDirection : 'row',
      justifyContent: 'space-between',
      backgroundColor: '#EFF3EA',
    },
    listDate : {
      marginBottom: 10,
    },
    title : {
      color : '#6A7759',
      fontSize: 18
    }
})