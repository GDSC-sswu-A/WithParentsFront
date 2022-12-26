import * as React from 'react';
import {
  Text,
  View,
  Platform,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Pressable,
  Animated,
} from 'react-native';
import { debounce } from 'lodash';

const BUTTON_HEIGHT = 50;
const VIEW_HEIGHT = BUTTON_HEIGHT * 3;
const VIEW_WIDTH = 250;
const GAP = 12;

const getCenterPosition = (offsetY) => {
  return Math.round(offsetY / BUTTON_HEIGHT) * BUTTON_HEIGHT;
};
const getCenterPositionFromIndex = (index) => {
  return index * BUTTON_HEIGHT;
};
const fillEmpty = (visibleCount, values) => {
  const fillCount = (visibleCount - 1) / 2;
  for (let i = 0; i < fillCount; i++) {
    values.unshift('');
    values.push('');
  }
  return values;
};

export default function DateTimePickerModal() {
  return (
    <View style={styles.view}>
      <TimePicker
        width={VIEW_WIDTH}
        buttonHeight={BUTTON_HEIGHT}
        visibleCount={3}
      />
    </View>
  );
}

const TimePicker = ({ width, buttonHeight, visibleCount }) => {
  if (visibleCount % 2 === 0) throw new Error('visibleCount must be odd');

  const scrollY = React.useRef(new Animated.Value(0)).current;
  const refs = React.useRef(
    Array.from({ length: 3 }).map(() => React.createRef())
  );

  const getOnScrollStop = (index) => (offsetY, label) => {
    const CENTER_POSITION = getCenterPosition(offsetY);
    refs.current[index].current.scrollTo({ y: CENTER_POSITION });
  };

  const getScrollProps = (index) => {
    const onScrollStop = debounce(getOnScrollStop(index), 200, {
      leading: false,
      trailing: true,
    });
    return {
      showsVerticalScrollIndicator: false,
      contentContainerStyle: {
        left: 0,
        right: 0,
        position: 'absolute',
      },
      ref: refs.current[index],
      onScrollBeginDrag: () => {
        onScrollStop.cancel();
      },
      onScrollEndDrag: (e) => {
        onScrollStop.cancel();
        onScrollStop(e.nativeEvent.contentOffset.y, 'onScrollEndDrag');
      },
      onMomentumScrollBegin: () => {
        onScrollStop.cancel();
      },
      onMomentumScrollEnd: (e) => {
        onScrollStop.cancel();
        onScrollStop(e.nativeEvent.contentOffset.y, 'onMomentumScrollEnd');
      },
    };
  };

  const [scrollProps] = React.useState(() => {
    return Array.from({ length: 3 }).map((_, index) => getScrollProps(index));
  });

  const getOnPress = (scrollViewIdx, buttonIdx) => () => {
    const targetIdx = buttonIdx - 1;
    if (targetIdx < 0) return;
    const CENTER_POSITION = getCenterPositionFromIndex(targetIdx);
    scrollProps[scrollViewIdx].ref.current.scrollTo({ y: CENTER_POSITION });
  };

  return (
    <View
      style={[
        styles.container,
        { width, height: visibleCount * buttonHeight },
      ]}>
      <ScrollView {...scrollProps[0]}>
        {fillEmpty(visibleCount, ['오전', '오후']).map((item, index) => (
          <Button label={item} onPress={getOnPress(0, index)} />
        ))}
      </ScrollView>
      <GapView />
      <ScrollView {...scrollProps[1]}>
        {fillEmpty(visibleCount, [
          '12',
          '01',
          '02',
          '03',
          '04',
          '05',
          '06',
          '07',
          '08',
          '09',
          '10',
          '11',
        ]).map((item, index) => (
          <Button label={item} onPress={getOnPress(1, index)} />
        ))}
      </ScrollView>
      <GapView />
      <ScrollView {...scrollProps[2]}>
        {fillEmpty(visibleCount, [
          '00',
          '05',
          '10',
          '15',
          '20',
          '25',
          '30',
          '35',
          '40',
          '45',
          '50',
          '55',
        ]).map((item, index) => (
          <Button label={item} onPress={getOnPress(2, index)} />
        ))}
      </ScrollView>
      <OverlayView />
    </View>
  );
};

const Button = ({ label, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const OverlayView = () => {
  return (
    <View
      pointerEvents={'none'}
      style={[StyleSheet.absoluteFill, styles.overlay]}>
      <View style={styles.overlayVisibleView}>
        <View style={styles.overlayVisibleViewInner} />
        <GapView />
        <View style={styles.overlayVisibleViewInner} />
        <GapView>
          <Text style={{ position: 'absolute', textAlign: 'center' }}>
            {':'}
          </Text>
        </GapView>
        <View style={styles.overlayVisibleViewInner} />
      </View>
    </View>
  );
};

const GapView = ({ children }) => {
  return (
    <View
      style={{ alignItems: 'center', justifyContent: 'center', width: GAP }}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFBE9',
    padding: 10,
  },
  container: {
    //borderWidth: 1,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  button: {
    borderBottomWidth:1,
    borderColor:'#FFFBE9',
    height: BUTTON_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLabel: {
    fontWeight: 'bold',
  },
  overlay: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlayVisibleView: {
    width: '100%',
    height: BUTTON_HEIGHT,
    flexDirection: 'row',
  },
  overlayVisibleViewInner: {
    flex: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#c8c8c8',
  },
});
