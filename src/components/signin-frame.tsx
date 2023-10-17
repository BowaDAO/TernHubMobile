import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { AuthFrame } from "../types/type";
import { COLORS, FONT, GAP, RADIUS, SIZE } from "../../constants";

const SigninFrame = ({ icon, label, onPress }: AuthFrame) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: GAP.small,
    borderColor: COLORS.purple,
    borderWidth: 1,
    borderRadius: RADIUS.normal,
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  icon: {
    height: 30,
    width: 30,
  },
  label: {
    fontWeight: "600",
    fontSize: SIZE.base,
    color: COLORS.purple,
    fontFamily: FONT.medium,
  },
});
export default SigninFrame;
