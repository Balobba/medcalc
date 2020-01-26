import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";

const ApgarScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <Text>ApgarScreen.js</Text>
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

export default ApgarScreen;
