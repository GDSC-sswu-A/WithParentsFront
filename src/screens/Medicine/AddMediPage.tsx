import React, {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';
import axios from 'axios';
import CheckModal from '../../component/CheckModal';
import {GreenButton} from '../../component/ButtonComponent';
import SelectMediTimesModal from '../../component/SelectMediTimesModal';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import {createMedicationApi, getMedicineInfo} from '../../common/medicineApi';

import {
  buttonValueAtom,
  CheckModalAtom,
  mediWeekBtnAtom,
  mediTimeAtom1,
  mediTimeAtom2,
  mediTimeAtom3,
  mediNameAtom,
  mediTimeBtnAtom,
} from '../../atom/atom';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  Pressable,
  TouchableOpacity,
} from 'react-native';

//화면의 높이,너비
Dimensions.get('window').height;
Dimensions.get('window').width;

//요일 버튼 색 변경 컴포넌트 (회색=>초록)
const mediWeekBtn = (id: number, weekData) => {
  const [isSelect, setSelect] = useRecoilState(mediWeekBtnAtom);
  return (
    <Pressable
      style={[
        styles.buttonContainer,
        {backgroundColor: isSelect[id] ? '#789395' : '#EEEDED'},
      ]}
      onPress={() => {
        setSelect({
          ...isSelect,
          [id]: !isSelect[id],
        });
      }}>
      <Text style={styles.blackText}>{weekData}</Text>
    </Pressable>
  );
};
//시간 선택 컴포넌트
const SelectDosingTime = ({mediTime, setMediTime}) => {
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };
  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };
  const TimeConfirm = date => {
    hideTimePicker();
    setMediTime(date.format('HH:mm,'));
  };
  return (
    <>
      <View style={styles.selectDosingTime}>
        <View style={styles.mediTimeContainer}>
          <Text>Time</Text>

          <TouchableOpacity onPress={showTimePicker}>
            <TextInput
              style={styles.in}
              pointerEvents="none"
              placeholderTextColor="#6A7759"
              underlineColorAndroid="transparent"
              editable={false}
              value={mediTime}
            />
            {isTimePickerVisible && (
              <DateTimePickerModal
                headerTextIOS="Select the Time"
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={TimeConfirm}
                onCancel={hideTimePicker}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

//메인페이지
export default function AddmedipageScreen({navigation}) {
  const [buttonValue, setButtonValue] = useRecoilState(buttonValueAtom);
  const [mediName, setMediName] = useRecoilState(mediNameAtom);
  const [isSelect, setSelect] = useRecoilState(mediWeekBtnAtom);
  const [mediTime1, setMediTime1] = useRecoilState(mediTimeAtom1);
  const [mediTime2, setMediTime2] = useRecoilState(mediTimeAtom2);
  const [mediTime3, setMediTime3] = useRecoilState(mediTimeAtom3);

  //medicine 추가하기
  const addMedicine = async () => {
    //요일 => true,false에서 0,1 상태로 전환
    const setWeekdata = [...Object.values(isSelect)];
    const setWeekForm = setWeekdata.map(weekItem => {
      weekItem === true ? (weekItem = '1') : (weekItem = '0');
      return weekItem;
    });
    const selectWeek = setWeekForm.join('');

    //시간 배열형식으로 변환
    const TimeArray = () => {
      if (buttonValue === 1) {
        const mediTimeArray = mediTime1.split(',').slice(0, 1);
        return mediTimeArray;
      }
      if (buttonValue === 2) {
        const mediTimeData = mediTime1.concat(mediTime2);
        const mediTimeArray = mediTimeData.split(',').slice(0, 2);
        return mediTimeArray;
      }
      if (buttonValue === 3) {
        const mediTimeData = mediTime1.concat(mediTime2).concat(mediTime3);
        const mediTimeArray = mediTimeData.split(',').slice(0, 3);
        return mediTimeArray;
      }
    };

    const result = await createMedicationApi(
      1,
      mediName,
      selectWeek,
      TimeArray(),
      true,
    );

    setMediName('');
    setSelect([false, false, false, false, false, false, false]);
    setMediTime1('');
    setMediTime2('');
    setMediTime3('');
    navigation.navigate('Medicine');
  };

  //CheckModal 뜨는 조건
  const ToGoMediHome = () => {
    if (mediName === '') {
      Alert.alert('Error', 'Please input medicine name');
    } else if (Object.values(isSelect).every(day => day === false)) {
      Alert.alert('Error', 'please input day of the week');
    } else if (buttonValue === 1 && mediTime1.length !== 0) {
      addMedicine();
      //medicineInfo();
    } else if (
      buttonValue === 2 &&
      mediTime1.length !== 0 &&
      mediTime2.length !== 0
    ) {
      addMedicine();
      //medicineInfo();
    } else if (
      buttonValue === 3 &&
      mediTime1.length !== 0 &&
      mediTime2.length !== 0 &&
      mediTime3.length !== 0
    ) {
      addMedicine();
    } else {
      Alert.alert('Error', 'please input intake time');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.greenContainer}>
        {/*medicine 이름 입력하기*/}
        <View style={styles.medicineName}>
          <Text style={styles.fontStyle}>The name of the medicine</Text>
          <TextInput
            placeholder="Add medicine name"
            style={styles.input}
            value={mediName}
            onChangeText={text => setMediName(text)}
          />
        </View>
        {/*요일 선택하기*/}
        <View style={styles.medicineWeek}>
          <Text style={styles.fontStyle}>What day do you take it?</Text>
          <View style={styles.weekBtn}>
            {mediWeekBtn(0, '월')}
            {mediWeekBtn(1, '화')}
            {mediWeekBtn(2, '수')}
            {mediWeekBtn(3, '목')}
            {mediWeekBtn(4, '금')}
            {mediWeekBtn(5, '토')}
            {mediWeekBtn(6, '일')}
          </View>
        </View>
        {/*시간알람 선택하기(1~3)*/}
        <View style={styles.footer}>
          <Text style={styles.fontStyle}>Take it several times a day?</Text>
          <View style={styles.selectTimes}>
            <SelectMediTimesModal></SelectMediTimesModal>
          </View>

          <View style={styles.dosingTime}>
            {buttonValue == 1 && (
              <SelectDosingTime
                mediTime={mediTime1}
                setMediTime={setMediTime1}
              />
            )}
            {buttonValue == 2 && (
              <>
                <SelectDosingTime
                  mediTime={mediTime1}
                  setMediTime={setMediTime1}
                />
                <SelectDosingTime
                  mediTime={mediTime2}
                  setMediTime={setMediTime2}
                />
              </>
            )}
            {buttonValue == 3 && (
              <>
                <SelectDosingTime
                  mediTime={mediTime1}
                  setMediTime={setMediTime1}
                />
                <SelectDosingTime
                  mediTime={mediTime2}
                  setMediTime={setMediTime2}
                />
                <SelectDosingTime
                  mediTime={mediTime3}
                  setMediTime={setMediTime3}
                />
              </>
            )}
          </View>
        </View>
      </View>
      {/*저장버튼*/}
      <View style={styles.AddmediBtn}>
        <GreenButton text="continue" on={ToGoMediHome} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  /*selectUser: {
    flex: 1,
  },*/

  medicineName: {
    flex: 1.1,
  },
  medicineWeek: {
    flex: 1.2,
  },
  weekBtn: {
    flexDirection: 'row',
    padding: 10,
  },
  footer: {
    flex: 2.5,
  },
  fontStyle: {
    fontSize: Dimensions.get('window').width / 23,
    color: 'black',
    marginBottom: 8,
  },
  greenContainer: {
    flex: 1,
    backgroundColor: '#E5E7E1',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  AddmediBtn: {
    alignItems: 'center',
  },

  input: {
    height: 36,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FFFBE9',
  },

  selectTimes: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  dosingTime: {
    disply: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  in: {
    width: 100,
    height: 30,
    borderRadius: 10,
    backgroundColor: '#FFFBE9',
    padding: 5,
    marginLeft: 40,
    color: '#6A7759',
  },

  mediTimeContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
  },
  buttonContainer: {
    backgroundColor: '#EEEDED',
    width: 30,
    height: 30,
    borderRadius: 10,
    marginRight: 17,
    justifyContent: 'center',
  },
  blackText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 15,
    fontWeight: '300',
  },
  selectDosingTime: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
