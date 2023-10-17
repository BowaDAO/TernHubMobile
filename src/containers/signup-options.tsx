import { StyleSheet, View, Modal, SafeAreaView } from "react-native";
import {
  SignupWithEmail,
  SigninWithFacebook,
  SigninWithGoogle,
} from "../libraries";
import { AuthPrompt, AuthCTA, CloseModal } from "../components";
import { GAP, PADDING } from "../../constants";

type SignupOptionsProp = {
  openModal: () => void;
  signupModalVisible: boolean;
  closeSignupModal: () => void;
};

const SignupOptions = ({
  signupModalVisible,
  closeSignupModal,
  openModal,
}: SignupOptionsProp) => {
  return (
    <Modal
      visible={signupModalVisible}
      animationType="slide"
      presentationStyle="fullScreen"
      onRequestClose={closeSignupModal}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.modal_container}>
          <View style={{ gap: GAP.xxl }}>
            <View style={{ gap: GAP.small }}>
              <CloseModal onPress={closeSignupModal} />

              <View>
                <AuthPrompt heading="Sign Up" subheading="Welcome to ternhub" />
              </View>
            </View>

            <View style={styles.button_container}>
              <SignupWithEmail />
              <SigninWithFacebook />
              <SigninWithGoogle />
            </View>
          </View>

          <AuthCTA
            label="Already have an account?"
            cta="Sign in"
            onPress={() => {
              closeSignupModal();
              openModal();
            }}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default SignupOptions;

const styles = StyleSheet.create({
  button_container: {
    gap: GAP.base,
  },
  modal_container: {
    flex: 1,
    paddingVertical: PADDING.large,
    paddingHorizontal: PADDING.normal,
    justifyContent: "space-between",
  },
});
