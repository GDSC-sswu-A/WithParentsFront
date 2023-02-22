import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'

import CalendarComponent from '../../component/CalendarComponent';
import { AddButton } from '../../component/ButtonComponent';
import ModalComponent from '../../component/ModalComponent';

import { getScheduleList } from '../../common/CalendarApi';

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

export default function Calender({navigation}) {
  const [change, setChange] = useState(false);
  const [ schedule, setSchedule] = useState(null)
  useEffect (() => {
    const getList = async () => {
        const result = await getScheduleList();
        setSchedule(result);
    };
    getList();
}, [change]);

  return (
    <View style={styles.container}>
      <CalendarComponent  />
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
  },
  change: {
    backgroundColor: '#6A7759',
    width: 60,
    height: 30,
    borderRadius: 20,
    justifyContent: 'center',
    margin: 10,
  }

});