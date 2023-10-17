import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Account, Bookmarks, Courses, Search } from "../screens";
import { COLORS, FONT, SIZE } from "../../constants";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShadowVisible: false,
        tabBarStyle: {
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: SIZE.regular,
          fontFamily: FONT.regular,
        },
        tabBarActiveTintColor: COLORS.purple,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Courses" component={Courses} />
      <Tab.Screen name="Bookmarks" component={Bookmarks} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
