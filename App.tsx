import React from "react";
import {StatusBar, Platform, Image} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SettingScreen from "./src/screens/SettingScreen";
import CreateFamilyScreen from "./src/screens/CreateFamilyScreen";
import JoinFamilyScreen from "./src/screens/JoinFamilyScreen";
import GlobalNav from "./src/screens/GlobalNav";
import AddCalendar from "./src/screens/Calendar/AddCalendar"
import GalleryWriteScreen from "./src/screens/Gallery/GalleryWriteScreen"
import WrittenGalleryScreen from "./src/screens/Gallery/WrittenGalleryScreen";
import AddmedipageScreen from "./src/screens/Medicine/AddMediPage";

import messaging from '@react-native-firebase/messaging';
const Stack = createNativeStackNavigator();

function App() {
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }
  requestUserPermission();
  
  // if (Platform.OS === 'android') {
  //   StatusBar.setBackgroundColor('white');
  //   // StatusBar.setTranslucent(true);
  //   StatusBar.setBarStyle('dark-content');
  // }

  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        
      }}
      initialRouteName="Nav">
      <Stack.Screen
      name="Nav"
      component={GlobalNav}
      options={{
        headerShown : false
      }}
      />

      {/* setting */}
      <Stack.Screen
      name="Setting"
      component={SettingScreen}
      options={({navigation})=>({
        title : 'Setting',
        headerTintColor: '#FFFFFF',
        headerStyle : {
          backgroundColor :'#AEC195',
        },
      })}
      />
     <Stack.Screen
      name="CreateFamily"
      component={CreateFamilyScreen}
      options={({navigation})=>({
        title : 'Creating a New Family',
        headerTintColor: '#FFFFFF',
        headerStyle : {
          backgroundColor :'#AEC195',
        },
      })}
      />
       <Stack.Screen
      name="JoinFamily"
      component={JoinFamilyScreen}
      options={({navigation})=>({
        title : 'Family registration',
        headerTintColor: '#FFFFFF',
        headerStyle : {
          backgroundColor :'#AEC195',
        },
      })}
      />

      {/* medicine */}
      <Stack.Screen
      name="Addmedicine"
      component={AddmedipageScreen}
      options={({navigation})=>({
        title : 'Add your medicine',
        headerTintColor: '#FFFFFF',
        headerStyle : {
          backgroundColor :'#AEC195',
        },
      })}
      />

      {/* galllery */}
      <Stack.Screen
      name="GalleryWrite"
      component={GalleryWriteScreen}
      options={({navigation})=>({
        title : 'Write your memory',
        headerTintColor: '#FFFFFF',
        headerStyle : {
          backgroundColor :'#AEC195',
        },
      })}
      />
      <Stack.Screen
      name="WrittenGalleryScreen"
      component={WrittenGalleryScreen}
      options={({navigation})=>({
        title : 'Write your memory',
        headerTintColor: '#FFFFFF',
        headerStyle : {
          backgroundColor :'#AEC195',
        },
      })}
      />

      {/* calendar */}
       <Stack.Screen
      name="AddCalendar"
      component={AddCalendar}
      options={({navigation})=>({
        title : 'New Event',
        headerTintColor: '#FFFFFF',
        headerStyle : {
          backgroundColor :'#AEC195',
        },
      })}
      />

      </Stack.Navigator>
   
    </NavigationContainer>
  </>
  )
}


export default App;