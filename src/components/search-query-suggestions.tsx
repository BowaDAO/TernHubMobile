import { StyleSheet, Text, View, Pressable } from "react-native";
import { SIZE, FONT, GAP, COLORS } from "../../constants";
import { useDispatch } from "react-redux";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";
import { DispatchType } from "../redux/store";
import {
  getJobsByUserQuery,
  setRecentSearches,
} from "../redux/slice/job-slice";
import Loading from "./loading";

type PropType = {
  suggestedSearchQueries: string[];
  loading: boolean;
};

const SearchQuerySuggestions = ({
  suggestedSearchQueries,
  loading,
}: PropType) => {
  const dispatch: DispatchType = useDispatch();
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        suggestedSearchQueries.length > 0 && (
          <View style={styles.container}>
            <Text style={styles.heading}>You may be looking for:</Text>

            <View>
              {suggestedSearchQueries.slice(0, 10).map((searchQuery, index) => {
                return (
                  <Pressable
                    key={index.toString()}
                    onPress={() => {
                      dispatch(getJobsByUserQuery(searchQuery)),
                        navigation.navigate("searchresult", {
                          searchQuery,
                        });
                      dispatch(setRecentSearches(searchQuery));
                    }}
                    style={styles.search_term}
                  >
                    <Text style={styles.text}>{searchQuery}</Text>
                  </Pressable>
                );
              })}
            </View>
          </View>
        )
      )}
    </>
  );
};

export default SearchQuerySuggestions;

const styles = StyleSheet.create({
  text: {
    fontSize: SIZE.lg,
    fontFamily: FONT.regular,
    textTransform: "capitalize",
    color: COLORS.lightGrey,
  },
  search_term: {
    paddingVertical: 10,
  },
  heading: {
    fontFamily: FONT.medium,
    fontSize: SIZE.lg,
  },
  container: {
    gap: GAP.small,
  },
});
