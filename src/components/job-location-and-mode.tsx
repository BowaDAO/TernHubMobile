import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONT, GAP, SIZE, icon } from "../../constants";
import { jobType } from "../types/type";

const JobLocationAndMode = ({ item }: { item: jobType }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.location}>
        <Image
          source={icon.location}
          resizeMode="contain"
          style={styles.icon}
        />

        <Text style={[styles.base]}>{item.location} </Text>
      </View>
      <Text style={[styles.base]}>{item.mode} </Text>
    </View>
  );
};

export default JobLocationAndMode;

const styles = StyleSheet.create({
  icon: {
    height: 18,
    width: 18,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    gap: GAP.xsmall,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  base: {
    fontSize: SIZE.regular,
    fontWeight: "400",
    fontFamily: FONT.regular,
    color: COLORS.lightGrey,
    textTransform: "capitalize",
  },
});
