import { View, SafeAreaView, StyleSheet, Alert } from "react-native";
import {
  InputFrame,
  AuthPrompt,
  PasswordInputFrame,
  Loader,
  ForgetPassword,
} from "../components";
import { FullButton } from "@/components/button";
import { GAP, PADDING } from "@/constants";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/server/firebase/config";
import { useDispatch } from "react-redux";
import { signin } from "@/redux/slice/user-slice";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";
import { useEmailVerification, useHaptic } from "../hooks";
import Toast from "react-native-toast-message";
import { DispatchType } from "@/redux/store";
import { getAUserBookmarkedJobs } from "@/redux/slice/bookmarks-slice";
import { Linking } from "react-native";

const initialState = {
  email: "",
  password: "",
};

const SigninWithEmail = () => {
  const [userLoginData, setUserLoginData] = useState(initialState);
  const [loading, setLoading] = useState<boolean>(false);

  const onChangeFormText = (name: string, value: string) => {
    setUserLoginData((userLoginData) => ({
      ...userLoginData,
      [name]: value,
    }));
  };

  const { email, password } = userLoginData;

  const dispatch: DispatchType = useDispatch();

  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const canLogin = Boolean(email && password);

  const { sendEmailVerificationCode } = useEmailVerification();

  const { triggerVibration } = useHaptic();

  const displayError = ({ message }: { message: string }) => {
    triggerVibration();
    Alert.alert(`${message}`);
  };

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
              email: res.user?.email,
              name: res.user?.displayName,
              uid: res.user?.uid,
              picture: res.user?.photoURL,
            })
          );

          dispatch(getAUserBookmarkedJobs());

          navigation.navigate("tab");
        }
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          displayError({ message: "Please enter a valid email address!" });
        }

        if (error.code === "auth/user-disabled") {
          displayError({ message: "Your account has been disabled" });
        }

        if (error.code === "auth/user-not-found") {
          displayError({ message: "Incorrect credentials!" });
        }

        if (error.code === "auth/wrong-password") {
          displayError({ message: "Incorrect password!" });
        }

        if (error.code === "auth/network-request-failed") {
          triggerVibration();

          Toast.show({
            type: "error",
            text1: "Network error!",
            text2: "Please check your internet connection and try again",
          });
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
        <InputFrame
          label="Email"
          onChangeText={(text) => onChangeFormText("email", text)}
        />

        <PasswordInputFrame
          label="Password"
          onChangeText={(text) => onChangeFormText("password", text)}
        />
      </View>

      <FullButton
        label="Sign in"
        onPress={handleSignin}
        disabled={!canLogin || loading}
      />

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
