import { StyleSheet, View, Modal, SafeAreaView } from "react-native";
import { SigninWithFacebook, SigninWithGoogle } from "../libraries";
import { AuthPrompt, AuthCTA, CloseModal, SigninFrame } from "../components";
import { GAP, PADDING, icon } from "../../constants";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

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
  const navigation: NavigationProp<ParamListBase> = useNavigation();

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
              <SigninFrame
                icon={icon.google}
                label="Sign in with Email"
                onPress={() => {
                  closeModal();
                  navigation.navigate("signinwithemail");
                }}
              />
              <SigninWithFacebook label="Sign in with Facebook" />

              <SigninWithGoogle label="Sign in with Google" />
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
