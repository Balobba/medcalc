import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import TestScreen from '../screens/TestScreen';
import AboutScreen from '../screens/AboutScreen';
import {
  MaterialIcons,
  FontAwesome,
  MaterialCommunityIcons,
  Entypo
} from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import DropScreen from '../screens/DropScreen';
import ApgarScreen from '../screens/ApgarScreen';

import PromilleScreen from '../screens/PromilleScreen';
import DVTscoreScreen from '../screens/DVTscoreScreen';
import ChadVascScreen from '../screens/ChadVascScreen';

const RootDrawerNavigator = createDrawerNavigator(
  {
    Apgar: {
      screen: ApgarScreen,
      navigationOptions: {
        drawerIcon: () => (
          //<MaterialIcons name="accessibility" size={20} style={styles.icons} />
          <MaterialCommunityIcons name="baby" size={20} style={styles.icons} />
        ),
        title: 'Apgar'
      }
    },
    'CHA2DS2-VASc': {
      screen: ChadVascScreen,
      navigationOptions: {
        drawerIcon: () => (
          <MaterialCommunityIcons name="brain" size={20} style={styles.icons} />
        ),
        title: 'CHA2DS2-VASc'
      }
    },

    Dropptakt: {
      screen: DropScreen,
      navigationOptions: {
        drawerIcon: () => <Entypo name="drop" size={20} style={styles.icons} />,
        title: 'Dropptakt'
      }
    },
    'DVT-Score': {
      screen: DVTscoreScreen,
      navigationOptions: {
        drawerIcon: () => (
          <MaterialIcons name="accessibility" size={20} style={styles.icons} />
        ),
        title: 'DVT-Score'
      }
    },
    Promillehalt: {
      screen: PromilleScreen,
      navigationOptions: {
        drawerIcon: () => (
          <MaterialIcons name="local-drink" size={20} style={styles.icons} />
        ),
        title: 'Promillehalt'
      }
    },

    // Test: {
    //   screen: TestScreen,
    //   navigationOptions: {
    //     drawerIcon: () => (
    //       <MaterialIcons name="accessibility" size={20} style={styles.icons} />
    //     )
    //     //title: "Dropptakt"
    //   }
    // },
    Om: {
      screen: AboutScreen,
      navigationOptions: {
        drawerIcon: () => (
          <MaterialIcons name="info" size={20} style={styles.icons} />
        ),
        title: 'Om'
      }
    }
  },
  { contentOptions: { activeTintColor: '#ff5252' } }
);

export default createAppContainer(RootDrawerNavigator);

const styles = StyleSheet.create({
  icons: {
    color: '#ff5252'
  }
});
