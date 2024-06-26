import { StyleSheet, View, FlatList, ListRenderItem } from "react-native";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DispatchType, RootState } from "@/redux/store";
import {
  CustomError,
  JobCard,
  NoBookMarkedJobs,
  Loading,
  RefreshController,
} from "@/components";
import { GAP, PADDING } from "@/constants";
import { getAUserBookmarkedJobs } from "@/redux/slice/bookmarks-slice";
import { useFocusEffect } from "@react-navigation/native";

const Bookmarks = () => {
  const dispatch: DispatchType = useDispatch();

  const { bookmarkedJobs, status } = useSelector(
    (store: RootState) => store.bookmarks
  );

  const { user } = useSelector((store: RootState) => store.user);

  useFocusEffect(
    useCallback(() => {
      if (status === "idle") {
        dispatch(getAUserBookmarkedJobs());
      }
    }, [user, dispatch])
  );

  const renderItem: ListRenderItem<jobType> = ({ item }) => (
    <JobCard item={item} />
  );

  return (
    <View style={styles.body}>
      {!user ? (
        <NoBookMarkedJobs message="There are no bookmarked jobs" />
      ) : status === "loading" ? (
        <Loading />
      ) : status === "failed" ? (
        <CustomError
          errorMessage="Something went wrong, try again"
          handleReset={() => dispatch(getAUserBookmarkedJobs())}
        />
      ) : bookmarkedJobs.length < 1 ? (
        <NoBookMarkedJobs message="There are no bookmarked jobs" />
      ) : (
        <FlatList
          data={bookmarkedJobs}
          renderItem={renderItem}
          keyExtractor={(item: jobType) => item.id?.toString()}
          contentContainerStyle={{ gap: GAP.regular }}
          showsVerticalScrollIndicator={false}
          refreshControl={<RefreshController />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: PADDING.normal,
  },
});

export default Bookmarks;
