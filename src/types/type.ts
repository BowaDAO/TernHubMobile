import { ImageSourcePropType } from "react-native";
import { NavigationProp } from "@react-navigation/native";

export type AuthFrame = {
  icon: ImageSourcePropType;
  label: string;
  onPress: () => void | NavigationProp<ReactNavigation.RootParamList>;
};
