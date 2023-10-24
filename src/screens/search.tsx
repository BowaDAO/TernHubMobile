import { StyleSheet, View } from "react-native";
import { PADDING } from "../../constants";
import { SearchFrame } from "../components";

const Search = () => {
  return (
    <View style={styles.body}>
      <SearchFrame />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    padding: PADDING.normal,
    // gap: GAP.small,
  },
});

export default Search;
