import { View, SafeAreaView, StyleSheet, Alert } from "react-native";
import {
  InputFrame,
  AuthPrompt,
  PasswordInputFrame,
  Loader,
  ForgetPassword,
} from "../components";
import { FullButton } from "../components/button";
import { GAP, PADDING } from "../../constants";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../server/firebase/config";
import { useDispatch } from "react-redux";
import { signin } from "../redux/slice/user-slice";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";
import { useEmailVerification } from "../hooks";

const SigninWithEmail = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useDispatch();

  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const canLogin = Boolean(email && password);

  const { sendEmailVerificationCode } = useEmailVerification();

  const handleSignin = async () => {
    setLoading(true);

    await signInWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        const token = await res.user.getIdToken();

        await SecureStore.setItemAsync("refreshToken", token);

        if (!res.user.emailVerified) {
          sendEmailVerificationCode();

          navigation.navigate("verifyemail");
        } else {
          dispatch(
            signin({
              email: res.user.email,
              name: res.user.displayName,
              user_id: res.user.uid,
              picture: res.user.photoURL,
            })
          );

          navigation.navigate("tab");
        }
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          Alert.alert("Please enter a valid email address!");
        }

        if (error.code === "auth/user-disabled") {
          Alert.alert("Your account has been disabled");
        }

        if (error.code === "auth/user-not-found") {
          Alert.alert(
            "User not found!",
            "Please check your credentials and try again"
          );
        }

        if (error.code === "auth/wrong-password") {
          Alert.alert("Incorrect password!");
        }

        if (error.code === "auth/network-request-failed") {
          Alert.alert(
            "Network error!",
            "Please check your internet connection and try again."
          );
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading && <Loader />}

      <AuthPrompt
        heading="Welcome back"
        subheading="Enter your email and password to log in to your account."
      />

      <View style={styles.input_container}>
        <InputFrame label="Email" value={email} onChangeText={setEmail} />

        <PasswordInputFrame
          label="Password"
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <FullButton label="Sign in" onPress={handleSignin} disabled={!canLogin} />

      <ForgetPassword />
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

export default SigninWithEmail;
