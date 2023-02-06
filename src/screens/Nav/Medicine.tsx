import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import {
  mediWeekBtnAtom,
  mediTimeAtom1,
  mediTimeAtom2,
  mediTimeAtom3,
  mediNameAtom,
  mediListAtom,
  mediType,
} from '../../atom/atom';
import {AddButton} from '../../component/ButtonComponent';
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import ICON from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Medicine({navigation}) {
  const [mediName, setMediName] = useRecoilState(mediNameAtom);
  // const [userName, setUserValue] = React.useState('');
  const [mediTime1, setMediTime1] = useRecoilState(mediTimeAtom1);
  const [mediTime2, setMediTime2] = useRecoilState(mediTimeAtom2);
  const [mediTime3, setMediTime3] = useRecoilState(mediTimeAtom3);
  //예시
  const [medicines, setmedicines] = useRecoilState<mediType[]>(mediListAtom);

  const TogoAddMediPage = () => {
    navigation.navigate('Addmedicine');
  };

  const offAlarmBtn = mediId => {
    const newMedicines = medicines.map(item => {
      if (item.id == mediId) {
        return {...item, completed: false};
      }
      return item;
    });
    setmedicines(newMedicines);
  };
  const onAlarmBtn = mediId => {
    const newMedicines = medicines.map(item => {
      if (item.id == mediId) {
        return {...item, completed: true};
      }
      return item;
    });
    setmedicines(newMedicines);
  };

  const deleteMedicine = mediId => {
    const newMedicines = medicines.filter(item => item.id != mediId);
    setmedicines(newMedicines);
  };

  const clearMedicine = () => {
    Alert.alert('Confirm', 'Clear Medicine?', [
      {
        text: 'Yes',
        onPress: () => setmedicines([]),
      },
      {text: 'No'},
    ]);
  };
  const ListItem = ({medicines}) => {
    return (
      <View style={styles.listItem}>
        <View style={{flex: 1}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              color: 'black',
              textDecorationLine: medicines?.completed
                ? 'none'
                : 'line-through',
            }}>
            {medicines?.task}
            {medicines?.id}
          </Text>
        </View>

        {/*}    {!medicines?.completed && (
          <TouchableOpacity style={[styles.actionIcon]}>
            <ICON name="notifications-off" size={18} color={'white'}></ICON>
          </TouchableOpacity>
    )}*/}

        {!medicines?.completed ? (
          <TouchableOpacity
            style={[styles.actionIcon]}
            onPress={() => onAlarmBtn(medicines?.id)}>
            <ICON name="notifications-off" size={18} color={'white'}></ICON>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.actionIcon]}
            onPress={() => offAlarmBtn(medicines?.id)}>
            <ICON name="notifications" size={18} color={'white'}></ICON>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={[styles.actionIcon, {backgroundColor: 'red'}]}
          onPress={() => deleteMedicine(medicines?.id)}>
          <Icon name="delete" size={18} color={'white'}></Icon>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userTab}>
        <Icon
          name="delete"
          size={25}
          color="red"
          onPress={clearMedicine}></Icon>
      </View>
      <View style={styles.medicineTab}>
        <FlatList
          showVerticalScrollIndicator={false}
          contentContainerStyle={{padding: 20}}
          data={medicines}
          renderItem={({item}) => <ListItem medicines={item} />}
        />
      </View>

      <View style={styles.mediAddBtn}>
        <AddButton on={TogoAddMediPage}></AddButton>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  actionIcon: {
    height: 25,
    width: 25,
    backgroundColor: '#6A7759',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  userTab: {
    flex: 0.4,
    paddingLeft: 360,
    paddingTop: 10,
    //backgroundColor: 'black',
  },
  medicineTab: {
    flex: 6,
    //backgroundColor:'yellow',
  },
  mediAddBtn: {
    flex: 1,
    left: 330,
    //position: 'absolute',
    //bottom: 20,
  },
  listItem: {
    padding: 40,
    //backgroundColor: '#E5E7E1',
    backgroundColor: 'white',
    flexDirection: 'row',
    elevation: 12,
    borderRadius: 7,
    marginVertical: 10,
  },
});
