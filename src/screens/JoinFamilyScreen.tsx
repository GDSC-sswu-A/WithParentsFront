import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { GreenButton } from '../component/ButtonComponent'
import { GreenInput } from '../component/InputComponent'

const JoinFamilyScreen = () => {
  return (
    <View style={styles.container}>

      <Text style={styles.txt}>Enter the code</Text>
      <GreenInput/>

    <View style={styles.btn}>
        <GreenButton text='Cacle'/>
        <GreenButton text='OK'/>
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
    }
})