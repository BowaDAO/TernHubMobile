import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { SIZE, FONT, GAP, COLORS, icon } from "../../constants";
import { useDispatch } from "react-redux";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";
import { DispatchType } from "../redux/store";
import { getJobsByUserQuery } from "../redux/slice/job-slice";
import {
  removeRecentSearchTerm,
  setRecentSearches,
} from "../redux/slice/job-slice";

type PropType = {
  recentSearches: string[];
};

const RecentSearches = ({ recentSearches }: PropType) => {
  const dispatch: DispatchType = useDispatch();
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  return (
    <View>
      <Text style={styles.text}>Recent searches</Text>

      <View style={{ gap: GAP.small }}>
        {recentSearches.slice(0, 10).map((searchQuery, index) => {
          return (
            <View
              key={index.toString()}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
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
                onPress={() => dispatch(removeRecentSearchTerm(searchQuery))}
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
  );
};

export default RecentSearches;

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
