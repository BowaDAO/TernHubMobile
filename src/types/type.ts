import { ImageSourcePropType } from "react-native";
import { NavigationProp } from "@react-navigation/native";

export type AuthFrame = {
  icon: ImageSourcePropType;
  label: string;
  onPress: () => void | NavigationProp<ReactNavigation.RootParamList>;
};

export type jobType = {
  id: string;
  company: string;
  role: string;
  logo: ImageSourcePropType;
  mode: string;
  time: string;
  location: string;
};
