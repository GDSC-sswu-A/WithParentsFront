import React, {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Dimensions } from "react-native";


import { 
  View, 
  Text, 
  Button, 
  SafeAreaView,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native'

//화면의 높이
Dimensions.get('window').height
//화면의 너비
Dimensions.get('window').width
import { GreenButton } from '../../component/ButtonComponent'
import { GrayButton } from '../../component/ButtonComponent'
import { YellowButton } from '../../component/ButtonComponent';
import DateTimePickerModal from '../../component/DateTimePickerModal';
import App from '../../component/meditimesmodal'

export default function AddmedipageScreen({navigation}) {

    const toGoWritePage = () =>{
        navigation.navigate('GalleryWrite')
       }

    const SelectTimes = () =>{
     <App></App>
      
    }

    const [mediValue, setMediValue] = React.useState("");
    const [userValue, setUserValue] = React.useState("");
    const [mediTimes, setMediTimes] = React.useState("");

//버튼을 누르면 노랑색 누르지 않는다면 회색
  return (
  <SafeAreaView style={styles.container}>
    <View style = {styles.greenContainer}>
        <View style = {styles.selectUser}>
          <Text style ={styles.fontStyle}>Whose medicine is it in the family?</Text>
          <TextInput
            style={styles.input}
            value={userValue}
            onChange={(event) => {
              const {eventCount, target, text} = event.nativeEvent;
          //onChange={(event) => console.log(event.nativeEvent.text)}
          setUserValue(text);
        }}
      />
        </View>
        <View style = {styles.medicineName}>
          <Text style ={styles.fontStyle}>The name of the medicine</Text>
          <TextInput
          style={styles.input}
          value={mediValue}
          onChange={(event) => {
            const {eventCount, target, text} = event.nativeEvent;
            //onChange={(event) => console.log(event.nativeEvent.text)}
            setMediValue(text);
          }}

      />
        </View>
        <View style ={styles.medicineWeek}>
          <Text style ={styles.fontStyle}>What day do you take it?</Text>
           <View style ={styles.weekBtn}>
          <GrayButton text='월'></GrayButton>
          <GrayButton text='화'></GrayButton>
          <GrayButton text='수'></GrayButton>
          <GrayButton text='목'></GrayButton>
          <GrayButton text='금'></GrayButton>
          <GrayButton text='토'></GrayButton>
          <GrayButton text='일'></GrayButton>

          </View>
        </View>
        <View style ={styles.footer}>
        <Text style ={styles.fontStyle}>Take it several times a day?</Text>
          <View style ={styles.selectTimes}>
            <YellowButton  text={mediTimes} on={SelectTimes}>
            </YellowButton>
            <Text>Times</Text>
          </View>
          <View style = {styles.dosingTime}>
            <View style={styles.selectTime}>
            <Text>Time 1</Text>
            </View>
          </View>
        </View>
      
  </View>
  <View style ={styles.AddmediBtn}>
  <GreenButton text='continue' on={toGoWritePage}/>
</View>
 
  </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container : {
    flex : 1,
    padding:20,
   },

   selectUser:{
    flex:1.3,
   },

   medicineName:{
    flex:1.3,
   },
   medicineWeek:{
    flex:1.4,
   },
   weekBtn:{
    flexDirection: 'row',
    padding:10
   },
   footer:{
    flex:2.5,
   },
   fontStyle:{
    fontSize:Dimensions.get('window').width / 23,
    color : 'black',
    marginBottom:8,
  },
   greenContainer:{
    flex:1,
    backgroundColor : "#E5E7E1",
    borderRadius: 10,
    padding:20,
    marginBottom: 20,
   },
   AddmediBtn:{
    alignItems : 'center'
   },

   input: {
    height: 30,
    padding: 8,
    borderRadius: 10,
    backgroundColor : "#FFFBE9",
  },

  selectTimes:{
    alignItems : 'center',
    justifyContent:'center',
    flexDirection: 'row',
    padding:10,
    
  }

  
});