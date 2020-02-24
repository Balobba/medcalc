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

  const calculateAlcoholLevel = () => {
    let resClinic = 0;
    let resLegal = 0;

    //Math.round((20 * parseInt(ethanol) * 1000) / 60 / parseInt(time));
    let kClinic = 1.16;
    let kLegal = 1.16 + 2 * 0.0163;

    if (sampletype == 'Blood') {
      resClinic = (ethanol * 0.046) / 1.055;
      resLegal = (ethanol * 0.046) / 1.055;
    } else {
      resClinic = ((ethanol / kClinic) * 0.046) / 1.055; //- 0.00163;

      resLegal = ((ethanol / kLegal) * 0.046) / 1.055; //- 0.00163;
    }

    if (
      !resClinic ||
      resClinic == Infinity ||
      ethanol == Infinity ||
      !ethanol ||
      !resLegal ||
      resLegal == Infinity
    ) {
      return '';
    } else {
      return [resClinic.toFixed(3) + '‰', resLegal.toFixed(3) + '‰'];
    }
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={styles.container}
      scrollEnabled={false}
    >
      <Header navigation={navigation} />

      <View style={styles.ethanolContainer}>
        <Text style={styles.ethanolText}>
          Etanol (i mg etanol per g helblod):
        </Text>

        <TextInput
          keyboardType="numeric"
          placeholder='Skriv ett värde, exempelvis "25"'
          maxLength={10}
          style={styles.ethanolField}
          onChangeText={ethanol => setEthanol(ethanol.replace(/[^0-9]/g, ''))}
          ethanol={ethanol}
        />
      </View>

      <View style={styles.pickerContainer}>
        <Text style={styles.pickerText}>Provtyp (Serum/Plasma/Blod):</Text>
        <Picker
          selectedValue={sampletype}
          style={styles.picker}
          onValueChange={sampleValue => {
            setSampletype(sampleValue);
          }}
        >
          <Picker.Item label="Serum" value="Serum" />
          <Picker.Item label="Plasma" value="Plasma" />
          <Picker.Item label="Blod" value="Blood" />
        </Picker>
      </View>

      <View style={styles.resultView}>
        <View style={styles.resultContainerClinic}>
          <Text style={styles.resText}>Klinisk: </Text>
          <Text style={styles.resNumberText}>{calculateAlcoholLevel()[0]}</Text>
        </View>
        <View style={styles.resultContainerLegal}>
          <Text style={styles.resText}>Rättslig: </Text>
          <Text style={styles.resNumberText}>{calculateAlcoholLevel()[1]}</Text>
        </View>
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
  ethanolText: {
    textAlign: 'center',
    fontSize: 20
  },
  ethanolContainer: {
    flex: 1,
    paddingTop: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  ethanolField: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 250,
    textAlign: 'center',
    marginTop: 10
  },
  pickerText: {
    textAlign: 'center',
    fontSize: 20
  },
  picker: {
    height: 50,
    width: 150,
    marginBottom: Platform.OS === 'ios' ? 100 : 0
  },
  pickerContainer: {
    flex: 1,
    paddingTop: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  resultView: {
    marginTop: Platform.OS === 'ios' ? 150 : 0,
    paddingTop: 100,
    flex: 3
  },
  resText: { fontSize: 30, fontWeight: 'normal', color: '#000' },
  resNumberText: { fontSize: 40, fontWeight: 'bold', color: '#ff5252' },
  resultContainerClinic: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  resultContainerLegal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Promille;
