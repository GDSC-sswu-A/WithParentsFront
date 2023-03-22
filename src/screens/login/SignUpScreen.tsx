import React, {useState, useEffect} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {GreenButton} from '../../component/ButtonComponent';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  SafeAreaView,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {useRecoilState} from 'recoil';
import {PostUser} from '../../common/FamilyApi';

export default function SignUpScreen({navigation}) {
  let bouncyCheckboxRef: BouncyCheckbox | null = null;
  const [parentCheckbox, parentSetCheckbox] = useState(false);
  const [childCheckbox, childSetcheckbox] = useState(false);
  const [username, setuserName] = useState('');
  const [isOk, setIsOk] = useState(false);

  useEffect(() => {
    const clickOk = async () => {
      const result = await PostUser(username, parentCheckbox);
      //console.log('', result);
    };
    if (isOk) {
      clickOk();
      navigation.navigate('JoinFamily');
    }
    setIsOk(false);
  });

  const ClickCancleBtn = () => {
    navigation.navigate('Login');
  };

  const ClickNextBtn = () => {
    if (username === '') {
      Alert.alert('Error', 'please input your name');
    } else if (childCheckbox === false && parentCheckbox === false) {
      Alert.alert('Error', 'please check parents or child');
    } else if (childCheckbox === true && parentCheckbox === true) {
      Alert.alert('Error', 'Please choose between parents and child');
    } else {
      setIsOk(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Logo}>
        <Image
          style={styles.LogoImage}
          source={require('../../img/withParents_Green.png')}
        />
      </View>
      <View style={styles.modal}>
        {/*{LoginmodalVisible && <LoginModal></LoginModal>}*/}
      </View>
      <View style={styles.inputName}>
        <Text style={styles.black}>name</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={text => setuserName(text)}
          returnKeyType="next"
        />
      </View>
      <View style={styles.checkUserType}>
        <BouncyCheckbox
          style={{marginTop: 16, marginRight: 20}}
          textStyle={{
            textDecorationLine: 'none',
          }}
          ref={(ref: any) => (bouncyCheckboxRef = ref)}
          isChecked={parentCheckbox}
          text="parents"
          disableBuiltInState
          onPress={() => parentSetCheckbox(!parentCheckbox)}
        />

        <BouncyCheckbox
          style={{marginTop: 16, marginLeft: 50}}
          textStyle={{
            textDecorationLine: 'none',
          }}
          ref={(ref: any) => (bouncyCheckboxRef = ref)}
          isChecked={childCheckbox}
          text="child"
          disableBuiltInState
          onPress={() => childSetcheckbox(!childCheckbox)}
        />
      </View>

      <View style={styles.btnContainer}>
        <View style={styles.cancleBtn}>
          <GreenButton text="Cancle" on={ClickCancleBtn}></GreenButton>
        </View>
        <View style={styles.nextBtn}>
          <GreenButton text="Next" on={ClickNextBtn}></GreenButton>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  Logo: {
    flex: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    backgroundColor: '#EFF3EA',
    height: 30,
    width: 150,
    padding: 8,
    borderRadius: 10,
    marginLeft: 50,
  },
  inputName: {
    flex: 1.3,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  checkUserType: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  btnContainer: {
    flex: 4,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  black: {
    color: 'black',
    fontSize: 17,
    fontWeight: '300',
  },

  cancleBtn: {
    marginRight: 40,
  },

  nextBtn: {
    marginLeft: 20,
  },
});
