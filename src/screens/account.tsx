import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import useSignOut from "../hooks/useSignout";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { COLORS, FONT, GAP, PADDING, SIZE } from "../../constants";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { SigninOptions, SignupOptions } from "../containers";
import { useModal } from "../hooks";
import { useState } from "react";
import { FullButton } from "../components/button";
import { FontAwesome } from "@expo/vector-icons";

const Account = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const [showModal, setShowModal] = useState<boolean>(false);

  const { openSignupModal, closeSignupModal, signupModalVisible, openModal } =
    useModal();

  const { user } = useSelector((store: RootState) => store.user);

  const { logOut } = useSignOut();

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.user_profile_container}>
          <View style={styles.header}>
            <Text style={[styles.text, { textAlign: "center" }]}>
              Discover exciting internship and job opportunities on TernHub by
              creating a new account or signing in to an existing one
            </Text>

            <FullButton
              label="Sign in"
              onPress={() => {
                setShowModal(true);
              }}
            />
          </View>

          <View style={styles.user_profile}>
            <View style={styles.user_icon_container}>
              <FontAwesome name="user" size={48} color={COLORS.purple} />
            </View>

            {user && <Text>{user?.email} </Text>}
          </View>
        </View>

        <View style={styles.wrapper}>
          <Pressable>
            <Text style={styles.text}>Send feedback</Text>
          </Pressable>

          <Pressable>
            <Text style={styles.text}>Rate app</Text>
          </Pressable>

          <Pressable>
            <Text style={styles.text}>Share app</Text>
          </Pressable>
        </View>

        <View style={styles.wrapper}>
          <Pressable>
            <Text style={styles.text}>Contact us </Text>
          </Pressable>

          <Pressable>
            <Text style={styles.text}>Privacy policy</Text>
          </Pressable>

          <Pressable>
            <Text style={styles.text}>Terms of use</Text>
          </Pressable>

          {user ? (
            <Pressable onPress={logOut}>
              <Text style={styles.text}>Log out</Text>
            </Pressable>
          ) : (
            <Pressable
              onPress={() => {
                setShowModal(true);
              }}
            >
              <Text style={styles.text}>Login</Text>
            </Pressable>
          )}
        </View>

        {(!user || user === null) && (
          <SigninOptions
            modalVisible={showModal}
            closeModal={() => {
              setShowModal(false);
            }}
            openSignupModal={openSignupModal}
          />
        )}

        <SignupOptions
          closeSignupModal={closeSignupModal}
          signupModalVisible={signupModalVisible}
          openModal={openModal}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    gap: GAP.large,
  },
  container: {
    padding: PADDING.normal,
    gap: GAP.large,
    flex: 1,
  },
  text: {
    fontSize: SIZE.xl,
    fontFamily: FONT.regular,
    lineHeight: 28,
  },
  user_profile_container: {
    borderBottomWidth: 1,
    borderColor: COLORS.border,
    paddingBottom: PADDING.normal,
  },
  header: {
    gap: GAP.normal,
  },
  user_icon_container: {
    height: 80,
    width: 80,
    backgroundColor: COLORS.grey,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  user_profile: {},
});

export default Account;
