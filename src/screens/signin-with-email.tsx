import { Text, View, SafeAreaView, StyleSheet, Pressable } from "react-native";
import { InputFrame, AuthPrompt, PasswordInputFrame } from "../components";
import { FullButton } from "../components/button";
import { COLORS, FONT, GAP, PADDING, SIZE } from "../../constants";
import { useState } from "react";

const SigninWithEmail = () => {
  const [password, setPassword] = useState<string>("");

  return (
    <SafeAreaView style={styles.container}>
      <AuthPrompt
        heading="Welcome back"
        subheading="Enter your email and password to log in to your account"
      />

      <View style={styles.input_container}>
        <InputFrame label="Email" />

        <PasswordInputFrame
          label="Password"
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <FullButton label="Sign in" onPress={() => {}} />

      <Pressable style={styles.forget_password_container}>
        <Text style={styles.forget_password}>Forget Password?</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input_container: {
    gap: GAP.mlarge,
  },
  container: {
    margin: PADDING.normal,
    gap: GAP.mlarge,
  },
  forget_password: {
    color: COLORS.purple,
    fontFamily: FONT.regular,
    fontSize: SIZE.base,
  },
  forget_password_container: {
    alignSelf: "center",
  },
});

export default SigninWithEmail;
