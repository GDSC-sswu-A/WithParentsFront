import React, {useState} from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput,
    Keyboard,
    BackHandler,
} from 'react-native'

import { GreenButton } from '../component/ButtonComponent';

const code = { code : 'dsawr'};

export default function CreateFamilyScreen({navigation}) {
    const [text, setText] = useState('');

    const Input = ()=>{
        setText('');
        Keyboard.dismiss();
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

        <Text style={styles.txt}>Family Code</Text>
        <Text style={styles.txt}>[  {code.code} ]</Text>

        <View style={styles.passwd}>
        <Text style={styles.txt}>Enter the Password</Text>

        <TextInput 
        style={styles.input}
        value={text}
        onChangeText={setText}
        onSubmitEditing={Input}
        returnKeyType="done"
        />   
        </View>


        <Text style={styles.ex}>Each family gets one code.</Text>
        <Text style={styles.ex}>Please register as a family.</Text>
        

        <View style={styles.btn}>
        <GreenButton text='Cacle' on={Cancle}/>
        <GreenButton text='OK' on={Input}/>
        </View>
        
        
        
    </View>
  )
}

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
        marginBottom: 15
    },
    passwd : {
        margin : 50,
        alignItems : 'center'
    },
    ex : {
        fontSize : 15,
        fontWeight : '400',
        marginBottom: 5,
        color : 'gray'
    },
    btn :{
        marginTop : 70,
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