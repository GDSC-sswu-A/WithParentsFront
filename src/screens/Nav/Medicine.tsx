import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import {AddButton} from '../../component/ButtonComponent';
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import ICON from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {deleteMedicineApi, getMedicineInfo} from '../../common/medicineApi';

export default function Medicine({navigation}) {
  const [userMedicines, setUserMedicines] = React.useState([]);

  const medicineInfo = async () => {
    try {
      const result = await getMedicineInfo(1);
      const medicineData = result.request._response;

      setUserMedicines(JSON.parse(medicineData));
      //console.log(medicineData);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    medicineInfo();
  }, [userMedicines]);

  const TogoAddMediPage = () => {
    navigation.navigate('Addmedicine');
  };

  const deleteMediBtn = async mediId => {
    const result = await deleteMedicineApi(mediId);
    console.log('medicine 삭제 완료', result);
  };

  const ListItem = ({userMedicines}) => {
    return (
      <View style={styles.listItem}>
        <View style={{flex: 1}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              color: 'black',
              textDecorationLine: userMedicines?.notificationStatus
                ? 'none'
                : 'line-through',
            }}>
            {userMedicines.description}
            {userMedicines.id}
          </Text>
        </View>

        {!userMedicines?.notificationStatus ? (
          <TouchableOpacity
            style={[styles.actionIcon]}
            onPress={() => onAlarmBtn(userMedicines?.id)}>
            <ICON name="notifications-off" size={18} color={'white'}></ICON>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.actionIcon]}
            onPress={() => offAlarmBtn(userMedicines?.id)}>
            <ICON name="notifications" size={18} color={'white'}></ICON>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={[styles.actionIcon, {backgroundColor: 'red'}]}
          onPress={() => deleteMediBtn(userMedicines?.id)}>
          <Icon name="delete" size={18} color={'white'}></Icon>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/*   {userMedicines ? (
        <TodoList userMedicines={userMedicines}></TodoList>
      ) : (
        <Text>Waiting</Text>
      )}
      */}
      <View style={styles.medicineTab}>
        <FlatList
          showVerticalScrollIndicator={false}
          contentContainerStyle={{padding: 20}}
          data={userMedicines}
          renderItem={({item}) => <ListItem userMedicines={item} />}
        />
      </View>

      <View style={styles.mediAddBtn}>
        <AddButton on={TogoAddMediPage}></AddButton>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  actionIcon: {
    height: 25,
    width: 25,
    backgroundColor: '#6A7759',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  userTab: {
    flex: 0.4,
    paddingLeft: 360,
    paddingTop: 10,
    //backgroundColor: 'black',
  },
  medicineTab: {
    flex: 6,
    //backgroundColor:'yellow',
  },
  mediAddBtn: {
    flex: 1,
    left: 330,
    //position: 'absolute',
    //bottom: 20,
  },
  listItem: {
    padding: 30,
    //backgroundColor: '#E5E7E1',
    backgroundColor: 'white',
    flexDirection: 'row',
    elevation: 12,
    borderRadius: 7,
    marginVertical: 10,
  },
});
