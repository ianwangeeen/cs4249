import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Padding, Border, Color } from "../GlobalStyles";

const Toggle = () => {
  return (
    <View style={styles.toggle}>
      <View style={[styles.stateoff, styles.stateonLayout]}>
        <Image
          style={styles.stateoffChild}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
      </View>
      <View style={[styles.stateon, styles.stateonLayout]}>
        <Image
          style={styles.stateoffChild}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  stateonLayout: {
    padding: Padding.p_9xs,
    flexDirection: "row",
    width: 64,
    borderStyle: "solid",
    borderRadius: Border.br_81xl,
    left: 20,
    position: "absolute",
    borderWidth: 1,
  },
  stateoffChild: {
    width: 24,
    height: 24,
  },
  stateoff: {
    top: 20,
    backgroundColor: Color.colorGray_100,
    borderColor: Color.colorGainsboro_200,
  },
  stateon: {
    top: 72,
    backgroundColor: Color.colorCornflowerblue_200,
    borderColor: Color.colorCornflowerblue_100,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  toggle: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    width: 104,
    height: 124,
    overflow: "hidden",
    borderWidth: 1,
  },
});

export default Toggle;
