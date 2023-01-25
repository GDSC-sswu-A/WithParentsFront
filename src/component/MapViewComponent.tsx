import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps"

export default function MapViewComponent(location : any, who: any) {
  console.log(location, "Mapview Component")
  console.log(location, "WHOOOOO")
    return (
        <>
          <View style={styles.container}>
          <MapView
          style={styles.container}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{latitude: location.latitude, longitude: location.longitude}}
            title={location.who.label}
            description="recent location"
          />
        </MapView>
          </View>
        </>
      );
}
const styles = StyleSheet.create({
  container : {
   flex : 1,
},
  
});