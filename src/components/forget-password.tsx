import { StyleSheet, Text, Pressable } from "react-native";
import { COLORS, FONT, SIZE } from "@/constants";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";

const ForgetPassword = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const onPress = () => {
    navigation.navigate("resetpassword");
  };

  return (
    <Pressable style={styles.forget_password_container} onPress={onPress}>
      <Text style={styles.forget_password}>Forgot Password?</Text>
    </Pressable>
  );
};

export default ForgetPassword;

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
