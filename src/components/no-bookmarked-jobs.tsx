import { StyleSheet, Text, View } from "react-native";
import { SIZE, FONT } from "@/constants";

const NoBookMarkedJobs = ({ message }: { message: string }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.text}>{message} </Text>
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
