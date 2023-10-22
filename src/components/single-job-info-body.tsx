import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { jobType } from "../types/type";
import HTML from "react-native-render-html";

const SingleJobInfoBody = ({ item }: { item: jobType }) => {
  const { width } = useWindowDimensions();

  return (
    <View>
      <Text>
        <HTML source={{ html: item.description }} contentWidth={width} />
      </Text>
    </View>
  );
};

export default SingleJobInfoBody;

const styles = StyleSheet.create({});
