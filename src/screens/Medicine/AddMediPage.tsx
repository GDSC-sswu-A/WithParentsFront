import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import axios from 'axios';

import CheckModal from '../../component/CheckModal';
import {GreenButton} from '../../component/ButtonComponent';
import SelectMediTimesModal from '../../component/SelectMediTimesModal';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';

import {
  buttonValueAtom,
  CheckModalAtom,
  mediWeekBtnAtom,
  mediTimeAtom1,
  mediTimeAtom2,
  mediTimeAtom3,
  mediNameAtom,
  mediListAtom,
  mediType,
  mediTimeListAtom,
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
  const [mediTimeList, setMediTimeList] = useRecoilState(mediTimeListAtom);

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
  const [mediTimeList, setMediTimeList] = useRecoilState(mediTimeListAtom);

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };
  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };
  const TimeConfirm = date => {
    hideTimePicker();
    setMediTime(date.format('HH:mm'));

    setMediTimeList([...mediTimeList, mediTime]);
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
  // const [userName, setUserValue] = React.useState('');
  const [checkModalVisible, setCheckModalVisible] =
    useRecoilState(CheckModalAtom);
  const [isSelect, setSelect] = useRecoilState(mediWeekBtnAtom);
  const [mediTime1, setMediTime1] = useRecoilState(mediTimeAtom1);
  const [mediTime2, setMediTime2] = useRecoilState(mediTimeAtom2);
  const [mediTime3, setMediTime3] = useRecoilState(mediTimeAtom3);
  const medicines = useRecoilValue<mediType[]>(mediListAtom);
  const [mediTimeList, setMediTimeList] = useRecoilState(mediTimeListAtom);

  const setmedicines = useSetRecoilState<mediType[]>(mediListAtom);

  //medicine 추가하기

  const addMedicine = () => {
    const nextId = Math.floor(
      medicines.length > 0 ? medicines[medicines.length - 1].id + 1 : 0,
    );

    //요일 => true,false에서 0,1 상태로 전환
    const setWeekdata = [...Object.values(isSelect)];
    const setWeekForm = setWeekdata.map(weekItem => {
      weekItem === true ? (weekItem = '1') : (weekItem = '0');
      return weekItem;
    });
    const selectWeek = setWeekForm.join('');
    console.log(mediTime1);

    //setMediTimeList([...mediTimeList, mediTime1]);
    console.log(mediTimeList);

    /*
    axios
      .post('http://3.37.21.121:8080/api/medication/createMedication', {
        userId: nextId,
        description: mediName,
        //completed: true,
        dayOfTheWeekList: selectWeek,
        dosingTime: mediTime1,
      })
      .then(function (response) {
        console.log('medicine 추가');
      })
      .catch(function (error) {
        console.log('medicine 추가오류');
      });
    /*const mediType = {
      userId: nextId,
      description: mediName,
      completed: true,
      dayOfTheWeekList: isSelect.join(''),
      dosingTime: [mediTime1, mediTime2, mediTime3],
    };*/
    // setmedicines([...medicines, mediType]);
    navigation.navigate('Medicine');
    setMediName('');
    setSelect([false, false, false, false, false, false]);

    /* const medicine: mediType = {
      id: nextId,
      task: mediName,
      completed: false,
    };
    setmedicines([...medicines, medicine]);*/
  };

  //CheckModal 뜨는 조건
  const ToGoMediHome = () => {
    if (mediName === '') {
      Alert.alert('Error', 'please input medicine name');
    } /*else if (isSelect.every(day => day === false)) {
      Alert.alert('Error', 'please input day of the week');

      //      setCheckModalVisible(!checkModalVisible);
    }*/ else if (buttonValue === 1 && mediTime1.length !== 0) {
      navigation.navigate('Medicine');
      addMedicine();
    } else if (
      buttonValue === 2 &&
      mediTime1.length !== 0 &&
      mediTime2.length !== 0
    ) {
      addMedicine();
      navigation.navigate('Medicine');
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
        {/*
        <View style={styles.selectUser}>
          <Text style={styles.fontStyle}>
            Whose medicine is it in the family?
          </Text>
          <TextInput
            style={styles.input}
            value={userValue}
            onChange={event => {
              const {eventCount, target, text} = event.nativeEvent;
              //onChange={(event) => console.log(event.nativeEvent.text)}
              setUserValue(text);
            }}
          />
          </View>*/}
        <View style={styles.modal}>
          {checkModalVisible && (
            <CheckModal children="Did you miss anything while writing?"></CheckModal>
          )}
        </View>
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
