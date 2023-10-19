import { StyleSheet, Text, Pressable, Alert } from "react-native";

import { COLORS, FONT, SIZE } from "../../constants";
import { useEmailVerification } from "../hooks";

const ResendEmailVerificationLink = () => {
  const { sendEmailVerificationCode } = useEmailVerification();

  const onPress = () => {
    sendEmailVerificationCode().then(() => {
      Alert.alert("Email verification link resent");
    });
  };

  return (
    <Pressable style={styles.forget_password_container} onPress={onPress}>
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
