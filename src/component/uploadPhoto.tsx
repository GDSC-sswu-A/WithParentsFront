// Import React
import React, {useState} from 'react';
// Import required components
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {RNS3} from 'react-native-aws3';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {launchImageLibrary} from 'react-native-image-picker';
import {SERVER_KEY} from '@env';

const Uploadphoto = props => {
  const [filePath, setFilePath] = useState({});
  const [uploadSuccessMessage, setUploadSuccessMessage] = useState('');
  const [file, setFile] = useState();

  const chooseFile = () => {
    let options = {
      mediaType: 'photo',
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);

      setUploadSuccessMessage('');
      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      setFilePath(response);
      setFile(response.assets[0].uri);
      if (Object.keys(filePath).length == 0) {
        alert('Please select image first');
        return;
      }
      RNS3.put(
        {
          // `uri` can also be a file system path (i.e. file://)
          uri: file,
          name: filePath.fileName,
          type: 'image/jpeg',
        },
        {
          keyPrefix: 'myupload/', // Ex. myuploads/
          bucket: 'withparent2', // Ex. aboutreact
          region: 'ap-northeast-2', // Ex. ap-south-1
          accessKey: 'AKIA3O3E3RRBHO6J26W6',
          // Ex. AKIH73GS7S7C53M46OQ
          secretKey: SERVER_KEY,
          successActionStatus: 201,
          type: 'image/png',
          contentType: 'image/jpg',
        },
      )
        .progress(progress =>
          setUploadSuccessMessage(
            `Uploading: ${progress.loaded / progress.total} (${
              progress.percent
            }%)`,
          ),
        )
        .catch(error => console.log(error))
        .then(response => {
          if (response.status !== 201) alert('Failed to upload image to S3');
          console.log(response.body);
          setFilePath('');
          let {bucket, etag, key, location} = response.body.postResponse;
          setUploadSuccessMessage(
            `Uploaded Successfully: 
          \n1. bucket => ${bucket}
          \n2. etag => ${etag}
          \n3. key => ${key}
          \n4. location => ${location}`,
          );
          props.setImageUrl(location);
          // console.log(location);
          /**
           * {
           *   postResponse: {
           *     bucket: "your-bucket",
           *     etag : "9f620878e06d28774406017480a59fd4",
           *     key: "uploads/image.png",
           *     location: "https://bucket.s3.amazonaws.com/**.png"
           *   }
           * }
           */
        });
    });
  };

  const uploadFile = () => {
    if (Object.keys(filePath).length == 0) {
      alert('Please select image first');
      return;
    }
    RNS3.put(
      {
        // `uri` can also be a file system path (i.e. file://)
        uri: file,
        name: filePath.fileName,
        type: 'image/jpeg',
      },
      {
        keyPrefix: 'myupload/', // Ex. myuploads/
        bucket: 'withparent2', // Ex. aboutreact
        region: 'ap-northeast-2', // Ex. ap-south-1
        accessKey: 'AKIA3O3E3RRBHO6J26W6',
        // Ex. AKIH73GS7S7C53M46OQ
        secretKey: SERVER_KEY,
        successActionStatus: 201,
        type: 'image/png',
        contentType: 'image/jpg',
      },
    )
      .progress(progress =>
        setUploadSuccessMessage(
          `Uploading: ${progress.loaded / progress.total} (${
            progress.percent
          }%)`,
        ),
      )
      .catch(error => console.log(error))
      .then(response => {
        if (response.status !== 201) alert('Failed to upload image to S3');
        console.log(response.body);
        setFilePath('');
        let {bucket, etag, key, location} = response.body.postResponse;
        setUploadSuccessMessage(
          `Uploaded Successfully: 
          \n1. bucket => ${bucket}
          \n2. etag => ${etag}
          \n3. key => ${key}
          \n4. location => ${location}`,
        );
        props.setImageUrl(location);
        // console.log(location);
        /**
         * {
         *   postResponse: {
         *     bucket: "your-bucket",
         *     etag : "9f620878e06d28774406017480a59fd4",
         *     key: "uploads/image.png",
         *     location: "https://bucket.s3.amazonaws.com/**.png"
         *   }
         * }
         */
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{uri: file}} style={styles.imageStyle} />
      <View style={styles.btnTab}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={chooseFile}>
          <Text style={styles.textStyle}>Choose(1)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={uploadFile}>
          <Text style={styles.textStyle}>Upload(2)</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
  },
  btnTab: {
    flexDirection: 'column',
    flex: 1,
    right: 40,
    top: 100,
  },

  textStyle: {
    padding: 5,
    color: 'gray',
    textAlign: 'center',
  },

  buttonStyle: {
    backgroundColor: '#FFFBE9',
    width: 80,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    //marginRight: 10,
    marginTop: 15,
  },

  imageStyle: {
    flex: 5,
    resizeMode: 'contain',
    margin: 5,
  },
});
export default Uploadphoto;
