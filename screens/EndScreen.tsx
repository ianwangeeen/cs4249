import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const EndScreen = () => {
  return (
    <View style={styles.endScreen}>
      <View style={[styles.endScreenChild, styles.endPosition]} />
      <Text style={styles.postHasBeen}>Post has been created!</Text>
      <View style={[styles.endScreenItem, styles.endPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  endPosition: {
    width: 357,
    left: 0,
    position: "absolute",
  },
  endScreenChild: {
    top: 51,
    backgroundColor: Color.colorGray_200,
    height: 735,
  },
  postHasBeen: {
    top: 374,
    left: 64,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.itimRegular,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  endScreenItem: {
    top: 0,
    backgroundColor: Color.colorBlack,
    height: 51,
  },
  endScreen: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 778,
    overflow: "hidden",
  },
});

export default EndScreen;
