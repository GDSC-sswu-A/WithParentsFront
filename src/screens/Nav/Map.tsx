import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'
import MapViewComponent from '../../component/MapViewComponent'

export default function Map() {
  return (
    <View style={styles.container}>
      <View style={styles.map}>
      <MapView
          style={styles.container}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container : {
   flex : 1,
   backgroundColor : "white",
  },
  map : {
    // flex : 1,
    margin : 10,
    height : 500

    
  }
  
});