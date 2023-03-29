import { View, Text, StyleSheet, Label, TouchableOpacity, Platform } from 'react-native'
import React, {useState, useEffect, useRef} from 'react'
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'
import MapViewComponent from '../../component/MapViewComponent'
import Geolocation, { PositionError } from 'react-native-geolocation-service'

import { postLocationInfo, getLocationInfo } from '../../common/MapApi';

interface ILocation {
  latitude : number;
  longitude : number;
}
export default function Map(navigation) {
  // const [location, setLocation] = useState<ILocation | undefined>(37.579209,127.059516);
  const [lat, setLat] = useState(37.579209);
  const [lon, setLon] = useState(127.05916)
  useEffect(() => {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization('always');
    }
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        console.log(latitude, longitude, "$$")
        setLat(latitude)
        setLon(longitude);
        // setLocation({
        //   latitude,
        //   longitude,
        // });
        let location = {"latitude": lat, "longitude": lon}
        console.log('?',location)
      },
      (e) => {
        console.log("error!!!!!!!!!!",e.code, e.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    )
    const postlocation = async () => {
      console.log('here', location)
      const result = await postLocationInfo(location);
  };
  postlocation();
    
  }, [location]);
  let location = {"latitude": lat, "longitude": lon}
  
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Parent's location</Text>
      <View style={styles.map}>
       <MapViewComponent location={location}/>
    </View>

    </View>
  )
}
const styles = StyleSheet.create({
  container : {
   flex : 1,
   backgroundColor : "white",
   padding : 20
  },
  map : {
    // flex : 1,
    height : 500,
    marginBottom : 40
  },
  title : {
    backgroundColor : "#EFF3EA",
    fontSize : 20,
    fontWeight: '300',
    padding : 5,
    marginBottom : 20
  },
  date : {
    marginBottom : 40
  }
});