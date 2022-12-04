import React, { useState } from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput 
} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';

export default function AddCalendarComponent() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
      {label: 'O', value: '1'},
      {label: 'X', value: '2'},
  ]);
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
        <TextInput
        style = {styles.in}
        ></TextInput>
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
        marginLeft : 40
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