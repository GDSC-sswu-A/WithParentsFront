import { View, Text, Pressable, Modal, StyleSheet } from 'react-native'
import React, {useState} from 'react'

import { WhiteButton } from './ButtonComponent'

export default function ModalComponent() {
    const [open, setOpen] = useState(false)
  return (
    <View style={styles.container}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={open}
        onRequestClose={() => {setOpen(false);}}
        >
        <View>
            <View style={styles.modal}>
                <View style={styles.top}>
                <Text style={{fontSize:24}}>2023.01.23</Text>
                <Pressable onPress={()=> setOpen(false)}>
                    <Text style={{fontSize:24}}>X</Text>
                </Pressable>
                </View>
                <Text style={{fontSize:24}}>MOMMY HBD</Text>
            <View style={styles.nick}>
                <Text style={{fontSize:16}}>nick |</Text>
                <Text style={{fontSize:16}}>12 : 00</Text>
            </View>
                <View style={styles.btn}>
                <WhiteButton text='edit'/>
                <WhiteButton text='delete' />
                </View>
            </View>
        </View>
            
        </Modal>
        <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setOpen(!open)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>

    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        // alignItems: 'center',
    },
      modal: {
        // height: 450,
        margin: 35,
        marginTop: 100,
        backgroundColor: '#789395',
        borderRadius: 20,
        padding: 30,
        alignItems: 'center',
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      top: {
        marginBottom: 20,
        fontSize : 24,
        width : '80%',
        flexDirection : 'row',
        justifyContent: 'space-between'
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      btn :{
        marginTop : 30,
        width : '80%',
        flexDirection : 'row',
        justifyContent: 'space-between'
    },
    nick : {
        marginTop: 10,
        flexDirection : 'row',
    }
 
  });