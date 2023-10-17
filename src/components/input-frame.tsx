import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { COLORS, RADIUS } from "../../constants";

const InputFrame = () => {
  return (
    <View>
      <Text>Email</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

export default InputFrame;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: RADIUS.small,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
});
