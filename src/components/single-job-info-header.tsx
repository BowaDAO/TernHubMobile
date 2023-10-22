import { StyleSheet, Text, View } from "react-native";
import JobInfo from "./job-info";
import JobPostTime from "./job-post-time";
import JobLocationAndMode from "./job-location-and-mode";
import { jobType } from "../types/type";

const SingleJobInfoHeader = ({ item }: { item: jobType }) => {
  return (
    <View>
      <JobInfo item={item} />
      <JobLocationAndMode item={item} />
      <JobPostTime item={item} />
    </View>
  );
};

export default SingleJobInfoHeader;

const styles = StyleSheet.create({});
