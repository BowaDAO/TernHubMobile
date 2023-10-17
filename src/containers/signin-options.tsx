import { StyleSheet, View, Modal, SafeAreaView } from "react-native";
import {
  SigninWithEmail,
  SigninWithFacebook,
  SigninWithGoogle,
} from "../libraries";
import { AuthPrompt, AuthCTA, CloseModal } from "../components";
import { GAP, PADDING } from "../../constants";

type SigninOptionsProp = {
  modalVisible: boolean;
  openSignupModal: () => void;
  closeModal: () => void;
};

const SigninOptions = ({
  modalVisible,
  openSignupModal,
  closeModal,
}: SigninOptionsProp) => {
  return (
    <Modal
      visible={modalVisible}
      animationType="slide"
      presentationStyle="fullScreen"
      onRequestClose={closeModal}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.modal_container}>
          <View style={{ gap: GAP.xxl }}>
            <View style={{ gap: GAP.small }}>
              <CloseModal onPress={closeModal} />

              <View>
                <AuthPrompt
                  heading="Sign in"
                  subheading="continue using ternhub"
                />
              </View>
            </View>

            <View style={styles.button_container}>
              <SigninWithEmail />
              <SigninWithFacebook />
              <SigninWithGoogle />
            </View>
          </View>

          <AuthCTA
            label="Don't have an account?"
            cta="Sign up"
            onPress={() => {
              closeModal();
              openSignupModal();
            }}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default SigninOptions;

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
