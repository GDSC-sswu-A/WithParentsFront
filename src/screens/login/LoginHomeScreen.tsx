import React, {useEffect,useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { GoogleSignin, GoogleSigninButton,statusCodes } from '@react-native-google-signin/google-signin';
import { LoginButton } from '../../component/ButtonComponent'

import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput,
    Keyboard,
    SafeAreaView,
    Image,
    TouchableOpacity

} from 'react-native'


export default function LoginHomeScreen({navigation}) {

const toGoSignUPBtn =()=>{
  navigation.navigate('Signup')

}

const toGoLoginBtn =()=>{
  navigation.navigate('Nav')
 }

//구글 로그인 코드
 const [user,setUser] = useState({})

 useEffect(()=>{
  GoogleSignin.configure({
    webClientId: '1052651211735-c39hr3egfh2rkan1s8s87l4321af2h4j.apps.googleusercontent.com', 
    offlineAccess: true, 
    forceCodeForRefreshToken: true, 
  });
  isSignedIn()
 ,[]})

//사용자가 로그인하도록 모달띄움 , 로그인되면 userinfo객체 반환 
//그렇지않다면 오류 console.log에 출력
 const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log('due____',userInfo)
    setUser(userInfo)
  } catch (error) {
      console.log('Message___',error.message);
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      console.log('User cancelled the Login Flow')
    } else if (error.code === statusCodes.IN_PROGRESS) {
      console.log('Siging In')
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      console.log('Play services not Available')
    } else {
      console.log('some other error happened')
    }
  }
};
//사용자가 현재 로그인되어 있는지 확인하는 데 사용
const isSignedIn = async () => {
  const isSignedIn = await GoogleSignin.isSignedIn();
  if(!!isSignedIn){
    getCurrentUserInfo()
  }else{
    console.log('please Login')
  }
};

  const getCurrentUserInfo = async()=>{
    try{
    const userInfo = await GoogleSignin.getCurrentUser();
    console.log('edit__',user)
    setUser(userInfo);
    }catch(error){
      if(error.code === statusCodes.SIGN_IN_REQUIRED){
        alert('User has not signed in yet');
        console.log('User has not signed in yet')
      }else{
        alert("Something went wrong")
        console.log("Something went wrong")
      }
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setUser({}); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
    <View style ={styles.Logo}>
    <Image 
      style = {styles.LogoImage}
      source={require("../../img/withParents.png")}/>

    </View>

     <View style={styles.signBtn}>
      <View style ={styles.signUpBtn}>
        <LoginButton text='SIGNUP' on={toGoSignUPBtn}/>
      </View>
      <View style ={styles.loginBtn}>
        <LoginButton text='LOGIN'on={toGoLoginBtn}/>
        </View>
      <View>

      </View>
         {!user.idToken?
              
      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
      />:

        <TouchableOpacity onPress={signOut}>
        <Text>Signout</Text>
        </TouchableOpacity>
        }
      </View>
    </SafeAreaView>

      )
}

const styles = StyleSheet.create({
container:{
    backgroundColor : '#6A7759',
    flex:1,
},

LogoImage:{
width:270,
height:35
},


Logo:{
  flex:3,
  justifyContent: "center",
  alignItems: "center",
  //backgroundColor : 'yellow',

},

signBtn:{
  justifyContent: "center",
  alignItems: "center",
  flex:2,
  marginBottom:100,
},

signUpBtn:{
  marginBottom: 20,
}


})