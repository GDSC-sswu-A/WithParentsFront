import React from "react";
import {SafeAreaView, Text} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/HomeScreen";
import SettingScreen from "./src/screens/SettingScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{

      }}
      initialRouteName="Home">
      <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={({navigation})=>({
        
      })}
      />
      <Stack.Screen
      name="Setting"
      component={SettingScreen}
      options={({navigation})=>({
        
      })}
      />
      </Stack.Navigator>
   
    </NavigationContainer>
  </>
  )
}

export default App;