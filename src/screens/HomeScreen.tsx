import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { 
    View, 
    Text, 
    Button, 
    SafeAreaView,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'

import FamilyComponent from '../component/FamilyComponent'
import HomeMedicineComponent from '../component/HomeMedicineComponent'
import RecentPhotoComponent from '../component/RecentPhotoComponent'


export default function HomeScreen({navigation}) {
    const today = new Date();
    const date = `${today.getMonth()+1}. ${today.getDate()} ${today.getFullYear()}`

    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.top}>
        
       
        <TouchableOpacity
        onPress={() => navigation.navigate('Setting')}>
        <Image
        style={styles.setting} 
        source = {require('../img/settingIcon.png')}/>
        </TouchableOpacity>
 
        <Text>{date}</Text>

        </View>
        
        <FamilyComponent/>
        <HomeMedicineComponent date = {date}/>
        <RecentPhotoComponent/>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
   container : {
    flex : 1,
    backgroundColor : "white",
    padding : 100
   },
   top : {
    flexDirection : 'row',
    margin : 10
   },
   setting : {
    width : 30,
    height : 30
   }
});