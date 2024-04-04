import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

export type PopupType = {
  onClose?: () => void;
};

const Popup = ({ onClose }: PopupType) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.popup}>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <View style={styles.groupItem} />
        <Text style={[styles.takePhotosOr, styles.takePhotosOrTypo]}>
          Take Photos or Video
        </Text>
        <Pressable
          style={[styles.rectangleGroup, styles.groupLayout]}
          onPress={() => navigation.navigate("Main")}
        >
          <View style={[styles.groupInner, styles.groupLayout]} />
          <Text style={[styles.addMediaFrom, styles.takePhotosOrTypo]}>
            Add media from gallery
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 147,
    position: "absolute",
    width: 357,
  },
  groupPosition: {
    top: 0,
    left: 0,
  },
  takePhotosOrTypo: {
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_4xl,
    position: "absolute",
  },
  groupLayout: {
    height: 51,
    width: 289,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorGray_200,
    height: 147,
    position: "absolute",
    width: 357,
    borderTopRightRadius: Border.br_9xl,
    borderTopLeftRadius: Border.br_9xl,
    top: 0,
  },
  groupItem: {
    top: 17,
    left: 139,
    borderStyle: "solid",
    borderColor: Color.colorDarkgray,
    borderTopWidth: 8,
    width: 74,
    height: 8,
    position: "absolute",
  },
  takePhotosOr: {
    top: 34,
    left: 22,
    color: Color.colorGainsboro_100,
    width: 301,
    height: 37,
  },
  groupInner: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhitesmoke,
    top: 0,
    left: 0,
  },
  addMediaFrom: {
    top: 9,
    left: 26,
    color: Color.colorBlack,
    width: 232,
    height: 25,
  },
  rectangleGroup: {
    top: 71,
    left: 34,
  },
  rectangleParent: {
    top: -1,
    left: 0,
    height: 147,
  },
  popup: {
    backgroundColor: Color.colorWhite,
    height: 144,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
    width: 357,
    borderTopRightRadius: Border.br_9xl,
    borderTopLeftRadius: Border.br_9xl,
  },
});

export default Popup;
