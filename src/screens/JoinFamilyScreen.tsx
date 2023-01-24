import React, {useState, useEffect} from 'react'
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput 
} from 'react-native'

import { GreenButton } from '../component/ButtonComponent'
import { getModifyUser } from '../common/FamilyApi'

const JoinFamilyScreen = ({navigation}) => {
  const [code, setCode] = useState('');
  const [isOk, setIsOk] = useState(false);
  useEffect (() => {
    const clickOk = async () => {
        const result = await getModifyUser(code);
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@",result,"ZZ")
    };
    if (isOk) {
        clickOk();
        navigation.navigate('Setting')
    }
    setIsOk(false)
})
  const Input = ()=>{
    setIsOk(true)
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
      <Text style={styles.txt}>Enter the code</Text>

        <TextInput 
        style={styles.input}
        value={code}
        onChangeText={setCode}
        onSubmitEditing={Input}
        returnKeyType="done"
        />

    <View style={styles.btn}>
      <GreenButton text='Cacle' on={Cancle}/>
        <GreenButton text='OK' on={Input}/>
        </View>
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
        marginTop : 180,
        width : 250,
        flexDirection : 'row',
        justifyContent: 'space-between'
    },

  input : {
      padding : 10,
      alignItems : 'center',
      borderRadius : 10,
      width : 208,
      height : 40,
      backgroundColor : "#EFF3EA",
  }
})