import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useRecoilState} from 'recoil';
import {userEmailAtom} from '../atom/atom';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {getUserInfo} from '../common/FamilyApi';

export default function SettingScreen({navigation}) {
  const [id, setId] = useState('');
  const [passwd, setPasswd] = useState('');
  const [user, setUser] = useRecoilState(userEmailAtom);
  const [isLogout, setIsLogout] = useState(false);
  useEffect(() => {
    const init = async () => {
      const result = await getUserInfo();
      setId(result.familyId);
      setPasswd(result.familyPassword);
    };
    init();
    console.log('@@', id, passwd);
  }, []);

  //로그아웃
  useEffect(() => {
    const signOut = async () => {
      try {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        setUser({});
      } catch (error) {
        console.error(error);
      }
    };
    if (isLogout) {
      signOut();
      navigation.navigate('Login');
    }
    setIsLogout(false);
  });
  const clickLogout = () => {
    setIsLogout(true);
  };

  return (
    <View style={styles.container}>

      {/* <View style={styles.menus}>
        <Text style={styles.title}>System setting</Text>
        <TouchableOpacity>
          <Text style={styles.menu}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menu}>Share Location</Text>
        </TouchableOpacity>
      </View> */}

      <View style={styles.menus}>
        <Text style={styles.title}>Family setting</Text>
        {/* <TouchableOpacity
        onPress={() => navigation.navigate('CreateFamily')}> 
          <Text style={styles.menu}>Creating a New Family</Text>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={() => navigation.navigate('JoinFamily')}>
          <Text style={styles.menu}>Family registration</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menus}>
        <Text style={styles.title}>Personal/Security</Text>
        <TouchableOpacity>
          <Text style={styles.menu}>Family ID : {id} </Text>
          <Text style={styles.menu}>Family Password : {passwd} </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={clickLogout}>
          <Text style={styles.menu}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  top: {
    fontSize: 20,
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: 20,
  },
  menus: {
    margin: 30,
    marginBottom: 0,
  },
  title: {
    backgroundColor: '#EFF3EA',
    fontSize: 22,
    fontWeight: '400',
    padding: 5,
    marginBottom: 20,
  },
  menu: {
    fontSize: 20,
    padding: 5,
    marginBottom: 10,
    fontWeight: '300',
  },
});
