import { ImageSourcePropType } from "react-native";

export type AuthFrame = {
  image: ImageSourcePropType;
  label: string;
  onPress: () => void;
};
