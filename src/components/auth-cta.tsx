import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS, FONT, SIZE, GAP } from "@/constants";

type AuthCTAProp = {
  label: string;
  cta: string;
  onPress: () => void;
};

const AuthCTA = ({ label, cta, onPress }: AuthCTAProp) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>{label} </Text>
      </View>

      <Pressable onPress={onPress}>
        <Text style={[styles.cta]}>{cta} </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: COLORS.black,
    fontSize: SIZE.lg,
    fontFamily: FONT.regular,
  },
  cta: {
    color: COLORS.purple,
    fontFamily: FONT.bold,
    fontSize: SIZE.lg,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: GAP.xsmall,
  },
});

export default AuthCTA;
