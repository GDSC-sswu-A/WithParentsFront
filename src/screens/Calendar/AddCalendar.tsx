import React, { useState, useEffect } from 'react'
import { 
  TouchableOpacity,
  View, 
  Text, 
  StyleSheet, 
  TextInput,
  Keyboard
} from 'react-native'

import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { GreenButton } from '../../component/ButtonComponent'

Date.prototype.format = function(f) {
    if (!this.valueOf()) return " ";
 
    var weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    var d = this;
     
    return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
        switch ($1) {
            case "yyyy": return d.getFullYear();
            case "yy": return (d.getFullYear() % 1000).zf(2);
            case "MM": return (d.getMonth() + 1).zf(2);
            case "dd": return d.getDate().zf(2);
            case "E": return weekName[d.getDay()];
            case "HH": return d.getHours().zf(2);
            case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2);
            case "mm": return d.getMinutes().zf(2);
            case "ss": return d.getSeconds().zf(2);
            case "a/p": return d.getHours() < 12 ? "오전" : "오후";
            default: return $1;
        }
    });
};
String.prototype.string = function(len){var s = '', i = 0; while (i++ < len) { s += this; } return s;};
String.prototype.zf = function(len){return "0".string(len - this.length) + this;};
Number.prototype.zf = function(len){return this.toString().zf(len);};

import { postCreatSchedule } from '../../common/CalendarApi';

export default function AddCalendar({navigation}) {
  const [ok, setOk] = useState(false);
  useEffect (() => {
    const posting = async () => {
        const result = await postCreatSchedule(title, day, time, alert);
    };
    if (ok) {
      posting();
      navigation.navigate('Calendar')
    }
   
}, )

const Cancle = ()=>{
    if (navigation?.canGoBack()){
        navigation.goBack()
        return true
    }
    return false
}
const Input = ()=>{
  setOk(true);
  Keyboard.dismiss();
}

// title
const [title, setTitle] = useState("");

// Alert
const [open, setOpen] = useState(false);
const [alert, setAlert] = useState(null);
const [alerts, setAlerts] = useState([
    {label: 'O', value: true},
    {label: 'X', value: false},
]);

//Date
const [day, setDay] = useState("");
const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
const showDatePicker = () => {
  setDatePickerVisibility(true);
};
const hideDatePicker = () => {
  setDatePickerVisibility(false);
};
const handleConfirm = (date) => {
  hideDatePicker();
  setDay(date.format("yyyy-MM-dd"))
};

//Date
const [time, setTime] = useState("");
const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
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

return (
  <View style={styles.container}>
  <View style={styles.input}>

    {/* Title */}
    <View style={styles.line}>
      <Text style={styles.txt}>TITLE</Text>
      <TextInput
      style = {styles.in}
      value={title}
      onChangeText={setTitle}
      onSubmitEditing={Input}
      returnKeyType="done"
      ></TextInput>
    </View>

    {/* Day */}
    <View style={styles.line}>
      <Text style={styles.txt}>DATE</Text>
      <TouchableOpacity onPress={showDatePicker}>
          <TextInput
            style = {styles.in}
            pointerEvents="none"
            placeholder="Select the date"
            placeholderTextColor="#6A7759"
            underlineColorAndroid="transparent"
            editable={false}
            value={day}
          />
          <DateTimePickerModal
            headerTextIOS="Select the date"
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
      </TouchableOpacity>	
    </View>

    {/* Time */}
    <View style={styles.line}>
      <Text style={styles.txt}>TIME</Text>
      <TouchableOpacity onPress={showTimePicker}>
          <TextInput
            style = {styles.in}
            pointerEvents="none"
            placeholder="Select the time"
            placeholderTextColor="#6A7759"
            underlineColorAndroid="transparent"
            editable={false}
            value={time}
          />
          <DateTimePickerModal
            headerTextIOS="Select the Time"
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={TimeConfirm}
            onCancel={hideTimePicker}
          />
      </TouchableOpacity>	
    </View>

    {/* Alert */}
    <View style={styles.line}>
      <Text style={styles.txt}>ALERT</Text>
      <View>
      <DropDownPicker
        style= {styles.alert}
        textStyle={{
          fontSize: 15,
          color : '#6A7759'
        }}
        containerStyle={{
          width : 90
        }}
        open={open}
        value={alert}
        items={alerts}
        setOpen={setOpen}
        setValue={setAlert}
        setItems={setAlerts}
        placeholder="Alert"
      />
      </View>
    </View>
  </View>
  <View style={styles.btn}>
        <GreenButton text='Cacle' on={Cancle}/>
        <GreenButton text='OK' on={Input}/>
        </View>
  </View>

  
)
}

const styles = StyleSheet.create({
  container : {
    padding : 20,
        paddingTop : 100,
        flex : 1,
        backgroundColor : 'white',
        alignItems : 'center'
      
  },
  input : {
      backgroundColor : '#F4F5F3',
      padding : 40,
      borderRadius : 10,
  },
  in : {
      width : 160,
      height : 30,
      borderRadius : 10,
      backgroundColor : '#FCF4D6',
      padding : 10,
      marginLeft : 40,
      color : '#6A7759'
  },
  line : {
      flexDirection : 'row',
      justifyContent: 'space-between',
      marginTop : 20,
      marginBottom : 20
  },
  txt : {
      fontSize : 20,
      fontWeight : '300'
  },
  alert : {
    backgroundColor : '#FCF4D6',
  },
  btn :{
    marginTop : 70,
    width : 250,
    flexDirection : 'row',
    justifyContent: 'space-between'
},
})