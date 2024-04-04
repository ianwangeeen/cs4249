import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const GroupComponentSet2 = () => {
  return (
    <View style={styles.property1defaultParent}>
      <View style={[styles.property1default, styles.property1defaultLayout]}>
        <View style={styles.ellipseParent}>
          <Image
            style={[styles.groupChild, styles.childPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-3.png")}
          />
          <Image
            style={[styles.italianPizzaIcon, styles.italianIconPosition]}
            contentFit="cover"
            source={require("../assets/italian-pizza.png")}
          />
          <Text style={[styles.food, styles.foodTypo]}>Food</Text>
        </View>
      </View>
      <View style={[styles.property1variant2, styles.property1defaultLayout]}>
        <Text style={[styles.food1, styles.foodTypo]}>Food</Text>
        <Image
          style={[styles.property1variant2Child, styles.childPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-31.png")}
        />
        <Image
          style={[styles.italianPizzaIcon1, styles.italianIconPosition]}
          contentFit="cover"
          source={require("../assets/italian-pizza.png")}
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
  childPosition: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  italianIconPosition: {
    left: "17.74%",
    right: "17.74%",
    width: "64.52%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  foodTypo: {
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_xs,
    left: "30.65%",
    position: "absolute",
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
    color: Color.colorWhite,
  },
  ellipseParent: {
    height: "122.58%",
    bottom: "-22.58%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    position: "absolute",
  },
  property1default: {
    top: 20,
  },
  food1: {
    top: "100%",
    color: Color.colorLightskyblue,
  },
  property1variant2Child: {
    height: "100%",
    bottom: "0%",
  },
  italianPizzaIcon1: {
    height: "64.52%",
    top: "17.74%",
    bottom: "17.74%",
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

export default GroupComponentSet2;
