import React, {useState} from 'react';
import {View, Modal, StyleSheet, Text, TouchableHighlight} from 'react-native';
import {CheckModalAtom} from '../atom/atom';
import {useRecoilState} from 'recoil';

const CheckModal = ({showModal, setShowModal, children}) => {
  return (
    <View style={styles.centeredView}>
      <View style={styles.modal_bg}>
        <Modal animationType="fade" transparent={true} visible={showModal}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{children} </Text>

              <View style={styles.ModalButton}>
                <View style={styles.Btn}>
                  <TouchableHighlight //Yes 버튼
                    style={{...styles.openButton}}
                    onPress={() => {
                      setShowModal(!showModal);
                    }}>
                    <Text style={styles.textStyle}>Yes</Text>
                  </TouchableHighlight>
                </View>

                <View style={styles.Btn}>
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

  modalView: {
    margin: 20,
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

  Btn: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    top: 5,
  },

  textStyle: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 20,
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
