import { StyleSheet, Text, View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { Loading, CustomError, JobCard, NoBookMarkedJobs } from "../components";
import { GAP, PADDING } from "../../constants";
import { RootState } from "../redux/store";
import { jobType } from "../types/type";
import { ListRenderItem } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackParamList } from "../types/type";
import React from "react";

type Prop = {
  route: RouteProp<StackParamList, "searchresult">;
};

const SearchResult: React.FC<Prop> = () => {
  const { queriedJobs, status } = useSelector((state: RootState) => state.job);

  const renderItem: ListRenderItem<jobType> = ({ item }) => (
    <JobCard item={item} />
  );

  return (
    <View style={styles.body}>
      {status === "loading" ? (
        <Loading />
      ) : status === "failed" ? (
        <CustomError
          errorMessage="An error has occurred, please try again "
          handleReset={() => {}}
        />
      ) : queriedJobs.length < 1 ? (
        <NoBookMarkedJobs />
      ) : (
        <FlatList
          data={queriedJobs}
          renderItem={renderItem}
          keyExtractor={(item: jobType) => item.id?.toString()}
          contentContainerStyle={{ gap: GAP.regular }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default SearchResult as React.FC;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: PADDING.normal,
  },
});
