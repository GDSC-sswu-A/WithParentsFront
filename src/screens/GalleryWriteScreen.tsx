import React, {useState} from 'react'

import { 
  View, 
  Text, 
  Button, 
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'



export default function GalleryWriteScreen({navigation}) {
  return (
  <SafeAreaView style={styles.container}>
    <View style={styles.selectDate}></View>
    <View style={styles.selectPhoto}></View>
    <View style={styles.writeMemo}></View>
    <View style={styles.continueBtn}></View>


  </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : "white",
    padding : 100,
   },
});
