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
  logo: string;
  mode: string;
  time: any;
  location: string;
  description: string;
};

export type User = {
  email: string;
  name: string;
  uid: string;
  photo: ImageSourcePropType;
  refreshToken: string;
};

export type StackParamList = {
  Home: { item: jobType };
  jobfullinfo: { item: jobType };
};
