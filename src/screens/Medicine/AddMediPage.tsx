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
  Pressable,
  Image,
  TouchableOpacity
} from 'react-native'

//화면의 높이
Dimensions.get('window').height
//화면의 너비
Dimensions.get('window').width
import { GreenButton } from '../../component/ButtonComponent'
import SelectMediTimesModal from '../../component/SelectMediTimesModal'
import DateTimePickerModal from "react-native-modal-datetime-picker";


export default function AddmedipageScreen({navigation}) {

    
  const [time, setTime] = useState("");
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [mediName, setMediName] = React.useState("");
  const [userValue, setUserValue] = React.useState("");
  //const [btnActive,setBtnActive] =useState('');

  //버튼 색 변경 
    const [isSelect, setSelect] = useState([false, false, false,false,false,false,false]);
  
    const getButton = (id: number,weekData) => {
      return (
        <Pressable
          style={[
            styles.buttonContainer,
            {backgroundColor: isSelect[id] ? '#789395' : '#EEEDED'},
          ]}
          onPress={() => {
            setSelect([
              ...isSelect.slice(0, id),
              !isSelect[id],
              ...isSelect.slice(id + 1),
            ]);
          }}>
          <Text style={styles.blackText}>{weekData}</Text>
        </Pressable>
      );
    };
  


    const toGoWritePage = () =>{
        navigation.navigate('GalleryWrite')
       }

    const showTimePicker = () => {
      setTimePickerVisibility(true);
    };
    const hideTimePicker = () => {
      setTimePickerVisibility(false);
    };
    const TimeConfirm = (date) => {
      hideTimePicker();
      setTime(date.format("HH:MM"))
    };

    const parentfunction = (data)=>{
      console.log(data);
    };

    

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
          value={mediName}
          onChange={(event) => {
            const {eventCount, target, text} = event.nativeEvent;
            //onChange={(event) => console.log(event.nativeEvent.text)}
            setMediName(text);
          }}

      />
        </View>
        <View style ={styles.medicineWeek}>
          <Text style ={styles.fontStyle}>What day do you take it?</Text>
           <View style ={styles.weekBtn}>

           {getButton(0,'월')}
           {getButton(1,'화')}
           {getButton(2,'수')}
           {getButton(3,'목')}
           {getButton(4,'금')}
           {getButton(5,'토')}
           {getButton(6,'일')}

             {/*
        {weekData.map((item,idx)=>{
          return(
            <>
            <TouchableOpacity
              onPress={toggleActive}
              style={styles.btn}
              >
            <Text>{item}</Text>
            </TouchableOpacity>
            
            </>
          )
        })}
           
          <GrayButton text='월'></GrayButton>
          <GrayButton text='화'></GrayButton>
          <GrayButton text='수'></GrayButton>
          <GrayButton text='목'></GrayButton>
          <GrayButton text='금'></GrayButton>
          <GrayButton text='토'></GrayButton>
          <GrayButton text='일'></GrayButton>
        */}
          </View>
        </View>
        <View style ={styles.footer}>
        <Text style ={styles.fontStyle}>Take it several times a day?</Text>
          <View style ={styles.selectTimes}>
       
            <SelectMediTimesModal parentfunction={parentfunction}></SelectMediTimesModal>
          </View>
          <View style = {styles.dosingTime}>
            <View style={styles.selectTime}>
            <Text>Time 1</Text>
            {/* Time */}
            
    <View style={styles.line}>
      <TouchableOpacity onPress={showTimePicker}>
          <TextInput
            style = {styles.in}
            pointerEvents="none"
            placeholderTextColor="#6A7759"
            underlineColorAndroid="transparent"
            editable={false}
            value={time}
          />
         { isTimePickerVisible && (
         <DateTimePickerModal
            headerTextIOS="Select the Time"
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={TimeConfirm}
            onCancel={hideTimePicker}
          />)}
      </TouchableOpacity>	
      
        </View>
      
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
    flex:1,
   },

   medicineName:{
    flex:1.1,
   },
   medicineWeek:{
    flex:1.2,
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
    
  },
  selectTime:{
    flexDirection: 'row',
    alignItems : 'center',
    justifyContent:'center',

  },
   in : {
    width : 160,
    height : 30,
    borderRadius : 10,
    backgroundColor : '#FFFBE9',
    padding : 5,
    marginLeft : 40,
    color : '#6A7759',


},
line : {
    flexDirection : 'row',
    justifyContent: 'space-between',
    marginTop : 20,
    marginBottom : 20
},

buttonContainer:{
  backgroundColor : '#EEEDED',
  width : 30,
  height : 30,
  borderRadius : 10,
  marginRight:17,
  justifyContent : 'center',
},
blackText: {
  textAlign : 'center',
  color : 'black',
  fontSize : 15,
  fontWeight : '300'
},
  
});