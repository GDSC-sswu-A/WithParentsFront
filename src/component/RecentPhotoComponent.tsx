import React from 'react'

import { 
    View, 
    Text, 
    StyleSheet ,
    Image,
} from 'react-native'

export default function RecentPhotoComponent(props) {
    // console.log(props.photo[0].imageUrl)
    // let recentPonto = props.photo[0].imageUrl;
    const recentPhoto = {uri : props.photo[0].imageUrl}
    return (
    <View style={styles.container}>
        <Text style={styles.title}>recently Photo</Text>
        <Image 
        style={styles.image}
        resizeMode= 'contain'
        source = {recentPhoto}
        />
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