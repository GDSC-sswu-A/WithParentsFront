import React from "react";
import {StatusBar, Platform, Image} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/Nav/HomeScreen";
import SettingScreen from "./src/screens/SettingScreen";

const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
  <Image 
  source={require('./src/img/withParents.png')} 
  style={{width:120,resizeMode:'contain'}} /> 
  ); 
}

function App() {
  
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
      initialRouteName="Home">
      <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={({navigation})=>({
        headerTitle : props => <LogoTitle {...props}/>,
        headerStyle : {
          backgroundColor :'#AEC195',
        }
      })}
      />
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
      </Stack.Navigator>
   
    </NavigationContainer>
  </>
  )
}

export default App;