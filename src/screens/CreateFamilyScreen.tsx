import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { GreenButton, WhiteButton } from '../component/ButtonComponent';


const code = { code : 'dsawr'};

export default function CreateFamilyScreen() {
  return (
    <View style={styles.container}>

        <Text style={styles.txt}>Family Code</Text>
        <Text style={styles.txt}>[  {code.code} ]</Text>

        <View style={styles.passwd}>
        <Text style={styles.txt}>Enter the Password</Text>
        <Text>input 자리</Text>
        </View>

        <Text style={styles.ex}>Each family gets one code.</Text>
        <Text style={styles.ex}>Please register as a family.</Text>
        

        <View style={styles.btn}>
        <GreenButton text='Cacle'/>
        <GreenButton text='OK'/>
        </View>
        
        
        
    </View>
  )
}

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
        marginBottom: 15
    },
    passwd : {
        margin : 50,
        alignItems : 'center'
    },
    ex : {
        fontSize : 15,
        fontWeight : '400',
        marginBottom: 5,
        color : 'gray'
    },
    btn :{
        marginTop : 70,
        width : 250,
        flexDirection : 'row',
        justifyContent: 'space-between'
    }
})