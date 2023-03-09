import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import GalleryDeleteModal from '../../component/GalleryDeleteModal';

import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('screen');

//<Icon name="delete" size={35}  color="red" />

export default function WrittenGalleryScreen({navigation}) {
  const [name, setName] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.ContainerBackground}>
        <View style={styles.textNav}>
          <Text>미뇽이 | 2022/12/20</Text>
        </View>
        <View style={styles.selectPhoto}></View>
        <View style={styles.userText}></View>
        <View style={styles.TextBot}>
          <Text> ___________________________________________</Text>
          <View style={styles.icons}>
            <GalleryDeleteModal></GalleryDeleteModal>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  ContainerBackground: {
    flex: 1,
    backgroundColor: '#E5E7E1',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textNav: {
    padding: 15,
  },
  selectPhoto: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    height: 100,
    width: 280,
    flex: 2.5,
  },

  userText: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFF3EA',
  },

  TextBot: {
    flex: 0.8,
  },
  icons: {},
});
