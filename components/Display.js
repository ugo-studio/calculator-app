import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import Animated, {useAnimatedStyle, withSpring} from 'react-native-reanimated';

const Display = ({color, fcolor, sdd, displays, dark}) => {
  const scrollRef = useRef(null);
  const secondScrollRef = useRef(null);
  useEffect(() => {
    scrollRef.current.scrollToEnd({animated: true});
  }, [displays.f]);
  useEffect(() => {
    if (color.value == '#000') {
      secondScrollRef.current.scrollToEnd({animated: true});
    }
  }, [displays.s]);

  const fDStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: withSpring(50 - sdd.value.translate)}],
    };
  });

  const sStyle = useAnimatedStyle(() => {
    return {
      height: sdd.value.height,
      display: sdd.value.display,
    };
  });

  const stStyle = useAnimatedStyle(() => {
    return {
      color: dark ? '#fff' : color.value,
      transform: [{scale: withSpring(sdd.value.scale)}],
      marginHorizontal: sdd.value.marginHorizontal,
    };
  });

  const textColor = useAnimatedStyle(() => {
    return {
      color: dark ? '#fff' : fcolor.value,
    };
  });

  return (
    <View
      style={[styles.display, {backgroundColor: dark ? '#090909FF' : '#Fff'}]}>
      <Animated.View style={[styles.firstD, fDStyle]}>
        <ScrollView ref={scrollRef} horizontal={true}>
          <Animated.Text
            selectable={true}
            selectionColor="#3B14FFFF"
            style={[styles.text, textColor]}>
            {displays.f == '' ? '0' : displays.f}
          </Animated.Text>
        </ScrollView>
      </Animated.View>
      <Animated.View style={[styles.secondD, withSpring(sStyle)]}>
        <ScrollView ref={secondScrollRef} horizontal={true}>
          <Animated.Text
            selectable={true}
            selectionColor="#3B14FFFF"
            style={[styles.textTwo, stStyle]}>
            {displays.s}
          </Animated.Text>
        </ScrollView>
      </Animated.View>
    </View>
  );
};

export default Display;

const styles = StyleSheet.create({
  display: {
    flex: 6,
    flexDirection: 'column',
    width: '95%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    borderRadius: 15,
    marginBottom: 10,
    overflow: 'hidden',
    paddingBottom: 10,
     elevation: 2,
    shadowColor: '#000',
    shadowRadius: 2,
    shadowOpacity: 0.5,
  },
  firstD: {
    backgroundColor: '#ffffff00',
    width: '100%',
    height: 60,
    paddingHorizontal: 10,
    alignItems: 'flex-end',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
    right: 0,
  },
  secondD: {
    backgroundColor: '#FFFfff00',
    width: '100%',
    paddingHorizontal: 10,
    alignItems: 'flex-end',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  text: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'right',
    textAlignVertical: 'center',
  },
  textTwo: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'right',
    textAlignVertical: 'center',
  },
});
