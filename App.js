import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import HomeStack from "./Stacks/HomeStack";

import { StatusBar } from "react-native";

import styles from "./styling/styles";

const App = () => {
  return (
    <NavigationContainer>
            <StatusBar
        barStyle="light-content"
      />
      <HomeStack />
    </NavigationContainer>
  );
};

export default App;
