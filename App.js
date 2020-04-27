import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Navigator from './navigation/drawer.js';
import { SafeAreaView } from 'react-navigation';
StatusBar.setHidden(true);
export default function App() {
  return (
    <SafeAreaView style={styles.app}>
      <Navigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
