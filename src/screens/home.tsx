import { StyleSheet, View, FlatList, ListRenderItem } from "react-native";
import {
  JobCard,
  DormantSearchFrame,
  RefreshController,
  CustomError,
  Loading,
} from "@/components";
import { SigninOptions, SignupOptions } from "@/containers";
import { useModal } from "@/hooks";
import { GAP, PADDING } from "@/constants";
import { FullButton } from "@/components/button";
import { useSelector, useDispatch } from "react-redux";
import { DispatchType, RootState } from "@/redux/store";
import { getJobs } from "@/redux/slice/job-slice";
import { Fragment } from "react";

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

      <Fragment>
        {status === "loading" ? (
          <Loading />
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
      </Fragment>

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

      <Fragment>
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
      </Fragment>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: PADDING.normal,
    gap: GAP.base,
  },
});

export default Home;
