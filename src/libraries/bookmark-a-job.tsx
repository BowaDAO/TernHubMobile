import { Pressable, StyleSheet, Text } from "react-native";
import { COLORS, FONT, RADIUS, SIZE } from "@/constants";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { unBookmarkAJob, bookmarkAJob } from "@/redux/slice/bookmarks-slice";
import { DispatchType } from "@/redux/store";
import Toast from "react-native-toast-message";
import { useHaptic } from "@/hooks";
import { getAUserBookmarkedJobs } from "@/redux/slice/bookmarks-slice";

const BookmarkAJob = ({ item }: { item: jobType }) => {
  const dispatch: DispatchType = useDispatch();

  const { triggerVibration } = useHaptic();

  const { user } = useSelector((store: RootState) => store.user);

  const { bookmarkedJobs } = useSelector((store: RootState) => store.bookmarks);

  const alreadyBookmarkedJobsIds = bookmarkedJobs.map((item) => item.id);

  const id = item?.id;

  const newItem = {
    companyName: item.company,
    companyLogo: item.logo,
    companyLocation: item.location,
    jobDescription: item.description,
    jobTitle: item.role,
    jobMode: item.mode,
    timeStamp: item.time,
  };

  const handleBookmarkJob = () => {
    if (!user) {
      Toast.show({
        type: "error",
        text1: "Please sign in to perform action",
      });

      triggerVibration();
    } else {
      dispatch(bookmarkAJob({ id, ...newItem }));

      dispatch(getAUserBookmarkedJobs());

      triggerVibration();

      Toast.show({ type: "success", text1: "Job saved!" });
    }
  };

  const handleUnbookmarkJob = () => {
    if (!user) {
      Toast.show({ type: "error", text1: "Please sign in to perform action" });

      triggerVibration();
    } else {
      dispatch(unBookmarkAJob(id));

      dispatch(getAUserBookmarkedJobs());

      triggerVibration();

      Toast.show({ type: "success", text1: "Job removed!" });
    }
  };

  return (
    <>
      {!user || !alreadyBookmarkedJobsIds.includes(id) ? (
        <Pressable style={[styles.container]} onPress={handleBookmarkJob}>
          <Text style={styles.label}>Save</Text>
        </Pressable>
      ) : (
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
          <Text style={[styles.label, { color: COLORS.purple }]}>Remove</Text>
        </Pressable>
      )}
    </>
  );
};

export default BookmarkAJob;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.purple,
    height: 40,
    paddingHorizontal: 18,
    borderRadius: RADIUS.normal,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: SIZE.base,
    color: COLORS.white,
    fontFamily: FONT.medium,
  },
});
