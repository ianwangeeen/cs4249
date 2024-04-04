import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const NewPostDogWithCaption = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.newPostDogWithCaption}>
      <View style={[styles.newPostDogWithCaptionChild, styles.newLayout]} />
      <View
        style={[styles.newPostDogWithCaptionItem, styles.groupChildPosition]}
      />
      <View
        style={[styles.newPostDogWithCaptionInner, styles.lineViewLayout]}
      />
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <Image
        style={styles.photo202404031116413Icon}
        contentFit="cover"
        source={require("../assets/photo-20240403-111641-2.png")}
      />
      <Text style={[styles.newPost, styles.newPostTypo]}>New Post</Text>
      <Image
        style={styles.addIcon}
        contentFit="cover"
        source={require("../assets/add.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleLayout]} />
      <Text style={[styles.iLoveDogs, styles.iLoveDogsTypo]}>
        I love dogs!!
      </Text>
      <View style={styles.newPostDogWithCaptionChild1} />
      <Text style={[styles.description, styles.iLoveDogsTypo]}>
        Description
      </Text>
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
        <Text style={[styles.addPollLink, styles.iLoveDogsTypo]}>
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
  iLoveDogsTypo: {
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
  newPostDogWithCaptionChild: {
    backgroundColor: Color.colorGray_200,
    height: 735,
    left: 0,
    width: 357,
    top: 51,
  },
  newPostDogWithCaptionItem: {
    backgroundColor: Color.colorBlack,
    height: 51,
    width: 357,
    position: "absolute",
  },
  newPostDogWithCaptionInner: {
    borderColor: Color.colorDarkslategray_200,
    top: 51,
  },
  lineView: {
    top: 708,
    borderColor: Color.colorDarkslategray_300,
  },
  photo202404031116413Icon: {
    width: 118,
    height: 118,
    left: 6,
    top: 51,
    position: "absolute",
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
  iLoveDogs: {
    top: 183,
    left: 13,
  },
  newPostDogWithCaptionChild1: {
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
  newPostDogWithCaption: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 778,
    overflow: "hidden",
  },
});

export default NewPostDogWithCaption;
