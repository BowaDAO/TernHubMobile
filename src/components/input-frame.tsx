import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { COLORS, FONT, GAP, PADDING, RADIUS, SIZE } from "../../constants";

type Props = {
  label: string;
  onChangeText?: (text: string) => void;
};

const InputFrame = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label} </Text>

      <TextInput style={styles.input} onChangeText={props.onChangeText} />
    </View>
  );
};

export default InputFrame;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    padding: PADDING.large,
    borderRadius: RADIUS.small,
    borderWidth: 1,
    borderColor: COLORS.black,
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
