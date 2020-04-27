import React, { useCallback } from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import Header from '../components/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Passes navigation prop to Header component

const AboutScreen = ({ navigation }) => {
  const openLink = useCallback(() => {
    Linking.openURL('http://icd.internetmedicin.se/kalkylator');
  }, []);

  return (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        headerColor={'#ff5252'}
        burgerColor={'#ffffff'}
        headerTextColor={'#ffffff'}
        style={{ flex: 1 }}
      />
      <View style={styles.textContainer}>
        <Text style={[styles.bodyText]}>Medicinsk källa finns på</Text>
        <TouchableOpacity onPress={openLink}>
          <Text style={[styles.bodyText, styles.textLink]}>
            http://icd.internetmedicin.se/kalkylator
          </Text>
        </TouchableOpacity>
        <Text style={[styles.bodyText, styles.textSource]}>
          Tack till "Freepik" från Flaticon
        </Text>
      </View>
      <View style={styles.authorContainer}>
        <Text style={[styles.bodyText, styles.textAuthor]}>
          <MaterialCommunityIcons
            name="code-tags"
            size={20}
            style={styles.icons}
          />
          Oscar Magnusson
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff5252',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    padding: 10,
  },
  bodyText: {
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 18,
  },
  textLink: {
    alignSelf: 'center',
    textDecorationLine: 'underline',
  },
  textSource: {
    marginTop: 30,
  },

  icons: {
    color: '#ffffff',
    alignSelf: 'center',
    fontSize: 10,
  },
  textAuthor: {
    fontSize: 10,
  },
  authorContainer: {
    position: 'absolute',
    bottom: 10,
  },
});

export default AboutScreen;
