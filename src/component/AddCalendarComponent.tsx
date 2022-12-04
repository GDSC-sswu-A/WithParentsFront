import { View, Text, StyleSheet, TextInput, Keyboard } from 'react-native'
import React, {useState} from 'react'

import { GreenButton } from './ButtonComponent'

export default function AddCalendarComponent({navigation}) {

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
      <View style={styles.line}>
        <Text style={styles.txt}>TITLE</Text>
        <TextInput
        style = {styles.title}
        ></TextInput>
      </View>

      <View style={styles.line}>
        <Text style={styles.txt}>DATE</Text>
        <TextInput
        style = {styles.title}
        ></TextInput>
      </View>

      <View style={styles.line}>
        <Text style={styles.txt}>TIME</Text>
        <TextInput
        style = {styles.title}
        ></TextInput>
      </View>

      <View style={styles.line}>
        <Text style={styles.txt}>ALERT</Text>
        <TextInput
        style = {styles.title}
        ></TextInput>
      </View>

    </View>

    
  )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#F4F5F3',
        padding : 40,
        borderRadius : 10,
    },
    title : {
        width : 160,
        height : 30,
        borderRadius : 10,
        backgroundColor : '#FCF4D6',
        padding : 10,
        marginLeft : 20
    },
    line : {
        flexDirection : 'row',
        justifyContent: 'space-between',
        marginTop : 20,
        marginBottom : 20
    },
    txt : {
        fontSize : 20,
        fontWeight : '300'
    },
})