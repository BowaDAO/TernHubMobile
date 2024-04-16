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
    <Pressable
      onPress={() => {
        navigation.navigate("Search");
      }}
    >
      <View style={styles.search_icon_wrapper}>
        <Image source={icon.search} style={styles.icon} />
      </View>

      <View style={styles.input}>
        <Text style={styles.label}>What job are you looking for?</Text>
      </View>
    </Pressable>
  );
};

export default DormantSearchFrame;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    paddingVertical: PADDING.large,
    paddingHorizontal: 40,
    borderRadius: RADIUS.small,
    borderWidth: 1,
    borderColor: COLORS.purple,
    height: 52,
    justifyContent: "center",
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
  label: {
    fontSize: SIZE.xl,
    color: COLORS.border,
    fontFamily: FONT.regular,
  },
});
