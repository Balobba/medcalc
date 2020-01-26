import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";

const TestScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <Text>TestScreen.js</Text>
      <Text>This is a template page for testing stuff! {":)"} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default TestScreen;
