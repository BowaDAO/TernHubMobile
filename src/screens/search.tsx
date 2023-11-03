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
  getJobByQuery,
} from "../redux/slice/job-slice";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../redux/store";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

  // const handleUserSearchResult = () => {
  //   if (searchQuery) {
  //     navigation.navigate("searchresult", { searchQuery });

  //     dispatch(getJobsByUserQuery(searchQuery));

  //     dispatch(setRecentSearches(searchQuery));
  //   }
  // };

  useEffect(() => {
    AsyncStorage.setItem("userRecentSearches", JSON.stringify(recentSearches));
  }, [recentSearches]);

  const handleSearch = () => {
    if (searchQuery) {
      const value = searchQuery.toLowerCase();

      const results = [];

      for (const i in jobs) {
        let res = jobs[i].role.toLowerCase();

        if (res.includes(value)) {
          results.push(jobs[i]);
        }
      }

      dispatch(getJobByQuery(results));

      navigation.navigate("searchresult", { searchQuery });

      dispatch(setRecentSearches(searchQuery));
    }
  };

  useEffect(() => {
    if (searchQuery) {
      const value = searchQuery.toLowerCase();

      const suggestedQueries = [];

      for (const key in jobs) {
        let result = jobs[key].role.toLowerCase();

        if (result.includes(value)) {
          suggestedQueries.push(jobs[key].role);
        }

        setSuggestedSearchQueries(suggestedQueries);
      }
    } else {
      setSuggestedSearchQueries([]);
    }
  }, [searchQuery, jobs]);

  const uniqueSuggestedSearchQueries = [...new Set(suggestedSearchQueries)];

  return (
    <ScrollView>
      <View style={styles.body}>
        <SearchFrame value={searchQuery} onChangeText={setSearchQuery} />

        <FullButton label="Search job" onPress={handleSearch} />

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
