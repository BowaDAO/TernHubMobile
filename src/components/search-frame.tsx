import { StyleSheet, TextInput, Image, View } from "react-native";
import { RADIUS, COLORS, SIZE, icon, PADDING, FONT } from "@/constants";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
};

const SearchFrame = ({ value, onChangeText }: Props) => {
  return (
    <View>
      <View style={styles.search_icon_wrapper}>
        <Image source={icon.search} style={styles.icon} />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Search job title"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default SearchFrame;

const styles = StyleSheet.create({
  input: {
    paddingVertical: PADDING.large,
    paddingHorizontal: 40,
    borderRadius: RADIUS.small,
    borderWidth: 1,
    borderColor: COLORS.purple,
    fontFamily: FONT.regular,
    fontSize: SIZE.xl,
    color: COLORS.greyblack,
    justifyContent: "center",
    height: 52,
  },

  icon: {
    width: 24,
    height: 24,
  },

  search_icon_wrapper: {
    position: "absolute",
    left: 10,
    top: 12,
  },
});
