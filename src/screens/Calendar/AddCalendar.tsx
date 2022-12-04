import { View, Text, StyleSheet, Keyboard } from 'react-native'
import React, {useState} from 'react'

import AddCalendarComponent from '../../component/AddCalendarComponent'
import { GreenButton } from '../../component/ButtonComponent';
export default function AddCalendar({navigation}) {

  const [text, setText] = useState('');

  const Input = ()=>{
    setText('');
    Keyboard.dismiss();
    console.log(text)
}

const Cancle = ()=>{
    if (navigation?.canGoBack()){
        navigation.goBack()
        return true
    }
    return false
}


  return (
    <View style={styles.container}>
        <View style={styles.view}>
        <AddCalendarComponent />
        </View>
        <View style={styles.btn}>
      <GreenButton text='Cacle' on={Cancle}/>
        <GreenButton text='OK' on={Input}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: 'white',
        alignItems : 'center'
    },
    view : {
        marginTop : 100,
        height : 370
    },
    btn :{
      marginTop : 50,
      width : 250,
      flexDirection : 'row',
      justifyContent: 'space-between'
    }
    
})