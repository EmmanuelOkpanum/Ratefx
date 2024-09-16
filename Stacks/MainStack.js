import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "../Pages/Main";
import Exchange from "../Pages/Exchange";

const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen name="Exchange" component={Exchange} />
    </Tab.Navigator>
  );
};

export default MainStack;
