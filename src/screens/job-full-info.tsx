import { StyleSheet, ScrollView } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackParamList } from "../types/type";
import React from "react";
import { SingleJobInfoHeader, SingleJobInfoBody } from "../components";

type Prop = {
  route: RouteProp<StackParamList, "jobfullinfo">;
};

const JobFullInfo: React.FC<Prop> = ({ route }) => {
  const { item } = route.params;

  return (
    <ScrollView style={styles.body}>
      <SingleJobInfoHeader item={item} />
      <SingleJobInfoBody item={item} />
    </ScrollView>
  );
};

export default JobFullInfo as React.FC;

const styles = StyleSheet.create({
  body: {},
});
