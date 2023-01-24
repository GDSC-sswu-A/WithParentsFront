import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import React, {useState, useEffect} from 'react'
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'
import MapViewComponent from '../../component/MapViewComponent'
import Geolocation from 'react-native-geolocation-service'
import DropDownPicker from 'react-native-dropdown-picker';

interface ILocation {
  latitude : number;
  longitude : number;
}
export default function Map() {
  const [location, setLocation] = useState<ILocation | undefined>(undefined);
  const [open, setOpen] = useState(false);
  const [parent, setParent] = useState(null);
  const [parents, setParents] = useState([
      {label: '아부지', value: '1'},
      {label: '어무니', value: '2'},
  ]);

  useEffect(() => {
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
  }, []);
  console.log("location", location)

  
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Parent's location</Text>
      <View style={styles.map}>
      <MapView
          style={styles.container}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 37.78825,
          longitude: -122.4324,
            // latitude: location.latitude,
            // longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
          coordinate={{latitude: 37.78825, longitude: -122.4324}}
          title="this is a marker"
          description="this is a marker example"
        />
        </MapView>
        
      </View>
      <Text style={styles.title}>The last connection time</Text>
      <Text style={styles.date}>2022-10-11 18:32</Text>
      <View>
      <DropDownPicker
        // style = {{backgroundColor : '#FCF4D6'}}
        containerStyle={{
          width : 100
        }}
        textStyle={{
          fontSize: 13,
          color : '#6A7759'
        }}
        labelStyle={{
          color : '#6A7759'
        }}   
        open={open}
        value={parent}
        items={parents}
        setOpen={setOpen}
        setValue={setParent}
        setItems={setParents}
        placeholder="parents"
      />
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
    // margin : 10,
    height : 320,
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