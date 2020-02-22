import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Picker,
  Platform,
  ScrollView
} from 'react-native';
import Header from '../components/Header';

const Promille = ({ navigation }) => {
  const [ethanol, setEthanol] = useState();
  const [sampletype, setSampletype] = useState();
  const [unit, setUnit] = useState();

  const calculateAlcoholLevel = () => {
    let res = 0;
    //Math.round((20 * parseInt(ethanol) * 1000) / 60 / parseInt(time));

    if (sampletype == 'Blood') {
      res = (ethanol * 0.046) / 1.055;
    } else {
      res = ((ethanol / 1.16) * 0.046) / 1.055 - 0.00163;
    }

    if (!res || res == Infinity || ethanol == Infinity || !ethanol) {
      return '';
    } else {
      return res.toFixed(3) + '‰';
    }
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={styles.container}
    >
      <Header navigation={navigation} />

      <Text>Etanol (i mg etanol per g helblod):</Text>

      <TextInput
        keyboardType="numeric"
        maxLength={10}
        style={styles.ethanolField}
        onChangeText={ethanol => setEthanol(ethanol.replace(/[^0-9]/g, ''))}
        ethanol={ethanol}
      />

      <Picker
        selectedValue={sampletype}
        style={styles.picker}
        onValueChange={sampleValue => {
          setSampletype(sampleValue);
        }}
      >
        <Picker.Item label="Serum" value="Serum" />
        <Picker.Item label="Plasma" value="Plasma" />
        <Picker.Item label="Blood" value="Blood" />
      </Picker>

      <Picker
        selectedValue={unit}
        style={styles.picker}
        onValueChange={unitValue => {
          setUnit(unitValue);
        }}
      >
        <Picker.Item label="mmol/L" value="mmol/L" />
        <Picker.Item label="mg/ml" value="mg/ml" />
      </Picker>

      <View style={styles.resultView}>
        <Text>Klinisk: {calculateAlcoholLevel()}</Text>
        <Text>Rättslig: {calculateAlcoholLevel()}</Text>
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
  ethanolField: { height: 40, borderColor: 'gray', borderWidth: 1, width: 200 },
  picker: {
    height: 50,
    width: 150,
    marginBottom: Platform.OS === 'ios' ? 50 : 0
  },
  resultView: {
    marginTop: Platform.OS === 'ios' ? 150 : 0
  }
});

export default Promille;
