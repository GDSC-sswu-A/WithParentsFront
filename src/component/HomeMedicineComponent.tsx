import React from 'react'
import { 
    View, 
    Text, 
    Image, 
    StyleSheet,
    FlatList
 } from 'react-native'

const medi = [
    {id:1, name:"타이레놀"},
    {id:2, name:"소화제"}
]
export default function HomeMedicineComponent(date) {
    let count = {medi}.medi.length
    return (
    <View style={styles.container}>
      <Image 
      style = {styles.image}
      source={require("../img/medicine.png")}/>
      <Text style={styles.title}>
        {date.date} medicine ({count})</Text>

        <FlatList
        data = {medi}
        renderItem={(item)=>(
            <MedicineItem
            id = {item.item.id}
            name = {item.item.name}
            />
        )}
        />

    </View>
  )
}

function MedicineItem(medi) {
    return(
        <View style = {styles.list}>
            <Text>• {medi.name}</Text>
        </View>

  )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : "#EFF3EA",
        margin: 20,
        padding : 20,
        borderRadius : 10
    },
    title : {
        fontSize :16,
        marginBottom : 20,
    },
    image : {
        height : 80,
        width : 80,
    },
    list : {
        margin : 3
    }
 });