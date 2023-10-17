import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={Home} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
