import React, {useState} from 'react'
import { StyleSheet, Text, View, Keyboard, TextInput } from 'react-native'

import { GreenButton } from '../component/ButtonComponent'

const JoinFamilyScreen = ({navigation}) => {

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

      <Text style={styles.txt}>Enter the code</Text>

      <View style={styles.Green}>
        <TextInput 
        style={styles.input}
        value={text}
        onChangeText={setText}
        onSubmitEditing={Input}
        returnKeyType="done"
        />
        </View>    
      

    <View style={styles.btn}>
      <GreenButton text='Cacle' on={Cancle}/>
        <GreenButton text='OK' on={Input}/>
        </View>
    </View>
    

  )
}

export default JoinFamilyScreen

const styles = StyleSheet.create({
    container : {
        padding : 20,
        paddingTop : 100,
        flex : 1,
        backgroundColor : 'white',
        alignItems : 'center'
    },
    txt :{
        fontSize : 20,
        fontWeight : '300',
        marginBottom: 60
    },
    btn :{
        marginTop : 180,
        width : 250,
        flexDirection : 'row',
        justifyContent: 'space-between'
    },
    Green : {
      alignItems : 'center',
      borderRadius : 10,
      width : 208,
      height : 40,
      backgroundColor : "#EFF3EA",
  },
  input : {
      width : 180,
      height : 40,
  }
})