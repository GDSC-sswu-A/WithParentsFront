import React from 'react';
import {
    View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';


export function GreenInput({text}) {
  return (
    <View style={styles.Green}>
        <TextInput 
        placeholder = {text}
        style={styles.input}/>
    </View>
  );
}





const styles = StyleSheet.create({
    Green : {
        alignItems : 'center',
        borderRadius : 10,
        width : 208,
        height : 40,
        backgroundColor : "#EFF3EA",
    },
    input : {
        width : 180,
        height : 40,

    }
});
