import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import TestScreen from "../screens/TestScreen";
import AboutScreen from "../screens/AboutScreen";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import DropScreen from "../screens/DropScreen";
import ApgarScreen from "../screens/ApgarScreen";

import PromilleScreen from "../screens/PromilleScreen";
import DVTscoreScreen from "../screens/DVTscoreScreen";
import ChadVascScreen from "../screens/ChadVascScreen";

const RootDrawerNavigator = createDrawerNavigator(
  {
    ChadVasc: {
      screen: ChadVascScreen,
      navigationOptions: {
        drawerIcon: () => (
          <MaterialIcons name="accessibility" size={20} style={styles.icons} />
        ),
        title: "CHA2DS2-VASc"
      }
    },
    Apgar: {
      screen: ApgarScreen,
      navigationOptions: {
        drawerIcon: () => (
          <MaterialIcons name="accessibility" size={20} style={styles.icons} />
        ),
        title: "Apgar"
      }
    },
    Dropptakt: {
      screen: DropScreen,
      navigationOptions: {
        drawerIcon: () => (
          <MaterialIcons name="accessibility" size={20} style={styles.icons} />
        ),
        title: "Dropptakt"
      }
    },

    DVTscore: {
      screen: DVTscoreScreen,
      navigationOptions: {
        drawerIcon: () => (
          <MaterialIcons name="accessibility" size={20} style={styles.icons} />
        ),
        title: "DVT-Score"
      }
    },
    Promille: {
      screen: PromilleScreen,
      navigationOptions: {
        drawerIcon: () => (
          <MaterialIcons name="accessibility" size={20} style={styles.icons} />
        ),
        title: "Promillehalt"
      }
    },

    Test: {
      screen: TestScreen,
      navigationOptions: {
        drawerIcon: () => (
          <MaterialIcons name="accessibility" size={20} style={styles.icons} />
        )
        //title: "Dropptakt"
      }
    },
    About: {
      screen: AboutScreen,
      navigationOptions: {
        drawerIcon: () => (
          <MaterialIcons name="info" size={20} style={styles.icons} />
        ),
        title: "Om"
      }
    }
  },
  { contentOptions: { activeTintColor: "#ff5252" } }
);

export default createAppContainer(RootDrawerNavigator);

const styles = StyleSheet.create({
  icons: {
    color: "#ff5252"
  }
});
