import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View>
      <Image 
      source={require("../img/medicine.png")}/>
    </View>
  )
}