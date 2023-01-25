import React, {useState} from 'react';
import {View, Modal, StyleSheet, Text, TouchableHighlight} from 'react-native';
import {GreenButton} from './ButtonComponent';
import {LoginAtom} from '../atom/atom';
import {useRecoilState} from 'recoil';

const LoginModal = () => {
  const [LoginmodalVisible, setLoginModalVisible] = useRecoilState(LoginAtom);
  return (
    <View style={styles.centeredView}>
      <View style={styles.modal_bg}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={LoginmodalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Check if you missed anything during the login process.
              </Text>

              <View style={styles.ModalButton}>
                <View style={styles.YesBtn}>
                  <TouchableHighlight //Yes 버튼
                    style={{...styles.openButton}}
                    onPress={() => {
                      setLoginModalVisible(!LoginmodalVisible);
                    }}>
                    <Text style={styles.textStyle}>Yes</Text>
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
/*
      <TouchableHighlight style={styles.openButton}>
        {/* onPress={() => {
          setModalVisible(true);
        }
        <GreenButton
          text="Next"
          on={() => {
            setModalVisible(true);
          }}></GreenButton>
        </TouchableHighlight>*/

//<Text style={styles.textStyle}>Show Modal</Text>
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

  YesBtn: {
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
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
    fontSize: 17,
  },
  ModalButton: {
    flexDirection: 'row',
  },
});

export default LoginModal;
