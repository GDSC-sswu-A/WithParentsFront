import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {LoginButton} from '../../component/ButtonComponent';
import {GoogleLoginApi} from '../../api/GoogleLoginApi';
import axios from 'axios';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function LoginHomeScreen({navigation}) {
  const toGoSignUPBtn = () => {
    return navigation.navigate('Signup');
  };

  const toGoLoginBtn = () => {
    return navigation.navigate('Nav');
  };

  //구글 로그인 코드
  const [user, setUser] = useState({});

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '1052651211735-c39hr3egfh2rkan1s8s87l4321af2h4j.apps.googleusercontent.com',
      androidClientId:
        '1052651211735-q77h1m8kftpiablcvmhigjlna00pqqns.apps.googleusercontent.com',
      offlineAccess: true, //서버에서 사용자 대시나여 google api 액세스할때
      forceCodeForRefreshToken: false, // 액세스 요청창 두번 나와서 일단 false해둠
    });
    isSignedIn(), [];
  });

  /*
  const tokenSubmit = () => {
    axios
      .post('http://localhost:8080/api/auth/googleLogin', {
        headers: {Authorization: user.idToken},
      })
      .then(response => {
        console.log(response);
      });
  };
*/

  //사용자가 로그인하도록 모달띄움 , 로그인되면 userinfo객체 반환
  //그렇지않다면 오류 console.log에 출력
  //statusCode는 로그인 프로세스 중에 어떤 종류의 오류가 발생했는지 확인할 때 유용
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('due____', userInfo);
      setUser(userInfo);
      const token = {
        headers: userInfo.idToken,
      };
      //console.log(token.headers);
      const {data} = await GoogleLoginApi(token.headers);
      console.log(data);
    } catch (error) {
      console.log('Message___', error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Siging In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play services not Available');
      } else {
        console.log('some other error happened');
      }
    }
  };
  //사용자가 현재 로그인되어 있는지 확인하는 데 사용
  const isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (!!isSignedIn) {
      getCurrentUserInfo();
    } else {
      console.log('please Login');
    }
  };

  //signInSilently()는 현재 사용자 반환 그렇지않다면 오류
  const getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      //console.log('edit__',user)
      setUser(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        alert('User has not signed in yet');
        console.log('User has not signed in yet');
      } else {
        alert('Something went wrong');
        console.log('Something went wrong');
      }
    }
  };

  //로그아웃
  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setUser({});
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Logo}>
        <Image
          style={styles.LogoImage}
          source={require('../../img/withParents.png')}
        />
      </View>

      <View style={styles.signBtn}>
        {!user.idToken ? (
          <GoogleSigninButton
            style={{width: 192, height: 48}}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={signIn}
          />
        ) : (
          <>
            <View style={styles.loginBtn}>
              <LoginButton text="START" on={toGoSignUPBtn} />
            </View>
            <View style={styles.signBtn}>
              <LoginButton text="LOGOUT" on={signOut} />
            </View>
            {/*
            <TouchableOpacity onPress={signOut}>
              <Text>Logout</Text>
        </TouchableOpacity>*/}
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6A7759',
    flex: 1,
  },

  LogoImage: {
    width: 270,
    height: 35,
  },

  Logo: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor : 'yellow',
  },

  signBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
    marginBottom: 100,
  },
});
