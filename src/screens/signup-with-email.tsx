import { View, SafeAreaView, StyleSheet } from "react-native";
import {
  InputFrame,
  AuthPrompt,
  AuthCTA,
  PasswordInputFrame,
} from "../components";
import { FullButton } from "../components/button";
import { GAP, PADDING } from "../../constants";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { useState } from "react";

const SignupWithEmail = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [profession, setProfession] = useState<string>("");

  return (
    <SafeAreaView style={styles.container}>
      <AuthPrompt
        heading="Create an account"
        subheading="Enter your email and password to log in to your account"
      />

      <View style={styles.input_container}>
        <InputFrame label="Email" value={email} onChangeText={setEmail} />

        <PasswordInputFrame
          label="Password"
          value={password}
          onChangeText={setPassword}
        />

        <InputFrame
          label="What best describes you?"
          value={profession}
          onChangeText={setProfession}
        />
      </View>

      <FullButton label="Create account" onPress={() => {}} />

      <AuthCTA
        label="Have an account?"
        cta="Sign in"
        onPress={() => {
          navigation.navigate("signinwithemail");
        }}
      />
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
});

export default SignupWithEmail;
