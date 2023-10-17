import { Pressable, Text } from "react-native";
import { COLORS, PADDING, RADIUS, SIZE } from "../../constants";

type Prop = {
  label: string;
  onPress: () => void;
};

export const FullButton = ({ label, onPress }: Prop) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        paddingVertical: PADDING.large,
        paddingHorizontal: PADDING.xlarge,
        backgroundColor: COLORS.purple,
        borderRadius: RADIUS.normal,
        alignItems: "center",
      }}
    >
      <Text
        style={{ fontSize: SIZE.base, fontWeight: "600", color: COLORS.white }}
      >
        {label}
      </Text>
    </Pressable>
  );
};
