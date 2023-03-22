import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { 
  View, 
  Text, 
  Button, 
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'

import { GreenButton } from '../../component/ButtonComponent'

export default function Gallery({navigation}) {
 
 const toGoWritePage = () =>{
  navigation.navigate('GalleryWrite')
 }
 
 
  return (
    <SafeAreaView style = {styles.galleyContainer}>
       <View style ={styles.MainSection}>
       </View>
       <View style ={styles.btnContainer}>
       <GreenButton text='Write' on={toGoWritePage}/>
       </View>
      </SafeAreaView>

  )
}


const styles = StyleSheet.create({
  galleyContainer:{
    flex : 1,
    alignItems : 'center'
  },

  MainSection:{
    flex:4,
    alignItems : 'center'
  },

  btnContainer:{
    flex:0.5,
    left:120,


  }
})

