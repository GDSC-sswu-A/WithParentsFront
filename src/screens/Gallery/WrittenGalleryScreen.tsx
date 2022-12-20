import React, {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import App from '../../component/deleteModal'

import { 
  View, 
  Text, 
  Button, 
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'

const {width, height} = Dimensions.get('screen');

//<Icon name="delete" size={35}  color="red" />   


export default function WrittenGalleryScreen ({navigation}) {


  const [name, setName] = useState('')


  return (
  <SafeAreaView style={styles.container}>
  <View style={styles.ContainerBackground}>

     <View style={styles.textNav}>
    <Text>미뇽이 | 2022/12/20</Text>
     </View>
     <View style={styles.selectPhoto}>
      
     </View>
    <View style= {styles.userText}>

    </View>
    <View style={styles.TextBot}>
      <Text> ___________________________________________</Text>
      <View style ={styles.icons}>
      <App></App> 
      </View>
      </View>
    </View>
  </SafeAreaView>
  );
  

}

const styles = StyleSheet.create({
  container : {
    flex : 1,
  /*  justifyContent: "center",
    alignItems: "center",
    width:width-30,
    height:height-1000,
    backgroundColor : "#EFF3EA",*/

   },
   ContainerBackground:{
    width:width-55,
    height:height-150,
    backgroundColor : "#EFF3EA",
    padding:30,
    marginLeft:15,
    justifyContent: "center",
    alignItems: "center",
  },
   textNav:{
    padding:15,
   },
   selectPhoto:{
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'gray',
    height : 100,
    width : 280,
    flex:2.5,
    left:20,
  },
   
   userText:{
    flex:3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor : "#EFF3EA",

   },

   TextBot:{
    flex:0.8,
    backgroundColor: '#EFF3EA',
    left:20,
   },
   icons:{
   }

   
  
});