import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { 
    View, 
    Text, 
    Button, 
    SafeAreaView,
    StyleSheet
} from 'react-native'

import FamilyComponent from '../component/FamilyComponent'
import HomeMedicineComponent from '../component/HomeMedicineComponent'
import RecentPhotoComponent from '../component/RecentPhotoComponent'


export default function HomeScreen({navigation}) {
    const today = new Date();
    console.log(today)
    const year = today.getFullYear();
    const month = today.getMonth() +1;
    const day = today.getDate();

    return (
    <SafeAreaView style={styles.container}>
        <Text>
            {month}. {day} {year}
        </Text>
        <Button 
        title="Setting"
        onPress={()=>navigation.navigate('Setting')}
        />
 
        <FamilyComponent/>
        <HomeMedicineComponent/>
        <RecentPhotoComponent/>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
   container : {
    flex : 1,
    backgroundColor : "white",
    padding : 100
   }
});