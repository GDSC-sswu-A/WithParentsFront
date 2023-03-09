import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import {GreenButton} from '../../component/ButtonComponent';
import DateSelectComponent from '../../component/DateSelectComponent';
import InputText from '../../component/input';
import Community from '../../component/ImageSelectComponent';
export default function GalleryWriteScreen({navigation}) {
  const toGoWrittenPage = () => {
    navigation.navigate('WrittenGalleryScreen');
  };

  const [name, setName] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.selectDate}>
        <DateSelectComponent></DateSelectComponent>
      </View>
      <View style={styles.border}></View>
      <View style={styles.selectPhoto}>
        <Community></Community>
      </View>
      <View style={styles.writeMemo}>
        <InputText></InputText>
      </View>
      <View style={styles.continueBtn}>
        <GreenButton text="continue" on={toGoWrittenPage} />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  selectDate: {
    flex: 1.3,
    padding: 15,
    left: 10,
  },

  border: {
    borderBottomColor: 'darkgray',
    width: 350,
    left: 30,
    borderBottomWidth: 1,
    bottom: 15,
  },
  selectPhoto: {
    flex: 3.3,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },

  Photo: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 4,
    backgroundColor: '#F4F5F3',
    height: 100,
    width: 280,
  },

  writeMemo: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueBtn: {
    flex: 1.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
