import React from 'react';
import {Text, View, Button} from 'react-native';
import styled from 'styled-components';

//카메라, 앨범 접근 라이브러리
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Container = styled.View`
  flex: 1;
  color: purple;
`;
const Box1 = styled.View`
  flex: 1;
  background-color: tomato;
  border: 2px solid black;
`;
const Box2 = styled.View`
  flex: 3;
  background-color: skyblue;
  border: 2px solid black;
`;

/* option 사용법
launchCamera({saveToPhotos:true}, response=>{
  this.setState({
    avatar: response.uri
  })
})
*/

const ShowPicker = () => {
  //launchImageLibrary : 사용자 앨범 접근
  launchImageLibrary({}, res => {
    alert(res.assets[0].uri);
    const formdata = new FormData();
    formdata.append('file', res.assets[0].uri);
    console.log(res);
  });
};

const Community = () => {
  return (
    <Container>
      <View style={{flex: 1, padding: 16}}>
        <Button title="show picker" onPress={ShowPicker}></Button>
      </View>
      <Box1>
        <Text>카테고리</Text>
      </Box1>
      <Box2 />
    </Container>
  );
};

export default Community;
