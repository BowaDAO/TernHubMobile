import { StyleSheet, Text, View } from "react-native";
import { SIZE, FONT } from "../../constants";

const NoBookMarkedJobs = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.text}>There are no bookmarked jobs</Text>
    </View>
  );
};

export default NoBookMarkedJobs;

const styles = StyleSheet.create({
  text: {
    fontSize: SIZE.xl,
    fontFamily: FONT.regular,
  },
});
