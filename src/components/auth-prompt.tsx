import { StyleSheet, Text, View } from "react-native";
import { COLORS, SIZE, FONT, GAP } from "../../constants";

type AuthPrmoptProp = {
  heading: string;
  subheading: string;
};

const AuthPrompt = ({ heading, subheading }: AuthPrmoptProp) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.heading]}> {heading} </Text>
      <Text style={[styles.text, styles.subheading]}>{subheading} </Text>
    </View>
  );
};

export default AuthPrompt;

const styles = StyleSheet.create({
  text: {
    color: COLORS.black,
    textAlign: "center",
  },
  container: {
    alignItems: "center",
    gap: GAP.small,
  },
  heading: {
    fontSize: SIZE.large,
    fontFamily: FONT.bold,
  },
  subheading: {
    fontSize: SIZE.base,
    fontFamily: FONT.regular,
  },
});
