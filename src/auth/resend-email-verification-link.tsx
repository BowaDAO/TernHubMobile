import { StyleSheet, Text, Pressable, Alert } from "react-native";
import { COLORS, FONT, SIZE } from "../../constants";
import { useEmailVerification, useHaptic } from "../hooks";
import Toast from "react-native-toast-message";

const ResendEmailVerificationLink = () => {
  const { sendEmailVerificationCode } = useEmailVerification();

  const { triggerVibration } = useHaptic();

  const handleSendEmailVerificationLink = () => {
    sendEmailVerificationCode().then(() => {
      triggerVibration();

      Toast.show({
        text1: "Verification link sent",
        text2:
          "Email verification link has been successfully sent to your mail",
      });
    });
  };

  return (
    <Pressable
      style={styles.forget_password_container}
      onPress={handleSendEmailVerificationLink}
    >
      <Text style={styles.forget_password}>
        Resent email verification link?
      </Text>
    </Pressable>
  );
};

export default ResendEmailVerificationLink;

const styles = StyleSheet.create({
  forget_password: {
    color: COLORS.purple,
    fontFamily: FONT.regular,
    fontSize: SIZE.lg,
  },
  forget_password_container: {
    alignSelf: "center",
  },
});
