import { StyleSheet, Text, View } from "react-native";
import { SIZE, FONT } from "../../constants";

const Courses = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Coming Soon!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: SIZE.xl,
    fontFamily: FONT.regular,
  },
});

export default Courses;
