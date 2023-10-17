import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONT, RADIUS, SIZE } from "../../constants";

const BookmarkAJob = () => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.label}>Save</Text>
    </Pressable>
  );
};

export default BookmarkAJob;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.purple,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: RADIUS.normal,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: COLORS.white,
    fontSize: SIZE.base,
    fontWeight: "600",
    fontFamily: FONT.regular,
  },
});
