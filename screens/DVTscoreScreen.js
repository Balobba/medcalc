import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";

const DVTscoreScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <Text>DVTscoreScreen.js</Text>
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

export default DVTscoreScreen;
