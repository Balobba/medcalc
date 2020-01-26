import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";

const ChadVascScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <Text>ChadVascScreen.js</Text>
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

export default ChadVascScreen;
