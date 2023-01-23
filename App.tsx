import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignUpScreen from './src/screens/login/SignUpScreen';
import SettingScreen from './src/screens/SettingScreen';
import CreateFamilyScreen from './src/screens/CreateFamilyScreen';
import JoinFamilyScreen from './src/screens/JoinFamilyScreen';
import GlobalNav from './src/screens/GlobalNav';
import GalleryWriteScreen from './src/screens/Gallery/GalleryWriteScreen';
import WrittenGalleryScreen from './src/screens/Gallery/WrittenGalleryScreen';
import LoginHomeScreen from './src/screens/login/LoginHomeScreen';

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
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
