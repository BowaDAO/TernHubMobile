import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { COLORS } from "./constants";
import RootNavigator from "./src/navigations/root-navigator";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { getJobs } from "./src/redux/slice/job-slice";

store.dispatch(getJobs());

const App = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: COLORS.white,
    },
  };

  const [fontLoaded] = useFonts({
    FoundersGroteskBold: require("./assets/fonts/FoundersGrotesk-Bold.otf"),
    FoundersGroteskLight: require("./assets/fonts/FoundersGrotesk-Light.otf"),
    FoundersGroteskMedium: require("./assets/fonts/FoundersGrotesk-Medium.otf"),
    FoundersGroteskRegular: require("./assets/fonts/FoundersGrotesk-Regular.otf"),
  });

  if (!fontLoaded) return null;

  return (
    <NavigationContainer theme={MyTheme}>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
