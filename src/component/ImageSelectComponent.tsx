/*import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

const App = () => {
  const [avatar, setAvatar] = useState('');

  const addImage = async () => {
    await launchImageLibrary({}, response => {
      setAvatar(response.assets[0].uri);
    });
  };

  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      {avatar?.length > 0 ? (
        <Image source={{uri: avatar}} style={styles.avatar} />
      ) : null}
      <Button title="Add an image" onPress={() => addImage()} />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e4ab26',
  },
  avatar: {
    width: '100%',
    height: 400,
  },
});*/