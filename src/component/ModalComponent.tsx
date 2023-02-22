import { View, Text, Pressable, Modal, StyleSheet } from 'react-native'
import React, {useState} from 'react'

import { WhiteButton } from './ButtonComponent'

export default function ModalComponent(data) {
  console.log("s",data);
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
                <Text style={{fontSize:24}}>{data.data.date}</Text>
                <Pressable onPress={()=> setOpen(false)}>
                    <Text style={{fontSize:24}}>X</Text>
                </Pressable>
                </View>
                <Text style={{fontSize:24}}>{data.data.title}</Text>
            <View style={styles.nick}>
                <Text style={{fontSize:16}}>nick |</Text>
                <Text style={{fontSize:16}}>{data.data.time}</Text>
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
        <Text style={styles.textStyle}>></Text>
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
        marginTop: 250,
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
        width: 25,
        height: 25,
        justifyContent: 'center',
        borderRadius: 10,
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
    },
    textStyle: {
      fontSize: 20,
      color: '#6A7759',
      textAlign : 'center',
      fontWeight : 'bold'
    }
 
  });