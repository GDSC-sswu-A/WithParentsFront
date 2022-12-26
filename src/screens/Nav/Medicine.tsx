import { 
  View, 
  Text, 
  Button, 
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import { AddButton } from '../../component/ButtonComponent'


export default function Medicine({navigation}) {

  const TogoAddMediPage = () =>{
    navigation.navigate('Addmedicine')
  }


  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.userTab}>
    </View>
    <View style={styles.medicineTab}>
    </View>
    <View style={styles.mediAddBtn}>
    <AddButton on={TogoAddMediPage}></AddButton>
    </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    
   },

   userTab:{
    flex:1,
    //backgroundColor: 'black',

   },
   medicineTab:{
    flex:6,
    //backgroundColor:'yellow',

   },
   mediAddBtn:{
    flex:1.2,
    left:330
   }



      
});