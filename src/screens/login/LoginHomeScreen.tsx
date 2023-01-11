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
    <View style ={styles.Logo}>
    <Image 
      style = {styles.LogoImage}
      source={require("../../img/withParents.png")}/>

    </View>

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

LogoImage:{
width:270,
height:35
},


Logo:{
  flex:3,
  justifyContent: "center",
  alignItems: "center",
  //backgroundColor : 'yellow',

},

signBtn:{
  justifyContent: "center",
  alignItems: "center",
  flex:2,
  marginBottom:100,
},

signUpBtn:{
  marginBottom: 20,
}


})