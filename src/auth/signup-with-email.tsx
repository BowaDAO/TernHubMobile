import { View, SafeAreaView, StyleSheet, Alert } from "react-native";
import {
  InputFrame,
  AuthPrompt,
  AuthCTA,
  PasswordInputFrame,
  Loader,
} from "../components";
import { FullButton } from "../components/button";
import { GAP, PADDING } from "../../constants";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../server/firebase/config";
import { useDispatch } from "react-redux";
import { signin } from "../redux/slice/user-slice";
import * as SecureStore from "expo-secure-store";

const SignupWithEmail = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [profession, setProfession] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useDispatch();

  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const canSignup = Boolean(email && password && profession);

  const handleSignup = async () => {
    if (password.length < 6) {
      Alert.alert("Password should be at least 6 characters");
    } else {
      setLoading(true);

      await createUserWithEmailAndPassword(auth, email, password)
        .then(async (res) => {
          dispatch(
            signin({
              email: res.user.email,
              name: res.user.displayName,
              user_id: res.user.uid,
              picture: res.user.photoURL,
            })
          );

          const token = await res.user.getIdToken();

          await SecureStore.setItemAsync("refreshToken", token);

          navigation.navigate("tab");
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            Alert.alert("Email already in use");
          }
          if (error.code === "auth/invalid-email") {
            Alert.alert("Invalid email address");
          }
          if (error.code === "auth/weak-password") {
            Alert.alert(
              "Password not strong enough, please choose a stronger password"
            );
          }
          if (error.code === "auth/network-request-failed") {
            Alert.alert(
              "Network error!",
              "Please check your internet connection and try again."
            );
          }
          if (error.code === "auth/permission-denied") {
            Alert.alert("permission denied");
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading && <Loader />}

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
          placeholder="At least 6 characters"
        />

        <InputFrame
          label="What best describes you?"
          value={profession}
          onChangeText={setProfession}
        />
      </View>

      <FullButton
        label="Create account"
        onPress={handleSignup}
        disabled={!canSignup}
      />

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
