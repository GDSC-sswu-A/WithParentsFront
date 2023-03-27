import React, {useState, useEffect} from 'react';
import {View, Modal, StyleSheet, Text, TouchableHighlight} from 'react-native';
import {YellowGreenButton} from './ButtonComponent';
import {RecoilRoot, useRecoilState} from 'recoil';
import {
  buttonValueAtom,
  mediTimeAtom1,
  mediTimeAtom2,
  mediTimeAtom3,
} from '../atom/atom';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectTimes, setSelectTimes] = useState();
  const [buttonValue, setButtonValue] = useRecoilState(buttonValueAtom);
  const [mediTime1, setMediTime1] = useRecoilState(mediTimeAtom1);
  const [mediTime2, setMediTime2] = useRecoilState(mediTimeAtom2);
  const [mediTime3, setMediTime3] = useRecoilState(mediTimeAtom3);

  const selectBtn1 = () => {
    setSelectTimes(1);
    setButtonValue(1);
    setModalVisible(false);
    setMediTime1([]);
  };

  const selectBtn2 = () => {
    setSelectTimes(2);
    setButtonValue(2);
    setModalVisible(false);
    setMediTime1([]);
    setMediTime2([]);
  };

  const selectBtn3 = () => {
    setSelectTimes(3);
    setButtonValue(3);
    setModalVisible(false);
    setMediTime1([]);
    setMediTime2([]);
    setMediTime3([]);
  };

  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Select Times</Text>

            <View style={styles.selectBtn}>
              <View style={styles.btn}>
                <YellowGreenButton text="1" on={selectBtn1}></YellowGreenButton>
              </View>
              <View style={styles.btn}>
                <YellowGreenButton text="2" on={selectBtn2}></YellowGreenButton>
              </View>
              <View style={styles.btn}>
                <YellowGreenButton text="3" on={selectBtn3}></YellowGreenButton>
              </View>
            </View>

            <TouchableHighlight
              //styles.openButton을 복사한뒤 새로운 값 backgroundColor 추가
              style={{...styles.hideButton, backgroundColor: '#FFFBE9'}}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.textStyle}>{selectTimes}</Text>
      </TouchableHighlight>
      <Text style={styles.text}>Times</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  btn: {
    padding: 5,
  },
  selectBtn: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#789395',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    //그림자의 영역 지정
    shadowOffset: {
      width: 0,
      height: 2,
    },
    //불투명도 지정
    shadowOpacity: 0.25,
    //반경 지정
    shadowRadius: 3.84,
  },
  text: {
    marginLeft: 20,
    color: 'black',
  },
  openButton: {
    backgroundColor: '#FFFBE9',
    borderRadius: 5,
    width: 30,
    height: 30,
    padding: 5,
  },

  hideButton: {
    backgroundColor: '#FFFBE9',
    borderRadius: 5,
    width: 90,
    height: 30,
    padding: 5,
  },

  textStyle: {
    color: 'black',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 17,
    color: 'white',
  },
  blackText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 15,
    fontWeight: '300',
  },
});

export default App;
