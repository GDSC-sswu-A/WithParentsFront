import React, { useState } from 'react';
import {View, Modal, StyleSheet, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const App = () => { 
  const [modalVisible, setModalVisible] =useState(false);
  
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are you sure you want to delete the text?</Text>
           
            <View style={styles.ModalButton}>
            <View style={styles.YesBtn}>
            <TouchableHighlight      //Yes 버튼
             style={{ ...styles.openButton, backgroundColor: '#2196F3'}}
              onPress={()=>{
                setModalVisible(!modalVisible)
              }}
            >
              <Text style={styles.textStyle}>Yes</Text>
              
            </TouchableHighlight>
            </View>
            <View style={styles.NoBtn}>
            <TouchableHighlight   //No 버튼
     
              style={{ ...styles.openButton, backgroundColor: '#2196F3'}}
              onPress={()=>{
                setModalVisible(!modalVisible)
              }}
            >
              <Text style={styles.textStyle}>No</Text>
              
            </TouchableHighlight>
            </View>
            </View>
          </View>
        </View>
      </Modal>
      
      <TouchableHighlight 
        style={styles.openButton}
        onPress={()=> {
          setModalVisible(true)
        }}
      >
        <Icon name="delete" size={20}  color="white" />   

      </TouchableHighlight>
    </View>
  )
}
//<Text style={styles.textStyle}>Show Modal</Text>
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    //그림자의 영역 지정
    shadowOffset: {
      width: 0,
      height:2
    },
    //불투명도 지정
    shadowOpacity: 0.25,
    //반경 지정
    shadowRadius: 3.84,
  },
  openButton: {
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 10,
    
  },

  YesBtn:{
    right:30,
  },
  NoBtn:{
    left:30,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  ModalButton:{
    flexDirection: 'row'

  }
})

export default App;