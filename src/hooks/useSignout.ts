import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { Alert } from "react-native";
import { auth } from "../../server/firebase/config";
import { signout } from "../redux/slice/user-slice";
import { DispatchType } from "../redux/store";

const useSignOut = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const dispatch: DispatchType = useDispatch();

  const logOut = async () => {
    try {
      await auth.signOut().then(() => {
        dispatch(signout());
        navigation.navigate("Home");
      });
    } catch (error) {
      if (error === "auth/no-current-user") {
        Alert.alert("No active user");
      }
    }
  };

  return { logOut };
};

export default useSignOut;
