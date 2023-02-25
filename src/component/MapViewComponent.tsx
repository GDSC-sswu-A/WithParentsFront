import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps"
import { getLocationInfo, getLastTime } from '../common/MapApi';

export default function MapViewComponent(location : any) {
  const [parents, setParents] = useState([
    {latitude: "", longitude: "", nickname: "test", userId: 0}
  ]);
  const [open, setOpen] = useState(false);
  const [pick, setPick] = useState(null);
  const [time, setTime] = useState(null);
  useEffect(() => {
    
    const getlocation = async () => {
      const result = await getLocationInfo();
      console.log(result)
      setParents(result)
  };
  getlocation();
    const getTime = async () => {
      const result = await getLastTime();
      console.log(result)
      setTime(result)
    }
    getTime();
 }, [pick]);

 console.log(pick,"pick")
  const Pick = (props) => {
    return(
      props.map((i)=>(
          <TouchableOpacity>
            <Text>{i.nickname}</Text>
          </TouchableOpacity>
      )
    ))
  }

  console.log(parents, "MapCompo")
    return (
        <>
          <View style={styles.container}>
            <TouchableOpacity style={styles.pick} onPress={()=>setOpen(!open)}>
              <Text style={{textAlign : 'center'}}>부모님 선택</Text>
            </TouchableOpacity>
            {open? null: <>
            {parents&&parents.map((item)=>(
              <TouchableOpacity onPress={()=>setPick({item})}>
              <Text>{item.nickname}</Text>
              </TouchableOpacity>
            ))}
            </>}
          
          <MapView
          style={styles.container}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: pick? pick.latitude:location.latitude,
            longitude: pick? pick.longitude:location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{latitude: pick? pick.latitude:location.latitude,longitude: pick? pick.longitude:location.longitude}}
            title='Here'
            description="recent location"
          />
        </MapView>

        <Text style={styles.title}>The last connection time</Text>
        <Text style={styles.date}>{time ? null : <>
        {time&&time.map((item)=>(
          <Text>{item.lastApiCallTime}</Text>
        ))}
        </>}</Text>
        </View>
        </>
      );
}
const styles = StyleSheet.create({
  container : {
   flex : 1,
},
  pick: {
    borderWidth: 1.5,
    borderColor: '#6A7759',
    borderRadius: 10,
    width: 100,
    padding: 10,
    marginBottom: 10,
  },
  title : {
    marginTop: 40,
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

