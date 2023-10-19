import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { COLORS } from "./constants";
import RootNavigator from "./src/navigations/root-navigator";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { getJobs } from "./src/redux/slice/job-slice";
import { useEffect, useCallback, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Splash } from "./src/screens";
import * as Font from "expo-font";
import { Alert } from "react-native";

SplashScreen.preventAutoHideAsync();

store.dispatch(getJobs());

const App = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: COLORS.white,
    },
  };

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          FoundersGroteskBold: require("./assets/fonts/FoundersGrotesk-Bold.otf"),
          FoundersGroteskLight: require("./assets/fonts/FoundersGrotesk-Light.otf"),
          FoundersGroteskMedium: require("./assets/fonts/FoundersGrotesk-Medium.otf"),
          FoundersGroteskRegular: require("./assets/fonts/FoundersGrotesk-Regular.otf"),
        });

        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (e: any) {
        Alert.alert(e.message);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  onLayoutRootView();

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer theme={MyTheme}>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
