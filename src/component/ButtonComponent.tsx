import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

export function GreenButton({text, on}) {
  return (
    <TouchableOpacity onPress={on} style={styles.GreenButton}>
      <Text style={styles.white}>{text}</Text>
    </TouchableOpacity>
  );
}

export function WhiteButton({text}) {
  return (
    <TouchableOpacity style={styles.WhiteButton}>
      <Text style={styles.red}>{text}</Text>
    </TouchableOpacity>
  );
}

export function AddButton({text, on}) {
  return (
    <TouchableOpacity onPress={on} style={styles.AddButton}>
      <Text style={styles.add}>+</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  GreenButton: {
    backgroundColor: '#6A7759',
    borderRadius: 20,
    width: 110,
    height: 40,
    justifyContent: 'center',
  },
  white: {
    textAlign: 'center',
    color: 'white',
    fontSize: 17,
    fontWeight: '300',
  },
  WhiteButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: 75,
    height: 40,
    justifyContent: 'center',
  },
  red: {
    textAlign: 'center',
    color: '#F90C0C',
    fontSize: 20,
    fontWeight: '300',
  },
  AddButton: {
    backgroundColor: '#6A7759',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
  },
  add: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
});
