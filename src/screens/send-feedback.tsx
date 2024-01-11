import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import { AuthPrompt, InputFrame } from "../components";
import { FullButton } from "../components/button";
import { PADDING, RADIUS, GAP, COLORS, SIZE, FONT } from "../../constants";

const SendFeedback = () => {
  return (
    <ScrollView>
      <View style={styles.body}>
        <AuthPrompt
          heading="Send A Feedback"
          subheading="Tell us what new features you would love to see/use on the app"
        />

        <InputFrame label="Name" />

        <InputFrame label="Email" />

        <View style={styles.container}>
          <Text style={styles.label}>Message </Text>

          <TextInput style={styles.input} multiline={true} />
        </View>

        <FullButton label="Submit" onPress={() => {}} />
      </View>
    </ScrollView>
  );
};

export default SendFeedback;

const styles = StyleSheet.create({
  body: {
    padding: PADDING.normal,
    gap: GAP.normal,
  },

  input: {
    width: "100%",
    padding: PADDING.large,
    borderRadius: RADIUS.small,
    borderWidth: 1,
    borderColor: COLORS.black,
    height: 350,
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
