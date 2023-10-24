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
import { FontAwesome, AntDesign } from "@expo/vector-icons";

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
          {user ? (
            <View style={styles.user_profile}>
              <View style={styles.user_icon_container}>
                <FontAwesome name="user" size={48} color={COLORS.purple} />
              </View>

              {user && <Text style={styles.email}>{user?.email} </Text>}
            </View>
          ) : (
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
          )}
        </View>

        <View style={styles.wrapper}>
          <Pressable style={styles.segment}>
            <Text style={styles.text}>Send feedback</Text>
            <AntDesign name="right" size={16} />
          </Pressable>

          <Pressable style={styles.segment}>
            <Text style={styles.text}>Rate app</Text>
            <AntDesign name="right" size={16} />
          </Pressable>

          <Pressable style={styles.segment}>
            <Text style={styles.text}>Share app</Text>
            <AntDesign name="right" size={16} />
          </Pressable>
        </View>

        <View style={styles.wrapper}>
          <Pressable
            style={styles.segment}
            onPress={() => navigation.navigate("contactus")}
          >
            <Text style={styles.text}>Contact us </Text>
            <AntDesign name="right" size={16} />
          </Pressable>

          <Pressable style={styles.segment}>
            <Text style={styles.text}>Privacy policy</Text>
            <AntDesign name="right" size={16} />
          </Pressable>

          <Pressable style={styles.segment}>
            <Text style={styles.text}>Terms of use</Text>
            <AntDesign name="right" size={16} />
          </Pressable>

          {user && (
            <Pressable style={styles.segment} onPress={logOut}>
              <Text style={styles.text}>Log out</Text>
              <AntDesign name="right" size={16} />
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
    paddingBottom: PADDING.xlarge,
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
  user_profile: {
    alignItems: "center",
    justifyContent: "center",
    gap: GAP.normal,
  },
  email: {
    fontSize: SIZE.base,
    fontFamily: FONT.light,
  },
  segment: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Account;
