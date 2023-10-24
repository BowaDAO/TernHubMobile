import { Alert, Pressable, StyleSheet, Text } from "react-native";
import { COLORS, FONT, RADIUS, SIZE } from "../../constants";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { bookmarkAJob, unBookmarkAJob } from "../redux/slice/bookmarks-slice";
import { DispatchType } from "../redux/store";
import { jobType } from "../types/type";
import Toast from "react-native-toast-message";

const BookmarkAJob = ({ item }: { item: jobType }) => {
  const dispatch: DispatchType = useDispatch();

  const { user } = useSelector((store: RootState) => store.user);

  const { bookmarkedJobs } = useSelector((store: RootState) => store.bookmarks);

  const alreadyBookmarkedJobsIds = bookmarkedJobs.map((item) => item.id);

  const handleBookmarkJob = () => {
    if (!user) {
      Toast.show({
        type: "error",
        text1: "Please sign in to perform action",
      });
    } else {
      dispatch(bookmarkAJob(item));
      Toast.show({ type: "success", text1: "Job saved successfully!" });
    }
  };

  const handleUnbookmarkJob = () => {
    if (!user) {
      Toast.show({ type: "error", text1: "Please sign in to perform action" });
    } else {
      dispatch(unBookmarkAJob(item.id));
      Toast.show({ type: "success", text1: "Job removed successfully!" });
    }
  };

  return (
    <>
      {alreadyBookmarkedJobsIds.includes(item.id) ? (
        <Pressable
          style={[
            styles.container,
            {
              backgroundColor: COLORS.white,
              borderWidth: 1,
              borderColor: COLORS.purple,
            },
          ]}
          onPress={handleUnbookmarkJob}
        >
          <Text style={[styles.label, { color: COLORS.purple }]}>Unsave</Text>
        </Pressable>
      ) : (
        <Pressable style={[styles.container]} onPress={handleBookmarkJob}>
          <Text style={styles.label}>Save</Text>
        </Pressable>
      )}
    </>
  );
};

export default BookmarkAJob;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.purple,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: RADIUS.normal,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: COLORS.white,
    fontSize: SIZE.base,
    fontWeight: "600",
    fontFamily: FONT.regular,
  },
});
