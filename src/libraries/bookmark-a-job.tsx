import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONT, RADIUS, SIZE } from "../../constants";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const BookmarkAJob = () => {
  const { user } = useSelector((store: RootState) => store.user);

  const handleBookmarkJob = () => {
    if (!user) {
      Alert.alert("Sign in to save job");
    }
  };

  return (
    <Pressable style={styles.container} onPress={handleBookmarkJob}>
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
