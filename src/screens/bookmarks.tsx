import { StyleSheet, Text, View, FlatList, ListRenderItem } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { jobType } from "../types/type";
import { JobCard, NoBookMarkedJobs } from "../components";
import { GAP, PADDING } from "../../constants";

const Bookmarks = () => {
  const { bookmarkedJobs } = useSelector((store: RootState) => store.bookmarks);

  const { user } = useSelector((store: RootState) => store.user);

  const renderItem: ListRenderItem<jobType> = ({ item }) => {
    return <JobCard item={item} />;
  };

  return (
    <View style={styles.body}>
      {!user || bookmarkedJobs.length < 1 ? (
        <NoBookMarkedJobs />
      ) : (
        <FlatList
          data={bookmarkedJobs}
          renderItem={renderItem}
          keyExtractor={(item: jobType) => item.id?.toString()}
          contentContainerStyle={{ gap: GAP.regular }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: PADDING.normal,
  },
});

export default Bookmarks;
