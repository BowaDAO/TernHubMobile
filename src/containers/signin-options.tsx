import {
  StyleSheet,
  View,
  Modal,
  SafeAreaView,
  Pressable,
  Text,
} from "react-native";
import { SigninWithFacebook, SigninWithGoogle } from "@/libraries";
import { AuthPrompt, AuthCTA, CloseModal, SigninFrame } from "@/components";
import { GAP, PADDING, icon } from "@/constants";
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
                  subheading="Sign in to continue using ternhub"
                />
              </View>
            </View>

            <View style={styles.button_container}>
              <SigninFrame
                icon={icon.email}
                label="Sign in with Email"
                onPress={() => {
                  closeModal();
                  navigation.navigate("signinwithemail");
                }}
              />

              <SigninWithGoogle label="Sign in with Google" />

              <SigninWithFacebook label="Sign in with Facebook" />
            </View>
          </View>

          <AuthCTA
            label="New to TheTernHub?"
            cta="Create an account"
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
