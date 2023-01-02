import React, {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput,
    Keyboard,
    SafeAreaView,
    Image,
    TouchableOpacity

} from 'react-native'


import { LoginButton } from '../../component/ButtonComponent'

export default function LoginHomeScreen({navigation}) {

const toGoSignUPBtn =()=>{
  navigation.navigate('Signup')

}

const toGoLoginBtn =()=>{
  navigation.navigate('Nav')
 }

  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.signBtn}>
      <View style ={styles.signUpBtn}>
        <LoginButton text='SIGNUP' on={toGoSignUPBtn}/>
      </View>
      <View style ={styles.loginBtn}>
        <LoginButton text='LOGIN'on={toGoLoginBtn}/>
        </View>
      </View>
    </SafeAreaView>

      )
}

const styles = StyleSheet.create({
container:{
    backgroundColor : '#6A7759',
    flex:1,
},

signBtn:{
  justifyContent: "center",
  alignItems: "center",
  flex:3,
},

signUpBtn:{
  marginBottom: 20,
}


})