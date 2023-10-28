import { auth } from "../../server/firebase/config";
import { AuthPrompt } from "../components";
import { FullButton } from "../components/button";
import { View, StyleSheet } from "react-native";
import { PADDING, GAP } from "../../constants";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { Alert } from "react-native";
import ResendEmailVerificationLink from "./resend-email-verification-link";
import { signin } from "../redux/slice/user-slice";
import { useDispatch } from "react-redux";
import { useHaptic } from "../hooks";
import { DispatchType } from "../redux/store";

const VerifyEmail = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const dispatch: DispatchType = useDispatch();

  const { triggerVibration } = useHaptic();

  const confirmEmailVerification = () => {
    auth.currentUser?.reload().then(() => {
      if (auth.currentUser?.emailVerified) {
        dispatch(
          signin({
            email: auth.currentUser.email,
            name: auth.currentUser.displayName,
            uid: auth.currentUser.uid,
            picture: auth.currentUser.photoURL,
          })
        );

        navigation.navigate("tab");
      } else {
        triggerVibration();

        Alert.alert("Please verify your email address to continue!");
      }
    });
  };

  return (
    <View style={styles.body}>
      <AuthPrompt
        heading="Verify Your Email"
        subheading="A verificaton link has been sent to your email. Please click on the link to verify your email address."
      />

      <FullButton
        label="I've verified my email"
        onPress={confirmEmailVerification}
      />

      <ResendEmailVerificationLink />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: PADDING.normal,
    gap: GAP.mlarge,
  },
});

export default VerifyEmail;
