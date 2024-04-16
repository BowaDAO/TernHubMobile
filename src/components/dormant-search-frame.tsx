import { StyleSheet, Text, Image, View, Pressable } from "react-native";
import { RADIUS, COLORS, SIZE, icon, PADDING, FONT } from "@/constants";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";

const DormantSearchFrame = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  return (
    <View>
      <View style={styles.search_icon_wrapper}>
        <Image source={icon.search} style={styles.icon} />
      </View>

      <Pressable
        onPress={() => {
          navigation.navigate("Search");
        }}
        style={styles.input}
      >
        <Text style={styles.label}> What product are you looking for?</Text>
      </Pressable>
    </View>
  );
};

export default DormantSearchFrame;

const styles = StyleSheet.create({
  input: {
    paddingVertical: PADDING.large,
    paddingHorizontal: 40,
    borderRadius: RADIUS.small,
    borderWidth: 1,
    borderColor: COLORS.border,
    justifyContent: "center",
    height: 52,
  },

  label: {
    fontFamily: FONT.regular,
    fontSize: SIZE.xl,
    color: COLORS.border,
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
