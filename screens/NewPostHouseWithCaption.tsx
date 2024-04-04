import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const NewPostHouseWithCaption = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.newPostHouseWithCaption}>
      <View style={[styles.newPostHouseWithCaptionChild, styles.newLayout]} />
      <Image
        style={styles.newPostHouseWithCaptionItem}
        contentFit="cover"
        source={require("../assets/rectangle-11.png")}
      />
      <View
        style={[styles.newPostHouseWithCaptionInner, styles.groupChildPosition]}
      />
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View
        style={[styles.newPostHouseWithCaptionChild1, styles.lineViewLayout]}
      />
      <Text style={[styles.newPost, styles.newPostTypo]}>New Post</Text>
      <Image
        style={styles.addIcon}
        contentFit="cover"
        source={require("../assets/add.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleLayout]} />
      <Text style={[styles.iWishI, styles.iWishITypo]}>
        I wish I could live here...
      </Text>
      <View style={styles.newPostHouseWithCaptionChild2} />
      <Text style={[styles.description, styles.iWishITypo]}>Description</Text>
      <Text style={[styles.selectAudience, styles.selectAudienceLayout]}>
        Select Audience
      </Text>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("EndScreen")}
      />
      <Text style={styles.share}>Share</Text>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.rectangleLayout]} />
        <Text style={[styles.addPollLink, styles.iWishITypo]}>
          Add poll, link or GIF
        </Text>
        <Image
          style={[styles.expandArrowIcon, styles.selectAudienceLayout]}
          contentFit="cover"
          source={require("../assets/expand-arrow.png")}
        />
      </View>
      <View style={styles.component1}>
        <Text style={[styles.public, styles.nusTypo]}>Public</Text>
        <Text style={[styles.nus, styles.nusTypo]}>NUS</Text>
        <Text style={[styles.communities, styles.nusTypo]}>Communities</Text>
        <View style={[styles.toggle, styles.toggleBorder]}>
          <Image
            style={styles.toggleChild}
            contentFit="cover"
            source={require("../assets/ellipse-2.png")}
          />
        </View>
        <View style={[styles.toggle1, styles.toggleBorder]}>
          <Image
            style={styles.toggleChild}
            contentFit="cover"
            source={require("../assets/ellipse-2.png")}
          />
        </View>
        <View style={[styles.toggle2, styles.toggleBorder]}>
          <Image
            style={styles.toggleChild}
            contentFit="cover"
            source={require("../assets/ellipse-2.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  newLayout: {
    width: 357,
    position: "absolute",
  },
  groupChildPosition: {
    top: 0,
    left: 0,
  },
  lineViewLayout: {
    height: 1,
    width: 358,
    borderTopWidth: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  newPostTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_11xl,
  },
  rectangleLayout: {
    height: 41,
    width: 345,
    position: "absolute",
  },
  iWishITypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  selectAudienceLayout: {
    height: 28,
    position: "absolute",
  },
  nusTypo: {
    left: "0%",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  toggleBorder: {
    padding: Padding.p_9xs,
    flexDirection: "row",
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_81xl,
    left: "79.68%",
    right: "0%",
    width: "20.32%",
    height: "26.23%",
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  newPostHouseWithCaptionChild: {
    backgroundColor: Color.colorGray_200,
    height: 735,
    left: 0,
    width: 357,
    top: 51,
  },
  newPostHouseWithCaptionItem: {
    width: 117,
    height: 118,
    left: 6,
    top: 51,
    position: "absolute",
  },
  newPostHouseWithCaptionInner: {
    backgroundColor: Color.colorBlack,
    height: 51,
    width: 357,
    position: "absolute",
  },
  lineView: {
    borderColor: Color.colorDarkslategray_200,
    top: 51,
  },
  newPostHouseWithCaptionChild1: {
    top: 708,
    borderColor: Color.colorDarkslategray_300,
  },
  newPost: {
    left: 117,
    width: 124,
    height: 35,
    top: 8,
    position: "absolute",
  },
  addIcon: {
    top: 87,
    left: 139,
    width: 40,
    height: 40,
    position: "absolute",
  },
  rectangleView: {
    top: 175,
    backgroundColor: Color.colorDarkslategray_100,
    borderRadius: Border.br_7xs,
    height: 41,
    left: 6,
  },
  iWishI: {
    top: 183,
    left: 13,
  },
  newPostHouseWithCaptionChild2: {
    top: 227,
    height: 98,
    width: 345,
    backgroundColor: Color.colorDarkslategray_100,
    borderRadius: Border.br_7xs,
    left: 6,
    position: "absolute",
  },
  description: {
    top: 233,
    opacity: 0.29,
    left: 13,
  },
  selectAudience: {
    top: 397,
    width: 213,
    left: 13,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_11xl,
  },
  rectanglePressable: {
    top: 723,
    left: 48,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorRoyalblue,
    borderColor: Color.colorSkyblue,
    width: 262,
    height: 36,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  share: {
    top: 726,
    left: 149,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorDarkslategray_100,
    borderRadius: Border.br_7xs,
    height: 41,
    top: 0,
    left: 0,
  },
  addPollLink: {
    left: 7,
    top: 8,
  },
  expandArrowIcon: {
    left: 304,
    width: 28,
    top: 8,
  },
  rectangleParent: {
    top: 336,
    left: 6,
  },
  public: {
    top: "1.64%",
  },
  nus: {
    top: "38.52%",
  },
  communities: {
    top: "75.41%",
  },
  toggleChild: {
    width: 24,
    height: 24,
  },
  toggle: {
    top: "-0.82%",
    bottom: "74.59%",
  },
  toggle1: {
    top: "72.95%",
    bottom: "0.82%",
  },
  toggle2: {
    top: "36.07%",
    bottom: "37.7%",
  },
  component1: {
    top: 445,
    left: 23,
    width: 315,
    height: 122,
    position: "absolute",
  },
  newPostHouseWithCaption: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 778,
    overflow: "hidden",
  },
});

export default NewPostHouseWithCaption;
