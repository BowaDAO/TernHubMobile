import { StyleSheet, Text, View, Pressable } from "react-native";
import { SIZE, FONT } from "../../constants";
import { useDispatch } from "react-redux";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";
import { DispatchType } from "../redux/store";
import { getJobsByUserQuery } from "../redux/slice/job-slice";

type PropType = {
  suggestedSearchQueries: string[];
};

const SearchQuerySuggestions = ({ suggestedSearchQueries }: PropType) => {
  const dispatch: DispatchType = useDispatch();
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  return (
    <View>
      <Text>Suggestions</Text>

      <View>
        {suggestedSearchQueries.slice(0, 10).map((searchQuery, index) => {
          return (
            <Pressable
              key={index.toString()}
              onPress={() => {
                dispatch(getJobsByUserQuery(searchQuery)),
                  navigation.navigate("searchresult", { searchQuery });
              }}
              style={styles.search_term}
            >
              <Text style={styles.text}>{searchQuery}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default SearchQuerySuggestions;

const styles = StyleSheet.create({
  text: {
    fontSize: SIZE.lg,
    fontFamily: FONT.regular,
    textTransform: "capitalize",
  },
  search_term: {
    paddingVertical: 10,
  },
});
