import React, {useState, useEffect} from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput,
} from 'react-native'

import { GreenButton } from '../component/ButtonComponent';
import { createFamily, postModifyUser } from '../common/FamilyApi';

export default function CreateFamilyScreen({navigation}) {
    const [password, setPassword] = useState('');
    const [isOk, setIsOk] = useState(false);
    const [id, setId] = useState(null)
    const [user, setUser] = useState([null])
    useEffect (() => {
        const clickOk = async () => {
            const result = await createFamily(password);
            setId(result.id)
            
            setPassword(result.password)
            joinFamily(result);
        };
        const joinFamily = async (result) => {
            const res = await postModifyUser(result.id, result.password, user);
        }
        if (isOk) {
            clickOk();
            navigation.navigate('Nav')
        }
        setIsOk(false)
    })
    const Cancle = ()=>{
        if (navigation?.canGoBack()){
            navigation.goBack()
            return true
        }
        return false
    }
    const Input = ()=>{
        setPassword
        setIsOk(true);
    }
  return (
    <View style={styles.container}>
        <Text style={styles.ex}>Each family gets one code.</Text>
        <Text style={styles.ex}>Please register as a family.</Text>

        <View style={styles.passwd}>
        <Text style={styles.txt}>Enter the Password</Text>

        <TextInput 
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        onSubmitEditing={Input}
        returnKeyType="done"
        />   
        </View>

        <Text style={styles.ex}>The Family code can be found</Text>
        <Text style={styles.ex}>at the very bottom of the Settings page.</Text>
        
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