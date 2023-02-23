import React, {useState, useEffect} from 'react'
import { format } from "date-fns";
import { Calendar } from 'react-native-calendars';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native'
import { getScheduleList } from '../common/CalendarApi'
import ModalComponent from './ModalComponent';

function ScheduleList(data) {
  return(
      <View style = {styles.list}>
        <View>
          <Text>{data.data.date}</Text>
          <Text>{data.data.title}</Text> 
        </View>
        <ModalComponent data={data.data}/>
      </View>
  )
}

export default function CalendarComponent() {
  const [change, setChange] = useState(false);
  const [ schedule, setSchedule] = useState(null)
  const [month, setMonth] = useState(2);
  const [year, setYear] = useState(2023);

  useEffect (() => {
    const getList = async () => {
        const result = await getScheduleList(year, month);
        setSchedule(result);
    };
    getList();
}, [year, month, change]);
  const posts = [{"creatorId": 1, "date": "2023-02-22", "id": 49, "notificationStatus": null, "time": "18:02:00", "title": "테스트2"}, {"creatorId": 1, "date": "2023-02-22", "id": 51, "notificationStatus": null, "time": "18:02:00", "title": "2월"}, {"creatorId": 1, "date": "2023-02-25", "id": 53, "notificationStatus": null, "time": "18:02:00", "title": "test"}]
  let markedSelectedDates
  if(posts != null){
    const markedDates = posts.reduce((acc, current) => {
    const formattedDate = format(new Date(current.date), 'yyyy-MM-dd');
    acc[formattedDate] = {marked: true};
    return acc;
  }, {});
  
  // const [selectedDate, setSelectedDate] = useState(
  //   format(new Date(), "yyyy-MM-dd"),
  // );
  // const markedSelectedDate = {
  //   ...markedDates,
  //   [selectedDate]: {
  //     selected: true,
  //     marked: markedDates[selectedDate]?.marked,
  //   }
  // }
  markedSelectedDates = markedDates
  }
  console.log(markedSelectedDates)
  
  return (
    <>
    <Calendar 
    style={styles.calendar} 
    onDayPress={day=>{
      console.log('selected day', day);
    }}
    onMonthChange={month => {
      console.log('month changed', month);
      setMonth(month.month)
      setYear(month.year)
    }}
    markedDates={markedSelectedDates? markedSelectedDates:null}
    theme= {{
      selectedDayBackgroundColor: '#6A7759',
      arrowColor : '#6A7759',
      todayTextColor : '#6A7759',
      dotColor : '#6A7759'
    }}
    />
    <TouchableOpacity
      style={styles.change}
      onPress={()=>setChange(!change)}>
        <Text style={{textAlign : 'center', color: 'white'}}>새로고침</Text>
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
})