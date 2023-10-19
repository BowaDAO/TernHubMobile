import { Pressable, StyleSheet, Text, View } from "react-native";
import useSignOut from "../hooks/useSignout";

const Account = () => {
  const { logOut } = useSignOut();
  return (
    <View>
      <Text>Account</Text>

      <Pressable onPress={logOut}>
        <Text>signout</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Account;
