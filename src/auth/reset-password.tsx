import { StyleSheet, View } from "react-native";
import { InputFrame, AuthPrompt } from "../components";
import { FullButton } from "../components/button";
import { useState } from "react";
import { GAP, PADDING } from "../../constants";

const ResetPassword = () => {
  const [email, setEmail] = useState<string>("");

  return (
    <View style={styles.body}>
      <AuthPrompt
        heading="Reset Password"
        subheading="Enter the email associated with your account and we will send you a password reset link"
      />

      <InputFrame
        label="Enter your email"
        value={email}
        onChangeText={setEmail}
      />

      <FullButton label="Submit" onPress={() => {}} disabled={!email} />
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: PADDING.normal,
    gap: GAP.mlarge,
  },
});
