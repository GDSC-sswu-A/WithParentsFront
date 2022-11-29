
import { template } from "@babel/core";
import React from "react";

  import { Text, View,StyleSheet, StatusBar, Systrace, ScrollView, Dimensions } from 'react-native';
  const SCREEN_WIDTH = Dimensions.get("window").width;

  console.log(SCREEN_WIDTH);
  //display
  export default function App(){
    return(
      <View style = {styles.galleyContainer}>
          <View style = {styles.galleyNav}><Text>Galley</Text></View>
          <View style = {styles.galleyMain}><Text>main</Text></View>
          <View style = {styles.writeBtn}><Text>Write</Text></View>
          <View style = {styles.galleyNavBott}><Text>Write</Text></View>

      
      </View>
      );
    }

    const styles = StyleSheet.create({
      galleyContainer:{
      flex:1,
      backgroundColor:"white",
     
     },

     galleyNav:{
      flex:0.7,
      backgroundColor:"#AEC195",
    },

    galleyMain:{
      flex:5,
      backgroundColor:"blue",
    },

    writeBtn:{
      flex:0.7,
      backgroundColor:"yellow",
    },
    galleyNavBott:{
      flex:0.7,
    },
    })
    