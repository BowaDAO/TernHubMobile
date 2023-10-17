import { createStackNavigator } from "@react-navigation/stack";
import { Animated } from "react-native";
import TabNavigator from "./tab-navigator";

const Stack = createStackNavigator();

const av = new Animated.Value(0);
av.addListener(() => {
  return;
});

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      screenListeners={{
        focus: () => {
          Animated.timing(av, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }).start();
        },
      }}
    >
      <Stack.Screen name="tab" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
