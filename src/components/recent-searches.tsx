import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { SIZE, FONT, GAP, COLORS, icon } from "@/constants";
import { useDispatch } from "react-redux";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";
import { DispatchType } from "@/redux/store";
import {
  removeRecentSearchTerm,
  setRecentSearches,
  getJobsByUserQuery,
} from "@/redux/slice/job-slice";

type PropType = {
  recentSearches: string[];
};

const RecentSearches = ({ recentSearches }: PropType) => {
  const dispatch: DispatchType = useDispatch();
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const uniqueRecentSearches = [...new Set(recentSearches)];

  return (
    <>
      {recentSearches.length > 0 && (
        <View style={styles.container}>
          <Text style={styles.heading}>Recent searches</Text>

          <View style={{ gap: GAP.small }}>
            {uniqueRecentSearches
              .slice(0, 6)
              .reverse()
              .map((searchQuery, index) => {
                return (
                  <View key={index.toString()} style={styles.search_term}>
                    <Pressable
                      onPress={() => {
                        dispatch(getJobsByUserQuery(searchQuery)),
                          navigation.navigate("searchresult", { searchQuery });
                        dispatch(setRecentSearches(searchQuery));
                      }}
                    >
                      <Text style={styles.text}>{searchQuery}</Text>
                    </Pressable>

                    <Pressable
                      onPress={() =>
                        dispatch(removeRecentSearchTerm(searchQuery))
                      }
                    >
                      <Image
                        source={icon.times}
                        style={{
                          height: 20,
                          width: 20,
                          tintColor: COLORS.lightGrey,
                        }}
                        resizeMode="contain"
                      />
                    </Pressable>
                  </View>
                );
              })}
          </View>
        </View>
      )}
    </>
  );
};

export default RecentSearches;

const styles = StyleSheet.create({
  text: {
    fontSize: SIZE.lg,
    fontFamily: FONT.regular,
    textTransform: "capitalize",
    color: COLORS.lightGrey,
  },
  search_term: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    fontFamily: FONT.medium,
    fontSize: SIZE.lg,
  },
  container: {
    gap: GAP.small,
  },
});
