import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Navigator from './navigation/drawer.js';
StatusBar.setHidden(true);
export default function App() {
  return <Navigator />;
}
