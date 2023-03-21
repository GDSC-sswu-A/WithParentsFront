import React from 'react'
import { format} from 'date-fns'
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

import FamilyComponent from '../../component/FamilyComponent'
import HomeMedicineComponent from '../../component/HomeMedicineComponent'
import RecentPhotoComponent from '../../component/RecentPhotoComponent'
  

export default function HomeScreen({navigation}) {
    var today = new Date();
    var date = format(new Date(), "MMM.dd yyyy")

    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.top}>
        
       
        <TouchableOpacity
        onPress={() => navigation.navigate('Setting')}>
        <Image
        style={styles.setting} 
        source = {require('../../img/settingIcon.png')}/>
        </TouchableOpacity>
 
        <Text style={styles.date}
        >{date}</Text>
        {/* <Text>{today}</Text> */}

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
    padding : 100,
   },
   top : {
    flexDirection : 'row',
    margin : 15,
    marginTop : 20,
    justifyContent: 'space-between'
   },
   setting : {
    width : 30,
    height : 30
   },
   date : {
    fontWeight: 'bold',
    fontSize : 20
   }
});