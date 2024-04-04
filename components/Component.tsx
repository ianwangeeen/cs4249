import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Component = () => {
  return (
    <View style={styles.component1}>
      <View style={[styles.property1default, styles.property1defaultPosition]}>
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
      <View style={[styles.property1variant2, styles.property1defaultPosition]}>
        <Text style={[styles.public1, styles.nus1Typo]}>Public</Text>
        <Text style={[styles.nus1, styles.nus1Typo]}>NUS</Text>
        <Text style={[styles.communities1, styles.nus1Typo]}>Communities</Text>
        <View style={styles.toggle3}>
          <Image
            style={styles.toggleChild}
            contentFit="cover"
            source={require("../assets/ellipse-2.png")}
          />
        </View>
        <View style={[styles.toggle4, styles.toggleLayout]}>
          <Image
            style={styles.toggleChild}
            contentFit="cover"
            source={require("../assets/ellipse-2.png")}
          />
        </View>
        <View style={[styles.toggle5, styles.toggleLayout]}>
          <Image
            style={styles.toggleChild}
            contentFit="cover"
            source={require("../assets/ellipse-21.png")}
          />
        </View>
        <Image
          style={styles.plusMathIcon}
          contentFit="cover"
          source={require("../assets/plus-math.png")}
        />
        <View style={[styles.ellipseParent, styles.ellipseLayout]}>
          <Image
            style={[styles.instanceChild, styles.childPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-3.png")}
          />
          <Image
            style={[styles.dogIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/dog.png")}
          />
          <Text style={[styles.pets, styles.petsTypo]}>Pets</Text>
        </View>
        <View style={[styles.property1variant2Inner, styles.ellipseLayout]}>
          <View style={styles.ellipseGroup}>
            <Image
              style={[styles.groupChild, styles.childPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-3.png")}
            />
            <Image
              style={[styles.italianPizzaIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/italian-pizza.png")}
            />
            <Text style={[styles.food, styles.petsTypo]}>Food</Text>
          </View>
        </View>
        <View style={[styles.ellipseContainer, styles.ellipseLayout]}>
          <Image
            style={[styles.instanceChild, styles.childPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-3.png")}
          />
          <Image
            style={[styles.dogIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/good-quality.png")}
          />
          <Text style={[styles.life, styles.petsTypo]}>Life</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  property1defaultPosition: {
    width: 315,
    left: 20,
    position: "absolute",
  },
  nusTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_5xl,
    left: "0%",
    position: "absolute",
  },
  toggleBorder: {
    padding: Padding.p_9xs,
    flexDirection: "row",
    borderStyle: "solid",
    borderRadius: Border.br_81xl,
    left: "79.68%",
    right: "0%",
    height: "26.23%",
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.colorGray_100,
    width: "20.32%",
    position: "absolute",
    borderWidth: 1,
  },
  nus1Typo: {
    height: "12.43%",
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_5xl,
    left: "0%",
    position: "absolute",
  },
  toggleLayout: {
    height: "13.7%",
    padding: Padding.p_9xs,
    flexDirection: "row",
    borderStyle: "solid",
    borderRadius: Border.br_81xl,
    left: "79.68%",
    right: "0%",
    width: "20.32%",
    position: "absolute",
    borderWidth: 1,
  },
  ellipseLayout: {
    height: 62,
    width: 62,
    top: 98,
    position: "absolute",
  },
  childPosition: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    left: "17.74%",
    right: "17.74%",
    width: "64.52%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  petsTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
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
  property1default: {
    top: 20,
    height: 122,
  },
  public1: {
    top: "0.86%",
    width: "20.32%",
    height: "12.43%",
  },
  nus1: {
    width: "14.6%",
    top: "20.12%",
  },
  communities1: {
    width: "43.81%",
    top: "73.7%",
  },
  toggle3: {
    bottom: "86.3%",
    top: "0%",
    height: "13.7%",
    padding: Padding.p_9xs,
    flexDirection: "row",
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_81xl,
    left: "79.68%",
    right: "0%",
    width: "20.32%",
    position: "absolute",
    borderWidth: 1,
  },
  toggle4: {
    top: "72.84%",
    bottom: "13.46%",
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.colorGray_100,
    height: "13.7%",
  },
  toggle5: {
    top: "19.26%",
    bottom: "67.04%",
    backgroundColor: Color.colorCornflowerblue_200,
    borderColor: Color.colorCornflowerblue_100,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  plusMathIcon: {
    top: 109,
    left: 239,
    width: 40,
    height: 40,
    position: "absolute",
  },
  instanceChild: {
    height: "100%",
    bottom: "0%",
  },
  dogIcon: {
    height: "64.52%",
    top: "17.74%",
    bottom: "17.74%",
  },
  pets: {
    left: "32.26%",
    top: "100%",
    fontSize: FontSize.size_xs,
  },
  ellipseParent: {
    left: 0,
  },
  groupChild: {
    height: "81.58%",
    bottom: "18.42%",
  },
  italianPizzaIcon: {
    height: "52.63%",
    top: "14.47%",
    bottom: "32.89%",
  },
  food: {
    top: "81.58%",
    left: "30.65%",
  },
  ellipseGroup: {
    height: "122.58%",
    bottom: "-22.58%",
    width: "100%",
    top: "0%",
    right: "0%",
    left: "0%",
    position: "absolute",
  },
  property1variant2Inner: {
    left: 77,
  },
  life: {
    left: "33.87%",
    top: "100%",
    fontSize: FontSize.size_xs,
  },
  ellipseContainer: {
    left: 154,
  },
  property1variant2: {
    top: 162,
    height: 243,
  },
  component1: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    width: 367,
    height: 558,
    overflow: "hidden",
    borderWidth: 1,
  },
});

export default Component;
