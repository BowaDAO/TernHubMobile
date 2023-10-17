import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { COLORS } from "./constants";
import RootNavigator from "./src/navigations/root-navigator";

const App = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: COLORS.white,
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
