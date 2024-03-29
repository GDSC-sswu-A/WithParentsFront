import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Pressable,
} from 'react-native';

export function GreenButton({text, on}) {
  return (
    <TouchableOpacity onPress={on} style={styles.GreenButton}>
      <Text style={styles.white}>{text}</Text>
    </TouchableOpacity>
  );
}
export function GreenLineButton({text, on}) {
  return (
    <TouchableOpacity
    onPress = {on}
    style={styles.GreenLineButton}>
    <Text style={styles.green}>{text}</Text>
    </TouchableOpacity>
  );
}

export function WhiteButton({text, on}) {
    return (
      <TouchableOpacity
      onPress = {on}
      style={styles.WhiteButton}>
      <Text style={styles.red}>{text}</Text>
    </TouchableOpacity>
  );
}

  export function LoginButton({text,on}) {
    return (
      <TouchableOpacity
      onPress = {on}
      style={styles.LoginButton}>
      <Text style={styles.white}>{text}</Text>
      </TouchableOpacity>
    );
  }

  //export function AddButton () {
  export function YellowButton({text,on}) {
    return (
      <TouchableOpacity
      onPress = {on}
      style={styles.YellowButton}>
      <Text style={styles.black}>{text}</Text>
    </TouchableOpacity>
  );
}

export function YellowGreenButton({text, on}) {
  return (
    <TouchableOpacity onPress={on} style={styles.YellowGreenButton}>
      <Text style={styles.black}>{text}</Text>
    </TouchableOpacity>
  );
}

export function AddButton({on}) {
  return (
    <TouchableOpacity onPress={on} style={styles.AddButton}>
      <Text style={styles.add}>+</Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    GreenButton : {
        backgroundColor : "#6A7759",
        borderRadius: 20,
        width : 110,
        height : 40,
        justifyContent: 'center',
    },
    GreenLineButton : {
      borderColor : "#6A7759",
      borderRadius: 20,
      width : 110,
      height : 40,
      justifyContent: 'center',
    },
    YellowButton:{
      backgroundColor : '#FFFBE9',
      width : 80,
      height : 30,
      borderRadius : 10,

    },
    white : {
        textAlign : 'center',
        color : 'white',
        fontSize : 20,
        fontWeight : '300'
    },
    black: {
      textAlign : 'center',
      color : 'black',
      fontSize : 15,
      fontWeight : '300'
    },
    WhiteButton : {
        backgroundColor : "white",
        borderRadius: 10,
        width : 75,
        height : 40,
        justifyContent: 'center',
    },
    red : {
        textAlign : 'center',
        color : '#F90C0C',
        fontSize : 20,
        fontWeight : '300'
    },
    green : {
      textAlign : 'center',
      color : '#6A7759',
      fontSize : 20,
      fontWeight : '300'
  },
    AddButton : {
      backgroundColor : '#6A7759',
      width : 55,
      height : 55,
      borderRadius : 100,
      justifyContent : 'center'
    },
    add : {
      textAlign : 'center',
      color : 'white',
      fontSize : 20,
    },
    GrayButton:{
      backgroundColor : '#EEEDED',
      width : 30,
      height : 30,
      borderRadius : 10,
      marginRight:17,
      justifyContent : 'center',
    },

    YellowGreenButton:{
      backgroundColor : '#E5E7E1',
      width : 30,
      height : 30,
      borderRadius : 10,
    },
  grayButton: {
    backgroundColor: '#FFFBE9',
    //backgroundColor: '#f5f5f5',
    width: 70,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});
