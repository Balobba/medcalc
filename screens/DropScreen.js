import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import Header from '../components/Header';

// Passes navigation prop to Header component

const DropScreen = ({ navigation }) => {
  const [amount, setAmount] = useState();
  const [time, setTime] = useState();

  const calculateDropValue = () => {
    let res = Math.round((20 * parseInt(amount) * 1000) / 60 / parseInt(time));
    if (
      !res ||
      res == Infinity ||
      amount == Infinity ||
      !amount ||
      !time ||
      time == Infinity
    ) {
      return '';
    } else {
      return res.toString() + ' droppar per milliliter';
    }
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={styles.container}
      scrollEnabled={false}
    >
      <Header navigation={navigation} />
      <View style={styles.inputContainer}>
        <Text style={styles.fieldText}>Mängd (L):</Text>
        <TextInput
          keyboardType="numeric"
          maxLength={10}
          placeholder='Skriv ett värde, exempelvis "25"'
          style={styles.amountField}
          onChangeText={amount => setAmount(amount.replace(/[^0-9]/g, ''))}
          amount={amount}
        />

        <Text style={styles.fieldText}>Tid (h):</Text>
        <TextInput
          keyboardType="numeric"
          maxLength={10}
          placeholder='Skriv ett värde, exempelvis "25"'
          style={styles.amountField}
          onChangeText={time => setTime(time.replace(/[^0-9]/g, ''))}
          time={time}
        />
      </View>
      <View style={styles.resContainer}>
        <Text style={styles.resNumberText}>{calculateDropValue()}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  amountField: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 250,
    textAlign: 'center',
    marginTop: 10
  },
  fieldText: {
    textAlign: 'center',
    fontSize: 20,
    padding: 4
  },
  inputContainer: {
    paddingTop: 100,
    flex: 3
  },
  resContainer: {
    flex: 3,
    alignItems: 'center'
  },
  resNumberText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff5252'
  }
});

export default DropScreen;
