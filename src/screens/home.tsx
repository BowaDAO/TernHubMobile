import { StyleSheet, View } from "react-native";
import { Search, JobCard } from "../components";
import { SigninOptions, SignupOptions } from "../containers";
import { useModal } from "../hooks";
import { PADDING } from "../../constants";

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
    <View style={styles.body}>
      <Search />

      <JobCard />

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

const styles = StyleSheet.create({
  body: {
    padding: PADDING.normal,
  },
});

export default Home;
