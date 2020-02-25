import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ navigation }) => {
  const openMenu = () => {
    // Open drawer with the navigation prop
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={36}
        style={styles.burger}
        onPress={openMenu}
      />
      <Text style={styles.headerTitle}>{navigation.state.routeName}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    left: 0,
    top: 0,
    position: 'absolute'
  },
  burger: {
    position: 'absolute',
    left: 8,
    top: 8
  },
  headerTitle: {
    alignSelf: 'center',
    fontSize: 24,
    marginTop: 10
  }
});
