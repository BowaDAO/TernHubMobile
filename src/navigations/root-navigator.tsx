import { createStackNavigator } from "@react-navigation/stack";
import { Animated } from "react-native";
import TabNavigator from "./tab-navigator";
import { SigninWithEmail, SignupWithEmail } from "../screens";

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
        headerShadowVisible: false,
        gestureEnabled: false,
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
      <Stack.Screen
        name="signupwithemail"
        component={SignupWithEmail}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
          title: "",
        }}
      />
      <Stack.Screen
        name="signinwithemail"
        component={SigninWithEmail}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
          title: "",
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
