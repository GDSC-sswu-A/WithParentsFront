import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from './Nav/HomeScreen'
import Calender from './Nav/Calender'
import Map from './Nav/Map'
import Medicine from './Nav/Medicine'
import Gallery from './Nav/Gallery'

const Tab = createBottomTabNavigator();

function LogoTitle() {
  return (
  <Image 
  source={require('../img/withParents.png')} 
  style={{width:120,resizeMode:'contain'}} /> 
  ); 
}

export default function GlobalNav({navigation}) {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      tabBarShowLabel: false,
    }}>
      <Tab.Screen
      name='Map'
      component={Map}
      options={({navigation})=>({
        title : 'Map',
        headerTintColor: '#FFFFFF',
        headerStyle : {
          backgroundColor :'#AEC195',
        }
      })}/>
      <Tab.Screen
      name='Medicine'
      component={Medicine}
      options={({navigation})=>({
        title : 'Medicine',
        headerTintColor: '#FFFFFF',
        headerStyle : {
          backgroundColor :'#AEC195',
        }
      })}/>
      <Tab.Screen
      name='Home'
      component={HomeScreen}
      options={({navigation})=>({
        headerTitle : props => <LogoTitle {...props}/>,
        headerStyle : {
          backgroundColor :'#AEC195',
        }
      })}/>
      <Tab.Screen
      name='Calender'
      component={Calender}
      options={({navigation})=>({
        title : 'Calender',
        headerTintColor: '#FFFFFF',
        headerStyle : {
          backgroundColor :'#AEC195',
        }
      })}/>
      <Tab.Screen
      name='Gallery'
      component={Gallery}
      options={({navigation})=>({
        title : 'Gallery',
        headerTintColor: '#FFFFFF',
        headerStyle : {
          backgroundColor :'#AEC195',
        }
      })}/>
      
    </Tab.Navigator>
    
  )
}