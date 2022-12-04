import React, { useState } from 'react'
import { 
  TouchableOpacity,
  View, 
  Text, 
  StyleSheet, 
  TextInput 
} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePickerModal from "react-native-modal-datetime-picker";

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

export default function AddCalendarComponent() {
  // Alert
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
      {label: 'O', value: '1'},
      {label: 'X', value: '2'},
  ]);

  //Date
  const [text, onChangeText] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    hideDatePicker();
    onChangeText(date.format("yyyy/MM/dd"))
  };

  return (
    <View style={styles.container}>
      <View style={styles.line}>
        <Text style={styles.txt}>TITLE</Text>
        <TextInput
        style = {styles.in}
        ></TextInput>
      </View>

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
              value={text}
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

      <View style={styles.line}>
        <Text style={styles.txt}>TIME</Text>
        <TextInput
        style = {styles.in}
        ></TextInput>
      </View>

      <View style={styles.line}>
        <Text style={styles.txt}>ALERT</Text>
        <View>
        <DropDownPicker
          style= {styles.alert}
          textStyle={{
            fontSize: 15,
            color : '#6A7759'
          }}
          labelStyle={{
            color : '#6A7759'
          }}   
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Alert"
        />
        </View>
      </View>
    </View>

    
  )
}

const styles = StyleSheet.create({
    container : {
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
      width : 90,
      marginRight : 70,
      backgroundColor : '#FCF4D6',
    }
})