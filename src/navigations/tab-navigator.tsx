import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Account, Bookmarks, Courses, Search } from "@/screens";
import { COLORS, FONT, SIZE, icon } from "@/constants";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShadowVisible: false,
        headerTitleStyle: { fontSize: SIZE.xxl, fontFamily: FONT.bold },
        tabBarStyle: {
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: SIZE.base,
          fontFamily: FONT.regular,
        },
        tabBarActiveTintColor: COLORS.purple,
        tabBarIcon: ({ focused }) => {
          if (route.name === "Home") {
            return (
              <Image
                source={focused ? icon.homeactive : icon.homeinactive}
                style={{ height: 24, width: 24 }}
                resizeMode="contain"
              />
            );
          } else if (route.name === "Search") {
            return (
              <Image
                source={focused ? icon.searchactive : icon.searchinactive}
                style={{ height: 24, width: 24 }}
                resizeMode="contain"
              />
            );
          } else if (route.name === "Courses") {
            return (
              <Image
                source={focused ? icon.courseactive : icon.courseinactive}
                style={{ height: 24, width: 24 }}
                resizeMode="contain"
              />
            );
          } else if (route.name === "Bookmarks") {
            return (
              <Image
                source={focused ? icon.bookmarkactive : icon.bookmarkinactive}
                style={{ height: 24, width: 24 }}
                resizeMode="contain"
              />
            );
          } else {
            return (
              <Image
                source={focused ? icon.accountactive : icon.accountinactive}
                style={{ height: 24, width: 24 }}
                resizeMode="contain"
              />
            );
          }
        },
      })}
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
