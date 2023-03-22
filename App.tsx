
import React from "react";

import SettingScreen from "./src/screens/SettingScreen";
import CreateFamilyScreen from "./src/screens/CreateFamilyScreen";
import JoinFamilyScreen from "./src/screens/JoinFamilyScreen";
import GlobalNav from "./src/screens/GlobalNav";
import AddCalendar from "./src/screens/Calendar/AddCalendar"
import EditCalendar from "./src/screens/Calendar/EditCalendar";
import GalleryWriteScreen from "./src/screens/Gallery/GalleryWriteScreen"
import WrittenGalleryScreen from "./src/screens/Gallery/WrittenGalleryScreen";
import AddmedipageScreen from "./src/screens/Medicine/AddMediPage";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RecoilRoot, useRecoilState} from 'recoil';
import LoginHomeScreen from './src/screens/login/LoginHomeScreen';
import SignUpScreen from './src/screens/login/SignUpScreen';


const Stack = createNativeStackNavigator();

function App() {
  
  // if (Platform.OS === 'android') {
  //   StatusBar.setBackgroundColor('white');
  //   // StatusBar.setTranslucent(true);
  //   StatusBar.setBarStyle('dark-content');
  // }

  return (
    <RecoilRoot>
      {/* <StatusBar barStyle="dark-content" /> */}
      <NavigationContainer>
        <Stack.Navigator screenOptions={{}} initialRouteName="Login">
          <Stack.Screen
            name="Nav"
            component={GlobalNav}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Login"
            component={LoginHomeScreen}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Signup"
            component={SignUpScreen}
            options={{
              headerShown: false,
            }}
          />
          {/* Setting */}
          <Stack.Screen
            name="Setting"
            component={SettingScreen}
            options={({navigation}) => ({
              title: 'Setting',
              headerTintColor: '#FFFFFF',
              headerStyle: {
                backgroundColor: '#AEC195',
              },
            })}
          />

          <Stack.Screen
            name="CreateFamily"
            component={CreateFamilyScreen}
            options={({navigation}) => ({
              title: 'Creating a New Family',
              headerTintColor: '#FFFFFF',
              headerStyle: {
                backgroundColor: '#AEC195',
              },
            })}
          />
          <Stack.Screen
            name="JoinFamily"
            component={JoinFamilyScreen}
            options={({navigation}) => ({
              title: 'Family registration',
              headerTintColor: '#FFFFFF',
              headerStyle: {
                backgroundColor: '#AEC195',
              },
            })}
          />
          {/* Gallery */}
          <Stack.Screen
            name="GalleryWrite"
            component={GalleryWriteScreen}
            options={({navigation}) => ({
              title: 'Write your memory',
              headerTintColor: '#FFFFFF',
              headerStyle: {
                backgroundColor: '#AEC195',
              },
            })}
          />

          <Stack.Screen
            name="WrittenGalleryScreen"
            component={WrittenGalleryScreen}
            options={({navigation}) => ({
              title: 'Write your memory',
              headerTintColor: '#FFFFFF',
              headerStyle: {
                backgroundColor: '#AEC195',
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
       <Stack.Screen
      name="EditCalendar"
      component={EditCalendar}
      options={({navigation})=>({
        title : 'Edit Event',
        headerTintColor: '#FFFFFF',
        headerStyle : {
          backgroundColor :'#AEC195',
        },
      })}
      />

        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}


export default App;