import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { COLORS, FONT, GAP, PADDING, RADIUS, SIZE } from "../../constants";

type Prop = {
  label: string;
  value: string;
  onChangeText?: (text: string) => void;
};

const InputFrame = ({ label, value, onChangeText }: Prop) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label} </Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default InputFrame;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    paddingVertical: PADDING.large,
    paddingHorizontal: PADDING.xlarge,
    borderRadius: RADIUS.small,
    borderWidth: 1,
    borderColor: COLORS.purple,
    height: 52,
    fontSize: SIZE.lg,
  },
  container: {
    gap: GAP.regular,
  },
  label: {
    fontWeight: "400",
    fontSize: SIZE.lg,
    fontFamily: FONT.regular,
  },
});
