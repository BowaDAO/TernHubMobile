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
          textTransform: "capitalize",
        },
        tabBarActiveTintColor: COLORS.purple,
      }}
    >
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="search" component={Search} />
      <Tab.Screen name="bookmarks" component={Bookmarks} />
      <Tab.Screen name="courses" component={Courses} />
      <Tab.Screen name="account" component={Account} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
