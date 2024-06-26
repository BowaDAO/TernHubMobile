import { Pressable, Text } from "react-native";
import { COLORS, FONT, PADDING, RADIUS, SIZE } from "@/constants";

type Prop = {
  label: string;
  onPress: () => void;
  disabled?: boolean | null | undefined;
};

export const FullButton = ({ label, onPress, disabled }: Prop) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={{
        paddingVertical: PADDING.large,
        paddingHorizontal: PADDING.xlarge,
        backgroundColor: disabled ? COLORS.grey : COLORS.purple,
        borderRadius: RADIUS.normal,
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: SIZE.lg,
          color: COLORS.white,
          fontFamily: FONT.medium,
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};
