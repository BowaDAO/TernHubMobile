import {
  StyleSheet,
  TextInput,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import { RADIUS, COLORS, SIZE, icon, PADDING } from "../../constants";

const Search = () => {
  return (
    <View>
      <TouchableOpacity style={styles.search_icon_wrapper}>
        <Image source={icon.search} style={styles.icon} />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="What job are you looking for?"
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    paddingVertical: PADDING.large,
    paddingHorizontal: 40,
    borderRadius: RADIUS.small,
    borderWidth: 1,
    borderColor: COLORS.purple,
    height: 52,
    fontSize: SIZE.base,
  },

  icon: {
    width: 24,
    height: 24,
  },
  search_icon_wrapper: {
    position: "absolute",
    left: 10,
    top: 14,
  },
});
