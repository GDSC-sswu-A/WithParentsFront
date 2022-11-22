import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import SettingScreen from './SettingScreen'

export default function HomeScreen({navigation}) {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button 
      title="Setting"
      onPress={()=>navigation.navigate('Setting')}
      />
    </View>
  )
}