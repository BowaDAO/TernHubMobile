import {
  StyleSheet,
  View,
  FlatList,
  ListRenderItem,
  ActivityIndicator,
} from "react-native";
import {
  JobCard,
  DormantSearchFrame,
  RefreshController,
  CustomError,
} from "../components";
import { SigninOptions, SignupOptions } from "../containers";
import { useModal } from "../hooks";
import { GAP, PADDING } from "../../constants";
import { jobType } from "../types/type";
import { FullButton } from "../components/button";
import { useSelector, useDispatch } from "react-redux";
import { DispatchType, RootState } from "../redux/store";
import { getJobs } from "../redux/slice/job-slice";

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

  const dispatch: DispatchType = useDispatch();

  const handleReset = () => {
    dispatch(getJobs());
  };

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
          <CustomError
            errorMessage="An error has occurred, please try again "
            handleReset={handleReset}
          />
        ) : (
          <FlatList
            data={jobs}
            renderItem={renderItem}
            keyExtractor={(item: jobType) => item.id?.toString()}
            contentContainerStyle={{ gap: GAP.regular }}
            showsVerticalScrollIndicator={false}
            refreshControl={<RefreshController />}
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
