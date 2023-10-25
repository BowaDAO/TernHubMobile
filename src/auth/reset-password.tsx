import { Alert, StyleSheet, View } from "react-native";
import { InputFrame, AuthPrompt } from "../components";
import { FullButton } from "../components/button";
import { useState } from "react";
import { GAP, PADDING } from "../../constants";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../server/firebase/config";
import { useHaptic } from "../hooks";

const ResetPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const { triggerVibration } = useHaptic();

  const handleResetPassword = async () => {
    setLoading(true);

    await sendPasswordResetEmail(auth, email)
      .then(() => {
        triggerVibration();
        Alert.alert("Password reset link successfully sent to your email!");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          triggerVibration();
          Alert.alert("Invalid email address");
        }
        if (error.code === "auth/too-many-requests") {
          triggerVibration();
          Alert.alert("Too many requests!");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <View style={styles.body}>
      <AuthPrompt
        heading="Reset Password"
        subheading="Enter the email associated with your account and we will send you a password reset link."
      />

      <InputFrame
        label="Enter your email"
        value={email}
        onChangeText={setEmail}
      />

      <FullButton
        label="Submit"
        onPress={handleResetPassword}
        disabled={!email || loading}
      />
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
