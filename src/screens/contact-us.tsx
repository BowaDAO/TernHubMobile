import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import { AuthPrompt, InputFrame } from "../components";
import { PADDING, COLORS, GAP, SIZE, FONT, RADIUS } from "../../constants";
import { FullButton } from "../components/button";

const ContactUs = () => {
  return (
    <ScrollView>
      <View style={styles.body}>
        <AuthPrompt
          heading="Ask any question"
          subheading="Please use the inbox to write your message to us"
        />

        <InputFrame label="Email" value="" />

        <View style={styles.container}>
          <Text style={styles.label}>Message </Text>

          <TextInput style={styles.input} multiline={true} />
        </View>

        <FullButton label="Submit" onPress={() => {}} />
      </View>
    </ScrollView>
  );
};

export default ContactUs;

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
    borderColor: COLORS.purple,
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
