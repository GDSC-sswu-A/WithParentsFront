import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MapView, {PROVIDER_GOOGLE} from "react-native-maps"

export default function MapViewComponent() {
    return (
        <>
          <View style={styles.container}>
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
        </>
      );
}
const styles = StyleSheet.create({
  container : {
   flex : 1,
   backgroundColor : "white",
   height : 200,
   width :280,
   padding : 100 
},
  
});