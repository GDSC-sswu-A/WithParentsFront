import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'

import CalendarComponent from '../../component/CalendarComponent';
import { AddButton } from '../../component/ButtonComponent';
import ModalComponent from '../../component/ModalComponent';

import { getScheduleList } from '../../common/CalendarApi';

function ScheduleList(data) {
  // console.log(data)
  return(
      <View style = {styles.list}>
        <View>
          <Text>{data.data.date}</Text>
          <Text>{data.data.title}</Text> 
        </View>
        <ModalComponent data={data.data}/>
          {/* <TouchableOpacity
          onPress={() => {}}
          >
            <Text>button</Text>
          </TouchableOpacity> */}
      </View>
  )
}

export default function Calender({navigation}) {
  const [ schedule, setSchedule] = useState(null)
  useEffect (() => {
    const getList = async () => {
        const result = await getScheduleList();
        setSchedule(result);
    };
    getList();
},[schedule]);

  return (
    <View style={styles.container}>
      <CalendarComponent  />
      <ScrollView>
        {schedule && schedule.map((d,i)=>{
        return(
          <ScheduleList key={i} data={d}/>
        )
      })}
      </ScrollView>
      <TouchableOpacity
      style={styles.bottom}
      onPress={() => navigation.navigate('AddCalendar')}
      >
       <AddButton on={undefined} />
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : "white",
  },
  bottom : {
    flex : 1,
    height : 60,
    position : 'absolute',
    bottom: 0,
    right : 0,
    margin : 20
  },
  list : {
    padding: 15,
    margin: 1,
    flexDirection : 'row',
    justifyContent: 'space-between',
    backgroundColor: '#EFF3EA',
  }

});