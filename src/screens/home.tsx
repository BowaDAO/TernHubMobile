import { StyleSheet, View, FlatList, ListRenderItem } from "react-native";
import { JobCard, DormantSearchFrame } from "../components";
import { SigninOptions, SignupOptions } from "../containers";
import { useModal } from "../hooks";
import { GAP, PADDING, icon } from "../../constants";
import { jobType } from "../types/type";
import { FullButton } from "../components/button";

const data: jobType[] = [
  {
    id: "1",
    company: "google",
    role: "frontend developer intern",
    logo: icon.google,
    mode: "remote",
    time: "20",
    location: "Lagos, Nigeria",
  },
  {
    id: "2",
    company: "bowal",
    role: "product design intern",
    logo: icon.google,
    mode: "hybrid",
    time: "5",
    location: "Lagos, Nigeria",
  },
  {
    id: "3",
    company: "google",
    role: "backend developer intern",
    logo: icon.google,
    mode: "onsite",
    time: "2",
    location: "Lagos, Nigeria",
  },
  {
    id: "4",
    company: "google",
    role: "backend developer intern",
    logo: icon.google,
    mode: "onsite",
    time: "2",
    location: "Lagos, Nigeria",
  },
];

const Home = () => {
  const {
    openSignupModal,
    signupModalVisible,
    closeSignupModal,
    modalVisible,
    closeModal,
    openModal,
  } = useModal();

  const renderItem: ListRenderItem<jobType> = ({ item }) => {
    return <JobCard item={item} />;
  };

  return (
    <View style={styles.body}>
      <DormantSearchFrame />

      <View
        style={{
          position: "absolute",
          width: "100%",
          bottom: 70,
          zIndex: 100,
          alignSelf: "center",
        }}
      >
        <FullButton label="Sign in" onPress={openModal} />
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap: GAP.regular }}
        showsVerticalScrollIndicator={false}
      />

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
    gap: GAP.small,
  },
});

export default Home;
