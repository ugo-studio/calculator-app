import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import Animated, {
  withSpring,
  useAnimatedStyle,
} from "react-native-reanimated";

const Switch = ({ dark, toggle }) => {
  const btnAnimation = useAnimatedStyle(() => {
    return {
      backgroundColor: !dark ? "#fff" : "#3B14FF",
      borderColor: !dark ? "#3B14FF" : "#000",
    };
  });
  const toggleAnimation = useAnimatedStyle(() => {
    return {
      backgroundColor: !dark ? "#3B14FF" : "#fff",
      left: withSpring(dark ? 33 : 2, { stiffness: 80 }),
    };
  });

  return (
    <View style={[styles.con]}>
      <Pressable onPress={() => toggle()}>
        <Animated.View style={[styles.btn, btnAnimation]}>
          <Animated.View style={[styles.toggle, toggleAnimation]} />
        </Animated.View>
      </Pressable>
    </View>
  );
};

export default Switch;

const styles = StyleSheet.create({
  con: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    height: 30,
    width: 62,
    borderRadius: 20,
    borderWidth: 1,
    padding: 1,
    position: "relative",
    top: 0,
    left: 0,
    overflow: "hidden",
    justifyContent: "center",
  },
  toggle: {
    height: 24,
    width: 24,
    borderRadius: 100 / 2,
    position: "absolute",
  },
});
