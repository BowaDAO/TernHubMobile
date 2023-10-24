import { StyleSheet, TextInput, Image, View } from "react-native";
import { RADIUS, COLORS, SIZE, icon, PADDING } from "../../constants";

const SearchFrame = () => {
  return (
    <View>
      <View style={styles.search_icon_wrapper}>
        <Image source={icon.search} style={styles.icon} />
      </View>

      <TextInput style={styles.input} placeholder="Search job title" />
    </View>
  );
};

export default SearchFrame;

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
