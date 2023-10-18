import { StyleSheet, View, Pressable } from "react-native";
import JobInfo from "./job-info";
import JobPostTime from "./job-post-time";
import JobLocationAndMode from "./job-location-and-mode";
import { BookmarkAJob } from "../libraries";
import { COLORS, GAP, PADDING, RADIUS } from "../../constants";
import { jobType } from "../types/type";

const JobCard = ({ item }: { item: jobType }) => {
  return (
    <Pressable style={styles.container}>
      <JobInfo item={item} />
      <JobLocationAndMode item={item} />
      <View style={styles.C}>
        <JobPostTime item={item} />
        <BookmarkAJob />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: PADDING.base,
    paddingHorizontal: PADDING.small,
    gap: GAP.base,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.small,
  },
  C: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
});

export default JobCard;