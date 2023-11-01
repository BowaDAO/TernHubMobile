import { StyleSheet, View, ScrollView } from "react-native";
import { PADDING, GAP, FONT, SIZE } from "../../constants";
import {
  SearchFrame,
  SearchQuerySuggestions,
  RecentSearches,
} from "../components";
import { FullButton } from "../components/button";
import { useEffect, useState } from "react";
import {
  getJobsByUserQuery,
  setRecentSearches,
} from "../redux/slice/job-slice";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../redux/store";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [suggestedSearchQueries, setSuggestedSearchQueries] = useState<
    string[]
  >([]);
  const [suggestedSearchQueriesLoading, setSuggestedSearchQueriesLoading] =
    useState<boolean>(false);

  const { recentSearches, jobs } = useSelector((state: RootState) => state.job);

  const dispatch: DispatchType = useDispatch();
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const handleUserSearchResult = () => {
    if (searchQuery) {
      navigation.navigate("searchresult", { searchQuery });

      dispatch(getJobsByUserQuery(searchQuery));

      dispatch(setRecentSearches(searchQuery));
    }
  };

  let value = searchQuery.toLowerCase();

  useEffect(() => {
    if (searchQuery) {
      for (const key in jobs) {
        let result = jobs[key].role.toLowerCase();

        if (result.indexOf(value) !== -1) {
          setSuggestedSearchQueries((prevSuggestions) => {
            return [...prevSuggestions, jobs[key].role];
          });
        }
      }
    } else {
      setSuggestedSearchQueries([]);
    }
  }, [searchQuery]);

  const uniqueSuggestedSearchQueries = [...new Set(suggestedSearchQueries)];

  return (
    <ScrollView>
      <View style={styles.body}>
        <SearchFrame value={searchQuery} onChangeText={setSearchQuery} />

        <FullButton label="Search job" onPress={handleUserSearchResult} />

        <SearchQuerySuggestions
          suggestedSearchQueries={uniqueSuggestedSearchQueries}
          loading={suggestedSearchQueriesLoading}
        />

        <RecentSearches recentSearches={recentSearches} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    padding: PADDING.normal,
    gap: GAP.medium,
  },
  search_term: {
    paddingVertical: 10,
  },
  text: {
    fontSize: SIZE.lg,
    fontFamily: FONT.regular,
    textTransform: "capitalize",
  },
});

export default Search;
