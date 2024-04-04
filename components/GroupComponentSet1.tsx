import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const GroupComponentSet1 = () => {
  return (
    <View style={styles.property1defaultParent}>
      <View style={[styles.property1default, styles.property1defaultLayout]}>
        <Image
          style={[styles.property1defaultChild, styles.goodQualityIconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-3.png")}
        />
        <Image
          style={[styles.goodQualityIcon, styles.goodQualityIconLayout]}
          contentFit="cover"
          source={require("../assets/good-quality.png")}
        />
        <Text style={[styles.life, styles.lifeTypo]}>Life</Text>
      </View>
      <View style={[styles.property1variant2, styles.property1defaultLayout]}>
        <Text style={[styles.life1, styles.lifeTypo]}>Life</Text>
        <Image
          style={[styles.property1defaultChild, styles.goodQualityIconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-31.png")}
        />
        <Image
          style={[styles.goodQualityIcon, styles.goodQualityIconLayout]}
          contentFit="cover"
          source={require("../assets/good-quality.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  property1defaultLayout: {
    height: 62,
    width: 62,
    left: 20,
    position: "absolute",
  },
  goodQualityIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  lifeTypo: {
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_xs,
    left: "33.87%",
    top: "100%",
    position: "absolute",
  },
  property1defaultChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  goodQualityIcon: {
    height: "64.52%",
    width: "64.52%",
    top: "17.74%",
    right: "17.74%",
    bottom: "17.74%",
    left: "17.74%",
  },
  life: {
    color: Color.colorWhite,
  },
  property1default: {
    top: 20,
  },
  life1: {
    color: Color.colorLightskyblue,
  },
  property1variant2: {
    top: 102,
  },
  property1defaultParent: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 102,
    height: 184,
    overflow: "hidden",
  },
});

export default GroupComponentSet1;
