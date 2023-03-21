import React from 'react'
import { 
  View, 
  Text,
  StyleSheet ,
  FlatList,
  Image
} from 'react-native'


const member = [
  {id:1, name: "min", role:"dauther"},
  {id:2, name: "hyeong", role:"papa"}
]

export default function FamilyComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our family</Text>

      <FlatList
            data = {member}
            renderItem={(item)=>(
                <FamilyItem
                id = {item.item.id}
                name = {item.item.name}
                role = {item.item.role}
                />
            )}
        />
    </View>

  )
}

function FamilyItem(family) {
  return(
      <View style = {styles.item} >
          <Image style={styles.image} />

            <Text>{family.name}</Text>
            <Text style={styles.role}>({family.role})</Text>

      </View>

)
}

const styles = StyleSheet.create({
  container : {
      backgroundColor : "#F4F5F3",
      margin: 15,
      padding : 20,
      borderRadius : 10,
  },

  title : {
      fontSize :20,
      marginBottom : 20,
  },    
  image : {
      height : 40,
      width : 40,
      marginRight : 20,
      borderRadius : 100,
      borderColor : "#6A7759",
      borderWidth : 1,

  },
  item : {
    flexDirection : 'row',
    margin : 5,
  },
  role : {
    color : '#858484'
  }
});