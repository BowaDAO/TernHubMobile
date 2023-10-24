import { StyleSheet, Text, View, Image } from "react-native";
import { COLORS, FONT, GAP, RADIUS, SIZE } from "../../constants";
import { jobType } from "../types/type";

const JobInfo = ({ item }: { item: jobType }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logo_wrapper}>
        {item?.logo ? (
          <Image
            source={{ uri: item.logo }}
            resizeMode="contain"
            style={styles.logo}
          />
        ) : (
          <Text style={styles.alternative_logo}>
            {item?.company?.substring(0, 1)}
          </Text>
        )}
      </View>

      <View style={styles.text_wrapper}>
        <Text style={styles.company}>{item?.company} </Text>

        <Text style={styles.role}>{item?.role}</Text>
      </View>
    </View>
  );
};

export default JobInfo;

const styles = StyleSheet.create({
  logo: {
    height: 32,
    width: 32,
  },
  logo_wrapper: {
    height: 60,
    width: 60,
    backgroundColor: COLORS.grey,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: RADIUS.full,
  },
  container: {
    flexDirection: "row",
    gap: GAP.regular,
    alignItems: "center",
  },
  text_wrapper: {
    gap: GAP.xsmall,
    flexShrink: 1,
  },
  company: {
    fontSize: SIZE.base,
    fontWeight: "400",
    fontFamily: FONT.medium,
    color: COLORS.greyblack,
    textTransform: "capitalize",
  },
  role: {
    fontSize: SIZE.lg,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  alternative_logo: {
    fontSize: SIZE.xxl,
    fontFamily: FONT.bold,
    color: COLORS.greyblack,
  },
});
