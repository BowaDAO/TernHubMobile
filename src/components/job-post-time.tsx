import { StyleSheet, Text } from "react-native";
import { COLORS, FONT, SIZE } from "@/constants";
import { formatDistanceToNow } from "date-fns";

const JobPostTime = ({ item }: { item: jobType }) => {
  const timeStamp = item?.time;

  const date = timeStamp?.toDate();

  let timeAgo;

  if (timeStamp) {
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod?.replace("about", "")} ago`;
  }

  return <Text style={styles.text}>Posted {timeAgo}</Text>;
};

export default JobPostTime;

const styles = StyleSheet.create({
  text: {
    fontSize: SIZE.base,
    fontWeight: "400",
    fontFamily: FONT.regular,
    color: COLORS.green,
  },
});
