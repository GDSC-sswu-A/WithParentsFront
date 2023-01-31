import React, {useState, useEffect} from 'react'
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput 
} from 'react-native'

import { GreenButton, GreenLineButton } from '../component/ButtonComponent'
import { postModifyUser, getUserInfo } from '../common/FamilyApi'


const JoinFamilyScreen = ({navigation}) => {
  const [id, setId] = useState('');
  const [passwd, setPasswd] = useState('')
  const [user, setUser] = useState(null);
  const [isOk, setIsOk] = useState(false);
  useEffect (()=> {
    const init = async () => {
      const res = await getUserInfo();
      console.log("INIT", res)
      setUser(res)
    };
    init();
    console.log("###", user)
  }, [])
  useEffect (() => {
    const clickOk = async () => {
        const result = await postModifyUser(id, passwd, user);
    };
    if (isOk) {
        clickOk();
        navigation.navigate('Setting')
    }
    setIsOk(false)
    
});
const Input = ()=>{
  setIsOk(true)
}

const Navi = ()=>{
  navigation.navigate('CreateFamily')
}


const Cancle = ()=>{
    if (navigation?.canGoBack()){
        navigation.goBack()
        return true
    }
    return false
}

  return (
    <View style={styles.container}>
      {/* <Text style={styles.txt}></Text> */}
      <Text style={styles.ex}>If you do not remember your ID and password,</Text> 
      <Text style={styles.ex}>please see the bottom of the settings</Text> 
        <TextInput 
        style={styles.input}
        value={id}
        onChangeText={setId}
        onSubmitEditing={Input}
        returnKeyType="done"
        placeholder = "ID"
        />

        <TextInput 
        style={styles.input}
        value={passwd}
        onChangeText={setPasswd}
        onSubmitEditing={Input}
        returnKeyType="done"
        placeholder = "Password"
        />

    <View style={styles.btn}>
      <GreenButton text='Cacle' on={Cancle}/>
      <GreenButton text='OK' on={Input}/>
    </View>
    <Text style={styles.ex}>If you do not have a family code</Text> 
    <GreenLineButton text='Create →' on={Navi}/>
    </View>
  )
}

export default JoinFamilyScreen

const styles = StyleSheet.create({
    container : {
        padding : 20,
        paddingTop : 100,
        flex : 1,
        backgroundColor : 'white',
        alignItems : 'center'
    },
    txt :{
        fontSize : 20,
        fontWeight : '300',
        marginBottom: 60
    },
    btn :{
        marginTop : 80,
        width : 250,
        flexDirection : 'row',
        justifyContent: 'space-between',
        marginBottom : 20
    },

  input : {
      padding : 10,
      alignItems : 'center',
      borderRadius : 10,
      width : 208,
      height : 40,
      backgroundColor : "#EFF3EA",
      marginTop : 50
  },
  ex : {
    fontSize : 15,
    fontWeight : '400',
    marginTop : 10,
    color : 'gray'
},
})