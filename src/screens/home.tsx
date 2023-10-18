import {
  StyleSheet,
  View,
  FlatList,
  ListRenderItem,
  Text,
  ActivityIndicator,
  Alert,
} from "react-native";
import { JobCard, DormantSearchFrame } from "../components";
import { SigninOptions, SignupOptions } from "../containers";
import { useModal } from "../hooks";
import { GAP, PADDING } from "../../constants";
import { jobType } from "../types/type";
import { FullButton } from "../components/button";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

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

  const { user } = useSelector((store: RootState) => store.user);
  const { jobs, status } = useSelector((store: RootState) => store.job);

  return (
    <View style={styles.body}>
      <DormantSearchFrame />

      <View
        style={{
          position: "absolute",
          width: "100%",
          bottom: 0,
          zIndex: 100,
          alignSelf: "center",
        }}
      >
        {(!user || user === null) && (
          <FullButton label="Sign in" onPress={openModal} />
        )}
      </View>

      <>
        {status === "loading" ? (
          <ActivityIndicator size={"large"} color={"purple"} />
        ) : status === "failed" ? (
          Alert.alert("something went wrong")
        ) : (
          <FlatList
            data={jobs}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ gap: GAP.regular }}
            showsVerticalScrollIndicator={false}
          />
        )}
      </>

      <SignupOptions
        closeSignupModal={closeSignupModal}
        signupModalVisible={signupModalVisible}
        openModal={openModal}
      />

      {(!user || user === null) && (
        <SigninOptions
          modalVisible={modalVisible}
          closeModal={closeModal}
          openSignupModal={openSignupModal}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: PADDING.normal,
    gap: GAP.small,
  },
});

export default Home;
