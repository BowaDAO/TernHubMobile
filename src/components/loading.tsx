import { View, ActivityIndicator } from "react-native";
import { COLORS } from "../../constants";

const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ActivityIndicator size="large" color={COLORS.purple} />
    </View>
  );
};

export default Loading;
