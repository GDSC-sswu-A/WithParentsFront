import React, {useState} from 'react';
import {View, Modal, StyleSheet, Text, TouchableHighlight} from 'react-native';
import {useRecoilState} from 'recoil';

const date = new Date();

const CheckModal = ({showModal, setShowModal, children, getClickComplete}) => {
  return (
    <View style={styles.centeredView}>
      <View style={styles.modal_bg}>
        <Modal animationType="fade" transparent={true} visible={showModal}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Did you take your medicine?{'\n'}If you ate at {children} {'\n'}{' '}
                please click<Text style={styles.redText}> Yes</Text> {'\n'}
              </Text>
              <Text style={styles.blueText}>
                Current time {date.getHours() + 9}:{date.getMinutes()}
              </Text>
              <View style={styles.ModalButton}>
                <View style={styles.YesBtn}>
                  <TouchableHighlight //Yes 버튼
                    style={{...styles.openButton}}
                    onPress={() => {
                      setShowModal(!showModal);
                      getClickComplete(true);
                      //setclickComplete(!clickComplete);
                    }}>
                    <Text style={styles.textStyle}>Yes</Text>
                  </TouchableHighlight>
                </View>

                <View style={styles.NoBtn}>
                  <TouchableHighlight //Yes 버튼
                    style={{...styles.openButton}}
                    onPress={() => {
                      setShowModal(!showModal);
                    }}>
                    <Text style={styles.textStyle}>No</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blueText: {color: 'blue', fontSize: 17},
  redText: {color: 'red'},
  modalView: {
    backgroundColor: '#789395',
    borderRadius: 20,
    padding: 25,
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
  YesBtn: {
    right: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    top: 10,
  },

  NoBtn: {
    left: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    top: 10,
  },

  textStyle: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 17,
  },
  ModalButton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default CheckModal;
