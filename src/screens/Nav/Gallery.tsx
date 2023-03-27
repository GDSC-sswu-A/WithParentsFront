import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {getGalleryInfo} from '../../common/galleryApi';
import {AddButton, GreenButton} from '../../component/ButtonComponent';
import {useRecoilState} from 'recoil';
import {
  clickImageDescription,
  clickImageId,
  clickImageUrl,
} from '../../atom/atom';

export default function Gallery({navigation}) {
  const [dataSource, setDataSource] = useState([]);
  //const [imageSourceData, setImageSourceData] = useState([]);
  const [clickImagUrl, setClickImageUrl] = useRecoilState(clickImageUrl);
  const [clickId, setClickId] = useRecoilState(clickImageId);
  const [clickdescription, setclickdescription] = useRecoilState(
    clickImageDescription,
  );

  const toGoWritePage = () => {
    navigation.navigate('GalleryWrite');
  };
  const toGoWrittenPage = (url, description, id) => {
    navigation.navigate('WrittenGalleryScreen');
    setClickImageUrl(url);
    setclickdescription(description);
    setClickId(id);
    console.log(clickdescription, clickImagUrl, clickId);

    //console.log(dataSource);
  };
  const imageinfo = () => {
    getGalleryList();
  };
  const getGalleryList = async () => {
    const imageData = await getGalleryInfo();
    //setImageSourceData(imageData.map(data => data.imageUrl));
    setDataSource(imageData);
  };

  useEffect(() => {
    getGalleryList();
    let items = dataSource.map((content, i) => {
      return {
        id: i,
        src: dataSource.map(data => data.imageUrl)[i],
      };
    });
    setDataSource(items);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <FlatList
          data={dataSource}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                toGoWrittenPage(item?.imageUrl, item?.description, item?.id);
              }}
              style={{flex: 1, flexDirection: 'column', margin: 1}}>
              <Image
                style={styles.imageThumbnail}
                source={{uri: item.imageUrl}}
              />
            </TouchableOpacity>
          )}
          //Setting the number of column
          numColumns={3}
          keyExtractor={(item, index) => index}
        />
      </View>
      <View style={styles.btnContainer}>
        <View style={styles.btnStyle}>
          <GreenButton text="Reload" on={imageinfo} />
        </View>
        <View style={styles.btnStyle}>
          <AddButton text="+" on={toGoWritePage} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 130,
  },
  imageContainer: {
    flex: 5,
  },
  btnContainer: {
    flex: 0.7,
    left: 200,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnStyle: {
    marginLeft: 10,
  },
});
