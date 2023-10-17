import { ImageSourcePropType } from "react-native";

export type AuthFrame = {
  icon: ImageSourcePropType;
  label: string;
  onPress: () => void;
};
