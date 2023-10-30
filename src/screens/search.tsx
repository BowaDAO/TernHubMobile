import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { PADDING, GAP, icon, COLORS, FONT, SIZE } from "../../constants";
import {
  SearchFrame,
  SearchQuerySuggestions,
  RecentSearches,
} from "../components";
import { FullButton } from "../components/button";
import { useState, useEffect } from "react";
import {
  getJobsByUserQuery,
  setRecentSearches,
  removeRecentSearchTerm,
} from "../redux/slice/job-slice";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../redux/store";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";
import { suggestedSearchQueries } from "../../constants/data";
import { ScrollView } from "react-native-gesture-handler";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { recentSearches } = useSelector((state: RootState) => state.job);

  const dispatch: DispatchType = useDispatch();
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const handleUserSearchResult = () => {
    if (searchQuery) {
      dispatch(getJobsByUserQuery(searchQuery));

      navigation.navigate("searchresult", { searchQuery });

      dispatch(setRecentSearches(searchQuery));
    }
  };

  return (
    <ScrollView>
      <View style={styles.body}>
        <SearchFrame value={searchQuery} onChangeText={setSearchQuery} />

        <FullButton
          label="Search job"
          onPress={() => handleUserSearchResult()}
        />

        <SearchQuerySuggestions
          suggestedSearchQueries={suggestedSearchQueries}
        />

        <RecentSearches recentSearches={recentSearches} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    padding: PADDING.normal,
    gap: GAP.regular,
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
