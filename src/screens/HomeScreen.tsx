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
    const date = `${today.getMonth()+1}. ${today.getDate()} ${today.getFullYear()}`

    return (
    <SafeAreaView style={styles.container}>
        <Text>
            {date}
        </Text>
        <Button 
        title="Setting"
        onPress={()=>navigation.navigate('Setting')}
        />
 
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
   }
});