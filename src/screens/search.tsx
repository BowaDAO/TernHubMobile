import { StyleSheet, View } from "react-native";
import { PADDING, GAP } from "../../constants";
import { SearchFrame } from "../components";
import { FullButton } from "../components/button";
import { useState, useEffect } from "react";
import { getJobsByUserQuery } from "../redux/slice/job-slice";
import { useDispatch } from "react-redux";
import { DispatchType } from "../redux/store";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const dispatch: DispatchType = useDispatch();
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const handleUserSearchResult = () => {
    dispatch(getJobsByUserQuery(searchQuery));

    navigation.navigate("searchresult", { searchQuery });
  };

  return (
    <View style={styles.body}>
      <SearchFrame value={searchQuery} onChangeText={setSearchQuery} />

      <FullButton label="Search job" onPress={handleUserSearchResult} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    padding: PADDING.normal,
    gap: GAP.regular,
  },
});

export default Search;
