import React, {useEffect, useState} from 'react'
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
import { getHomeInfo } from '../../common/HomeApi'

export default function HomeScreen({navigation}) {
    const [data, setData] = useState(null);
    useEffect (() => {
        const init = async () => {
            const result = await getHomeInfo();
            setData(result);
        };
        init();
    }, [])
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
        
        {data? <FamilyComponent family={data.userList} />: null}
        {data? <HomeMedicineComponent date = {date} medicine={data.todayMedicationList} /> : null}
        
        <RecentPhotoComponent photo = {data.recentPhotoList}/>
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