import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {AddButton, GrayButton} from '../../component/ButtonComponent';
import CheckModal from '../../component/CheckModal';
import ICON from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {deleteMedicineApi, getMedicineInfo} from '../../common/medicineApi';

export default function Medicine({navigation}) {
  const [userMedicines, setUserMedicines] = React.useState([]);
  const [showModal, setShowModal] = useState(false);
  const weekData = ['월', ' 화', ' 수', ' 목', ' 금', ' 토', ' 일'];
  const [selectbtnValue, setBtnValue] = useState();
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
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    medicineInfo();
  }, []);

  const TogoAddMediPage = () => {
    navigation.navigate('Addmedicine');
    console.log(showModal);
  };

  const deleteMediBtn = async mediId => {
    try {
      const result = await deleteMedicineApi(mediId);
      console.log('medicine 삭제 완료', result.data);
    } catch (e) {
      console.log(e);
    }
  };

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
              하루&nbsp;
              {
                Array.from(userMedicines?.dayOfTheWeekList).filter(
                  n => n === '1',
                ).length
              }
              번 복용
            </Text>
          </View>
          <View style={styles.mediTime}>
            {userMedicines?.dosingTimes.map((content, i) => {
              return (
                <View style={styles.mediTimeData} key={i}>
                  <GrayButton
                    on={() => {
                      openModal(content);
                    }}
                    text={content}></GrayButton>
                </View>
              );
            })}
          </View>
        </View>
        <View>
          {showModal && (
            <CheckModal
              children={`Did you take your medicine?\n If you ate at ${selectbtnValue},\n  please click Yes\n Current time:${
                date.getHours() + 9
              }:${date.getMinutes()}
              `}
              showModal={showModal}
              setShowModal={setShowModal}></CheckModal>
          )}
        </View>
        <View style={styles.mediIcons}>
          {!userMedicines?.notificationStatus ? (
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
          )}

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

      <View style={styles.mediAddBtn}>
        <AddButton on={TogoAddMediPage}></AddButton>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  black: {
    color: '#424242',
    fontSize: 13,
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
  userTab: {
    flex: 0.2,
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
    padding: 15,
    //backgroundColor: '#E5E7E1',
    backgroundColor: '#dcedc8',
    flexDirection: 'row',
    //  elevation: 12,
    borderRadius: 7,
    marginVertical: 10,

    //   alignItems: 'center',
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
    // justifyContent: 'flex-start',
  },
});
function useCallback() {
  throw new Error('Function not implemented.');
}
