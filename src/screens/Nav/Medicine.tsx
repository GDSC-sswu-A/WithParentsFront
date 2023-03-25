import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Alert,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  AddButton,
  GrayButton,
  GreenButton,
  YellowGreenButton,
} from '../../component/ButtonComponent';
import CheckModal from '../../component/CheckModal';
import ICON from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {deleteMedicineApi, getMedicineInfo} from '../../common/medicineApi';
import {useRecoilState} from 'recoil';
import {mediTimeBtnAtom} from '../../atom/atom';

export default function Medicine({navigation}) {
  const [userMedicines, setUserMedicines] = React.useState([]);
  const [showModal, setShowModal] = useState(false);
  const weekData = ['Mon', ' Tue', ' Wed', ' Thu', ' Fri', ' Sat', ' Sun'];
  const [selectbtnValue, setBtnValue] = useState();
  const [mediTimeBtn, setMediTimeBtn] = useState(false);
  const [mediTimeList, setMediTimeList] = useRecoilState(mediTimeBtnAtom);
  const date = new Date();

  const openModal = btnValue => {
    setShowModal(true);
    setBtnValue(btnValue);
  };
  const medicineInfo = async () => {
    try {
      const result = await getMedicineInfo(1);
      const medicineData = result.request._response;
      setUserMedicines(JSON.parse(medicineData));
      //timedata 이중배열돌기..?
      for (let i = 0; i < JSON.parse(medicineData).length; i++) {
        setMediTimeList(prev => [
          ...prev,
          JSON.parse(medicineData)[i].dosingTimes,
        ]);
      }
      /*setMediTimeList(
        mediTimeList.filter((v, i) => mediTimeList.indexOf(v) === i),
      );*/
      console.log(mediTimeList);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    medicineInfo();
  }, []);

  const TogoAddMediPage = () => {
    navigation.navigate('Addmedicine');
    console.log(mediTimeList);
  };

  const deleteMediBtn = async mediId => {
    try {
      const result = await deleteMedicineApi(mediId);
      console.log('medicine 삭제 완료', result.data);
    } catch (e) {
      console.log(e);
    }
  };

  /*const createTimeArray = () => {
    /* for (let i = 0; i < userMedicines.length; i++) {
      let copy = [...newTimeArray];
      setNewTimeArray(copy[i]);
    }
    console.log('timedata', newTimeArray);*/
  /*for (let i = 0; i < userMedicines.length; i++) {
      let array = userMedicines[i].dosingTime;
      for (let k = 0; k < array.length; k++) {
        setNewTimeArray(...newTimeArray, array[k]);

            for (let i = 0; i < userMedicines.length; i++) {
      newTimeArray.push(userMedicines[i].dosingTimes);
    }
    console.log(userMedicines[1].dosingTimes);
    console.log(newTimeArray);
      }
    }
  };
  };*/

  const ListItem = ({userMedicines}) => {
    return (
      <View style={styles.listItem}>
        <View style={{flex: 1}}>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'black',
                textDecorationLine: userMedicines?.notificationStatus
                  ? 'none'
                  : 'line-through',
              }}>
              {userMedicines?.description}
            </Text>
          </View>

          <View style={styles.mediWeekContainer}>
            <View style={styles.mediWeek}>
              {Array.from(userMedicines?.dayOfTheWeekList).map((week, k) => {
                return (
                  <View key={k}>
                    <Text style={styles.black}>
                      {userMedicines?.dayOfTheWeekList[k] === '1'
                        ? weekData[k]
                        : false}
                    </Text>
                  </View>
                );
              })}
            </View>
            <Text style={styles.black}>
              &nbsp;
              {
                Array.from(userMedicines?.dayOfTheWeekList).filter(
                  n => n === '1',
                ).length
              }
              &nbsp; in a week
            </Text>
          </View>
          <View style={styles.mediTime}>
            {userMedicines?.dosingTimes.map((content, i) => {
              return (
                <>
                  <Pressable
                    style={[
                      styles.buttonContainer,
                      {
                        backgroundColor: userMedicines?.dosingTimes[i]
                          ? '#FFFBE9'
                          : 'gray',
                      },
                    ]}
                    key={i}
                    onPress={() => {
                      openModal(content);
                      console.log(content);
                    }}>
                    <Text>{content.substr(0, 5)}</Text>
                  </Pressable>
                </>
              );
            })}
          </View>
        </View>
        <View>
          {showModal && (
            <CheckModal
              children={selectbtnValue.substr(0, 5)}
              showModal={showModal}
              setShowModal={setShowModal}
              setMediTimeBtn={setMediTimeBtn}
              mediTimeBtn={mediTimeBtn}></CheckModal>
          )}
        </View>
        <View style={styles.mediIcons}>
          {/*} {!userMedicines?.notificationStatus ? (
            <TouchableOpacity
              style={[styles.actionIcon]}
              onPress={TogoAddMediPage}>
              <ICON name="notifications-off" size={18} color={'white'}></ICON>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.actionIcon]}
              onPress={TogoAddMediPage}>
              <ICON name="notifications" size={18} color={'white'}></ICON>
            </TouchableOpacity>
          )}*/}

          <TouchableOpacity
            style={[styles.actionIcon, {backgroundColor: 'red'}]}
            onPressIn={() => {
              deleteMediBtn(userMedicines?.id);
            }}>
            <Icon name="delete" size={18} color={'white'}></Icon>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userTab}></View>
      <View style={styles.medicineTab}>
        <FlatList
          showVerticalScrollIndicator={false}
          contentContainerStyle={{padding: 10}}
          data={userMedicines}
          renderItem={({item}) => <ListItem userMedicines={item} />}
        />
      </View>
      <View style={styles.btnTab}>
        <View style={styles.mediAddBtn}>
          <GreenButton text={'Render'} on={medicineInfo}></GreenButton>
        </View>
        <View style={styles.mediAddBtn}>
          <AddButton on={TogoAddMediPage}></AddButton>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  black: {
    color: '#424242',
    fontSize: 13,
  },
  btnTab: {
    flexDirection: 'row',
    alignItems: 'center',
    left: 200,
  },
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
  mediWeek: {
    flexDirection: 'row',
  },
  mediAddBtn: {
    marginLeft: 20,
    marginBottom: 10,
  },
  userTab: {
    flex: 0.2,
    paddingLeft: 360,
    paddingTop: 10,
  },
  medicineTab: {
    flex: 6,
  },
  btntab: {
    flex: 1,
    left: 330,
  },
  listItem: {
    padding: 15,
    backgroundColor: '#E5E7E1',
    flexDirection: 'row',
    borderRadius: 7,
    marginVertical: 10,
  },
  buttonContainer: {
    marginLeft: 10,
    width: 70,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  mediIcons: {
    flexDirection: 'row',
  },
  mediTime: {
    flexDirection: 'row',
    marginTop: 15,
  },
  mediTimeData: {
    marginLeft: 10,
  },

  mediWeekContainer: {
    flexDirection: 'column',
  },
});
function useCallback() {
  throw new Error('Function not implemented.');
}
