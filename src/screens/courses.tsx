import { StyleSheet, Text, View, Image } from "react-native";
import { SIZE, FONT, icon, PADDING } from "@/constants";

const Courses = () => {
  return (
    <View style={styles.body}>
      <Image
        source={icon.comingsoon}
        resizeMode="contain"
        style={{ height: 300, width: 300, marginTop: 150 }}
      />

      <Text style={styles.text}>
        We are working hard to bring you this exciting feature! Stay tuned!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    padding: PADDING.normal,
  },
  text: {
    fontSize: SIZE.xl,
    fontFamily: FONT.regular,
    textAlign: "center",
  },
});

export default Courses;
