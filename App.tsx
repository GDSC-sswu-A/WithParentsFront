import React from "react";
import {StatusBar, Platform, Image} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/Nav/HomeScreen";
import SettingScreen from "./src/screens/SettingScreen";
<<<<<<< HEAD
import CreateFamilyScreen from "./src/screens/CreateFamilyScreen";
import JoinFamilyScreen from "./src/screens/JoinFamilyScreen";
=======
import GlobalNav from "./src/screens/GlobalNav";
>>>>>>> dev

const Stack = createNativeStackNavigator();

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
      initialRouteName="Nav">
      <Stack.Screen
      name="Nav"
      component={GlobalNav}
      options={{
        headerShown : false
      }}
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
      </Stack.Navigator>
   
    </NavigationContainer>
  </>
  )
}

export default App;