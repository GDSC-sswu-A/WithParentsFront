import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont()

import HomeScreen from './Nav/HomeScreen'
import Calendar from './Nav/CalendarScreen'
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
      tabBarStyle : {
        backgroundColor: '#AEC195'
      },
      tabBarShowLabel: false,
      tabBarInactiveTintColor: 'white',
      tabBarActiveTintColor: '#6A7759',
    }}>
      <Tab.Screen
      name='Map'
      component={Map}
      options={({navigation})=>({
        tabBarIcon: ({color, size})=>{
          return <Icon name="location-outline" color={color} size={size}/>
        },
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
        tabBarIcon: ({color, size})=>{
          return <Icon name="alarm-outline" color={color} size={size}/>
        },
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
        tabBarIcon: ({color, size})=>{
          return <Icon name="home-outline" color={color} size={size}/>
        },
        headerTitle : props => <LogoTitle {...props}/>,
        headerStyle : {
          backgroundColor :'#AEC195',
        }
      })}/>
      <Tab.Screen
      name='Calendar'
      component={Calendar}
      options={({navigation})=>({
        tabBarIcon: ({color, size})=>{
          return <Icon name="calendar-outline" color={color} size={size}/>
        },
        title : 'Calendar',
        headerTintColor: '#FFFFFF',
        headerStyle : {
          backgroundColor :'#AEC195',
        }
      })}/>
      <Tab.Screen
      name='Gallery'
      component={Gallery}
      options={({navigation})=>({
        tabBarIcon: ({color, size})=>{
          return <Icon name="images-outline" color={color} size={size}/>
        },
        title : 'Gallery',
        headerTintColor: '#FFFFFF',
        headerStyle : {
          backgroundColor :'#AEC195',
        }
      })}/>
      
    </Tab.Navigator>
    
  )
}