import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import HTML from "react-native-render-html";
import { FONT, SIZE } from "@/constants";

const customStyles = {
  p: {
    marginBottom: -10,
    lineHeight: 25,
  },
  li: {
    lineHeight: 25,
  },
};

const SingleJobInfoBody = ({ item }: { item: jobType }) => {
  const { width } = useWindowDimensions();

  return (
    <View>
      <Text style={styles.description}>Description</Text>

      <HTML
        source={{ html: item.description }}
        contentWidth={width}
        tagsStyles={customStyles}
      />
    </View>
  );
};

export default SingleJobInfoBody;

const styles = StyleSheet.create({
  description: {
    fontFamily: FONT.medium,
    fontSize: SIZE.xxl,
  },
});
