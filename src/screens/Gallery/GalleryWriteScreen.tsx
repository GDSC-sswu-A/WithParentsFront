import React, {useState} from 'react';

import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';

import {GreenButton} from '../../component/ButtonComponent';
//import DateSelectComponent from '../../component/DateSelectComponent';
import {PostGallery} from '../../common/galleryApi';
import UploadPhoto from '../../component/uploadPhoto';

export default function GalleryWriteScreen({navigation}, props) {
  const [contentText, onChangeInput] = React.useState('');
  const [imageUrl, setImageUrl] = React.useState('');

  const toGoWrittenPage = async () => {
    if (!imageUrl) {
      Alert.alert('Error', 'Please input upload Button');
    } else if (contentText == '') {
      Alert.alert('Error', 'Please input contentText');
    } else if (imageUrl && contentText) {
      const result = await PostGallery(imageUrl, contentText);
      console.log(result);
      navigation.navigate('Gallery');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/*  <View style={styles.selectDate}>
        <DateSelectComponent></DateSelectComponent>
  </View>*/}
      <View style={styles.border}></View>
      <View style={styles.selectPhoto}>
        <UploadPhoto setImageUrl={setImageUrl}></UploadPhoto>
      </View>
      <View style={styles.writeMemo}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeInput}
          value={contentText}
          placeholder="Think your happy moment :)"
          textAlignVertical="top"
        />
      </View>
      <View style={styles.continueBtn}>
        <GreenButton text="continue(3)" on={toGoWrittenPage} />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  border: {
    borderBottomColor: 'darkgray',
    width: 350,
    left: 30,
    borderBottomWidth: 1,
    bottom: 15,
  },
  selectPhoto: {
    flex: 10,
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
  input: {
    backgroundColor: '#EFF3EA',
    height: 200,
    width: 280,
    padding: 18,
  },

  writeMemo: {
    flex: 7.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueBtn: {
    flex: 2.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
