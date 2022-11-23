import React from 'react'
import { 
  View, 
  Text, 
  StyleSheet,
  TouchableOpacity
} from 'react-native'

export default function SettingScreen({navigation}) {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.top}>Setting</Text> */}

      <View style={styles.menus}>
        <Text style={styles.title}>System setting</Text>
        <TouchableOpacity>
          <Text style={styles.menu}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menu}>Share Location</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menus}>
        <Text style={styles.title}>Family setting</Text>
        <TouchableOpacity
        onPress={() => navigation.navigate('CreateFamily')}> 
          <Text style={styles.menu}>Creating a New Family</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menu}>Family registration</Text>

        </TouchableOpacity>
      </View>

      <View style={styles.menus}>
        <Text style={styles.title}>System setting</Text>
        <TouchableOpacity>
          <Text style={styles.menu}>Log out</Text>

        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : "white",
    flex : 1,
  },
  top : {
    fontSize : 20,
    fontWeight : '600',
    alignSelf : 'center',
    marginTop : 20
  },
  menus :{
    margin : 30,
    marginBottom : 0

  },
  title : {
    backgroundColor : "#EFF3EA",
    fontSize : 22,
    fontWeight: '400',
    padding : 5,
    marginBottom : 20
  },
  menu : {
    fontSize : 20,
    padding : 5,
    marginBottom : 10,
    fontWeight : '300'
  }

});