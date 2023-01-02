import React, {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput,
  Keyboard,
  SafeAreaView,
  Image,
  TouchableOpacity,
  
} from 'react-native'


export default function SignUpScreen({navigation}) {
  const [genderIndex, setGenderIndex] = useState(0);   
  const genderList = ["Male", "Female", "Other"];
  const genderChangeHandler = (index) => {
  // console.log("index \t", index);
  setGenderIndex((preIndex) => index);
}
  
  const [name,setName] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoImage}>

      </View>
      <View style ={styles.inputName}>
        <Text style ={styles.black}>name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
          returnKeyType="next"
          />

      </View>
      {/*
      <View style ={styles.checkUserType}>
      <View style={{ flexDirection: "row" }}>
                    {genderList.map((data, index) => (
                      <TouchableOpacity
                        key={data}
                        style={{
                          flexDirection: "row",
                          margin: 10,
                          flex: 3,
                          justifyContent: "space-evenly",
                        }}
                        onPress={genderChangeHandler.bind(this, index)}
                      >
                        <MaterialIcons
                          name={
                            index === genderIndex
                              ? "radio-button-checked"
                              : "radio-button-unchecked"
                          }
                          size={18}
                          color='#ccc'
                        />
                        <Text style={styles.termsText}>{data}</Text>
                      </TouchableOpacity>
                    ))}
</View> 
                        

      </View>
                        */}
      <View style ={styles.btnContainer}>

      </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({

  container:{
    flex:1,
  },

  logoImage:{
    flex:3,
    backgroundColor : "pink",
  },

  input:{
    backgroundColor : "#EFF3EA",
    height: 30,
    width:150,
    padding: 8,
    borderRadius: 10,
    marginLeft:60,
 
  },
  inputName:{
    flex:1.5,
    backgroundColor:"white",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'row',
    },

  checkUserType:{
    flex:1.5,
    backgroundColor:"yellow",
  },
  btnContainer:{
    flex:4,
    backgroundColor:"green",
  },

  black:{
    color : 'black',
    fontSize : 17,
    fontWeight : '300'  }

})
