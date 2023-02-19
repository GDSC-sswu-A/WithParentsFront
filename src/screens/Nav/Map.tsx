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
interface ParentData {
  latitude: string;
  longitude: string;
  nickname: string;
  userId: number;
}
export default function Map(navigation) {
  const [location, setLocation] = useState<ILocation | undefined>(37.78825,-122.4324);
  const [parents, setParents] = useState<ParentData | undefined>(
    
  );

  useEffect(() => {
    
    const getlocation = async () => {
      const result = await getLocationInfo();
      console.log(result)
      // setParents(result);
      // result.map((i, k)=>{
      //     setParents({label: i.nickname,value: k})
      // })
  };
  
  // getlocation();
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization('always');
    }
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLocation({
          latitude,
          longitude,
        });
      },
      (e) => {
        console.log("error!!!!!!!!!!",e.code, e.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    )
    const postlocation = async () => {
      const result = await postLocationInfo(location);
  };
  postlocation();
    
  }, []);
  
  // console.log("location", location)
  
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Parent's location</Text>
      <View style={styles.map}>
        <MapViewComponent location={location}/>
    </View>
      
      <Text style={styles.title}>The last connection time</Text>
      <Text style={styles.date}>2022-10-11 18:32</Text>

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
    height : 360,
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