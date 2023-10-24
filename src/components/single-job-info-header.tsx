import { StyleSheet, View } from "react-native";
import JobInfo from "./job-info";
import JobPostTime from "./job-post-time";
import JobLocationAndMode from "./job-location-and-mode";
import { jobType } from "../types/type";
import { GAP } from "../../constants";
import { BookmarkAJob } from "../libraries";

const SingleJobInfoHeader = ({ item }: { item: jobType }) => {
  return (
    <View style={styles.container}>
      <JobInfo item={item} />

      <View style={styles.job_info_wrapper}>
        <JobLocationAndMode item={item} />
        <BookmarkAJob item={item} />
      </View>

      <JobPostTime item={item} />
    </View>
  );
};

export default SingleJobInfoHeader;

const styles = StyleSheet.create({
  container: {
    gap: GAP.regular,
  },
  job_info_wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
