
import { template } from "@babel/core";
import React from "react";
import {Text, View,StyleSheet, StatusBar,Image,Systrace, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import MyButton from "./src/component/MyButton"; 
// import home_img from "./src/img/home.jpg";
// import home from "./src/img/home.jpg"

const SCREEN_WIDTH = Dimensions.get("window").width;
  console.log(SCREEN_WIDTH);
  //display
  export default function App(){
    return(
      <View style = {styles.galleyContainer}>
          <View style = {styles.galleyNav}>
          <Text style = {styles.GalNavfont}>FamilyGalley</Text>
          </View>
          <View style = {styles.galleyMain}><Text></Text>
          </View>
          <View style ={styles.section3}>
          <TouchableOpacity style = {styles.writeBtn}>
          <Text style = {styles.writeText} >Write</Text>  
          </TouchableOpacity>
          </View>
            <MyButton/>
          <View style = {styles.galleyNavBott}>
          <Image source= {require("./src/img/home.jpg"
          )}/>


          </View>
      </View>
      );
    }

    const styles = StyleSheet.create({
      galleyContainer:{
      flex:1,
      backgroundColor:"white",
     },

     galleyNav:{
      flex:0.6,
      backgroundColor:"#AEC195",
      alignItems:"center",
      justifyContent:"center",
    },

    galleyMain:{
      flex:5,
    },
    section3:{
      flex:0.7,
    },
    galleyNavBott:{
      flex:0.7,
      backgroundColor:"#AEC195",

    },
    GalNavfont:{
      fontSize:28,
      color:"white",
    },
    writeBtn:{
      backgroundColor: '#6A7759',
      padding: 16,
      margin: 10,
      width:85,
      height:55,
      borderRadius: 8,
      borderRadius:15,
      left:280,
    },
    writeText:{
      color:"white",
      fontSize:22,
      bottom:5,
    }
  })
    