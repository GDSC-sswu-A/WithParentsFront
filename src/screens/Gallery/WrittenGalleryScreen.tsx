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
import {useRecoilState} from 'recoil';
import {clickImageDescription, clickImageUrl} from '../../atom/atom';

const {width, height} = Dimensions.get('screen');

//<Icon name="delete" size={35}  color="red" />

export default function WrittenGalleryScreen({navigation}) {
  const [name, setName] = useState('');
  const [clickImagUrl, setClickImageUrl] = useRecoilState(clickImageUrl);
  const [clickdescription, setclickdescription] = useRecoilState(
    clickImageDescription,
  );

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          uri: clickImagUrl,
        }}
        style={styles.imageStyle}
      />
      <View style={styles.userText}>
        <Text>{clickdescription}</Text>
      </View>
      <View style={styles.TextBot}>
        <Text> ___________________________________________</Text>
        <GalleryDeleteModal></GalleryDeleteModal>
      </View>
      <View stlye={styles.iconTab}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#EFF3EA',
  },
  imageStyle: {
    flex: 4,
    resizeMode: 'contain',
    margin: 5,
  },

  textNav: {
    padding: 15,
  },

  userText: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFF3EA',
  },

  TextBot: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1.2,
  },
  iconTab: {
    flex: 1.5,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
