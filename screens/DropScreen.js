import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Header from '../components/Header';

// Passes navigation prop to Header component

const DropScreen = ({ navigation }) => {
  const [amount, setAmount] = useState();
  const [time, setTime] = useState();

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <Text>DropScreen.js</Text>

      <Text>Mängd (L):</Text>
      <TextInput
        keyboardType="numeric"
        maxLength={10}
        style={styles.amountField}
        onChangeText={amount => setAmount(amount.replace(/[^0-9]/g, ''))}
        amount={amount}
      />

      <Text>Tid (h):</Text>
      <TextInput
        keyboardType="number-pad"
        maxLength={10}
        style={styles.amountField}
        onChangeText={time => setTime(time.replace(/[^0-9]/g, ''))}
        time={time}
      />

      <View>
        <Text>
          {' '}
          {amount} : {time}{' '}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  amountField: { height: 40, borderColor: 'gray', borderWidth: 1, width: 200 }
});

export default DropScreen;
