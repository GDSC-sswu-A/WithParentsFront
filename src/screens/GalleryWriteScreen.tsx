import React, {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import DateTimePicker from '@react-native-community/datetimepicker';


import { 
  View, 
  Text, 
  Button, 
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'

import { GreenButton } from '../component/ButtonComponent'
import Home from '../component/DateSelectComponent';
export default function GalleryWriteScreen({navigation}) {

  const toGoGalleryPage = () =>{
    navigation.navigate('Gallery')
  }



  return (
  <SafeAreaView style={styles.container}>
    <View style={styles.selectDate}>
     <Home></Home>
    </View>
    <View style={styles.selectPhoto}></View>
    <View style={styles.writeMemo}></View>
    <View style={styles.continueBtn}>
    <GreenButton text='continue' on={toGoGalleryPage}/>
    </View>

  </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : "white",
   },

   selectDate:{
    flex : 1,
    padding:20,
    },
   selectPhoto:{
    flex : 4,
    backgroundColor: 'yellow',

   },
   writeMemo:{
    flex : 5,
    backgroundColor: 'purple',

   },
   continueBtn:{
    flex : 1,
    left:150
   }
});