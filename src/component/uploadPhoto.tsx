import React from 'react';
import {SafeAreaView, View, StyleSheet, Button, TextInput} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

const options = {
  title: 'Select Image',
  type: 'library',
  options: {
    maxHeight: 200,
    maxWidth: 200,
    selectionLimit: 1,
    mediaType: 'photo',
    includeBase64: false,
  },
};

const UploadPhoto = () => {
  const openGallery = async () => {
    const images = await launchImageLibrary(options);
    console.log(images.assets[0]);
    const formdata = new FormData();
    formdata.append('file', {
      uri: images.assets[0].uri,
      type: images.assets[0].type,
      name: images.assets[0].fileName,
    });

    let res = await fetch(URI, {
      method: 'post',
      body: formdata,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    let responseJson = await res.json();
    console.log(responseJson);
  };

  return (
    <SafeAreaView>
      <View>
        <Button onPress={openGallery} title="upload"></Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default UploadPhoto;
