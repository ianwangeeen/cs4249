import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const Main = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.main}>
      <View style={[styles.mainChild, styles.mainChildPosition]} />
      <View style={styles.mainItem} />
      <Image
        style={styles.locationIcon}
        contentFit="cover"
        source={require("../assets/location.png")}
      />
      <Text style={[styles.nus, styles.nusTypo]}>NUS</Text>
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
      <View style={[styles.mainInner, styles.mainLayout]} />
      <View style={styles.lineView} />
      <View style={[styles.mainChild1, styles.mainLayout]} />
      <View style={[styles.ellipseParent, styles.groupChildLayout]}>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Text style={styles.text}>+</Text>
      </View>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <Image
        style={[styles.photo202404031116411Icon, styles.mainChildPosition]}
        contentFit="cover"
        source={require("../assets/photo-20240403-111641-1.png")}
      />
      <Pressable
        style={[styles.photo202404031116412, styles.wrapperPosition]}
        onPress={() => navigation.navigate("NewPostDog")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/photo-20240403-111641-2.png")}
        />
      </Pressable>
      <Pressable
        style={styles.cancel}
        onPress={() => navigation.navigate("Start")}
      >
        <Text style={[styles.cancel1, styles.nusTypo]}>Cancel</Text>
      </Pressable>
      <Pressable
        style={[styles.wrapper, styles.wrapperPosition]}
        onPress={() => navigation.navigate("NewPostBurger")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/rectangle-10.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.container, styles.wrapperPosition]}
        onPress={() => navigation.navigate("NewPostHouse")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/rectangle-11.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mainChildPosition: {
    width: 357,
    left: 0,
    position: "absolute",
  },
  nusTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  iconLayout: {
    height: 26,
    top: 43,
    width: 26,
    position: "absolute",
  },
  mainLayout: {
    height: 1,
    width: 358,
    borderTopWidth: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  groupChildLayout: {
    width: 48,
    position: "absolute",
  },
  wrapperPosition: {
    height: 118,
    top: 159,
    position: "absolute",
  },
  mainChild: {
    backgroundColor: Color.colorGray_200,
    height: 699,
    top: 79,
  },
  mainItem: {
    backgroundColor: Color.colorBlack,
    height: 79,
    top: 0,
    width: 357,
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
    position: "absolute",
  },
  searchIcon: {
    left: 281,
  },
  chatBubbleIcon: {
    left: 316,
  },
  mainInner: {
    borderColor: Color.colorDarkslategray_200,
    top: 79,
  },
  lineView: {
    top: 154,
    left: -2,
    borderColor: Color.colorDarkslategray_400,
    borderTopWidth: 4,
    width: 361,
    height: 4,
    borderStyle: "solid",
    position: "absolute",
  },
  mainChild1: {
    top: 700,
    borderColor: Color.colorDarkslategray_300,
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
  photo202404031116411Icon: {
    top: 15,
    height: 778,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  photo202404031116412: {
    width: 118,
    height: 118,
    top: 159,
    left: 0,
  },
  cancel1: {
    fontSize: FontSize.size_4xl,
    color: "rgba(255, 255, 255, 0)",
    width: 83,
    height: 33,
  },
  cancel: {
    top: 69,
    left: 0,
    position: "absolute",
  },
  wrapper: {
    left: 120,
    width: 118,
    height: 118,
    top: 159,
  },
  container: {
    left: 240,
    width: 117,
    height: 118,
    top: 159,
  },
  main: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    overflow: "hidden",
    height: 778,
    width: "100%",
  },
});

export default Main;
