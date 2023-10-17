import { Pressable, StyleSheet, Text, View } from "react-native";

import { SigninOptions, SignupOptions } from "../containers";
import { useModal } from "../hooks";

const Home = () => {
  const {
    openSignupModal,
    signupModalVisible,
    closeSignupModal,
    modalVisible,
    closeModal,
    openModal,
  } = useModal();

  return (
    <View>
      <Pressable onPress={openSignupModal}>
        <Text>Home</Text>
      </Pressable>

      <SignupOptions
        closeSignupModal={closeSignupModal}
        signupModalVisible={signupModalVisible}
        openModal={openModal}
      />
      <SigninOptions
        modalVisible={modalVisible}
        closeModal={closeModal}
        openSignupModal={openSignupModal}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
