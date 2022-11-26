import React from 'react'

import { 
    View, 
    Text, 
    StyleSheet ,
    Image,
} from 'react-native'

const recentPonto = {url : "../img/moon.jpeg"}

export default function RecentPhotoComponent() {
    let image = recentPonto.url
    return (
    <View style={styles.container}>
        <Text style={styles.title}>recently Photo</Text>
        <Image 
        style={styles.image}
        resizeMode= 'contain'
        source={image}/>
    </View>
    
    
  )
}

const styles = StyleSheet.create({
    container : {
        margin: 20
    },
    title : {
        backgroundColor : "#EFF3EA",
        width : 140,
        fontSize :20,
        marginBottom : 20
    },
    image : {
        height : 160,
        width : 160,
        borderRadius : 10,
        borderColor : "#6A7759",
        borderWidth : 1,
    }
 });