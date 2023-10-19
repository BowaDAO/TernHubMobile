import { createStackNavigator } from "@react-navigation/stack";
import { Animated } from "react-native";
import TabNavigator from "./tab-navigator";
import {
  SigninWithEmail,
  SignupWithEmail,
  ResetPassword,
  VerifyEmail,
} from "../auth";
import { auth } from "../../server/firebase/config";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { signin, signout } from "../redux/slice/user-slice";

const Stack = createStackNavigator();

const av = new Animated.Value(0);
av.addListener(() => {
  return;
});

const RootNavigator = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const listener = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          signin({
            email: user.email,
            name: user.displayName,
            user_id: user.uid,
            picture: user.photoURL,
          })
        );
      } else {
        dispatch(signout());
      }
    });
    listener();
  }, []);

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

      <Stack.Screen
        name="resetpassword"
        component={ResetPassword}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
          title: "",
        }}
      />

      <Stack.Screen
        name="verifyemail"
        component={VerifyEmail}
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
