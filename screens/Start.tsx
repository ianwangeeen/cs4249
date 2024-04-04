import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import Popup from "../components/Popup";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Start = () => {
  const [groupContainerVisible, setGroupContainerVisible] = useState(false);

  const openGroupContainer = useCallback(() => {
    setGroupContainerVisible(true);
  }, []);

  const closeGroupContainer = useCallback(() => {
    setGroupContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.start}>
        <View style={[styles.startChild, styles.iconPosition]} />
        <View style={styles.startItem} />
        <Image
          style={styles.locationIcon}
          contentFit="cover"
          source={require("../assets/location.png")}
        />
        <Text style={styles.nus}>NUS</Text>
        <Image
          style={[styles.searchIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/search.png")}
        />
        <Image
          style={[styles.chatBubbleIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/chat-bubble.png")}
        />
        <View style={[styles.startInner, styles.startLayout]} />
        <Image
          style={[styles.image4Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-4.png")}
        />
        <Image
          style={[styles.image2Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-2.png")}
        />
        <Image
          style={[styles.image3Icon, styles.lineViewLayout]}
          contentFit="cover"
          source={require("../assets/image-3.png")}
        />
        <View style={[styles.lineView, styles.lineViewLayout]} />
        <View style={[styles.startChild1, styles.startLayout]} />
        <Pressable
          style={[styles.ellipseParent, styles.groupChildLayout]}
          onPress={openGroupContainer}
        >
          <Image
            style={[styles.groupChild, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={styles.text}>+</Text>
        </Pressable>
        <Image
          style={styles.image1Icon}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
      </View>

      <Modal animationType="fade" transparent visible={groupContainerVisible}>
        <View style={styles.groupContainerOverlay}>
          <Pressable
            style={styles.groupContainerBg}
            onPress={closeGroupContainer}
          />
          <Popup onClose={closeGroupContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    width: 357,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 26,
    top: 43,
    width: 26,
    position: "absolute",
  },
  startLayout: {
    height: 1,
    width: 358,
    borderTopWidth: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  lineViewLayout: {
    width: 361,
    position: "absolute",
  },
  groupChildLayout: {
    width: 48,
    position: "absolute",
  },
  startChild: {
    height: 699,
    backgroundColor: Color.colorGray_200,
    width: 357,
    top: 79,
  },
  startItem: {
    height: 79,
    top: 0,
    width: 357,
    backgroundColor: Color.colorGray_200,
    left: 0,
    position: "absolute",
  },
  locationIcon: {
    top: 46,
    left: 13,
    width: 23,
    height: 23,
    position: "absolute",
  },
  nus: {
    top: 35,
    left: 15,
    fontSize: FontSize.size_5xs,
    color: Color.colorWhite,
    width: 18,
    height: 11,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  searchIcon: {
    left: 281,
  },
  chatBubbleIcon: {
    left: 316,
  },
  startInner: {
    borderColor: Color.colorDarkslategray_200,
    top: 79,
  },
  image4Icon: {
    top: 156,
    height: 549,
  },
  image2Icon: {
    top: 704,
    height: 56,
  },
  image3Icon: {
    height: 66,
    left: 0,
    top: 79,
  },
  lineView: {
    top: 154,
    left: -2,
    borderColor: Color.colorDarkslategray_400,
    borderTopWidth: 4,
    height: 4,
    borderStyle: "solid",
    width: 361,
  },
  startChild1: {
    top: 700,
    borderColor: Color.colorDarkslategray_300,
  },
  groupContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  groupChild: {
    top: 1,
    height: 48,
    left: 0,
  },
  text: {
    left: 12,
    fontSize: FontSize.size_18xl,
    color: Color.colorBlack,
    height: 46,
    width: 26,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    top: 0,
    position: "absolute",
  },
  ellipseParent: {
    top: 655,
    left: 293,
    height: 49,
  },
  image1Icon: {
    top: 44,
    left: 130,
    width: 97,
    height: 27,
    position: "absolute",
  },
  start: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 778,
    overflow: "hidden",
  },
});

export default Start;
